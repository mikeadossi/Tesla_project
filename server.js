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

        // pageElements isn't being used yet, but will need to be utilized in future
        const pageElements = [
            'div[aria-label="Standard Range Plus"]',
            'div[aria-label="Long Range"]',
            'div[aria-label="Performance"]',
            '.battery-and-drive-specs--list',
            '.delivery-timing--date'
        ]; 

        await page.goto('https://www.tesla.com/model3/design#battery', { timeout: 60 * 1000 }); 

        const m3BatteryResults = async () => {
            await page.waitForSelector('div[aria-label="Performance"]'); 
            const result = await page.evaluate(() => {

                let m3Prices = document.querySelector('div[aria-label="Performance"]').innerText;
                let m3Specs = document.querySelector('.battery-and-drive-specs--list').innerText;
                let m3DeliveryDate = document.querySelector('.delivery-timing--date').innerText;

                return { m3Prices, m3Specs, m3DeliveryDate }

            }); 
            return result; 
        };


        const m3ExteriorResults = async () => {
            await page.waitForSelector('.packages-options--nav-item');
            await page.click('.packages-options--nav-item[arial-label="paint"]');

            let result = [];

            // get "puppeteer reference" of the elements (different from the actual DOM reference when using e.g. page.querySelector)
            const colorButtonsRefs = await page.$$('.child-group--container__PAINT .group--options_asset--container[role="button"]');

            for (let colorBtn of colorButtonsRefs) {
                
                await colorBtn.click();
                const colorPriceResult = await page.evaluate(() => {
                    const colorText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:first-child').innerText;
                    const priceText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:nth-child(2)').innerText;
                    
                    return { colorText, priceText }; 
                })

                result.push(colorPriceResult);
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
                    result.push(wheelsResult);
                } 
            }
            return result;
        }

        const m3InteriorResults = async () => {
            await page.waitForSelector('.packages-options--nav-item');
            await page.click('.packages-options--nav-item[arial-label="interior"]');

            let result = [];

            const interiorRefs = await page.$$('.child-group--container__INTERIOR .child-group--option_details .group--options_asset--container');
            for (let intBtn of interiorRefs) {
                let classNames = intBtn._remoteObject.description;

                // the if statement below removes all hidden button elements
                if(classNames.indexOf('.group--option--hidden') === -1){
                    console.log('---> ',intBtn._remoteObject.description)
                    await intBtn.click();
                    const interiorResult = await page.evaluate(() => {
                        const interiorName = document.querySelector('.child-group--container__INTERIOR .child-group--selected_option_details span:first-child').innerText;
                        const interiorPrice = document.querySelector('.child-group--container__INTERIOR .child-group--selected_option_details span:nth-child(2)').innerText;
        
                        return { interiorName, interiorPrice };
                    })
                    result.push(interiorResult);
                }
            }
            return result;
        }

        const m3FSD = async () => {
            await page.click('.packages-options--nav-item[arial-label="autopilot"]');
            const fsdPrice = await page.evaluate(() => {
                return document.querySelector('.group--options_card--checkbox--container span:nth-child(2) span span').innerText;
            });

            return fsdPrice;
        }

        return [ await m3BatteryResults(), await m3ExteriorResults(), await m3InteriorResults(), await m3FSD()];


    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});