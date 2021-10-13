import React, { useState, useEffect } from "react";
import "./SolarConfig.css";
import SolarPanels from "../SolarPanels/SolarPanels";
import SolarPowerWall from "../SolarPowerWall/SolarPowerWall";
import SolarAddProduct from "../SolarAddProduct/SolarAddProduct";

const SolarConfig = ({
  recommendedProducts,
  solarRecommendations,
  setRecommendedProducts,
  panelOptions,
  recommendedSize,
  powerwallPricing,
  alertUser,
  setAlertUser,
  currentUser,
}) => {
  const [activePurchase, setActivePurchase] = useState([]);
  const [sumPurchases, setSumPurchases] = useState({
    kWHperDay: 0,
    kWHperMonth: 0,
    monthlyCost: 0,
    additional_mo_cost: 0,
  });

  const energyAppliance = {
    select_model3: {
      kWh_per_day: 5,
      kWh_per_mo: 140,
      additional_mo_cost: 20,
    },
    select_modelS: {
      kWh_per_day: 7.5,
      kWh_per_mo: 210,
      additional_mo_cost: 30,
    },
    select_modelX: {
      kWh_per_day: 7.5,
      kWh_per_mo: 210,
      additional_mo_cost: 30,
    },
    select_modelY: {
      kWh_per_day: 5,
      kWh_per_mo: 140,
      additional_mo_cost: 20,
    },
    select_electricWH: {
      kWh_per_day: 12.25,
      kWh_per_mo: 380,
      additional_mo_cost: 65,
    },
    select_heatPump50: {
      kWh_per_day: 2.48,
      kWh_per_mo: 77,
      additional_mo_cost: 10,
    },
    select_heatPump75: {
      kWh_per_day: 3.61,
      kWh_per_mo: 112,
      additional_mo_cost: 15,
    },
    select_instant110: {
      kWh_per_day: 12.25,
      kWh_per_mo: 380,
      additional_mo_cost: 65,
    },
    select_instant240: {
      kWh_per_day: 0.38,
      kWh_per_mo: 12,
      additional_mo_cost: 2,
    },
    select_energyStar14: {
      kWh_per_day: 1.11,
      kWh_per_mo: 34.5,
      additional_mo_cost: 5,
    },
    select_energyStar25: {
      kWh_per_day: 1.93,
      kWh_per_mo: 60,
      additional_mo_cost: 8,
    },
    select_refrigerator1996: {
      kWh_per_day: 4.83,
      kWh_per_mo: 150,
      additional_mo_cost: 20,
    },
    select_manualDefrost: {
      kWh_per_day: 2.9,
      kWh_per_mo: 90,
      additional_mo_cost: 12,
    },
  };
  // https://www.siliconvalleypower.com/residents/save-energy/appliance-energy-use-chart

  useEffect(() => {
    addFutureUserPurchases();
  }, [activePurchase]);

  const addFutureUserPurchases = () => {
    let purchaseObj = {
      kWHperDay: 0,
      kWHperMonth: 0,
      monthlyCost: 0,
    };

    const addUpPurchases = (item) => {
      purchaseObj.kWHperDay += energyAppliance[item]["kWh_per_day"];
      purchaseObj.kWHperMonth += energyAppliance[item]["kWh_per_mo"];
      purchaseObj.monthlyCost += energyAppliance[item]["additional_mo_cost"];
    };

    activePurchase.forEach(addUpPurchases); // loop on our array activePurchases
    setSumPurchases(purchaseObj);
  };

  const removeFromActive = (v) => {
    const activeP = [...activePurchase];
    const indx = activeP.indexOf(v);

    if (indx > -1) {
      activeP.splice(indx, 1);
    }
    setActivePurchase(activeP);
  };

  const loan_pymts = (cost) => {
    const r = 0.0299 / 12; // interest rate
    const percentageOfCost = cost * 0.1;
    const incentives = cost * 0.26;
    const solutions = [
      calculate_loan_pymts(r, cost, percentageOfCost, 0),
      calculate_loan_pymts(r, cost, percentageOfCost, incentives),
      percentageOfCost,
    ];
    return solutions;
  };

  const calculate_loan_pymts = (r, cost, percentageOfCost, incentives) => {
    const p = cost - percentageOfCost - incentives; // principal
    const n = 120; //payback period in months
    const y = Math.pow(1 + r, 120);
    const ry = r * y;
    const pry = p * ry;
    const result = pry / (y - 1);
    return result;
  };

  return (
    <div className="app_Config_container">
      <div className="app_displayFlex">
        <SolarPanels
          recommendedProducts={recommendedProducts}
          solarRecommendations={solarRecommendations}
          setRecommendedProducts={setRecommendedProducts}
          panelOptions={panelOptions}
          recommendedSize={recommendedSize}
          loan_pymts={loan_pymts}
          alertUser={alertUser} 
          setAlertUser={setAlertUser}
          currentUser={currentUser} 
        />
        <div className="app_config_border"></div>
        <SolarPowerWall
          recommendedProducts={recommendedProducts} 
          powerwallPricing={powerwallPricing} 
          loan_pymts={loan_pymts}
          alertUser={alertUser} 
          setAlertUser={setAlertUser}
          currentUser={currentUser}
        />
      </div>
      <SolarAddProduct
        setActivePurchase={setActivePurchase}
        activePurchase={activePurchase}
        sumPurchases={sumPurchases}
        removeFromActive={removeFromActive}
        currentUser={currentUser}
      />
    </div>
  );
};

export default SolarConfig;
