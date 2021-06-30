const puppeteer = require("puppeteer");

const url = "https://www.amazon.com/";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // navigating to amazon's homepage
  await page.goto(url);

  // clicking "best sellers" in primary nav
  await page.waitForSelector("div#nav-xshop");
  await page.click(
    'a[data-csa-c-content-id="nav_cs_bestsellers_8a080d3d7b55497ea1bdd97b7cff8b7b"]'
  );

  // clicking "electronics" in side nav
  await page.waitForSelector("ul#zg_browseRoot");
  await page.click(
    'ul#zg_browseRoot a[href="https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/ref=zg_bs_nav_0"]'
  );

  // clicking "Televisions & Video" in side nav
  await page.waitForSelector("ul#zg_browseRoot");
  await page.click(
    'ul#zg_browseRoot a[href="https://www.amazon.com/Best-Sellers-Electronics-Televisions-Video-Products/zgbs/electronics/1266092011/ref=zg_bs_nav_e_1_e"]'
  );

  // clicking "Televisions" in side nav
  await page.waitForSelector("ul#zg_browseRoot");
  await page.click(
    'ul#zg_browseRoot a[href="https://www.amazon.com/Best-Sellers-Electronics-Televisions/zgbs/electronics/172659/ref=zg_bs_nav_e_2_1266092011"]'
  );

  await page.waitForSelector("ol#zg-ordered-list", { visible: true });

  //   const names = await page.$$eval(".p13n-sc-truncated", elements => elements.map(item => item.innerHTML));
  //   console.log(names);

  //   const prices = await page.$$eval(".p13n-sc-price", elements => elements.map(item => item.innerHTML));
  //   console.log(prices);

  // taking screenshot of best sellers in televisions
  await page.screenshot({ path: "televisions.png", fullPage: true });

  await browser.close();
})();

// Navigate to the "top rated" TVs page on Amazon.com

// Once on this page, it should return an array of objects with the following keys and values from all TVs listed

// Name

// Price

// Console log the information above

// Bonus! It should take a screenshot of the page and save it in the .png format
