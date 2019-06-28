const puppeteer = require('puppeteer');
const { generateText, checkAndGenerate } = require('./util');

/** Unit tests */
// 1. Tests regular behavior cases ( double check )
test('should output name and age', () => {
    const text = generateText('Laureline', 26);
    expect(text).toBe('Laureline (26 years old)');

    const text2 = generateText('Nova', 3);
    expect(text2).toBe('Nova (3 years old)');
});

// 2. Tests with empty-data case
test('should output data-less text', () => {
    const text = generateText('', null);
    expect( text ).toBe(' (null years old)');
})

// 3. Tests with no arguments
test('should output undefined-value text', () => {
    const text = generateText();
    expect( text ).toBe('undefined (undefined years old)');
})




/** Integration tests */
/* NB: even though it looks like our first unit test
 this is however a different one as checkAndGenerate
 is a dependency to "addUser" */
test('should generate a valid text output', () => {
    const text = checkAndGenerate('Laureline', 26);
    expect(text).toBe('Laureline (26 years old)');

})

/** End to End tests */
/**
 * Check your interface experience and how it behave
 * using Puppeteer tool: a Node library to control browser w/ devTool
 * */

test('should fullfil inputs and generate a li outputing name & age', async () => {
    const localURL = 'file:///Users/lowla/desktop/DEV/JAVASCRIPT/TESTS/javascript-testing-processes/index.html';
    const config = {
        headless: false,
        slowMo : 30,
        args : ['--window-sie=1920, 1080']

    }
    const browser = await puppeteer.launch( config) ;
    const page = await browser.newPage();

    await page.goto( localURL );

    const inputName = 'input#name';
    const inputAge = 'input#age';
    const btnAddUser = 'button#btnAddUser';

    await page.click(inputName);
    await page.type(inputName,'Laureline');
    console.log('[ ✅  NAME ]');

    await page.click(inputAge);
    await page.type(inputAge,'26');
    console.log('[ ✅  AGE ]');

    await page.click(btnAddUser);
    console.log('[ ✅  ADD USER ]');

    const userItem = await page.$eval( '.user-item', el => el.textContent );
    expect( userItem ).toBe('Laureline (26 years old)');
    console.log('[ ✅  USER ITEM ]');


}, 10000 );
/** 
 * NB: sometimes your assertion, test could last more than the 
 * default jest testing time value ( 5000 ) and outputing an timeout error.
 * We could handle it by increasing by passing a second parameter ( === 10000 )
*/