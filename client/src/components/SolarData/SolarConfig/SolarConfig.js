import React, { useState, useEffect } from "react";
import "./SolarConfig.css";
import SolarPanels from "../SolarPanels/SolarPanels";
import SolarRoof from "../SolarRoof/SolarRoof";
import SolarPowerWall from "../SolarPowerWall/SolarPowerWall";
import SolarAddProduct from "../SolarAddProduct/SolarAddProduct";

const SolarConfig = ({
  recommendedProducts,
  solarRecommendations,
  setRecommendedProducts,
  panelOptions,
  recommendedSize,
  powerwallPricing,
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

    console.log('purchaseObj.kWHperDay -- ',purchaseObj.kWHperDay)

    activePurchase.forEach(addUpPurchases); // loop on our array activePurchases
    console.log('activePurchase -- ',activePurchase)

    setSumPurchases(purchaseObj);
  };

  const removeFromActive = (v) => {
    const activeP = [...activePurchase];
    const indx = activeP.indexOf(v); 
    
    if (indx > -1) {
      activeP.splice(indx, 1);
    }
    setActivePurchase(activeP);
  }

  return (
    <div className="app_Config_container app_inlineFlex">
      <SolarPanels
        recommendedProducts={recommendedProducts}
        solarRecommendations={solarRecommendations}
        setRecommendedProducts={setRecommendedProducts}
        panelOptions={panelOptions}
        recommendedSize={recommendedSize}
        activePurchase={activePurchase}
        setActivePurchase={setActivePurchase}
        addFutureUserPurchases={addFutureUserPurchases}
        sumPurchases={sumPurchases}
        removeFromActive={removeFromActive}
      />
      <div className="app_config_border"></div>
      <SolarPowerWall
        recommendedProducts={recommendedProducts}
        activePurchase={activePurchase}
        setActivePurchase={setActivePurchase}
        sumPurchases={sumPurchases}
        powerwallPricing={powerwallPricing}
      />
    </div>
  );
};

export default SolarConfig;
