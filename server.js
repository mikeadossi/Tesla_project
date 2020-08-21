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

            // get "puppeteer reference" of the elements (different from the actual DOM reference when using e.g. page.querySelector)
            const colorButtonsRefs = await page.$$('.child-group--container__PAINT .group--options_asset--container[role="button"]');
            let result = [];
            for (let colorBtn of colorButtonsRefs) {
                
                await colorBtn.click();
                const colorPriceResult = await page.evaluate(() => {
                    const colorText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:first-child').innerText;
                    const priceText = document.querySelector('.child-group--container__PAINT .child-group--selected_option_details span:nth-child(2)').innerText;
                    
                    return { colorText, priceText }; 
                })
                
                result.push(colorPriceResult);
    
            }
            return result;
        }

        return [await m3BatteryResults(), await m3ExteriorResults()];


    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});