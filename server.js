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

        const pageElements = [
            'div[aria-label="Standard Range Plus"]',
            'div[aria-label="Long Range"]',
            'div[aria-label="Performance"]',
            '.battery-and-drive-specs--list',
            '.delivery-timing--date'
        ]; 

        await page.goto('https://www.tesla.com/model3/design#battery', { timeout: 60 * 1000 }); 
        await page.waitForSelector('div[aria-label="Performance"]');

        const result = await page.evaluate(() => {  
            
            let articles = {};

            let prices = document.querySelector('div[aria-label="Performance"]').innerText;

            if (prices.length > 0) { 
                articles.price = prices
            }

            let specs = document.querySelector('.battery-and-drive-specs--list').innerText;

            if (specs.length > 0) { 
                articles.specs = specs
            }

            let deliveryDate = document.querySelector('.delivery-timing--date').innerText;

            if (deliveryDate.length > 0) { 
                articles.deliveryDate = deliveryDate
            }

            return {
                articles
            }

        });

        return result;

    } catch (err) {
        console.log(err)
    } finally {
        browser.close();
    }

};

scrape().then((value) => {
    console.log(value);
});