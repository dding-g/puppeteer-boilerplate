const puppeteer = require("puppeteer");
const path = require("path");
const { loginAndSaveCookie } = require("./action/login");

global.COOKIE_FILE_PATH = path.join(__dirname, "cookie.json");
const TEST_URL = "https://example/sample";
const LOGIN_URL = "https://example/login";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await loginAndSaveCookie(page, LOGIN_URL);

  await page.goto(TEST_URL, {
    waitUntil: "networkidle0",
  });

  await page.screenshot({
    path: "screenshot.jpg",
  });

  await browser.close();
};

main();
