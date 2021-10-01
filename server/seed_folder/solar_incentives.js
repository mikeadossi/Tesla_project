// delete me!
var AZ = { 
    max_bill_to_max_panel_kWh_production: { 100 : 13 }, // For example: in NY State $100 max = 13 kWh/day, $200 = 26 kWh/day, etc
    panel_kWh_recommendation: { 15 : [4.08, 10, 15, "12 panels"] }, // anything 15kWh or less gives 4.08 
    powerwall_number_recommendation: { 4.08 : 2 }, // for each size there is a recommendation
    incentives: {
        utility: { //-C2
            panel: null,
            roof: null,
            powerwall: [
                "Salt River Project": [{
                    incentive_details: {
                        incentive_type: ["plain_discount"],
                        description: "Salt River Project offers up to $3,600 for the installation of a Powerwall (filed on behalf of the customer)", 
                        link: ["Salt River Project","https://www.srpnet.com/electric/home/batterystorage/default.aspx"],
                    },
                    plain_discount: 3600,
                    percent_discount_MY: null,
                    discount_per_kW: null,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                }],
            ],
        },
        state: { //-C2
            panel: [
                {
                    incentive_details: {
                        incentive_type: ["plain_discount"],
                        description: "Up to $1,000 state tax credit", 
                        link: [],
                    },
                    plain_discount: 1000,
                    percent_discount_MY: null,
                    discount_per_kW: null,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                    flat_discount_MY: null,
                }, 
            ],
            roof: [],
            powerwall: []
        }
    }
}

var CA = {
    max_bill_to_max_panel_kWh_production: { 100 : 13 }, // For example: in NY State $100 max = 13 kWh/day, $200 = 26 kWh/day, etc
    panel_kWh_recommendation: { 15 : [4.08, 10, 15, "12 panels"] }, // anything 15kWh or less gives 4.08 
    powerwall_number_recommendation: { 4.08 : 2 }, // for each size there is a recommendation
    incentives: {
        utility: { //-C2
            "Anaheim Public Utilities": [{
                incentive_details: {
                    incentive_type: ["plain_discount"],
                    description: "offers up to $2,500 for the installation of a Powerwall (filed on behalf of the customer)",
                    link: [],
                },
                plain_discount: 2500,
                percent_discount_MY: null,
                discount_per_kW: n
                discount_per_watt: null,ull,
                percent_of_system_cost: null,
                discount_dollar_limit: null, 
                discount_per_given_kW: null,
            }],
            "Glendale Public Utilities": [{
                incentive_details: {
                    incentive_type: ["discount_per_kW"],
                    description: "offers $250 per kW (filed on behalf of the customer)",
                    link: [],
                },
                plain_discount: null,
                percent_discount_MY: null,
                discount_per_kW: 
                discount_per_watt: null,250,
                percent_of_system_cost: null,
                discount_dollar_limit: null, 
                discount_per_given_kW: null, 
                flat_discount_MY: null,
            }],
            "Pacific Gas and Electric": [{
                incentive_details: {
                    incentive_type: ["discount_per_kW"], 
                    description: "customers can earn $60 per kW off the cash or loan price of solar panels or Solar Roof by trading their Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)",
                    link: [],
                },
                plain_discount: null,
                percent_discount_MY: null,
                discount_per_kW:
                discount_per_watt: null, 60,
                percent_of_system_cost: null,
                discount_dollar_limit: null, 
                discount_per_given_kW: null,
                flat_discount_MY: null,
            }],
            "Southern California Edison": [{
                incentive_details: {
                    incentive_type: ["discount_per_kW"], 
                    description: "customers can earn $60 per kW off the cash or loan price of solar panels or Solar Roof by trading their Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)",
                    link: [],
                },
                plain_discount: null,
                percent_discount_MY: null,
                discount_per_kW:
                discount_per_watt: null, 60,
                percent_of_system_cost: null,
                discount_dollar_limit: null, 
                discount_per_given_kW: null,
                flat_discount_MY: null,
            }],
            "San Diego Gas & Electric": [{
                incentive_details: {
                    incentive_type: ["discount_per_kW"], 
                    description: "customers can earn $60 per kW off the cash or loan price of solar panels or Solar Roof by trading their Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)",
                    link: [],
                },
                plain_discount: null,
                percent_discount_MY: null,
                discount_per_kW:
                discount_per_watt: null, 60,
                percent_of_system_cost: null,
                discount_dollar_limit: null, 
                discount_per_given_kW: null,
                flat_discount_MY: null,
            }],
        }, 
        state: {
            panel: [
                { //-C3
                    incentive_details: {
                        incentive_type: [""],
                        description: "Up to $250 per kW PTC",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: 250,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                },
                { //-C9
                    incentive_details: {
                     
                     discount_per_watt: null,   incentive_type: ["percent_of_system_cost", "discount_per_given_kW"],
                        description: "State tax credit equal to the lesser of 35% of actual system cost or $5,000 per 5 kW",
                        link: [],
                    }, 
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: 250,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                },
            ], // end of panel
            roof: [
                {
                    incentive_details: { 
                        incentive_type: ["discount_per_kW", "discount_dollar_limit"], 
                        description: "",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: 250,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                }
            ], // end of roof
            powerwall: [
                {
                    incentive_details: { 
                        incentive_type: null,
                        description: "See California Self-Generation Incentive Program (SGIP) (filed on behalf of the customer)",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: 250,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null,
                }
            ] // end of powerwall
        } // end of state object
    }
}

var CA = { //-C3 //-C4
    
    /*Powerwall: See California Self-Generation Incentive Program (SGIP) (filed on behalf of the customer)
    Anaheim Public Utilities offers up to $2,500 for the installation of a Powerwall (filed on behalf of the customer) 

    Glendale Public Utilities offers $250 per kW (filed on behalf of the customer) 
    
    PG&E, SCE, and SDG&E customers can earn $60 per kW off the cash or loan price of solar panels or Solar Roof by trading their Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}

var CO = { //-C5 //-C3

    /*Black Hills Energy offers a $0.03/kWh incentive for 10 years (filed on behalf of the customer)
    Fort Collins offers a $250/kW incentive up to $1,000 (filed on behalf of the customer)
    Colorado Springs offers an $80/kW incentive (filed on behalf of the customer)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var CT = { //-C3 //-C6 
    /*Solar: Up to $250 per kW PTC (filed on behalf of the customer)

    Norwich Public Utilities offers a $675/kW incentive up to 10 kW (filed on behalf of the customer)
    Powerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions (filed on behalf of the customer)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var DE = { //-C3

    /*Delmarva Power & Light offers a cash rebate to cover cost of solar installation equal to $700 per kW up to $6,000 (filed on behalf of the customer)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var FL = { //-C2
    /*Jacksonville Electric Authority (JEA) offers up to $4,000 for the installation of a Powerwall (filed on behalf of customer)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var GA = { //-C2
    /*Georgia Power offers a $250 rebate for EV home charging installation as well as reduced electricity rates based on time-of-use for EV owners (Expiring 12/31/21)*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var HI = { 
    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: [
                {
                    incentive_details: { //-C9
                        incentive_type: ["select_lesser_amt, percent_discount_MY, discount_per_given_kW"],
                        description: "Up to $250 per kW PTC",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: 35,
                    discount_per_kW: null,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null,
                    discount_per_given_kW: null,
                },
                {
                    incentive_details: { //-C6
                        incentive_type: null,
                        description: "Hawaiian Electric offers reduced electricity rates based on time-of-use for EV owners",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: null,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null,
                    discount_per_given_kW: null,
                }
            ],
            roof: [
                {
                    incentive_details: {
                        incentive_type: ["select_lesser_amt, percent_discount_MY, discount_per_given_kW"],
                        description: "Up to $250 per kW PTC",
                        link: [],
                    },
                    plain_discount: null,
                    percent_discount_MY: 35,
                    discount_per_kW: null,
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null,
                    discount_per_given_kW: [5000, 5], 
                }
            ],
            powerwall: null,
        }
    }
}
var ID = { //-C7
    /*Solar: State tax credit equal to 40% of installation cost up to $5,000 per year or $20,000 total*/

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var IL = {
    /*City of Naperville offers $30 per kW up to $3,000 (filed on behalf of customer)*/

    incentives: {
        utility: { //-C3
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var MY = { //-C1 //-C4 //-C7
    /*Solar: $1,000 per system (filed on behalf of the customer)
    Solar: Earn $170 per kW off the cash or loan price of solar panels and $140 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)
    Powerwall: State tax credit equal to 30% of installed cost up to $5,000 per property */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var MA = { //-C1 //-C6 //-C3 //-C8
    /* Solar: Up to $1,000 State Tax Credit 

    Solar: Earn hundreds of dollars annually by enrolling your solar system in the MA SMART program (filed on behalf of the customer)
    Powerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions (filed on behalf of the customer)

    Concord Municipal Light Plant offers a $625/kW incentive up to $3,125 (filed on behalf of the customer)
    Most MA municipal utilities are offering up to $1.20/Watt under the Municipal Light Plant Solar Rebate Program (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: [
                "Concord Municipal Light Plant": [{
                    incentive_details: {
                        incentive_type: ["discount_per_kW", "discount_dollar_limit"],
                        description: "Concord Municipal Light Plant offers a $625/kW incentive up to $3,125 (filed on behalf of the customer)",
                        link: [],
                    }, 
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: 250, 
                    discount_per_watt: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit: null, 
                    discount_per_given_kW: null
                }],
            ],
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var MI = { //-C5
    /* Xcel Energy offers a performance-based incentive for solar owners paying $0.07/kWh of solar production annually for up to 10 years (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var NV = { //-C1
    /* Powerwall: Up to $1,500 (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var NH = { //-C3
    /* Solar: Earn $100 per kW off the cash or loan price of solar panels or Solar Roof by trading your Solar Renewable Energy Credits (SREC) (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var NJ = { //-C4
    /* Solar: Earn $770 per kW off the cash or loan price of solar panels and $650 per kW off the cash or loan price of Solar Roof by trading your Transition Renewable Energy Credits (TREC) (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var NY = { //-C3
    /* Solar: Up to $350 per kW and up to $5,000 state tax credit
    Powerwall: NYSERDA offers $250 per kWh up to $6,250 to energy storage customers Long Island (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var OR = { //-C3
    /* Solar: $300 per kW up to $2,400 (filed on behalf of the customer)
    The City of Forest Grove offers a $500/kW incentive up to $1,000 (filed on behalf of the customer)
    Salem Electric offers a $300 per kW incentive up to $1,500 (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var PA = { //-C3 //-C6
    /*Solar: Earn $90 per kW off the cash or loan price of solar panels and $70 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC) (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var RI = { //-C3 //-C6
    /*Solar: Earn $100 per kW off the cash or loan price of solar panels or Solar Roof by trading your Solar Renewable Energy Credits (SREC) (filed on behalf of the customer)

    Powerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var SC = { //-C7
    /* Solar: State tax credit equal to 25% of installation cost up to $3,500 per year or $35,000 total */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var TX = { //-C2 //C-2

    /* Austin Energy offers a $2,500 residential rebate and performance incentives for eligible solar customers (filed on behalf of the customer)
    CPS Energy (City of San Antonio) offers a $2,500 residential rebate for eligible solar customers (filed on behalf of the customer)
    Additional utilities offering rebates: Garland Power & Light, Sunset Valley, Guadalupe Valley Electric */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var UT = { //-C1
    /* Solar: Up to $1,200 state tax credit */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var VT = { //-C5 
    /* Solar: $0.02 per kWh production incentive for 10 years (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var VA = { //-C6 
    /*Fairfax Solar Energy Equipment Tax Exemption
    Loudoun Solar Energy Equipment Tax Exemption */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}
var DC = { //-C3 
    /* Solar: Earn $1,020 per kW off the cash or loan price of solar panels and $850 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC) (filed on behalf of the customer) */

    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: null,
        },
        state: {
            panel: null,
            roof: null,
            powerwall: null,
        }
    }
}

