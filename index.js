/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2021-11-24 11:47:12 pm
 * Last Modified: 2021-11-27 11:05:35 pm
 * Description: 使用selenium浏览器自动化
 */
const fs = require("fs");
const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
let opts = new chrome.Options();

(async function auto() {
  // const driver = new Builder().forBrowser("chrome").build();
  let driver = new Builder()
    .forBrowser("chrome")
    .setChromeOptions(opts.headless())
    .build();
  try {
    await driver.get(
      "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise"
    );
    const base64 = await driver.takeScreenshot();
    fs.writeFileSync(
      "../express_study/public/screenshot.png",
      base64,
      "base64"
    );
    fs.writeFileSync("./screenshot.png", base64, "base64");
  } catch (error) {
    console.log(err, "出错了");
    await driver.quit();
  } finally {
    await driver.quit();
  }
})();
