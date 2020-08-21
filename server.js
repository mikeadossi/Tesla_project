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

        const pageElements = [
            'div[aria-label="Standard Range Plus"]',
            'div[aria-label="Long Range"]',
            'div[aria-label="Performance"]'
        ]; 

        await page.goto('https://www.tesla.com/model3/design#battery', { timeout: 60 * 1000 }); 
        await page.waitForSelector('div[aria-label="Performance"]');

        const result = await page.evaluate(() => {
            // let prices = document.querySelector(pageElements.model3SR).innerText;
            // let prices = document.querySelector(pageElements.model3LR).innerText;
            let prices = document.querySelector('div[aria-label="Performance"]').innerText;
            
            let articles = {};

            if (prices.length > 0) { 
                articles.price = prices
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