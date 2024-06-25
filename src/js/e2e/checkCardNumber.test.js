import puppeteer from 'puppeteer';


describe('check card number', () => {
    let browser;
    let page;

    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });

        page = await browser.newPage();
    });

    test('Form input should add .valid class if card number is valid', async () => {
await page.goto('http://localhost:9000');

await page.waitForSelector('.card-form-widget');

const form = await page.$('.card-form-widget');
const input = await form.$('.input');
const submit = await form.$('.submit');
await input.type('4111 1111 1111 1111');
await submit.click();
await page.waitForSelector('.card-form-widget .input.valid');
    });

    test('Form input should add .invalid class if card number is invalid', async () => {
        await page.goto('http://localhost:9000');
        
        await page.waitForSelector('.card-form-widget');
        
        const form = await page.$('.card-form-widget');
        const input = await form.$('.input');
        const submit = await form.$('.submit');
        await input.type('3012 1868 6445 5876');
        await submit.click();
        await page.waitForSelector('.card-form-widget .input.invalid');
            });

    afterEach(async () => {
        await browser.close();
    });
});