const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();

// Navigate to the "top rated" TVs page on Amazon.com

// Once on this page, it should return an array of objects with the following keys and values from all TVs listed

// Name

// Price

// Console log the information above

// Bonus! It should take a screenshot of the page and save it in the .png format