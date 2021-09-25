const setFormInputs = (activeFormVals, setActiveFormVals, annualMiles, leaseTerm, loanTerm) => {

    let obj = { ...activeFormVals };
    obj["annualMiles"] = annualMiles;
    obj["leaseTerm"] = leaseTerm;
    obj["loanTerm"] = loanTerm;
    console.log('obj- ',obj)
    setActiveFormVals(obj); 
};

export default setFormInputs;
