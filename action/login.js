const { saveCurrentCookie } = require("../cookie/saveCurrentCookie");

const loginAndSaveCookie = async (page, loginUrl) => {
  await page.goto(loginUrl, {
    waitUntil: "networkidle0",
  });

  await page.$eval("input[name=email]", (el) => (el.value = "test@naver.com"));
  await page.$eval("input[name=password]", (el) => (el.value = "1234"));
  await page.screenshot({
    path: "screenshot.jpeg",
    quality: 100,
    fullPage: true,
    type: "jpeg",
  });

  await page.click('button[type="submit"]');

  await saveCurrentCookie(page);
};

module.exports = {
  loginAndSaveCookie,
};
