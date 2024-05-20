const fs = require("fs");

const loadPrevCookie = async (page) => {
  const previousSession = fs.existsSync(global.COOKIE_FILE_PATH);

  if (previousSession) {
    // If file exist load the cookies
    const cookiesString = fs.readFileSync(global.COOKIE_FILE_PATH);
    const parsedCookies = JSON.parse(cookiesString);

    if (parsedCookies.length !== 0) {
      for (let cookie of parsedCookies) {
        await page.setCookie(cookie);
      }
      console.log("Session has been loaded in the browser");
    }
  }
};

module.exports = {
  loadPrevCookie,
};
