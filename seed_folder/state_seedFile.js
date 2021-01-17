module.exports = {Alabama:{ 
state_name: "Alabama",
state_abbr: "AL",
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Athens, AL Supercharger","https://www.tesla.com/findus/location/supercharger/athensalsupercharger",["21282 Athens-Limestone Blvd\n","Athens, AL\n"]],["Auburn Alabama Supercharger","https://www.tesla.com/findus/location/supercharger/auburnalsupercharger",["1627 Opelika Road\n","Auburn, AL 36830\n"]],["Birmingham, AL Supercharger","https://www.tesla.com/findus/location/supercharger/birminghamalsupercharger",["2221 Richard Arrington Junior Blvd\n","Birmingham, AL 35203-1103\n"]],["Dothan, AL (coming soon)","https://www.tesla.com/findus/location/supercharger/dothansupercharger",["Dothan, AL\n"]],["Greenville Supercharger","https://www.tesla.com/findus/location/supercharger/greenvillealsupercharger",["219 Interstate Drive\n","Greenville, AL 36037\n"]],["Mobile Supercharger","https://www.tesla.com/findus/location/supercharger/mobilealsupercharger",["3201 Airport Blvd\n","Mobile, AL 36606\n"]],["Montgomery, AL (coming soon)","https://www.tesla.com/findus/location/supercharger/montgomerysupercharger",["Montgomery, AL\n"]],["Oxford, AL Supercharger","https://www.tesla.com/findus/location/supercharger/oxfordalsupercharger",["1105 Oxford Exchange Blvd\n","Oxford, AL 36203-0000\n"]],["Steele Supercharger","https://www.tesla.com/findus/location/supercharger/steelesupercharger",["905 Steele Station Road\n","Steele, AL 35987\n"]],["Tuscaloosa, AL (coming soon)","https://www.tesla.com/findus/location/supercharger/tuscaloosasupercharger",["Tuscaloosa, AL\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration",
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: true,
region: "Nashville",
default_zipcode: 94538
}}, Alaska:{
state_name: 'Alaska',
state_abbr: 'AK',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Anchorage, AK (coming soon)","https://www.tesla.com/findus/location/supercharger/anchoragesupercharger",["Anchorage, AK\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration",
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false,
region: 'Portland',
default_zipcode: 99801
}},Arizona:{
state_name: 'Arizona',
state_abbr: 'AZ',
vehicle_incentives: 'Reduced Vehicle License Tax and Carpool lane access',
solar_incentives: 'Solar: Up to $1,000 state tax credit',
local_vehicle_incentives: 'SRP & APS offer reduced electricity rates based on time-of-use charging for EV owners\nPhoenix & Tucson offer exemptions from emissions testing for all-electric vehicles',
local_solar_incentives: 'Salt River Project offers up to $3,600 for the installation of a Powerwall',
all_showrooms: '[["Arizona",[["Scottsdale-Fashion Square","https://www.tesla.com/findus/location/store/fashionsquare",["7014 E. Camelback Road\n","Suite #1210\n","Scottsdale, AZ 85251\n"]],["Scottsdale-Kierland Commons","https://www.tesla.com/findus/location/store/scottsdalekierlandcommons",["15215 N. Kierland Blvd #165B1A\n","Scottsdale, AZ 85254\n"]]]',
all_service_centers: '[["Scottsdale - Raintree","https://www.tesla.com/findus/location/service/scottsdaleservice",["8300 E Raintree Drive\n","Scottsdale, AZ 85260\n"]],["South Tucson-E. Elvira","https://www.tesla.com/findus/location/service/southtucson",["2901 E. Elvira Rd., Suite A-2 and A-3\n","South Tucson, AZ\n"]],["Tempe - E. University Drive","https://www.tesla.com/findus/location/service/tempearizona",["2077 E University Drive\n","Tempe, AZ 85281\n"]]]',
all_charging_locations: [["Buckeye, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/buckeyesupercharger",["416 S Watson Rd\n","Buckeye, AZ 85326\n"]],["Casa Grande, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/casagrandesupercharger",["2453 E. Florence Blvd.\n","Casa Grande, AZ 85194\n"]],["Cordes Lakes, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/cordeslakessupercharger",["14925 Cordes Lakes Rd\n","Mayer, AZ 86333\n"]],["Ehrenberg, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/ehrenburgazsupercharger",["11 Frontage Road North\n","Ehrenberg, AZ 85334\n"]],["Flagstaff, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/flagstaffazsupercharger",["2650 South Beulah Blvd\n","Flagstaff, AZ 86001\n"]],["Gila Bend, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/gilabendsupercharger",["826 W Pima St.\n","Gila Bend, AZ 85337\n"]],["Globe, AZ (coming soon)","https://www.tesla.com/findus/location/supercharger/globeazsupercharger",["Globe, AZ\n"]],["Holbrook, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/holbrooksupercharger",["2096 Navajo Blvd\n","Holbrook, AZ 86025\n"]],["Kayenta, AZ (coming soon)","https://www.tesla.com/findus/location/supercharger/kayentasupercharger",["Kayenta, AZ\n"]],["Kingman, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/kingmansupercharger",["789 W Beale St\n","Kingman, AZ 86401\n"]],["New River, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/newriverazsupercharger",["3906 West New River Road\n","New River, AZ 85087\n"]],["Page Supercharger","https://www.tesla.com/findus/location/supercharger/pagearizonasupercharger",["600 Clubhouse Drive\n","Page, AZ 86040\n"]],["Payson, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/paysonsupercharger",["142 AZ-260\n","Payson, AZ 85541\n"]],["Phoenix, AZ (coming soon)","https://www.tesla.com/findus/location/supercharger/phoenixtwosupercharger",["Phoenix, AZ\n"]],["Phoenix, AZ - Agua Fria Freeway Supercharger","https://www.tesla.com/findus/location/supercharger/phoenixonesupercharger",["2805 Agua Fria Fwy\n","Phoenix, 85027-3938\n"]],["Phoenix, AZ - East Camelback Road Supercharger","https://www.tesla.com/findus/location/supercharger/phoenixsupercharger",["2502 East Camelback Road\n","Phoenix, 85016-4254\n"]],["Quartzsite, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/quartzsitesupercharger",["1451 West Main St\n","Quartzsite, AZ 85346\n"]],["Scottsdale, AZ - N. Scottsdale Road Supercharger","https://www.tesla.com/findus/location/supercharger/scottsdaleroadsupercharger",["15059 N. Scottsdale Rd\n","Scottsdale, AZ 85254-2421\n"]],["Scottsdale, AZ - North Kierland Blvd. Supercharger","https://www.tesla.com/findus/location/supercharger/scottsdalekierlandsupercharger",["15205 North Kierland Boulevard\n","Scottsdale, AZ 85254\n"]],["Sedona, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/sedonaazsupercharger",["7000 AZ-179\n","Sedona, AZ 86351\n"]],["Tacna, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/tacnaazsupercharger",["9250 South Avenue 40E\n","Tacna, AZ 95352\n"]],["Tucson, AZ - East Skyline Drive Supercharger","https://www.tesla.com/findus/location/supercharger/tucsoneastskylinedrsupercharger",["2905 East Skyline Drive\n","Tucson, AZ 85718\n"]],["Tucson, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/tucsonsupercharger",["9255 S Rita Rd\n","Tucson, AZ 85747\n"]],["Tusayan, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/tusayanazsupercharger",["149 State Route 64\n","Tusayan, AZ\n"]],["White Hills, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/whitehillsazsupercharger",["12683 White Hills Road\n","Willow Beach, AZ 86445\n"]],["Wickenburg, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/wickenburgsupercharger",["155 N Tegner\n","Wickenburg, AZ 85390\n"]],["Willcox, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/willcoxsupercharger",["1251 Virginia Avenue\n","Willcox, 85643-1022\n"]],["Yuma, AZ Supercharger","https://www.tesla.com/findus/location/supercharger/yumasupercharger",["310 N Madison Ave\n","Yuma, AZ 85364\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: false, 
region: 'Pheonix',
default_zipcode: 85007
}},Arkansas:{
state_name: 'Arkansas',
state_abbr: 'AR',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Arkadelphia, AR (coming soon)","https://www.tesla.com/findus/location/supercharger/arkadelphiasupercharger",["Arkadelphia, AR\n"]],["Blytheville, AR (coming soon)","https://www.tesla.com/findus/location/supercharger/blythevillesupercharger",["Blytheville, AR\n"]],["Forrest City, AR (coming soon)","https://www.tesla.com/findus/location/supercharger/forrestcitysupercharger",["Forrest City, AR\n"]],["Fort Smith, AR (coming soon)","https://www.tesla.com/findus/location/supercharger/fortsmithsupercharger",["Fort Smith, AR\n"]],["Little Rock Supercharger","https://www.tesla.com/findus/location/supercharger/littlerocksupercharger",["11201 Bass Pro Parkway\n","Little Rock, AR\n"]],["Lowell, AR Supercharger","https://www.tesla.com/findus/location/supercharger/lowellarsupercharger",["898 W Monroe Ave\n","Lowell, AR 72745\n"]],["Ozark, AR Supercharger","https://www.tesla.com/findus/location/supercharger/clarksvillesupercharger",["3202 Pence Lane\n","Ozark, AR 72949\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration",
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Texas',
default_zipcode: 72201
}},California:{
state_name: 'California',
state_abbr: 'CA',
vehicle_incentives: '$2,000 or $4,500 rebate (based on income eligibility) for Model 3 and Model Y*\n$5,000 grant (based on income eligibility)*\n\n\n*Review eligibility prior to applying\n\n$1,500 California Clean Fuel Reward for all new electric vehicles registered in California',
solar_incentives: 'Solar: Select utilities may offer incentives\nPowerwall: see California Self-Generation Incentive Program (SGIP)',
local_vehicle_incentives: 'PG&E, SCE and SDG&E all offer reduced electricity rates based on time-of-use for EV owners\nAnaheim Public Utilities offers a rebate up to $500 for EV charging\nAntelope Valley Air Quality Management offers a $1,000 EV purchase rebate for eligible customers\nThe City of Burbank offers a $500 rebate for home EV charging installation\nThe City of Glendale offers a $500 rebate for home EV charging installation\nLos Angeles Department of Water & Power offers a $500 rebate for home EV charging installation\nPG&E offers an $800 rebate for EV purchases beginning January 1, 2019**\nPasadena Water and Power offers up to $600 of free electricity for EV charging for one year\nSacramento Metro Air District offers up to a $9,500 rebate for eligible customers\nSan Joaquin Valley Air Pollution Control District offers a rebate up to $3,000 for eligible customers\nSan Mateo County residents are eligible for a $1,000 rebate on the purchase of a new electric vehicle between October 1, 2020 to December 31, 2020 while funds last\nHermosa Beach, San Jose, Santa Monica and San Anselmo offers free parking at all city metered parking, participating garages, parks and recreation centers\nSCE offers up to $1,000 rebate for qualified EV customers**\nSDG&E offers a rebate up to $1,000 for teachers and first responders who purchase an EV\nSMUD offers a $599 cash incentive for EV purchases\nSonoma Clean Power offers up to $4,500 in rebates\nSouth Coast Air Quality Management offers rebates up to $800 for EV home charging installation\n\n**Customers who receive the California Clean Fuel Reward would not be able to also claim this rebate',
local_solar_incentives: null,
all_showrooms: [["Brea-Brea Mall","https://www.tesla.com/findus/location/store/breamall",["1065 Brea Mall\n","Brea, CA 92821\n"]],["Buena Park","https://www.tesla.com/findus/location/store/buenapark",["6692 Auto Center Drive\n","Buena Park, CA 90621\n"]],["Burbank","https://www.tesla.com/findus/location/store/burbank",["811 S San Fernando Blvd\n","Burbank, CA 91502\n"]],["Burlingame","https://www.tesla.com/findus/location/store/burlingame",["50 Edwards Court\n","Burlingame, CA 94010\n"]],["Canoga Park-Topanga","https://www.tesla.com/findus/location/store/topanga",["6600 Topanga Canyon Blvd\n","Suite 1049\n","Canoga Park, CA 91303\n"]],["Carlsbad","https://www.tesla.com/findus/location/store/carlsbad",["3248 Lionshead Avenue\n","Carlsbad, CA 92010\n"]],["Corte Madera-The Village at Corte Madera","https://www.tesla.com/findus/location/store/villageatcortemadera",["1616 Redwood Highway\n","Corte Madera, CA 94925\n"]],["Costa Mesa","https://www.tesla.com/findus/location/store/costamesa",["3140 Pullman Road\n","Costa Mesa, CA 92626\n"]],["Dublin-Amador Plaza","https://www.tesla.com/findus/location/store/dublinamador",["6701 Amador Plaza Road\n","Dublin, CA 94568\n"]],["Fremont","https://www.tesla.com/findus/location/store/fremont",["45500 Fremont Blvd\n","Fremont, CA 94538\n"]],["Fresno","https://www.tesla.com/findus/location/store/fresnoservice",["2988 N. Burl Ave.\n","Fresno, CA 93727\n"]],["Glendale-Americana at Brand","https://www.tesla.com/findus/location/store/glendaleamericana",["539 Americana Way\n","Glendale, CA 91210\n"]],["Lake Forest","https://www.tesla.com/findus/location/store/lakeforest",["25471 Arctic Ocean Dr\n","Lake Forest, CA 92630-8832\n"]],["Los Angeles - Century City","https://www.tesla.com/findus/location/store/centurycity",["10250 Santa Monica Blvd\n","Ste. 1340\n","Los Angeles, CA 90067\n"]],["Los Angeles-Centinela","https://www.tesla.com/findus/location/store/centinela",["5840 W. Centinela Ave\n","Los Angeles, CA 90045\n"]],["Marina Del Rey-Alla Road","https://www.tesla.com/findus/location/store/marinadelrey",["4755 Alla Road\n","Marina Del Rey, CA 90292\n"]],["Mission Viejo-Shops at Mission Viejo","https://www.tesla.com/findus/location/store/shopsatmissionviejo",["820 The Shops At Mission Viejo\n","Mission Viejo, CA 92691\n"]],["Monterey-Seaside","https://www.tesla.com/findus/location/store/montereyseaside",["1901 Del Monte Blvd\n","Seaside, CA 93955\n"]],["Newport Beach-Fashion Island","https://www.tesla.com/findus/location/store/fashionisland",["367 Newport Center Drive\n","Newport Beach, CA 92660\n"]],["Palm Springs-Cathedral City","https://www.tesla.com/findus/location/store/cathedralcity",["68080 Perez Road\n","Palm Springs, CA 92234\n"]],["Palo Alto","https://www.tesla.com/findus/location/store/paloalto",["4180 El Camino Real\n","Palo Alto, CA 94306\n"]],["Palo Alto-Stanford Shopping Center","https://www.tesla.com/findus/location/store/stanfordshoppingcenter",["660 Stanford Shopping Center\n","Palo Alto, CA 94304\n"]],["Pasadena-Colorado Blvd","https://www.tesla.com/findus/location/store/pasadena",["117 West Colorado Blvd\n","Pasadena, CA 91105\n"]],["Rancho Cucamonga-Edison Ct.","https://www.tesla.com/findus/location/store/ranchocucamongaedisonct",["10851 Edison Ct.\n","Rancho Cucamonga, CA 91730\n"]],["Sacramento-Rocklin","https://www.tesla.com/findus/location/store/rocklin",["4361 Granite Drive\n","Rocklin, CA 95677\n"]],["San Diego - Fashion Valley","https://www.tesla.com/findus/location/store/sandiegofashionvalley",["7007 Friars Road\n","Suite 325A\n","San Diego, CA 92108\n"]],["San Diego-UTC","https://www.tesla.com/findus/location/store/universitytownecentre",["4545 La Jolla Village Drive\n","Suite C17\n","San Diego, CA 92122\n"]],["San Francisco - Van Ness","https://www.tesla.com/findus/location/store/sanfranciscovanness",["999 Van Ness Avenue\n","San Francisco, CA 94109\n"]],["San Jose-Santana Row","https://www.tesla.com/findus/location/store/santanarow",["333 Santana Row Suite 1015\n","San Jose, CA 95128\n"]],["Santa Barbara-Hitchcock Way","https://www.tesla.com/findus/location/store/santabarbara",["400 Hitchcock Way\n","Santa Barbara, CA 93105\n"]],["Santa Monica Place","https://www.tesla.com/findus/location/store/santamonicaplace",["395 Santa Monica Place #120\n","Santa Monica, CA 90401\n"]],["Serramonte-1500 Collins Ave","https://www.tesla.com/findus/location/store/serramonte1500collinsave",["1500 Collins Ave\n","Colma, CA 94014\n"]],["Sherman Oaks - Fashion Square Mall","https://www.tesla.com/findus/location/store/shermanoaksfashionsquaremall",["14006 Riverside Dr. Space 78\n","Sherman Oaks, CA 91423\n"]],["Sunnyvale","https://www.tesla.com/findus/location/store/sunnyvale",["750 E El Camino Real\n","Sunnyvale, CA 94087\n"]],["Torrance-Del Amo Mall","https://www.tesla.com/findus/location/store/torrancedelamomall",["3525 W Carson St. Space 419\n","Torrance, CA 90503\n"]],["Walnut Creek-Broadway Plaza","https://www.tesla.com/findus/location/store/walnutcreek",["1246 Broadway Plaza Suite 1094\n","Walnut Creek, CA 94596\n"]]],
all_service_centers: [["Agoura Hills","https://www.tesla.com/findus/location/service/agourahills",["28721 Canwood Street Bldg A\n","Agoura Hills, CA 91301\n"]],["Bakersfield-Young Street","https://www.tesla.com/findus/location/service/bakersfieldyoungstreet",["5206 Young Street, Suite B\n","Bakersfield, CA 93311-8821\n"]],["Berkeley-901 Gilman","https://www.tesla.com/findus/location/service/berkeleygilman",["901 Gilman St.\n","Berkeley, CA 94710\n"]],["Buena Park","https://www.tesla.com/findus/location/service/buenapark",["6692 Auto Center Drive\n","Buena Park, CA 90621\n"]],["Burbank","https://www.tesla.com/findus/location/service/burbank",["811 S San Fernando Blvd\n","Burbank, CA 91502\n"]],["Burlingame","https://www.tesla.com/findus/location/service/burlingame",["50 Edwards Court\n","Burlingame, CA 94010\n"]],["Carlsbad","https://www.tesla.com/findus/location/service/carlsbad",["3248 Lionshead Avenue\n","Carlsbad, CA 92010\n"]],["Chico-Huss","https://www.tesla.com/findus/location/service/chicohussservice",["349 Huss Drive\n","Chico, CA 95928-8209\n"]],["Costa Mesa Service","https://www.tesla.com/findus/location/service/costamesaservice",["3020 Pullman Street\n","Costa Mesa, CA 92626\n"]],["Dublin-Amador Plaza","https://www.tesla.com/findus/location/service/dublinamador",["6701 Amador Plaza Road\n","Dublin, CA 94568\n"]],["Fremont Service","https://www.tesla.com/findus/location/service/fremontkatoroad",["48370 Kato Rd\n","Fremont, CA 94538\n"]],["Fresno","https://www.tesla.com/findus/location/service/fresnoservice",["2988 N. Burl Ave.\n","Fresno, CA 93727\n"]],["Lake Forest","https://www.tesla.com/findus/location/service/lakeforest",["25471 Arctic Ocean Dr\n","Lake Forest, CA 92630-8832\n"]],["Los Angeles-Centinela","https://www.tesla.com/findus/location/service/centinela",["5840 W. Centinela Ave\n","Los Angeles, CA 90045\n"]],["Monterey-Seaside","https://www.tesla.com/findus/location/service/montereyseaside",["1901 Del Monte Blvd\n","Seaside, CA 93955\n"]],["Oxnard-Galaxy Place","https://www.tesla.com/findus/location/service/oxnardgalaxyplaceservice",["3421 Galaxy Place\n","Oxnard, CA 93030\n"]],["Palm Springs-Cathedral City","https://www.tesla.com/findus/location/service/cathedralcity",["68080 Perez Road\n","Palm Springs, CA 92234\n"]],["Palo Alto","https://www.tesla.com/findus/location/service/paloalto",["4180 El Camino Real\n","Palo Alto, CA 94306\n"]],["Rancho Cucamonga-Edison Ct.","https://www.tesla.com/findus/location/service/ranchocucamongaedisonct",["10851 Edison Ct.\n","Rancho Cucamonga, CA 91730\n"]],["Sacramento-Rocklin","https://www.tesla.com/findus/location/service/rocklin",["4361 Granite Drive\n","Rocklin, CA 95677\n"]],["San Diego - Kearny Mesa","https://www.tesla.com/findus/location/service/sdkearnymesa",["5600 Kearny Mesa Rd\n","San Diego, CA 92111\n"]],["San Diego - Miramar","https://www.tesla.com/findus/location/service/sandiego",["9250 Trade Place\n","San Diego, CA 92126\n"]],["San Francisco - Van Ness","https://www.tesla.com/findus/location/service/sanfranciscovanness",["999 Van Ness Avenue\n","San Francisco, CA 94109\n"]],["San Rafael","https://www.tesla.com/findus/location/service/sanrafaelca",["470 DuBois Street\n","San Rafael, CA 94901\n"]],["Santa Ana Service","https://www.tesla.com/findus/location/service/santaanaservice",["3220-3230 S. Standard Ave\n","Santa Ana, CA 92705\n"]],["Santa Barbara-Hitchcock Way","https://www.tesla.com/findus/location/service/santabarbara",["400 Hitchcock Way\n","Santa Barbara, CA 93105\n"]],["Santa Clara-Northwestern Parkway","https://www.tesla.com/findus/location/service/santaclara",["2801 Northwestern Parkway\n","Santa Clara, CA 95051\n"]],["Serramonte-1500 Collins Ave","https://www.tesla.com/findus/location/service/serramonte1500collinsave",["1500 Collins Ave\n","Colma, CA 94014\n"]],["Sunnyvale","https://www.tesla.com/findus/location/service/sunnyvale",["750 E El Camino Real\n","Sunnyvale, CA 94087\n"]],["Torrance","https://www.tesla.com/findus/location/service/torrance",["2560 W. 237th St\n","Torrance, CA 90505\n"]],["Van Nuys","https://www.tesla.com/findus/location/service/vannuys",["6919-6921 Hayvenhurst Ave\n","Van Nuys, CA 91406\n"]],["West Los Angeles-Santa Monica Blvd","https://www.tesla.com/findus/location/service/westlosangelessantamonicablvd",["11163 Santa Monica Boulevard\n","Los Angeles, CA 90025\n"]]],
all_charging_locations: [["Adelanto, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/adelantosupercharger",["Adelanto, CA\n"]],["Adin, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/adinsupercharger",["Adin, CA\n"]],["Alameda, CA Supercharger","https://www.tesla.com/findus/location/supercharger/alamedacasupercharger",["523 South Shore Center West\n","Alameda, CA 94501\n"]],["Anaheim, CA - East Katella Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/anaheimeastkatellasupercharger",["2404 East Katella Avenue\n","Anaheim, CA 92806\n"]],["Anaheim, CA - Santa Ana Canyon Road Supercharger","https://www.tesla.com/findus/location/supercharger/anaheimcasupercharger",["8148 East Santa Ana Canyon Road\n","Anaheim, CA 92808\n"]],["Antioch, CA Supercharger","https://www.tesla.com/findus/location/supercharger/antiochcasupercharger",["5769 Lone Tree Way\n","Antioch, CA 94531\n"]],["Atascadero, CA Supercharger","https://www.tesla.com/findus/location/supercharger/atascaderosupercharger",["6950 El Camino Real\n","Atascadero, CA 93422\n"]],["Baker, CA Supercharger","https://www.tesla.com/findus/location/supercharger/bakercasupercharger",["71808 Baker Blvd\n","Baker, CA 92309-0000\n"]],["Bakersfield Supercharger","https://www.tesla.com/findus/location/supercharger/bakersfieldsupercharger",["29541 Stockdale Hwy\n","Bakersfield, CA 93314\n"]],["Bakersfield, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/bakersfieldcasupercharger",["Bakersfield, CA\n"]],["Barstow Supercharger","https://www.tesla.com/findus/location/supercharger/barstowcasupercharger",["2812 Lenwood Road\n","Barstow, CA 92311\n"]],["Beaumont, CA Supercharger","https://www.tesla.com/findus/location/supercharger/beaumontcasupercharger",["1540 E. 2nd Street\n","Beaumont, CA 92223\n"]],["Berkeley, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/berkeleysupercharger",["Berkeley, CA\n"]],["Beverly Hills, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/beverlyhillscaliforniasupercharger",["Beverly Hills, CA\n"]],["Big Sur, CA - Ventana Supercharger","https://www.tesla.com/findus/location/supercharger/bigsurcasupercharger",["48123 Highway 1\n","Big Sur, CA 93920\n"]],["Bishop, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/bishopcasupercharger",["Bishop, CA\n"]],["Brea, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/breacaliforniasupercharger",["Brea, CA\n"]],["Buellton, CA Supercharger","https://www.tesla.com/findus/location/supercharger/buelltonsupercharger",["555 McMurray Rd\n","Buellton, CA 93427\n"]],["Buena Park","https://www.tesla.com/findus/location/supercharger/buenapark",["6692 Auto Center Drive\n","Buena Park, CA 90621\n"]],["Buena Park, CA - Beach Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/buenaparkcabeachboulevarsdupercharger",["6940 Beach Boulevard\n","Buena Park, CA 90621\n"]],["Burbank - North Third Street","https://www.tesla.com/findus/location/supercharger/burbanknorththirdstsupercharger",["495 North Third Street\n","Burbank, CA 91502\n"]],["Buttonwillow Supercharger","https://www.tesla.com/findus/location/supercharger/buttonwillowsupercharger",["20673 Tracy Ave.\n","Buttonwillow, CA 93206\n"]],["Cabazon Supercharger","https://www.tesla.com/findus/location/supercharger/cabazoncaliforniasupercharger",["48400 Seminole Drive\n","Cabazon, CA 92230\n"]],["Calabasas, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/calabasascasupercharger",["Calabasas, CA\n"]],["Cambria, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/cambriacasupercharger",["Cambria, CA\n"]],["Carlsbad, CA Supercharger","https://www.tesla.com/findus/location/supercharger/carlsbadsupercharger",["7710-7770 El Camino Real\n","Carlsbad, CA 92009-8562\n"]],["Castro Valley, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/castrovalleycasupercharger",["Castro Valley, CA\n"]],["Cerritos, CA Supercharger","https://www.tesla.com/findus/location/supercharger/cerritoscaliforniasupercharger",["239 Los Cerritos Center\n","Cerritos, CA 90703-5422\n"]],["Chico, CA Supercharger","https://www.tesla.com/findus/location/supercharger/chicocaliforniasupercharger",["1951 East 20th Street\n","Chico, CA 95928\n"]],["Chino Hills, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/chinohillsupercharger",["Chino Hills, CA\n"]],["Chula Vista, CA Supercharger","https://www.tesla.com/findus/location/supercharger/chulavistacaliforniasupercharger",["910 Eastlake Parkway\n","Chula Vista, CA 91914\n"]],["Commerce, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/commercesupercharger",["Commerce, CA\n"]],["Concord, CA Supercharger","https://www.tesla.com/findus/location/supercharger/concordcasupercharger",["2001 Diamond Blvd\n","Concord, 94520\n"]],["Corning, CA Supercharger","https://www.tesla.com/findus/location/supercharger/corningsupercharger",["950 Hwy 99 W\n","Corning, CA 96021\n"]],["Corona, CA Supercharger","https://www.tesla.com/findus/location/supercharger/coronacasupercharger",["2615 Tuscany Street\n","Corona, CA 92881-4631\n"]],["Corte Madera, CA Supercharger","https://www.tesla.com/findus/location/supercharger/cortemaderasupercharger",["1618 Redwood Highway\n","Corte Madera, CA 94925\n"]],["Costa Mesa, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/costamesacasupercharter",["Costa Mesa, CA\n"]],["Crescent City Supercharger","https://www.tesla.com/findus/location/supercharger/crescentcitysupercharger",["1000 Front Street\n","Crescent City, CA 95531\n"]],["Culver City Supercharger","https://www.tesla.com/findus/location/supercharger/culvercitysupercharger",["6000 Sepulveda Blvd.\n","Culver City, CA 90230\n"]],["Cupertino, CA Supercharger","https://www.tesla.com/findus/location/supercharger/cupertinosupercharger",["19500 Vallco Parkway\n","Cupertino, 95014-0000\n"]],["Daly City, CA Supercharger","https://www.tesla.com/findus/location/supercharger/dalycitysupercharger",["3 Serramonte Center\n","Daly City, CA 94015\n"]],["Dana Point, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/danapointcaliforniasupercharger",["Dana Point, CA\n"]],["Davis, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/davissupercharger",["Davis, CA\n"]],["Downey, CA - Lakewood Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/downeysupercharger",["9500 Lakewood Boulevard\n","Downey, CA 90240-3307\n"]],["Downey, CA - Stonewood Street Supercharger","https://www.tesla.com/findus/location/supercharger/downeycastonewoodsupercharger",["251 Stonewood Street\n","Downey, CA 90241\n"]],["Dublin-Amador Plaza","https://www.tesla.com/findus/location/supercharger/dublinamador",["6701 Amador Plaza Road\n","Dublin, CA 94568\n"]],["East Palo Alto, CA Supercharger","https://www.tesla.com/findus/location/supercharger/paloaltocaliforniasupercharger",["1771 East Bayshore Road\n","Palo Alto, CA 94303\n"]],["El Cajon, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/elcajonsupercharger",["El Cajon, CA\n"]],["El Centro Supercharger","https://www.tesla.com/findus/location/supercharger/elcentrosupercharger",["3551 S Dogwood Rd\n","El Centro, CA 92243\n"]],["El Cerrito, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/elcerritocaliforniasupercharger",["El Cerrito, CA\n"]],["El Cerrito, CA Supercharger","https://www.tesla.com/findus/location/supercharger/elcerritocasupercharger",["280 El Cerrito Plaza\n","El Cerrito, CA 94530\n"]],["Elk Grove, CA - Elk Grove Blvd Supercharger","https://www.tesla.com/findus/location/supercharger/elkgrovecaelkgroveblvdsupercharger",["8451 Elk Grove Boulevard\n","Elk Grove, CA 95758\n"]],["Emeryville, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/emeryvillesupercharger",["Emeryville, CA\n"]],["Emeryville, CA - Powell Street Plaza Supercharger","https://www.tesla.com/findus/location/supercharger/emeryvillecapowellstreetplazasupercharger",["5795 Christie Avenue\n","Emeryville, CA 94608\n"]],["Escondido, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/escondidoonsupercharger",["Escondido, CA\n"]],["Eureka Supercharger","https://www.tesla.com/findus/location/supercharger/eurekasupercharger",["3300 Broadway St.\n","Eureka, CA 95501\n"]],["Fairfield, CA - Holiday Lane Supercharger","https://www.tesla.com/findus/location/supercharger/fairfieldholidaylanesupercharger",["1350 Holiday Lane\n","Fairfield, CA 94534\n"]],["Fairfield, CA - Travis Blvd Supercharger","https://www.tesla.com/findus/location/supercharger/fairfieldcasupercharger",["1350 Travis Blvd\n","Fairfield, CA 94533-3432\n"]],["Firebaugh, CA Supercharger","https://www.tesla.com/findus/location/supercharger/firebaughsupercharger",["46272 West Panoche Road\n","Firebaugh, CA 93622\n"]],["Fish Camp Supercharger","https://www.tesla.com/findus/location/supercharger/fishcampsupercharger",["1122 Highway 41\n","Fish Camp, CA 93623\n"]],["Folsom, CA - Iron Point Road Supercharger","https://www.tesla.com/findus/location/supercharger/folsompremiumoutletssupercharger",["220 Iron Point Rd\n","Folsom, CA 95630\n"]],["Folsom, CA - Palladio Parkway Supercharger","https://www.tesla.com/findus/location/supercharger/palladiofolsomsupercharger",["220 Palladio Parkway\n","Folsom, CA 95630\n"]],["Fontana, CA Supercharger","https://www.tesla.com/findus/location/supercharger/fontanacaliforniasupercharger",["152234 Summit Avenue\n","Fontana, CA 92336\n"]],["Fountain Valley Supercharger","https://www.tesla.com/findus/location/supercharger/fountainvalleycaliforniasupercharger",["17940 Newhope St\n","Fountain Valley, CA 92708\n"]],["Fremont","https://www.tesla.com/findus/location/supercharger/fremont",["45500 Fremont Blvd\n","Fremont, CA 94538\n"]],["Fremont, CA - 39201 Fremont Blvd Supercharger","https://www.tesla.com/findus/location/supercharger/fremontcaliforniasupercharger",["39201 Fremont Blvd\n","Fremont, CA 94538-1301\n"]],["Fresno Supercharger","https://www.tesla.com/findus/location/supercharger/fresnosupercharger",["6709 N Riverside Dr\n","Fresno, CA 93722\n"]],["Fresno, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/fresnocasupercharger",["Fresno, CA\n"]],["Gilroy, CA Supercharger","https://www.tesla.com/findus/location/supercharger/gilroyoutletsupercharger",["Gilroy Premium Outlets\n","Gilroy, CA 95020\n"]],["Glendale, CA Supercharger","https://www.tesla.com/findus/location/supercharger/glendalesupercharger",["899 Americana Way\n","Glendale, CA 91210\n"]],["Goleta, CA Supercharger","https://www.tesla.com/findus/location/supercharger/goletacasupercharger",["7004 Marketplace Drive\n","Goleta, CA 93117\n"]],["Greenville, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/greenvillesupercharger",["Greenville, CA\n"]],["Groveland Supercharger","https://www.tesla.com/findus/location/supercharger/grovelandsupercharger",["11875 Ponderosa Lane\n","Groveland, CA 95321\n"]],["Gustine Supercharger","https://www.tesla.com/findus/location/supercharger/gustinesupercharger",["12411 CA-33\n","Gustine, CA 95322\n"]],["Half Moon Bay, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/halfmoonbaycasupercharger",["Half Moon Bay, CA\n"]],["Harris Ranch Supercharger","https://www.tesla.com/findus/location/supercharger/harrisranchcasupercharger",["24505 W Dorris Ave\n","Coalinga, CA 93210\n"]],["Hawthorne, CA - El Segundo Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/hawthornelsegundosupercharger",["4427 West El Segundo Boulevard\n","Hawthorne, CA 90250\n"]],["Hawthorne, CA - West 120th Street Supercharger","https://www.tesla.com/findus/location/supercharger/hawthornecaweststreetsupercharger",["2700 West 120th Avenue\n","Hawthorne, CA 90250\n"]],["Hayward, CA Supercharger","https://www.tesla.com/findus/location/supercharger/haywardcaliforniasupercharger",["19661 Hesperian Boulevard\n","Hayward, CA 94541\n"]],["Hermosa Beach, CA Supercharger","https://www.tesla.com/findus/location/supercharger/hermosabeachcasupercharger",["710 16th St.\n","Hermosa Beach, CA 90254\n"]],["Hesperia, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/hesperiasupercharger",["Hesperia, CA\n"]],["Highland, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/highlandcaliforniasupercharger",["Highland, CA\n"]],["Hollister, CA Supercharger","https://www.tesla.com/findus/location/supercharger/hollistercasupercharger",["10021 Pacheco Pass Hwy\n","Hollister, CA 95023-9541\n"]],["Hollywood, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/hollywoodsupercharger",["Hollywood, CA\n"]],["Huntington Beach, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/huntingtonbeachcasupercharger",["Huntington Beach, CA\n"]],["Indio Supercharger","https://www.tesla.com/findus/location/supercharger/indiocaliforniasupercharger",["42100 Jackson St\n","Indio, CA 92203\n"]],["Indio, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/indiosupercharger",["Indio, CA\n"]],["Inyokern Supercharger","https://www.tesla.com/findus/location/supercharger/inyokernsupercharger",["1353 Brown Road\n","Inyokern, CA 93527\n"]],["Irvine, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/irvinesupercharger",["Irvine, CA\n"]],["Irvine, CA - Michelson Drive Supercharger","https://www.tesla.com/findus/location/supercharger/irvineparkplacesupercharger",["3021 Michelson Drive\n","Irvine, CA 92612-0626\n"]],["Jackson, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sonoracasupercharger",["31 CA-88\n","Jackson, CA 95642\n"]],["Kettleman City, CA Supercharger","https://www.tesla.com/findus/location/supercharger/kettlemancitysupercharger",["27675 Bernard Drive\n","Kettleman City, CA 93239\n"]],["Kramer Junction, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/kramerjunctioncasupercharger",["Kramer Junction, CA\n"]],["Lake Elsinore, CA Supercharger","https://www.tesla.com/findus/location/supercharger/lakeelsinorecasupercharger",["17600 Collier Avenue\n","Lake Elsinore, CA 92530\n"]],["Lakewood, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/lakewoodcaliforniasupercharger",["Lakewood, CA\n"]],["Laytonville, CA Supercharger","https://www.tesla.com/findus/location/supercharger/laytonvillesupercharger",["45020 N US Highway 101\n","Laytonville, CA 95454-9049\n"]],["Lincoln, CA - Groveland Lane Supercharger","https://www.tesla.com/findus/location/supercharger/lincolncagrovelandlanesupercharger",["950 Groveland Lane\n","Lincoln, CA 95648\n"]],["Livermore, CA Supercharger","https://www.tesla.com/findus/location/supercharger/livermorecasupercharger",["2774 Livermore Outlets Drive\n","Livermore, CA 94551\n"]],["Lone Pine, CA Supercharger","https://www.tesla.com/findus/location/supercharger/lonepinecasupercharger",["701 S Main St\n","Lone Pine, CA 93545\n"]],["Long Beach, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/longbeachsupercharger",["Long Beach, CA\n"]],["Los Altos, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/losaltossupercharger",["Los Altos, CA\n"]],["Los Altos, CA Supercharger","https://www.tesla.com/findus/location/supercharger/losaltoscasupercharger",["4800 El Camino Real\n","Los Altos, CA 94022\n"]],["Los Angeles, CA - Francisco Street Supercharger","https://www.tesla.com/findus/location/supercharger/losangelesdowntownsupercharger",["899 South Francisco Street\n","Los Angeles, CA 90015\n"]],["Los Gatos, CA Supercharger","https://www.tesla.com/findus/location/supercharger/losgatossupercharger",["142 Los Gatos-Saratoga Road\n","Los Gatos, CA 95032\n"]],["Malibu, CA - Whole Foods and the Park Supercharger","https://www.tesla.com/findus/location/supercharger/malibucaliforniasupercharger",["23475 Civic Center Way\n","Malibu, CA 90265\n"]],["Mammoth Lakes Supercharger","https://www.tesla.com/findus/location/supercharger/mammothlakessupercharger",["1475 Tavern Road\n","Mammoth Lakes, CA 93546\n"]],["Manhattan Beach, CA Supercharger","https://www.tesla.com/findus/location/supercharger/manhattanbeachcasupercharger",["3200 North Sepulveda Boulevard\n","Manhattan Beach, CA 90266\n"]],["Manteca Supercharger","https://www.tesla.com/findus/location/supercharger/mantecacasupercharger",["960 Perimeter Dr\n","Manteca, CA 95337\n"]],["Manteca, CA - Spreckels Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/mantecacaspreckelsavenuesupercharger",["280 Spreckels Avenue\n","Manteca, CA 95336\n"]],["Marin City, CA - Donahue Street Supercharger","https://www.tesla.com/findus/location/supercharger/marincitycasupercharger",["190 Donahue Street\n","Marin City, CA 94965\n"]],["Marina Del Rey, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/marinadelreysupercharger",["Marina Del Rey, CA\n"]],["Mariposa, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/mariposacasupercharger",["Mariposa, CA\n"]],["Mendocino, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/mendocinosupercharger",["Mendocino, CA\n"]],["Menifee, CA Supercharger","https://www.tesla.com/findus/location/supercharger/menifeecasupercharger",["30340 Haun Road\n","Menifee, CA 92584\n"]],["Menlo Park, CA Supercharger","https://www.tesla.com/findus/location/supercharger/melonparkcasupercharger",["325 Sharon Park Drive\n","Menlo Park, CA 94025\n"]],["Milpitas, CA - Great Mall Supercharger","https://www.tesla.com/findus/location/supercharger/milpitasgreatmallsupercharger",["447 Great Mall Drive\n","Milpitas, CA 95035\n"]],["Milpitas, CA Supercharger","https://www.tesla.com/findus/location/supercharger/milpitascasupercharger",["901 East Calaveras Boulevard\n","Milpitas, CA 95035\n"]],["Mission Viejo, CA Supercharger","https://www.tesla.com/findus/location/supercharger/missionviejocasupercharger",["555 The Shops at Mission Viejo\n","Mission Viejo, CA 92691\n"]],["Modesto, CA - Sisk Road Supercharger","https://www.tesla.com/findus/location/supercharger/modestocasiskroadsupercharger",["3900 Sisk Road\n","Modesto, CA 95356\n"]],["Mojave Supercharger","https://www.tesla.com/findus/location/supercharger/mojavecaliforniasupercharger",["16940 California 14\n","Mojave, CA 93501\n"]],["Mojave, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/mojavesupercharger",["Mojave, CA\n"]],["Montebello, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/montebellocasupercharger",["Montebello, CA\n"]],["Monterey Supercharger","https://www.tesla.com/findus/location/supercharger/montereysupercharger",["1410 Del Monte Center\n","Monterey, CA 93940-6168\n"]],["Monterey-Seaside","https://www.tesla.com/findus/location/supercharger/montereyseaside",["1901 Del Monte Blvd\n","Seaside, CA 93955\n"]],["Moreno Valley, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/morenovalleycasupercharger",["Moreno Valley, CA\n"]],["Morgan Hill, CA Supercharger","https://www.tesla.com/findus/location/supercharger/morganhillsupercharger",["1061 Cochrane Road\n","Morgan Hill, CA 95037\n"]],["Mountain View Supercharger","https://www.tesla.com/findus/location/supercharger/mountainviewcasupercharger",["1401 N. Shoreline Blvd.\n","Mountain View, CA 94043\n"]],["Mountain View, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/mountainviewcaliforniasupercharger",["Mountain View, CA\n"]],["Mt. Shasta Supercharger","https://www.tesla.com/findus/location/supercharger/mtshastacaliforniasupercharger",["111 Morgan Way\n","Mt. Shasta, CA 96067\n"]],["Mt. Shasta, CA - 134 Morgan Way Supercharger","https://www.tesla.com/findus/location/supercharger/mtshastasupercharger",["134 Morgan Way\n","Mt. Shasta, CA 96067-2501\n"]],["Napa, CA - Factory Stores Drive Supercharger","https://www.tesla.com/findus/location/supercharger/napacafactorysupercharger",["629 Factory Stores Drive\n","Napa, CA 94558\n"]],["Napa, CA Supercharger","https://www.tesla.com/findus/location/supercharger/napacaliforniasupercharger",["221 Devlin Rd\n","Napa, CA 94558\n"]],["Needles Supercharger","https://www.tesla.com/findus/location/supercharger/needlescasupercharger",["2451 Needles HWY\n","Needles, CA 92363\n"]],["Newark, CA Supercharger","https://www.tesla.com/findus/location/supercharger/newarkcasupercharger",["3100 Newpark Mall\n","Newark, CA 94560\n"]],["Newell, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/newellcasupercharger",["Newel, CA\n"]],["Northridge, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/northridgesupercharger",["Northridge, CA\n"]],["Novato, CA Supercharger","https://www.tesla.com/findus/location/supercharger/novatocasupercharger",["208 Vintage Way\n","Novato, CA 94945\n"]],["Oakland, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/oaklandcasupercharger",["Oakland, CA\n"]],["Oakland, CA - Hegenberger Rd Supercharger","https://www.tesla.com/findus/location/supercharger/oaklandcahegenbergerrdsupercharger",["640 Hegenberger Road\n","Oakland, CA 94621\n"]],["Ojai, CA Supercharger","https://www.tesla.com/findus/location/supercharger/ojaisupercharger",["987 West Ojai Avenue\n","Ojai, CA 93023\n"]],["Ontario, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/ontariocaliforniasupercharger",["Ontario, CA\n"]],["Oxnard Supercharger","https://www.tesla.com/findus/location/supercharger/oxnardcasupercharger",["2751 Park View Ct\n","Oxnard, CA 93036\n"]],["Pacific Palisades, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/pacificpalisadessupercharger",["Pacific Palisades, CA\n"]],["Palm Springs, CA Supercharger","https://www.tesla.com/findus/location/supercharger/palmspinrgscaliforniasupercharger",["101 North Museum Drive\n","Palm Springs, CA 92262\n"]],["Palmdale, CA Supercharger","https://www.tesla.com/findus/location/supercharger/palmdalecaliforniasupercharger",["1233 Rancho Vista Boulevard\n","Palmdale, CA 93551\n"]],["Palo Alto, CA - Stanford Shopping Center Supercharger","https://www.tesla.com/findus/location/supercharger/stanfordshoppingsupercharger",["660 Stanford Shopping Center\n","Palo Alto, CA 94304\n"]],["Pasadena, CA Supercharger","https://www.tesla.com/findus/location/supercharger/pasadenasupercharger",["155 East Green Street\n","Pasadena, CA 91105\n"]],["Paso Robles, CA Supercharger","https://www.tesla.com/findus/location/supercharger/pasoroblessupercharger",["2421-2445 Golden Hill Road\n","Paso Robles, CA 93446\n"]],["Patterson, CA - Speno Dr Supercharger","https://www.tesla.com/findus/location/supercharger/pattersoncaspenodrsupercharger",["2959 Speno Drive\n","Patterson, CA 95363\n"]],["Petaluma, CA Supercharger","https://www.tesla.com/findus/location/supercharger/petalumacasupercharger",["401 Kenilworth Drive\n","Petaluma, CA 94952\n"]],["Pinole, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/pinolesupercharger",["Pinole, CA\n"]],["Pismo Beach, CA Supercharger","https://www.tesla.com/findus/location/supercharger/pismobeachcasupercharger",["333 5 Cities Drive\n","Pismo Beach, CA 93449\n"]],["Placerville, CA Supercharger","https://www.tesla.com/findus/location/supercharger/placervillesupercharger",["1216-1252 Broadway\n","Placerville, CA 95667\n"]],["Playa Vista, CA - West Jefferson Blvd Supercharger","https://www.tesla.com/findus/location/supercharger/playavistacasupercharger",["12746 W Jefferson Blvd\n","Playa Vista, CA 90094\n"]],["Pleasanton, CA Supercharger","https://www.tesla.com/findus/location/supercharger/pleasantonsqushoppingsupercharger",["6000 Johnson Drive\n","Pleasanton, CA 94588\n"]],["Pomona, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/pomonasupercharger",["Pomona, CA\n"]],["Rancho Cucamonga Supercharger","https://www.tesla.com/findus/location/supercharger/ranchocucamongasupercharger",["12642 Cultural Center Dr.\n","Rancho Cucamonga, CA 91739\n"]],["Rancho Mirage, CA Supercharger","https://www.tesla.com/findus/location/supercharger/ranchoimragesupercharger",["71800 CA-111\n","Rancho Mirage, CA 92270\n"]],["Red Bluff, CA Supercharger","https://www.tesla.com/findus/location/supercharger/redbluffsupercharger",["82 Belle Mill Road\n","Red Bluff, CA 96080\n"]],["Redondo Beach Supercharger","https://www.tesla.com/findus/location/supercharger/redondobeachcasupercharger",["2410 Marine Avenue\n","Redondo Beach, CA 90278\n"]],["Richmond, CA - Pierce Street Supercharger","https://www.tesla.com/findus/location/supercharger/richmondcapiercestreetsupercharger",["3288 Pierce St\n","Richmond, CA 94804\n"]],["Richmond, CA Supercharger","https://www.tesla.com/findus/location/supercharger/richmoncaliforniasupercharger",["2157 Meeker Avenue\n","Richmond, CA 94804\n"]],["Riverside, CA - Canyon Springs Parkway Supercharger","https://www.tesla.com/findus/location/supercharger/riversidecanyonspringssupercharger",["2755 Canyon Springs Parkway\n","Riverside, CA 92507\n"]],["Riverside, CA Supercharger","https://www.tesla.com/findus/location/supercharger/riversidecaliforniasupercharger",["3370 9th St\n","Riverside, 92501\n"]],["Rohnert Park, CA Supercharger","https://www.tesla.com/findus/location/supercharger/rohnertparkcasupercharger",["475 Rohnert Park Expressway\n","Rohnert Park, CA 94928\n"]],["Roseville, CA - Galleria Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/rosevillegalleriasupercharger",["1120 Galleria Boulevard\n","Roseville, CA 95678\n"]],["Roseville, CA Supercharger","https://www.tesla.com/findus/location/supercharger/rosevillesupercharger",["1151 Galleria Blvd\n","Roseville, CA 95678\n"]],["Rowland Heights, CA Supercharger","https://www.tesla.com/findus/location/supercharger/rowlandheightscasupercharger",["Rowland Heights, CA 91748\n"]],["Sacramento, CA - Arden Way Supercharger","https://www.tesla.com/findus/location/supercharger/sacramentocasupercharger",["1689 Arden Way\n","Sacramento, CA 95815\n"]],["Sacramento, CA - Freeport Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/southsacramentosupercharger",["4700 Freeport Blvd\n","Sacramento, CA 95822\n"]],["Sacramento, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sacramentosupercharger",["3668 N. Freeway Blvd\n","Sacramento, CA 95834-0000\n"]],["Sacramento-Rocklin","https://www.tesla.com/findus/location/supercharger/rocklin",["4361 Granite Drive\n","Rocklin, CA 95677\n"]],["Salinas, CA Supercharger","https://www.tesla.com/findus/location/supercharger/salinassupercharger",["1606 North Main Street\n","Salinas, CA 93906-5102\n"]],["San Bernardino, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanbernardinosupercharger",["500 Inland Center Drive\n","San Bernardino, CA 92408\n"]],["San Bruno, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/sanbrunocasupercharger",["San Bruno, CA\n"]],["San Carlos, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sancarlocaliforniasupercharger",["1127 Industrial Road\n","San Carlos, CA 94070\n"]],["San Clemente, CA - Avenida Vista Hermosa Supercharger","https://www.tesla.com/findus/location/supercharger/sanclementecaavenidavistahermosasupercharger",["990 Avenida Vista Hermosa\n","San Clemente, CA 92673\n"]],["San Clemente, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanclementesupercharger",["101 West Avenida Vista Hermosa\n","San Clemente, CA 92672-7706\n"]],["San Diego Supercharger","https://www.tesla.com/findus/location/supercharger/sandiegopacificheightssupercharger",["10155 Pacific Heights Blvd\n","San Diego, CA 92121\n"]],["San Diego, CA - A Street Supercharger","https://www.tesla.com/findus/location/supercharger/sandiegosupercharger",["1350 6th Avenue\n","San Diego, CA 92101\n"]],["San Diego, CA - Camino Del Sur Supercharger","https://www.tesla.com/findus/location/supercharger/sdcaminodelsursupercharger",["17170 Camino Del Sur\n","San Diego, CA 92127\n"]],["San Diego, CA - Del Mar Heights Road Supercharger","https://www.tesla.com/findus/location/supercharger/delmarheightsrdsupercharger",["3275 Del Mar Heights Road\n","San Diego, CA 92014\n"]],["San Diego, CA - Friars Road Supercharger","https://www.tesla.com/findus/location/supercharger/sdmissionvalleysupercharger",["7007 Friars Road\n","San Diego, CA 92108\n"]],["San Diego, CA - La Jolla (coming soon)","https://www.tesla.com/findus/location/supercharger/sandiegolajollasupercharger",["San Diego, CA\n"]],["San Dimas, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/dandimascasupercharger",["San Dimas, CA\n"]],["San Francisco, CA - Financial District (coming soon)","https://www.tesla.com/findus/location/supercharger/san%20franciscofinancialdistrictsupercharger",["San Francisco, CA\n"]],["San Francisco, CA - Letterman Drive Supercharger","https://www.tesla.com/findus/location/supercharger/sflettermandrsupercharger",["1 Letterman Drive\n","94129, CA San Francisco\n"]],["San Francisco, CA - Mission (coming soon)","https://www.tesla.com/findus/location/supercharger/san%20franciscomissionsupercharger",["San Francisco, CA\n"]],["San Francisco, CA - SOMA (coming soon)","https://www.tesla.com/findus/location/supercharger/san%20franciscosomasupercharger",["San Francisco, CA\n"]],["San Francisco, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanfranciscocasupercharger",["601 Van Ness Avenue\n","San Francisco, CA 94102\n"]],["San Gabriel, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/sangabrielsupercharger",["San Gabriel, CA\n"]],["San Jose, CA (West) (coming soon)","https://www.tesla.com/findus/location/supercharger/wsanjosesupercharger",["San Jose, CA\n"]],["San Jose, CA - Blossom Hill Road Supercharger","https://www.tesla.com/findus/location/supercharger/sjblossomhillsupercharger",["1375 Blossom Hill Road\n","San Jose, CA 95118\n"]],["San Jose, CA - Cherry Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/sanjosecherryavesupercharger",["5160 Cherry Avenue\n","San Jose, CA 95118\n"]],["San Jose, CA - Coleman Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/sanjosecaliforniasupercharger",["533 Coleman Avenue\n","San Jose, CA 95110\n"]],["San Jose, CA - E Capitol Expressway Supercharger","https://www.tesla.com/findus/location/supercharger/sanjosecaecapitolexpresswaysupercharger",["1029 East Capitol Expressway\n","San Jose, CA 95121\n"]],["San Jose, CA - Holger Way Supercharger","https://www.tesla.com/findus/location/supercharger/sanjosecaholgerwaysupercharger",["95 Holger Way\n","San Jose, CA 95134\n"]],["San Jose, CA - Santana Row Supercharger","https://www.tesla.com/findus/location/supercharger/santanarowsjsupercharger",["330 South Winchester\n","San Jose, CA 95128\n"]],["San Jose, CA - Valet - Santana Row Supercharger","https://www.tesla.com/findus/location/supercharger/santanarowvaletsupercharger",["330 South Winchester Santana Row\n","San Jose, CA 95128\n"]],["San Juan Capistrano, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanjuancapistranosupercharger",["31971 Camino Capistrano\n","San Juan Capistrano, CA 92675\n"]],["San Luis Obispo, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanluisobisposupercharger",["100 Madonna Road\n","San Luis Obispo, CA 93405\n"]],["San Mateo Supercharger","https://www.tesla.com/findus/location/supercharger/sanmateosupercharger",["1200 Park Place\n","San Mateo, CA 94403\n"]],["San Mateo, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/sanmateocaliforniasupercharger",["San Mateo, CA\n"]],["San Mateo, CA - Bridgepointe Pkwy Supercharger","https://www.tesla.com/findus/location/supercharger/sanmbridgepointepkwysupercharger",["2220 Bridgepointe Pkwy\n","San Mateo, CA 94404-1569\n"]],["San Ramon, CA - Diablo Plaza Supercharger","https://www.tesla.com/findus/location/supercharger/sanramondiabloplazasupercharger",["2415-2505 San Ramon Valley Boulevard\n","San Ramon, CA 94583\n"]],["San Ramon, CA Supercharger","https://www.tesla.com/findus/location/supercharger/sanramoncaliforniasupercharger",["2610 Bishop Drive\n","San Ramon, CA 94583\n"]],["San Ysidro, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/sanysidrocaupserhcarger",["San Ysidro, CA\n"]],["Santa Ana Supercharger","https://www.tesla.com/findus/location/supercharger/santaanasupercharger",["2800 N. Main Street\n","Santa Ana, CA 92705-6607\n"]],["Santa Barbara, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/santabarbaracaliforniasupercharger",["Santa Barbara, CA\n"]],["Santa Clara, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/santaclarasupercharger",["Santa Clara, CA\n"]],["Santa Clara, CA Supercharger","https://www.tesla.com/findus/location/supercharger/santaclaracasupercharger",["3945 Rivermark Plaza\n","Santa Clara, CA 95054\n"]],["Santa Clarita, CA Supercharger","https://www.tesla.com/findus/location/supercharger/santaclaritacaliforniasupercharger",["24061 Newhall Ranch Road\n","Valencia, CA 91355\n"]],["Santa Cruz, CA Supercharger","https://www.tesla.com/findus/location/supercharger/santacruzcaliforniasupercharger",["911 Soquel Avenue\n","Santa Cruz, CA 95062\n"]],["Santa Monica, CA - Santa Monica Place Supercharger","https://www.tesla.com/findus/location/supercharger/santamonicacaliforniasupercharger",["395 Santa Monica Place\n","Santa Monica, CA 90401\n"]],["Santa Rosa, CA Supercharger","https://www.tesla.com/findus/location/supercharger/santarosacasupercharger",["733 Coddingtown Center\n","Santa Rosa, CA 95401\n"]],["Santa Ysabel, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/santaysabelcsupercharger",["Santa Ysabel, CA\n"]],["Scotts Valley, CA, Supercharger","https://www.tesla.com/findus/location/supercharger/scottsvalleysupercharger",["230 Mount Hermon Road\n","Scott\\'s Valley, CA 95066\n"]],["Sherman Oaks, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/shermanoakssupercharger",["Sherman Oaks, CA\n"]],["Simi Valley, CA - Tierra Rejada Road Supercharger","https://www.tesla.com/findus/location/supercharger/simivalleycasupercharger",["51 Tierra Rejada Road\n","Simi Valley, CA 93065\n"]],["Soledad, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/soledadsupercharger",["Soledad, CA\n"]],["Sonoma, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/sonomacasupercharger",["Sonoma, CA\n"]],["South San Francisco, CA Supercharger","https://www.tesla.com/findus/location/supercharger/southsfsupercharger",["250 Gateway Boulevard\n","South San Francisco, CA 94080\n"]],["Stockton, CA Supercharger","https://www.tesla.com/findus/location/supercharger/stocktonsupercharger",["2323 Grand Canal Boulevard\n","Stockton, CA 95207\n"]],["Studio City, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/studiocitycasupercharger",["Studio City, CA\n"]],["Sunnyvale, CA - W. McKinley Ave Supercharger","https://www.tesla.com/findus/location/supercharger/sunnyvalecaliforniasupercharger",["298 W. McKinley Ave\n","Sunnyvale, 94086-6193\n"]],["Susanville, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/susanvillecasupercharger",["Susanville, CA\n"]],["Tahoe City, CA Supercharger","https://www.tesla.com/findus/location/supercharger/tahoecitysupercharger",["140 Lake Boulevard\n","Tahoe City, CA 96145\n"]],["Tejon Ranch Supercharger","https://www.tesla.com/findus/location/supercharger/tejonranchcasupercharger",["5602 Dennis McCarthy Dr\n","Lebec, CA 93243\n"]],["Temecula Supercharger","https://www.tesla.com/findus/location/supercharger/temeculasupercharger",["40820 Winchester Rd.\n","Temecula, CA 92591\n"]],["Thousand Oaks, CA - East Thousand Oaks Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/thousandoakssupercharger",["4000 East Thousand Oaks Boulevard\n","Thousand Oaks, 91362\n"]],["Thousand Oaks, CA - West Hillcrest Drive Supercharger","https://www.tesla.com/findus/location/supercharger/thousandoakswesthillcrestsupercharger",["350 West Hillcrest Drive\n","Thousand Oaks, CA 91360\n"]],["Traver, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/traversupercharger",["Traver, CA\n"]],["Truckee Brockway Road Supercharger","https://www.tesla.com/findus/location/supercharger/truckeebrockwayroadsupercharger",["11209 Brockway Road\n","Truckee, CA 96161\n"]],["Truckee Donner Pass Supercharger","https://www.tesla.com/findus/location/supercharger/truckeecasupercharger",["11290 Donner Pass Rd\n","Truckee, CA 96161\n"]],["Tustin, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/tustincaliforniasupercharger",["Tustin, CA\n"]],["Twentynine Palms Supercharger","https://www.tesla.com/findus/location/supercharger/twentyninepalmssupercharger",["73829 Baseline Road\n","Twentynine Palms, CA 92277-4125\n"]],["Ukiah Supercharger","https://www.tesla.com/findus/location/supercharger/ukiahsupercharger",["250 W Clay St.\n","Ukiah, CA 95482\n"]],["Vacaville Supercharger","https://www.tesla.com/findus/location/supercharger/vacavillecasupercharger",["321 Nut Tree Road\n","Vacaville, CA 95687\n"]],["Vallejo, CA Supercharger","https://www.tesla.com/findus/location/supercharger/vallejosupercharger",["904 Admiral Callaghan Lane\n","Vallejo, CA 94591\n"]],["Venice, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/venicecaliforniasupercharger",["Venice, CA\n"]],["Ventura, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/venturacaliforniasupercharger",["Ventura, CA\n"]],["Visalia, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/visaliacaliforniasupercharger",["Visalia, CA\n"]],["Vista, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/vistasupercharger",["Vista, CA\n"]],["Walnut Creek, CA Supercharger","https://www.tesla.com/findus/location/supercharger/walnutcreekcasupercharger",["1153 Locust Street\n","Walnut Creek, CA 94596\n"]],["Watsonville, CA Supercharger","https://www.tesla.com/findus/location/supercharger/watsonvillecasupercharger",["1415 Main Street\n","Watsonville, CA 95076\n"]],["Webster, TX Supercharger","https://www.tesla.com/findus/location/supercharger/webstertxsupercharger",["21361 Gulf Freeway\n","Webster, CA 77598\n"]],["West Covina, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/westcovinacasupercharger",["West Covina, CA\n"]],["Westminster, CA Supercharger","https://www.tesla.com/findus/location/supercharger/westminstersupercharger",["1025 Westminster Mall\n","Westminster, CA 92683\n"]],["Westwood, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/westwoodcasupercharger",["Westwood, CA\n"]],["Williams, CA Supercharger","https://www.tesla.com/findus/location/supercharger/williamssupercharger",["464 6th Street\n","Williams, CA 95987\n"]],["Woodland, CA (coming soon)","https://www.tesla.com/findus/location/supercharger/woodlandcaliforniasupercharger",["Woodland, CA\n"]],["Yermo, CA Supercharger","https://www.tesla.com/findus/location/supercharger/yermosupercharger",["36017 Calico Road\n","Yermo, CA 92398\n"]],["Yuba City, CA Supercharger","https://www.tesla.com/findus/location/supercharger/yubacitycaliforniasupercharger",["1475 Tharp Road\n","Yuba City, CA 95993\n"]],["Los Angeles, CA - Alameda Street Supercharger","https://www.tesla.com/findus/location/supercharger/losangelescaalamedastreetsupercharger",["787 S. Alameda Street\n","Los Angeles, CA 90021\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0, /* remove */
tradein_payoff: 0, /* TODO remove */
tradein_equity: 0, /* TODO remove */
order_pymt: 100, 
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes:{
model_tax: 0,
destination_fee: 0, 
registration_amt: 26.62,
order_fee: 0,/* TODO remove */
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546, /* TODO remove */
non_cash_credits: [{amt:1500, name: "California Clean Fuel Reward", description: "$1,500 for all new electric vehicles registered in California", source_url: "https://cleanfuelreward.com/"}], /* TODO should be an object */
vehicle_price: 0 /* TODO remove */ },
leasing:{
upfront_tax_amt: 0, /* TODO remove */
lease_amt_due_for_delivery: 0, /* TODO remove */
acquisition_fee: 67.76, /* TODO remove */
lease_tax_rate: 3.25, 
capitalized_cost_reduction: 555, /* TODO remove */
acquisition_fee_tax: 22.59, /* TODO remove */
money_factor: 0.002019, 
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0, /* TODO remove */
lease_cash_down_payment: 0, /* TODO remove */
},
financing:{
loan_amt_due_for_delivery: 0, /* TODO remove */
loan_apr: 2.49,
loan_monthly_pymt: 0, /* TODO remove */
loan_cash_down_payment: 0, /* TODO remove */
disposition_fee: 395, 
max_financed_amt: 0 /* TODO remove */
},
registration: { source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and the DMV will mail your title and registration card. \\n You will receive a temporary registration placard to operate your vehicle while Tesla processes registration."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: true, 
region: [{region:"Greater LA/SD",longitude:"-118.298662",latitude:"+33.786594"},{region:"Bay Area",longitude:"-121.958320",latitude:"+37.509453"}],
default_zipcode: 94538
}},Colorado:{
state_name: 'Colorado',
state_abbr: 'CO',
vehicle_incentives: '$4,000 tax credit for purchase of a new vehicle\n$2,000 tax credit for lease of a new vehicle',
solar_incentives: 'Select utilities may offer a Solar incentive',
local_vehicle_incentives: null,
local_solar_incentives: 'Black Hills Energy offers a $0.05/kWh incentive for 10 years\nFort Collins offers a $500 per kW incentive up to $1,500\nColorado Springs offers a $80 per kW incentive',
all_showrooms: [["Cherry Creek","https://www.tesla.com/findus/location/store/cherrycreek",["3000 E 1st Ave Space #148\n","Denver, CO 80206\n"]],["Littleton-Broadway","https://www.tesla.com/findus/location/store/littletonbroadway",["5700 S Broadway\n","Littleton, CO 80121\n"]],["Lone Tree-Park Meadows","https://www.tesla.com/findus/location/store/parkmeadows",["8401 Park Meadows Center Dr, Suite #1650\n","Lone Tree, CO 80124\n"]],["Superior","https://www.tesla.com/findus/location/store/superior",["2 S. Marshall Rd\n","Superior, CO 80027\n"]]],
    all_service_centers: [["Littleton-Broadway","https://www.tesla.com/findus/location/service/littletonbroadway",["5700 S Broadway\n","Littleton, CO 80121\n"]],["Superior","https://www.tesla.com/findus/location/service/superior",["2 S. Marshall Rd\n","Superior, CO 80027\n"]]],
    all_charging_locations: [["Alamosa, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/alamosasupercharger",["Alamosa, CO\n"]],["Aspen, CO Supercharger","https://www.tesla.com/findus/location/supercharger/aspencosupercharger",["38750 Highway 82\n","Aspen, CO 81611-2506\n"]],["Boulder, CO Supercharger","https://www.tesla.com/findus/location/supercharger/bouldercosupercharger",["1710 29th Street\n","Boulder, CO 80301\n"]],["Brighton, CO Supercharger","https://www.tesla.com/findus/location/supercharger/brightoncosupercharger",["5112 East Bromley Lane\n","Brighton, CO 80603\n"]],["Brush Supercharger","https://www.tesla.com/findus/location/supercharger/brushsupercharger",["1156 CO-71\n","Brush, CO 80723-2902\n"]],["Centennial, CO Supercharger","https://www.tesla.com/findus/location/supercharger/centennialcosupercharger",["9555 East County Line Road\n","Centennial, CO 80112\n"]],["Colorado Springs Supercharger","https://www.tesla.com/findus/location/supercharger/coloradospringssupercharger",["215 North Cascade Avenue\n","Colorado Springs, CO 80903\n"]],["Conifer, CO - Conifer Road Supercharger","https://www.tesla.com/findus/location/supercharger/conifercosupercharger",["25637 Conifer Road\n","Conifer, CO 80433-9078\n"]],["Denver, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/denvercosupercharger",["Denver, CO\n"]],["Denver, CO - Cherry Creek (coming soon)","https://www.tesla.com/findus/location/supercharger/denvercherrycreeysupercharger",["Denver, CO\n"]],["Denver, CO Supercharger","https://www.tesla.com/findus/location/supercharger/denversupercharger",["4310 Airport Way\n","Denver, CO 80239\n"]],["Estes Park, CO Supercharger","https://www.tesla.com/findus/location/supercharger/estesparksupercharger",["333 Wonderview Avenue\n","Estes Park, CO 80517-9665\n"]],["Glenwood Springs, CO Supercharger","https://www.tesla.com/findus/location/supercharger/glenwoodspringssupercharger",["125 Wulfsohn Rd\n","Glenwood Springs, CO 81601\n"]],["Grand Junction, CO Supercharger","https://www.tesla.com/findus/location/supercharger/grandjunctionsupercharger",["2424 U.S-6\n","Grand Junction, CO 81505\n"]],["Idaho Springs, CO Supercharger","https://www.tesla.com/findus/location/supercharger/idahospringscosupercharger",["1319 Miner Street\n","Idaho Springs, CO 80452\n"]],["Kremmling, CO - Park Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/kremmlingcoparkavenuesupercharger",["605 Park Avenue\n","Kremmling, CO 80459\n"]],["Lakewood, CO Supercharger","https://www.tesla.com/findus/location/supercharger/lakewoodcosupercharger",["14500 West Colfax Avenue\n","Lakewood, CO 80401\n"]],["Limon, CO Supercharger","https://www.tesla.com/findus/location/supercharger/limonsupercharger",["2221 6th St.\n","Limon, CO 80828\n"]],["Lone Tree, CO - Park Meadows Center Drive","https://www.tesla.com/findus/location/supercharger/lonetreesupercharger",["8401 Park Meadows Center Drive\n","Lone Tree, CO 80124-5128\n"]],["Loveland Supercharger","https://www.tesla.com/findus/location/supercharger/lovelandsupercharger",["4705 Clydesdale Parkway\n","Loveland, CO 80538-9347\n"]],["Montrose, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/montrosecosupercharger",["Montrose, CO\n"]],["Poncha Springs, CO Superchargers","https://www.tesla.com/findus/location/supercharger/ponchaspringssupercharger",["6250 US Highway 285\n","Poncha Springs, CO 81242-0000\n"]],["Silverthorne, CO Supercharger","https://www.tesla.com/findus/location/supercharger/silverthornesupercharger",["309 Rainbow Dr\n","Silverthorne, CO 80498\n"]],["Steamboat Springs, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/steamboatspringssupercharger",["Steamboat Springs, CO\n"]],["Superior, CO - South Marshall Road Supercharging","https://www.tesla.com/findus/location/supercharger/superiorcosouthmarshallroadsupercharging",["2 South Marshall Road\n","Superior, CO 80027\n"]],["Telluride, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/telluridecosupercharger",["Telluride, CO\n"]],["Thornton, CO Supercharger","https://www.tesla.com/findus/location/supercharger/thorntoncosupercharger",["237 East 120th Avenue\n","Thornton, CO 80233\n"]],["Thornton, CO Supercharger","https://www.tesla.com/findus/location/supercharger/thortoncosupercharger",["237 East 120th Avenue\n","Thornton, CO 80233\n"]],["Trinidad Supercharger","https://www.tesla.com/findus/location/supercharger/trinidadsupercharger",["9960 Santa Fe Trail\n","Trinidad, CO 81082\n"]],["Walsenburg, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/walsenburgsupercharger",["Walsenburg, CO\n"]],["Wheat Ridge, CO (coming soon)","https://www.tesla.com/findus/location/supercharger/wheatridgesupercharger",["Wheat Ridge, CO\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Denver',
default_zipcode: 80203
}},Connecticut:{
state_name: 'Connecticut',
state_abbr: 'CT',
vehicle_incentives: '$1,500 rebate for new vehicles with a base price under $42,000\nExemption from state emissions testing\nReduced vehicle registration fee',
solar_incentives: 'Solar: Up to $300 per kW PTC',
local_vehicle_incentives: 'City of New Haven offers free public parking',
local_solar_incentives: 'Norwich Public Utilities offers a $680/kW incentive up to 10 kW\nPowerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions',
all_showrooms: [["Milford","https://www.tesla.com/findus/location/store/milford",["881 Boston Post Road\n","Milford, CT 6460\n"]]],
all_service_centers: [["Milford","https://www.tesla.com/findus/location/service/milford",["881 Boston Post Road\n","Milford, CT 6460\n"]]],
all_charging_locations: [["Danbury, CT Supercharger","https://www.tesla.com/findus/location/supercharger/danburyctsupercharger",["7 Backus Ave\n","Danbury, 06810-7422\n"]],["Darien, CT North Supercharger","https://www.tesla.com/findus/location/supercharger/dariennorthsupercharger",["I-95 North after exit 12\n","Darien, CT 6820\n"]],["Darien, CT South Supercharger","https://www.tesla.com/findus/location/supercharger/dariensouthsupercharger",["I-95 South after exit 10\n","Darien, CT 6820\n"]],["Fairfield, CT - Northbound Supercharger","https://www.tesla.com/findus/location/supercharger/fairfieldctnsupercharger",["165 Round Hill Road\n","Fairfield, CT 06824\n"]],["Fairfield, CT - Southbound Supercharger","https://www.tesla.com/findus/location/supercharger/fairfieldctssupercharger",["267 Round Hill Road\n","Fairfield, CT 06824\n"]],["Greenwich, CT North Supercharger","https://www.tesla.com/findus/location/supercharger/greenwichnorthsupercharger",["3000 Merritt Parkway\n","Greenwich, CT 6830\n"]],["Greenwich, CT South Supercharger","https://www.tesla.com/findus/location/supercharger/greenwichsouthsupercharger",["2000 Merritt Parkway\n","Greenwich, CT 6830\n"]],["Hamden, CT (coming soon)","https://www.tesla.com/findus/location/supercharger/hamdensupercharger",["Hamden, CT\n"]],["Hartford, CT - Leibert Road Supercharger","https://www.tesla.com/findus/location/supercharger/hartfordctleibertroadsupercharger",["165 Leibert Road\n","Hartford, CT 06120\n"]],["Hartford, CT Supercharger","https://www.tesla.com/findus/location/supercharger/hartfordctsupercharger",["777 Main Street\n","Hartford, CT 06824-2308\n"]],["Lisbon, CT (coming soon)","https://www.tesla.com/findus/location/supercharger/lisbonctsupercharger",["Lisbon, CT\n"]],["Madison, CT - Northbound Supercharger","https://www.tesla.com/findus/location/supercharger/nmadisonctsupercharger",["1-95 North Avenue\n","Madison, CT 06443\n"]],["Madison, CT - Southbound Supercharger","https://www.tesla.com/findus/location/supercharger/smadisonctsupercharger",["1-95 South Street\n","Madison, CT 06443\n"]],["Manchester, CT Supercharger","https://www.tesla.com/findus/location/supercharger/manchesterctsupercharger",["1470 Pleasant Valley Road\n","Manchester, CT 06042-8764\n"]],["Meriden, CT Supercharger","https://www.tesla.com/findus/location/supercharger/meridenctsupercharger",["903 East Main Street\n","Meriden, CT 06450\n"]],["Milford - Boston Post Road Supercharger","https://www.tesla.com/findus/location/supercharger/milfordbostonpostsupercharger",["1201 Boston Post Road\n","Milford, CT 6460\n"]],["Milford, CT North Supercharger","https://www.tesla.com/findus/location/supercharger/milfordnorthsupercharger",["Milford Travel Plaza\n","Milford, CT 6460\n"]],["Milford, CT South Supercharger","https://www.tesla.com/findus/location/supercharger/milfordsouthsupercharger",["Travel Plaza\n","Milford, CT 6460\n"]],["New London, CT Supercharger","https://www.tesla.com/findus/location/supercharger/newlondonctsupercharger",["351 North Frontage Road\n","New London, CT 06320\n"]],["North Canaan, CT Supercharger","https://www.tesla.com/findus/location/supercharger/northcanaanctsupercharger",["11 East Main Street\n","North Canaan, CT 06018\n"]],["North Stamford, CT Supercharger","https://www.tesla.com/findus/location/supercharger/northstamfordsupercharger",["1145 High Ridge Rd\n","North Stamford, CT 06905-1215\n"]],["Stamford, CT Supercharger","https://www.tesla.com/findus/location/supercharger/stamfordsupercharger",["2233 Summer Street\n","Stamford, CT 06905\n"]],["Torrington, CT (coming soon)","https://www.tesla.com/findus/location/supercharger/torringtonsupercharger",["Torrington, CT\n"]],["Trumbull, CT (coming soon)","https://www.tesla.com/findus/location/supercharger/trumbullsupercharger",["Trumbull, CT\n"]],["Waterbury, CT Supercharger","https://www.tesla.com/findus/location/supercharger/waterburyctsupercharger",["160 Kukas Lane\n","Waterbury, CT 6705\n"]],["West Hartford Supercharger","https://www.tesla.com/findus/location/supercharger/westhartfordsupercharger",["1445 New Britain Ave.\n","West Hartford, CT 6110\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: false, 
region: 'NY Metro',
default_zipcode: 06106
}},Delaware:{
state_name: 'Delaware',
state_abbr: 'DE',
vehicle_incentives: '$2,500 rebate for new vehicles with a purchase price under $60,000\n$500 rebate available for home charging installation',
solar_incentives: 'Select utilities may offer a Solar incentive',
local_vehicle_incentives: 'DEC offers customers a $200 credit and $5/month credit for EV charging in off hours',
local_solar_incentives: 'Delmarva Power & Light offers a cash rebate to cover cost of solar installation equal to $500 per kW up to $3,000',
all_showrooms: [["Christiana Mall","https://www.tesla.com/findus/location/store/christianamall",["132 Christiana Mall Space 1401\n","Newark, DE 19702\n"]]],
all_service_centers: [["Wilmington","https://www.tesla.com/findus/location/service/wilmington",["600 First State Boulevard\n","Wilmington, DE 19804\n"]]],
all_charging_locations: [["Claymont, DE - Philadelphia Pike Supercharger","https://www.tesla.com/findus/location/supercharger/claymontdephiladelphiapikesupercharger",["2621 Philadelphia Pike\n","Claymont, DE 19703\n"]],["Claymont, DE Supercharger","https://www.tesla.com/findus/location/supercharger/claymontdesupercharger",["605 Naamans Road\n","Claymont, DE 19703\n"]],["Dover, DE Supercharger","https://www.tesla.com/findus/location/supercharger/doverdesupercharger",["2800 North Dupont Highway\n","Dover, DE 19901\n"]],["Lewes, DE Supercharger","https://www.tesla.com/findus/location/supercharger/lewesdesupercharger",["17663 Dartmouth Drive\n","Lewes, DE 19958-4203\n"]],["Newark Supercharger","https://www.tesla.com/findus/location/supercharger/newarkdesupercharger",["530 JFK Memorial Highway\n","Newark, DE 19725\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Philadelphia',
default_zipcode: 19901
}},Florida:{
state_name: 'Florida',
state_abbr: 'FL',
vehicle_incentives: 'Funding may be available for home charging installation assistance',
solar_incentives: null,
local_vehicle_incentives: 'Jacksonville Electric Authority (JEA) offers a rebate up to $1,000 for the purchase or lease of an EV\nGulf Power is offering a $750 rebate for EV home charging installation (Expiring 12/31/18)',
local_solar_incentives: null,
all_showrooms: [["Aventura-Aventura Mall","https://www.tesla.com/findus/location/store/aventuralmall",["19565 Biscayne Blvd #1948\n","Aventura, FL 33180\n"]],["Boca Raton-Town Center at Boca Raton","https://www.tesla.com/findus/location/store/bocatowncenter",["6000 Glades Rd Suite 1121A\n","Boca Raton, FL 33431\n"]],["Coral Gables","https://www.tesla.com/findus/location/store/coralgables",["3851 Bird Road\n","Miami, FL 33146\n"]],["Dania Beach","https://www.tesla.com/findus/location/store/daniabeach",["1949 Tigertail Boulevard\n","Dania Beach, FL 33004\n"]],["Estero-Coconut Point Mall","https://www.tesla.com/findus/location/store/esterococonutpointmall",["23101 Fashion Drive, Suite 113\n","Estero, FL 33928-2506\n"]],["Jacksonville-St. Johns Town Center","https://www.tesla.com/findus/location/store/jacksonville",["4835 River City Drive Suite 105\n","Jacksonville, FL 32246\n"]],["Miami-Dadeland","https://www.tesla.com/findus/location/store/dadeland",["7535 N. Kendall Drive\n","Miami, FL 33156\n"]],["Miami-Design District","https://www.tesla.com/findus/location/store/miamidesigndistrict",["151 NE 41st Street, Suite 125\n","Miami, FL 33137\n"]],["Naples-Waterside Shops","https://www.tesla.com/findus/location/store/napleswatersideshops",["5415 Tamiami Trail N. H-2\n","Naples, FL 34108\n"]],["Orlando - Florida Mall Showroom","https://www.tesla.com/findus/location/store/orlandofloridamall",["8001 S Orange Blossom Trail Space 1280A\n","Orlando, FL 32809\n"]],["Orlando-Eatonville","https://www.tesla.com/findus/location/store/orlando",["100 S Lake Destiny Rd\n","Eatonville, FL 32810\n"]],["Palm Beach Gardens – The Gardens Mall","https://www.tesla.com/findus/location/store/gardensmallpalmbeach",["3101 PGA Boulevard, Store Q-215\n","Palm Beach Gardens, FL 33410\n"]],["Sarasota-University Town Center","https://www.tesla.com/findus/location/store/sarasota",["140 University Town Center Drive\n","Suite 138\n","Sarasota, FL 34243\n"]],["Tampa - International Plaza","https://www.tesla.com/findus/location/store/tampainternationalplaza",["2223 N Westshore Blvd Suite #269\n","Tampa, FL 33607\n"]],["Tampa-Florida Ave","https://www.tesla.com/findus/location/store/tampafloridaave",["11945 N. Florida Ave\n","Tampa, FL 33612\n"]],["West Palm Beach – Okeechobee Blvd","https://www.tesla.com/findus/location/store/westplambeachokeechobee",["5544 Okeechobee Blvd\n","West Palm Beach, FL 33417\n"]]],
all_service_centers: [["Coral Gables","https://www.tesla.com/findus/location/service/coralgables",["3851 Bird Road\n","Miami, FL 33146\n"]],["Dania Beach","https://www.tesla.com/findus/location/service/daniabeach",["1949 Tigertail Boulevard\n","Dania Beach, FL 33004\n"]],["Fort Myers-Colonial Drive","https://www.tesla.com/findus/location/service/fortmeyerscolonialdr",["8900 Colonial Center Dr\n","Fort Myers, FL 33905-7814\n"]],["Jacksonville","https://www.tesla.com/findus/location/service/jacksonvilleservice",["7818 Philips Highway\n","Jacksonville, FL 32256\n"]],["Orlando-Eatonville","https://www.tesla.com/findus/location/service/orlando",["100 S Lake Destiny Rd\n","Eatonville, FL 32810\n"]],["Pensacola","https://www.tesla.com/findus/location/service/pensacola",["175-B E Olive Rd\n","Pensacola, FL 32514\n"]],["Sarasota","https://www.tesla.com/findus/location/service/sarasotaservice",["5231 McIntosh Road\n","Sarasota, FL 34233\n"]],["Tampa-Florida Ave","https://www.tesla.com/findus/location/service/tampafloridaave",["11945 N. Florida Ave\n","Tampa, FL 33612\n"]],["West Palm Beach – Okeechobee Blvd","https://www.tesla.com/findus/location/service/westplambeachokeechobee",["5544 Okeechobee Blvd\n","West Palm Beach, FL 33417\n"]]],
all_charging_locations: [["Altamonte Springs, FL Supercharger","https://www.tesla.com/findus/location/supercharger/altamontespringssupercharger",["355 East Altamonte Drive\n","Altamonte Springs, FL 32701\n"]],["Aventura, FL Supercharger","https://www.tesla.com/findus/location/supercharger/aventuraflsupercharger",["19501 Biscayne Boulevard\n","Aventura, FL 33180\n"]],["Beach Park, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/beachparksupercharger",["Beach Park, FL\n"]],["Boca Raton, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/bocaratonflsupercharger",["Boca Raton, FL\n"]],["Brandon, FL Supercharger","https://www.tesla.com/findus/location/supercharger/brandonsupercharger",["2400 W Brandon Blvd\n","Brandon, FL 33511\n"]],["Celebration, FL Supercharger","https://www.tesla.com/findus/location/supercharger/celebrationfloridasupercharger",["6210 W Irlo Bronson Memorial Hwy\n","Celebration, FL 34747\n"]],["Clearwater, FL Supercharger","https://www.tesla.com/findus/location/supercharger/clearwaterflsupercharger",["26508 US Highway 19 North\n","Clearwater, FL 33761\n"]],["Daytona Beach, FL Supercharger","https://www.tesla.com/findus/location/supercharger/daytonabeachsupercharger",["2500 West International Speedway Boulevard\n","Daytona Beach, FL 32114\n"]],["DeFuniak Springs Supercharger","https://www.tesla.com/findus/location/supercharger/defuniakspringssupercharger",["Corner of Baldwin Ave. & 10th Street\n","DeFuniak Springs, FL 32435\n"]],["Deerfield Beach, FL Supercarger","https://www.tesla.com/findus/location/supercharger/deerfieldbeachsupercharger",["20 SW 12th Avenue\n","Deerfield Beach, FL 33442\n"]],["Delray Beach, FL Supercharger","https://www.tesla.com/findus/location/supercharger/delraybeachflsupercharger",["14851 Lyons Road\n","Delray Beach, FL 33446\n"]],["Deltona, FL Supercharger","https://www.tesla.com/findus/location/supercharger/Deltonaflsupercharger",["3400 Howland Blvd\n","Deltona, FL 32725\n"]],["Florida City Supercharger","https://www.tesla.com/findus/location/supercharger/floridacitysupercharger",["33505 South Dixie Hwy\n","Florida City, FL\n"]],["Fort Drum, FL Supercharger","https://www.tesla.com/findus/location/supercharger/fortdrumsupercharger",["184 Florida\\'s Turnpike\n","Okeechobee, FL 34972\n"]],["Fort Lauderdale, FL Supercharger","https://www.tesla.com/findus/location/supercharger/fortlauderdaleflsupercharger",["2620 West Broward Boulevard\n","Fort Lauderdale, FL 33312\n"]],["Fort Myers, FL - Dani Drive Supercharger","https://www.tesla.com/findus/location/supercharger/fortmyersflsupercharger",["9355 Six Mile Cypress Parkway\n","Fort Myers, FL 33966-6527\n"]],["Fort Myers, FL Supercharger","https://www.tesla.com/findus/location/supercharger/fortmyerssupercharger",["Gulf Coast Town Center\n","Fort Myers, FL 33913\n"]],["Fort Pierce, FL Supercharger","https://www.tesla.com/findus/location/supercharger/forepierceflsupercharger",["5575 Okeechobee Road\n","Fort Pierce, FL 34947\n"]],["Gainesville, FL Supercharger","https://www.tesla.com/findus/location/supercharger/gainesvillefloridasupercharger",["3217 Southwest 35th Boulevard\n","Gainesville, FL 32608\n"]],["Hollywood, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/hollywoodfloridasupercharger",["Hollywood, FL\n"]],["Jacksonville, FL - Chaffee Road Supercharger","https://www.tesla.com/findus/location/supercharger/jacksonvilleflchaffeeroadsupercharger",["703 Chaffee Road\n","Jacksonville, FL 32221\n"]],["Jacksonville, FL - County Road Supercharger","https://www.tesla.com/findus/location/supercharger/jacksonvilleflcountyrdsupercharger",["2220 County Road 210\n","St. Johns, FL 32259\n"]],["Jacksonville, FL - Gate Parkway Supercharger","https://www.tesla.com/findus/location/supercharger/jacksonvilleflsupercharger",["4866 Gate Parkway\n","Jacksonville, FL 32246\n"]],["Key West, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/keywestflsupercharger",["Key West, FL\n"]],["Kissimmee, FL Supercharger","https://www.tesla.com/findus/location/supercharger/kissimmeesupercharger",["7940 West Irlo Bronson Memorial Highway\n","Kissimmee, FL 34747\n"]],["Lady Lake, FL Supercharger","https://www.tesla.com/findus/location/supercharger/ladylakeflsupercharger",["116 North Highway 27/441\n","Lady Lake, FL 32159\n"]],["Lake City, FL Supercharger","https://www.tesla.com/findus/location/supercharger/lakecitysupercharger",["2941 W US Hwy 90\n","Lake City, FL 32055\n"]],["Lakeland, FL Supercharger","https://www.tesla.com/findus/location/supercharger/lakelandflsupercharger",["4320 US Highway 98 North\n","Lakeland, FL 33809\n"]],["Live Oak Supercharger","https://www.tesla.com/findus/location/supercharger/liveoaksupercharger",["6458 US-129\n","Live Oak, FL 32060\n"]],["Marathon Supercharger","https://www.tesla.com/findus/location/supercharger/marathonsupercharger",["9400 Overseas Hwy.\n","Marathon, FL 33050\n"]],["Miami Beach, FL - Bal Harbour (coming soon)","https://www.tesla.com/findus/location/supercharger/balharbourmiamisupercharger",["Miami Beach, FL\n"]],["Miami Beach, FL - South Beach (coming soon)","https://www.tesla.com/findus/location/supercharger/southbeachmiamisupercharger",["Miami Beach, FL\n"]],["Miami, FL - Mary Brickell Village Supercharger","https://www.tesla.com/findus/location/supercharger/marybrickellvillagesupercharger",["900 S Miami Ave\n","Miami, FL 33130\n"]],["Miami, FL - NE 41st Street Supercharger","https://www.tesla.com/findus/location/supercharger/miamine41stsupercharger",["90 NE 41st Street\n","Miami, FL 33137\n"]],["Miami, FL - SW 24th Street Supercharger","https://www.tesla.com/findus/location/supercharger/miami24thsupercharger",["6971 SW 24th Street\n","Miami, FL 33155\n"]],["Miami, FL - SW 7th Street Supercharger","https://www.tesla.com/findus/location/supercharger/miamisw7stsupercharger",["701 South Miami Avenue\n","Miami, 33130-1946\n"]],["Miami, FL - SW 8th Street Supercharger","https://www.tesla.com/findus/location/supercharger/miami8thstsupercharger",["701 South Miami Avenue\n","Miami, FL 33130-1946\n"]],["Miami, FL - South Dixie Highway Supercharger","https://www.tesla.com/findus/location/supercharger/miamiflsouthdixiehighwaysupercharger",["8312 South Dixie Highway\n","Miami, FL 33143\n"]],["Millenia, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/milleniaflsupercharger",["Millenia, FL\n"]],["Naples Supercharger","https://www.tesla.com/findus/location/supercharger/naplessupercharger",["499 Bayfront Place\n","Naples, FL 34102-6454\n"]],["North Naples, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/northnaplesflsupercharger",["North Naples, FL\n"]],["Ocala, FL Supercharger","https://www.tesla.com/findus/location/supercharger/ocalasupercharger",["4414 SW College Rd\n","Ocala, FL 34474\n"]],["Ochopee, FL Supercharger","https://www.tesla.com/findus/location/supercharger/ochopeeflsupercharger",["47801 West State Road 84\n","Ochopee, FL 34141\n"]],["Orlando, FL - North Alafaya Trail Supercharger","https://www.tesla.com/findus/location/supercharger/aafayatrailsupercharger",["413 North Alafaya Trail\n","Orlando, FL 32828\n"]],["Orlando, FL - W. Sand Lake Rd Supercharger","https://www.tesla.com/findus/location/supercharger/orlandofloridasupercharger",["6500 West Sand Lake Road\n","Orlando, FL 32819-8902\n"]],["Palm Coast, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/palmcoastsupercharger",["Palm Coast, FL\n"]],["Panama City Beach, FL Supercharger","https://www.tesla.com/findus/location/supercharger/destinfloridasupercharger",["14100 Panama City Beach Parkway\n","Panama City Beach, FL 32413\n"]],["Pembroke Pines, FL Supercharger","https://www.tesla.com/findus/location/supercharger/pembrokepinesflsupercharger",["14804-14954 Pines Boulevard\n","Pembroke Pines, FL 33027\n"]],["Pensacola, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/pensacolaflsupercharger",["Pensacola, FL\n"]],["Pinellas Park Supercharger","https://www.tesla.com/findus/location/supercharger/pinellasparksupercharger",["3101 Gandy Blvd\n","Pinellas Park, 33782-6203\n"]],["Plantation Supercharger","https://www.tesla.com/findus/location/supercharger/plantationsupercharger",["801 S. University Drive\n","Plantation, FL 33324\n"]],["Port Orange, FL Supercharger","https://www.tesla.com/findus/location/supercharger/portorangesupercharger",["5302 S. Williamson Blvd\n","Port Orange, FL 32128\n"]],["Port St. Lucie, FL Supercharger","https://www.tesla.com/findus/location/supercharger/portstluciesupercharger",["1701 NW Peacock Blvd\n","Port St. Lucie, FL 34986\n"]],["Riverview, FL Supercharger","https://www.tesla.com/findus/location/supercharger/riverviewsupercharger",["10665 Big Bend Road\n","Riverview, FL 33578\n"]],["Sarasota Supercharger","https://www.tesla.com/findus/location/supercharger/sarasotafloridasupercharger",["5903 Honore Ave\n","Sarasota, FL 34238\n"]],["St. Augustine, FL Supercharger","https://www.tesla.com/findus/location/supercharger/staugustinesupercharger",["2700 Florida 16\n","St. Augustine, FL 32092\n"]],["Tallahassee Supercharger","https://www.tesla.com/findus/location/supercharger/tallahasseesupercharger",["3528 Thomasville Rd\n","Tallahassee, FL 32308\n"]],["Tampa, FL - Wesley Chapel (coming soon)","https://www.tesla.com/findus/location/supercharger/tampawesleychapelsupercharger",["Tampa, FL\n"]],["Tampa, FL - West Swann Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/tampawestswannavesupercharger",["2100 West Swann Avenue\n","Tampa, FL 33606\n"]],["Tampa, FL Supercharger","https://www.tesla.com/findus/location/supercharger/tampafloridasupercharger",["2502 North 50th Street\n","Tampa, FL 33619-2742\n"]],["Titusville, FL Supercharger","https://www.tesla.com/findus/location/supercharger/cocoawestsupercharger",["3055 Columbia Blvd\n","Titusville, FL 32780\n"]],["Turkey Lake Supercharger","https://www.tesla.com/findus/location/supercharger/turkeylakesupercharger",["Florida Turnpike\n","Turkey Lake, FL 32835\n"]],["Vero Beach, FL Supercharger","https://www.tesla.com/findus/location/supercharger/verobeachsupercharger",["9050 20th Street\n","Vero Beach, FL 32966\n"]],["West Melbourne, FL Supercharger","https://www.tesla.com/findus/location/supercharger/westmelbournesupercharger",["206 Palm Bay Road\n","West Melbourne, FL 32904-0000\n"]],["West Palm Beach, FLWest Palm Beach, FL - Garden Road Supercharger","https://www.tesla.com/findus/location/supercharger/westpalmbeachfloridasupercharger",["7289 Garden Road\n","West Palm Beach, FL 33404\n"]],["Weston, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/westonflsupercharger",["Weston, FL\n"]],["Winter Garden, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/wintergardenflsupercharger",["Winter Garden, FL\n"]],["Winter Park, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/winterparksupercharger",["Winter Park, FL\n"]],["Yeehaw Junction, FL (coming soon)","https://www.tesla.com/findus/location/supercharger/yeehawjunctionsupercharger",["Yeehaw Junction, FL\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Florida',
default_zipcode: 32399
}},Georgia:{
state_name: 'Georgia',
state_abbr: 'GA',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Georgia Power offers a $250 rebate for EV home charging installation as well as reduced electricity rates based on time-of-use for EV owners (Expiring 12/31/18)',
local_solar_incentives: null,
all_showrooms: [["Alpharetta","https://www.tesla.com/findus/location/store/alpharetta",["6165 Avalon Boulevard\n","Alpharetta, GA 30009\n"]],["Alpharetta-Roswell","https://www.tesla.com/findus/location/store/alpharettaroswell",["1400 Upper Hembree Rd\n","Roswell, GA 30076\n"]],["Atlanta-Decatur","https://www.tesla.com/findus/location/store/atlantadecatur",["1580 Church St\n","Decatur, GA 30033\n"]]],
all_service_centers: [["Alpharetta-Roswell","https://www.tesla.com/findus/location/service/alpharettaroswell",["1400 Upper Hembree Rd\n","Roswell, GA 30076\n"]],["Atlanta-Decatur","https://www.tesla.com/findus/location/service/atlantadecatur",["1580 Church St\n","Decatur, GA 30033\n"]],["Marietta","https://www.tesla.com/findus/location/service/mariettasalesanddelivery",["1395 S. Marietta Pkwy Bldg 100 Suite 115\n","Marietta, GA 30067\n"]]],
all_charging_locations: [["Acworth, GA Supercharger","https://www.tesla.com/findus/location/supercharger/acworthsupercharger",["3500 Baker Road\n","Atlanta, GA 30101\n"]],["Alpharetta, GA Supercharger","https://www.tesla.com/findus/location/supercharger/alpharettagasupercharger",["400 Avalon Boulevard\n","Alpharetta, GA 30009\n"]],["Athens, GA Supercharger","https://www.tesla.com/findus/location/supercharger/athensgasupercharger",["1791 Oconee Connector\n","Athens, GA 30606\n"]],["Atlanta Supercharger","https://www.tesla.com/findus/location/supercharger/atlantasupercharger",["1380 Atlantic Drive NW\n","Atlanta, GA 30363\n"]],["Atlanta, GA - Lenox Road Supercharger","https://www.tesla.com/findus/location/supercharger/atlantalenoxrdsupercharger",["3393 Peachtree Road\n","Atlanta, GA 30326\n"]],["Atlanta, GA - Peachtree Road Supercharger","https://www.tesla.com/findus/location/supercharger/atlantapeachtreesupercharger",["3393 Peachtree Road\n","Atlanta, GA 30326\n"]],["Augusta, GA - Belair Frontage Road Supercharger","https://www.tesla.com/findus/location/supercharger/augustagabelairsupercharger",["4329 Belair Frontage Road\n","Augusta, GA 30909\n"]],["Augusta, GA Supercharger","https://www.tesla.com/findus/location/supercharger/augustagasupercharger",["1069 Stevens Creek Road\n","Augusta, GA 30907\n"]],["Brunswick, GA Supercharger","https://www.tesla.com/findus/location/supercharger/brunswickgasupercharger",["380 Millennium Boulevard\n","Brunswick, GA 31525\n"]],["Brunswick, GA Supercharger","https://www.tesla.com/findus/location/supercharger/brunswickgasupercharger",["380 Millennium Boulevard\n","Brunswick, GA 31525\n"]],["Buford, GA Supercharger","https://www.tesla.com/findus/location/supercharger/bufordsupercharger",["1695 Mall of Georgia Blvd\n","Buford, GA 30519\n"]],["College Park, GA (coming soon)","https://www.tesla.com/findus/location/supercharger/collegeparkgasupercharger",["College Park, GA\n"]],["Columbus, GA (coming soon)","https://www.tesla.com/findus/location/supercharger/columbusgasupercharger",["Columbus, GA\n"]],["Kingsland, GA Supercharger","https://www.tesla.com/findus/location/supercharger/kingslandsupercharger",["1190 East Boone Avenue\n","Kingsland, GA 31548\n"]],["Lithonia, GA Supercharger","https://www.tesla.com/findus/location/supercharger/lithoniageorgiasupercharger",["3007 Panola Road\n","Lithonia, GA 30038\n"]],["Macon, GA - Tom Hill Senior Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/macongarivergatesupercharger",["121 Tom Hill Senior Boulevard\n","Macon, GA 31210\n"]],["Macon, GA Supercharger","https://www.tesla.com/findus/location/supercharger/macongasupercharger",["450 Martin Luther King Jr Blvd\n","Macon, GA 31201\n"]],["Madison, GA (coming soon)","https://www.tesla.com/findus/location/supercharger/madisongasupercharger",["Madison, GA\n"]],["Metter, GA Supercharger","https://www.tesla.com/findus/location/supercharger/mettersupercharger",["1118 South Lewis Street\n","Metter, GA 30439\n"]],["Sandy Springs, GA (coming soon)","https://www.tesla.com/findus/location/supercharger/sandyspringsgasupercharger",["Sandy Springs, GA\n"]],["Savannah, GA Supercharger","https://www.tesla.com/findus/location/supercharger/savannahsupercharger",["400 Airways Avenue\n","Savannah, GA 31408\n"]],["Tifton, GA Supercharger","https://www.tesla.com/findus/location/supercharger/tiftonsupercharger",["1204 U.S. 82\n","Tifton, GA 31794\n"]],["Valdosta, GA Supercharger","https://www.tesla.com/findus/location/supercharger/valdostagasupercharger",["2112 West Hill Avenue\n","Valdosta, GA 31601\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and the DMV will mail your title and registration card. \\n You will receive a temporary registration placard to operate your vehicle while Tesla processes registration."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Atlanta',
default_zipcode: 30334
}},Hawaii:{
state_name: 'Hawaii',
state_abbr: 'HI',
vehicle_incentives: 'Carpool lane access and reduced rates for electric vehicle charging',
solar_incentives:'Solar: State tax credit equal to the lesser of 35% of actual system cost or $5,000 per 5 kW',
local_vehicle_incentives:'HEC, Maui Electric and Hawaii Electric Light Company offer reduced electricity rates based on time-of-use for EV owners\nEV owners are also eligible for a number of other benefits including emissions test exemptions, free parking, HOV lane access',
local_solar_incentives:null,
all_showrooms:[["Honolulu-Ala Moana Center","https://www.tesla.com/findus/location/store/alamoana",["1450 Ala Moana Blvd Suite 2035\n","Honolulu, HI 96814\n"]],["International Market Place","https://www.tesla.com/findus/location/store/hiinternationalmarketplace",["2330 Kalakaua Ave Level 1 Banyan Court\n","Honolulu, HI 96815\n"]]],
all_service_centers:[["Honolulu-746 Auahi Street","https://www.tesla.com/findus/location/service/honolulu746auahistreet",["746 Auahi St\n","Honolulu, HI 96813\n"]]],
all_charging_locations:[["Honolulu, HI (coming soon)","https://www.tesla.com/findus/location/supercharger/honolulusupercharger",["Honolulu, HI\n"]],["Kailua, HI (coming soon)","https://www.tesla.com/findus/location/supercharger/kailluahawaiisupercharger",["Kailua, HI\n"]],["Maui, HI (coming soon)","https://www.tesla.com/findus/location/supercharger/mauihawaiisupercharger",["Maui, HI\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region:'Honolulu',
default_zipcode:96813
}},Idaho:{
state_name: 'Idaho',
state_abbr: 'ID',
vehicle_incentives: 'State exemption from vehicle inspection & maintenance program',
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Boise-Beverly Street","https://www.tesla.com/findus/location/store/boisebeverlyst",["2592 S Beverly Street Bldg B Suite 126\n","Boise, ID 83709\n"]]],
all_service_centers: [["Boise-Beverly Street","https://www.tesla.com/findus/location/service/boisebeverlyst",["2592 S Beverly Street Bldg B Suite 126\n","Boise, ID 83709\n"]]],
all_charging_locations: [["Boise Supercharger","https://www.tesla.com/findus/location/supercharger/boisesupercharger",["1426 South Entertainment Ave\n","Boise, ID 83709\n"]],["Burley, ID Supercharger","https://www.tesla.com/findus/location/supercharger/burleyidsupercharger",["240 East 5th Street North\n","Burley, ID 83318\n"]],["Coeur d\\'Alene Supercharger","https://www.tesla.com/findus/location/supercharger/coeurdaleneidsupercharger",["3458 N Fruitland Lane\n","Coeur d\\'Alene, ID 83815\n"]],["Idaho Falls Supercharger","https://www.tesla.com/findus/location/supercharger/idaholfallssupercharger",["940 Pier View Drive\n","Idaho Falls, ID 83402\n"]],["Mountain Home, ID (coming soon)","https://www.tesla.com/findus/location/supercharger/mountainhomesupercharger",["Mountain Home, ID\n"]],["Pocatello Supercharger","https://www.tesla.com/findus/location/supercharger/pocatellosupercharger",["1399 Bench Road\n","Pocatello, ID 83201\n"]],["Twin Falls Supercharger","https://www.tesla.com/findus/location/supercharger/twinfallssupercharger",["2015 Neilsen Point Place\n","Twin Falls, ID 83301\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Portland',
default_zipcode: 83702
}},Illinois:{
state_name: 'Illinois',
state_abbr: 'IL',
vehicle_incentives: 'EV exemption from state emissions testing; reduced registration fees',
solar_incentives: 'Earn $1,000 per kW off the cash or loan price of solar panels, and $860 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: 'ComEd offers 3 EV rate plans for residential customers\nIllinois Electric Co-op members may be eligible to finance their EV at 0.5% interest\nMcLean County residents are eligible for a rebate of 1% of the local share of state sales tax',
local_solar_incentives: null,
all_showrooms: [["Bloomington-Olympia Drive","https://www.tesla.com/findus/location/store/bloomingtonolympia",["420 Olympia Dr\n","Bloomington, IL 61704\n"]],["Chicago-Gold Coast","https://www.tesla.com/findus/location/store/chicagogoldcoast",["901 North Rush Street\n","Chicago, IL 60611\n"]],["Chicago-Highland Park","https://www.tesla.com/findus/location/store/highlandpark",["1200 Old Skokie Valley Road\n","Highland Park, IL 60035\n"]],["Chicago-Schaumburg","https://www.tesla.com/findus/location/store/chicagonwsuburbs",["320 W. Golf Rd\n","Schaumburg, IL 60195-3608\n"]],["Chicago-West Grand Avenue","https://www.tesla.com/findus/location/store/chicagograndave",["1053 W. Grand Avenue\n","Chicago, IL 60642\n"]],["Chicago-Westmont","https://www.tesla.com/findus/location/store/chicagowestmont",["50 W. Ogden Ave\n","Westmont, IL 60559\n"]],["Naperville","https://www.tesla.com/findus/location/store/naperville",["3200 Ogden Ave\n","Lisle, IL 60532\n"]]],
all_service_centers: [["Bloomington-Olympia Drive","https://www.tesla.com/findus/location/service/bloomingtonolympia",["420 Olympia Dr\n","Bloomington, IL 61704\n"]],["Chicago - Elston","https://www.tesla.com/findus/location/service/chicagoelston",["3067 N. Elston Ave\n","Chicago, IL 60618\n"]],["Chicago-Highland Park","https://www.tesla.com/findus/location/service/highlandpark",["1200 Old Skokie Valley Road\n","Highland Park, IL 60035\n"]],["Chicago-Schaumburg","https://www.tesla.com/findus/location/service/chicagonwsuburbs",["320 W. Golf Rd\n","Schaumburg, IL 60195-3608\n"]],["Chicago-Westmont","https://www.tesla.com/findus/location/service/chicagowestmont",["50 W. Ogden Ave\n","Westmont, IL 60559\n"]],["Naperville","https://www.tesla.com/findus/location/service/naperville",["3200 Ogden Ave\n","Lisle, IL 60532\n"]]],
all_charging_locations: [["Aurora, IL - IL-59 Supercharger","https://www.tesla.com/findus/location/supercharger/aurorail59supercharger",["808 IL-59\n","Aurora, IL 60504\n"]],["Bolingbrook, IL Supercharger","https://www.tesla.com/findus/location/supercharger/bolingbrooksupercharger",["755 E. Boughton Road\n","Bolingbrook, IL 60440-2250\n"]],["Buffalo Grove, IL Supercharger","https://www.tesla.com/findus/location/supercharger/buffalogrovesupercharger",["1550 Deerfield Parkway\n","Buffalo Grove, IL 60089\n"]],["Champaign, IL Supercharger","https://www.tesla.com/findus/location/supercharger/champaignillinoissupercharger",["2401 North Prospect Avenue\n","Champaign, IL 61822\n"]],["Chicago, IL (North) (coming soon)","https://www.tesla.com/findus/location/supercharger/chicagosupercharger",["Chicago, IL\n"]],["Chicago, IL - North Broadway Supercharger","https://www.tesla.com/findus/location/supercharger/northbroadwaysupercharger",["3030 North Broadway\n","Chicago, IL 60657\n"]],["Chicago, IL - North Columbus Drive Supercharger","https://www.tesla.com/findus/location/supercharger/chicagoneweastsidesupercharger",["225 North Columbus Drive\n","Chicago, Illinois 60601-7910\n"]],["Chicago, IL - North Halsted Supercharger","https://www.tesla.com/findus/location/supercharger/northhalstedsupercharger",["1457 N Halsted St.\n","Chicago, IL 60642\n"]],["Chicago, IL - O\\'Hare Supercharger","https://www.tesla.com/findus/location/supercharger/chicagoiloharesupercharger",["Building 840 Chicago O\\'Hare International Airport\n","Chicago, IL 60666\n"]],["Chicago, IL - South Canal Street Supercharger","https://www.tesla.com/findus/location/supercharger/chicagosouthcanalsupercharger",["1100 South Canal Street\n","Chicago, IL 60607\n"]],["Chicago, IL – Bridgeport (coming soon)","https://www.tesla.com/findus/location/supercharger/bridgeportilsupercharger",["Bridgeport, IL\n"]],["Collinsville, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/collinsvillesupercharger",["Collinsville, IL\n"]],["Country Club Hills, IL Supercharger","https://www.tesla.com/findus/location/supercharger/countryclubhillssupercharger",["4201 167th St.\n","Country Club Hills, IL 60478\n"]],["Dwight, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/dwightsupercharger",["Dwight, IL\n"]],["Effingham Supercharger","https://www.tesla.com/findus/location/supercharger/effinghamilsupercharger",["1200 N. Keller Drive\n","Effingham, IL 62401\n"]],["Evanston, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/evanstonilsupercharger",["Evanston, IL\n"]],["Evergreen Park, IL Supercharger","https://www.tesla.com/findus/location/supercharger/evergreenparksupercharger",["9200 South Western Avenue\n","Evergreen Park, IL 60805\n"]],["Flossmoor, IL Supercharger","https://www.tesla.com/findus/location/supercharger/flossmoorilsupercharger",["3800 Vollmer Road\n","Flossmoor, IL 60422\n"]],["Gilman, IL Supercharger","https://www.tesla.com/findus/location/supercharger/Gilmanilsupercharger",["1043 South Crescent Street\n","Gilman, IL 60938\n"]],["Glenview, IL Supercharger","https://www.tesla.com/findus/location/supercharger/glenviewillinoissupercharger",["1200 Milwaukee Avenue\n","Glenview, IL 60025\n"]],["Highland Park, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/highlandparksupercharger",["Highland Park, IL\n"]],["Joliet, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/jolietilsupercharger",["Joliet, IL\n"]],["Marion, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/marionsupercharger",["Marion, IL\n"]],["Mt. Vernon Supercharger","https://www.tesla.com/findus/location/supercharger/mtvernonsupercharger",["222 Potomac Blvd.\n","Mt. Vernon, IL 62864-6750\n"]],["Normal, IL Supercharger","https://www.tesla.com/findus/location/supercharger/normalillinoissupercharger",["11 Uptown Circle\n","Normal, IL 61761\n"]],["North Aurora Supercharger","https://www.tesla.com/findus/location/supercharger/northaurorasupercharger",["151 Hansen Blvd\n","North Aurora, IL 60542\n"]],["Northbrook, IL Supercharger","https://www.tesla.com/findus/location/supercharger/northbrookilsupercharger",["840-109 Willow Road\n","Northbrook, IL 60062\n"]],["Oak Brook, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/oakbrooksupercharger",["Oak Brook, IL\n"]],["Oak Park, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/oakparksupercharger",["Oak Park, IL\n"]],["Peoria, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/peoriasupercharger",["Peoria, IL\n"]],["Peru, IL Supercharger","https://www.tesla.com/findus/location/supercharger/peruillinoissupercharger",["1651 Midtown Road\n","Peru, IL 61354\n"]],["Rochelle, IL (coming soon)","https://www.tesla.com/findus/location/supercharger/rochellesupercharger",["Rochelle, IL\n"]],["Rockford, IL Supercharger","https://www.tesla.com/findus/location/supercharger/rockfordsupercharger",["7200 Harrison Ave\n","Rockford, IL 61112\n"]],["Rolling Meadows, IL Supercharger","https://www.tesla.com/findus/location/supercharger/rollingmeadowssupercharger",["1301 Meijer Drive\n","Rolling Meadows, IL 60008-4205\n"]],["Rosemont, IL Supercharger","https://www.tesla.com/findus/location/supercharger/rosemontillinoissupercharger",["5220 Fashion Outlets Way\n","Rosemont, IL 60018\n"]],["Skokie, IL Supercharger","https://www.tesla.com/findus/location/supercharger/skokiesupercharger",["5507 Touhy Avenue\n","Skokie, IL 60077\n"]],["Springfield Illinois Supercharger","https://www.tesla.com/findus/location/supercharger/springfieldilsupercharger",["3801 S. MacArthur Blvd.\n","Springfield, IL 62704\n"]],["Zionsville, IN Supercharger","https://www.tesla.com/findus/location/supercharger/zionsvillesupercharger",["6650 Whitestown Parkway\n","Zionsville, IL 46077\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and the DMV will mail your title and registration card. \\n You will receive a temporary registration placard to operate your vehicle while Tesla processes registration."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Indianapolis',
default_zipcode: 62701
}},Iowa:{ 
state_name: 'Iowa',
state_abbr: 'IA',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers:[["Council Bluffs-Woodbury Ave","https://www.tesla.com/findus/location/service/councilbluffsservice",["1110 Woodbury ave\n","Council Bluffs, IA 51503\n"]]],
all_charging_locations:[["Altoona, IA Supercharger","https://www.tesla.com/findus/location/supercharger/altoonasupercharger",["1430 1st Avenue North\n","Altoona, IA 50009\n"]],["Coralville Supercharger","https://www.tesla.com/findus/location/supercharger/coralvillesupercharger",["1914 8th Street\n","Coralville, IA 52241\n"]],["Council Bluffs Supercharger","https://www.tesla.com/findus/location/supercharger/councilbluffsiasupercharger",["3815 Metro Drive\n","Council Bluffs, IA 51501\n"]],["Davenport Supercharger","https://www.tesla.com/findus/location/supercharger/davenportsupercharger",["4064 E 53rd St\n","Davenport, IA 52807\n"]],["Dows Supercharger","https://www.tesla.com/findus/location/supercharger/dowssupercharger",["904 Cardinal Lane\n","Dows, 50071-8004\n"]],["Dubuque, IA Supercharger","https://www.tesla.com/findus/location/supercharger/dubuqueiasupercharger",["400 South Locust Street\n","Dubuque, IA 52003\n"]],["Shelby, IA Supercharger","https://www.tesla.com/findus/location/supercharger/shelbysupercharger",["12 East Street\n","Shelby, IA 51570\n"]],["Sioux City, IA (coming soon)","https://www.tesla.com/findus/location/supercharger/siouxcitysupercharger",["Sioux City, IA\n"]],["Waterloo, IA (coming soon)","https://www.tesla.com/findus/location/supercharger/waterloosupercharger",["Waterloo, IA\n"]],["West Des Moines Supercharger","https://www.tesla.com/findus/location/supercharger/westdesmoinessupercharger",["1725 Jordan Creek Parkway\n","West Des Moines, IA 50266\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'St. Louis',
default_zipcode: 50319
}},Indiana:{
state_name: 'Indiana',
state_abbr: 'IN',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Indiana Power & Light offers reduced electricity rate plans for EV charging',
local_solar_incentives: null,
all_showrooms: [["Indianapolis","https://www.tesla.com/findus/location/store/indianapolis",["8280 Castleton Corner Drive\n","Indianapolis, IN 46250\n"]]],
all_service_centers: [["Indianapolis","https://www.tesla.com/findus/location/service/indianapolis",["8280 Castleton Corner Drive\n","Indianapolis, IN 46250\n"]]], all_charging_locations: [["Angola, IN Supercharger","https://www.tesla.com/findus/location/supercharger/angolasupercharger",["3855 Indiana 127\n","Angola, IN 46703\n"]],["Bloomington, IN Supercharger","https://www.tesla.com/findus/location/supercharger/bloomingtonsupercharger",["3600 West 3rd Street\n","Bloomington, IN 47404\n"]],["Carmel, IN Supercharger","https://www.tesla.com/findus/location/supercharger/carmelinsupercharger",["1424 W Carmel Dr\n","Carmel, IN 46032\n"]],["Elberfeld, IN (coming soon)","https://www.tesla.com/findus/location/supercharger/elberfeldsupercharger",["Elberfeld, IN\n"]],["Fishers, IN Supercharger","https://www.tesla.com/findus/location/supercharger/fishersinsupercharger",["9 Municipal Drive\n","Fishers, 46038-1615\n"]],["Fort Wayne, IN Supercharger","https://www.tesla.com/findus/location/supercharger/fortwaynesupercharger",["6309 Lima Road\n","Fort Wayne, IN 46818\n"]],["Indianapolis, IN - Capitol Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/indianapolisdowntownsupercharger",["109 South Capitol Avenue\n","Indianapolis, IN 46225\n"]],["Indianapolis, IN Supercharger","https://www.tesla.com/findus/location/supercharger/indianapolissupercharger",["5120 Victory Dr\n","Indianapolis, IN 46201\n"]],["Kokomo, IN Supercharger","https://www.tesla.com/findus/location/supercharger/kokomoinsupercharger",["2301 East Markland Avenue\n","Kokomo, IN 46901\n"]],["Lafayette, IN Supercharger","https://www.tesla.com/findus/location/supercharger/lafayettesupercharger",["4901 State Rd. 26E\n","Lafayette, IN 47905\n"]],["Merrillville, IN Supercharger","https://www.tesla.com/findus/location/supercharger/merrillvilleinsupercharger",["611 West Lincoln Highway\n","Merrillville, IN 46410\n"]],["Michigan City, IN Supercharger","https://www.tesla.com/findus/location/supercharger/michigancityinsupercharger",["5150 Franklin Street\n","Michigan City, IN 46360\n"]],["Mishawaka, IN Supercharger","https://www.tesla.com/findus/location/supercharger/mishawakasupercharger",["6501 Grape Rd\n","Mishawaka, IN 46545\n"]],["Richmond, IN Supercharger","https://www.tesla.com/findus/location/supercharger/richmondinsupercharger",["2507 Chester Boulevard\n","Richmond, IN 47674\n"]],["Seymour, IN (coming soon)","https://www.tesla.com/findus/location/supercharger/seymoursupercharger",["Seymour, IN\n"]],["Terre Haute, IN Supercharger","https://www.tesla.com/findus/location/supercharger/terrehautesupercharger",["5600 E. New Margaret Dr.\n","Terre Haute, IN 47803\n"]],["Veedersburg, IN (coming soon)","https://www.tesla.com/findus/location/supercharger/veedersburgsupercharger",["Veedersburg, IN\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will title your vehicle and you a self-registration packet. \\n Tesla will title your car and mail (or email if NV) the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Indianapolis',
default_zipcode: 46204
}},Kansas:{
state_name: 'Kansas',
state_abbr: 'KS',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations:[["Colby, KS Supercharger","https://www.tesla.com/findus/location/supercharger/colbykssupercharger",["700 E Horton Ave\n","Colby, KS 67701-3746\n"]],["Goodland, KS Supercharger","https://www.tesla.com/findus/location/supercharger/goodlandsupercharger",["2631 Enterprise Rd\n","Goodland, KS 67735\n"]],["Hays, KS Supercharger","https://www.tesla.com/findus/location/supercharger/hayssupercharger",["4101 Vine St\n","Hays, KS 67601\n"]],["Mission, KS Supercharger","https://www.tesla.com/findus/location/supercharger/missionkssupercharger",["6655 Martway Street\n","Mission, KS 66202\n"]],["Salina, KS Supercharger","https://www.tesla.com/findus/location/supercharger/salinasupercharger",["755 W. Diamond Dr.\n","Salina, KS 67401\n"]],["Topeka, KS Supercharger","https://www.tesla.com/findus/location/supercharger/topekasupercharger",["5930 SW Huntoon St\n","Topeka, KS 66614\n"]],["Wichita Kansas Supercharger","https://www.tesla.com/findus/location/supercharger/wichitakssupercharger",["4760 S. Broadway Street\n","Wichita, KS 67216\n"]],["Emporia, KS Supercharger","https://www.tesla.com/findus/location/supercharger/emporiakssupercharger",["1312 Industrial Road\n","Emporia, KS 66801\n"]],["Olathe, KS Supercharger","https://www.tesla.com/findus/location/supercharger/olathekansascitysupercharger",["18101 West 119th Street\n","Olathe, KS 66061\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Kansas City',
default_zipcode: 66612
}},Kentucky:{
state_name: 'Kentucky',
state_abbr: 'KY',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Bowling Green Supercharger","https://www.tesla.com/findus/location/supercharger/bowlinggreensupercharger",["1676 Westpark Drive\n","Bowling Green, KY 42104\n"]],["Elizabethtown, KY (coming soon)","https://www.tesla.com/findus/location/supercharger/elizabethtownkysupercharger",["Elizabethtown, KY\n"]],["Florence, KY (coming soon)","https://www.tesla.com/findus/location/supercharger/florencesupercharger",["Florence, KY\n"]],["Kuttawa Supercharger","https://www.tesla.com/findus/location/supercharger/kuttawasupercharger",["62 Days Inn Dr\n","Kuttawa, KY 42055-5954\n"]],["Lexington Supercharger","https://www.tesla.com/findus/location/supercharger/lexingtonkysupercharger",["2155 Paul Jones Way\n","Lexington, KY 40509\n"]],["London Supercharger","https://www.tesla.com/findus/location/supercharger/londonkysupercharger",["140 Faith Assembly Church Road\n","London, KY 40741\n"]],["Louisville Supercharger","https://www.tesla.com/findus/location/supercharger/louisvillesupercharger",["2120 Gardiner Ln\n","Louisville, KY 40205\n"]],["Louisville, KY - Towne Center Drive Supercharger","https://www.tesla.com/findus/location/supercharger/louisvillekytowncenterdrivesupercharger",["4100 Towne Center Drive\n","Louisville, KY 40241\n"]],["Maysville, KY (coming soon)","https://www.tesla.com/findus/location/supercharger/maysvillejksupercharger",["Maysville, KY\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Nashville',
default_zipcode: 40601
}},Louisiana:{
state_name: 'Louisiana',
state_abbr: 'LA',
vehicle_incentives: '$2,500 income tax credit',
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: [["New Orleans (coming soon)","https://www.tesla.com/findus/location/service/neworleans",["New Orleans, LA 70130\n"]],["New Orleans","https://www.tesla.com/findus/location/service/neworleansservicelite",["2801 Tchoupitoulas Street\n","New Orleans, LA 70130\n"]]],
all_charging_locations: [["Alexandria Supercharger","https://www.tesla.com/findus/location/supercharger/alexandrialasupercharger",["701 4th Street\n","Alexandria, LA 71301\n"]],["Baton Rouge Supercharger","https://www.tesla.com/findus/location/supercharger/batonrougelasupercharger",["3535 Perkins Road\n","Baton Rouge, LA 70808\n"]],["Lafayette, LA Supercharger","https://www.tesla.com/findus/location/supercharger/lafayettelasupercharger",["3225 Louisiana Avenue\n","Lafayette, LA 70501\n"]],["Lake Charles Supercharger","https://www.tesla.com/findus/location/supercharger/lakecharlessupercharger",["1772 W Prien Lake Road\n","Lake Charles, LA 70601\n"]],["Monroe Supercharger","https://www.tesla.com/findus/location/supercharger/monroesupercharger",["4919 Pecanland Mall Drive\n","Monroe, LA 71203\n"]],["New Orleans, LA (coming soon)","https://www.tesla.com/findus/location/supercharger/neworleanssupercharger",["New Orleans, LA\n"]],["Shreveport Supercharger","https://www.tesla.com/findus/location/supercharger/shreveportsupercharger",["1133 St. Vincent Ave.\n","Shreveport, LA 71104\n"]],["Slidell Supercharger","https://www.tesla.com/findus/location/supercharger/slidellsupercharger",["1303 Town Center Pkwy\n","Slidell, LA 70458\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Texas',
default_zipcode: 70802
}},Maine:{ 
state_name: 'Maine',
state_abbr: 'ME',
vehicle_incentives: '$2,000 rebate for new vehicles with a base price under $50,000',
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Augusta, ME Supercharger","https://www.tesla.com/findus/location/supercharger/augustamesupercharger",["197 Civic Center Drive\n","Augusta, ME 4330\n"]],["Baileyville, ME Supercharger","https://www.tesla.com/findus/location/supercharger/baileyvillesupercharger",["32 Houlton Rd\n","Baileyville, ME 4694\n"]],["Bar Harbor, ME (coming soon)","https://www.tesla.com/findus/location/supercharger/barharbormesupercharger",["Bar harbor, ME\n"]],["Bethel, ME Supercharger","https://www.tesla.com/findus/location/supercharger/bethelmesupercharger",["Bethel, ME 04217\n"]],["Brewer Supercharger","https://www.tesla.com/findus/location/supercharger/brewersupercharger",["5 Walton Dr\n","Brewer, ME 4412\n"]],["Farmington, ME (coming soon)","https://www.tesla.com/findus/location/supercharger/farmingtonsupercharger",["Farmington, ME\n"]],["Freeport, ME Supercharger","https://www.tesla.com/findus/location/supercharger/freeportsupercharger",["95 Main Street\n","Freeport, ME 04032-1217\n"]],["Jackman, ME Supercharger","https://www.tesla.com/findus/location/supercharger/jackmanmesupercharger",["407 Main Street\n","Jackman, ME 04945\n"]],["Kennebunk, ME North Supercharger","https://www.tesla.com/findus/location/supercharger/nkennebunkmesupercharger",["25.5 Mile Maine Turnpike\n","Kennebunk, ME 4043\n"]],["Kennebunk, ME South Supercharger","https://www.tesla.com/findus/location/supercharger/skennebunkmesupercharger",["25.5 Mile Maine Turnpike\n","Kennebunk, ME 4043\n"]],["Medway, ME Supercharger","https://www.tesla.com/findus/location/supercharger/medwaymesupercharger",["1941 Medway Road\n","Medway, ME 04460\n"]],["Portland, ME Supercharger","https://www.tesla.com/findus/location/supercharger/portlandmesupercharger",["295 Forest Avenue\n","Portland, ME 04101\n"]],["Skowhegan, ME Supercharger","https://www.tesla.com/findus/location/supercharger/skowheganmesupercharger",["496 Madison Avenue\n","Skowhegan, ME 04976\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Boston',
default_zipcode: 04333
}},Maryland:{
state_name: 'Maryland',
state_abbr: 'MD',
vehicle_incentives: '$700 rebate on wall connectors and installation\nQualified vehicles are exempt from emissions testing\nHOV lane access',
solar_incentives: 'Solar: $1,000 per system\nSolar: Earn $170 per kW off the cash or loan price of solar panels and $140 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)\nPowerwall: State tax credit equal to 30% of installed cost up to $5,000 per property',
local_vehicle_incentives: 'PEPCO & Baltimore Gas & Electric offer reduced EV rate plans based on time-of-use',
local_solar_incentives: null,
all_showrooms: [["Baltimore-Owings Mills","https://www.tesla.com/findus/location/store/baltimoreowingsmill",["9428 Reisterstown Road\n","Owings Mills, MD 21117\n"]],["Bethesda-Montgomery Mall","https://www.tesla.com/findus/location/store/montgomerymall",["Suite 1272\n","Bethesda, MD 20817\n"]]],
all_service_centers: [["Baltimore-Owings Mills","https://www.tesla.com/findus/location/service/baltimoreowingsmill",["9428 Reisterstown Road\n","Owings Mills, MD 21117\n"]],["Rockville","https://www.tesla.com/findus/location/service/rockvilleservice",["52 Derwood Circle\n","Rockville, MD 20850\n"]]],
all_charging_locations: [["Aberdeen Supercharger","https://www.tesla.com/findus/location/supercharger/aberdeensupercharger",["I-95 Aberdeen, Maryland\n","Aberdeen, MD 21001-0000\n"]],["Annapolis, MD Supercharger","https://www.tesla.com/findus/location/supercharger/annapolismdsupercharger",["1906 Towne Centre Boulevard\n","Annapolis, MD 21401\n"]],["Baltimore, MD - Boston Street Supercharger","https://www.tesla.com/findus/location/supercharger/baltimoresupercharger",["3501 Boston Street\n","Baltimore, MD 21224\n"]],["Baltimore, MD - McHenry Row Supercharger","https://www.tesla.com/findus/location/supercharger/baltimoremdsupercharger",["McHenry Row\n","Baltimore, MD 21230\n"]],["Easton, MD Supercharger","https://www.tesla.com/findus/location/supercharger/eastonmdsupercharger",["7655 Ocean Gateway\n","Easton, MD\n"]],["Elkridge, MD (coming soon)","https://www.tesla.com/findus/location/supercharger/elkridgemdsupercharger",["Elkridge, MD\n"]],["Frederick, MD Supercharger","https://www.tesla.com/findus/location/supercharger/frederickmdsupercharger",["5500 Buckeystown Pike\n","Frederick, MD 21703\n"]],["Gaithersburg, MD Supercharger","https://www.tesla.com/findus/location/supercharger/gaithersburgsupercharger",["9811 Washingtonian Blvd\n","Gaithersburg, MD 20878-7306\n"]],["Grasonville Supercharger","https://www.tesla.com/findus/location/supercharger/grasonvillesupercharger",["108 Jackson Creek Road\n","Grasonville, MD 21638-1086\n"]],["Greenbelt, MD (coming soon)","https://www.tesla.com/findus/location/supercharger/greenbeltmdsupercharger",["Greenbelt, MD\n"]],["Hagerstown, MD Supercharger","https://www.tesla.com/findus/location/supercharger/hagerstownsupercharger",["495 Prime Outlets Blvd\n","Hagerstown, MD 21740\n"]],["Halethorpe, MD (coming soon)","https://www.tesla.com/findus/location/supercharger/halethorpesupercharger",["Halethorpe, MD\n"]],["Hanover, MD Supercharger","https://www.tesla.com/findus/location/supercharger/hanoverndsupercharger",["7795 Arundel Mills Boulevard\n","Hanover, MD 21076\n"]],["La Vale Supercharger","https://www.tesla.com/findus/location/supercharger/lavalesupercharger",["11601 Winchester Road\n","La Vale, MD 21502\n"]],["Laurel Supercharger","https://www.tesla.com/findus/location/supercharger/laurelsupercharger",["14700 Baltimore Ave\n","Laurel, MD 20707\n"]],["Millersville, MD (coming soon)","https://www.tesla.com/findus/location/supercharger/millersvillesupercharger",["Millersville, MD\n"]],["National Harbor, MD - Potomac Passage Supercharger","https://www.tesla.com/findus/location/supercharger/nationalharborsupercharger",["150 Potomac Passage\n","Oxon Hill, MD 20745\n"]],["North Bethesda, MD Supercharger","https://www.tesla.com/findus/location/supercharger/bethesdamdsupercharger",["11860 Trade Street\n","Bethesda, MD 20852\n"]],["North East, MD Supercharger","https://www.tesla.com/findus/location/supercharger/northeastmdsupercharger",["John F Kennedy Memorial Hwy\n","North East, MD 21901-0000\n"]],["Ocean City, MD Supercharger","https://www.tesla.com/findus/location/supercharger/oceancitymdsupercharger",["12826A Ocean Gateway\n","Ocean City, MD 21842\n"]],["Riverdale Park, MD Supercharger","https://www.tesla.com/findus/location/supercharger/riverdaleparkmdsupercharger",["6221 Baltimore Avenue\n","Riverdale Park, MD 20737\n"]],["Rockville, MD Supercharger","https://www.tesla.com/findus/location/supercharger/rockvillemdsupercharger",["330 Hungerford Drive\n","Rockville, MD 20850\n"]],["Salisbury, MD Supercharger","https://www.tesla.com/findus/location/supercharger/salisburysupercharger",["2300 North Salisbury Blvd.\n","Salisbury, MD 21801\n"]],["Towson, MD (coming soon)","https://www.tesla.com/findus/location/supercharger/towsonsupercharger",["Towson, MD\n"]],["White Marsh, MD Supercharger","https://www.tesla.com/findus/location/supercharger/whitemarshmdsupercharger",["5360 Nottingham Drive\n","Rossville, MD 21162\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Philadelphia',
default_zipcode: 21401
}},Massachusetts:{
state_name: 'Massachusetts',
state_abbr: 'MA',
vehicle_incentives: '$2,500 rebate for new vehicles with a purchase price under $50,000',
solar_incentives: 'Solar: Up to $1,000 State Tax Credit\nSolar: Select utilities may offer a solar incentive\nPowerwall: Select utilities may offer a storage incentive',
local_vehicle_incentives: null,
local_solar_incentives: 'Solar: Earn hundreds of dollars annually by enrolling your solar system in the MA SMART program\nPowerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions\nConcord Municipal Light Plant offers a $630/kW incentive up to $3,125\nMost MA municipal utilities are offering up to $1.20/Watt under the Municipal Light Plant Solar Rebate Program',
all_showrooms: [["Boston-Boylston Street","https://www.tesla.com/findus/location/store/bostonboylstonstreet",["888 Boylston Street Ste 055\n","Boston, MA 02116\n"]],["Dedham","https://www.tesla.com/findus/location/store/dedham",["840 Providence Highway\n","Dedham, MA 02026\n"]],["Natick Mall","https://www.tesla.com/findus/location/store/natickmall",["1245 Worcester St. Space 3018\n","Natick, MA 1760\n"]],["Peabody-North Shore","https://www.tesla.com/findus/location/store/peabodynorthshore",["210 Andover St\n","Peabody, MA 01960\n"]]],
all_service_centers: [["Boston-Watertown","https://www.tesla.com/findus/location/service/watertown",["457 Pleasant Street\n","Watertown, MA 02472\n"]],["Dedham","https://www.tesla.com/findus/location/service/dedham",["840 Providence Highway\n","Dedham, MA 02026\n"]],["Peabody-North Shore","https://www.tesla.com/findus/location/service/peabodynorthshore",["210 Andover St\n","Peabody, MA 01960\n"]]],
all_charging_locations: [["Auburn Massachusetts Supercharger","https://www.tesla.com/findus/location/supercharger/auburnmasupercharger",["385 Southbridge St.\n","Auburn, MA 1501\n"]],["Beverly, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/beverlymasupercharger",["Beverly, MA\n"]],["Boston Supercharger","https://www.tesla.com/findus/location/supercharger/bostonmasupercharger",["800 Boylston Street\n","Boston, Massachusetts 02199\n"]],["Boston, MA - Allstate Road Supercharger","https://www.tesla.com/findus/location/supercharger/bostonsouthsupercharger",["101 Allstate Road\n","Boston, MA 02125-1663\n"]],["Boston, MA - Richard B. Ross Way Supercharger","https://www.tesla.com/findus/location/supercharger/bonstonfenwaysupercharger",["1341 Boylston Street\n","Boston, MA 02215\n"]],["Boston, MA - Seaport (coming soon)","https://www.tesla.com/findus/location/supercharger/bostonseaportsupercharger",["Boston, MA\n"]],["Braintree, MA Supercharger","https://www.tesla.com/findus/location/supercharger/braintreesupercharger",["250 Granite Street\n","Braintree, MA 02184\n"]],["Burlington, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/burlingtonmasupercharger",["Burlington, MA\n"]],["Cambridge, MA Supercharger","https://www.tesla.com/findus/location/supercharger/cambridgemasupercharger",["100 Cambridgeside Place\n","Cambridge, MA 02141-2215\n"]],["Charlestown, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/charlestownmasupercharger",["Charlestown, MA\n"]],["Chestnut Hill, MA","https://www.tesla.com/findus/location/supercharger/chestnuthillsupercharger",["55 Boylston Street\n","Chestnut Hill, MA 02467\n"]],["Dedham","https://www.tesla.com/findus/location/supercharger/dedham",["840 Providence Highway\n","Dedham, MA 02026\n"]],["Framingham, MA Supercharger","https://www.tesla.com/findus/location/supercharger/framinghammasupercharger",["Framingham, MA 01701-5359\n"]],["Great Barrington, MA Supercharger","https://www.tesla.com/findus/location/supercharger/greatbarringtonmasupercharger",["700 Main Street Route 7\n","Great Barrington, MA 01230\n"]],["Hadley, MA Supercharger","https://www.tesla.com/findus/location/supercharger/hadleymasupercharger",["25 Russell Street\n","Hadley, MA 1035\n"]],["Hudson, MA Supercharger","https://www.tesla.com/findus/location/supercharger/hudsonmasupercharger",["2 Highland Common East\n","Marlborough, MA 1749\n"]],["Hyannis, MA Supercharger","https://www.tesla.com/findus/location/supercharger/hyannismasupercharger",["425 Attucks Lane\n","Hyannis, MA 02601\n"]],["Lawrence, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/lawrencemasupercharger",["Lawrence, MA\n"]],["Lee Supercharger","https://www.tesla.com/findus/location/supercharger/leemasupercharger",["10 Pleasant St.\n","Lee, MA 1238\n"]],["Leominster, MA Supercharger","https://www.tesla.com/findus/location/supercharger/leominstersupercharger",["100 Commercial Road\n","Leominster, MA 01453-3333\n"]],["Lynnfield, MA Supercharger","https://www.tesla.com/findus/location/supercharger/lynnfieldsupercharger",["600 Market St\n","Lynnfield, MA 1940\n"]],["Mansfield, MA Supercharger","https://www.tesla.com/findus/location/supercharger/mansfieldsupercharger",["280 School Street\n","Mansfield, MA 2048\n"]],["Mashpee, MA Supercharger","https://www.tesla.com/findus/location/supercharger/mashpeemasupercharger",["22 Steeple Street\n","Mashpee, MA 2649\n"]],["Orleans, MA Supercharger","https://www.tesla.com/findus/location/supercharger/orleansmasupercharger",["2110 Cranberry Highway\n","Orleans, MA 02653\n"]],["Revere, MA Supercharger","https://www.tesla.com/findus/location/supercharger/reveremasupercharger",["40 Furling Drive\n","Revere, MA 02151\n"]],["Sagamore Beach, MA Supercharger","https://www.tesla.com/findus/location/supercharger/sagamorebeachsupercharger",["22 Meetinghouse Ln\n","Sagamore Beach, MA 2562\n"]],["Seekonk, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/seekonksupercharger",["Seekonk, MA\n"]],["Somerville, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/somervillemasupercharger",["Somerville, MA\n"]],["Waltham, MA (coming soon)","https://www.tesla.com/findus/location/supercharger/walthammasupercharger",["Waltham, MA\n"]],["Wareham, MA Supercharger","https://www.tesla.com/findus/location/supercharger/warehamsupercharger",["2421 Cranberry HIghway\n","Wareham, MA 02571\n"]],["West Springfield Supercharger","https://www.tesla.com/findus/location/supercharger/westspringfieldsupercharger",["935 Riverdale Street\n","West Springfield, MA 1089\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration during your delivery appointment. \\n Temporary license plates cannot be issued and all vehicles must be registered upon delivery."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: true, 
region: 'Boston',
default_zipcode: 02108
}},Michigan:{ 
state_name: 'Michigan',
state_abbr: 'MI',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Consumers Energy, DTE, Indiana Michigan Power, & LBWL offer reduced EV rate plans based on time-of-use',
local_solar_incentives: null,
all_showrooms: [["Detroit-Clarkston","https://www.tesla.com/findus/location/store/detroitclarkson",["8105 Big Lake Rd\n","Clarkston, MI 48346-1001\n"]],["Somerset Collection","https://www.tesla.com/findus/location/store/somersetcollection",["2800 W. Big Beaver Road Space #N-114\n","Troy, MI 48084\n"]]],
all_service_centers: [["Detroit-Clarkston","https://www.tesla.com/findus/location/service/detroitclarkson",["8105 Big Lake Rd\n","Clarkston, MI 48346-1001\n"]]],
all_charging_locations: [["Ann Arbor Supercharger","https://www.tesla.com/findus/location/supercharger/annarborsupercharger",["3145 Ann Arbor-Saline Road\n","Ann Arbor, MI 48103\n"]],["Auburn Hills, MI Supercharger","https://www.tesla.com/findus/location/supercharger/auburnhillsmisupercharger",["800 Brown Road\n","Auburn Hills, 48326-1309\n"]],["Bay City Supercharger","https://www.tesla.com/findus/location/supercharger/baycitysupercharger",["2980 E Wilder Rd\n","Bay City, MI 48706-9213\n"]],["Big Rapids, MI Supercharger","https://www.tesla.com/findus/location/supercharger/bigrapidssupercharger",["15400 Waldron Way\n","Big Rapids, MI 49307-8890\n"]],["Cadillac Supercharger","https://www.tesla.com/findus/location/supercharger/cadillacsupercharger",["8605 E. 34 Road\n","Cadillac, MI 49601\n"]],["Clare, MI Supercharger","https://www.tesla.com/findus/location/supercharger/claremisupercharger",["604 North McEwan\n","Clare, MI 48617\n"]],["Detroit, MI (coming soon)","https://www.tesla.com/findus/location/supercharger/detroitmisupercharger",["Detroit, MI\n"]],["Escanaba, MI (coming soon)","https://www.tesla.com/findus/location/supercharger/escanabamisupercharger",["Escanaba, MI\n"]],["Gaylord, MI Supercharger","https://www.tesla.com/findus/location/supercharger/gaylordmisupercharger",["250 Meijer Drive\n","Gaylord, MI 49735-7241\n"]],["Grand Rapids Supercharger","https://www.tesla.com/findus/location/supercharger/grandrapidssupercharger",["5531 28th Street SE\n","Grand Rapids, MI 49512\n"]],["Hudsonville, MI Supercharger","https://www.tesla.com/findus/location/supercharger/hudsonvillesupercharger",["4075 32nd Avenue\n","Hudsonville, MI 49426\n"]],["Hudsonville, MI Supercharger","https://www.tesla.com/findus/location/supercharger/hudsonvillesupercharger",["4075 32nd Avenue\n","Hudsonville, MI 49426\n"]],["Lansing Supercharger","https://www.tesla.com/findus/location/supercharger/lansingsupercharger",["2025 Showtime Drive\n","Lansing, MI 48912\n"]],["Livonia, MI Supercharger","https://www.tesla.com/findus/location/supercharger/livoniasupercharger",["13070 Middlebelt Rd\n","Livonia, MI 48150-0000\n"]],["Ludington Supercharger","https://www.tesla.com/findus/location/supercharger/ludingtonsupercharger",["3900 W US Hwy 10\n","Ludington, MI 49431-7612\n"]],["Mackinaw City, MI Supercharger","https://www.tesla.com/findus/location/supercharger/mackinawcitymisupercharger",["801 South Huron Avenue\n","Mackinaw City, MI 49701\n"]],["Marquette, MI (coming soon)","https://www.tesla.com/findus/location/supercharger/marquettemisupercharger",["Marquette, MI\n"]],["Marshall Supercharger","https://www.tesla.com/findus/location/supercharger/marshallsupercharger",["15252 US Highway 27 N\n","Marshall, MI 49068-9620\n"]],["Muskegon, MI Supercharger","https://www.tesla.com/findus/location/supercharger/muskegonmisupercharger",["5300 Harvey Street\n","Muskegon, MI 49444-6716\n"]],["Novi, MI (coming soon)","https://www.tesla.com/findus/location/supercharger/novimisupercharger",["Novi, MI\n"]],["Port Huron Supercharger","https://www.tesla.com/findus/location/supercharger/porthuronsupercharger",["500 Thomas Edison Parkway\n","Port Huron, MI 48060\n"]],["Roseville, MI Supercharger","https://www.tesla.com/findus/location/supercharger/rosevillemisupercharger",["30800 Little Mack Avenue\n","Roseville, MI 48066-1700\n"]],["St. Joseph, MI Supercharger","https://www.tesla.com/findus/location/supercharger/stjosephsupercharger",["3260 Niles Rd\n","St. Joseph, MI 49085\n"]],["Swartz Creek, MI Supercharger","https://www.tesla.com/findus/location/supercharger/swartzcreekmisupercharger",["4141 Morrish Road\n","Swartz Creek, MI 48473\n"]],["Traverse City Supercharger","https://www.tesla.com/findus/location/supercharger/traversecitysupercharger",["3955 US Highway 31 South\n","Traverse City, Michigan 49684\n"]],["Walker, MI Supercharger","https://www.tesla.com/findus/location/supercharger/walkermisupercharger",["2988 Walker Avenue\n","Walker, MI 49544\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration during your delivery appointment. \\n Temporary license plates cannot be issued and all vehicles must be registered upon delivery."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Ohio',
default_zipcode: 48906
}},Minnesota:{
state_name: 'Minnesota',
state_abbr: 'MN',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Dakota Electric & Connexus offer reduced EV rate plans based on time-of-use',
local_solar_incentives: 'Xcel Energy offers a performance-based incentive for solar owners paying $0.07/kWh of solar production annually for up to 10 years\nMinnesota’s Made in Minnesota program offers several payback plans for qualifying customers',
all_showrooms: [["Minneapolis-Eden Prairie","https://www.tesla.com/findus/location/store/edenprairie",["6801 Washington Ave S\n","Suite 110\n","Minneapolis, MN 55439\n"]],["St. Paul-Maplewood","https://www.tesla.com/findus/location/store/stpaulmn",["2590 W. Maplewood Drive\n","Minneapolis, MN 55109\n"]]],
all_service_centers: [["Minneapolis-Eden Prairie","https://www.tesla.com/findus/location/service/edenprairie",["6801 Washington Ave S\n","Suite 110\n","Minneapolis, MN 55439\n"]],["St. Paul-Maplewood","https://www.tesla.com/findus/location/service/stpaulmn",["2590 W. Maplewood Drive\n","Minneapolis, MN 55109\n"]]],
all_charging_locations: [["Albert Lea, MN - Happy Trails Lane Superchargers","https://www.tesla.com/findus/location/supercharger/albertleatrailssupercharger",["820 Happy Trails Lane\n","Albert Lea, MN 56007\n"]],["Albert Lea, MN Supercharger","https://www.tesla.com/findus/location/supercharger/albertleasupercharger",["811 E Plaza St\n","Albert Lea, MN 56007\n"]],["Alexandria, MN Supercharger","https://www.tesla.com/findus/location/supercharger/alexandriamnsupercharger",["4404 MN-29\n","Alexandria, MN 56308\n"]],["Arden Hill, MN (coming soon)","https://www.tesla.com/findus/location/supercharger/ardenhillsupercharger",["Arden Hill, MN\n"]],["Baxter Supercharger","https://www.tesla.com/findus/location/supercharger/baxtersupercharger",["6967 Lake Forest Road\n","Baxter, MN 56425\n"]],["Bloomington, MN (coming soon)","https://www.tesla.com/findus/location/supercharger/bloomingtonmnsupercharger",["Bloomington, MN\n"]],["Clearwater Supercharger","https://www.tesla.com/findus/location/supercharger/clearwatersupercharger",["950 MN-24\n","Clearwater, MN 55320\n"]],["Duluth Supercharger","https://www.tesla.com/findus/location/supercharger/duluthsupercharger",["200 West 1st Street\n","Duluth, MN 55802\n"]],["Hinckley Supercharger","https://www.tesla.com/findus/location/supercharger/hinckleysupercharger",["404 Fire Monument Road\n","Hinckley, MN 55037\n"]],["Maple Grove, MN (coming soon)","https://www.tesla.com/findus/location/supercharger/maplegrovemnsupercharger",["Maple Grove, MN\n"]],["Minneapolis, MN Supercharger","https://www.tesla.com/findus/location/supercharger/minneapolissupercharger",["1650 New Brighton Boulevard\n","Minneapolis, MN 55413\n"]],["Minnetonka, MN Supercharger","https://www.tesla.com/findus/location/supercharger/minnetonkasupercharger",["13201 Ridgedale Drive\n","Minnetonka, MN 55305\n"]],["Oakdale Supercharger","https://www.tesla.com/findus/location/supercharger/oakdalesupercharger",["7180 10th St N\n","Oakdale, MN 55128\n"]],["Richfield, MN (coming soon)","https://www.tesla.com/findus/location/supercharger/richfieldmnsupercharger",["Richfield, MN\n"]],["Robbinsdale, MN Supercharger","https://www.tesla.com/findus/location/supercharger/robbinsdalemnsupercharger",["3501 West Broadway Avenue\n","Robbinsdale, MN 55422\n"]],["Rochester, MN Supercharger","https://www.tesla.com/findus/location/supercharger/rochestermnsupercharger",["500 Crossroads Dr\n","Rochester, MN 55902-2183\n"]],["Sherburn, MN Supercharger","https://www.tesla.com/findus/location/supercharger/sherburnmnsupercharger",["600 MN-4\n","Sherburn, MN 56171-0000\n"]],["St Paul, MN (coming soon)","https://www.tesla.com/findus/location/supercharger/stpaulmnsupercharger",["St Paul, MN\n"]],["St. Louis Park, MN Supercharger","https://www.tesla.com/findus/location/supercharger/stlouisparksupercharger",["3601 Highway 100 South\n","St. Louis Park, MN 55416\n"]],["Worthington, MN Supercharger","https://www.tesla.com/findus/location/supercharger/worthingtonsupercharger",["1290 Ryans Rd\n","Worthington, MN 56187\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Minneapolis',
default_zipcode: 55155
}},Mississippi:{ 
state_name: 'Mississippi',
state_abbr: 'MS',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers:[["Pearl","https://www.tesla.com/findus/location/service/pearl",["322 Airport Rd S\n","Pearl, MS 39208\n"]]],
all_charging_locations:[["Grenada Supercharger","https://www.tesla.com/findus/location/supercharger/grenadasupercharger",["2030 Sunset Dr\n","Grenada, MS 38901-2826\n"]],["Hattiesburg, MS Supercharger","https://www.tesla.com/findus/location/supercharger/hattiesburgsupercharger",["6143 US Highway 98\n","Hattiesburg, MS 39402\n"]],["McComb, MS","https://www.tesla.com/findus/location/supercharger/mccombmssupercharger",["1432 Delaware Avenue\n","McComb, MS 39648\n"]],["Meridian Supercharger","https://www.tesla.com/findus/location/supercharger/meridiansupercharger",["1210 Bonita Lakes Drive\n","Meridian, MS 39301\n"]],["Pearl, MS Supercharger","https://www.tesla.com/findus/location/supercharger/pearlsupercharger",["200 Bass Pro Drive\n","Pearl, MS 39208\n"]],["Tupelo Supercharger","https://www.tesla.com/findus/location/supercharger/tupelomssupercharger",["1001 Barnes Crossing Rd\n","Tupelo, MS 38804-0902\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Nashville',
default_zipcode: 39201
}},Missouri:{ 
state_name: 'Missouri',
state_abbr: 'MO',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Kansas City-Stateline Road","https://www.tesla.com/findus/location/store/kansascitystateline",["10111 State Line Rd\n","Kansas City, MO 64114-4262\n"]],["St. Louis-Chesterfield","https://www.tesla.com/findus/location/store/stlouischesterfield",["16955 Chesterfield Airport Road\n","Chesterfield, MO 63005-1405\n"]]],
all_service_centers: [["Kansas City-Stateline Road","https://www.tesla.com/findus/location/service/kansascitystateline",["10111 State Line Rd\n","Kansas City, MO 64114-4262\n"]],["St. Louis-Chesterfield","https://www.tesla.com/findus/location/service/stlouischesterfield",["16955 Chesterfield Airport Road\n","Chesterfield, MO 63005-1405\n"]]],
all_charging_locations: [["Bethany, MO Supercharger","https://www.tesla.com/findus/location/supercharger/bethanysupercharger",["3807 Miller Street\n","Bethany, MO 66424\n"]],["Branson, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/bransonsupercharger",["Branson, MO\n"]],["Brentwood, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/brentwoodmosupercharger",["Brentwood, MO\n"]],["Columbia Supercharger","https://www.tesla.com/findus/location/supercharger/columbiasupercharger",["915 Port Way\n","Columbia, MO 65201\n"]],["Concordia, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/concordiasupercharger",["Concordia, MO\n"]],["Hannibal, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/hannibalsupercharger",["Hannibal, MO\n"]],["Independence Supercharger","https://www.tesla.com/findus/location/supercharger/independencemosupercharger",["18011 E Bass Pro Drive\n","Independence, MO 64055\n"]],["Joplin Supercharger","https://www.tesla.com/findus/location/supercharger/joplinsupercharger",["3615 Range Line Rd.\n","Joplin, MO 64804-4447\n"]],["Kansas City, MO Supercharger","https://www.tesla.com/findus/location/supercharger/kansascitysupercharger",["8301 North Saint Clair Avenue\n","Kansas City, MO 64151\n"]],["Mehlville, MO Supercharger","https://www.tesla.com/findus/location/supercharger/mehlvillemosupercharger",["Saint Louis County, MO 63129\n"]],["Miner Supercharger","https://www.tesla.com/findus/location/supercharger/minersupercharger",["2612 E Malone Ave.\n","Miner, MO 63801\n"]],["Nevada, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/nevadasupercharger",["Nevada, MO\n"]],["Osage Beach Supercharger","https://www.tesla.com/findus/location/supercharger/osagebeachsupercharger",["929 Hwy D\n","Osage Beach, MO 65065-3169\n"]],["Rolla Supercharger","https://www.tesla.com/findus/location/supercharger/rollasupercharger",["1705 Martin Springs Drive\n","Rolla, MO 65401\n"]],["Springfield, MO Supercharger","https://www.tesla.com/findus/location/supercharger/springfieldmosupercharger",["3050 N. Kentwood Ave.\n","Springfield, MO 65803-4414\n"]],["St Joseph, MO Supercharger","https://www.tesla.com/findus/location/supercharger/stjosephmosupercharger",["201 North Belt Highway\n","St Joseph, MO 64506\n"]],["St. Charles Supercharger","https://www.tesla.com/findus/location/supercharger/stcharlesmosupercharger",["2021 Zumbehl Road\n","St. Charles, MO 63303\n"]],["St. Charles, MO - Beale Street Supercharger","https://www.tesla.com/findus/location/supercharger/stcharlessupercharger",["1650 Beale Street\n","St. Charles, MO 63303\n"]],["St. Louis, MO (coming soon)","https://www.tesla.com/findus/location/supercharger/stlouissupercharger",["St. Louis, MO\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'St. Louis',
default_zipcode: 65101
}},Montana:{ 
state_name: 'Montana',
state_abbr: 'MT',
vehicle_incentives:  null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Big Sky, MT Supercharger","https://www.tesla.com/findus/location/supercharger/bigskymtsupercharger",["25 Town Center Avenue\n","Big Sky, MT 59716\n"]],["Big Timber, MT Supercharger","https://www.tesla.com/findus/location/supercharger/bigtimbersupercharger",["228 Big Timber Loop Rd\n","Big Timber, MT 59011\n"]],["Bighorn, MT (coming soon)","https://www.tesla.com/findus/location/supercharger/bighornsupercharger",["Bighorn, MT\n"]],["Billings, MT Supercharger","https://www.tesla.com/findus/location/supercharger/billingssupercharger",["1801 Majestic Ln\n","Billings, MT 59102\n"]],["Bozeman, MT Supercharger","https://www.tesla.com/findus/location/supercharger/bozemansupercharger",["2023 Commerce Way\n","Bozeman, MT 59715\n"]],["Butte Supercharger","https://www.tesla.com/findus/location/supercharger/buttesupercharger",["2900 Harrison Ave.\n","Butte, MT 59701\n"]],["Glendive, MT Supercharger","https://www.tesla.com/findus/location/supercharger/glendivemtsupercharger",["1919 North Merrill Avenue\n","Glendive, MT 59330\n"]],["Great Falls, MT Supercharger","https://www.tesla.com/findus/location/supercharger/greatfallssupercharger",["2301 14th St SW\n","Great Falls, MT 59404\n"]],["Helena, MT Supercharger","https://www.tesla.com/findus/location/supercharger/helenasupercharger",["3120 Queen Anne Street\n","Helena, MT 59602\n"]],["Kalispell, MT (coming soon)","https://www.tesla.com/findus/location/supercharger/kalispellsupercharger",["Kalispell, MT\n"]],["Lima, MT Supercharger","https://www.tesla.com/findus/location/supercharger/limamtsupercharger",["108 Bailey Street\n","Lima, MT 59739\n"]],["Miles City, MT Supercharger","https://www.tesla.com/findus/location/supercharger/milescitymtsupercharger",["1815 South Haynes Avenue\n","Miles City, MT 59301\n"]],["Missoula Supercharger","https://www.tesla.com/findus/location/supercharger/missoulasupercharger",["5280 Grant Creek Rd\n","Missoula, MT 59808\n"]],["Shelby, MT (coming soon)","https://www.tesla.com/findus/location/supercharger/shelbymtsupercharger",["Shelby, MT\n"]],["Superior Supercharger","https://www.tesla.com/findus/location/supercharger/superiorsupercharger",["205 4th Ave. East\n","Superior, MT 59872\n"]],["West Yellowstone Supercharger","https://www.tesla.com/findus/location/supercharger/westyellowstonesupercharger",["West Yellowstone, MT 59758\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Portland',
default_zipcode: 59601
}},Nebraska:{ 
state_name: 'Nebraska',
state_abbr: 'NE',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Gothenburg Supercharger","https://www.tesla.com/findus/location/supercharger/gothenburgsupercharger",["318 Platte River Road\n","Gothenburg, NE 69138-2610\n"]],["Grand Island Supercharger","https://www.tesla.com/findus/location/supercharger/grandislandsupercharger",["3335 West Wood River Road\n","Grand Island, NE 68803-9117\n"]],["Lincoln, NE Supercharger","https://www.tesla.com/findus/location/supercharger/lincolnnesupercharger",["5020 N 27th Street\n","Lincoln, NE 68521-1196\n"]],["Ogallala Supercharger","https://www.tesla.com/findus/location/supercharger/ogallalasupercharger",["501 Stagecoach Trail\n","Ogallala, NE 69153-3118\n"]],["Sidney Supercharger","https://www.tesla.com/findus/location/supercharger/sidneysupercharger",["645 Cabela Drive\n","Sidney, NE 69162-3047\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Denver',
default_zipcode: 68508
}},Nevada:{ 
state_name: 'Nevada',
state_abbr: 'NV',
vehicle_incentives: 'Reduced rates for electric vehicle charging\nAFV Parking Fee & state emissions testing exemptions',
solar_incentives: 'Powerwall: Up to $3,000',
local_vehicle_incentives: 'NV Energy offers reduced EV rate plans based on time-of-use',
local_solar_incentives: null,
all_showrooms: [["Las Vegas-W. Sahara Ave","https://www.tesla.com/findus/location/store/lasvegaswsaharaave",["7077 W Sahara Ave\n","Las Vegas, NV 89117\n"]],["Reno-Virginia Street","https://www.tesla.com/findus/location/store/renovrginastreetservice",["9732 S Virginia Street\n","Reno, NV 89511-5941\n"]]],
all_service_centers: [["Las Vegas-W. Sahara Ave","https://www.tesla.com/findus/location/service/lasvegaswsaharaave",["7077 W Sahara Ave\n","Las Vegas, NV 89117\n"]],["Reno-Virginia Street","https://www.tesla.com/findus/location/service/renovrginastreetservice",["9732 S Virginia Street\n","Reno, NV 89511-5941\n"]]],
all_charging_locations:[["Beatty, NV Supercharger","https://www.tesla.com/findus/location/supercharger/beattysupercharger",["900 Hwy 95 N\n","Beatty, NV 89003\n"]],["Elko Supercharger","https://www.tesla.com/findus/location/supercharger/elkonvsupercharger",["2755 Mountain City Highway\n","Elko, NV 89801\n"]],["Gardnerville Supercharger","https://www.tesla.com/findus/location/supercharger/gardnervillesupercharger",["1979 US 395\n","Gardnerville, NV 89410\n"]],["Hawthorne Supercharger","https://www.tesla.com/findus/location/supercharger/hawthornesupercharger",["705 Hwy 362 Hawthorne\n","Hawthorne, NV 89415\n"]],["Henderson, NV Supercharger","https://www.tesla.com/findus/location/supercharger/hendersonsupercharger",["2800 S Boulder Hwy\n","Henderson, NV 89002-9346\n"]],["Incline Village, NV Supercharger","https://www.tesla.com/findus/location/supercharger/inclinevillagesupercharger",["930 Tahoe Boulevard\n","Incline Village, NV 89451\n"]],["Las Vegas Blvd South Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegasblvdsouthsupercharger",["6509 S Las Vegas Blvd\n","Las Vegas, NV 89119-3240\n"]],["Las Vegas, NV - Grand Central Parkway Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegasnvgrandcentralparkwaysupercharger",["875 South Grand Central Parkway\n","Las Vegas, NV 89106\n"]],["Las Vegas, NV - Linq High Roller Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegaslinqsupercharger",["3545 South Las Vegas Boulevard\n","Las Vegas, NV 89109\n"]],["Las Vegas, NV - Tivoli Village Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegastivolisupercharger",["400 South Rampart Boulevard\n","Las Vegas, NV 89145\n"]],["Las Vegas, NV Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegassupercharger",["701 Bridger Ave\n","Las Vegas, NV 89101\n"]],["Lovelock Supercharger","https://www.tesla.com/findus/location/supercharger/lovelocknvsupercharger",["150 Main St.\n","Lovelock, NV 89419\n"]],["Primm, NV Supercharger","https://www.tesla.com/findus/location/supercharger/primmnvsupercharger",["31900 Las Vegas Blvd S\n","Primm, NV 89019\n"]],["Reno Supercharger","https://www.tesla.com/findus/location/supercharger/renovirginiastsupercharger",["3800 S Virginia St.\n","Reno, NV 89502\n"]],["Reno, NV - North Sierra Street Supercharger","https://www.tesla.com/findus/location/supercharger/renonsierrasupercharger",["375 N Sierra Street\n","Reno, NV 89503\n"]],["Stateline Supercharger","https://www.tesla.com/findus/location/supercharger/statelinenvsupercharger",["50 US-50\n","Stateline, NV 89449\n"]],["Tonopah Supercharger","https://www.tesla.com/findus/location/supercharger/tonopahsupercharger",["171 Main St.\n","Tonopah, NV 89049\n"]],["West Wendover Supercharger","https://www.tesla.com/findus/location/supercharger/westwendovernvsupercharger",["810 W Wendover Blvd.\n","West Wendover, NV 89883\n"]],["Winnemucca Supercharger","https://www.tesla.com/findus/location/supercharger/winnemuccanvsupercharger",["1985 W Winnemucca Blvd.\n","Winnemucca, NV 89446\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will title your vehicle and you a self-registration packet. \\n Tesla will title your car and mail (or email if NV) the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region:'Las Vegas',
default_zipcode: 89701
}},New_Hampshire:{ 
state_name: 'New Hampshire',
state_abbr: 'NH',
vehicle_incentives: null,
solar_incentives: 'Solar: Earn $100 per kW off the cash or loan price of solar panels and $80 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Ashland, NH Supercharger","https://www.tesla.com/findus/location/supercharger/ashlandnhsupercharger",["158 Main Street\n","Ashland, NH 03217\n"]],["Hooksett (Northbound) Supercharger","https://www.tesla.com/findus/location/supercharger/hooksettnbsupercharger",["Northbound I-93\n","Hooksett, NH 3106\n"]],["Hooksett (Southbound) Supercharger","https://www.tesla.com/findus/location/supercharger/hooksettsbnhsupercharger",["Southbound I-93\n","Hooksett, NH 3106\n"]],["Lincoln Supercharger","https://www.tesla.com/findus/location/supercharger/lincolnnhsupercharger",["22 South Mountain\n","Lincoln, NH 3251\n"]],["North Conway, NH (coming soon)","https://www.tesla.com/findus/location/supercharger/northconwaysupercharger",["North Conway, NH\n"]],["Rochester, NH Supercharger","https://www.tesla.com/findus/location/supercharger/rochesternhsupercharger",["290 North Main Street\n","Rochester, NH 03867\n"]],["Seabrook Supercharger","https://www.tesla.com/findus/location/supercharger/seabrooksupercharger",["700 Lafayette Road\n","Seabrook, NH 3874\n"]],["West Lebanon Supercharger","https://www.tesla.com/findus/location/supercharger/westlebanonsupercharger",["285 N. Plainfield Road\n","West Lebanon, NH 3784\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Boston',
default_zipcode: 03301
}},New_Jersey:{ 
state_name: 'New Jersey',
state_abbr: 'NJ',
vehicle_incentives: '$5,000 rebate for purchase or lease of a new vehicle with a purchase price under $55,000\nSales tax exemption\n10% discount on off-peak toll prices on NJT & GSP through EZ-Pass',
solar_incentives: 'Solar: Earn $720 per kW off the cash or loan price of solar panels and $600 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: 'PSE&G offers reduced EV rate plans based on time-of-use',
all_showrooms: [["Cherry Hill","https://www.tesla.com/findus/location/store/njcherryhill",["1605 Route 70 West\n","Cherry Hill, NJ 8002\n"]],["Garden State Plaza","https://www.tesla.com/findus/location/store/gardenstateplaza",["One Garden State Plaza\n","Suite 2124\n","Paramus, NJ 07652\n"]],["Lawrence Township-Princeton","https://www.tesla.com/findus/location/store/lawrencetownshipprinceton",["3371 Brunswick Pike\n","Lawrence Township, NJ 08648\n"]],["Paramus-Route 17","https://www.tesla.com/findus/location/store/paramusroute17",["530 Route 17 N\n","Paramus, NJ 07652\n"]],["Short Hills-Short Hills Mall","https://www.tesla.com/findus/location/store/shorthills",["1200 Morris Turnpike\n","Short Hills, NJ 7078\n"]],["Springfield","https://www.tesla.com/findus/location/store/springfieldnj",["135 US 22\n","Springfield, NJ 7081\n"]]],
 all_service_centers: [["Cherry Hill","https://www.tesla.com/findus/location/service/njcherryhill",["1605 Route 70 West\n","Cherry Hill, NJ 8002\n"]],["Lawrence Township-Princeton","https://www.tesla.com/findus/location/service/lawrencetownshipprinceton",["3371 Brunswick Pike\n","Lawrence Township, NJ 08648\n"]],["Paramus-Route 17","https://www.tesla.com/findus/location/service/paramusroute17",["530 Route 17 N\n","Paramus, NJ 07652\n"]],["Springfield","https://www.tesla.com/findus/location/service/springfieldnj",["135 US 22\n","Springfield, NJ 7081\n"]]],
all_charging_locations: [["Barnegat, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/barnegattownshipnjsupercharger",["945 West Bay Avenue\n","Barnegat, NJ 8005\n"]],["Basking Ridge, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/baskingridgesupercharger",["415 King George Road\n","Basking Ridge, NJ 7920\n"]],["Boonton, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/boontonnjsupercharger",["550 Myrtle Avenue\n","Boonton, NJ 07005\n"]],["Burlington, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/burlingtonnjsupercharger",["2060 US-130\n","Burlington, New Jersey 08016-0000\n"]],["Cape May Court House, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/capemaynjsupercharger",["11 Court House South Dennis Road\n","Cape May, NJ 8210\n"]],["Cherry Hill, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/cherryhillnjsupercharger",["Cherry Hill, NJ\n"]],["Cranbury Supercharger","https://www.tesla.com/findus/location/supercharger/cranburysupercharger",["Mile Marker 71.7 New Jersey Turnpike\n","Cranbury, NJ 8512\n"]],["Cranbury, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/cranburynjsupercharger",["Mile Marker 71.7 New Jersey Turnpike\n","Cranbury, NJ 8512\n"]],["Deptford, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/deptfordnjsupercharger",["1750 Deptford Center Road\n","Deptford, NJ 08096\n"]],["East Brunswick Supercharger","https://www.tesla.com/findus/location/supercharger/eastbrunswicksupercharger",["Mile Marker 78 New Jersey Turnpike North\n","East Brunswick, NJ 8816\n"]],["East Brunswick, NJ - State Route 18 Supercharger","https://www.tesla.com/findus/location/supercharger/eastbrunswickstateroute18supercharger",["755 State Route 18\n","East Brunswick, NJ 8816\n"]],["Edgewater, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/edgewaternewjerseysupercharger",["Edgewater, NJ\n"]],["Edison, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/edisonsupercharger",["55 Parsonage Rd.\n","Edison, NJ 8837\n"]],["Egg Harbor Township Supercharger","https://www.tesla.com/findus/location/supercharger/eggharbortownsupercharger",["3121 Fire Road\n","Egg Harbor Township, NJ 8234\n"]],["Elizabeth, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/elizabethnewjerseysupercharger",["Elizabeth, NJ\n"]],["Elizabeth, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/elizabethnjsupercharger",["651 Kapkowski Road\n","Elizabeth, NJ 07201\n"]],["Freehold, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/freeholdnjsupercharger",["909 Route 33\n","Freehold, NJ 07728\n"]],["Hackensack, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/hackensacksupercharger",["Hackensack, NJ\n"]],["Hamilton Township Supercharger","https://www.tesla.com/findus/location/supercharger/hamiltontownshipnjsupercharger",["425 Market Place Blvd\n","Hamilton, NJ 8691\n"]],["Jersey City, NJ - Mall Drive West Supercharger","https://www.tesla.com/findus/location/supercharger/jerseycitymalldrsupercharger",["30 Mall Drive West\n","Jersey City, NJ 07310-1615\n"]],["Jersey City, NJ – 1st Street Supercharger","https://www.tesla.com/findus/location/supercharger/jerseycitynjsupercharger",["160 First Street\n","Jersey City, NJ 07302\n"]],["Kearny, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/kearnysupercharger",["200 Harrison Avenue\n","Kearny, NJ 7032\n"]],["Mahwah, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/mahwahnjsupercharger",["Mahwah, NJ\n"]],["Maple Shade, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/mapleshadenjsupercharger",["2801 Route 73\n","Maple Shade, NJ 08052\n"]],["Marlton, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/marltonnjsupercharger",["500 NJ-73\n","Marlton, NJ 08053\n"]],["North Brunswick, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/northbrunswicksupercharger",["191 Grand Avenue\n","North Brunswick, NJ 8902\n"]],["Paramus-Route 17","https://www.tesla.com/findus/location/supercharger/paramusroute17",["530 Route 17 N\n","Paramus, NJ 07652\n"]],["Parlin, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/parlinsupercharger",["Parlin, NJ\n"]],["Parsippany, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/parsippanysupercharger",["350 New Road\n","Parsippany, NJ 7054\n"]],["Paulsboro, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/paulsboronjsupercharger",["51 Berkley Road\n","Paulsboro, NJ 8066\n"]],["Pompton Lakes, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/pomptonlakessupercharger",["Pompton Lakes, NJ\n"]],["Robbinsville, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/robbinsvillesupercharger",["315 Robbinsville-Allentown Road\n","Robbinsville, NJ 8691\n"]],["Rockaway, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/rockawaynjsupercharger",["395 Mount Hope Avenue\n","Rockaway, NJ 7866\n"]],["South Toms River, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/tomsrivernjsupercharger",["Tom\\'s River, NJ 08757\n"]],["Springfield, NJ - Cleveland Place Supercharger","https://www.tesla.com/findus/location/supercharger/springfieldnjclevelandplacesupercharger",["2017 Cleveland Place\n","Springfield, NJ 07081\n"]],["Tinton Falls Supercharger","https://www.tesla.com/findus/location/supercharger/tintonfallssupercharger",["1 Premium Outlets Blvd\n","Tinton Falls, NJ 7753\n"]],["Union City, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/unioncitynjsupercharger",["Union City, NJ\n"]],["Wayne, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/waynenewjerseysupercharger",["Wayne, NJ\n"]],["West Orange, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/westorangenjsupercharger",["West Orange, NJ\n"]],["Woodbridge Township, NJ Supercharger","https://www.tesla.com/findus/location/supercharger/woodbridgesupercharger",["440 King Georges Road\n","Woodbridge, NJ 08857-0000\n"]],["Woodcliff Lake, NJ (coming soon)","https://www.tesla.com/findus/location/supercharger/woodclifflakesupercharger",["Woodcliff Lake, NJ\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and mail your title and registration card. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: true, 
region: 'NY Metro',
default_zipcode: 08608
}},New_Mexico:{
state_name: 'New Mexico',
state_abbr: 'NM',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Albuquerque Supercharger","https://www.tesla.com/findus/location/supercharger/albuquerquesupercharger",["2600 Menaul Blvd NE\n","Albuquerque, NM 87107\n"]],["Clayton, NM (coming soon)","https://www.tesla.com/findus/location/supercharger/claytonnmsupercharger",["Clayton, NM\n"]],["Clovis, NM (coming soon)","https://www.tesla.com/findus/location/supercharger/clovisnmsupercharger",["Clovis, NM\n"]],["Deming, NM Supercharger","https://www.tesla.com/findus/location/supercharger/demingnmsupercharger",["1695 US-180\n","Deming, 88030\n"]],["Farmington, NM Supercharger","https://www.tesla.com/findus/location/supercharger/farmingtonnmsupercharger",["4200 Sierra Vista Drive\n","Farmington, NM 87402-8302\n"]],["Gallup, NM Supercharger","https://www.tesla.com/findus/location/supercharger/gallupsupercharger",["111 Twin Buttes Rd\n","Gallup, NM 87301\n"]],["Grants, NM (coming soon)","https://www.tesla.com/findus/location/supercharger/grantsnmsupercharger",["Grants, NM\n"]],["Las Vegas, NM Supercharger","https://www.tesla.com/findus/location/supercharger/lasvegasnmsupercharger",["2500 N. Grand Ave.\n","Las Vegas, NM 87701\n"]],["Santa Fe Supercharger","https://www.tesla.com/findus/location/supercharger/santafesupercharger",["8380 Cerrillos Rd\n","Santa Fe, NM 87507-4415\n"]],["Santa Rosa Supercharger","https://www.tesla.com/findus/location/supercharger/santarosanmsupercharger",["2516 Historic Route 66\n","Santa Rosa, NM 88435\n"]],["Soccoro, NM (coming soon)","https://www.tesla.com/findus/location/supercharger/soccorosupercharger",["Soccoro, NM\n"]],["Taos, NM (coming soon)","https://www.tesla.com/findus/location/supercharger/taossupercharger",["Taos, NM\n"]],["Truth or Consequences Supercharger","https://www.tesla.com/findus/location/supercharger/truthorconsequencessupercharger",["2201 F.G. Amin Street\n","Truth or Consequences, NM 87901\n"]],["Tucumcari Supercharger","https://www.tesla.com/findus/location/supercharger/tucumcarinmsupercharger",["2624 S Adams St.\n","Tucumcari, NM 88401\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration",
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: true,
leasing_available: true,
financing_available: false, 
region: 'Pheonix',
default_zipcode: 87501
}},New_York:{ 
state_name: 'New York',
state_abbr: 'NY',
vehicle_incentives: '$500 rebate for new vehicles with a base price over $60,000\n$2,000 rebate for new vehicles with a base price under $60,000\nState emissions testing exception',
solar_incentives: 'Solar: Up to $350 per kW and up to $5,000 state tax credit',
local_vehicle_incentives: 'ConEd offers reduced EV rate plans based on time-of-use',
local_solar_incentives: 'Powerwall: NYSERDA offers $250 per kWh up to $6,250 to energy storage customers Long Island',
all_showrooms: [["Brooklyn-Van Brunt Street","https://www.tesla.com/findus/location/store/brooklyn",["160 Van Brunt Street\n","Brooklyn, NY 11231\n"]],["Henrietta","https://www.tesla.com/findus/location/store/henriettaservice",["3300 W Henrietta Rd\n","Henrietta, NY 14623\n"]],["Huntington Station-Walt Whitman Shops","https://www.tesla.com/findus/location/store/waltwhitman",["160 Walt Whitman Rd\n","Space 1009A\n","Huntington Station, NY 11746\n"]],["Manhasset-Americana Manhasset","https://www.tesla.com/findus/location/store/americanamanhassetdelivery",["2122 Northern Blvd\n","Manhasset, NY 11030\n"]],["Meatpacking-860 Washington","https://www.tesla.com/findus/location/store/860washington",["860 Washington St.\n","New York, NY 10014\n"]],["Smithtown-Long Island","https://www.tesla.com/findus/location/store/smithtownlongisland",["1000 Nesconset Highway\n","Smithtown, NY 11787-1066\n"]],["Westchester-Mt. Kisco","https://www.tesla.com/findus/location/store/mtkisco",["115 Kisco Avenue\n","Mt. Kisco, NY 10549\n"]],["White Plains-The Westchester","https://www.tesla.com/findus/location/store/westchester",["125 Westchester Avenue\n","Suite #1400\n","White Plains, NY 10601\n"]]],
all_service_centers: [["Brooklyn-Van Brunt Street","https://www.tesla.com/findus/location/service/brooklyn",["160 Van Brunt Street\n","Brooklyn, NY 11231\n"]],["Henrietta","https://www.tesla.com/findus/location/service/henriettaservice",["3300 W Henrietta Rd\n","Henrietta, NY 14623\n"]],["Latham Service Center","https://www.tesla.com/findus/location/service/lathamservice",["326 Old Niskayuna Road\n","Latham, NY 12110\n"]],["Long Island-Syosset","https://www.tesla.com/findus/location/service/syosset",["7 Aerial Way\n","Syosset, NY 11791\n"]],["Smithtown-Long Island","https://www.tesla.com/findus/location/service/smithtownlongisland",["1000 Nesconset Highway\n","Smithtown, NY 11787-1066\n"]],["Westchester-Mt. Kisco","https://www.tesla.com/findus/location/service/mtkisco",["115 Kisco Avenue\n","Mt. Kisco, NY 10549\n"]]],
all_charging_locations:[["Albany, NY Supercharger","https://www.tesla.com/findus/location/supercharger/albanysupercharger",["131 Colonie Center\n","Albany, NY 12205\n"]],["Astoria, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/astorianewyorksupercharger",["Astoria, NY\n"]],["Bath Beach, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/bathbeachnewyorksupercharger",["Bath Beach, NY\n"]],["Bay Shore, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/bayshorenysupercharger",["Bay Shore, NY\n"]],["Bedford Hills, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/bedfordhillsnysupercharger",["Bedford Hills, NY\n"]],["Bergen Beach, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/bergenbeachnewyorksupercharger",["Bergen Beach, NY\n"]],["Binghamton Supercharger","https://www.tesla.com/findus/location/supercharger/binghamtonsupercharger",["1062 Front Street\n","Binghamton, NY 13905\n"]],["Bronx, NY - Bay Plaza Supercharger","https://www.tesla.com/findus/location/supercharger/bronxnysupercharger",["260 Baychester Avenue\n","Bronx, NY 10475\n"]],["Brooklyn Heights, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/brooklynheightsnysupercharger",["Brooklyn Heights, NY\n"]],["Brooklyn, NY - Atlantic Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/brooklynatlanticsupercharger",["625 Atlantic Avenue B12\n","Brooklyn, NY 11217\n"]],["Brooklyn, NY - Brooklyn Museum Supercharger","https://www.tesla.com/findus/location/supercharger/brooklynnysupercharger",["878 Washington Avenue\n","Brooklyn, NY 11225\n"]],["Brooklyn, NY - N. 12th Street Supercharger","https://www.tesla.com/findus/location/supercharger/brooklyn12thstreetsupercharger",["113 N. 12th Street\n","Brooklyn, NY 11249\n"]],["Buffalo Supercharger","https://www.tesla.com/findus/location/supercharger/buffalosupercharger",["4455 Transit Road\n","Buffalo, NY 14221\n"]],["Centuck, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/centuckynysupercharger",["Centuck, NY\n"]],["Cheektowaga, NY Supercharger","https://www.tesla.com/findus/location/supercharger/cheektowaganysupercharger",["2013 Walden Avenue\n","Cheektowaga, NY 14225\n"]],["Chelsea, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/chelseanewyorksupercharger",["Chelsea, NY\n"]],["Chestertown, NY Supercharger","https://www.tesla.com/findus/location/supercharger/chestertownsupercharger",["6151 NY-8\n","Chestertown, NY 12817\n"]],["Clinton Corners, NY Supercharger","https://www.tesla.com/findus/location/supercharger/clintoncornerasupercharger",["2300 Salt Point Turnpike\n","Clinton Corners, 12514-2025\n"]],["Copiague, NY Supercharger","https://www.tesla.com/findus/location/supercharger/copiaguenysupercharger",["1147 Sunrise Highway\n","Copiague, NY 11726\n"]],["East Hampton, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/easthamptonnysupercharger",["East Hampton, NY\n"]],["Erwin Supercharger","https://www.tesla.com/findus/location/supercharger/erwinnysupercharger",["125 Victory Hwy\n","Erwin, NY 14870\n"]],["Fishkill, NY Supercharger","https://www.tesla.com/findus/location/supercharger/fishkillnysupercharger",["18 Westage Drive\n","Fishkill, NY 12524\n"]],["Flushing, NY Supercharger","https://www.tesla.com/findus/location/supercharger/flushingnewyorksupercharger",["136-20 38th Avenue\n","Flushing, NY 11354\n"]],["Glendale, NY - Cooper Avenue Supercharger","https://www.tesla.com/findus/location/supercharger/glendalenycoopersupercharger",["8000 Cooper Avenue\n","Glendale, NY 11385\n"]],["Guilderland Supercharger","https://www.tesla.com/findus/location/supercharger/guilderlandsupercharger",["1 Crossgates Mall Road\n","Guilderland, NY 12203\n"]],["Harlem, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/harlemnewyorksupercharger",["Harlem, NY\n"]],["Islandia, NY Supercharger","https://www.tesla.com/findus/location/supercharger/islandiasupercharger",["1750 Veterans Hwy\n","Islandia, NY 11598\n"]],["Ithaca, NY Supercharger","https://www.tesla.com/findus/location/supercharger/ithacanysupercharger",["740 South Meadow Street\n","Ithaca, NY 14850\n"]],["JFK - Queens, NY Supercharger","https://www.tesla.com/findus/location/supercharger/jfksupercharger",["150th Ave and 147th St\n","Queens, NY 11430\n"]],["Kingston Supercharger","https://www.tesla.com/findus/location/supercharger/kingstonnysupercharger",["640 Washington Ave.\n","Kingston, NY 12401\n"]],["Kips Bay, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/kipsbaynysupercharger",["Kips Bay, NY\n"]],["Lake Placid, NY Supercharger","https://www.tesla.com/findus/location/supercharger/lakeplacidnewyorksupercharger",["1930 Saranac Ave\n","Lake Placid, NY 12946\n"]],["Little Neck, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/littlenecknysupercharger",["Little Neck, NY\n"]],["Manhattan, NY - Vesey Street Supercharger","https://www.tesla.com/findus/location/supercharger/lowermanhattansupercharger",["250 Vesey Street\n","Manhattan, NY 10080\n"]],["Manorville, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/manorvillesupercharger",["Manorville, NY\n"]],["Middletown, NY Supercharger","https://www.tesla.com/findus/location/supercharger/middletownnysupercharger",["601 East Main Street\n","Middletown, NY 10941\n"]],["New Rochelle, NY Supercharger","https://www.tesla.com/findus/location/supercharger/newrochellesupercharger",["33 LeCount Place and Huguenot Street\n","New Rochelle, NY 10801-6408\n"]],["New York, NY - 59 Allen Street Supercharger","https://www.tesla.com/findus/location/supercharger/ny59allenstsupercharger",["59 Allen Street\n","Lower Manhattan, NY 95123\n"]],["New York, NY - E 47th Street Supercharger","https://www.tesla.com/findus/location/supercharger/nyeast47thstreetsupercharger",["212 East 47th Street\n","New York, 10017\n"]],["New York, NY - Mott Street Supercharger","https://www.tesla.com/findus/location/supercharger/newyorkmottstsupercharger",["106 Mott Street\n","New York, NY 10013-4600\n"]],["New York, NY - West 75th Street Supercharger","https://www.tesla.com/findus/location/supercharger/nywest75streetsupercharger",["201 W 75th Street\n","New York, 10023-1704\n"]],["Newburgh Supercharger","https://www.tesla.com/findus/location/supercharger/newburghsupercharger",["1217 NY-300\n","Newburgh, NY 12550\n"]],["Oneonta, NY Supercharger","https://www.tesla.com/findus/location/supercharger/oneontanysupercharger",["4968 NY-23\n","Oneonta, NY 13820\n"]],["Ossining, NY Supercharger","https://www.tesla.com/findus/location/supercharger/ossiningnewyorksupercharger",["240 South Highland Avenue\n","Ossining, NY 10562\n"]],["Plainview, NY Supercharger","https://www.tesla.com/findus/location/supercharger/plainviewsupercharger",["1427 Old Country Road\n","Plainview, NY 11803-5010\n"]],["Plattsburgh Supercharger","https://www.tesla.com/findus/location/supercharger/plattsburghsupercharger",["60 Smithfield Blvd\n","Plattsburgh, NY 12901\n"]],["Port Chester, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/portchesternysupercharger",["Port Chester, NY\n"]],["Queens, NY - Queens Center Supercharger","https://www.tesla.com/findus/location/supercharger/queensnysupercharger",["90-15 Queens Boulevard\n","Queens, NY 11373\n"]],["Queensbury Supercharger","https://www.tesla.com/findus/location/supercharger/queensburysupercharger",["578 Aviation Road\n","Queensbury, NY 12804\n"]],["Roscoe, NY Supercharger","https://www.tesla.com/findus/location/supercharger/roscoenysupercharger",["1908 Old Route 17\n","Roscoe, NY 12776\n"]],["Salamanca, NY Supercharger","https://www.tesla.com/findus/location/supercharger/salamancasupercharger",["777 Seneca Allegany Boulevard\n","Salamanca, NY 14779\n"]],["Scarsdale, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/scarsdalenewyorksupercharger",["Scarsdale, NY\n"]],["Shirley, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/shirleynewyorksupercharger",["Shirley, NY\n"]],["Southampton Supercharger","https://www.tesla.com/findus/location/supercharger/southamptonsupercharger",["850 County Road 39\n","Southampton, NY 11968\n"]],["Staten Island, NY - Veterans Road West Supercharger","https://www.tesla.com/findus/location/supercharger/statenislandveteransrdsupercharger",["2925 Veterans Road West\n","New York City, NY 10309\n"]],["Syracuse Supercharger","https://www.tesla.com/findus/location/supercharger/syracusesupercharger",["441 Electronics Parkway\n","Liverpool, NY 13088\n"]],["Tarrytown Supercharger","https://www.tesla.com/findus/location/supercharger/tarrytownsupercharger",["600 White Plains Road\n","Tarrytown, NY 10591-5104\n"]],["Upper East Side, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/uppereastsidenysupercharger",["Upper East Side, NY\n"]],["Utica Supercharger","https://www.tesla.com/findus/location/supercharger/uticanysupercharger",["50 Auert Ave.\n","Utica, NY 13501\n"]],["Valley Stream, NY Supercharger","https://www.tesla.com/findus/location/supercharger/valleystreamnewyorksupercharger",["2034 Green Acres Mall, Sunrise Highway\n","Valley Stream, NY 11581\n"]],["Victor Supercharger","https://www.tesla.com/findus/location/supercharger/victornysupercharger",["7979 Pittsford Victor Rd\n","Victor, NY 14564\n"]],["Wantagh, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/wangtaghsupercharger",["Wantagh, NY\n"]],["Water Mill, NY Sueprcharger","https://www.tesla.com/findus/location/supercharger/watermillnysupercharger",["760 Montauk Highway\n","Water Mill, NY 11976\n"]],["Waterloo, NY Supercharger","https://www.tesla.com/findus/location/supercharger/waterloonysupercharger",["1133 Route 414\n","Waterloo, NY 13165\n"]],["Watertown Supercharger","https://www.tesla.com/findus/location/supercharger/watertownsupercharger",["21182 Salmon Run Mall Loop W\n","Watertown, NY 13601\n"]],["West Nyack, NY Supercharger","https://www.tesla.com/findus/location/supercharger/westnyacknysupercharger",["1000 Palisades Center Drive\n","West Nyack, NY 10994\n"]],["White Plains, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/whiteplainsnysupercharger",["White Plains, NY\n"]],["Woodbury, NY (coming soon)","https://www.tesla.com/findus/location/supercharger/woodburynysupercharger",["Woodbury, NY\n"]],["Yonkers, NY Supercharger","https://www.tesla.com/findus/location/supercharger/yonkerssupercharger",["Archer Street\n","Yonkers, NY 10701-3230\n"]],["Yorktown Heights, NY Supercharger","https://www.tesla.com/findus/location/supercharger/yorktownheightssupercharger",["3379 Crompond Road\n","Yorktown Heights, CA 10589\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'NY Metro',
default_zipcode: 12207
}},North_Carolina:{ 
state_name: 'North Carolina',
state_abbr: 'NC',
vehicle_incentives: 'State emissions testing exemption & HOV lane access',
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Charlotte-Matthews","https://www.tesla.com/findus/location/store/charlottematthews",["9140 East Independence Blvd\n","Matthews, NC 28105\n"]],["Raleigh - Glenwood Avenue","https://www.tesla.com/findus/location/store/raleighglenwoodave",["7101 Glenwood Avenue\n","Raleigh, NC 27612\n"]]],
all_service_centers: [["Charlotte-Matthews","https://www.tesla.com/findus/location/service/charlottematthews",["9140 East Independence Blvd\n","Matthews, NC 28105\n"]],["Raleigh - Glenwood Avenue","https://www.tesla.com/findus/location/service/raleighglenwoodave",["7101 Glenwood Avenue\n","Raleigh, NC 27612\n"]]],
all_charging_locations: [["Asheville Supercharger","https://www.tesla.com/findus/location/supercharger/ashevillesupercharger",["800 Brevard Road\n","Asheville, NC 28806\n"]],["Burlington, NC Supercharger","https://www.tesla.com/findus/location/supercharger/burlingtonncsupercharger",["1080 Piper Ln\n","Burlington, NC 27215\n"]],["Cary, NC Supercharger","https://www.tesla.com/findus/location/supercharger/carynorthcarolinasupercharger",["7119 O\\'Kelly Chapel Road\n","Cary, NC 27519\n"]],["Charlotte Supercharger","https://www.tesla.com/findus/location/supercharger/charlottencsupercharger",["2720 W Mallard Creek Church Rd\n","Charlotte, NC 28262\n"]],["Charlotte, NC - Toringdon Way Supercharger","https://www.tesla.com/findus/location/supercharger/charlottetoringdonsupercharger",["3429 Toringdon Way\n","Charlotte, NC 28277\n"]],["Fayetteville, NC Supercharger","https://www.tesla.com/findus/location/supercharger/fayettevillencsupercharger",["1965 Cedar Creek Road\n","Fayetteville, NC 28312\n"]],["Greensboro, NC Supercharger","https://www.tesla.com/findus/location/supercharger/greensborosupercharger",["5421 Hornaday Road\n","Greensboro, NC 27407-2747\n"]],["Henderson, NC Supercharger","https://www.tesla.com/findus/location/supercharger/hendersonncsupercharger",["619 Ruin Creek Road\n","Henderson, NC 27536\n"]],["Hickory, NC Supercharger","https://www.tesla.com/findus/location/supercharger/hickorysupercharger",["2191 13th Avenue Drive SE\n","Hickory, NC 28602-5185\n"]],["Kill Devil Hills, NC Supercharger","https://www.tesla.com/findus/location/supercharger/killdevilhillssupercharger",["2012 S Croatan Hwy\n","Kill Devil Hills, NC 27948\n"]],["Kinston, NC Supercharger","https://www.tesla.com/findus/location/supercharger/kinstonncsupercharger",["4483 U.S. Highway 70\n","Kinston, NC 28504\n"]],["Lumberton Supercharger","https://www.tesla.com/findus/location/supercharger/lumbertonncsupercharger",["5093 Fayetteville Rd.\n","Lumberton, NC 28358\n"]],["Mt Airy, NC Supercharger","https://www.tesla.com/findus/location/supercharger/mtairyncsupercharger",["2905 Rockford Street\n","Mt Airy, NC 27030\n"]],["Plymouth, NC Supercharger","https://www.tesla.com/findus/location/supercharger/plymouthsupercharger",["840 U.S. 64\n","Plymouth, NC 27962\n"]],["Raleigh, NC Supercharger","https://www.tesla.com/findus/location/supercharger/raleighsupercharger",["Lassiter at North Hills Ave\n","Raleigh, NC 27609-5780\n"]],["Rocky Mount, NC Supercharger","https://www.tesla.com/findus/location/supercharger/rockymountsupercharger",["651 N. Winstead Avenue\n","Rocky Mount, NC 27804\n"]],["Smithfield, NC Supercharger","https://www.tesla.com/findus/location/supercharger/smithfieldncsupercharger",["1700 East Market Street\n","Smithfield, NC 27577\n"]],["Wallace, NC Supercharger","https://www.tesla.com/findus/location/supercharger/wallacencsupercharger",["111 River Village Place\n","Wallace, NC 28466\n"]],["Wilmington Supercharger","https://www.tesla.com/findus/location/supercharger/wilmingtonsupercharger",["6835 Conservation Way\n","Wilmington, NC 28405-4191\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'North Carolina',
default_zipcode: 27601
}},North_Dakota:{
state_name: 'North Dakota',
state_abbr: 'ND',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null, 
all_service_centers:null,
all_charging_locations:[["Bismarck, ND Supercharger","https://www.tesla.com/findus/location/supercharger/bismarckndsupercharger",["Bismarck, ND 58503\n"]],["Dickinson, ND Supercharger","https://www.tesla.com/findus/location/supercharger/dickinsonndsupercharger",["Dickinson, ND 58601\n"]],["Fargo, ND Supercharger","https://www.tesla.com/findus/location/supercharger/fargondsupercharger",["5680 23rd Avenue South\n","Fargo, ND 58104\n"]],["Grand Forks, ND (coming soon)","https://www.tesla.com/findus/location/supercharger/grandforkssupercharger",["Grand Forks, ND\n"]],["Jamestown, ND Supercharger","https://www.tesla.com/findus/location/supercharger/jamestownndsupercharger",["2400 8th Avenue Southwest\n","Jamestown, ND 58401\n"]],["Pembina, ND (coming soon)","https://www.tesla.com/findus/location/supercharger/pembinandsupercharger",["Pembina, ND\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Minneapolis',
default_zipcode: 58505
}},Ohio:{
state_name: 'Ohio',
state_abbr: 'OH',
vehicle_incentives: null,
solar_incentives:null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms:[["Cincinnati","https://www.tesla.com/findus/location/store/cincinnati",["9111 Blue Ash Road\n","Cincinnati, OH 45242\n"]],["Cleveland-Lyndhurst","https://www.tesla.com/findus/location/store/lyndhurst",["5180 Mayfield Road\n","Lyndhurst, OH 44124\n"]],["Columbus","https://www.tesla.com/findus/location/store/columbuseastonloop",["4099 Easton Loop West\n","Columbus, OH 43219-6087\n"]]],
all_service_centers:[["Cincinnati","https://www.tesla.com/findus/location/service/cincinnati",["9111 Blue Ash Road\n","Cincinnati, OH 45242\n"]],["Cleveland-Lyndhurst","https://www.tesla.com/findus/location/service/lyndhurst",["5180 Mayfield Road\n","Lyndhurst, OH 44124\n"]],["Columbus","https://www.tesla.com/findus/location/service/columbuseastonloop",["4099 Easton Loop West\n","Columbus, OH 43219-6087\n"]],["Toledo","https://www.tesla.com/findus/location/service/toledo",["6142 Telegraph Rd\n","Toledo, OH 43612\n"]]],
all_charging_locations:[["Akron, OH (coming soon)","https://www.tesla.com/findus/location/supercharger/akronohsupercharger",["Akron, OH\n"]],["Cambridge, OH Supercharger","https://www.tesla.com/findus/location/supercharger/cambridgeohsupercharger",["2101 Southgate Parkway\n","Cambridge, OH 43725-3080\n"]],["Chillicothe, OH Supercharger","https://www.tesla.com/findus/location/supercharger/chillicotheohsupercharger",["1080 N. Bridge Street\n","Chillicothe, OH 45601\n"]],["Cincinnati","https://www.tesla.com/findus/location/supercharger/cincinnati",["9111 Blue Ash Road\n","Cincinnati, OH 45242\n"]],["Cincinnati, OH Supercharger","https://www.tesla.com/findus/location/supercharger/cincinnatiohiosupercharger",["4825 Marburg Avenue\n","Cincinnati, OH 45209\n"]],["Cleveland, OH (coming soon)","https://www.tesla.com/findus/location/supercharger/clevelandohiosupercharger",["Cleveland, OH\n"]],["Columbus, OH Supercharger","https://www.tesla.com/findus/location/supercharger/columbusohiosupercharger",["70 East Goodale Street\n","Columbus, OH 43215\n"]],["Dayton, OH Supercharger","https://www.tesla.com/findus/location/supercharger/daytonsupercharger",["9200 N Main Street\n","Dayton, OH 45415\n"]],["Dublin, OH Supercharger","https://www.tesla.com/findus/location/supercharger/dublinohiosupercharger",["6175 Sawmill Road\n","Dublin, OH 43017\n"]],["Grove City Supercharger","https://www.tesla.com/findus/location/supercharger/grovecityohsupercharger",["2221 Stringtown Rd\n","Grove City, OH 43123\n"]],["Lima Supercharger","https://www.tesla.com/findus/location/supercharger/limasupercharger",["1933 Roschman Ave.\n","Lima, OH 45804\n"]],["Macedonia, OH Supercharger","https://www.tesla.com/findus/location/supercharger/macedoniasupercharger",["8210 Macedonia Commons Blvd.\n","Macedonia, OH 44056\n"]],["Maumee, OH Supercharger","https://www.tesla.com/findus/location/supercharger/maumeesupercharger",["1391 Conant Street\n","Maumee, OH 43537\n"]],["Mt. Gilead Supercharger","https://www.tesla.com/findus/location/supercharger/mtgileadsupercharger",["6200 State Route 95\n","Mt. Gilead, OH 43338-9548\n"]],["Polaris, OH Supercharger","https://www.tesla.com/findus/location/supercharger/polarisohsupercharger",["1177 Polaris Parkway\n","Columbus, OH 43240\n"]],["Sandusky, OH Supercharger","https://www.tesla.com/findus/location/supercharger/sanduskyohsupercharger",["4702 Milan Road\n","Sandusky, OH 44870\n"]],["Sheffield, OH Supercharger","https://www.tesla.com/findus/location/supercharger/sheffieldohsupercharger",["5295 Detroit Road\n","Sheffield, OH 44054-2902\n"]],["Strongsville, OH Supercharger","https://www.tesla.com/findus/location/supercharger/strongsvilleohsupercharger",["9037 Pearl Road\n","Strongsville, OH 44136\n"]],["Toledo, OH Supercharger","https://www.tesla.com/findus/location/supercharger/toledosupercharger",["1500 E. Alexis Road\n","Toledo, OH 43612-3952\n"]],["West Cincinnati, OH Supercharger","https://www.tesla.com/findus/location/supercharger/westcincinnatiohsupercharger",["6550 Harrison Avenue\n","Cincinnati, OH 45247\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and mail your title and registration card. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Ohio',
default_zipcode: 43215
}},Oklahoma:{ 
state_name: 'Oklahoma',
state_abbr: 'OK',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Tulsa-6010 S 129th E Ave","https://www.tesla.com/findus/location/store/tulsa6010",["6010 S 129th E Ave\n","Tulsa, OK 74134\n"]]],
all_service_centers:[["Tulsa-6010 S 129th E Ave","https://www.tesla.com/findus/location/service/tulsa6010",["6010 S 129th E Ave\n","Tulsa, OK 74134\n"]]],
all_charging_locations:[["Ardmore Supercharger","https://www.tesla.com/findus/location/supercharger/ardmoreoksupercharger",["322 Holiday Drive\n","Ardmore, OK 73401\n"]],["Catoosa Supercharger","https://www.tesla.com/findus/location/supercharger/catoosasupercharger",["777 W. Cherokee St.\n","Catoosa, OK 74015\n"]],["Henryetta, OK (coming soon)","https://www.tesla.com/findus/location/supercharger/henryettasupercharger",["Henryetta, OK\n"]],["Oklahoma City Supercharger","https://www.tesla.com/findus/location/supercharger/oklahomacitysupercharger",["7624 West Reno Ave #380\n","Oklahoma City, OK 73127\n"]],["Perry Supercharger","https://www.tesla.com/findus/location/supercharger/perryoksupercharger",["2812 Fir Street\n","Perry, OK 73077\n"]],["Weatherford Supercharger","https://www.tesla.com/findus/location/supercharger/weatherfordoksupercharger",["1301 N Airport Rd\n","Weatherford, OK 73096\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Kansas City',
default_zipcode: 73105
}},Oregon:{
state_name: 'Oregon',
state_abbr: 'OR',
vehicle_incentives: 'Standard Rebate of $2,500 for purchase or lease of Model 3 and Model Y\nCharge Ahead rebate of $2,500 for purchase or lease of new or used Tesla for eligible customers',
solar_incentives: 'Solar: $300 per kW up to $2,400',
local_vehicle_incentives: 'Several municipalities & utilities offer rebates for customers who install home charging equipment including Central Lincoln PUD, City of Ashland, Emerald PUD, Eugene Water & Electric Board, Pacific Power and Portland General Electric',
local_solar_incentives: 'The City of Ashland offers a cash rebate of $500 per kW for solar systems up to $7,500\nThe Eugene Water & Electric Board offers an incentive of $400 per kW for systems up to $2,500\nThe City of Forest Grove offers a $500/kW incentive up to $1,000\nSalem Electric offers a $300 per kW incentive up to $1,500',
all_showrooms: [["Portland-S Macadam Avenue","https://www.tesla.com/findus/location/store/portlandmacadamavenue",["4330 S Macadam Ave\n","Portland, OR 97239\n"]],["Portland-Washington Square","https://www.tesla.com/findus/location/store/washingtonsquare",["9321 SW Washington Square Road Space #T05\n","Portland, OR 97223\n"]]],
all_service_centers: [["Portland-S Macadam Avenue","https://www.tesla.com/findus/location/service/portlandmacadamavenue",["4330 S Macadam Ave\n","Portland, OR 97239\n"]]],
all_charging_locations:[["Baker City Supercharger","https://www.tesla.com/findus/location/supercharger/bakercitysupercharger",["1 Sunridge Lane\n","Baker City, OR 97814\n"]],["Bandon Supercharger","https://www.tesla.com/findus/location/supercharger/bandonsupercharger",["120 Michigan Ave. NE\n","Bandon, OR 97411\n"]],["Bend Supercharger","https://www.tesla.com/findus/location/supercharger/bendoregonsupercharger",["61535 S Highway 97\n","Bend, OR 97702\n"]],["Boardman, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/boardmansupercharger",["Boardman, OR\n"]],["Burns, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/burnsoregonsupercharger",["Burns, OR\n"]],["Detroit, OR Supercharger","https://www.tesla.com/findus/location/supercharger/detroitlakesupercharger",["210 D Street\n","Detroit, OR 97342\n"]],["Grants Pass Supercharger","https://www.tesla.com/findus/location/supercharger/grantspassoregonsupercharger",["1900 NW 6th St.\n","Grants Pass, OR 97526\n"]],["Hillsboro, OR Supercharger","https://www.tesla.com/findus/location/supercharger/hillsboroorsupercharger",["18101 NW Evergreen Parkway\n","Beaverton, OR 97006\n"]],["Hood River, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/hoodriveroregonsupercharger",["Hood River, OR\n"]],["Klamath Falls Supercharger","https://www.tesla.com/findus/location/supercharger/klamathfallssupercharger",["2655 Shasta Way\n","Klamath Falls, OR 97603-4455\n"]],["Lincoln City Supercharger","https://www.tesla.com/findus/location/supercharger/lincolncityoregonsupercharger",["1500 SE East Devils Lake Rd.\n","Lincoln City, OR 97367\n"]],["Madras, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/madrassupercharger",["Madras, OR\n"]],["Medford, OR Supercharger","https://www.tesla.com/findus/location/supercharger/medfordorsupercharger",["2000 Crater Lake Highway\n","Medford, OR 97504\n"]],["Newport, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/newportoregonsupercharger",["Newport, OR\n"]],["Ontario, OR Supercharger","https://www.tesla.com/findus/location/supercharger/ontarioorsupercharger",["203 East Street West\n","Ontario, OR 97914\n"]],["Pendleton Supercharger","https://www.tesla.com/findus/location/supercharger/pendletonsupercharger",["46510 Wildhorse Blvd.\n","Pendleton, OR 97801\n"]],["Portland, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/portlandsupercharger",["Portland, OR\n"]],["Portland, OR - NW (coming soon)","https://www.tesla.com/findus/location/supercharger/portlandnworsupercharger",["Portland, OR\n"]],["Portland, OR - NE (coming soon)","https://www.tesla.com/findus/location/supercharger/portlandneorsupercharger",["Portland, OR\n"]],["Portland, OR - SE (coming soon)","https://www.tesla.com/findus/location/supercharger/portlandseorsupercharger",["Portland, OR\n"]],["Roseburg, OR (coming soon)","https://www.tesla.com/findus/location/supercharger/roseburgoregonsupercharger",["Roseburg, OR\n"]],["Salem, OR Supercharger","https://www.tesla.com/findus/location/supercharger/salemoregonsupercharger",["3790 Center Street NE\n","Salem, OR 97301\n"]],["Sandy Supercharger","https://www.tesla.com/findus/location/supercharger/sandysupercharger",["16625 SE 362nd Dr.\n","Sandy, OR 97055\n"]],["Seaside, OR Supercharger","https://www.tesla.com/findus/location/supercharger/seasideorupercharger",["1111 N Roosevelt Dr\n","Seaside, OR 97138\n"]],["Springfield, OR Supercharger","https://www.tesla.com/findus/location/supercharger/springfieldsupercharger",["919 Kruse Way\n","Springfield, OR 97477\n"]],["The Dalles, OR Supercharger","https://www.tesla.com/findus/location/supercharger/thedallessupercharger",["2114 West 6th Street\n","The Dalles, OR 97058\n"]],["Tigard, OR Supercharger","https://www.tesla.com/findus/location/supercharger/tigardoregonsupercharger",["9585 Southwest Washington Square Road\n","Tigard, OR 97223\n"]],["Woodburn Supercharger","https://www.tesla.com/findus/location/supercharger/woodburnorsupercharger",["255 N Arney Rd\n","Woodburn, OR 97071\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration and the DMV will mail your title and registration card. \\n You will receive a temporary registration placard to operate your vehicle while Tesla processes registration."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region:'Portland',
default_zipcode: 97301
}},Pennsylvania:{
state_name: 'Pennsylvania',
state_abbr: 'PA',
vehicle_incentives: null,
solar_incentives: 'Solar: Earn $90 per kW off the cash or loan price of solar panels and $80 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: 'PECO offers a $50 rebate to customers who purchase an EV',
local_solar_incentives: null,
all_showrooms: [["Devon","https://www.tesla.com/findus/location/store/devon",["470 W Lancaster Ave\n","Devon, PA 19333\n"]],["King of Prussia-King of Prussia Mall","https://www.tesla.com/findus/location/store/kingofprussia",["160 N Gulph Road\n","King of Prussia, PA 19406\n"]],["Pittsburgh-Wexford","https://www.tesla.com/findus/location/store/pittsburghwexford",["14010 Perry Highway\n","Wexford, PA 15090\n"]],["Ross Park Mall","https://www.tesla.com/findus/location/store/rosspark",["1000 Ross Park Mall Dr Space C02D\n","Pittsburgh, PA 15237\n"]]],
all_service_centers: [["Devon","https://www.tesla.com/findus/location/service/devon",["470 W Lancaster Ave\n","Devon, PA 19333\n"]],["Lancaster","https://www.tesla.com/findus/location/service/lancaster",["1170 Garfield Avenue, Gateway Business Center #2\n","Lancaster, PA 17601\n"]],["Pittsburgh-Wexford","https://www.tesla.com/findus/location/service/pittsburghwexford",["14010 Perry Highway\n","Wexford, PA 15090\n"]]],
all_charging_locations: [["Allentown Supercharger","https://www.tesla.com/findus/location/supercharger/allentownsupercharger",["4680 Broadway\n","Allentown, PA 18104\n"]],["Altoona, PA Supercharger","https://www.tesla.com/findus/location/supercharger/altoonapasupercharger",["1915 Pleasant Valley Boulevard\n","Altoona, PA 16602\n"]],["Bellefonte, PA Supercharger","https://www.tesla.com/findus/location/supercharger/bellefontepasupercharger",["170 Buckaroo Ln\n","Bellefonte, PA 16823-9119\n"]],["Bensalem, PA Supercharger","https://www.tesla.com/findus/location/supercharger/bensalempasupercharger",["3620 Street Road\n","Bensalem, PA 19020\n"]],["Bloomsburg Supercharger","https://www.tesla.com/findus/location/supercharger/bloomsburgsupercharger",["11 Ricky Ave.\n","Bloomsburg, PA 17815\n"]],["Breezewood Supercharger","https://www.tesla.com/findus/location/supercharger/breezewoodsupercharger",["16417 Lincoln Highway\n","Breezewood, PA 15533\n"]],["Bridesburg, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/bridesburgpasupercharger",["Bridesburg, PA\n"]],["Carlisle, PA Supercharger","https://www.tesla.com/findus/location/supercharger/carlislesupercharger",["1720 Harrisburg Pike\n","Carlisle, PA 17015\n"]],["Cranberry Township, PA Supercharger","https://www.tesla.com/findus/location/supercharger/cranberrytownshipsupercharger",["1308 Freedom Rd\n","Cranberry Township, PA 16066\n"]],["Erie Supercharger","https://www.tesla.com/findus/location/supercharger/eriesupercharger",["2225 Down Drive\n","Erie, PA 16509\n"]],["Falls Creek Supercharger","https://www.tesla.com/findus/location/supercharger/fallscreeksupercharger",["1867 Rich Highway\n","Falls Creek, 15840-9515\n"]],["Franklin Park, PA Supercharger","https://www.tesla.com/findus/location/supercharger/franklinparksupercharger",["2615 Nicholson Road & Wexford Bayne Road\n","Franklin Park, PA 15143-8504\n"]],["Gettysburg, PA Supercharger","https://www.tesla.com/findus/location/supercharger/gettysburgpasupercharger",["30 Camp Letterman Drive\n","Gettysburg, PA 17325\n"]],["Grove City, PA Supercharger","https://www.tesla.com/findus/location/supercharger/grovecitypasupercharger",["1931 Butler Pike\n","Grove City, PA 16127\n"]],["Harrisburg Supercharger","https://www.tesla.com/findus/location/supercharger/harrisburgsupercharger",["3819 Union Deposit Rd\n","Harrisburg, PA 17109\n"]],["Hermitage Supercharger","https://www.tesla.com/findus/location/supercharger/hermitagepasupercharger",["2381 S. Hermitage Road\n","Hermitage, PA 16148\n"]],["King of Prussia, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/kingofprussiasupercharger",["King of Prussia, PA\n"]],["Lancaster, PA Supercharger","https://www.tesla.com/findus/location/supercharger/lancasterpasupercharger",["518 Greenfield Road\n","Lancaster, PA 17601\n"]],["Moosic Supercharger","https://www.tesla.com/findus/location/supercharger/moosicsupercharger",["1035 Shoppes Blvd\n","Moosic, PA 18507-2140\n"]],["North Huntingdon, PA Supercharger","https://www.tesla.com/findus/location/supercharger/northhuntingdonsupercharger",["7821 U.S. 30\n","North Huntingdon, PA 15642-0000\n"]],["Philadelphia, PA - Center City Supercharger","https://www.tesla.com/findus/location/supercharger/philadelphiacentercitysupercharger",["34 South 11th Street\n","Philadelphia, PA 19107\n"]],["Philadelphia, PA - North 20th Street Supercharger","https://www.tesla.com/findus/location/supercharger/philadelphiasupercharger",["420 North 20th Street\n","Philadelphia, PA 19130\n"]],["Pittsburgh, PA Supercharger","https://www.tesla.com/findus/location/supercharger/pitssburghpasupercharger",["5550 Centre Avenue\n","Pittsburgh, PA 15232\n"]],["Plymouth Meeting, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/plymouthmeetingpasupercharger",["Plymouth Meeting, PA\n"]],["Robinson, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/robinsonsupercharger",["Robinson, PA\n"]],["Somerset, PA Supercharger","https://www.tesla.com/findus/location/supercharger/somersetsupercharger",["1030 North Center Avenue\n","Somerset, PA 15501\n"]],["Springfield, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/springfieldpasupercharger",["Springfield, PA\n"]],["Swartzville, PA (coming soon)","https://www.tesla.com/findus/location/supercharger/swartzvillepasupercharger",["Swartzville, PA\n"]],["Tannersville Supercharger","https://www.tesla.com/findus/location/supercharger/tannersvillesupercharger",["1000 Premium Outlets Dr\n","Tannersville, PA 18372\n"]],["Washington, PA Supercharger","https://www.tesla.com/findus/location/supercharger/washingtonpasupercharger",["331 Washington Road\n","Washington, PA 15301\n"]],["Williamsport, PA Supercharger","https://www.tesla.com/findus/location/supercharger/williamsportpasupercharger",["105 Maynard Street\n","Williamsport, PA 17701\n"]],["York, PA Supercharger","https://www.tesla.com/findus/location/supercharger/yorkpasupercharger",["160 Leader Heights Road\n","York, PA 17403\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will complete registration during your delivery appointment. \\n Temporary license plates cannot be issued and all vehicles must be registered upon delivery."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Pittsburgh',
default_zipcode: 17120
}},Rhode_Island:{ 
state_name: 'Rhode Island',
state_abbr: 'RI',
vehicle_incentives: 'State emissions testing exemption',
solar_incentives: 'Solar: Earn $100 per kW off the cash or loan price of solar panels and $80 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: 'Town of Warren provides excise tax exemptions up to $100 upon registration of EV',
local_solar_incentives: 'Powerwall: Earn hundreds of dollars annually by enrolling your Powerwall in ConnectedSolutions',
all_showrooms: [["Warwick","https://www.tesla.com/findus/location/store/warwick",["399 Bald Hill Road\n","Warwick, RI 02886-1634\n"]]],
all_service_centers: [["Warwick","https://www.tesla.com/findus/location/service/warwick",["399 Bald Hill Road\n","Warwick, RI 02886-1634\n"]]],
all_charging_locations: [["East Greenwich, RI Supercharger","https://www.tesla.com/findus/location/supercharger/eastgreenwichsupercharger",["1000 Division St\n","East Greenwich, RI 2818\n"]],["Newport, RI (coming soon)","https://www.tesla.com/findus/location/supercharger/newportrisupercharger",["Newport, RI\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Boston',
default_zipcode: 02903
}},South_Carolina:{
state_name: 'South Carolina',
state_abbr: 'SC',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Columbia, SC Supercharger","https://www.tesla.com/findus/location/supercharger/columbiascsupercharger",["8910 Farrow Road\n","Columbia, SC 29203-9729\n"]],["Florence, SC Supercharger","https://www.tesla.com/findus/location/supercharger/florencescsupercharger",["2701 David H McLeod Blvd\n","Florence, SC 29501-4043\n"]],["Greenville Supercharger","https://www.tesla.com/findus/location/supercharger/greenvillesouthcarolinasupercharger",["108 Carolina Point\n","Greenville, SC 29605\n"]],["Hardeeville, SC Supercharger","https://www.tesla.com/findus/location/supercharger/hardeevillescsupercharger",["16319 Whyte Hardee Blvd\n","Hardeeville, SC 29927\n"]],["Hilton Head, SC Supercharger","https://www.tesla.com/findus/location/supercharger/hiltonheadscsupercharger",["30 Office Park Road\n","Hilton Head Island, SC 29928\n"]],["Myrtle Beach Supercharger","https://www.tesla.com/findus/location/supercharger/myrtlebeachscsupercharger",["2000 Coastal Grand Circle\n","Myrtle Beach, SC 29577-9798\n"]],["North Charleston, SC Supercharger","https://www.tesla.com/findus/location/supercharger/charlestonscsupercharger",["4855 Tanger Outlet Boulevard\n","North Charleston, SC 29418\n"]],["Santee, SC Supercharger","https://www.tesla.com/findus/location/supercharger/santeesupercharger",["114 Bradford Blvd\n","Santee, SC 29142\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'North Carolina',
default_zipcode: 29201
}},South_Dakota:{ 
state_name: 'South Dakota',
state_abbr: 'SD',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations:[["Custer, SD Supercharger","https://www.tesla.com/findus/location/supercharger/custersupercharger",["800 Mount Rushmore Road\n","Custer, SD 57730-2033\n"]],["Mitchell, SD Supercharger","https://www.tesla.com/findus/location/supercharger/mitchellsupercharger",["1305 W. Havens Street\n","Mitchell, SD 57301\n"]],["Murdo, SD Supercharger","https://www.tesla.com/findus/location/supercharger/murdosupercharger",["302 W 5th St.\n","Murdo, SD 57559\n"]],["Oacoma, SD Supercharger","https://www.tesla.com/findus/location/supercharger/oacomacsupercharger",["1000 E Dakota Highway 16\n","Chamberlain, SD 57365-0000\n"]],["Rapid City, SD Supercharger","https://www.tesla.com/findus/location/supercharger/rapidcitysupercharger",["2200 N. Maple Ave\n","Rapid City, SD 57701\n"]],["Sioux Falls, SD Supercharger","https://www.tesla.com/findus/location/supercharger/siouxfallssupercharger",["1900 South Marion Rd\n","Sioux Falls, SD 57106-3636\n"]],["Spearfish, SD Supercharger","https://www.tesla.com/findus/location/supercharger/spearfishsupercharger",["3275 Old Belle Rd\n","Spearfish, SD 57783-6222\n"]],["Wall, SD Supercharger","https://www.tesla.com/findus/location/supercharger/wallsupercharger",["418 Main Street\n","Wall, SD 57790\n"]],["Watertown, SD (coming soon)","https://www.tesla.com/findus/location/supercharger/watertownsdsupercharger",["Watertown, SD\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false,
region:'Minneapolis',
default_zipcode: 57501
}},Tennessee:{ 
state_name: 'Tennessee',
state_abbr: 'TN',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Nashville-Brentwood","https://www.tesla.com/findus/location/store/brentwood",["1641 Westgate Circle\n","Nashville, TN 37027\n"]]],
all_service_centers: [["Memphis","https://www.tesla.com/findus/location/service/memphis",["5851 Advantage Cove\n","Memphis, TN 9086\n"]],["Nashville-Brentwood","https://www.tesla.com/findus/location/service/brentwood",["1641 Westgate Circle\n","Nashville, TN 37027\n"]]],
all_charging_locations: [["Brentwood, TN - Old Hickory Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/brentwoodtnoldhickoryblvdsupercharger",["780 Old Hickory Boulevard\n","Brentwood, TN 37027\n"]],["Bristol, TN Supercharger","https://www.tesla.com/findus/location/supercharger/bristoltnsupercharger",["416 Pinnacle Parkway\n","Bristol, TN\n"]],["Chattanooga, TN Supercharger","https://www.tesla.com/findus/location/supercharger/chattanoogasupercharger",["1001 Airport Road\n","Chattanooga, TN 37421\n"]],["Cookeville, TN Supercharger","https://www.tesla.com/findus/location/supercharger/cookevilletnsupercharger",["377 West Jackson Street\n","Cookeville, TN 38501-5930\n"]],["Dickson, TN Supercharger","https://www.tesla.com/findus/location/supercharger/dicksontnsupercharger",["100 Barzani Blv\n","Dickson, TN 37055-0000\n"]],["Jackson, TN Supercharger","https://www.tesla.com/findus/location/supercharger/jacksontnsupercharger",["56 Casey Jones Lane\n","Jackson, TN 38305-2481\n"]],["Knoxville Supercharger","https://www.tesla.com/findus/location/supercharger/knoxvillesupercharger",["10936 Parkside Dr\n","Knoxville, TN 37934\n"]],["Manchester, TN Supercharger","https://www.tesla.com/findus/location/supercharger/manchestertnsupercharger",["2224 Hillsboro Blvd\n","Manchester, TN 37355\n"]],["Memphis, TN Supercharger","https://www.tesla.com/findus/location/supercharger/memphistnsupercharger",["6073 Park Avenue\n","Memphis, TN 38119-5322\n"]],["Nashville, TN Supercharger","https://www.tesla.com/findus/location/supercharger/nashvilletnsupercharger",["61 East Thompson Lane\n","Nashville, TN 37211\n"]],["Nashville-Brentwood","https://www.tesla.com/findus/location/supercharger/brentwood",["1641 Westgate Circle\n","Nashville, TN 37027\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Nasville',
default_zipcode: 37243
}},Texas:{ 
state_name: 'Texas',
state_abbr: 'TX',
vehicle_incentives: null,
solar_incentives: 'Solar: Select utilities may offer a Solar incentive',
local_vehicle_incentives: 'Austin Energy offers rebates & reduced EV charging rates\nResidents in Austin, Houston, & Dallas areas may be eligible for up to $3,500 rebate to purchase an EV and replace a high emissions vehicle through the AirCheckTexas program',
local_solar_incentives: 'Austin Energy offers residential rebates and performance incentives for eligible solar customers\nCPS Energy (City of San Antonio) offers residential rebates for eligible solar customers\nFarmers Electric Cooperative offers a $500 per system incentive\nAdditional utilities offering rebates: Garland Power & Light, Sunset Valley, Guadalupe Valley Electric',
all_showrooms: [["Austin-Pond Springs","https://www.tesla.com/findus/location/store/austinpondsprings",["12845 Research Boulevard\n","Austin, TX 78759\n"]],["Austin-The Domain","https://www.tesla.com/findus/location/store/thedomain",["11600 Century Oaks Terrace\n","Austin, TX 78758\n"]],["Corpus Christi-South Padre Island Drive","https://www.tesla.com/findus/location/store/corpuschristi",["3605 S Padre Island Dr\n","Corpus Christi, TX 78415\n"]],["Dallas-Cedar Springs Road","https://www.tesla.com/findus/location/store/cedarspringsroad",["6500 Cedar Springs Road Suite 100\n","Dallas, TX 75235\n"]],["Dallas-Northpark Center","https://www.tesla.com/findus/location/store/northparkcenter",["8687 North Central Expwy Suite #1027\n","Dallas, TX 75225\n"]],["Fort Worth-Shops at Clearfork","https://www.tesla.com/findus/location/store/fortworth",["5154 Monahans Avenue\n","Fort Worth, TX 76109\n"]],["Fort Worth-University Drive","https://www.tesla.com/findus/location/store/fortworthuniversityave",["275 University Drive\n","Fort Worth, TX 76107\n"]],["Houston-Houston Galleria","https://www.tesla.com/findus/location/store/houstongalleria",["5135 West Alabama Street Suite 5270\n","Houston, TX 77056\n"]],["Houston-North","https://www.tesla.com/findus/location/store/northhouston",["14820 North Fwy\n","Houston, TX 77090\n"]],["Market Street-The Woodlands","https://www.tesla.com/findus/location/store/marketstreetthewoodlands",["9595 Six Pines Drive\n","The Woodlands, TX 77380\n"]],["Plano-5800 Democracy Drive","https://www.tesla.com/findus/location/store/planodemocracydr",["5800 Democracy Drive\n","Plano, TX 75024\n"]],["Plano-Legacy West","https://www.tesla.com/findus/location/store/planotexas",["7500 Windrose Avenue Space B185\n","Plano, TX 75024\n"]],["San Antonio-Dominion","https://www.tesla.com/findus/location/store/sanantoniodominion",["23011 IH-10 West\n","San Antonio, TX 78257\n"]],["Southlake-Southlake Town Center","https://www.tesla.com/findus/location/store/southlaketowncenter",["257 Grand Avenue\n","Southlake, TX 76092\n"]],["Tyler-South Southwest Loop","https://www.tesla.com/findus/location/store/tylersouthservice",["3408 S SW Loop 323\n","Tyler, TX 75701\n"]]],
all_service_centers:[["Austin-Pond Springs","https://www.tesla.com/findus/location/service/austinpondsprings",["12845 Research Boulevard\n","Austin, TX 78759\n"]],["Corpus Christi-South Padre Island Drive","https://www.tesla.com/findus/location/service/corpuschristi",["3605 S Padre Island Dr\n","Corpus Christi, TX 78415\n"]],["Dallas-Cedar Springs Road","https://www.tesla.com/findus/location/service/cedarspringsroad",["6500 Cedar Springs Road Suite 100\n","Dallas, TX 75235\n"]],["El Paso-Walter Jones","https://www.tesla.com/findus/location/service/elpasowalterjones",["28 Walter Jones, Suite C\n","El Paso, TX 79906\n"]],["Fort Worth-University Drive","https://www.tesla.com/findus/location/service/fortworthuniversityave",["275 University Drive\n","Fort Worth, TX 76107\n"]],["Houston-North","https://www.tesla.com/findus/location/service/northhouston",["14820 North Fwy\n","Houston, TX 77090\n"]],["Houston-Westchase","https://www.tesla.com/findus/location/service/houstonwestchase",["3750 Westchase Drive\n","Houston, TX 77042\n"]],["Plano-5800 Democracy Drive","https://www.tesla.com/findus/location/service/planodemocracydr",["5800 Democracy Drive\n","Plano, TX 75024\n"]],["San Antonio-Dominion","https://www.tesla.com/findus/location/service/sanantoniodominion",["23011 IH-10 West\n","San Antonio, TX 78257\n"]],["Tyler-South Southwest Loop","https://www.tesla.com/findus/location/service/tylersouthservice",["3408 S SW Loop 323\n","Tyler, TX 75701\n"]]],
all_charging_locations:[["Alvarado, TX Supercharger","https://www.tesla.com/findus/location/supercharger/alvaradotxsupercharger",["3313 I-35W\n","Alvarado, TX 76009\n"]],["Amarillo Supercharger","https://www.tesla.com/findus/location/supercharger/amarillosupercharger",["8231 West Amarillo Blvd.\n","Amarillo, TX 79124\n"]],["Arlington Supercharger","https://www.tesla.com/findus/location/supercharger/arlingtonsupercharger",["1200 Ballpark Way\n","Arlington, TX 76011-5110\n"]],["Austin, TX (South) (coming soon)","https://www.tesla.com/findus/location/supercharger/austinsupercharger",["Austin, TX\n"]],["Austin, TX - Downtown (coming soon)","https://www.tesla.com/findus/location/supercharger/austintxdowntownsupercharger",["Austin, TX\n"]],["Austin, TX - Research Boulevard Supercharger","https://www.tesla.com/findus/location/supercharger/austintxresearchsupercharger",["9607 Research Boulevard\n","Austin, TX 78759\n"]],["Austin, TX Supercharger","https://www.tesla.com/findus/location/supercharger/austintxfrontagerdsupercharger",["6406 N. Interstate 35 Frontage Road\n","Austin, TX 78752-0000\n"]],["Beaumont, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/beaumontsupercharger",["Beaumont, TX\n"]],["Boerne, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/boernetxsupercharger",["Boerne, TX\n"]],["Brownsville, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/brownsvillesupercharger",["Brownsville, TX\n"]],["Cedar Park, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/cedarparktxsupercharger",["Cedar Park, TX\n"]],["Channelview Supercharger","https://www.tesla.com/findus/location/supercharger/channelviewsupercharger",["16311 East Fwy\n","Channelview, TX 777530\n"]],["Childress Supercharger","https://www.tesla.com/findus/location/supercharger/childresssupercharger",["1300 Ave F NW Childress, Texas\n","Childress, TX 79201\n"]],["Cisco Supercharger","https://www.tesla.com/findus/location/supercharger/ciscotexassupercharger",["16851 IH 20\n","Cisco, TX 76437\n"]],["College Station, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/collegestationtxsupercharger",["College Station, TX\n"]],["Columbus, TX Supercharger","https://www.tesla.com/findus/location/supercharger/columbussupercharger",["2535 Texas 71\n","Columbus, TX 78934\n"]],["Corsicana Supercharger","https://www.tesla.com/findus/location/supercharger/corsicanatxsupercharger",["2035 Interstate 45 Frontage Rd\n","Corsicana, TX 75109\n"]],["Dallas, TX (Downtown) (coming soon)","https://www.tesla.com/findus/location/supercharger/dallastexassupercharger",["Dallas, TX\n"]],["Dallas, TX - Mesquite (coming soon)","https://www.tesla.com/findus/location/supercharger/dallasmesquitesupercharger",["Dallas, TX\n"]],["Dallas, TX - North Central Expressway Supercharger","https://www.tesla.com/findus/location/supercharger/dallastxsupercharger",["9740 North Central Expressway\n","Dallas, 75231-4302\n"]],["Denison, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/denisonsupercharger",["Denison, TX\n"]],["Denton Supercharger","https://www.tesla.com/findus/location/supercharger/dentonsupercharger",["2700 West University Drive\n","Denton, TX 76201\n"]],["Dilley, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/dilleytxsupercharger",["Dilley, TX\n"]],["El Paso Supercharger","https://www.tesla.com/findus/location/supercharger/elpasosupercharger",["6401 South Desert Boulevard\n","El Paso, TX 79932-8515\n"]],["Falfurrias, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/falfurriassupercharger",["Falfurrias, TX\n"]],["Flatonia Supercharger","https://www.tesla.com/findus/location/supercharger/flatoniasupercharger",["1415 FM 609\n","Flatonia, TX 78941\n"]],["Fort Stockton, TX Supercharger","https://www.tesla.com/findus/location/supercharger/fortstocktonsupercharger",["2571 North Front Street\n","Fort Stockton, TX 79735\n"]],["Fort Worth, TX - Whitmore Street Supercharger","https://www.tesla.com/findus/location/supercharger/fortworthtxsupercharger",["2616 Whitmore Street\n","Fort Worth, TX 76107\n"]],["Fredericksburg, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/fredericksburgsupercharger",["Fredericksburg, TX\n"]],["Giddings, TX Supercharger","https://www.tesla.com/findus/location/supercharger/giddingstxsupercharger",["3025 East Austin Street\n","Giddings, TX 78942\n"]],["Henrietta, TX Supercharger","https://www.tesla.com/findus/location/supercharger/henriettatxsupercharger",["237 Frontage Road\n","Henrietta, TX 76365\n"]],["Houston, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/houstonsupercharger",["Houston, TX\n"]],["Houston, TX - Northwest Freeway Supercharger","https://www.tesla.com/findus/location/supercharger/houstonnorthwestfreewaysupercharger",["14620 Northwest Freeway\n","Houston, TX 77040\n"]],["Houston, TX - Uptown (coming soon)","https://www.tesla.com/findus/location/supercharger/houstonuptownsupercharger",["Houston, TX\n"]],["Houston-North","https://www.tesla.com/findus/location/supercharger/northhouston",["14820 North Fwy\n","Houston, TX 77090\n"]],["Huntsville, TX Supercharger","https://www.tesla.com/findus/location/supercharger/huntsvillesupercharger",["148 Interstate 45\n","Huntsville, TX 77340\n"]],["Italy, TX Supercharger","https://www.tesla.com/findus/location/supercharger/italytexassupercharger",["1021 Dale Evans Drive\n","Italy, TX 76651\n"]],["Junction Supercharger","https://www.tesla.com/findus/location/supercharger/junctionsupercharger",["2415 N Main Street\n","Junction, TX 76849-3104\n"]],["Katy, TX Supercharger","https://www.tesla.com/findus/location/supercharger/katytxsupercharger",["25675 Nelson Way\n","Katy, TX 77494\n"]],["Kingsville Supercharger","https://www.tesla.com/findus/location/supercharger/kingsvillesupercharger",["2400 South US Hwy 77\n","Kingsville, TX 78363-2844\n"]],["Laredo, TX Supercharger","https://www.tesla.com/findus/location/supercharger/laredosupercharger",["110 Calle Del Norte Drive\n","Laredo, TX 78041-9143\n"]],["Leon Springs, TX Supercharger","https://www.tesla.com/findus/location/supercharger/leonspringstxsupercharger",["24165 I-10 #300\n","San Antonio, TX 78357\n"]],["Lindale Supercharger","https://www.tesla.com/findus/location/supercharger/lindalesupercahrger",["17044 I-20\n","Lindale, TX 75771\n"]],["Lubbock, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/lubbocksupercharger",["Lubbock, TX\n"]],["McAllen Supercharger","https://www.tesla.com/findus/location/supercharger/mcallensupercharger",["800 Convention Center Blvd\n","McAllen, 78501-0018\n"]],["Midland Supercharger","https://www.tesla.com/findus/location/supercharger/midlandtexassupercharger",["Love’s Travel Stop\n","3001 Antelope Trail\n","Midland, TX 79706-3525\n"]],["Nacogdoches Supercharger","https://www.tesla.com/findus/location/supercharger/nacogdochessupercharger",["2615 NW Stallings Dr\n","Nacogdoches, TX 75964-2629\n"]],["Ozona Supercharger","https://www.tesla.com/findus/location/supercharger/ozonasupercharger",["1307 Ave. A\n","Ozona, TX 76943\n"]],["Pecos, TX Supercharger","https://www.tesla.com/findus/location/supercharger/pecossupercharger",["100 East Pinehurst Street\n","Pecos, TX 79772\n"]],["Plano, TX Supercharger","https://www.tesla.com/findus/location/supercharger/planotexassupercharger",["7161 Bishop Road\n","Plano, TX 75024\n"]],["Richmond, TX Supercharger","https://www.tesla.com/findus/location/supercharger/richmondtxsupercharger",["20500 Southwest Freeway\n","Richmond, TX 77469\n"]],["San Angelo, TX (coming soon)","https://www.tesla.com/findus/location/supercharger/sanangelosupercharger",["San Angelo, TX\n"]],["San Antonio, TX - Alamo Heights (coming soon)","https://www.tesla.com/findus/location/supercharger/alamoheightssupercharger",["San Antonio, TX\n"]],["San Antonio, TX Supercharger","https://www.tesla.com/findus/location/supercharger/sanantoniosupercharger",["11745 I-10\n","San Antonio, TX 78230\n"]],["San Marcos, TX Supercharger","https://www.tesla.com/findus/location/supercharger/sanmarcossupercharger",["3939 Interstate 35\n","San Marcos, TX 78666\n"]],["Schertz, TX Supercharger","https://www.tesla.com/findus/location/supercharger/schertztxsupercharger",["17460 IH 35N\n","Schertz, TX 78154\n"]],["Shamrock Supercharger","https://www.tesla.com/findus/location/supercharger/shamrocksupercharger",["107 East 12th Street\n","Shamrock, TX 79079\n"]],["South Padre Island, TX Supercharger","https://www.tesla.com/findus/location/supercharger/southpadretxsupercharger",["100 Padre Blvd\n","South Padre Island, TX 78597\n"]],["Southlake, TX Supercharger","https://www.tesla.com/findus/location/supercharger/southlaketxsupercharger",["261 North Carroll Avenue\n","Southlake, TX 76092\n"]],["Sulphur Springs Supercharger","https://www.tesla.com/findus/location/supercharger/sulphurspringstxsupercharger",["300 W Tomlinson Street\n","Sulphur Springs, TX 75482\n"]],["Sweetwater Supercharger","https://www.tesla.com/findus/location/supercharger/sweetwatersupercharger",["300 SE Georgia Ave.\n","Sweetwater, TX 79556\n"]],["Texarkana Supercharger","https://www.tesla.com/findus/location/supercharger/texarkanasupercharger",["3101 Mall Drive\n","Texarkana, TX 75503-2434\n"]],["Three Rivers Supercharger","https://www.tesla.com/findus/location/supercharger/threeriverssupercharger",["2645 S. Hwy 37\n","Three Rivers, TX 78071\n"]],["Van Horn Supercharger","https://www.tesla.com/findus/location/supercharger/vanhornsupercharger",["1921 Frontage Rd\n","Van Horn, TX 79855\n"]],["Victoria Supercharger","https://www.tesla.com/findus/location/supercharger/victoriasupercharger",["3107 S Laurent St.\n","Victoria, TX 77901\n"]],["Waco Supercharger","https://www.tesla.com/findus/location/supercharger/wacotxsupercharger",["701 Interstate 35\n","Bellmead, TX 76705\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Texas',
default_zipcode: 78701
}},Utah:{ 
state_name: 'Utah',
state_abbr: 'UT',
vehicle_incentives: null,
solar_incentives: 'Solar: Up to $1,600 state tax credit',
local_vehicle_incentives: 'Salt Lake City EV owners have access to free metered parking & free public charging',
local_solar_incentives: null,
all_showrooms: [["Salt Lake City-S. State Street","https://www.tesla.com/findus/location/store/saltlakecitysstatestreet",["2312 South State Street\n","South Salt Lake City, UT 84115\n"]]],
all_service_centers: [["Salt Lake City-1038 South 300 West","https://www.tesla.com/findus/location/service/south300west",["1038 South 300 West\n","Salt Lake City, UT 84101\n"]]],
all_charging_locations: [["Beaver, UT Supercharger","https://www.tesla.com/findus/location/supercharger/beaversupercharger",["Littlefield Interchange\n","Beaver, UT 84713\n"]],["Blanding, UT Supercharger","https://www.tesla.com/findus/location/supercharger/blandingsupercharger",["12 N Grayson Parkway\n","Blanding, UT 84511\n"]],["Cedar City, UT (coming soon)","https://www.tesla.com/findus/location/supercharger/cedarcitysupercharger",["Cedar City, UT\n"]],["Draper, UT (coming soon)","https://www.tesla.com/findus/location/supercharger/drapersupercharger",["Draper, UT\n"]],["Green River, UT Supercharger","https://www.tesla.com/findus/location/supercharger/greenriversupercharger",["1765 East Main\n","Green River, UT 84525\n"]],["Moab, UT Supercharger","https://www.tesla.com/findus/location/supercharger/moabsupercharger",["16 South Main Street\n","Moab, UT 84532\n"]],["Nephi, UT Supercharger","https://www.tesla.com/findus/location/supercharger/nephisupercharger",["2100 S Main Street\n","Nephi, UT 84648\n"]],["Ogden, UT (coming soon)","https://www.tesla.com/findus/location/supercharger/ogdenutahsupercharger",["Ogden, UT\n"]],["Park City, UT (coming soon)","https://www.tesla.com/findus/location/supercharger/parkcityutahsupercharger",["Park City, UT\n"]],["Price Supercharger","https://www.tesla.com/findus/location/supercharger/pricesupercharger",["925 Westwood Blvd.\n","Price, UT 84501\n"]],["Provo, UT (coming soon)","https://www.tesla.com/findus/location/supercharger/provosupercharger",["Provo, UT\n"]],["Richfield, UT Supercharger","https://www.tesla.com/findus/location/supercharger/richfieldsupercharger",["20 W 1400 N\n","Richfield, UT 84701\n"]],["Salt Lake City-S. State Street","https://www.tesla.com/findus/location/supercharger/saltlakecitysstatestreet",["2312 South State Street\n","South Salt Lake City, UT 84115\n"]],["St. George Supercharger","https://www.tesla.com/findus/location/supercharger/stgeorgeutsupercharger",["1091 N Bluff St\n","St. George, UT 84770\n"]],["Tooele Supercharger","https://www.tesla.com/findus/location/supercharger/tooeleutsupercharger",["1568 East Saddleback Blvd.\n","Tooele, UT 84074\n"]],["Tremonton Supercharger","https://www.tesla.com/findus/location/supercharger/tremontonsupercharger",["2145 W Main Street\n","Tremonton, UT 84337\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Salt Lake City',
default_zipcode: 84114
}},Vermont:{ 
state_name: 'Vermont',
state_abbr: 'VT',
vehicle_incentives: 'Depending on income level, up to $5,000 rebate for purchase or lease of a new vehicle with a base price under $40,000',
solar_incentives: 'Solar: $0.02 per kWh production incentive for 10 years',
local_vehicle_incentives: 'Green Mountain Power offers a $1,500 rebate towards the purchase of an electric vehicle with a base price under $60,000',
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Berlin, VT Supercharger","https://www.tesla.com/findus/location/supercharger/berlinvtsupercharger",["213 Paine Turnpike N\n","Berlin, VT 5602\n"]],["Brattleboro Supercharger","https://www.tesla.com/findus/location/supercharger/brattleborovtsupercharger",["499 Canal Street\n","Brattleboro, VT 5301\n"]],["Lyndon, VT (coming soon)","https://www.tesla.com/findus/location/supercharger/lyndonsupercharger",["Lyndon, VT\n"]],["Rutland, VT Supercharger","https://www.tesla.com/findus/location/supercharger/rutlandvtsupercharger",["194 Woodstock Ave\n","Rutland, VT 05701\n"]],["South Burlington Supercharger","https://www.tesla.com/findus/location/supercharger/southburlingtonsupercharger",["222 Dorset Street\n","South Burlington, VT 5043\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'NY Metro',
default_zipcode: 05633
}},Virginia:{ 
state_name: 'Virginia',
state_abbr: 'VA',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Virginia Dominion Power offers reduced electricity rates based on time-of-use for EV owners',
local_solar_incentives: null,
all_showrooms: [["McLean-Tysons Corner","https://www.tesla.com/findus/location/store/tysonscorner",["1961 Chain Bridge Rd\n","McLean, VA 22102\n"]],["Richmond-Glen Allen","https://www.tesla.com/findus/location/store/richmondglenallen",["9850 W. Broad Street\n","Glen Allen, VA 23060\n"]],["Tysons Corner-Tyco Road","https://www.tesla.com/findus/location/store/tysonscornertycoroad",["8500 Tyco Road\n","Vienna, VA 22182\n"]]],
all_service_centers: [["Richmond-Glen Allen","https://www.tesla.com/findus/location/service/richmondglenallen",["9850 W. Broad Street\n","Glen Allen, VA 23060\n"]],["Sterling-22400 Davis Dr","https://www.tesla.com/findus/location/service/sterling22400davis",["22400 Davis Dr\n","Sterling, VA 20164\n"]],["Tysons Corner-Tyco Road","https://www.tesla.com/findus/location/service/tysonscornertycoroad",["8500 Tyco Road\n","Vienna, VA 22182\n"]],["Virginia Beach - Central Drive","https://www.tesla.com/findus/location/service/virginiabeachcentraldrive",["573 Central Drive\n","Virginia Beach, VA 23454\n"]]],
all_charging_locations: [["Arlington, VA Supercharger","https://www.tesla.com/findus/location/supercharger/arlingtonvasupercharger",["2800 Clarendon Boulevard\n","Arlington, VA 22201\n"]],["Arlington, VA Supercharger","https://www.tesla.com/findus/location/supercharger/arlingtonvasupercharger",["2800 Clarendon Boulevard\n","Arlington, VA 22201\n"]],["Ashburn, VA Supercharger","https://www.tesla.com/findus/location/supercharger/ashburnsupercharger",["43300 Southern Walk Plaza\n","Ashburn, VA 20148\n"]],["Chantilly, VA Supercharger","https://www.tesla.com/findus/location/supercharger/chantillysupercharger",["25451 Lizzio Center Drive\n","South Riding, VA 20152\n"]],["Charlottesville, VA Supercharger","https://www.tesla.com/findus/location/supercharger/charlottesvillesupercharger",["2100 Hydraulic Road\n","Charlottesville, Virgina 22901-0000\n"]],["Chester Supercharger","https://www.tesla.com/findus/location/supercharger/chestervasupercharger",["11701 Jefferson Davis Highway\n","Chester, VA 23831\n"]],["Fairfax, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/fairfaxsupercharger",["Fairfax, VA\n"]],["Falls Church, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/fallschurchsupercharger",["Falls Church, VA\n"]],["Farmville, VA - S Main Street Supercharger","https://www.tesla.com/findus/location/supercharger/farmvillevasmainstreetsupercharger",["2016 S Main Street\n","Farmville, VA 23901\n"]],["Fredericksburg, VA Supercharger","https://www.tesla.com/findus/location/supercharger/fredericksburgvasupercharger",["10060 Jefferson Davis Highway\n","Fredericksburg, VA 22407\n"]],["Glen Allen, VA Supercharger","https://www.tesla.com/findus/location/supercharger/glenallensupercharger",["9950 Brook Rd\n","Glen Allen, VA 23059\n"]],["Haymarket, VA","https://www.tesla.com/findus/location/supercharger/haymarketvirginiasupercharger",["15315 Washington Street\n","Haymarket, VA 20169\n"]],["King George, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/kinggeorgesupercharger",["King George, VA\n"]],["Leesburg, VA Supercharger","https://www.tesla.com/findus/location/supercharger/leesburgvasupercharger",["1602 Village Market Boulevard, Southeast\n","Leesburg, VA 20737\n"]],["Lexington Supercharger","https://www.tesla.com/findus/location/supercharger/lexingtonvasupercharger",["880 N Lee Hwy\n","Lexington, VA 24450\n"]],["Lynchburg, VA Supercharger","https://www.tesla.com/findus/location/supercharger/lynchburgvasupercharger",["14480 Wards Road\n","Lynchburg, VA 24501\n"]],["Madison, VA Supercharger","https://www.tesla.com/findus/location/supercharger/madisonvasupercharger",["2902 South Seminole Trail\n","Madison, VA 22707\n"]],["Mt. Jackson, VA Supercharger","https://www.tesla.com/findus/location/supercharger/mtjacksonvasupercharger",["227 Conicville Rd\n","Mt. Jackson, VA 22842\n"]],["Newport News, VA","https://www.tesla.com/findus/location/supercharger/newportnewsvasupercharger",["12300 Jefferson Avenue\n","Newport News, VA 23602\n"]],["Norfolk Supercharger","https://www.tesla.com/findus/location/supercharger/norfolksupercharger",["5900 E Virginia Beach Blvd\n","Norfolk, VA 23502\n"]],["Reston, VA Supercharger","https://www.tesla.com/findus/location/supercharger/restonsupercharger",["1886 Metro Center Drive\n","Reston, VA 20190\n"]],["Richmond, VA Supercharger","https://www.tesla.com/findus/location/supercharger/richmondvasupercharger",["4441 S Laburnum Ave\n","Richmond, VA 23231-0000\n"]],["Salem, VA Supercharger","https://www.tesla.com/findus/location/supercharger/salemvasupercharger",["1340 West Main St\n","Salem, VA 24153\n"]],["South Hill, VA Supercharger","https://www.tesla.com/findus/location/supercharger/southhillsupercharger",["1791 North Mecklenburg Avenue\n","South Hill, VA 23970\n"]],["Springfield, VA Supercharger","https://www.tesla.com/findus/location/supercharger/springfieldvasupercharger",["500 Springfield Mall\n","Springfield, VA 22150\n"]],["Staunton, VA Supercharger","https://www.tesla.com/findus/location/supercharger/stauntonvasupercharger",["1250 Richmond Avenue\n","Staunton, VA 24402\n"]],["Strasburg Supercharger","https://www.tesla.com/findus/location/supercharger/strasburgsupercharger",["119 Hite Lane\n","Strasburg, VA 22657\n"]],["Tysons, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/tysonssupercharger",["Tysons, VA\n"]],["Vienna, VA Supercharger","https://www.tesla.com/findus/location/supercharger/viennavasupercharger",["465 Maple Avenue\n","Vienna, VA 22180\n"]],["Virginia Beach, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/virginiabeachsupercharger",["Virginia Beach, VA\n"]],["Williamsburg, VA (coming soon)","https://www.tesla.com/findus/location/supercharger/williamsburgsupercharger",["Williamsburg, VA\n"]],["Woodbridge Supercharger","https://www.tesla.com/findus/location/supercharger/woodbridgevasupercharger",["2700 Potomac Mills Circle\n","Woodbridge, VA 22192\n"]],["Wytheville Supercharger","https://www.tesla.com/findus/location/supercharger/wythevillesupercharger",["165 Malin Drive\n","Wytheville, VA 24382\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Philadelphia',
default_zipcode: 23219
}},Washington:{
state_name: 'Washington',
state_abbr: 'WA',
vehicle_incentives: 'A retail sales tax reduction is available on the purchase or lease of a new vehicle.',
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["Bellevue-20th Street","https://www.tesla.com/findus/location/store/bellevue20street",["14408 NE 20th Street\n","Bellevue, WA 98007\n"]],["Bellevue-Bellevue Square","https://www.tesla.com/findus/location/store/bellevuesquare",["223 Bellevue Square Space 104\n","Bellevue, WA 98004\n"]],["Seattle-Lynnwood","https://www.tesla.com/findus/location/store/seattlelynnwood",["17731 Highway 99\n","Lynnwood, WA 98037\n"]],["Seattle-Renton","https://www.tesla.com/findus/location/store/seattlerenton",["700 S Grady Way\n","Renton, WA 98057-3238\n"]],["Seattle-Westlake","https://www.tesla.com/findus/location/store/seattlewestlake",["435 Westlake Avenue N\n","Seattle, WA 98109\n"]],["University Village","https://www.tesla.com/findus/location/store/universityvillage",["2627 NE 46th Street\n","Seattle, WA 98105\n"]]],
all_service_centers: [["Bellevue-20th Street","https://www.tesla.com/findus/location/service/bellevue20street",["14408 NE 20th Street\n","Bellevue, WA 98007\n"]],["Seattle-Lynnwood","https://www.tesla.com/findus/location/service/seattlelynnwood",["17731 Highway 99\n","Lynnwood, WA 98037\n"]],["Seattle-Renton","https://www.tesla.com/findus/location/service/seattlerenton",["700 S Grady Way\n","Renton, WA 98057-3238\n"]],["Spokane-Springfield Ave","https://www.tesla.com/findus/location/service/spokaneservice",["3304 E Springfield Ave\n","Spokane, WA 99202\n"]]],
all_charging_locations:[["Aberdeen Supercharger","https://www.tesla.com/findus/location/supercharger/aberdeenwashingtonsupercharger",["416 Wishkah Street\n","Aberdeen, WA 98520-4133\n"]],["Arlington, WA Supercharger","https://www.tesla.com/findus/location/supercharger/arlingtonwasupercharger",["3438 Stoluckquamish Lane\n","Arlington, WA\n"]],["Auburn, WA Supercharger","https://www.tesla.com/findus/location/supercharger/auburnwasupercharger",["1101 Outlet Collection Way\n","Auburn, WA 98001\n"]],["Bellevue, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/bellevuewashingtonsupercharger",["Bellevue, WA\n"]],["Blaine, WA Supercharger","https://www.tesla.com/findus/location/supercharger/blainewasupercharger",["8115 Birch Bay Square\n","Blaine, WA 98230\n"]],["Bothell, WA Supercharger","https://www.tesla.com/findus/location/supercharger/bothellwasupercharger",["19128 112th Avenue NE\n","Bothell, WA 98011\n"]],["Burlington, WA Supercharger","https://www.tesla.com/findus/location/supercharger/burlingtonsupercharger",["9384 Old Highway 99 North\n","Burlington, WA 98233\n"]],["Centralia Supercharger","https://www.tesla.com/findus/location/supercharger/centraliasupercharger",["1200 Lum Rd\n","Centralia, WA 98531\n"]],["Chelan, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/chelanwasupercharger",["Chelan, WA\n"]],["Cle Elum, WA Supercharger","https://www.tesla.com/findus/location/supercharger/cleelumwasupercharger",["811 WA-970\n","Cle Elum, WA 98922\n"]],["Ellensburg Supercharger","https://www.tesla.com/findus/location/supercharger/ellensburgwasupercharger",["1620 Canyon Rd\n","Ellensburg, WA 98926\n"]],["Enumclaw, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/enumclawwashingtonsupercharger",["Enumclaw, WA\n"]],["Forks, WA Supercharger","https://www.tesla.com/findus/location/supercharger/forkswasupercharger",["100 Fern Hill Road\n","Forks, WA 98331\n"]],["Issaquah, WA Supercharger","https://www.tesla.com/findus/location/supercharger/issaquahwasupercharger",["6100 East Lake Sammamish Parkway SE\n","Issaquah, WA 98029\n"]],["Kelso, WA Supercharger","https://www.tesla.com/findus/location/supercharger/kelsowasupercharger",["207 Three Rivers Drive\n","Kelso, WA 98626\n"]],["Kennewick Supercharger","https://www.tesla.com/findus/location/supercharger/kennewicksupercharger",["2811 West 10th Ave\n","Kennewick, WA 99336\n"]],["Kirkland, WA - Totem Lake (coming soon)","https://www.tesla.com/findus/location/supercharger/kirklandtotemlakesupercharger",["Kirkland, WA\n"]],["Lacey, WA Supercharger","https://www.tesla.com/findus/location/supercharger/laceywasupercharger",["665 Sleater Kinney Road SE\n","Lacey, WA 98503\n"]],["Leavenworth, WA Supercharger","https://www.tesla.com/findus/location/supercharger/leavenworthwasupercharger",["1329 US-2\n","Leavenworth, WA 98826\n"]],["Lynnwood, WA Supercharger","https://www.tesla.com/findus/location/supercharger/lynnwoodsupercharger",["2902 164th Street SW\n","Lynnwood, WA 98087\n"]],["Monroe, WA Supercharger","https://www.tesla.com/findus/location/supercharger/monroewashingtonsupercharger",["18805 US-2\n","Monroe, WA\n"]],["Moses Lake, WA Supercharger","https://www.tesla.com/findus/location/supercharger/moseslakesupercharger",["2709 West Broadway Avenue\n","Moses Lake, WA 98837\n"]],["North Bend, WA Supercharger","https://www.tesla.com/findus/location/supercharger/northbendsupercharger",["46600 SE North Bend Way\n","North Bend, WA 98045\n"]],["Okanogan, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/okanogansupercharger",["Okanogan, WA\n"]],["Olympia, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/olympiasupercharger",["Olympia, WA\n"]],["Ritzville Supercharger","https://www.tesla.com/findus/location/supercharger/ritzvillevasupercharger",["105 W Galbreath Way\n","Ritzville, WA 99169\n"]],["Seattle, WA - Northgate (coming soon)","https://www.tesla.com/findus/location/supercharger/seattlewashingtonnorthgatesupercharger",["Seattle, WA\n"]],["Seattle, WA - Union Street Supercharger","https://www.tesla.com/findus/location/supercharger/seattlewaunionsupercharger",["601 Union Street\n","Seattle, WA 98101\n"]],["Seattle, WA - University Village (coming soon)","https://www.tesla.com/findus/location/supercharger/seattlewashingtonuniversitysupercharger",["Seattle, WA\n"]],["Sequim Supercharger","https://www.tesla.com/findus/location/supercharger/sequimsupercharger",["1441 E Washington Street\n","Sequim, WA 98382-3503\n"]],["Spokane, WA Supercharger","https://www.tesla.com/findus/location/supercharger/spokanewashingsupercharger",["10506 West Aero Road\n","Spokane, WA 99224\n"]],["Tacoma, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/tacomawashingtonsupercharger",["Tacoma, WA\n"]],["Tumwater, WA Supercharger","https://www.tesla.com/findus/location/supercharger/tumwaterwasupercharger",["2430 93rd Avenue Southwest\n","Tumwater, WA 98512\n"]],["Vancouver, WA - NE Vancouver Mall Drive Supercharger","https://www.tesla.com/findus/location/supercharger/vancouverwanevancouvermalldrivesupercharger",["8700 NE Vancouver Mall Drive\n","Vancouver, WA 98662\n"]],["Vancouver, WA Supercharger","https://www.tesla.com/findus/location/supercharger/vancouverwasupercharger",["800 NE Tenney Road\n","Vancouver, WA 98685-2832\n"]],["Yakima, WA (coming soon)","https://www.tesla.com/findus/location/supercharger/yakimawashingtonsupercharger",["Yakima, WA\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75, 
state_taxes: {
model_tax: 0,
destination_fee: 0,
registration_amt: 26.62,
order_fee: 0,
documentation_fee: 7.31,
state_sales_tax: 0,
total_fees_including_license_fees: 546,
non_cash_credits: 1500,
vehicle_price: 0},
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: true, 
region: 'Portland',
default_zipcode: 98504
}},West_Virginia:{
state_name: 'West Virginia',
state_abbr: 'WV',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Charleston, WV Supercharger","https://www.tesla.com/findus/location/supercharger/charlestonwvsupercharger",["2 Kanawha Boulevard E\n","Charleston, WV 25301\n"]],["Huntington, WV Supercharger","https://www.tesla.com/findus/location/supercharger/huntingtonwvsupercharger",["432 18th Street West\n","Huntington, WV 25704-1509\n"]],["Martinsburg, WV Supercharger","https://www.tesla.com/findus/location/supercharger/martinsburgsupercharger",["1465 Edwin Miller Blvd\n","Martinsburg, WV 25401\n"]],["Morgantown Supercharger","https://www.tesla.com/findus/location/supercharger/morgantownsupercharger",["21 Asturias Lane\n","Morgantown, WV 26508-1324\n"]],["Mt. Hope, WV Supercharger","https://www.tesla.com/findus/location/supercharger/mthopewvsupercharger",["5481 Robert C. Byrd Drive\n","Mt. Hope, WV 25880\n"]],["Parkersburg, WV Supercharger","https://www.tesla.com/findus/location/supercharger/parkersburgwvsupercharger",["1102 7th Street\n","Parkersburg, WV 26101\n"]],["Triadelphia, WV Supercharger","https://www.tesla.com/findus/location/supercharger/triadelphiasupercharger",["35 Bob Wise Drive\n","Triadelphia, WV 26059\n"]],["Weston, WV Supercharger","https://www.tesla.com/findus/location/supercharger/westonsupercharger",["39 Berlin Road\n","Weston, WV 26452-8367\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Ohio',
default_zipcode: 25271
}},Wisconsin:{ 
state_name: 'Wisconsin',
state_abbr: 'WI',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: 'Alliant Energy is offering a $500 rebate for EV home charging installation',
local_solar_incentives: null,
all_showrooms: [["Milwaukee","https://www.tesla.com/findus/location/store/milwaukee",["12011 W Silver Spring Dr\n","Milwaukee, WI 53225-2913\n"]]],
all_service_centers: [["Milwaukee","https://www.tesla.com/findus/location/service/milwaukee",["12011 W Silver Spring Dr\n","Milwaukee, WI 53225-2913\n"]]],
all_charging_locations: [["Eau Claire, WI Supercharger","https://www.tesla.com/findus/location/supercharger/eauclairesupercharger",["4601 Keystone Crossing\n","Eau Claire, WI 54701\n"]],["Howard, WI Supercharger","https://www.tesla.com/findus/location/supercharger/howardsupercharger",["2015 Shawano Avenue\n","Howard, Wisconsin 54303-2606\n"]],["La Crosse Supercharger","https://www.tesla.com/findus/location/supercharger/lacrossesupercharger",["2845 Midwest Dr\n","Onalaska, WI 54650\n"]],["Lake Geneva, WI Supercharger","https://www.tesla.com/findus/location/supercharger/lakegenevawisupercharger",["7036 Grand Geneva Way\n","Lake Geneva, WI 53147\n"]],["Madison, WI (West) (coming soon)","https://www.tesla.com/findus/location/supercharger/westmadisonsupercharger",["Madison, WI\n"]],["Madison, WI - E. Washington Ave. Supercharger","https://www.tesla.com/findus/location/supercharger/madisonwisupercharger",["3801 E. Washington Ave\n","Madison, WI 53704\n"]],["Madison, WI – East Towne Mall Supercharger","https://www.tesla.com/findus/location/supercharger/madisonsupercharger",["89 East Towne Mall\n","Madison, WI 53704\n"]],["Mauston, WI Supercharger","https://www.tesla.com/findus/location/supercharger/maustonsupercharger",["640 McEvoy St\n","Mauston, WI 53948\n"]],["Milwaukee, WI (coming soon)","https://www.tesla.com/findus/location/supercharger/milwaukeesupercharger",["Milwaukee, WI\n"]],["Oak Creek, WI Supercharger","https://www.tesla.com/findus/location/supercharger/oakcreekwisupercharger",["171 West Town Square Way\n","Oak Creek, WI 53154-6801\n"]],["Oshkosh, WI Supercharger","https://www.tesla.com/findus/location/supercharger/oshkoshsupercharger",["2415 Westowne Avenue\n","Oshkosh, WI 54904-7776\n"]],["Pleasant Prairie, WI Supercharger","https://www.tesla.com/findus/location/supercharger/pleasantprairiesupercharger",["11211 120th Ave\n","Pleasant Prairie, WI 53158\n"]],["Sheboygan Supercharger","https://www.tesla.com/findus/location/supercharger/sheboygansupercharger",["595 S Taylor Drive\n","Sheboygan, WI 53081\n"]],["Sturgeon Bay, WI (coming soon)","https://www.tesla.com/findus/location/supercharger/sturgeonbaysupercharger",["Sturgeon Bay, WI\n"]],["Waukesha, WI (coming soon)","https://www.tesla.com/findus/location/supercharger/waukeshawisupercharger",["Waukesha, WI\n"]],["Wausau, WI - North Mountain Rd Supercharger","https://www.tesla.com/findus/location/supercharger/wausaunorthmountainrdsupercharger",["2101 North Mountain Rd\n","Wausau, WI 54401-8117\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: false,
financing_available: false, 
region: 'Minneapolis',
default_zipcode: 53703
}},Wyoming:{ 
state_name: 'Wyoming',
state_abbr: 'WY',
vehicle_incentives: null,
solar_incentives: null,
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: null,
all_service_centers: null,
all_charging_locations: [["Cheyenne, WY Supercharger","https://www.tesla.com/findus/location/supercharger/cheyennesupercharger",["1400 Dell Range Blvd.\n","Cheyenne, WY 82009\n"]],["Cody, WY (coming soon)","https://www.tesla.com/findus/location/supercharger/codywysupercharger",["Cody, WY\n"]],["Evanston Supercharger","https://www.tesla.com/findus/location/supercharger/evanstonsupercharger",["101 Wasatch Rd\n","Evanston, WY 82930-3094\n"]],["Evansville, WY Supercharger","https://www.tesla.com/findus/location/supercharger/evansvillewysupercharger",["6985 Nugget Street\n","Evansville, WY 82636\n"]],["Gillette Supercharger","https://www.tesla.com/findus/location/supercharger/gillettesupercharger",["211 Decker Court\n","Gillette, WY 82716\n"]],["Jackson Supercharger","https://www.tesla.com/findus/location/supercharger/jacksonwysupercharger",["1155 US-89\n","Jackson, WY 83001\n"]],["Laramie, WY Supercharger","https://www.tesla.com/findus/location/supercharger/laramiesupercharger",["1673 Centennial Drive\n","Laramie, WY 82070-8417\n"]],["Lusk, WY Supercharger","https://www.tesla.com/findus/location/supercharger/lusksupercharger",["730 S Main St\n","Lusk, WY 82225\n"]],["Rawlins Supercharger","https://www.tesla.com/findus/location/supercharger/rawlinssupercharger",["2370 E Cedar St.\n","Rawlins, WY 82301-6026\n"]],["Rock Springs Supercharger","https://www.tesla.com/findus/location/supercharger/rockspringssupercharger",["2441 Foothill Blvd\n","Rock Springs, 82901-5659\n"]],["Sheridan Supercharger","https://www.tesla.com/findus/location/supercharger/sheridansupercharger",["612 North Main Street\n","Sheridan, WY 82801\n"]],["Wheatland, WY Supercharger","https://www.tesla.com/findus/location/supercharger/wheatlandsupercharger",["1556 Sherard Road\n","Wheatland, WY 82201-8927\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail you a self-registration packet. \\n Tesla will mail the documents you will need to complete registration. Any registration fees will be calculated and collected at the time of registration. \\n Note: If you lease from Tesla in one of these states, Tesla will complete the registration and titling."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Denver',
default_zipcode: 82002
}},District_of_Columbia:{
state_name: 'District of Columbia',
state_abbr: 'DC',
vehicle_incentives: 'Excise tax exempt\nReduced vehicle registration fees\nTax credit for 50% of costs of home charging installation, up to $1,000',
solar_incentives: 'Solar: Earn $930 per kW off the cash or loan price of solar panels and $780 per kW off the cash or loan price of Solar Roof by trading your Solar Renewable Energy Credits (SREC)',
local_vehicle_incentives: null,
local_solar_incentives: null,
all_showrooms: [["CityCenterDC","https://www.tesla.com/findus/location/store/dccitycenter",["909 H Street NW Suite 601\n","Washington DC, DC 20001\n"]]],
all_service_centers: null,
all_charging_locations: [["Columbia Heights, DC (coming soon)","https://www.tesla.com/findus/location/supercharger/columbiaheightsdcsupercharger",["Columbia Heights,\n"]],["Washington NE, DC (coming soon)","https://www.tesla.com/findus/location/supercharger/washingtondcnesupercharger",["Washington NE,\n"]],["Washington SE, DC (coming soon)","https://www.tesla.com/findus/location/supercharger/washingtondcsesupercharger",["Washington SE,\n"]],["Washington, DC Supercharger","https://www.tesla.com/findus/location/supercharger/washingtonsupercharger",["1855 Wisconsin Ave NW\n","Washington, DC 20007\n"]]],
paymentObj:{
docFee: 1300, // must be added to purchase price
configuredPriceWithDocFee: null, // purchase price + docFee
orderPymt: 100,
nonCashCredits: [{amt:1500, name:"CA Clean Fuel Rebate", source:""}],
tradeinValue: 0,
tradeInPayoff: 0,
tradeInEquity: 0,
taxRate: 9.75,
stateTotalFees: 500, // TODO: must acquire formula from finance team!
stateSalesTax: null, // modelTax + orderFeeTax + stateDestinationFee + stateDocumentationFee
modelTax: null, // 4875 for $50k vehicle - taxRate/100 * vehiclePurchasePrice
orderFeeTax: null, // 9.75 - taxRate/100 * orderPymt
stateDestinationFee: 109.69,
stateDocumentationFee: 7.31,
finance: {
loanTerm: 72,
LoanApr: 2.49,
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null
},
lease: {
leaseTerm: 36,
annualMiles: 10000,
leaseInterestRate: 4.85,
upfrontTaxAmt: 555, // capitalized cost reduction + acquisitionFee * taxRate/100
monthlyPymt: null,
cashDownPymt: null,
dueAtDelivery: null,
aquisitionFee: 695, // TODO: doesn't change?
moneyFactor: 0.002019, // Interest rate (%) / 24
residualValue: 50000 // TODO: get from finance
}
},
vehicle_order:{tradein_value: 0,
tradein_payoff: 0,
tradein_equity: 0,
order_pymt: 100,
destination_and_doc_fee: 1300,
state_tax_rate: 9.75,
state_taxes: "Taxes quoted by local agency and paid by buyer during registration", 
leasing:{
upfront_tax_amt: 0,
lease_amt_due_for_delivery: 0,
acquisition_fee: 67.76,
lease_tax_rate: 3.25,
capitalized_cost_reduction: 555,
acquisition_fee_tax: 22.59,
money_factor: 0.002019,
residual_value: 0.64,
lease_interest_rate: 4.85,
lease_monthly_pymt: 0,
lease_cash_down_payment: 0,
},
financing:{
loan_amt_due_for_delivery: 0,
loan_apr: 2.49,
loan_monthly_pymt: 0,
loan_cash_down_payment: 0,
disposition_fee: 395, 
max_financed_amt: 0
},
registration: {source:"https://www.tesla.com/support/registration", details:"Depending on your state, Tesla will either handle titling and registration for you, or process and mail you the documents you will need to complete registration at your state’s motor vehicle department. \\n Most states provide Tesla approximately 30 business days to finalize registration or process your self-registration paperwork. Depending on your state, temporary license plates may be provided, so you can drive after taking delivery. \\n Tesla will start processing your documents once you have taken delivery and all payments have cleared. If any additional information is needed, Tesla will contact you to ensure your vehicle is registered as quickly as possible.", next_steps: "Tesla will mail your registration and the state DMV will mail your title. \\n Tesla will mail your plates and registration once processing is complete."},
solar_panel_subscription: false,
leasing_available: true,
financing_available: false, 
region: 'Philadelphia',
default_zipcode: 20004
}}}
