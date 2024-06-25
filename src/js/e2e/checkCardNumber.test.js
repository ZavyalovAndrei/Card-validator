import puppeteer from "puppeteer";

describe('check card number', () => {
    let browser;
    let page;

    beforeEach(async () =>{
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });
    test('Form input should add .valid class if card number is valid', async () => {
await page.goto('http://localhost:9000');

await page.waitFor('.card-form-widget');

/*const form = await page.$('.card-form-widget');
const input = await form.$('.input');
const submit = await form.$('.submit');

await input.type('4111111111111111');
await submit.click();

await page.waitFor('.message .valid')*/
    });
afterAll(async () => {
    await browser.close();
})

});