const puppeteer = require('puppeteer');
require('dotenv').config({ path: __dirname + '/.env' });
const mysql = require('mysql');

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
                            let m3Prices = arr[0];
                            let m3Specs = document.querySelector('.battery-and-drive-specs--list').innerText;
                            let m3DeliveryDate = document.querySelector('.delivery-timing--date').innerText;
            
                            return { m3Prices, m3Specs, m3DeliveryDate }
            
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
            return store;
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


        return [ await allBatteryResults(), await allExteriorResults(), await allInteriorResults(), await m3FSD(), await mSBatteryResults(), await getSolarPanelData(), await getIncentiveTable(stateNames, allStates), await getQualificationData(), await getQualifyingUtility(), await getMobileCharging(), await getWallConnectorData(), await getWallConnectorData() ];
        

    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});