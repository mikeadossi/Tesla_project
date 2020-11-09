const puppeteer = require('puppeteer');
require('dotenv').config({ path: __dirname + '/.env' }); 


let scrape = async () => {


    let browser;
    try {

        browser = await puppeteer.launch({
            headless: true, args: [
                '--window-size=1920,1080',
            ]
        });

        const page = await browser.newPage();
        page.setViewport({ width: 1920, height: 1080 });

        const allAreaCodes = {  
            205 : 'AL',
            251 : 'AL',
            256 : 'AL',
            334 : 'AL',
            938 : 'AL',
            907 : 'AK',
            480 : 'AZ', 
            520 : 'AZ', 
            602 : 'AZ', 
            623 : 'AZ', 
            928 : 'AZ',
            479 : 'AR',
            501 : 'AR',
            870 : 'AR',
            209 : 'CA',
            213 : 'CA',
            279 : 'CA',
            310 : 'CA',
            323 : 'CA',
            341 : 'CA',
            408 : 'CA',
            415 : 'CA',
            424 : 'CA',
            442 : 'CA',
            510 : 'CA',
            530 : 'CA',
            559 : 'CA',
            562 : 'CA',
            619 : 'CA',
            626 : 'CA',
            628 : 'CA',
            650 : 'CA',
            657 : 'CA',
            661 : 'CA',
            669 : 'CA',
            707 : 'CA',
            714 : 'CA',
            747 : 'CA',
            760 : 'CA',
            805 : 'CA',
            818 : 'CA',
            820 : 'CA',
            831 : 'CA',
            840 : 'CA',
            858 : 'CA',
            909 : 'CA',
            916 : 'CA',
            925 : 'CA',
            949 : 'CA',
            951 : 'CA',
            303 : 'CO',
            719 : 'CO',
            720 : 'CO',
            970 : 'CO',
            203 : 'CT',
            475 : 'CT',
            860 : 'CT',
            959 : 'CT',
            302 : 'DE',
            202 : 'DC',
            239 : 'FL',
            305 : 'FL',
            321 : 'FL',
            352 : 'FL',
            386 : 'FL',
            407 : 'FL',
            448 : 'FL',
            561 : 'FL',
            689 : 'FL',
            727 : 'FL',
            754 : 'FL',
            772 : 'FL',
            786 : 'FL',
            813 : 'FL',
            850 : 'FL',
            863 : 'FL',
            904 : 'FL',
            941 : 'FL',
            954 : 'FL',
            229 : 'GA',
            404 : 'GA',
            470 : 'GA',
            478 : 'GA',
            678 : 'GA',
            706 : 'GA',
            762 : 'GA',
            770 : 'GA',
            912 : 'GA',
            808 : 'HI',
            208 : 'ID',
            986 : 'ID',
            217 : 'IL',
            224 : 'IL',
            309 : 'IL',
            312 : 'IL',
            331 : 'IL',
            447 : 'IL',
            618 : 'IL',
            630 : 'IL',
            708 : 'IL',
            773 : 'IL',
            779 : 'IL',
            815 : 'IL',
            847 : 'IL',
            872 : 'IL',
            219 : 'IN',
            260 : 'IN',
            317 : 'IN',
            463 : 'IN',
            574 : 'IN',
            765 : 'IN',
            812 : 'IN',
            930 : 'IN',
            319 : 'IA',
            515 : 'IA',
            563 : 'IA',
            641 : 'IA',
            712 : 'IA',
            316 : 'KS',
            620 : 'KS',
            785 : 'KS',
            913 : 'KS',
            270 : 'KY',
            364 : 'KY',
            502 : 'KY',
            606 : 'KY',
            859 : 'KY',
            225 : 'LA',
            318 : 'LA',
            337 : 'LA',
            504 : 'LA',
            985 : 'LA',
            207 : 'ME',
            240 : 'MD',
            301 : 'MD',
            410 : 'MD',
            443 : 'MD',
            667 : 'MD',
            339 : 'MA',
            351 : 'MA',
            413 : 'MA',
            508 : 'MA',
            617 : 'MA',
            774 : 'MA',
            781 : 'MA',
            857 : 'MA',
            978 : 'MA',
            231 : 'MI',
            248 : 'MI',
            269 : 'MI',
            313 : 'MI',
            517 : 'MI',
            586 : 'MI',
            616 : 'MI',
            734 : 'MI',
            810 : 'MI',
            906 : 'MI',
            947 : 'MI',
            989 : 'MI',
            218 : 'MN',
            320 : 'MN',
            507 : 'MN',
            612 : 'MN',
            651 : 'MN',
            763 : 'MN',
            952 : 'MN',
            228 : 'MS',
            601 : 'MS',
            662 : 'MS',
            769 : 'MS',
            314 : 'MO',
            417 : 'MO',
            573 : 'MO',
            636 : 'MO',
            660 : 'MO',
            816 : 'MO',
            406 : 'MT',
            308 : 'NE',
            402 : 'NE',
            531 : 'NE',
            702 : 'NV',
            725 : 'NV',
            775 : 'NV',
            603 : 'NH',
            201 : 'NJ',
            551 : 'NJ',
            609 : 'NJ',
            640 : 'NJ',
            732 : 'NJ',
            848 : 'NJ',
            856 : 'NJ',
            862 : 'NJ',
            908 : 'NJ',
            973 : 'NJ',
            505 : 'NM',
            575 : 'NM',
            212 : 'NY',
            315 : 'NY',
            332 : 'NY',
            347 : 'NY',
            516 : 'NY',
            518 : 'NY',
            585 : 'NY',
            607 : 'NY',
            631 : 'NY',
            646 : 'NY',
            680 : 'NY',
            716 : 'NY',
            718 : 'NY',
            838 : 'NY',
            845 : 'NY',
            914 : 'NY',
            917 : 'NY',
            929 : 'NY',
            934 : 'NY',
            252 : 'NC',
            336 : 'NC',
            704 : 'NC',
            743 : 'NC',
            828 : 'NC',
            910 : 'NC',
            919 : 'NC',
            980 : 'NC',
            984 : 'NC',
            701 : 'ND',
            216 : 'OH',
            220 : 'OH',
            234 : 'OH',
            326 : 'OH',
            330 : 'OH',
            380 : 'OH',
            419 : 'OH',
            440 : 'OH',
            513 : 'OH',
            567 : 'OH',
            614 : 'OH',
            740 : 'OH',
            937 : 'OH',
            405 : 'OK',
            539 : 'OK',
            580 : 'OK',
            918 : 'OK',
            458 : 'OR',
            503 : 'OR',
            541 : 'OR',
            971 : 'OR',
            215 : 'PA',
            223 : 'PA',
            267 : 'PA',
            272 : 'PA',
            412 : 'PA',
            445 : 'PA',
            484 : 'PA',
            570 : 'PA',
            610 : 'PA',
            717 : 'PA',
            724 : 'PA',
            814 : 'PA',
            878 : 'PA',
            401 : 'RI',
            803 : 'SC',
            839 : 'SC',
            843 : 'SC',
            854 : 'SC',
            864 : 'SC',
            605 : 'SD',
            423 : 'TN',
            615 : 'TN',
            629 : 'TN',
            731 : 'TN',
            865 : 'TN',
            901 : 'TN',
            931 : 'TN',
            210 : 'TX',
            214 : 'TX',
            254 : 'TX',
            281 : 'TX',
            325 : 'TX',
            346 : 'TX',
            361 : 'TX',
            409 : 'TX',
            430 : 'TX',
            432 : 'TX',
            469 : 'TX',
            512 : 'TX',
            682 : 'TX',
            713 : 'TX',
            726 : 'TX',
            737 : 'TX',
            806 : 'TX',
            817 : 'TX',
            830 : 'TX',
            832 : 'TX',
            903 : 'TX',
            915 : 'TX',
            936 : 'TX',
            940 : 'TX',
            945 : 'TX',
            956 : 'TX',
            972 : 'TX',
            979 : 'TX',
            385 : 'UT',
            435 : 'UT',
            801 : 'UT',
            802 : 'VT',
            276 : 'VA',
            434 : 'VA',
            540 : 'VA',
            571 : 'VA',
            703 : 'VA',
            757 : 'VA',
            804 : 'VA',
            206 : 'WA',
            253 : 'WA',
            360 : 'WA',
            425 : 'WA',
            509 : 'WA',
            564 : 'WA',
            202 : 'DC',
            304 : 'WV',
            681 : 'WV',
            262 : 'WI',
            414 : 'WI',
            534 : 'WI',
            608 : 'WI',
            715 : 'WI',
            920 : 'WI',
            307 : 'WY',
            800 : 'Toll_free_number',
            833 : 'Toll_free_number',
            844 : 'Toll_free_number',
            855 : 'Toll_free_number',
            866 : 'Toll_free_number',
            877 : 'Toll_free_number',
            888 : 'Toll_free_number'
        };

        // To handle region data for CA & PA make sure to call the API finding the nearest zipcode to customers zipcode. So a customer with a Fremont zipcode should pull up as the 'Bay Area', not 'Greater LA.'
        // To handle region data for states like AL & CT (and many others), which don't have any/many service centers in them, we return 2 closest regions. 
        const allStates = { 
            AL: {region: ['Florida','Atlanta'], vehicleSalesTax: 0.02, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Montgomery', randomZipcode: '36104', stateName: 'Alaska', allowsSolarPanels: null , allowsSolarRoof: null }, 
            AK: {region: ['Seattle','Portland'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Juneau', randomZipcode: '99801', stateName: 'Alabama', allowsSolarPanels: null , allowsSolarRoof: null },
            AZ: {region: 'Pheonix', vehicleSalesTax: 0.056, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Pheonix', randomZipcode: '85001', stateName: 'Arizona', allowsSolarPanels: null , allowsSolarRoof: null },
            AR: {region: ['St._Louis','Nashville'], vehicleSalesTax: 0.065, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Little Rock', randomZipcode: '72201', stateName: 'Arkansas', allowsSolarPanels: null , allowsSolarRoof: null },
            CA: {region: {zip:'Bay_Area',zip:'Greater_LA/San_Diego'}, vehicleSalesTax: 0.075, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Sacramento', randomZipcode: '95814', stateName: 'California', allowsSolarPanels: null , allowsSolarRoof: null },
            CO: {region: 'Denver', vehicleSalesTax: 0.029, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Denver', randomZipcode: '80202', stateName: 'Colorado', allowsSolarPanels: null , allowsSolarRoof: null },
            CT: {region: ['NY_Metro','Boston'], vehicleSalesTax: 0.0775, solarSubscription: true, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Hartford', randomZipcode: '06103', stateName: 'Connecticut', allowsSolarPanels: null , allowsSolarRoof: null },
            DE: {region: ['Philadelphia','Pittsburgh'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Dover', randomZipcode: '19901', stateName: 'Delaware', allowsSolarPanels: null , allowsSolarRoof: null },
            FL: {region: 'Florida', vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Tallahassee', randomZipcode: '32301', stateName: 'Florida', allowsSolarPanels: null , allowsSolarRoof: null },
            GA: {region: 'Atlanta', vehicleSalesTax: 0.066, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Atlanta', randomZipcode: '30303', stateName: 'Georgia', allowsSolarPanels: null , allowsSolarRoof: null },
            HI: {region: 'Honolulu', vehicleSalesTax: 0.047, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Honolulu', randomZipcode: '96813', stateName: 'Hawaii', allowsSolarPanels: null , allowsSolarRoof: null },
            ID: {region: ['Seattle','Portland'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Boise', randomZipcode: '83702', stateName: 'Idaho', allowsSolarPanels: null , allowsSolarRoof: null },
            IL: {region: 'Chicago', vehicleSalesTax: 0.0625, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Springfield', randomZipcode: '62701', stateName: 'Illinois', allowsSolarPanels: null , allowsSolarRoof: null },
            IN: {region: 'Indianapolis', vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Indianapolis', randomZipcode: '46225', stateName: 'Indiana', allowsSolarPanels: null , allowsSolarRoof: null },
            IA: {region: ['Minneapolis','Chicago'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Des Moines', randomZipcode: '50309', stateName: 'Iowa', allowsSolarPanels: null , allowsSolarRoof: null },
            KS: {region: 'Kansas_City', vehicleSalesTax: 0.075, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Topeka', randomZipcode: '66603', stateName: 'Kansas', allowsSolarPanels: null , allowsSolarRoof: null },
            KY: {region: ['Indianapolis','Ohio'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Frankfort', randomZipcode: '40601', stateName: 'Kentucky', allowsSolarPanels: null , allowsSolarRoof: null },
            LA: {region: ['Texas','St._Louis'], vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Baton Rouge', randomZipcode: '70802', stateName: 'Louisiana', allowsSolarPanels: null , allowsSolarRoof: null },
            ME: {region: ['NY_Metro','Boston'], vehicleSalesTax: 0.055, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Augusta', randomZipcode: '04330', stateName: 'Maine', allowsSolarPanels: null , allowsSolarRoof: null },
            MD: {region: ['Philadelphia','NY_Metro'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Annapolis', randomZipcode: '21401', stateName: 'Maryland', allowsSolarPanels: null , allowsSolarRoof: null },
            MA: {region: 'Boston', vehicleSalesTax: 0.0625, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Boston', randomZipcode: '02201', stateName: 'Massachusetts', allowsSolarPanels: null , allowsSolarRoof: null },
            MI: {region: ['Indianapolis','Ohio'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Lansing', randomZipcode: '48933', stateName: 'Michigan', allowsSolarPanels: null , allowsSolarRoof: null },
            MN: {region: 'Minneapolis', vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'St. Paul', randomZipcode: '55102', stateName: 'Minnesota', allowsSolarPanels: null , allowsSolarRoof: null },
            MS: {region: ['Nashville','Texas'], vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Jackson', randomZipcode: '39205', stateName: 'Mississippi', allowsSolarPanels: null , allowsSolarRoof: null },
            MO: {region: 'St._Louis', vehicleSalesTax: 0.04225, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Jefferson City', randomZipcode: '65101', stateName: 'Missouri', allowsSolarPanels: null , allowsSolarRoof: null },
            MT: {region: ['Seattle','Portland'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Helena', randomZipcode: '59623', stateName: 'Montana', allowsSolarPanels: null , allowsSolarRoof: null },
            NE: {region: ['Denver','Kansas_City'], vehicleSalesTax: 0.055, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Lincoln', randomZipcode: '68502', stateName: 'Nebraska', allowsSolarPanels: null , allowsSolarRoof: null },
            NV: {region: 'Las_Vegas', vehicleSalesTax: 0.081, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Carson City', randomZipcode: '89701', stateName: 'Nevada', allowsSolarPanels: null , allowsSolarRoof: null },
            NH: {region: ['NY_Metro','Boston'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Concord', randomZipcode: '03301', stateName: 'New_Hampshire', allowsSolarPanels: null , allowsSolarRoof: null },
            NJ: {region: ['NY_Metro','Philadelphia'], vehicleSalesTax: 0.06625, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Trenton', randomZipcode: '08608', stateName: 'New_Jersey', allowsSolarPanels: null , allowsSolarRoof: null },
            NM: {region: ['Texas','Pheonix'], vehicleSalesTax: 0.04, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Santa Fe', randomZipcode: '87501', stateName: 'New_Mexico', allowsSolarPanels: null , allowsSolarRoof: null },
            NY: {region: 'NY_Metro', vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Albany', randomZipcode: '12207', stateName: 'New_York', allowsSolarPanels: null , allowsSolarRoof: null },
            NC: {region: 'North_Carolina', vehicleSalesTax: 0.03, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Raleigh', randomZipcode: '27601', stateName: 'North_Carolina', allowsSolarPanels: null , allowsSolarRoof: null },
            ND: {region: ['Minneapolis','Kansas_City'], vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Bismarck', randomZipcode: '58501', stateName: 'North_Dakaota', allowsSolarPanels: null , allowsSolarRoof: null },
            OH: {region: 'Ohio', vehicleSalesTax: 0.0575, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Columbus', randomZipcode: '43215', stateName: 'Ohio', allowsSolarPanels: null , allowsSolarRoof: null },
            OK: {region: ['Texas','Kansas_City'], vehicleSalesTax: 0.0125, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Oklahoma City', randomZipcode: '73102', stateName: 'Oklahoma', allowsSolarPanels: null , allowsSolarRoof: null },
            OR: {region: 'Portland', vehicleSalesTax: 0.005, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Salem', randomZipcode: '97301', stateName: 'Oregon', allowsSolarPanels: null , allowsSolarRoof: null },
            PA: {region: {zip:'Philadelphia', zip:'Pittsburgh'}, vehicleSalesTax: 0.08, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Harrisburg', randomZipcode: '17101', stateName: 'Pensylvania', allowsSolarPanels: null , allowsSolarRoof: null },
            RI: {region: ['NY_Metro','Boston'], vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Providence', randomZipcode: '02903', stateName: 'Rhode_Island', allowsSolarPanels: null , allowsSolarRoof: null },
            SC: {region: ['Atlanta','North_Carolina'], vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Columbia', randomZipcode: '29217', stateName: 'South_Carolina', allowsSolarPanels: null , allowsSolarRoof: null },
            SD: {region: ['Minneapolis','Kansas_City'], vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Pierre', randomZipcode: '57501', stateName: 'South_Dakota', allowsSolarPanels: null , allowsSolarRoof: null },
            TN: {region: 'Nashville', vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Nashville', randomZipcode: '78701', stateName: 'Tennessee', allowsSolarPanels: null , allowsSolarRoof: null },
            TX: {region: 'Texas', vehicleSalesTax: 0.0625, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Austin', randomZipcode: '84111', stateName: 'Texas', allowsSolarPanels: null , allowsSolarRoof: null },
            UT: {region: 'Salt_Lake_City', vehicleSalesTax: 0.0685, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Salt Lake City', randomZipcode: '05602', stateName: 'Utah', allowsSolarPanels: null , allowsSolarRoof: null },
            VT: {region: ['NY_Metro','Boston'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Montpelier', randomZipcode: '23219', stateName: 'Vermont', allowsSolarPanels: null , allowsSolarRoof: null },
            VA: {region: ['North_Carolina','Nashville'], vehicleSalesTax: 0.0415, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Richmond', randomZipcode: '98507', stateName: 'Virginia', allowsSolarPanels: null , allowsSolarRoof: null },
            WA: {region: 'Seattle', vehicleSalesTax: 0.035, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Olympia', randomZipcode: '98507', stateName: 'Washington', allowsSolarPanels: null , allowsSolarRoof: null },
            WV: {region: ['Ohio','Philadelphia'], vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Charleston', randomZipcode: '25301', stateName: 'West_Virginia', allowsSolarPanels: null , allowsSolarRoof: null },
            WI: {region: ['Minneapolis','Chicago'], vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Madison', randomZipcode: '53703', stateName: 'Wisconsin', allowsSolarPanels: null , allowsSolarRoof: null },
            WY: {region: ['Salt_Lake_City','Denver'], vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Cheyenne', randomZipcode: '82001', stateName: 'Wyoming', allowsSolarPanels: null , allowsSolarRoof: null },
            DC: {region: 'Greater_DC', vehicleSalesTax: 0.08, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Washington', randomZipcode: '20001', stateName: 'District_of_Columbia', allowsSolarPanels: null , allowsSolarRoof: null },
            All_states: {solarIncentivesTxt: [], vehicleIncentives: []}
        }
    
        const stateNames = {
            Alabama:'AL',
            Alaska:'AK', 
            Arizona:'AZ',
            Arkansas:'AR',
            California:'CA',
            Colorado:'CO',
            Connecticut:'CT',
            Delaware:'DE',
            District_of_Columbia:'DC',
            Florida:'FL',
            Georgia:'GA',
            Hawaii:'HI',
            Idaho:'ID',
            Illinois:'IL',
            Indiana:'IN',
            Iowa:'IA',
            Kansas:'KS',
            Kentucky:'KY',
            Louisiana:'LA',
            Maine:'ME',
            Maryland:'MD',
            Massachusetts:'MA',
            Michigan:'MI',
            Minnesota:'MN',
            Mississippi:'MS',
            Missouri:'MO',
            Montana:'MT',
            Nebraska:'NE',
            Nevada:'NV',
            New_Hampshire:'NH',
            New_Jersey:'NJ',
            New_Mexico:'NM',
            New_York:'NY',
            North_Carolina:'NC',
            North_Dakota:'ND', 
            Ohio:'OH',
            Oklahoma:'OK',
            Oregon:'OR',
            Pennsylvania:'PA',
            Rhode_Island:'RI',
            South_Carolina:'SC',
            South_Dakota:'SD',
            Tennessee:'TN',
            Texas:'TX',
            Utah:'UT',
            Vermont:'VT',
            Virgin_Island:'VI',
            Virginia:'VA',
            Washington:'WA',
            West_Virginia:'WV',
            Wisconsin:'WI',
            Wyoming:'WY'
        };


        const allBatteryResults = async () => {
            let webpagesArr = ['https://www.tesla.com/model3/design#battery', 'https://www.tesla.com/models/design#battery', 'https://www.tesla.com/modelx/design#battery', 'https://www.tesla.com/modely/design#battery'];
            let store = {model3:[], modelS:[], modelX:[], modelY:[]};
            let model = ['model3', 'modelS', 'modelX', 'modelY'];

            for( i in webpagesArr ){
                await page.goto(webpagesArr[i], { timeout: 60 * 1000 });
    
                const batteryButtonRefs = await page.$$('.group--options_block--container');

                for(let batteryBtn of batteryButtonRefs){
                    let classNames = batteryBtn._remoteObject.description;

                    if(classNames.indexOf('.group--option--disabled') === -1){

                        await batteryBtn.click();
                        const result = await page.evaluate(() => {
                            let arr = [ document.querySelector('div[aria-label="Performance"]').innerText ];
                            let prices = arr[0];
                            let specs = document.querySelector('.battery-and-drive-specs--list').innerText;
                            let deliveryDate = document.querySelector('.delivery-timing--date').innerText;
            
                            return { prices, specs, deliveryDate }
            
                        })
                        store[model[i]].push(result);
                    }
                }
            }
            return store; 
        };


        const allExteriorResults = async () => {
            let webpagesArr = ['https://www.tesla.com/model3/design#battery', 'https://www.tesla.com/models/design#battery', 'https://www.tesla.com/modelx/design#battery', 'https://www.tesla.com/modely/design#battery'];
            let store = {model3:[], modelS:[], modelX:[], modelY:[]};
            let model = ['model3', 'modelS', 'modelX', 'modelY'];

            for( i in webpagesArr ){
                await page.goto(webpagesArr[i], { timeout: 60 * 1000 }); 
                await page.waitForSelector('.packages-options--nav-item');
                await page.click('.packages-options--nav-item[arial-label="paint"]');
    
                const colorButtonsRefs = await page.$$('.child-group--container__PAINT .group--options_asset--container[role="button"]');
    
                for (let colorBtn of colorButtonsRefs) {
                    
                    await colorBtn.click();
                    const colorPriceResult = await page.evaluate(() => {
                        const colorText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:first-child').innerText;
                        const priceText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:nth-child(2)').innerText;
                        
                        return { colorText, priceText }; 
                    })
    
                    store[model[i]].push(colorPriceResult);
                }
    
                const wheelRefs = await page.$$('.child-group--container__WHEELS .group--options_asset--container[role="button"]');
    
                for (let wheelsBtn of wheelRefs) {
    
                    let classNames = wheelsBtn._remoteObject.description
                    
                    // the if statement below removes all hidden button elements (this proved to be a nuisance)
                    if(classNames.indexOf('.group--option--hidden') === -1){
                        await wheelsBtn.click();
                        const wheelsResult = await page.evaluate(() => {
                            const wheelName = document.querySelector('.child-group--container.child-group--container__WHEELS .child-group--selected_option_details span:nth-child(1) span').innerText;
                            const wheelPrice = document.querySelector('.child-group--container.child-group--container__WHEELS .child-group--selected_option_details span:nth-child(2) span').innerText;
                            return { wheelName, wheelPrice };
                        })
                        store[model[i]].push(wheelsResult);
                    } 
                }
 
            }
            return store.model3;
        }


        const allInteriorResults = async () => {
            let webpagesArr = ['https://www.tesla.com/model3/design#battery', 'https://www.tesla.com/models/design#battery', 'https://www.tesla.com/modelx/design#battery', 'https://www.tesla.com/modely/design#battery'];
            let store = {model3:[], modelS:[], modelX:[], modelY:[]};
            let model = Object.keys(store);

            for( i in webpagesArr ){
                await page.goto('https://www.tesla.com/model3/design#battery', { timeout: 60 * 1000 });
                await page.waitForSelector('.packages-options--nav-item');
                await page.click('.packages-options--nav-item[arial-label="interior"]');

                const interiorRefs = await page.$$('.group--options_asset--container');
                for (let intBtn of interiorRefs) {
                    let classNames = intBtn._remoteObject.description;

                    // the if statement below removes all hidden button elements
                    if(classNames.indexOf('.group--option--hidden') === -1){
                        await intBtn.click();
                        const interiorResult = await page.evaluate(() => {
                            const interiorName = document.querySelector('.child-group--selected_option_details  span:nth-child(1) span').innerText;
                            const interiorPrice = document.querySelector('.child-group--selected_option_details  span:nth-child(2) span').innerText;
            
                            return { interiorName, interiorPrice };
                        })
                        store[model[i]].push(interiorResult);
                    }
                }
            }
            return store;
        }


        const m3FSD = async () => {
            await page.goto('https://www.tesla.com/model3/design#battery', { timeout: 60 * 1000 }); 
            await page.click('.packages-options--nav-item[arial-label="autopilot"]');
            const fsdPrice = await page.evaluate(() => {
                return document.querySelector('.group--options_card--checkbox--container span:nth-child(2) span span').innerText;
            });

            return fsdPrice;
        }

        
        const mSBatteryResults = async () => {
            await page.goto('https://www.tesla.com/models/design#battery', { timeout: 60 * 1000 }); 
            await page.waitForSelector('div[aria-label="Long Range Plus"]'); 
            const result = await page.evaluate(() => {

                let mSPrices = document.querySelector('div[aria-label="Long Range Plus"]').innerText;
                let mSSpecs = document.querySelector('.battery-and-drive-specs--list').innerText;
                let mSDeliveryDate = document.querySelector('.delivery-timing--date').innerText;

                return { mSPrices, mSSpecs, mSDeliveryDate }

            }); 
            return result; 
        };

        const getWallConnectorHeading = async () => {

            const tableSelector = 'table.table-charging.hide-on-mobile thead';
            await page.goto('https://www.tesla.com/support/home-charging-installation/wall-connector', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector);

            let headerData = await page.evaluate(() => {

                return [...document.querySelectorAll('table.table-charging.hide-on-mobile thead tr:nth-child(2) th')].map((th) => {
                        let item = [];
                        let text = th.innerText
                        text = text.replace(/\s/g,'_'); // replace white space with '_'. Ex: 'Circuit breaker\n(amps)' = 'Circuit_breaker\n(amps)'
                        item.push(text);
                        return item;
                });
            });
            
            return headerData;
        }

        const getWallConnectorData = async () => {

            const tableHeadersArray = await getWallConnectorHeading(); 

            const tableSelector = 'table.table-charging.hide-on-mobile thead';
            await page.goto('https://www.tesla.com/support/home-charging-installation/wall-connector', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector);

            let headerData = await page.evaluate((tableHeadersArray) => {
                
                return [...document.querySelectorAll('table.table-charging.hide-on-mobile > tbody:nth-child(3) tr')].map((tr, i) => {
                
                    let item = {};
                    [...tr.querySelectorAll('td')].map((td, j) => {
                        switch(j) {
                            case 0:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 1:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 2:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 3:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 4:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 5:
                                item[tableHeadersArray[j]] = td.innerText;
                                break;
                            case 6:
                                item[tableHeadersArray[j]] = td.innerText;
                                break; 
                            default:
                                break;
                        }
                    });
                    return item;
                });
            }, tableHeadersArray);

            return headerData;
        }


        const getMobileCharging = async () => {
            
            const tableSelector = 'table.table-charging tbody tr';
            await page.goto('https://www.tesla.com/support/home-charging-installation/mobile-connector', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector);

            let data = await page.evaluate(() => {

                return [...document.querySelectorAll('table.table-charging tbody tr')].map((tr, i) => {
                    if(i > 1) {
                        let item = {};
                        [...tr.querySelectorAll('td')].map((td, j) => {
                            switch(j) {
                                case 0:
                                    item['outlets'] = td.innerText;
                                    break;
                                case 1:
                                    item['model_3_rph'] = td.innerText;
                                    break;
                                case 2:
                                    item['model_S_rph'] = td.innerText;
                                    break;
                                case 3:
                                    item['model_X_rph'] = td.innerText;
                                    break;
                                default:
                                    break;
                            }
                        });
                        return item;
                    }
                });
            });

            return data;
        }


        const getQualifyingUtility = async () => {
            
            const tableSelector = '#tesla-rich-text-7746 > table > tbody';
            await page.goto('https://www.tesla.com/support/energy/solar-panels/learn/subscription-solar', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector); 

            let data = await page.evaluate(() => {

                return [...document.querySelectorAll('#tesla-rich-text-7746 > table > tbody > tr')].map((tr, i) => {
                    if(i > 1) {
                        let item = {};
                        [...tr.querySelectorAll('td')].map((td, j) => {
                            switch(j) {
                                case 0:
                                    item['state'] = td.innerText;
                                    break;
                                case 1:
                                    item['utility'] = td.innerText;
                                    break;
                                default:
                                    break;
                            }
                        });
                        return item;
                    }
                });
            });

            return data;
        }


        const getQualificationData = async () => { 

            const tableSelector = '#tesla-rich-text-7746 > table > thead > tr';
            await page.goto('https://www.tesla.com/support/energy/solar-panels/learn/subscription-solar', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector); 

            let data = await page.evaluate(() => {

                return [...document.querySelectorAll('#tesla-rich-text-9538 > table > tbody > tr')].map((tr, i) => {
                    if(i > 1) {
                        let item = {};
                        [...tr.querySelectorAll('td')].map((td, j) => {
                            switch(j) {
                                case 0:
                                    item['type'] = td.innerText;
                                    break;
                                case 1:
                                    item['subscription'] = td.innerText;
                                    break;
                                case 2:
                                    item['loanPurchase'] = td.innerText;
                                    break;
                                case 3:
                                    item['cashPurchase'] = td.innerText;
                                    break;
                                default:
                                    break;
                            }
                        });
                        return item;
                    }
                });
            });

            return data;

        };


        const getIncentiveTable = async (stateNames, allStates) => {
            // this function scrapes the incentives table and stores data in our states object

            const tableSelector = '.table-ev-energy.hide-on-mobile';
            await page.goto('https://www.tesla.com/support/incentives', { timeout: 60 * 1000 });
            await page.waitForSelector(tableSelector);
            const tableHandle = await page.$(tableSelector); 

            let data = await page.evaluate(() => {

                return [...document.querySelectorAll('table.table-ev-energy tbody tr')].map((tr, i) => {
                    if(i > 1) {
                        let item = {};
                        [...tr.querySelectorAll('td')].map((td, j) => {
                            switch(j) {
                                case 0:
                                    if(td.innerText === 'Washington DC'){
                                        item['state'] = 'District_of_Columbia';
                                        break;
                                    } else if(td.innerText === ''){
                                        break;
                                    }
                                    item['state'] = td.innerText.replace(/\s/g,'_'); // replace white space with '_'. Ex: 'New York' = 'New_York'
                                    break;
                                case 1: 
                                    item['vehicleIncentives'] = td.innerText;
                                    break;
                                case 2:
                                    item['solarIncentivesTxt'] = td.innerText;
                                    break;
                                default:
                                    break;
                            }
                        });
                        return item;
                    }
                });
            });

            const dataLength = data.length;
            for(let i = 2; i < dataLength; i++){ 
            // this loop stores all data elements inside our allStates object
                if(data[i].state === 'All_states'){
                    allStates[data[i].state].vehicleIncentives.push(data[i].vehicleIncentives);
                    allStates[data[i].state].solarIncentivesTxt.push(data[i].solarIncentivesTxt);
                } else if (data[i].state !== undefined && data[i].state !== '_'){
                    let state = stateNames[data[i].state]; // convert state to abbreviated form; ex: 'New_York' becomes 'NY'
                    allStates[state].vehicleIncentives.push(data[i].vehicleIncentives);
                    allStates[state].solarIncentivesTxt.push(data[i].solarIncentivesTxt);
                }
            }

            return;

        };


        const getSolarPanelData = async () => {
            // this function pulls solar panel data from the energy design studio

            await page.goto('https://www.tesla.com/energy/design');
            const addressInputSelector = "input[id='unified-initial-questions-autocomplete']";
            await page.type(addressInputSelector, '90210', {delay: 500});
            await page.waitFor(3000);
            await page.keyboard.press('ArrowDown');
            await page.waitFor(1500);
            await page.keyboard.press('Enter'); // click on first item in dropdown
            await page.waitFor(1500);

            await page.type('input[id="utilityBill"]', '100', {delay:300});
            await page.waitFor(3000);

            const recommendationBtn = await page.$('button[data-test="see-recommendations"]');
            await recommendationBtn.click();

            await page.waitForSelector('.solarFinanceOptionContainer');
            await page.waitFor(3000);
            
            // create solarPanelData - this'll be used to store all out scraped data.
            const solarPanelData = []; 

            const solarPanelEditDiv = 'div.solarFinanceOptionContainer > div:nth-child(2) > div > div > div > div ';
            
            // click edit button - open modal!
            const solarEditBtn = await page.$(solarPanelEditDiv+' > div:nth-child(2) > button > span');
            await solarEditBtn.click();
            
            await page.waitForSelector('.powerwallModalContentContainer');
            await page.waitFor(3000);
            
            // get data from modal (Solar Panel guide page)
            const kWButtons = ['sss_4.08 kW', 'sss_8.16 kW', 'sss_12.24 kW', 'sss_16.32 kW'];
            
            let i = 0;
            for (let elem of kWButtons) {
                let kWOptionBtn = await page.$('button[id="'+elem+'"]');
                await kWOptionBtn.click(); 
                
                const sPGuideData = await page.evaluate(() => { 
                    let dailyProduction = document.querySelector('#app > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div > div > p').innerText;
                    let priceAfterIncentives = document.querySelector('#app > div > div:nth-child(3)  > div > div > div:nth-child(2) > div:nth-child(2)  > div > div > div:nth-child(3) > div:nth-child(2) > span').innerText;
                    return {dailyProduction, priceAfterIncentives};
                });
                

                // get data from modal (Costs & Incentives page)
                const costsBtn = await page.$('label[for="financeOptions"]');
                await costsBtn.click();
                await page.waitFor(3000);
                
                const costsIncentivesData = await page.evaluate(() => {
                    let pricingParentDiv = '#app > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div';
                    let purchasePrice = document.querySelector(pricingParentDiv+' > div > div > div:nth-child(2) > span').innerText;
                    let fedTaxCredit = document.querySelector(pricingParentDiv+' > div:nth-child(2) > div:nth-child(2) > span').innerText; 
                    let estimated25YrSavings = document.querySelector('div[data-test="savingsOverTwentyFiveYears"] > div:nth-child(2) > span').innerText;
                    return {purchasePrice, fedTaxCredit, estimated25YrSavings};
                })
                

                solarPanelData[i] = Object.assign({}, sPGuideData, costsIncentivesData) // merge both results into one object and store in solarPanelData array!
                let element = elem;
                solarPanelData[i].type = element.substr(4);

                i++;

                // return to solar guide page (to start process over again)
                const solarGuideBtn = await page.$('label[for="solarPanelGuide"]');
                await solarGuideBtn.click();
            }
            
            // get data from Costs & Incentives page
            const costsBtn = await page.$('label[for="financeOptions"]');
            await costsBtn.click();

            
            return solarPanelData;
        };


        const getProjectSunroof = async (customer_address) => {
            await page.goto('https://www.google.com/get/sunroof');
            const addressInputSelector = "input[id='input-0']";
            await page.type(addressInputSelector, customer_address);
            await page.keyboard.press('ArrowDown');
            await page.waitFor(1500);
            await page.keyboard.press('Enter'); // click on first item in dropdown
            await page.waitFor(1500);
            return await page.url(); 
        };

        const getAllZipData = async () => {
            const usStateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New-Hampshire','New-Jersey','New-Mexico','New-York','North-Carolina','North-Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode-Island','South-Carolina','South-Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West-Virginia','Wisconsin','Wyoming'];
            let locationDataObj = {zipcode: null,county: null,state_name: null,state_abbr: null,area_code: null,latitude_range: null,longitude_range: null};
            const tableSelector = 'body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody';

            await page.goto('https://zipcodes.org/36310-zip-code', { timeout: 60 * 1000 }); 
            await page.waitForSelector(tableSelector);

            let data = await page.evaluate(() => {
                return [...document.querySelectorAll('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody')].map((tr, i) => {
                    let stateName = 'AL';
                    let dataObj = {}; 
                    dataObj[stateName] = {zipcode: null,county: null,state_name: null,state_abbr: null,area_code: null,latitude_range: null,longitude_range: null};
                    dataObj[stateName]['zipcode'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > h1').innerText; 
                    dataObj[stateName]['county'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(1) > td:nth-child(2)').innerText;
                    dataObj[stateName]['state_name'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(2) > td:nth-child(2)').innerText;
                    dataObj[stateName]['state_abbr'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(2)').innerText;
                    dataObj[stateName]['area_code'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(4) > td:nth-child(2)').innerText;
                    dataObj[stateName]['latitude_range'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(6) > td:nth-child(2)').innerText;
                    dataObj[stateName]['longitude_range'] = document.querySelector('body > div.jumbo.state-jumbo > div > div:nth-child(1) > table > tbody > tr:nth-child(7) > td:nth-child(2)').innerText;
                    console.log('data stored!')
                    return dataObj;
                })
            })

            return data; 
        }

        const getNumOfZipCodes = async () => {
            const usStateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New-Hampshire','New-Jersey','New-Mexico','New-York','North-Carolina','North-Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode-Island','South-Carolina','South-Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West-Virginia','Wisconsin','Wyoming'];
            // const usStateNames = ['Alabama','Alaska'];
            let numOfZipcodesArr = [];
            for(let i = 0; i < usStateNames.length; i++){
              await page.goto('https://zipcodes.org/'+usStateNames[i]+'-zip-codes', { timeout: 60 * 1000 });
              let numberOfZipCodes = await page.evaluate(() => {
                return [...document.querySelectorAll('#zipList')[0].children].length;
              });
              numOfZipcodesArr.push(numberOfZipCodes);
            }
            return numOfZipcodesArr;
        }



        const alabama_zipcodes = ['36925','36310','35440','35005','35540','35006','35441','35007','36720','35950','35010','36250','35442','35013','36501','35014','35015','35952','36420','35610','36721','36201','35016','35739','36311','35541','36722','36312','36251','35953','35611','36502','35954','36830','36849','36003','36505','35019','36005','35542','36507','36509','35543','36425','35544','35545','36901','35615','36313','35546','35020','36006','35201','36314','35031','35956','35443','35032','36511','36008','36723','36009','35033','35034','36426','35740','35035','35548','36429','35036','35444','35741','36010','35958','36512','35446','36431','35038','36904','36253','35040','36513','36726','36850','36727','35742','35549','35041','36515','35447','36432','36728','36013','35959','35960','35042','36316','36015','36518','35043','35616','35044','36254','36521','36522','35045','35048','36016','35049','35448','36017','36317','35617','35449','36523','36318','36524','35452','35961','36319','35051','35052','36020','35550','35453','36851','36320','35618','36321','36435','36255','35053','36525','36906','35054','35962','36907','35055','36852','36853','36322','35619','36526','36528','36256','35963','36257','36022','35601','36529','35551','36258','36732','35552','36436','36736','35060','35061','35062','36301','35553','35964','36028','35456','35744','36023','36260','35457','36024','36261','36613','36323','36530','35554','35620','36025','35458','35459','35063','36330','35460','36026','35745','35461','36027','35462','35621','36401','36439','35746','35064','36532','35622','36738','35555','36029','36855','35966','36441','36442','35630','6535','6030','6740','6031','6032','6856','5967','6362','5463','6444','6538','6445','6539','6262','6446','5068','6741','5971','5901','6540','5464','5972','6742','6038','5070','5071','5973','6340','6033','5974','6908','5559','6034','5560','5072','6449','5466','6343','6035','6036','6263','6541','5747','5073','5074','6744','6037','6451','5975','5563','6542','5976','5748','5564','5565','5570','5077','6039','5078','6344','5640','5749','6858','5079','6040','5750','6345','6264','5080','5978','5979','6041','5643','5571','5082','5083','5751','5752','6859','6042','6043','5980','5572','5801','6860','6543','5981','6544','6910','6346','6545','6861','6265','5501','6745','5085','6749','5087','5573','5468','5089','5574','6045','5645','5091','6453','5469','5754','6862','6863','5755','6046','6793','5094','5983','5646','6454','6548','5647','6047','5648','6549','5096','6748','6266','6912','6550','5470','6865','6455','5097','5098','6048','6751','6752','6551','6049','5575','5756','6754','6555','6556','6349','6750','6051','5112','6756','6759','6052','5114','5111','6553','6456','5471','6753','6457','6913','5984','5759','6458','6350','6053','6054','6267','5576','6558','6761','6601','6460','5115','6101','6559','5004','5649','5116','6762','5650','5474','5651','6057','5117','6560','5118','6268','6269','5661','6763','6764','5577','5578','6915','6351','5119','5760','5761','6765','6270','6352','6353','5762','5473','6866','6766','5579','5120','6271','5121','6801','6467','6561','6767','5763','6203','6360','5764','5123','5477','6370','5580','5124','5125','6916','6562','6470','6061','6471','5478','6062','6867','5581','6272','6064','6371','6768','6769','6065','5126','5765','6871','6758','5127','6564','6066','5766','5130','5131','5906','5986','5480','6069','6273','6792','6473','5582','6474','5481','5133','6475','6476','5135','6274','6567','5136','5652','5653','6071','5767','6773','5137','6568','6569','6874','6570','5482','6477','6571','6775','6572','6776','5139','5768','6875','5771','6701','6574','6575','5142','5660','5143','6075','6373','6919','5144','6576','5584','6374','6375','6877','6778','5670','6527','6275','5146','6779','5585','6790','6578','5987','5147','5772','6579','5586','5148','6580','6581','6782','5149','5150','5988','5160','6078','5671','6582','6783','6784','5171','6583','6080','5773','5672','5587','6921','5172','5774','5673','6079','5173','5401','5674','6083','6087','6785','5175','6089','6786','6480','5775','6854','5989','5490','5176','6091','5592','5593','5178','6584','5179','6481','6276','6585','6586','5990','6922','5180','5677','5181','5182','6879','6277','6376','6278','6279','5183','5184','5491','5185','6092','6482','6587','5186','5187','5594','6483','6280','5188','5776'];
        const alaska_zipcodes = ['99689','99546','99551','99552','99553','99554','99555','99720','99786','99721','99556','99501','99744','99820','99557','99558','99722','99547','99791','99821','99723','99724','99559','99726','99652','99785','99727','99729','99730','99788','99561','99563','99732','99564','99565','99548','99566','99567','99733','99568','99569','99704','99918','99571','99572','99573','99574','99921','99575','99736','99737','99755','99576','99824','99692','99738','99577','99578','99579','99702','99580','99825','99739','99506','99581','99725','99701','99583','99584','99505','99703','99740','99586','99741','99742','99587','99588','99589','99590','99826','99827','99743','99602','99603','99829','99604','99605','99694','99745','99746','99922','99923','99606','99540','99801','99830','99747','99607','99748','99608','99609','99610','99611','99901','99749','99612','99613','99614','99750','99925','99751','99615','99620','99752','99753','99754','99621','99622','99757','99624','99625','99626','99756','99628','99585','99627','99630','99926','99903','99758','99631','99632','99633','99634','99760','99636','99690','99635','99691','99638','99639','99761','99762','99640','99763','99705','99764','99789','99765','99666','99641','99643','99644','99645','99647','99832','99648','99833','99649','99650','99651','99927','99766','99759','99836','99653','99549','99550','99734','99655','99767','99656','99768','99657','99591','99658','99659','99660','99714','99661','99769','99662','99770','99663','99664','99665','99771','99772','99773','99835','99840','99667','99668','99669','99670','99671','99672','99774','99674','99675','99676','99776','99777','99677','99778','99841','99779','99919','99678','99780','99637','99683','99679','99680','99681','99716','99682','99684','99685','99686','99781','99782','99783','99928','99654','99784','99693','99688','99929'];
        const arizona_zipcodes = ['85364','85320','85321','85920','85645','85217','85601','85223','85322','86320','85323','86321','85221','86015','85602','85603','85324','85922','86520','85325','85605','85326','86429','85530','86020','86322','85377','85222','85329','85738','85327','85531','86502','85224','85227','86503','86323','86431','85911','85328','86324','85923','85532','85533','85606','86021','85924','85332','85228','86325','85652','86326','86343','85333','86535','86327','86441','85607','85609','85534','85925','85535','85334','85335','85610','85611','85231','86001','85232','85931','85926','86504','85613','85264','86426','85536','85268','86022','85336','86505','85337','85233','85301','85501','86413','85338','86023','86016','85614','85927','86411','86024','85235','85928','85615','85236','86025','86030','86506','85616','86412','86329','86031','86330','86331','86032','86053','86033','86034','85237','86401','86332','86039','86403','86342','85929','85339','86035','85340','86432','86507','85309','85341','86508','85618','86538','85653','86036','85239','86333','85617','85930','86444','85201','85539','86440','85540','86038','85342','85619','86017','85620','86540','85087','85621','86052','85932','86433','85623','85933','86040','85343','85253','85344','86018','85624','86334','85541','86434','85625','85345','85542','86028','85001','85241','85543','85544','85934','85935','86510','85626','86042','85627','85371','86301','86312','85346','85242','85245','86544','85654','86335','85648','85263','86545','85347','85545','86547','85247','85546','85629','85630','85936','86511','85348','85550','85349','85631','85632','86512','85633','86549','85250','86043','86336','86337','85634','86054','85901','85635','86338','85937','85551','85350','85637','85938','85272','85351','85375','86029','86435','85273','85374','85352','85939','86514','85280','86443','85552','85353','85638','86044','85354','85553','85639','86436','85290','86556','86045','85646','85701','85640','85641','86437','85291','85940','85355','85356','85357','85912','85941','85358','85360','85643','86046','86445','86515','85292','86047','85361','85942','85362','85554','85363','86438'];
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        /*oh hi there*/
       const arkansas_zipcodes = ['71678','72001','72610','72002','72410','72820','71820','72921','72003','72611','71920','72004','72821','72005','71921','71922','71923','71630','72310','72513','71822','72823','72311','72006','72007','72711','72010','71631','72923','72312','72313','72924','72501','72011','72411','71720','72613','72013','72012','72412','72014','71721','72714','72824','71823','72015','72712','72615','72616','72515','72617','72016','72413','72314','72017','71929','72414','72415','71825','72826','71722','72827','72315','71932','72926','71933','72416','72927','72516','72020','71826','72928','72320','72828','72021','72517','72417','72022','71827','72619','72321','72023','71935','72322','71828','72519','71724','71701','72520','72717','72419','72024','71725','72025','72421','72026','72521','72718','72930','72932','72027','72719','72829','72933','72522','72525','72324','72934','71726','72028','72029','72325','72623','72830','72030','72031','72832','72053','72326','71831','72721','72624','72523','72032','72524','72422','72626','72036','71937','72037','72327','72038','71635','72328','71728','72526','72039','72833','72834','72424','71832','72041','72042','72722','72628','72425','72835','71940','72426','72629','71638','72040','72527','72630','72043','71833','71834','72528','71941','72837','72530','72329','71639','72935','72330','72331','72044','72332','72427','71730','72045','72333','72531','72727','72728','71740','71835','72046','72047','72048','72428','71640','72631','72729','72532','72633','72088','72730','72701','72533','72429','72634','72534','71742','71836','72335','72901','71837','71642','72051','72536','72338','71942','71838','72537','72732','71839','72052','72635','72733','71840','72734','72538','72636','72055','71841','72339','72539','71943','72340','72735','72319','71643','71644','71944','72057','72838','72736','72638','72058','72737','72430','72936','72059','72060','72431','72540','71743','72061','72937','72839','71646','71744','72542','71745','72639','72432','72601','72938','72840','72841','72640','71945','72063','71946','72842','72341','72064','72543','72843','72342','72544','72065','71647','72346','72066','72347','72067','72068','72738','72739','72069','71801','71842','72512','71901','71909','72070','72071','72433','72348','72072','72073','72074','72940','72740','71747','72546','72434','71748','72075','72076','72641','72079','71649','71650','71651','72080','71949','72741','72350','72105','72401','72081','71749','72351','72082','72083','71652','72742','71950','72435','72845','72352','72436','72437','71653','72642','72846','72353','71844','71952','72941','71750','72438','72644','72084','72354','72645','72085','71845','72355','72439','72744','72201','72099','71846','72550','72847','72086','72087','71751','72745','72358','72440','72103','72359','72943','72553','71753','72104','72554','72442','72944','72648','72555','72360','72364','72365','72443','72650','72366','72113','72106','72444','72747','71847','72101','72441','71654','71752','72102','72556','72367','71953','72107','72945','72651','71851','72445','72557','72447','72108','71655','71658','72368','72110','72749','71659','71758','71957','72655','72561','72111','72653','71956','72560','72946','72947','71958','71852','72948','72851','71660','72562','71959','72112','72658','71960','71759','72114','72449','72660','72661','72852','71961','71853','72564','71962','72853','72662','72369','72663','72370','72565','71855','72949','72854','72372','72121','72450','72855','71661','72373','72950','72122','72666','72123','72751','72453','71964','72668','72856','71965','72125','72126','72752','71662','72454','72669','71601','72566','72857','72567','72568','72127','72455','72456','72670','72374','72457','71663','72858','72569','72458','72128','72753','72129','71857','72130','72376','72672','72131','72951','72459','72460','72461','72132','72133','72462','71665','72377','72134','72756','72135','72136','72137','72571','71858','72860','71968','72952','72139','72801','72572','72573','72140','72464','72675','72760','72575','72576','71859','72141','72142','72863','72143','72465','72150','72152','72120','72153','72577','72761','71969','71762','72466','72379','72156','71763','72762','72157','71860','71667','72467','71764','71970','72469','71765','72578','72160','72865','72470','72579','72768','72769','72677','72164','72471','71861','71854','72165','71766','72166','71670','72679','72657','72381','72770','72167','72472','72168','72473','72581','72169','72383','72384','72385','72386','72170','71971','72955','71768','72682','72956','71972','72387','72683','71769','72173','72583','72584','72389','72175','72474','72475','71770','72958','72476','72176','72478','71671','71862','71674','72479','72773','72774','72390','72301','72178','72391','72685','72392','71772','71602','71973','72585','72394','72179','72482','71864','71675','71676','72395','71865','71677','72959','71866','72587','72776','72686','72180','72181','72182','72183','72396','72687'];
       const california_zipcodes = ['91752','94502','90209','90001','94085','94901','96120','93210','90239','91901','91001','94002','93203','95531','90637','92222','93426','91011','93450','92014','91711','95762','94550','92602'];
       const colorado_zipcodes = ['80759','80101','81020','80720','81101','80510','80420','81210','80721','80801','81120','80802','81121','81021','80804','80001','81611','80722','80610','80011','81410','81620','81022','80421','81621','81636','81122','81411','80512','80102','80513','80805','81023','80422','81123','81024','80423','81025','80301','81027','80424','80611','80601','80020','80723','81211','80425','80807','80426','80103','81320','80808','81029','81212','81124','81623','80612','80809','80104','81413','81125','80427','81126','81030','80810','81127','81128','81220','80428','81520','80429','81221','81222','80430','81624','81019','80901','80022','80432','81129','80433','80812','81321','81414','81223','80434','81625','81415','81130','81224','81131','80813','80726','81033','80514','81630','80105','81132','81416','80221','80435','81610','80814','81323','81324','80515','80436','80024','81301','81036','81631','80614','80615','81418','80727','81632','81325','80106','80025','80107','80438','80110','80516','80511','80620','80437','80440','80520','80815','80728','81226','80816','80521','81133','80621','81038','80701','80817','81039','80116','80442','80530','80443','81521','80622','81134','81040','81522','80818','80444','80623','80624','81523','80532','81601','80401','81041','80446','81501','80447','81228','80448','80631','80819','80729','80820','81042','81230','81637','81638','81043','80449','81044','81045','80731','81639','80640','80732','81326','80733','81232','81046','81047','80734','81135','81136','80451','81419','81233','80642','80821','80533','80452','80735','80453','81137','80736','80454','80455','81138','80456','80822','80534','80737','80823','80643','80644','81049','80117','80824','80825','80457','80459','81140','81050','80645','81055','80026','81235','80827','81052','80535','80118','81054','81420','80461','81327','80826','80740','80120','80536','80705','81524','80501','80027','80131','80537','80646','80540','81525','81421','81141','81328','80829','81058','81329','80541','80830','81640','81057','80463','80542','81641','81642','80741','81643','81330','80543','81645','81059','81143','81646','81227','81144','81401','80132','80465','81146','81236','81422','80466','81647','80742','80544','81423','81424','80648','80467','81237','81425','81062','81426','80649','81063','80743','81427','80744','80745','81147','81526','80133','80746','81428','81635','81429','80134','81239','80468','80747','81240','80831','80469','80650','80470','80471','81241','81430','80651','81331','81242','81243','81064','81001','80832','80473','81648','81649','80545','81431','81332','81432','81650','81244','81067','80652','80474','81148','80833','81069','81149','81201','81152','81153','81151','81248','80135','80749','80834','80546','80475','81071','81652','80476','80497','81433','80835','81653','81654','81615','80750','81434','81154','81073','81074','80477','80751','80754','80136','80836','81076','81077','80478','81435','80547','80479','81334','81081','81082','81251','81084','80840','81657','80755','80860','81087','81155','80861','80480','81066','81090','80481','80137','80653','80549','81252','80030','81091','81253','80033','81527','80654','80862','81092','80550','80482','81655','80863','80757','81656','80758','80483', '81335', '80864'];
       const connecticut_zipcodes = ['06389','06230','06231','06232','06401','06278','06001','06233','06330','06750','06063','06403','06037','06524','06801','06751','06002','06043','06404','06334','06405','06601','06752','06010','06016','06804','06234','06013','06018','06331','06019','06020','06409','06332','06235','06408','06412','06413','06414','06415','06021','06022','06237','06753','06754','06807','06238','06416','06810','06239','06820','06241','06417','06418','06422','06023','06024','06025','06026','06423','06424','06108','06027','06512','06243','06333','06088','06028','06244','06242','06612','06029','06082','06426','06245','06430','06031','06030','06335','06755','06829','06336','06337','06033','06756','06035','06436','06830','06246','06340','06437','06438','06439','06514','06247','06350','06101','06791','06440','06248','06441','06442','06351','06757','06419','06758','06039','06249','06339','06759','06443','06040','06250','06251','06444','06447','06049','06450','06456','06762','06455','06457','06460','06467','06468','06353','06469','06354','06763','06355','06770','06050','06840','06812','06057','06501','06320','06776','06777','06111','06470','06357','06058','06471','06059','06254','06060','06255','06473','06359','06474','06256','06778','06472','06850','06360','06370','06779','06870','06371','06372','06475','06373','06477','06478','06379','06781','06061','06374','06062','06479','06782','06258','06259','06064','06480','06365','06712','06260','06375','06262','06896','06875','06876','06877','06878','06065','06481','06067','06263','06783','06420','06068','06482','06264','06483','06069','06484','06784','06070','06071','06072','06487','06073','06785','06376','06265','06266','06074','06267','06488','06489','06490','06075','06076','06077','06901','06377','06491','06378','06268','06497','06078','06079','06380','06081','06786','06787','06277','06084','06790','06611','06382','06085','06066','06383','06384','06107','06492','06793','06794','06701','06385','06795','06387','06089','06796','06090','06091','06516','06388','06092','06093','06498','06883','06880','06109','06226','06279','06897','06094','06280','06006','06096','06098','06716','06525','06798','06281','06282'];
       const delaware_zipcodes = ['19736','19701','19930','19931','19933','19934','19936','19703','19938','19939','19706','19940','19901','19902','19941','19943','19944','19945','19946','19947','19950','19951','19952','19953','19707','19954','19955','19708','19956','19958','19960','19961','19962','19964','19709','19963','19966','19967','19968','19710','19969','19720','19702','19970','19730','19731','19971','19732','19733','19973','19975','19977','19734','19979','19801','19735','19980'];
       const florida_zipcodes = ['33890','32615','32420','32701','32421','32702','33820','33920','34216','32617','32320','33572','32703','34265','32618','32422','34679','34705','32102','32233','33823','33825','33827','32530','32531','33503','32105','33830','32423','33744','32619','33430','33786','34420','34464','33043','32424','33921','33427','33922','32425','34133','32007','33834','33424','34201','34217','33835','33508','32008','32321','32621','32622','34601','33439','32009','32110','33513','32011','32426','33438','32111','32533','32920','33904','33924','32322','32427','32706','32707','32625','33514','32535','32324','32626','32428','34138','32709','32113','32710','32430','33755','33767','34711','33440','32922','32931','33521','34137','34215','32431','32326','32112','32536','32628','34681','34423','33524','32432','33523','33004','33836','32013','32114','32130','32713','33441','32433','32720','33444','32725','32540','32030','33527','33838','34697','34433','33530','33839','32631','32131','32133','32328','33840','32437','32132','32542','33927','34680','32033','34222','34223','33928','32726','34139','32633','32634','33854','33930','32948','32034','34729','32136','32140','34436','33301','32134','33841','33901','33931','34267','34945','32547','32038','32438','32439','33843','34731','32601','32732','32139','33534','32040','32722','32733','32560','34140','34734','32440','32042','32735','32442','32138','32949','32043','32330','32331','32443','32332','34736','32561','32639','33844','33008','32044','32145','32333','32640','34442','33002','32643','33846','32046','33455','34445','34690','32147','33019','34218','32564','33847','33030','34446','34447','32648','32334','34737','34667','32544','34142','32903','33855','33785','34956','34449','33848','32148','34450','33036','32654','34636','32099','32240','32052','32565','32053','34957','33458','33849','34739','33149','33051','33037','33040','32656','34740','32449','34741','32658','33935','33537','32158','33850','32054','32024','32157','32160','33851','33459','32744','32746','32747','33538','33852','33853','33454','33801','32336','32323','34639','33770','34272','32567','32058','34460','32059','34748','33936','33547','32060','32337','32662','33001','34228','32750','33857','33858','32663','33470','32061','33548','32444','32063','32340','32751','32950','32445','34260','33550','33050','33052','34145','32446','32569','34753','32066','32062','32568','32664','32901','32951','32666','32952','32410','33101','33109','32667','32799','32050','32343','32537','32570','32754','34755','32577','32344','34756','33471','32668','32434','32756','33860','33938','34251','33856','34101','32566','32266','34652','32168','32669','32578','33863','34661','34268','34274','32452','33903','33160','33408','34286','32071','32759','34760','34470','34141','32179','34761','33556','34762','34972','32680','34677','32072','33865','34264','33054','32763','32681','32003','32182','32815','32173','34229','32764','32683','32762','34484','34660','33476','32767','32177','32905','33480','34990','32135','34682','33944','34220','32346','32401','32407','34219','32925','32538','33082','32079','32501','32347','32180','33945','33780','32350','33946','33564','32768','32454','33868','32181','33060','34785','32696','33598','34786','32971','34777','33880','32789','32708','32362','32697','34797','34498','32466','32041','32798','33539'];
       const georgia_zipcodes = ['30295','31001','30101','30103','31620','31002','30410','30411','31622','31701','31301','31003','31510','30004','30412','30510','31512','31709','31711','30802','31712','30104','31623','31713','30105','30619','31714','30601','30319','31715','30011','30917','30106','30803','30002','31624','31716','31717','30511','30107','30204','31625','30413','31720','31513','30414','31722','30620','30621','31516','30512','31723','31302','30513','31724','30805','30622','31004','31005','30806','31626','30623','30108','30109','30516','30624','31801','30517','30110','31725','31518','31726','31727','30415','30205','31519','31520','30113','30625','31803','30515','31006','31007','31008','31009','31728','30701','31729','30807','31730','30520','30114','30627','30521','30116','30120','30123','31804','30124','316','31732','30125','31028','30705','31011','30522','31012','30502','30707','31733','30708','30111','30523','30021','30417','30525','30527','30528','31734','31013','31303','31735','30420','31014','30710','30628','31736','30421','31737','31901','30629','30529','30206','30288','30012','31738','30129','31010','30531','31739','30014','30711','30630','30631','31304','31016','30028','31805','31740','30019','30533','30423','30132','30719','31741','30633','31017','31305','31018','31742','30534','31743','30808','30030','30535','31532','30634','31019','30537','31629','31744','31745','31533','30133','30424','31020','31630','31021','31022','30095','30539','30538','31023','31024','31307','31746','30635','31025','31308','31806','31747','30294','31807','30540','30137','31749','30541','30138','30724','30809','30212','30213','30139','31631','30638','30214','30140','31750','31309','30725','30216','30542','31537','30297','31029','31905','31751','30742','31314','31030','31808','31752','30217','30639','31753','30501','30425','30218','31810','31754','30810','30543','30426','30219','30427','30428','30641','31031','30811','30812','30220','31032','30017','30726','30642','30222','30223','30813','31312','31033','30429','31632','31811','30228','30229','31034','30814','31035','31756','30643','31036','31539','30545','31037','30815','30546','30645','31038','31310','30141','31542','30230','30142','30547','31634','31543','30548','31039','30646','31041','30647','30232','31759','31042','31760','30233','31544','31761','30143','30549','31044','31527','30234','30018','31545','31045','30236','31046','31812','31047','30144','30816','31547','31548','30145','31049','31050','30728','30240','31636','31635','30552','30553','30042','31762','30146','31763','31637','31764','30648','30047','31051','30817','30147','30122','30038','31052','30248','30052','30750','30434','31814','30250','31316','30554','31549','31815','30251','30730','30436','30126','31201','30650','30438','31816','31550','30055','30148','30006','31057','30557','30818','31058','30671','30558','30555','31054','31055','30252','30256','31765','31318','30731','31319','31551','30819','30439','31820','30441','31320','31060','31059','30442','31552','30257','30559','30820','30258','30655','31063','31064','31065','30259','31766','30560','31767','30260','31638','31768','30563','30149','30445','30150','30562','30564','31066','31769','31553','31639','31641','30151','30056','30446','30263','31770','31554','30565','30003','31771','30447','30026','30821','30448','31772','30732','30566','31773','31774','31067','31555','31556','31068','30449','31821','31775','30266','30054','30268','31777','31557','31778','30269','31642','31779','31321','30567','30822','31069','30072','31822','31823','31070','31071','31072','31073','31780','30733','31322','30450','30070','31781','30127','31824','30451','31782','31643','30568','30734','31645','30660','31783','30272','30074','30452','30453','31075','30735','30273','31076','31077','31323','31825','31324','31326','30736','30738','30274','31078','31079','30739','30454','30153','30740','30455','30161','30170','30741','30075','30662','31081','30663','30171','31646','31558','31522','31784','31082','31327','30456','30275','31785','30571','31401','31083','30079','31560','31561','30276','31084','31085','30172','30664','30277','31786','31826','30665','30173','31086','31787','30080','30039','30025','30457','31647','31087','31329','30823','31648','30458','30666','30667','30464','30281','31649','30083','30572','30746','30747','31789','30284','31563','30024','30401','31790','30467','31791','31827','30175','30176','30573','30575','30470','30177','30178','30179','30751','31089','30285','30286','31757','30824','31793','30576','30668','30577','30598','31090','31331','30752','30753','30084','30755','30289','30580','30471','31795','31328','30290','31091','30291','30669','31829','30473','31601','30756','30474','31092','30180','30182','30477','30183','31333','31564','31830','31088','30828','31094','31796','30673','30677','31565','31831','31501','30830','31566','31567','31833','31832','31797','30184','31568','30678','30185','30757','30581','31650','30292','30680','30187','30683','31569','30293','31836','30188','31798','30833','31096','31097','30582'];
       const hawaii_zipcodes = ['96854','96701','96703','96862','96861','96704','96705','96706','96858','96708','96710','96712','96713','96714','96715','96716','96717','96718','96719','96853','96720','96725','96726','96727','96801','96728','96729','96730','96731','96732','96734','96740','96741','96742','96743','96744','96746','96755','96707','96747','96748','96749','96750','96751','96739','96752','96753','96754','96756','96757','96790','96759','96760','96761','96762','96763','96764','96765','96766','96863','96768','96769','96770','96789','96771','96772','96773','96737','96774','96775','96776','96777','96778','96779','96780','96781','96782','96860','96783','96722','96788','96784','96857','96859','96785','96786','96791','96792','96738','96793','96795','96796','96797','96898'];
       const idaho_zipcodes = ['83677','83210','83520','83311','83312','83211','83212','83213','83214','83420','83801','83601','83215','83802','83217','83602','83218','83803','83313','83220','83221','83804','83314','83223','83701','83805','83806','83604','83316','83318','83808','83605','83610','83320','83809','83462','83611','83321','83810','83226','83421','83811','83812','83227','83228','83229','83813','83814','83865','83230','83821','83322','83522','83612','83523','83524','83232','83823','83323','83824','83324','83233','83615','83825','83234','83422','83423','83616','83826','83325','83525','83827','83235','83617','83327','83424','83531','83526','83830','83328','83236','83287','83203','83237','83619','83620','83714','83622','83832','83238','83239','83463','83623','83330','83241','83624','83530','83533','83626','83332','83333','83425','83627','83334','83833','83834','83835','83335','83336','83337','83243','83628','83836','83629','83244','83630','83631','83401','83632','83245','83427','83428','83429','83338','83535','83536','83837','83537','83340','83341','83633','83839','83539','83840','83634','83841','83635','83540','83246','83464','83465','83541','83636','83501','83431','83637','83542','83251','83433','83252','83342','83639','83253','83638','83250','83842','83641','83434','83642','83643','83644','83645','83343','83435','83254','83255','83256','83843','83647','83648','83845','83846','83650','83874','83344','83651','83847','83654','83655','83436','83543','83848','83466','83656','83346','83657','83822','83544','83849','83261','83438','83660','83347','83661','83545','83348','83546','83850','83262','83666'];
       const illinois_zipcodes = ['60099','61410','61411','62214','60101','62310','62805','61230','62215','62806','60001','61231','62601','61412','60102','62001','62410','61810','62807','61413','62610','60803','62411','62905','62002','61414','61811','61310','60666','61720','61311','61232','61233','62906','62413','61234','60002','61001','61910','62611','62501','61312','60004','61721','61812','60910','61722','61911','60911','62612','62808','61912','61006','62510','61501','62613','61235','61723','62511','61913','62615','62311','60504','62907','62216','61415','61007','62217','61416','62809','60010','62312','61236','62218','60103','62313','60510','62006','62617','62314','62618','62512','60912','62219','60499','60401','62414','62908','62810','62220','61724','62811','60104','61008','61813','62009','60105','61516','62812','60163','61417','60402','62010','61914','60511','61418','62011','62415','61419','61814','61313','61420','60108','61701','60406','62513','62622','62621','62814','62909','60440','61815','62815','60913','62816','62514','60914','62316','60407','61421','60915','60408','62230','62417','60455','62012','61517','60512','61816','60155','61917','60513','62910','62817','62624','62818','62418','62013','61519','60917','60918','62819','61314','62515','60089','61237','62517','62912','62014','60459','61315','60109','62318','62820','61422','62015','61010','60919','62913','62914','61011','62419','60409','61919','62915','61238','62319','61423','61424','62320','62916','60920','61520','62625','61012','61239','62901','62626','61725','62231','61425','62821','60116','60110','62917','62016','62918','62321','60013','62420','62232','61426','61817','62919','61316','61013','62801','61818','61014','62323','61820','61015','62627','60410','62628','61920','62629','60921','60922','61726','61317','61016','62233','62630','62518','60601','60411','60415','61523','61924','62822','60804','61830','62823','60924','60111','62421','60514','62824','62324','60926','60927','61727','60416','61240','62325','62920','62825','62017','62326','61728','62234','61831','61241','62921','62236','62329','61318','62631','61729','61730','61242','61319','62519','60112','62018','62237','60478','62422','62922','60928','60113','60417','61610','61731','62827','60012','61427','60929','62238','62923','61428','62828','61018','62829','62330','61925','61320','61321','60930','61732','61832','60561','61019','61020','62520','61839','62924','62521','61733','60015','60115','61734','62423','61322','60016','61840','61735','62424','62530','62830','61021','60419','62926','62019','60931','62021','61323','62022','62927','60515','61736','62831','62832','62425','60118','61524','61525','62239','61024','60420','62023','60518','62024','62240','61025','61430','60932','61244','61611','62201','62633','62928','61526','62426','62531','61528','62025','62401','61738','60119','61324','62930','62027','61027','60120','61028','62931','60007','62634','62932','62833','60933','62241','61431','61737','60126','61529','60707','62028','62334','62532','60421','62635','60934','62834','62933','62835','60519','62934','61250','60129','60935','61530','60201','62242','60805','62836','61739','62837','61841','61432','62208','62838','61842','62533','61531','61251','62336','61433','62030','62031','62032','62534','61843','61844','61740','62427','62839','60422','61845','61532','60130','61741','61030','62535','60037','62338','60020','60021','60597','60423','62840','62638','61031','60131','62639','62243','62841','61032','61252','62244','62935','61036','61401','61037','61434','61038','60424','61928','62842','61254','60134','60135','61846','61435','61039','62245','60936','61847','60136','62033','60938','61436','62640','61437','61533','62034','60137','62536','60022','60139','60025','60026','60425','62035','62938','62339','62036','62843','60029','61438','61742','60939','62939','62940','62037','62941','61325','62942','62040','60940','62943','61326','61743','60030','62844','60088','61534','62044','62428','62642','62246','61744','62340','61535','60031','62247','62045','62046','62341','62944','61929','60140','61256','61536','61041','60133','62047','61042','62946','62537','62048','62643','60033','62538','60426','60706','62644','60429','60034','62248','61439','61327','61848','61537','62845','62947','62431','62948','60941','62649','61745','60457','62432','62249','60035','60040','62049','61257','60162','62050','60520','61930','60141','60521','62250','60179','61043','61849','60456','60430','60942','61258','61747','60944','62803','61748','62252','62343','61931','61932','60142','62344','62949','62433','61259','62539','62846','61850','61440','60041','62434','62847','61441','60945','62051','62848','60042','60143','62849','61851','62650','62950','62435','62052','62436','62850','62951','60431','62952','62953','61260','62954','60458','62053','62054','60144','60901','61933','62955','62956','61328','62851','62852','61442','62853','60946','60043','61749','61044','61443','62253','62655','62540','62345','60145','61539','62854','60437','60146','61447','61448','61449','60525','60526','61450','61330','61936','62346','61541','61301','61540','61329','60147','60044','60045','62541','60156','60046','60047','62438','61046','62855','61750','60438','62543','61451','61751','62439','61752','61047','62254','60530','61331','60531','60439','61048','62255','61332','62440','61542','61753','62347','60048','62348','62656','62659','60069','60712','61049','60532','62056','62660','61453','61452','61543','62058','62661','60441','60948','62856','61454','60148','61544','60049','61333','61852','62857','62349','61334','62858','62059','61111','61937','62662','61545','60949','61261','61262','60534','62860','61115','61755','61455','62544','62060','62256','61336','61853','62958','61337','60150','62663','60442','61546','61338','61854','60950','60151','61547','61458','60152','61459','62061','62959','62257','61340','61756','61341','62441','62442','60951','62062','62224','62443','62664','61263','60443','61938','62861','60153','60444','62957','61050','61754','62859','61335','60050','62545','61460','60157','62063','60160','60952','62259','62351','61342','62665','61758','61548','61940','62960','62065','62666','60445','61264','60953','62862','60536','62961','61051','62962','60537','62260','61855','62352','61344','61759','61760','60447','62444','62667','62261','60448','61265','60954','60449','61462','61052','60538','61856','62445','60539','62067','60450','61270','62546','61550','60053','61552','62963','62964','62547','62863','61053','62446','61054','62069','60056','62548','62353','62864','62550','62070','62549','62965','62262','62865','61857','60060','61941','62966','62668','61057','60540','62263','62866','62071','62354','62355','61058','62447','61345','62264','62265','61346','62670','61272','62967','62356','62074','62867','62671','60451','62266','62357','61465','60541','61942','62448','62551','60714','62672','62358','62868','62075','61059','61761','61553','62869','60542','60064','61466','60062','62269','60523','60452','60453','60301','62268','62673','61943','62552','61858','62449','62553','60460','62870','61859','61348','61349','62076','62271','62969','62970','62450','60461','62871','60955','61467','62872','61468','61469','61060','62971','62554','61061','62874','61273','60462','61274','60543','61350','62555','62972','60038','62451','62556','62674','62359','60463','60465','60464','62557','62077','60956','61944','60466','60068','62452','62875','62078','61353','62558','60957','62360','62361','61062','61063','61554','61862','61601','60468','62272','62973','62362','61354','61863','62675','61864','62079','62273','62274','60959','62974','62363','60544','62365','60545','60170','62366','62677','62367','62275','61064','62975','61764','61065','61275','60469','61865','61470','62277','61276','61356','61559','61277','60070','62976','61560','62301','62876','62977','62080','60960','60470','61866','61278','61471','62560','62278','60961','61949','62279','61279','60071','60471','62877','61870','62979','61067','62878','60072','61472','60305','60171','60827','60546','62561','61561','60472','60962','62454','61068','62563','61070','61071','61201','62081','61101','62370','61072','62280','60008','61562','60446','62082','62083','61073','60172','61473','62982','60963','60073','62084','61871','62983','62681','60075','61358','61872','62879','60964','61474','60174','61563','62458','62460','62281','61873','62282','62880','62459','62881','62682','62882','60548','61769','61074','61874','62085','61770','61075','60159','62883','60176','61475','61076','62225','62683','61476','61359','61771','61360','60549','62884','61077','61875','60550','61078','62283','62984','61361','62565','60966','60551','62684','61281','62685','61079','61772','62885','62461','61773','61876','61877','62462','61282','62985','62886','60076','62284','61477','61478','62285','60080','60552','62086','61080','60177','60473','61564','62087','60474','61565','62286','61479','60081','61362','62887','62701','61363','62686','61774','62088','62288','60475','61081','60553','62463','61084','60967','61085','60165','62987','62567','62464','62465','61775','60107','61364','61480','61367','60554','61951','62289','60501','62466','62373','60178','61482','62688','62888','62988','61283','61284','62089','62568','60082','62374','62467','62889','60968','62689','62990','61878','62890','61285','60476','62292','61833','62375','60477','61368','62468','61880','61369','61370','61567','61483','62570','61776','62571','61568','62293','62469','61371','61569','62294','61372','62991','61953','62992','60180','60969','62993','61801','62376','61373','62891','62295','61374','62471','61375','62090','62994','61955','61484','62892','60061','60479','62378','61485','62995','61956','60181','62996','61486','62690','60182','62691','60083','62572','61376','62893','62297','62091','62894','61777','61087','62573','60555','62379','60183','61570','61571','61488','62298','60556','60970','62473','60084','60079','62692','60184','62895','61778','60557','61882','60973','61377','61378','60185','62896','62475','62380','62476','62477','62478','60154','60558','62474','60559','61883','60187','62479','60090','62092','61884','62897','61489','62693','62997','62480','60480','60527','60091','60481','62093','62694','61957','60190','61088','60093','61089','60096','62094','62998','60097','60191','62095','61490','60974','62898','60517','62695','60098','61091','62097','60482','62098','61379','61491','62899','62481','61572','60560','62999'];
       const iowa_zipcodes = ['52206','50031','52140','50002','50857'];
       const indiana_zipcodes = ['46102','46910','47916','47320','46701','46001','47917','46911','46103','46011','46702','46703','46030','46704','46501','46104','46705','46912','46031','47918','46502','46706','47001','47102','46710','47420','46123','46105','46106','47006','47010','47920','47421','46107','47830','47011','47322','46711','47104','46301','47512','46713','47513','47831','47424','47832','47401','46714','46110','46302','47601','47106','47324','47921','46504','47833','47107','47514','47834','46506','47836','46720','46913','46507','47515','47922','46111','47923','47012','46112','47220','47325','47516','47326','47924','47647','47925','46914','46508','46915','47926','46916','46721','47223','47327','46113','46917','47108','47224','47519','47520','47837','47838','46032','46114','46115','47928','47016','46303','47521','47840','47330','47110','47929','47610','47111','46117','46304','47611','46723','46034','47930','47225','47129','47841','46510','46118','47426','47226','47842','46120','47427','47845','46121','46035','46725','47201','47227','47331','46919','47228','46730','47846','47112','47932','46731','47114','47522','47933','46732','47017','47229','46307','46511','46920','47612','47523','47334','47847','46122','47940','47941','46733','47524','46921','46922','46923','46310','46926','47115','47230','47525','47018','46513','47335','47527','47848','47336','47337','47231','46311','47942','46312','47019','47338','47116','47339','46124','47528','47613','47117','47232','46514','47429','47529','46036','46125','47118','46524','47531','47701','47943','47849','46126','46928','46127','47850','47340','47532','46128','46129','46038','47234','46929','47020','47119','47614','47851','46039','47648','47430','46801','46040','47341','46130','47944','46930','47946','47649','46041','46131','46044','47120','47431','47535','47235','46737','47432','47021','47536','46931','46932','46738','46401','46933','47342','46740','47537','47122','46133','46045','47948','46526','47433','46741','47236','47615','46530','47123','46935','47852','46135','46140','47345','47344','47240','46936','47124','46142','47616','46319','46971','46531','47022','46144','47346','46742','46532','46320','46340','47243','47125','46743','47853','47434','47348','47244','47617','47639','47245','47640','46341','47435','47436','46937','47126','46322','46046','47949','47854','46745','46342','46047','47541','47023','46146','47246','46746','46747','46748','47542','46750','47437','47855','47950','46280','46048','47618','47545','46147','47438','47546','47130','46938','47247','47856','46049','46755','47351','47951','46939','46759','46760','47952','46345','46346','46050','46148','47857','46534','46901','47439','46347','47249','46348','46940','46350','47135','47954','47901','46761','46941','46942','46405','46349','46943','46536','47550','47136','46763','46537','46051','46764','47024','47025','47137','46052','46538','46945','46765','47551','46355','47858','47352','47138','47353','46766','46946','46767','47552','47955','46769','47441','47139','46149','46947','47553','47354','46356','46950','47355','47619','47443','47654','46951','47250','46150','47140','47556','46952','46770','46056','47859','46151','47141','46957','47142','46154','46155','46055','47860','47957','47260','47958','47143','46539','47861','46410','47030','46958','46959','46360','46057','46540','47356','47445','47031','46542','46365','46543','47261','47145','46156','47357','46544','47446','47358','46771','47959','46772','47557','46773','46157','46960','47862','47558','47960','47962','47359','47360','47032','46158','46160','47963','47033','46161','47964','47146','47361','47620','46058','47302','46321','47147','47034','46550','47448','47262','46162','47150','46552','47362','47863','47631','46774','47864','47366','47965','47160','46163','46553','47263','47967','47968','47161','47035','47162','46961','47449','47629','47966','47969','46164','46060','47264','46366','46554','46962','46165','47265','46555','46556','46965','47660','47561','47367','47562','47036','46967','47451','46968','46063','46776','47452','46561','47037','46777','47163','47970','47564','47453','47665','47971','47164','47454','46166','47270','47368','47666','47455','47038','47865','47165','46064','47369','47974','47370','46970','47567','46778','46562','47039','47866','47975','46167','46168','47568','46779','46780','46563','47868','46781','46368','47371','47633','47869','47870','46782','47670','46170','47456','47573','47166','47373','46171','47977','47978','47980','47634','47374','47380','47871','47040','46172','46974','46783','46975','46977','47635','47872','46371','47574','46784','47981','47874','46372','46065','46978','46173','46175','46979','47575','47875','47576','46785','46373','47876','47577','47272','47381','47167','46374','47578','47579','47382','46375','46376','47580','47273','47457','47170','46067','47878','47172','47383','46980','47274','46068','47879','46377','46176','47880','46069','46565','47384','47581','46566','46982','47458','47459','46984','47683','46601','46786','46787','47460','46788','47385','47386','47462','47584','47463','46985','47982','47881','47585','46180','47464','47983','47387','46789','47882','47174','47388','46379','46070','47041','46986','46987','47465','46567','47984','47175','47280','46380','47586','47986','47637','47801','46381','46071','46570','46072','46571','46181','47588','47467','46988','46572','47177','47390','46382','46791','47468','47884','46989','46990','47281','46383','46991','47987','47590','47282','47042','47043','47591','46992','47638','46573','46182','46574','47988','46994','46390','46792','46580','47501','46793','47989','46794','47990','47392','47469','47003','47060','47906','47991','46995','46183','47885','46074','47596','47992','47283','46391','46392','47597','46393','46184','46075','46394','46186','47470','47393','47993','46996','47394','46076','47994','46590','47598','47995','46795','46796','46797','47471','46595','47997','46798','47396','46998','46799','46077'];
       const kansas_zipcodes = ['67002', '66732', '66032','66002'];
       const kentucky_zipcodes = ['42201','42202','41201','42120','40801','42602','41001','42203','41601','42204','42020','42603','42122','40402','41121','40902','42021','40903','41712','41512','40803','41101','41307','42206','41002','42123','41602','41713','40003','42711','42022','41603','40906','40004','42023','42024','42402','40104','40806','41310','41714','41311','42124','41203','41604','42320','40006','42207','42321','42322','42323','41513','41514','41073','42324','40807','42025','40403','41003','41313','42516','40007','41605','40913','41606','42712','40914','40808','40405','40915','41804','42403','41124','40810','40008','41607','42027','42713','41719','41314','41204','40107','42101','40009','40108','42715','42325','40409','42518','42209','40109','41004','42326','42210','40921','40410','41721','40010','42716','41722','41722','41517','40310','42717','41005','42028','42519','40724','41723','41006','41612','42211','42327','41007','42029','40813','41127','40011','42718','41301','41519','42720','42721','42722','41408','40923','40311','41725','41008','41128','41129','42127','40815','42724','42214','42328','42330','42215','40012','40816','41727','41410','42726','42404','40312','41317','40313','42332','40110','42216','42031','40927','40111','40818','40819','42728','42032','41729','41730','40701','41010','41731','42406','41011','40013','40419','40820','42033','40014','41030','41413','42217','41810','42333','42729','40823','42035','42334','40115','41031','40421','41615','40422','41616','42408','40824','41074','41033','41812','41214','41735','41859','40316','41132','41215','40930','42036','41736','42409','41520','41034','42128','42337','41619','41035','42731','42219','42338','42339','42528','41621','41739','42037','42410','40729','41216','41622','42732','40018','42038','42129','41419','42130','40117','42701','41037','42733','41421','41522','42220','40317','41422','41135','40019','40730','41740','40826','40931','41018','41815','40827','42131','42567','40828','41039','41425','40118','40020','42735','42221','41426','40932','40119','41040','42039','40319','42040','41524','42533','40022','41137','40023','41743','40935','41219','41139','41041','41022','40320','41526','42343','41527','42223','40121','41075','41043','42133','40939','40940','40601','42134','42411','41528','40322','41017','42041','42140','41433','40140','41817','40941','41630','41141','41745','40324','41044','41045','42044','40943','42141','41046','42740','42741','40025','40944','41819','40026','42232','42742','42344','41142','42045','40328','40734','40434','40829','41143','40946','42743','41144','42345','41631','40830','41632','40142','42234','42235','41222','40329','42150','41821','42046','42047','42413','41746','41747','42048','40143','41531','42746','40831','40144','41635','40027','40330','42347','42348','41701','42049','41332','41048','41333','40949','41534','40840','42419','42236','42151','41636','42050','42051','41049','40129','40951','41822','40953','42152','41146','42748','42153','40843','40334','42240','42349','42749','40844','41535','40145','41640','40845','42251','40437','41749','41051','41224','40955','40336','40146','42350','41338','41824','41149','41642','41444','41825','41339','41150','42629','41751','40337','41537','41826','42252','41538','41052','40440','41226','40737','40339','41053','40847','40958','42053','41539','40442','42054','41828','42753','42154','41754','42055','42056','42254','40031','41643','40444','41645','41015','40342','41228','40033','40150','41831','42058','41342','42754','40849','41344','41832','42256','42351','40502','42539','41540','40740','42257','41833','41834','42352','40445','41156','40036','40741','41347','41542','40037','41348','41230','40201','42060','41231','42061','41232','40854','42156','40855','42063','42355','40040','42431','42757','41547','41836','41451','42259','40962','42436','42758','42356','42064','42759','42631','41159','41649','40964','40751','41054','40041','42066','41837','41055','41056','41160','41543','41544','40152','41647','42354','40447','40448','40153','41835','41546','41234','40346','42069','41059','41650','42541','40965','40347','41901','42070','41061','42632','40348','41838','42761','42762','40045','41062','41651','40856','41351','40452','41352','42633','40350','40351','42437','42261','41063','42440','40046','42157','41064','42764','40353','40456','40047','41839','41548','40858','40155','42765','42071','41065','41549','42544','40048','42441','41840','40049','40754','40050','42076','40051','40052','40355','41071','40340','40357','42442','42262','42159','41238','42361','41164','42265','40358','40972','41459','40460','42301','40359','40360','42001','40461','41240','40361','42160','42634','40464','40862','40863','40157','42364','42266','40055','42365','40467','40363','40468','41080','40056','41553','42366','41554','41501','41250','42635','41360','41843','40977','41555','41844','40755','40057','41081','42444','40058','42367','41845','40366','41653','41362','42445','41655','40059','42450','42267','40865','41166','41557','40159','41558','41861','40472','40060','41847','42451','41559','40473','42638','42368','40161','41364','42270','40475','40162','41254','40979','42452','41560','42273','42274','40759','41561','42369','42163','41365','42370','42275','41366','41367','41848','41464','42371','41168','41169','42642','42276','42372','40370','40061','42453','40062','41368','40063','41170','42078','40371','40372','41465','41083','40481','41171','41759','40981','40982','42553','42164','41760','40164','42455','41849','42079','40983','42280','40374','41562','41563','40065','40165','41564','40763','41085','40067','41255','41762','40376','42456','41763','41764','42457','40068','42081','42171','41173','42501','42776','42374','41174','41175','42283','41503','41086','42458','40069','41256','41257','40379','40484','42375','40380','41659','42647','41566','40170','40868','41567','40988','41568','42649','42459','42460','40070','42166','42782','42783','42285','42082','41377','42558','40071','41660','41260','41855','41766','42083','41569','41189','42084','41262','42167','41862','40870','41663','42286','40995','40075','41263','40486','41264','41091','40171','42461','42784','42376','41265','41179','41385','41571','41092','40383','41772','41773','41386','40175','41774','41572','40385','40076','40997','41093','40873','41094','40488','40874','41267','41095','41096','42085','42786','42462','41666','40489','41180','40176','41667','42287','40387','41775','41472','42377','42086','40177','42564','41268','40077','40178','42463','41669','41390','42788','42464','41858','42378','42653','42087','40492','41181','40769','41271','41097','40078','40390','40391','42565','42088','40495','41274','40771','42170','42288','40999','41776','41183','41098','41477','41777','41778','42566','41397']
       const louisiana_zipcodes = ['70510','70420','71316','70710','71401','70421','70711','71301','70031','70340','70422','71403','70426','70712','70032','71001','71218','70512','71002','71003','71404','70513','70704','70514','71405','70036','71110','70515','71219','71220','70715','70801','70716','71004','70630','70037','70341','71406','71407','71006','71222','70342','71007','71008','71009','70717','70427','71223','70038','71320','71111','70343','70039','71409','70040','70516','70517','70718','70518','70719','70720','71322','70041','70738','70431','70519','71225','71410','70631','71411','70520','70042','70721','71016','70521','71323','70522','70043','70523','71324','70524','71226','70344','71325','71227','70525','71414','71415','71326','70722','71416','71417','71229','71418','70723','71419','71018','71327','71019','70433','70632','70526','71230','71021','70345','70725','70046','70528','71232','71233','70706','70633','70634','70030','70047','71328','71422','70346','70352','71234','71023','70637','71423','71235','71024','70353','70728','71329','70529','71025','71330','70049','71331','70531','70638','71051','71424','70532','70050','71425','71237','70533','71238','70729','70534','70730','70535','70537','70639','71333','71240','71241','70640','71334','71426','71427','71428','71429','70436','70437','70732','71242','71430','71243','70538','70438','70733','71027','70642','70354','70540','71431','70051','70734','71432','70355','71028','70356','71336','71029','71433','71030','70736','70357','71031','70707','71434','71245','70052','71032','70643','70541','70358','70644','70359','71435','70441','70739','71033','70053','70740','70542','70645','70057','71034','71339','70401','71036','71340','70058','71037','70646','71038','71039','71341','70743','71438','71247','70744','71040','71439','71043','70360','70442','71044','70443','70747','70543','70647','70748','71045','70749','70544','71342','70546','71249','71250','71251','71343','71440','70548','71046','71047','71441','70062','70444','71253','70066','70648','70371','70750','71443','70068','70372','70751','71444','70650','70445','70501','70067','70549','70601','71254','70752','70373','70550','71345','70651','71346','71446','71447','70551','70753','71348','71256','71048','70754','70755','70374','71049','71448','71050','70652','70446','70552','70756','70070','70071','70569','70447','70554','70448','71259','71052','71350','71449','70757','71260','71351','70072','71450','70375','70449','70555','71452','71353','71261','70075','70556','70653','70001','70558','71055','70654','70376','71201','70377','71354','71454','71060','71455','71355','70380','70759','71356','70559','70076','70450','70390','70451','71456','71457','71460','70560','70121','70760','70078','71357','71461','71462','70079','70761','71263','71264','71463','70655','71061','71465','70570','70762','71466','70391','71358','70080','70392','70763','70452','71063','70575','70339','70081','70453','70576','71359','71266','70656','71064','70764','70393','71362','71065','70082','71467','70454','70767','70577','70083','71066','70769','70770','71067','71468','71268','70394','70657','70578','71269','70580','70658','70084','71363','71068','70581','71469','70455','71069','70772','70456','70659','70773','71365','71270','70774','70457','70085','70775','70776','70086','71366','71367','70582','71471','70087','71070','71071','70395','70583','71072','71101','71073','71368','71472','71473','71369','71474','71275','70660','71475','70777','70458','71276','70778','71277','70462','71075','70661','71279','71280','71078','70662','70663','71079','70463','70584','70780','71281','70464','71282','70465','71080','70397','70301','70466','71477','70781','71286','71371','71479','70782','70585','70792','71480','70090','70091','70783','71481','71373','70586','70668','70092','71082','70784','70785','70589','71375','70786','70591','71291','70669','70094','70787','70788','71377','70789','71483','71295','71378','71485','70592','70791','71486' ];
       const maine_zipcodes = ['04406','04001','04606','04910','04002','04535','04216','04911','04732','04912','04210','04330','04408','04003','04694','04401','04609','04004','04653','04530','04536','04611','04915','04917','04918','04733','04612','03901','04217','04005','04006','04920','04613','04734','04614','04615','04537','04538','04287','04008','04410','04411','04551','04412','04735','04009','04539','04616','04921','04617','04413','04010','04414','04415','04011','04219','04220','04416','04417','04922','04013','04093','04619','04923','04843','04924','04221','04107','03902','04014','04925','04736','04419','04015','04420','04016','04541','04422','04017','04622','04926','04737','04019','04927','04623','04341','04624','04928','04427','04020','04423','04625','04738','04021','04110','04563','04626','04543','04424','04223','04627','04022','04628','04929','04930','04224','04932','04426','04342','04225','04222','04739','04226','04024','04629','04544','04227','04228','04630','04430','04933','04431','04028','04230','04935','04030','04234','04343','04740','04631','04428','04556','03903','04605','04741','04434','04936','04435','04937','04105','04344','04938','04940','04742','04743','04744','04438','04634','04941','04032','04635','04745','04547','04037','04345','04939','04548','04846','04038','04607','04746','04637','04039','04418','04236','04441','04442','04255','04443','04347','04444','04640','04237','04642','04942','04079','04643','04040','04943','04238','04944','04041','04429','04042','04847','04730','04448','04449','04644','04747','04645','04549','04848','04646','04945','04239','04348','04648','04649','04450','04043','04046','04349','04947','04451','03904','03905','04453','04454','04027','04455','04263','04456','04240','04949','04048','04750','04049','04457','04849','04850','04250','04252','04350','04650','04253','04254','04050','04051','04652','04654','04655','04756','04950','04351','04656','04757','04758','04759','04851','04459','04256','04657','04460','04053','04257','04658','04461','04462','04463','04258','04852','04259','04951','04464','04760','04054','04952','04660','04352','04055','04260','04554','04761','04954','04955','04762','04956','04552','04553','04056','04953','04261','04555','04957','04958','03906','04057','04853','04262','04265','04961','04266','04962','04061','04267','04097','04662','04268','04763','04963','04063','03907','04467','04064','04468','04964','04471','04472','04469','04474','04066','04665','04854','04764','04270','04354','04965','04271','04047','04475','04765','04108','04558','04666','04476','04766','04667','04290','04966','04562','04967','04969','04274','04855','04768','04068','04101','04069','04769','04668','04669','04770','04346','04970','04071','04355','04357','04671','04841','04856','04478','04564','04275','04276','04278','04280','04072','04772','04971','04773','04774','04857','04672','04972','04073','04479','04673','04070','04674','04675','04973','04974','04029','04075','04565','04481','04676','04076','04975','04775','04776','04777','04485','04779','04976','04567','04978','04780','04979','04677','03908','04568','04077','04358','04078','04359','04281','04106','04858','04081','04082','04576','04679','04487','04083','04859','04570','04782','04084','04085','04488','04680','04489','04783','04981','04231','04681','04982','04983','04664','04292','04683','04684','04685','04984','04860','04861','04986','04490','04086','04571','04987','04282','04283','04862','04988','04785','04491','04989','04360','04863','04492','04572','04781','04573','04864','04786','04574','04087','04088','04901','04284','04285','04090','04686','04091','04286','04575','04493','04992','04985','04094','04288','04095','04289','04291','04865','04690','04092','04787','04353','04691','04294','04062','04363','04495','04693','04496','04788','04364','04578','04579','04497','04096','03909','03910','03911'];
       const maryland_zipcodes = ['20606','21001','21005','21009','21520','20607','21710','21810','20762','21401','20701','20608','21012','20861','20609','21013','21240','21607','20838','20610','21521','20839','21014','20611','21017','20704','20612','21018','21811','20813','21609','21610','21711','21813','21522','21814','20710','21523','21713','21020','20715','20841','21612','21714','20613','20722','20862','20833','21022','21225','20615','21715','21716','20616','20617','21717','21718','20866','20618','21023','20818','20619','20620','21613','20731','21719','21228','21720','21913','21617','20621','21914','20622','21027','20623','20732','21915','21619','21620','20815','21721','21916','21622','21623','20733','21028','21624','20871','21029','21722','20624','20735','20625','21030','20740','21917','20626','21044','20627','21918','21918','21723','21625','21524','21626','21817','21627','21114','21032','21628','21501','21226','20872','20628','21034','21035','21036','21821','20751','21875','21629','20855','20842','20747','20629','20630','21222','20754','21919','21631','21601','21528','21822','21037','21040','21920','21075','21921','21529','21041','21727','21221','21824','21733','21047','20632','21632','21048','21634','21530','21050','21051','20755','21052','20744','21701','21053','20758','21531','21532','21826','20759','21734','20877','21635','20765','21054','21736','20896','21055','21930','20874','21056','21829','21057','21060','20812','21737','20769','21738','21071','21636','21536','21638','20634','20768','21639','21010','21207','21740','21227','21074','21750','21076','21077','20776','21078','21830','20635','21640','21080','20777','21641','20636','20637','21031','20639','21643','20781','21082','21754','20640','21644','20643','20645','21084','21755','20794','21085','21756','21645','20891','21757','21087','21538','21758','20646','21759','20703','20724','20650','20653','21762','21088','21835','21090','21764','21765','21766','21539','21092','20711','20656','21540','20657','21093','21648','21102','21836','20658','21837','21838','21104','21649','21105','21650','21767','21106','21541','21647','20659','21220','21769','21542','21543','21108','21651','21111','21770','20886','20660','21771','20712','21545','20661','21773','20662','21840','21652','21774','21775','21776','21841','20664','21653','20714','21901','21236','21550','21842','21113','21555','20830','20736','21117','21654','20745','20667','21120','21234','21849','21122','20670','21128','21902','21130','21903','21131','21208','20674','21556','21850','21851','21777','20675','20837','21904','20676','20677','20854','21852','21655','21656','20678','21853','21132','21856','21657','21658','21133','21557','21857','21136','21659','21139','20680','21660','21911','21140','20737','21661','20682','20847','21778','21779','21237','21662','21780','20684','21781','20685','20686','21663','21801','20860','20763','20687','21664','21144','21146','20764','21782','21861','21665','21862','20901','21150','21783','21863','20688','20697','21152','21219','20868','21560','21153','21666','21667','21864','21154','20897','21668','20746','20689','21561','21784','20912','20690','21787','21669','20748','21670','21788','21671','21672','21204','20779','21673','21790','21865','21866','21791','21792','21867','21156','20772','21155','20692','21869','20601','21793','21912','20880','20693','21870','21794','20778','21562','21157','21871','21872','21161','21162','20695','21160','21874','21795','21244','21675','21676','21797','21798','21163','21677','21678','21679' ];
       const massachusetts_zipcodes = ['02351','02018','01720','02743','01220','01001','02134','01913','01002','01810','02474','02475','01430','01431','01330','01721','01222','02702','01331','02703','02763','01501','02466','02322','01432','02457','01436','02630','01005','01223','01730','01007','02019','02478','02779','01224','01503','01337','01915','01821','01504','01008','01740','01009','02212','01719','01921','01505','02184','02020','02631','02324','02135','01010','02301','01506','02445','02447','02327','01338','01803','02532','01922','02138','02021','01741','02330','02534','02632','01339','02129','01507','01508','01509','02712','02633','01824','02150','01611','01225','01011','01012','02467','01013','02535','01510','02025','01340','01742','01341','02635','02637','01026','02713','01226','01923','02714','02026','01342','02638','02638','02639','02715','01516','02030','01826','01343','01571','01827','02331','02228','02333','01515','02641','02536','02717','01028','02031','02643','01029','01517','02537','02718','01438','02032','02538','02642','01027','02334','02539','02337','01344','01929','02149','02719','02720','02540','01745','01030','01518','01420','01062','02644','02035','01701','02038','01440','01833','01031','01229','01930','01032','01519','01033','01034','01230','02041','02040','01301','01450','01834','01035','02338','01936','01036','02339','01731','02341','01037','01451','02645','02646','01038','01937','01830','01039','01346','02043','01235','02343','01520','01521','01746','01040','01747','01748','01236','01452','01749','02045','02047','01050','02601','02647','02136','01151','01938','02130','01522','02364','01347','02347','01523','01237','01840','01238','01053','01524','01240','01242','01453','01054','02420','01773','01525','01460','01106','01850','01056','01462','01901','01940','02148','01526','01944','02345','02048','01945','02738','01752','02050','02051','02648','02649','02126','02739','01754','02052','02153','02053','02176','01756','02552','01860','01844','02344','01243','01949','01757','01244','01527','02054','01529','02186','02187','02055','02350','01350','01057','01351','01245','02553','01908','02554','01760','02492','02494','02740','01531','01355','02456','01951','01950','02458','02459','02461','02462','02464','02460','02495','02056','01247','01059','01845','02760','01862','01535','02355','02650','01863','02747','02764','02651','02356','01252','02556','01536','01066','02059','01537','02358','01864','02060','02652','01538','02455','01060','01532','01534','01354','02766','02061','02062','01865','02557','01068','02065','02558','01364','02653','02655','01253','01540','01069','01612','01960','02359','01463','01366','01866','01201','01070','02762','02360','02367','02559','01965','01541','02657','02169','02368','02767','02768','01867','02137','02769','02151','01254','01542','02770','02370','01966','02131','01367','01969','01368','01071','01543','02561','02562','01970','01952','01255','02563','01906','01256','02066','02771','02067','01369','01257','01370','02070','01770','01464','01545','01072','02564','02565','02725','02143','01074','02366','02659','02748','01373','02660','02375','01258','01560','01075','01982','02661','01561','01260','02662','02071','02663','02664','01073','01772','01550','01259','01077','01562','01101','01564','01467','01262','02180','02072','01775','01566','01776','01375','01590','01907','02777','02780','01468','01876','01079','01080','01983','01469','02666','01349','01879','01264','01568','01569','01718','02568','02468','01880','01081','02081','02451','01082','02571','01083','01378','02471','02479','01778','01570','02482','02481','02667','01379','01380','01984','02668','01885','01583','02379','01585','02669','01084','02573','02670','02574','01472','02671','01088','02672','02156','01586','01985','02465','02132','01089','01266','02575','01474','02576','01092','02673','01580','01085','01886','01441','02493','02790','02791','02090','02188','01093','01094','02381','01588','02382','01095','01096','01267','01887','01475','01477','01890','01270','02152','01801','02543','01784','01601','01097','01098','02093','02675'];
       const michigan_zipcodes = ['49610','49301','49220','49221','49705','49901','48701','49706','49611','49224','49612','48610','48001','49010','49227','48101','49401','48002','49805','48801','48003','49707','49902','49302','49903','48004','48103','48401','49613','48410','48005','49819','48806','49011','49709','49905','48411','48412','48703','49806','48611','48321','49012','48006','48110','48413','49303','49304','48414','49013','48807','49908','49710','49807','49101','49305','48705','48808','49014','48706','48720','49711','49614','49782','48612','49020','48809','49615','48111','49021','49306','48613','49022','49616','49910','48072','49102','49103','49911','49617','49808','49307','48415','48009','49309','48721','49310','49228','48301','49026','49618','49712','49713','49311','49402','48614','48615','49027','49619','48722','48722','48115','49106','48114','49715','49229','49312','49028','49230','48416','49912','49716','49107','49620','49029','49314','49030','48417','49717','48509','48418','49315','49601','49316','49913','49232','49317','48187','48014','48117','49812','48723','49718','48724','48811','48419','48064','48725','49318','49915','48726','49031','49621','48812','49813','49319','49719','49233','48015','49622','49032','49033','49814','49815','49720','48813','49623','49916','49816','49721','48118','48616','49320','48617','49234','48346','48815','48017','49235','48727','49034','49236','48035','48420','49035','48816','49036','48618','49038','49040','48421','48063','48619','48382','49041','49321','49237','49403','49042','49722','49817','49404','49625','49917','49918','49322','49818','48817','49043','49919','49723','48422','48818','49920','48728','49820','49405','49724','49821','48819','48350','48423','49725','48120','48125','49045','48426','48427','49238','49822','48729','49046','48201','48820','48130','48821','49921','49922','49323','49406','49047','49050','48330','49726','48428','48131','48429','48822','48054','49727','48823','49051','48730','49626','48021','49627','48827','49111','49825','49728','48229','48620','48829','49112','49628','49629','48731','49729','48830','49730','48831','48832','48022','49630','49827','48133','49829','48732','48833','49631','49925','48023','48733','48621','49632','48331','48622','49831','49408','48430','48834','48220','49409','49633','49634','48432','48134','48501','48433','48434','48059','49834','48435','49410','48835','48836','48734','49635','48025','48026','49733','49411','48623','49325','49412','49239','49415','49052','49927','48735','48436','49053','49113','49835','48135','49734','48437','49836','48736','49837','48624','49636','49416','48737','49055','49736','49737','48027','48438','49838','49326','48439','49417','49056','48837','49839','49501','49418','49327','49240','49637','49738','48738','49929','48838','48137','48138','48230','49840','49841','48440','49039','48739','48139','49419','48212','49930','49241','49115','48441','49740','48225','49638','49845','48625','48045','48740','48028','49420','49057','48353','48840','49058','49743','48030','48626','48841','49847','49744','49639','49421','49745','49060','48627','48356','48203','49746','49242','49422','48442','48842','49425','49245','49640','48628','49328','49246','49931','48629','48630','49329','48843','49747','48845','49934','49247','49426','49748','48070','48140','49642','48444','49749','49848','48141','49643','48846','49801','49935','49644','49938','49849','48847','49201','49427','49248','48032','49428','49249','49751','49061','49250','49001','49645','49646','48631','49942','48320','49062','49330','49648','49784','48445','49802','49649','48741','49752','48145','49753','49063','48848','48632','49650','49651','48633','49653','49945','48849','48359','48143','49116','48850','48366','48144','49430','49946','48907','48446','49064','49065','49654','48449','48367','49066','49655','49251','49755','49756','48450','48742','48146','48451','48634','49252','49833','48150','48743','49852','49331','49431','48157','48635','49656','48636','48851','49434','49757','49701','48042','48071','49659','48158','49660','49854','49253','49663','49664','48853','49067','49947','48039','49665','48453','49435','49855','49068','49070','48040','48854','49948','49071','48159','49666','48744','49657','49853','48852','49436','49332','48454','48122','48041','49072','49858','48637','49667','49668','48455','49861','49254','48856','49333','48640','48745','48160','48380','49759','48746','48456','48647','49950','49335','48161','49437','49255','48457','49760','49256','49336','48857','49257','49258','48043','48458','48804','48860','49761','48861','48747','49862','49259','49440','49863','49864','49261','49073','48748','49865','49762','49074','49866','48047','48164','49117','49446','48048','48165','48460','49119','49337','49868','48166','49120','49952','49262','48461','48862','48049','49670','48167','49263','49870','49075','48374','49448','48863','48237','48363','48649','49764','48805','49673','49076','49674','48749','49765','49675','49264','49265','49953','48865','48462','48750','49077','49266','49766','48463','49078','49267','48464','48866','48754','48867','48370','49955','49871','48465','49268','48870','49768','49338','49269','49079','48466','49958','49769','49449','49872','48871','49873','48872','49270','49770','48873','49774','49339','48755','48169','48650','49271','49080','49272','48069','48170','49775','48874','48340','48467','48468','48060','48469','49002','48875','49776','48876','49874','48756','49777','48651','49450','49082','49876','49877','49959','49676','49878','49451','48096','49274','48239','49677','48757','49340','49879','48652','49083','48062','48758','49275','49276','48218','48877','49084','49277','48306','49880','49341','49960','48173','49342','49779','49278','48065','48174','48653','48654','48878','48066','49452','48067','49780','49826','48470','48601','49881','48655','48079','48080','48656','49781','48879','49085','48880','48175','48176','48177','49279','49343','48471','48657','48881','49453','49783','49125','49087','49088','49454','49679','48759','49280','49883','48882','49455','49344','48883','48884','49089','49884','49961','48885','48760','48886','49885','49962','48074','48887','48472','49126','49281','49282','49680','48761','49090','48178','49963','48179','48034','48195','49886','49345','49283','49456','49284','48762','49964','48658','48888','49346','49887','48659','48310','49127','49285','49790','49091','48889','48890','49682','48473','48763','48180','49286','49092','48182','49683','49128','49093','49287','49965','49791','49792','49684','49891','48183','49967','49793','48007','49347','48765','48769','49688','49457','48766','48475','49130','49094','48387','49129','48767','48710','48315','49095','49795','48768','49096','48476','48891','49097','49892','49463','49968','49288','49458','49459','49893','48390','49796','48088','48094','48327','49797','49969','49098','49970','49348','48184','48892','48893','49894','49689','48322','48661','49460','48185','49289','48894','49895','48662','49349','48383','49099','49971','49461','48189','48190','48770','49690','48895','48191','49896','48896','48393','49799','48897','48192','48097','48197','49464'];
       
       // const numOfZipCodes = [587,229,265,617,24,403,270,57,517,629,94,270,1300,743,5,4,843,491,478,435,508,887,813,444,960,365,536,98,1,579,349,1618,764,1,8,3,383,1822,70,3,386,554,20,251,287,851,494,826,760,178];
        // [minn - 813] [813,444,960,365,536,98,1,579,349,1618,764,1,8,3,383,1822,70,3,386,554,20,251,287,851,494,826,760,178];
        const numOfZipCodes = [814];

        const getAllZipcodes = async (numOfZipCodesArr) => {
            // const usStateNames = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New-Hampshire','New-Jersey','New-Mexico','New-York','North-Carolina','North-Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode-Island','South-Carolina','South-Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West-Virginia','Wisconsin','Wyoming'];
            // ['Minnesota'] ['Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New-Hampshire','New-Jersey','New-Mexico','New-York','North-Carolina','North-Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode-Island','South-Carolina','South-Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West-Virginia','Wisconsin','Wyoming'];
            const usStateNames = ['Minnesota'];
            
            let dataObj = {}; 

            for(let i = 0; i < usStateNames.length; i++){
                await page.goto('https://zipcodes.org/'+usStateNames[i]+'-zip-codes', { timeout: 60 * 1000 });

                dataObj[usStateNames[i]] = [];

                let arrResults = await page.evaluate(({numOfZipCodesArr,i}) => {
                    let arr = []; 
                    for(let y = 1; y < numOfZipCodesArr[i]; y++){
                        let zipcode = document.querySelector('#zipList > li:nth-child('+y+') > a > div.s-val > h1').innerText;
                        arr.push(zipcode)
                    } 
                    return arr;
                },{numOfZipCodesArr,i});
                dataObj[usStateNames[i]].push(arrResults);

            };
            return dataObj;
        };

        return await getAllZipcodes(numOfZipCodes);
        // return [ await allBatteryResults(), await allExteriorResults(), await allInteriorResults(), await getSolarPanelData(), await getIncentiveTable(stateNames, allStates), await getQualificationData(), await getQualifyingUtility(), await getMobileCharging(), await getWallConnectorData() ];


    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});