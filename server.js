const puppeteer = require('puppeteer');
require('dotenv').config({ path: __dirname + '/.env' });
const mysql = require('mysql');

let scrape = async () => { 

    let browser;
    try {

        browser = await puppeteer.launch({
            headless: false, args: [
                '--window-size=1920,1080',
            ]
        });

        const page = await browser.newPage();
        page.setViewport({ width: 1920, height: 1080 });


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

        const getIncentiveTable = async () => {
            const tableSelector = '.table-ev-energy.hide-on-mobile';
            await page.goto('https://www.tesla.com/support/incentives', { timeout: 60 * 1000 }); 
            await page.waitForSelector(tableSelector); 
            const tableHandle = await page.$(tableSelector);
            
            const result = await page.evaluate((table) => {
                let rows = table.tBodies[0].rows; 
                return table.tBodies[0].rows[1].cells[2].innerText;
            }, tableHandle);
            
            console.log('----> ',result);
        };

        const getSolarData = async () => {
            await page.goto('https://www.tesla.com/energy/design');
            const addressInputSelector = "input[id='unified-initial-questions-autocomplete']";
            await page.type(addressInputSelector, '90210', {delay: 500});
            await page.waitFor(3000);
            await page.keyboard.press('ArrowDown');
            await page.waitFor(1500);
            await page.keyboard.press('Enter');
            await page.waitFor(1500);

            await page.type('input[id="utilityBill"]', '100', {delay:300});
            await page.waitFor(3000);

            const recommendationBtn = await page.$('button[data-test="see-recommendations"]');
            await recommendationBtn.click();

            await page.waitForSelector('.solarFinanceOptionContainer');
            await page.waitFor(3000);
            
            // create solarPanelData and store 'due today'and price after incentives
            const solarPanelData = []; 

            const solarPanelEditDiv = 'div.solarFinanceOptionContainer > div:nth-child(2) > div > div > div > div ';

            const frontPageData = await page.evaluate(() => {
                const dueToday = document.querySelector("#rightContent > div > div > div._18Jg3KHvvT1reIst4LmW2K > div._3r6-880XdFqwVZ-r8uZJ3_ > div > div > div:nth-child(2) > span").innerText;
                const priceAfterIncentives = document.querySelector('div.solarFinanceOptionContainer > div:nth-child(2) > div > div > div > div > div > div:nth-child(3) > button > p').innerText; 
                return {dueToday, priceAfterIncentives};
            })
            
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
                

                // solarPanelData[i] = sPGuideData
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


        return [ await allBatteryResults(), await allExteriorResults(), await allInteriorResults(), await m3FSD(), await mSBatteryResults(), await getIncentiveTable(), await getSolarData() ];

    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});