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

            const solarEditBtn = await page.$('div.solarFinanceOptionContainer > div:nth-child(2) > div > div > div > div > div:nth-child(2) > button > span');
            await solarEditBtn.click();

            await page.waitForSelector('.powerwallModalContentContainer');
            await page.waitFor(3000);

            const kWButtons = ['sss_4.08 kW', 'sss_8.16 kW', 'sss_12.24 kW', 'sss_16.32 kW'];
            const kWScrapedData = []; 
            
            let i = 0;
            for (let elem of kWButtons) {
                let btn = await page.$('button[id="'+elem+'"]');
                await btn.click(); 
                const result = await page.evaluate((elem) => { 
                    let dailyProduction = document.querySelector('#app > div > div:nth-child(3) > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(3) > div > div > p').innerText;
                    let cost = document.querySelector('#app > div > div:nth-child(3)  > div > div > div:nth-child(2) > div:nth-child(2)  > div > div > div:nth-child(3) > div:nth-child(2) > span').innerText;
                    return {dailyProduction, cost}
                });

                kWScrapedData[i] = result;
                kWScrapedData[i].type = elem;
                i++;
            }
            
            return kWScrapedData;
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


// obj[2][1].description

// {
//   _disposed: false,
//   _context:
//    ExecutionContext {
//      _client:
//       CDPSession {
//         eventsMap: [Map],
//         emitter: [Object],
//         _callbacks: Map {},
//         _connection: [Connection],
//         _targetType: 'page',
//         _sessionId: '8097578F49941C4E723731355205CF67' },
//      _world:
//       DOMWorld {
//         _documentPromise: [Promise],
//         _contextPromise: [Promise],
//         _contextResolveCallback: null,
//         _detached: false,
//         _waitTasks: Set {},
//         _frameManager: [FrameManager],
//         _frame: [Frame],
//         _timeoutSettings: [TimeoutSettings] },
//      _contextId: 6 },
//   _client:
//    CDPSession {
//      eventsMap:
//       Map {
//         'Fetch.requestPaused' => [Array],
//         'Fetch.authRequired' => [Array],
//         'Network.requestWillBeSent' => [Array],
//         'Network.requestServedFromCache' => [Array],
//         'Network.responseReceived' => [Array],
//         'Network.loadingFinished' => [Array],
//         'Network.loadingFailed' => [Array],
//         'Page.frameAttached' => [Array],
//         'Page.frameNavigated' => [Array],
//         'Page.navigatedWithinDocument' => [Array],
//         'Page.frameDetached' => [Array],
//         'Page.frameStoppedLoading' => [Array],
//         'Runtime.executionContextCreated' => [Array],
//         'Runtime.executionContextDestroyed' => [Array],
//         'Runtime.executionContextsCleared' => [Array],
//         'Page.lifecycleEvent' => [Array],
//         'Target.attachedToTarget' => [Array],
//         'Target.detachedFromTarget' => [Array],
//         'Page.domContentEventFired' => [Array],
//         'Page.loadEventFired' => [Array],
//         'Runtime.consoleAPICalled' => [Array],
//         'Runtime.bindingCalled' => [Array],
//         'Page.javascriptDialogOpening' => [Array],
//         'Runtime.exceptionThrown' => [Array],
//         'Inspector.targetCrashed' => [Array],
//         'Performance.metrics' => [Array],
//         'Log.entryAdded' => [Array],
//         'Page.fileChooserOpened' => [Array],
//         Symbol(CDPSession.Disconnected) => [] },
//      emitter:
//       { on: [Function: on],
//         off: [Function: off],
//         emit: [Function: emit] },
//      _callbacks: Map {},
//      _connection:
//       Connection {
//         eventsMap: [Map],
//         emitter: [Object],
//         _lastId: 72,
//         _sessions: [Map],
//         _closed: false,
//         _callbacks: Map {},
//         _url:
//          'ws://127.0.0.1:56271/devtools/browser/fa3d36cf-39ed-4384-810a-dfe7a33630ae',
//         _delay: 0,
//         _transport: [WebSocketTransport] },
//      _targetType: 'page',
//      _sessionId: '8097578F49941C4E723731355205CF67' },
//   _remoteObject:
//    { type: 'object',
//      subtype: 'node',
//      className: 'HTMLDivElement',
//      description: 'div._2ggg8Cm8PLwkUEDki0Zmjy',
//      objectId: '{"injectedScriptId":6,"id":9}' },
//   _page:
//    Page {
//      eventsMap: Map {},
//      emitter:
//       { on: [Function: on],
//         off: [Function: off],
//         emit: [Function: emit] },
//      _closed: false,
//      _timeoutSettings:
//       TimeoutSettings { _defaultTimeout: null, _defaultNavigationTimeout: null },
//      _pageBindings: Map {},
//      _javascriptEnabled: true,
//      _workers: Map {},
//      _fileChooserInterceptors: Set {},
//      _client:
//       CDPSession {
//         eventsMap: [Map],
//         emitter: [Object],
//         _callbacks: Map {},
//         _connection: [Connection],
//         _targetType: 'page',
//         _sessionId: '8097578F49941C4E723731355205CF67' },
//      _target:
//       Target {
//         _targetInfo: [Object],
//         _browserContext: [BrowserContext],
//         _targetId: '1CD2DD9A3054349AA7A64E869E19362A',
//         _sessionFactory: [Function],
//         _ignoreHTTPSErrors: false,
//         _defaultViewport: [Object],
//         _pagePromise: [Promise],
//         _workerPromise: null,
//         _initializedCallback: [Function],
//         _initializedPromise: [Promise],
//         _closedCallback: [Function],
//         _isClosedPromise: [Promise],
//         _isInitialized: true },
//      _keyboard:
//       Keyboard { _modifiers: 0, _pressedKeys: Set {}, _client: [CDPSession] },
//      _mouse:
//       Mouse {
//         _x: 1569.6875,
//         _y: 370,
//         _button: 'none',
//         _client: [CDPSession],
//         _keyboard: [Keyboard] },
//      _touchscreen: Touchscreen { _client: [CDPSession], _keyboard: [Keyboard] },
//      _accessibility: Accessibility { _client: [CDPSession] },
//      _frameManager:
//       FrameManager {
//         eventsMap: [Map],
//         emitter: [Object],
//         _frames: [Map],
//         _contextIdToContext: [Map],
//         _isolatedWorlds: [Set],
//         _client: [CDPSession],
//         _page: [Circular],
//         _networkManager: [NetworkManager],
//         _timeoutSettings: [TimeoutSettings],
//         _mainFrame: [Frame] },
//      _emulationManager:
//       EmulationManager {
//         _emulatingMobile: false,
//         _hasTouch: false,
//         _client: [CDPSession] },
//      _tracing:
//       Tracing { _recording: false, _path: '', _client: [CDPSession] },
//      _coverage:
//       Coverage { _jsCoverage: [JSCoverage], _cssCoverage: [CSSCoverage] },
//      _screenshotTaskQueue: ScreenshotTaskQueue { _chain: [Promise] },
//      _viewport: { width: 1920, height: 1080 } },
//   _frameManager:
//    FrameManager {
//      eventsMap:
//       Map {
//         Symbol(FrameManager.FrameAttached) => [Array],
//         Symbol(FrameManager.FrameDetached) => [Array],
//         Symbol(FrameManager.FrameNavigated) => [Array],
//         Symbol(FrameManager.LifecycleEvent) => [],
//         Symbol(FrameManager.FrameNavigatedWithinDocument) => [] },
//      emitter:
//       { on: [Function: on],
//         off: [Function: off],
//         emit: [Function: emit] },
//      _frames:
//       Map {
//         '1CD2DD9A3054349AA7A64E869E19362A' => [Frame],
//         '13987E87BFB26CE625CAD863600DD5FC' => [Frame],
//         '592FFBA378B002C851AB08EEB197260E' => [Frame],
//         '0C39AEF9AA6A15504007ACA90F038E07' => [Frame],
//         '1467E01A6F36E4762A5150BE2433C360' => [Frame],
//         '34214F6ED29CCCDCD89FD4E493428D23' => [Frame],
//         'C9BD4537ED5F7C3F3DCAE4137B6B100B' => [Frame] },
//      _contextIdToContext:
//       Map {
//         6 => [ExecutionContext],
//         7 => [ExecutionContext],
//         8 => [ExecutionContext],
//         9 => [ExecutionContext],
//         10 => [ExecutionContext],
//         11 => [ExecutionContext],
//         14 => [ExecutionContext],
//         15 => [ExecutionContext],
//         16 => [ExecutionContext],
//         17 => [ExecutionContext],
//         18 => [ExecutionContext],
//         19 => [ExecutionContext] },
//      _isolatedWorlds: Set { '__puppeteer_utility_world__' },
//      _client:
//       CDPSession {
//         eventsMap: [Map],
//         emitter: [Object],
//         _callbacks: Map {},
//         _connection: [Connection],
//         _targetType: 'page',
//         _sessionId: '8097578F49941C4E723731355205CF67' },
//      _page:
//       Page {
//         eventsMap: Map {},
//         emitter: [Object],
//         _closed: false,
//         _timeoutSettings: [TimeoutSettings],
//         _pageBindings: Map {},
//         _javascriptEnabled: true,
//         _workers: Map {},
//         _fileChooserInterceptors: Set {},
//         _client: [CDPSession],
//         _target: [Target],
//         _keyboard: [Keyboard],
//         _mouse: [Mouse],
//         _touchscreen: [Touchscreen],
//         _accessibility: [Accessibility],
//         _frameManager: [Circular],
//         _emulationManager: [EmulationManager],
//         _tracing: [Tracing],
//         _coverage: [Coverage],
//         _screenshotTaskQueue: [ScreenshotTaskQueue],
//         _viewport: [Object] },
//      _networkManager:
//       NetworkManager {
//         eventsMap: [Map],
//         emitter: [Object],
//         _requestIdToRequest: Map {},
//         _requestIdToRequestWillBeSentEvent: Map {},
//         _extraHTTPHeaders: {},
//         _offline: false,
//         _credentials: null,
//         _attemptedAuthentications: Set {},
//         _userRequestInterceptionEnabled: false,
//         _protocolRequestInterceptionEnabled: false,
//         _userCacheDisabled: false,
//         _requestIdToInterceptionId: Map {},
//         _client: [CDPSession],
//         _ignoreHTTPSErrors: false,
//         _frameManager: [Circular] },
//      _timeoutSettings:
//       TimeoutSettings { _defaultTimeout: null, _defaultNavigationTimeout: null },
//      _mainFrame:
//       Frame {
//         _url:
//          'https://www.tesla.com/energy/design?v1c9dL&utm_expid=.740mCuf0SjKPYZltszx0FA.1&utm_referrer=',
//         _detached: false,
//         _loaderId: '7AFA724627721923A8B72C96258790EF',
//         _lifecycleEvents: [Set],
//         _frameManager: [Circular],
//         _parentFrame: null,
//         _id: '1CD2DD9A3054349AA7A64E869E19362A',
//         _mainWorld: [DOMWorld],
//         _secondaryWorld: [DOMWorld],
//         _childFrames: [Set],
//         _name: undefined } } }