const fs = require("fs");

const saveCurrentCookie = async (page) => {
  const cookiesObject = await page.cookies();

  fs.writeFile(
    global.COOKIE_FILE_PATH,
    JSON.stringify(cookiesObject),
    function (err) {
      if (err) {
        console.log("The file could not be written.", err);
      }
      console.log("Session has been successfully saved");
    }
  );
};

module.exports = {
  saveCurrentCookie,
};
