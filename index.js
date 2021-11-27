/*
 * Author: LIULIZHI (liulizhiasd777@163.com)
 * File Created: 2021-11-24 11:47:12 pm
 * Last Modified: 2021-11-27 9:00:53 pm
 * Description: 使用selenium浏览器自动化
 */
const fs = require("fs");
const { Builder, By, Key, until } = require("selenium-webdriver");

(async function auto() {
  const driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise");
    const base64 = await driver.takeScreenshot();
    fs.writeFileSync("../express_study/public/screenshot.png", base64, "base64");
  } catch (error) {
    console.log(err, "出错了");
    await driver.quit();
  } finally {
    await driver.quit();
  }
})();
