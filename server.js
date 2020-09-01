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

        const allStates = {
            AL: {vehicleSalesTax: 0.02, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Montgomery', randomZipcode: '36104', stateName: 'Alaska', allowsSolarPanels: null , allowsSolarRoof: null }, 
            AK: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Juneau', randomZipcode: '99801', stateName: 'Alabama', allowsSolarPanels: null , allowsSolarRoof: null },
            AZ: {vehicleSalesTax: 0.056, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Pheonix', randomZipcode: '85001', stateName: 'Arizona', allowsSolarPanels: null , allowsSolarRoof: null },
            AR: {vehicleSalesTax: 0.065, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Little Rock', randomZipcode: '72201', stateName: 'Arkansas', allowsSolarPanels: null , allowsSolarRoof: null },
            CA: {vehicleSalesTax: 0.075, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Sacramento', randomZipcode: '95814', stateName: 'California', allowsSolarPanels: null , allowsSolarRoof: null },
            CO: {vehicleSalesTax: 0.029, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Denver', randomZipcode: '80202', stateName: 'Colorado', allowsSolarPanels: null , allowsSolarRoof: null },
            CT: {vehicleSalesTax: 0.0775, solarSubscription: true, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Hartford', randomZipcode: '06103', stateName: 'Connecticut', allowsSolarPanels: null , allowsSolarRoof: null },
            DE: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Dover', randomZipcode: '19901', stateName: 'Delaware', allowsSolarPanels: null , allowsSolarRoof: null },
            FL: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Tallahassee', randomZipcode: '32301', stateName: 'Florida', allowsSolarPanels: null , allowsSolarRoof: null },
            GA: {vehicleSalesTax: 0.066, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Atlanta', randomZipcode: '30303', stateName: 'Georgia', allowsSolarPanels: null , allowsSolarRoof: null },
            HI: {vehicleSalesTax: 0.047, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Honolulu', randomZipcode: '96813', stateName: 'Hawaii', allowsSolarPanels: null , allowsSolarRoof: null },
            ID: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Boise', randomZipcode: '83702', stateName: 'Idaho', allowsSolarPanels: null , allowsSolarRoof: null },
            IL: {vehicleSalesTax: 0.0625, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Springfield', randomZipcode: '62701', stateName: 'Illinois', allowsSolarPanels: null , allowsSolarRoof: null },
            IN: {vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Indianapolis', randomZipcode: '46225', stateName: 'Indiana', allowsSolarPanels: null , allowsSolarRoof: null },
            IA: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Des Moines', randomZipcode: '50309', stateName: 'Iowa', allowsSolarPanels: null , allowsSolarRoof: null },
            KS: {vehicleSalesTax: 0.075, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Topeka', randomZipcode: '66603', stateName: 'Kansas', allowsSolarPanels: null , allowsSolarRoof: null },
            KY: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Frankfort', randomZipcode: '40601', stateName: 'Kentucky', allowsSolarPanels: null , allowsSolarRoof: null },
            LA: {vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Baton Rouge', randomZipcode: '70802', stateName: 'Louisiana', allowsSolarPanels: null , allowsSolarRoof: null },
            ME: {vehicleSalesTax: 0.055, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Augusta', randomZipcode: '04330', stateName: 'Maine', allowsSolarPanels: null , allowsSolarRoof: null },
            MD: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Annapolis', randomZipcode: '21401', stateName: 'Maryland', allowsSolarPanels: null , allowsSolarRoof: null },
            MA: {vehicleSalesTax: 0.0625, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Boston', randomZipcode: '02201', stateName: 'Massachusetts', allowsSolarPanels: null , allowsSolarRoof: null },
            MI: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Lansing', randomZipcode: '48933', stateName: 'Michigan', allowsSolarPanels: null , allowsSolarRoof: null },
            MN: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'St. Paul', randomZipcode: '55102', stateName: 'Minnesota', allowsSolarPanels: null , allowsSolarRoof: null },
            MS: {vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Jackson', randomZipcode: '39205', stateName: 'Mississippi', allowsSolarPanels: null , allowsSolarRoof: null },
            MO: {vehicleSalesTax: 0.04225, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Jefferson City', randomZipcode: '65101', stateName: 'Missouri', allowsSolarPanels: null , allowsSolarRoof: null },
            MT: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Helena', randomZipcode: '59623', stateName: 'Montana', allowsSolarPanels: null , allowsSolarRoof: null },
            NE: {vehicleSalesTax: 0.055, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Lincoln', randomZipcode: '68502', stateName: 'Nebraska', allowsSolarPanels: null , allowsSolarRoof: null },
            NV: {vehicleSalesTax: 0.081, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Carson City', randomZipcode: '89701', stateName: 'Nevada', allowsSolarPanels: null , allowsSolarRoof: null },
            NH: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Concord', randomZipcode: '03301', stateName: 'New_Hampshire', allowsSolarPanels: null , allowsSolarRoof: null },
            NJ: {vehicleSalesTax: 0.06625, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Trenton', randomZipcode: '08608', stateName: 'New_Jersey', allowsSolarPanels: null , allowsSolarRoof: null },
            NM: {vehicleSalesTax: 0.04, solarSubscription: true, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Santa Fe', randomZipcode: '87501', stateName: 'New_Mexico', allowsSolarPanels: null , allowsSolarRoof: null },
            NY: {vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Albany', randomZipcode: '12207', stateName: 'New_York', allowsSolarPanels: null , allowsSolarRoof: null },
            NC: {vehicleSalesTax: 0.03, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Raleigh', randomZipcode: '27601', stateName: 'North_Carolina', allowsSolarPanels: null , allowsSolarRoof: null },
            ND: {vehicleSalesTax: 'N/A', solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Bismarck', randomZipcode: '58501', stateName: 'North_Dakaota', allowsSolarPanels: null , allowsSolarRoof: null },
            OH: {vehicleSalesTax: 0.0575, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Columbus', randomZipcode: '43215', stateName: 'Ohio', allowsSolarPanels: null , allowsSolarRoof: null },
            OK: {vehicleSalesTax: 0.0125, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Oklahoma City', randomZipcode: '73102', stateName: 'Oklahoma', allowsSolarPanels: null , allowsSolarRoof: null },
            OR: {vehicleSalesTax: 0.005, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Salem', randomZipcode: '97301', stateName: 'Oregon', allowsSolarPanels: null , allowsSolarRoof: null },
            PA: {vehicleSalesTax: 0.08, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Harrisburg', randomZipcode: '17101', stateName: 'Pensylvania', allowsSolarPanels: null , allowsSolarRoof: null },
            RI: {vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Providence', randomZipcode: '02903', stateName: 'Rhode_Island', allowsSolarPanels: null , allowsSolarRoof: null },
            SC: {vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Columbia', randomZipcode: '29217', stateName: 'South_Carolina', allowsSolarPanels: null , allowsSolarRoof: null },
            SD: {vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Pierre', randomZipcode: '57501', stateName: 'South_Dakota', allowsSolarPanels: null , allowsSolarRoof: null },
            TN: {vehicleSalesTax: 0.07, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Nashville', randomZipcode: '78701', stateName: 'Tennessee', allowsSolarPanels: null , allowsSolarRoof: null },
            TX: {vehicleSalesTax: 0.0625, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Austin', randomZipcode: '84111', stateName: 'Texas', allowsSolarPanels: null , allowsSolarRoof: null },
            UT: {vehicleSalesTax: 0.0685, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Salt Lake City', randomZipcode: '05602', stateName: 'Utah', allowsSolarPanels: null , allowsSolarRoof: null },
            VT: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Montpelier', randomZipcode: '23219', stateName: 'Vermont', allowsSolarPanels: null , allowsSolarRoof: null },
            VA: {vehicleSalesTax: 0.0415, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Richmond', randomZipcode: '98507', stateName: 'Virginia', allowsSolarPanels: null , allowsSolarRoof: null },
            WA: {vehicleSalesTax: 0.035, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: true, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Olympia', randomZipcode: '98507', stateName: 'Washington', allowsSolarPanels: null , allowsSolarRoof: null },
            WV: {vehicleSalesTax: 0.06, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Charleston', randomZipcode: '25301', stateName: 'West_Virginia', allowsSolarPanels: null , allowsSolarRoof: null },
            WI: {vehicleSalesTax: 0.05, solarSubscription: false, solarSubUtility: [], leasingAvailable: false, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Madison', randomZipcode: '53703', stateName: 'Wisconsin', allowsSolarPanels: null , allowsSolarRoof: null },
            WY: {vehicleSalesTax: 0.04, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Cheyenne', randomZipcode: '82001', stateName: 'Wyoming', allowsSolarPanels: null , allowsSolarRoof: null },
            DC: {vehicleSalesTax: 0.08, solarSubscription: false, solarSubUtility: [], leasingAvailable: true, financingAvailable: false, solarIncentivesTxt: [], solarSavings: {}, vehicleIncentives: [], capitalCity: 'Washington', randomZipcode: '20001', stateName: 'District_of_Columbia', allowsSolarPanels: null , allowsSolarRoof: null },
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


        return [ await allBatteryResults(), await allExteriorResults(), await allInteriorResults(), await m3FSD(), await mSBatteryResults(), await getIncentiveTable(), await getSolarPanelData(), await getIncentiveTable(stateNames, allStates) ];


    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});