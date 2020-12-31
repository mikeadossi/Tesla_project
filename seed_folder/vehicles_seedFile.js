module.exports = {


  model3: {
    default_optioned_vehicle: {
  model: "Model 3",
  battery: ["Standard Range","standard_battery",37990],
  vehicle_image: "model3_white_std_18",
  image_vehicle: "model3",
  image_paint: "_white",
  image_trim: "_std",
  image_wheels: "_18",
  paint: ["Pearl White","included"],
  wheel: ["18 inch Aero Wheels","included"],
  interior: ["All Black","black_interior","included"],
  layout: ["Five Seat Interior","5 seater","included"],
  autopilot: ["autopilot","included"],
  cashdown_pymt: "",
  tradein_value: "",
  tradein_payoff: "",
  tradein_equity: "",
  adjustments: "",
  finance_term: "36 months",
  lease_term: "24 months",
  lease_yearly_miles: "10000 miles",
  tow_hitch: null,
  order_payment: 100,
  apr: 2.49,
  lease_apr: "",
  cash_price: 37990,
  non_cash_credit: "",
  upfront_sales_tax: "",
  state_sales_tax: "",
  state_total_fees: "",
  money_factor: "", 
  residual_value: "",
  finance_monthly_payment: "",
  lease_monthly_payment: "",
  total_vehicle_price: "",
  miles_range: 263,
  mph: 140,
  zero_to_sixty_seconds: 5.3
}, 
    paint_options: {
      "Pearl White": {full_name: "Pearl White Multi-Coat", price: "included", image_paint: "_white"},
      "Solid Black": {full_name: "Solid Black", price: 1000, image_paint: "_black"},
      "Midnight Silver": {full_name: "Midnight Silver Metallic", price: 1000, image_paint: "_silver"},
      "Deep Blue": {full_name: "Deep Blue Metallic", price: 1000, image_paint: "_blue"},
      "Red Multicoat": {full_name: "Red Multi-Coat", price: 2000, image_paint: "_red"}
    },

    partial_premium_interior:
      "12-way power adjustable heated front seats <br/> Premium seat material and trim <br/> Upgraded audio – immersive sound <br/> Premium Connectivity (30 days included) <br/> Tinted glass roof with ultraviolet and infrared protection <br/> Power folding, heated side mirrors <br/> Music and media over Bluetooth® <br/> Custom driver profiles <br/> Center console with storage, 4 USB ports and wireless charging for 2 smartphones",

    premium_interior:
      "12-way power adjustable front seats <br/> Heated front and rear seats <br/> Premium audio – 14 speakers, 1 subwoofer, 2 amps and immersive sound <br/> Premium Connectivity (1 year included) <br/> LED fog lamps <br/> Interior floor mats <br/> Tinted glass roof with ultraviolet and infrared protection <br/> Power folding, heated side mirrors <br/> Music and media over Bluetooth® <br/> Custom driver profiles <br/> Center console with storage, 4 USB ports and wireless charging for 2 smartphones",

    model: "Model 3",

    standard_battery: {
      purchase_price: 37990,
      image_vehicle: "model3",
      image_trim: "_std",
      specs: {
        Battery: "Standard Range", 
        Acceleration: "5.3s 0-60 mph",
        Range: "263 miles",
        Drive: "Rear-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "18 inch or 19 inch",
        Weight: "3,582 lbs",
        Cargo: "15 cu ft",
        Displays: "15 inch Center Touchscreen",
        "Supercharger Max/Payment Type": "170 kW max; Pay Per Use",
        "Onboard Charger Max": "7.6 kW max (32A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/>Battery & Drive Unit - 8 years or 100,000 mi, whichever comes first",
      },
      miles_range: 263,
      topspeed_mph: 140,
      zero_to_sixty: 5.3,
      wheel: {
        "18 inch Aero Wheels": {
          range: null,
          price: "included",
          image_wheel: "_18",
          image_source: "model3_aero_18",
          availableOnBattery: ["off_menu","standard_battery","long_range"]
        },
        "19 inch Sport Wheels": { range: null, price: 1500, image_wheel: "_19", image_source: "model3_sport_19"}
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    off_menu: {      
      purchase_price: 35000,
      image_vehicle: "model3",
      image_trim: "_std",
      specs: {
        Battery: "Standard Range (Off Menu)",
        Acceleration: "5.3s 0-60 mph",
        Range: "220 miles",
        Drive: "Rear-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "18 inch or 19 inch",
        Weight: "3,582 lbs",
        Cargo: "15 cu ft",
        Displays: "15 inch Center Touchscreen",
        "Supercharger Max/Payment Type": "170 kW max; Pay Per Use",
        "Onoard Charger Max": "7.6 kW max (32A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/>Battery & Drive Unit - 8 years or 100,000 mi, whichever comes first",
      },
      miles_range: 220,
      topspeed_mph: 140,
      zero_to_sixty: 5.3,
      wheel: {
        "18 inch Aero Wheels": {
          range: null,
          price: "included",
          image_wheel: "_18",
          image_source: "model3_aero_18",
          availableOnBattery: ["off_menu","standard_battery","long_range"]
        },
        "19 inch Sport Wheels": { range: null, price: 1500, image_wheel: "_19", image_source: "model3_sport_19", availableOnBattery: ["off_menu","standard_battery","long_range"] },
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: {
        "No autopilot": null,
        autopilot: { price: 3000 },
        FSD: { price: 10000 },
      },
      tow_hitch: null,
    },

    long_range: {      
      purchase_price: 46990,
      image_vehicle: "model3",
      image_trim: "_std",
      specs: {
        Battery: "Long Range",
        Acceleration: "4.2s 0-60 mph",
        Range: "353 miles",
        Drive: "Dual Motor All-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "18 inch or 19 inch",
        Weight: "4,065 lbs",
        Cargo: "15 cu ft",
        Displays: "15 inch Center Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/> Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first",
      },
      miles_range: 353,
      topspeed_mph: 140,
      zero_to_sixty: 5.3,
      wheel: {
        "18 inch Aero Wheels": {
          range: null,
          price: "included",
          image_wheel: "_18",
          image_source: "model3_aero_18",
          availableOnBattery: ["off_menu","standard_battery","long_range"]
        },
        "19 inch Sport Wheels": { range: null, price: 1500, image_wheel: "_19", image_source: "model3_sport_19", availableOnBattery: ["off_menu","standard_battery","long_range"] },
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    performance: {      
      purchase_price: 54990,
      image_vehicle: "model3",
      image_trim: "_perf",
      specs: {
        Battery: "Performance",
        Acceleration: "3.1s 0-60 mph",
        Range: "315 miles",
        Drive: "Dual Motor All-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "20 inch",
        Weight: "4,065 lbs",
        Cargo: "15 cu ft",
        Displays: "15 inch Center Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/> Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first",
      },
      miles_range: 315,
      topspeed_mph: 162,
      zero_to_sixty: 3.1,
      wheel: {
        "20 inch Überturbine Wheels": { 
          range: null,
          price: "included",
          image_wheel: "_20",
          image_source: "model3_uberturbine_20",
          availableOnBattery: ["performance"]
        },
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    plaid: null,
  },

  modelS: {
    default_optioned_vehicle: {
      model: "Model S",
      battery: ["Long Range","long_range",69420],
      vehicle_image: "modelS_white_lr_19",
      image_vehicle: "modelS",
      image_paint: "_white",
      image_trim: "_lr",
      image_wheels: "_19",
      paint: ["Pearl White","included"],
      wheel: ["19 inch Tempest Wheels","included"],
      interior: ["All Black","ui_bundle_black","included"],
      layout: ["Five Seat Interior","5 Seater","included"],
      autopilot: ["autopilot","included"],
      cashdown_pymt: "",
      tradein_value: "",
      tradein_payoff: "",
      tradein_equity: "",
      adjustments: "",
      finance_term: "36 months",
      lease_term: "24 months",
      lease_yearly_miles: "10000 miles",
      tow_hitch: null,
      order_payment: 100,
      apr: 2.49,
      lease_apr: "",
      cash_price: 69420,
      non_cash_credit: "",
      upfront_sales_tax: "",
      state_sales_tax: "",
      state_total_fees: "",
      money_factor: "", 
      residual_value: "",
      finance_monthly_payment: "",
      lease_monthly_payment: "",
      total_vehicle_price: "",
      miles_range: 402,
      mph: 155,
      zero_to_sixty_seconds: 3.7
}, 
    paint_options: {
      "Pearl White": {full_name: "Pearl White Multi-Coat", price: "included", image_paint: "_white"},
      "Solid Black": {full_name: "Solid Black", price: 1000, image_paint: "_black"},
      "Midnight Silver": {full_name: "Midnight Silver Metallic", price: 1000, image_paint: "_silver"},
      "Deep Blue": {full_name: "Deep Blue Metallic", price: 1000, image_paint: "_blue"},
      "Red Multicoat": {full_name: "Red Multi-Coat", price: 2000, image_paint: "_red"}
    },

    partial_premium_interior: null,
    premium_interior:
      "Premium audio system specifically tuned for a Tesla’s ultra-quiet cabin <br/> Cold weather features including heated seats for every passenger, heated steering wheel, wiper blade defrosters and washer nozzle heaters <br/> HEPA air filtration system prevents viruses, bacteria and offensive odors from entering the cabin <br/> Premium Connectivity (1 year included) <br/> Music and media over Bluetooth® <br/> Location-aware automatic garage door opener <br/> LED fog lamps <br/> Tinted glass roof with ultraviolet and infrared protection <br/> Auto dimming, power folding, heated side mirrors <br/> Custom driver profiles <br/> Wireless phone charging in center console",

    model: "Model S",
    standard_battery: null,
    off_menu: null,

    long_range: {      
      purchase_price: 69420,
      image_vehicle: "modelS",
      image_trim: "_lr",
      specs: {
        Battery: "Long Range",
        Acceleration: "3.7 seconds 0-60 mph",
        Range: "402 miles (EPA est.)",
        Drive: "All-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "19” or 21”",
        Weight: "4,815 lbs",
        Cargo: "28 cu ft",
        Displays: "Driver Display + 17 inch Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 miles, whichever comes first <br/> Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first",
      },
      miles_range: 402,
      topspeed_mph: 155,
      zero_to_sixty: 3.7,
      wheel: {
        "19 inch Tempest Wheels": {
          range: null,
          price: "included",
          image_wheel: "_19",
          image_source: "modelS_tempest_19"
        },
        "21 inch Sonic Carbon Twin Turbine Wheels": {
          range: null,
          price: 4500,
          image_wheel: "_21",
          image_source: "modelS_sonic_21"
        },
      },
      interior: {
        "All Black": { price: "included", image: "ui_bundle_black" },
        "Black and White": { price: 1500, image: "ui_bundle_white" },
        Cream: { price: 1500, image: "ui_bundle_cream" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    performance: {      
      purchase_price: 91990,
      image_vehicle: "modelS",
      image_trim: "_perf",
      specs: {
        Battery: "Performance",
        Acceleration: "2.3 seconds 0-60 mph",
        Range: "387 miles (EPA est.)",
        Drive: "All-Wheel Drive",
        Seating: "5 Adults",
        Wheels: "19” or 21”",
        Weight: "4,929 lbs",
        Cargo: "28 cu ft",
        Displays: "Driver Display + 17 inch Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 miles, whichever comes first <br/> Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first",
      },
      miles_range: 334,
      topspeed_mph: 163,
      zero_to_sixty: 2.3,
      wheel: {
        "19 inch Tempest Wheels": {
          range: "Est. Range 387mi",
          price: "included",
          image_wheel: "_19",
          image_source: "modelS_tempest_19"
        },
        "21 inch Sonic Carbon Twin Turbine Wheels": {
          range: "Est. Range 334mi",
          price: 4500,
          image_wheel: "_21",
          image_source: "modelS_sonic_21"
        },
      },
      interior: {
        "All Black": { price: "included", image: "ui_bundle_black_cf" },
        "Black and White": { price: 1500, image: "ui_bundle_white_cf" },
        Cream: { price: 1500, image: "ui_bundle_cream" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    plaid: {      
      purchase_price: 139990,
      image_vehicle: "modelS",
      image_trim: "_perf",
      specs: {
        Battery: "Plaid"
      },
      miles_range: "520+",
      topspeed_mph: 200,
      zero_to_sixty: "<2.0",
      wheel: {
        "19 inch Tempest Wheels": {
          range: null,
          price: "included",
          image_wheel: "_19",
          image_source: "modelS_tempest_19"
        },
        "21 inch Sonic Carbon Twin Turbine Wheels": {
          range: null,
          price: 4500,
          image_wheel: "_21",
          image_source: "modelS_sonic_21"
        },
      },
      interior: {
        "All Black": { price: "included", image: "ui_bundle_black_cf" },
        "Black and White": { price: 1500, image: "ui_bundle_white_cf" },
        Cream: { price: 1500, image: "ui_bundle_cream" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },
  },

  modelX: {
    default_optioned_vehicle: {
      model: "Model X",
      battery: ["Long Range","long_range",74690],
      vehicle_image: "modelX_white_lr_20",
      image_vehicle: "modelX",
      image_paint: "_white",
      image_trim: "_lr",
      image_wheels: "_30",
      paint: ["Pearl White","included"],
      wheel: ["20 inch Silver Wheels","included"],
      interior: ["All Black","ui_bundle_black","included"],
      layout: ["Five Seat Interior","5 Seater","included"],
      autopilot: ["autopilot","included"],
      cashdown_pymt: "",
      tradein_value: "",
      tradein_payoff: "",
      tradein_equity: "",
      adjustments: "",
      finance_term: "36 months",
      lease_term: "24 months",
      lease_yearly_miles: "10000 miles",
      tow_hitch: null,
      order_payment: 100,
      apr: 2.49,
      lease_apr: "",
      cash_price: 74690,
      non_cash_credit: "",
      upfront_sales_tax: "",
      state_sales_tax: "",
      state_total_fees: "",
      money_factor: "", 
      residual_value: "",
      finance_monthly_payment: "",
      lease_monthly_payment: "",
      total_vehicle_price: "",
      miles_range: 371,
      mph: 155,
      zero_to_sixty_seconds: 4.4
}, 
    paint_options: {
      "Pearl White": {full_name: "Pearl White Multi-Coat", price: "included", image_paint: "_white"},
      "Solid Black": {full_name: "Solid Black", price: 1000, image_paint: "_black"},
      "Midnight Silver": {full_name: "Midnight Silver Metallic", price: 1000, image_paint: "_silver"},
      "Deep Blue": {full_name: "Deep Blue Metallic", price: 1000, image_paint: "_blue"},
      "Red Multicoat": {full_name: "Red Multi-Coat", price: 2000, image_paint: "_red"}
    },

    partial_premium_interior: null,
    premium_interior:
      "Premium audio system specifically tuned for a Tesla’s ultra-quiet cabin <br/> Cold weather features including heated seats for every passenger, heated steering wheel, wiper blade defrosters and washer nozzle heaters <br/> HEPA air filtration system prevents viruses, bacteria and offensive odors from entering the cabin <br/> Premium Connectivity (1 year included) <br/> Music and media over Bluetooth® <br/> Location-aware automatic garage door opener <br/> LED fog lamps <br/> Tinted glass roof with ultraviolet and infrared protection <br/> Auto dimming, power folding, heated side mirrors <br/> Custom driver profiles <br/> Wireless phone charging in center console",

    model: "Model X",
    standard_battery: null,
    off_menu: null,

    long_range: {      
      purchase_price: 79990,
      image_vehicle: "modelX",
      image_trim: "_lr",
      specs: {
        Battery: "Long Range",
        Acceleration: "4.4s 0-60 mph",
        Range: "371 miles (EPA est.)",
        Drive: "All-Wheel Drive",
        Seating: "Up to 7 Adults",
        Wheels: "20” or 22”",
        Weight: "5,437 lbs",
        Cargo: "88 cu ft",
        Displays: "Driver Display + 17 inch Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 miles, whichever comes first <br/> Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first",
      },
      miles_range: 371,
      topspeed_mph: 155,
      zero_to_sixty: 4.4,
      wheel: {
        "20 inch Silver Wheels": {
          range: null,
          price: "included",
          image_wheel: "_20",
          image_source: "modelX_silver_20"
        },
        "22 inch Onyx Black Wheels": {
          range: null,
          price: 5500,
          image_wheel: "_22",
          image_source: "modelX_onyx_22"
        },
      },
      interior: {
        "All Black": { price: "included", image: "ui_bundle_black" },
        "Black and White": { price: 1500, image: "ui_bundle_white" },
        Cream: { price: 1500, image: "ui_bundle_cream" },
      },
      layout: {
        "Five Seat Interior": { price: "included", altName: "5 Seater" },
        "Six Seat Interior": { price: 6500, altName: "6 Seater" },
        "Seven Seat Interior": { price: 3500, altName: "7 Seater" },
      },
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    performance: {      
      purchase_price: 99990,
      image_vehicle: "modelX",
      image_trim: "_perf",
      specs: {
        Battery: "Peformance",
        Acceleration: "2.6s 0-60 mph",
        Range: "341 miles (EPA est.)",
        Drive: "All-Wheel Drive",
        Seating: "Up to 7 Adults",
        Wheels: "20” or 22”",
        Weight: "5,498 lbs",
        Cargo: "88 cu ft",
        Displays: "Driver Display + 17 inch Touchscreen",
        "Supercharger Max/Payment Type": "250 kW max; Pay Per Use",
        "Onboard Charger Max": "11.5 kW max (48A)",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 miles, whichever comes first <br/> Battery & Drive Unit - 8 years or 150,000 miles, whichever comes first",
      },
      miles_range: 341,
      topspeed_mph: 163,
      zero_to_sixty: 2.6,
      wheel: {
        "20 inch Silver Wheels": {
          range: null,
          price: "included",
          image_wheel: "_20",
          image_source: "modelX_silver_20"
        },
        "22 inch Onyx Black Wheels": {
          range: null,
          price: 5500,
          image_wheel: "_22",
          image_source: "modelX_onyx_22"
        },
      },
      interior: {
        "All Black": { price: "included", image: "ui_bundle_black_cf" },
        "Black and White": { price: 1500, image: "ui_bundle_white_cf" },
        Cream: { price: 1500, image: "ui_bundle_cream" },
      },
      layout: {
        "Five Seat Interior": { price: "included", altName: "5 Seater" },
        "Six Seat Interior": { price: 6500, altName: "6 Seater" },
        "Seven Seat Interior": { price: 3500, altName: "7 Seater" },
      },
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: null,
    },

    plaid: null,
  },

  modelY: {
    default_optioned_vehicle: {
      model: "Model Y",
      battery: ["Long Range","long_range",49990],
      vehicle_image: "modelY_white_lr_19",
      image_vehicle: "modelY",
      image_paint: "_white",
      image_trim: "_lr",
      image_wheels: "_19",
      paint: ["Pearl White","included"],
      wheel: ["19 inch Gemini Wheels","included"],
      interior: ["All Black","black_interior","included"],
      layout: ["Five Seat Interior","5 Seater","included"],
      autopilot: ["autopilot","included"],
      cashdown_pymt: "",
      tradein_value: "",
      tradein_payoff: "",
      tradein_equity: "",
      adjustments: "",
      finance_term: "36 months",
      lease_term: "24 months",
      lease_yearly_miles: "10000 miles",
      tow_hitch: "optional",
      order_payment: 100,
      apr: 2.49,
      lease_apr: "",
      cash_price: 49990,
      non_cash_credit: "",
      upfront_sales_tax: "",
      state_sales_tax: "",
      state_total_fees: "",
      money_factor: "", 
      residual_value: "",
      finance_monthly_payment: "",
      lease_monthly_payment: "",
      total_vehicle_price: "",
      miles_range: 326,
      mph: 135,
      zero_to_sixty_seconds: 4.8
}, 
    paint_options: {
      "Pearl White": {full_name: "Pearl White Multi-Coat", price: "included", image_paint: "_white"},
      "Solid Black": {full_name: "Solid Black", price: 1000, image_paint: "_black"},
      "Midnight Silver": {full_name: "Midnight Silver Metallic", price: 1000, image_paint: "_silver"},
      "Deep Blue": {full_name: "Deep Blue Metallic", price: 1000, image_paint: "_blue"},
      "Red Multicoat": {full_name: "Red Multi-Coat", price: 2000, image_paint: "_red"}
    },

    partial_premium_interior: null,
    premium_interior:
      "12-way power adjustable front and rear heated seats <br/> 2nd row seats that fold flat <br/> Premium audio – 14 speakers, 1 subwoofer, 2 amps, and immersive sound <br/> LED fog lamps <br/> Tinted glass roof with ultraviolet and infrared protection <br/> Power folding, heated side mirrors <br/> Music and media over Bluetooth® <br/> Custom driver profiles <br/> Center console with storage, 4 USB ports and docking for 2 smartphones",

    model: "Model Y",
    standard_battery: null,
    off_menu: null,

    long_range: {      
      purchase_price: 49990,
      image_vehicle: "modelY",
      image_trim: "_lr",
      specs: {
        Battery: "Long Range",
        Acceleration: "4.8s 0-60 mph",
        Range: "326 miles (EPA est.)",
        Drive: "Dual Motor All-Wheel Drive",
        Seating: "Up to 7 Adults",
        Wheels: "19 inch or 20 inch",
        Weight: "4,416 lbs",
        "Max Cargo Volume": "68 cu ft",
        "Top Speed": "135 mph",
        Displays: "15 inch Center Touchscreen",
        Supercharging: "Pay Per Use",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/> Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first",
      },
      miles_range: 326,
      topspeed_mph: 135,
      zero_to_sixty: 4.8,
      wheel: {
        "19 inch Gemini Wheels": {
          range: null,
          price: "included",
          image_wheel: "_19",
          image_source: "modelY_gemini_19"
        },
        "20 inch Induction Wheels": {
          range: null,
          price: 2000,
          image_wheel: "_20",
          image_source: "modelY_induction_20"
        }
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: { "Five Seat Interior": { price: "included", altName: "5 Seater" } },
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: { price: 1000 },
    },

    performance: {      
      purchase_price: 59990,
      image_vehicle: "modelY",
      image_trim: "_perf",
      specs: {
        Battery: "Performance",
        Acceleration: "3.5s 0-60 mph",
        Range: "303 miles (EPA est.)",
        Drive: "Dual Motor All-Wheel Drive",
        Seating: "Up to 7 Adults",
        Wheels: "21 inch",
        Weight: "4,416 lbs",
        "Max Cargo Volume": "68 cu ft",
        "Top Speed": "155 mph",
        Displays: "15 inch Center Touchscreen",
        Supercharging: "Pay Per Use",
        Warranty:
          "Basic Vehicle - 4 years or 50,000 mi, whichever comes first <br/> Battery & Drive Unit - 8 years or 120,000 mi, whichever comes first",
      },
      miles_range: 303,
      topspeed_mph: 155,
      zero_to_sixty: 3.5,
      wheel: {
        "21 inch Überturbine Wheels": {
          range: null,
          price: "included",
          image_wheel: "_21",
          image_source: "modelY_uberturbine_21"
        }
      },
      interior: {
        "All Black": { price: "included", image: "black_interior" },
        "Black and White": { price: 1000, image: "white_interior" },
      },
      layout: {"Five Seat Interior": { price: "included", altName: "5 Seater" }},
      autopilot: { autopilot: { price: "included" }, FSD: { price: 10000 } },
      tow_hitch: { price: 1000 },
    },

    plaid: null,
  },
};
