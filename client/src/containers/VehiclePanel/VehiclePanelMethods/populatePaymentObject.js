import getLoanMonthlyPymt from "./getLoanMonthlyPymt";

const populatePaymentObject = (configuredPrice, paymentObj) => {
  // handle deep copy on all (relevant) nested objects w/ spread operator
  let modelPaymentObj = {
    ...paymentObj,
    finance: {
      ...paymentObj["finance"],
    },
    lease: {
      ...paymentObj["lease"],
    },
    nonCashCreditsArr: [...paymentObj["nonCashCreditsArr"]],
  };

  const docFee = modelPaymentObj["docFee"];
  const adjustments = modelPaymentObj["adjustments"];
  const stateTotalFees = modelPaymentObj["stateTotalFees"]; // TODO: how do we get this #?
  const stateTaxRate = modelPaymentObj["taxRate"];
  const modelTax = (stateTaxRate / 100) * configuredPrice;
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
  let stateSalesTax =
    modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee;
  stateSalesTax = Math.floor(stateSalesTax * 100) / 100;
  let cashDueAtDelivery =
    configuredPrice + docFee + stateTotalFees + stateSalesTax;
  cashDueAtDelivery =
    cashDueAtDelivery - credits - orderPymt - tradeInEquity - adjustments;
  cashDueAtDelivery = Math.floor(cashDueAtDelivery);

  modelPaymentObj["modelTax"] = modelTax;
  modelPaymentObj["orderFeeTax"] = orderFeeTax;
  modelPaymentObj["stateSalesTax"] = stateSalesTax;
  modelPaymentObj["cashDueAtDelivery"] = cashDueAtDelivery;

  // get loan monthly payment
  const cashDownPymt = configuredPrice / 100;
  let financeDueAtDelivery = stateTotalFees + stateSalesTax + cashDownPymt;
  financeDueAtDelivery =
    financeDueAtDelivery - orderPymt - credits - tradeInEquity;
  financeDueAtDelivery = Math.floor(financeDueAtDelivery);
  let equity = 0;

  if (financeDueAtDelivery <= 0) {
    equity = financeDueAtDelivery; // this occurs if trade-in equity exceeds amt due
    financeDueAtDelivery = 0;
  }

  const amtFinanced = cashDueAtDelivery - financeDueAtDelivery - equity;
  const loanApr = modelPaymentObj["finance"]["loanApr"];
  const loanTerm = modelPaymentObj["finance"]["loanTerm"];

  modelPaymentObj["finance"]["monthlyPymt"] = getLoanMonthlyPymt(
    amtFinanced,
    loanApr,
    loanTerm
  );
  modelPaymentObj["finance"]["dueAtDelivery"] = financeDueAtDelivery;
  modelPaymentObj["finance"]["amtFinanced"] = amtFinanced;

  // get lease cash down payment
  modelPaymentObj["cashDownPymt"] = cashDownPymt;

  // get lease money factor
  let leaseIntRate = modelPaymentObj["lease"]["leaseInterestRate"];
  let leaseIntRatePercent = leaseIntRate / 100;
  const moneyFactor = leaseIntRatePercent / 24;
  modelPaymentObj["lease"]["moneyFactor"] = moneyFactor;

  // get lease monthly payment
  const leaseTerm = modelPaymentObj["lease"]["leaseTerm"]; // ex: 36
  const annualMiles = modelPaymentObj["lease"]["annualMiles"]; // ex: 10000 TODO: need to calculate this into price
  const acquisitionFee = modelPaymentObj["lease"]["acquisitionFee"]; // TODO: Does this change?
  const residualValue = cashDueAtDelivery * 0.64; // TODO: get correct residual value

  let netCapitalizedCost =
    configuredPrice + docFee + acquisitionFee + stateTotalFees;
  netCapitalizedCost = netCapitalizedCost - cashDownPymt - credits - orderPymt;
  const depreciationFee = (netCapitalizedCost - residualValue) / leaseTerm;
  const financeFee = (netCapitalizedCost + residualValue) * moneyFactor;
  const salesTax = (depreciationFee + financeFee) * stateTaxRate;
  const monthlyLeasePymt = depreciationFee + financeFee + salesTax;
  modelPaymentObj["lease"]["monthlyPymt"] = monthlyLeasePymt;

  // get lease due at delivery
  const upfrontSalesTax = modelPaymentObj["lease"]["upfrontTaxAmt"];
  let leaseDueAtDelivery =
    cashDownPymt +
    monthlyLeasePymt +
    acquisitionFee +
    upfrontSalesTax +
    stateTotalFees;
  leaseDueAtDelivery = leaseDueAtDelivery - orderPymt - credits;

  modelPaymentObj["lease"]["dueAtDelivery"] = leaseDueAtDelivery;
  modelPaymentObj["lease"]["residualValue"] = residualValue;
  modelPaymentObj["lease"]["annualMiles"] = annualMiles;

  return modelPaymentObj;
};

export default populatePaymentObject;
