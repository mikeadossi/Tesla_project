const getLoanMonthlyPymt = (principal, annualInterestRate, numOfPymts) => { 
    // principal * ( effectiveInterestRate / (1 - (1 + effectiveInterestRate)^-numOfPymts))
    const effectiveInterestRate = annualInterestRate / 100 / 12;
    const onePlusEIR = 1 + effectiveInterestRate;
    const x = Math.pow(onePlusEIR, -numOfPymts);
    const denominator = 1 - x;
    const y = effectiveInterestRate / denominator;
    return Math.round(principal * y);
};

export default getLoanMonthlyPymt;