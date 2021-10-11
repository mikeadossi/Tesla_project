import getLoanMonthlyPymt from "./getLoanMonthlyPymt";
const _ = require('lodash');

const populatePaymentObject = (
  configuredPrice, 
  paymentObj, 
  submittedCashDown,
  ) => { 

  // handle deep copy on all (relevant) nested objects w/ spread operator
  let modelPaymentObj = _.cloneDeep(paymentObj);

  const docFee = modelPaymentObj["docFee"];
  const adjustments = modelPaymentObj["adjustments"];
  const stateTotalFees = modelPaymentObj["stateTotalFees"];
  const stateTaxRate = modelPaymentObj["taxRate"];
  let modelTax = (stateTaxRate / 100) * configuredPrice;
  modelTax = Math.floor(modelTax);
  const orderPymt = modelPaymentObj["orderPymt"];
  const orderFeeTax = (stateTaxRate / 100) * orderPymt;
  const stateDestinationFee = modelPaymentObj["stateDestinationFee"];
  const stateDocumentationFee = modelPaymentObj["stateDocumentationFee"];
  const tradeInEquity = modelPaymentObj["tradeInEquity"]; 

  // get non cash credit sum
  const nonCashCreditsArr = modelPaymentObj["nonCashCreditsArr"];
  let credits = 0;

  for (let i = 0; i < nonCashCreditsArr.length; i++) {
    credits += nonCashCreditsArr[i]["amt"];
  }

  modelPaymentObj["nonCashCredit"] = credits;

  // get cashDueAtDelivery
  let allFees =
    modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee + stateTotalFees;
  let carCostB4Credits =
    configuredPrice + docFee + allFees;
  let carCost =
    carCostB4Credits - credits - orderPymt - adjustments - tradeInEquity; 
  carCost = Math.floor(carCost);

  modelPaymentObj["modelTax"] = modelTax;
  modelPaymentObj["orderFeeTax"] = orderFeeTax;
  modelPaymentObj["stateSalesTax"] = Math.floor(allFees); // stateSalesTax is badly named
  modelPaymentObj["cashDueAtDelivery"] = carCost;

  // get loan monthly payment
  let downPymt; 
  if(submittedCashDown){ 
    downPymt = JSON.parse(submittedCashDown);
  } else {
    downPymt = configuredPrice / 10;
  };

  let amtFinanced;

  if(carCost > 0 && downPymt > carCost){
    downPymt = carCost; // ensures amtFinanced equals 0
  } else if(carCost < 0){
    downPymt = 0;
    amtFinanced = 0;
  } else {
    amtFinanced = carCost - downPymt;
  };

  const loanApr = modelPaymentObj["finance"]["loanApr"];
  let loanTerm = modelPaymentObj["finance"]["loanTerm"];

  modelPaymentObj["finance"]["monthlyPymt"] = getLoanMonthlyPymt(
    amtFinanced,
    loanApr,
    loanTerm
  );
  modelPaymentObj["finance"]["dueAtDelivery"] = downPymt; 
  modelPaymentObj["finance"]["amtFinanced"] = amtFinanced;



  // get lease cash down payment
  modelPaymentObj["cashDownPymt"] = downPymt;

  // get lease money factor
  let leaseIntRate = modelPaymentObj["lease"]["leaseInterestRate"];
  let leaseIntRatePercent = leaseIntRate / 100;
  const moneyFactor = leaseIntRatePercent / 24;
  modelPaymentObj["lease"]["moneyFactor"] = moneyFactor;

  // get lease monthly payment
  let leaseTerm = modelPaymentObj["lease"]["leaseTerm"]; // ex: 36 
  let annualMiles = modelPaymentObj["lease"]["annualMiles"]; // ex: 10000

  const acquisitionFee = modelPaymentObj["lease"]["acquisitionFee"];
  let residualValue = carCostB4Credits * 0.64; 
  if(annualMiles === 12000){
    residualValue *= 0.9889; // arbitrary 
  } else if(annualMiles === 15000){ 
    residualValue *= 0.981; // arbitrary
  }

  let netCapitalizedCost = 
    (configuredPrice - tradeInEquity) + docFee + acquisitionFee + stateTotalFees;
  netCapitalizedCost = netCapitalizedCost - downPymt - credits - orderPymt;
  const depreciationFee = (netCapitalizedCost - residualValue) / leaseTerm;
  const financeFee = (netCapitalizedCost + residualValue) * moneyFactor;
  const salesTax = (depreciationFee + financeFee) * stateTaxRate;
  let monthlyLeasePymt = depreciationFee + financeFee + salesTax;

  if(monthlyLeasePymt < 0){
    monthlyLeasePymt = 0;
  };
  
  modelPaymentObj["lease"]["monthlyPymt"] = monthlyLeasePymt;

  // get lease due at delivery
  const upfrontSalesTax = modelPaymentObj["lease"]["upfrontTaxAmt"];
  let leaseDueAtDelivery =
    downPymt +
    monthlyLeasePymt +
    acquisitionFee +
    upfrontSalesTax +
    stateTotalFees;
  leaseDueAtDelivery = leaseDueAtDelivery - orderPymt - credits;

  if(leaseDueAtDelivery < 0){
    leaseDueAtDelivery = 0;
  };

  modelPaymentObj["lease"]["dueAtDelivery"] = leaseDueAtDelivery;
  modelPaymentObj["lease"]["residualValue"] = residualValue;
  modelPaymentObj["lease"]["annualMiles"] = annualMiles;

  return modelPaymentObj;
};

export default populatePaymentObject;
