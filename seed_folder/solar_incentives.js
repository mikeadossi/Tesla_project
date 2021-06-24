var AZ = { 
    max_bill_to_max_panel_kWh_production: { 100 : 13 }, // For example: in NY State $100 max = 13 kWh/day, $200 = 26 kWh/day, etc
    panel_kWh_recommendation: { 15 : [4.08, 10, 15, "12 panels"] }, // anything 15kWh or less gives 4.08 // TODO: provide remaining
    powerwall_number_recommendation: { 4.08 : 2 }, // for each size there is a recommendation
    incentives: {
        utility: {
            panel: null,
            roof: null,
            powerwall: [
                "Salt River Project": [{
                    incentive_details: {
                        incentive_type: ["discount_per_kW", "discount_dollar_limit_DE"],
                        description: "Salt River Project offers up to $3,600 for the installation of a Powerwall (filed on behalf of the customer)",
                        link: ["Salt River Project","https://www.srpnet.com/electric/home/batterystorage/default.aspx"],
                    }, 
                    plain_discount: null,
                    percent_discount_MY: null,
                    discount_per_kW: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit_DE: null, 
                    alternate_dollar_per_kw: null,
                }],
            ],
        }, // end of utility 
        state: {
            panel: [
                {
                    incentive_details: {
                        incentive_type: ["plain_discount"], // system of recognizing types of discounts.
                        description: "Up to $1,000 state tax credit",
                        link: [],
                    },
                    plain_discount: 1000,
                    percent_discount_MY: null,
                    discount_per_kW: null,
                    percent_of_system_cost: null,
                    discount_dollar_limit_DE: null, 
                    alternate_dollar_per_kw: null,
                    flat_discount_MY: null,
                }, 
            ], // end of panel
            roof: [], // end of roof
            powerwall: [] // end of powerwall
        } // end of state object
    }
}
