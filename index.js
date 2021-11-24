const { Builder, By, Key, until } = require("selenium-webdriver");

(async function auto() {
  const driver = new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://ant.design/docs/react/introduce-cn");

    setInterval(() => {
      console.log("执行栈");
    }, 1000);
  } catch (error) {
    console.log(err, "出错了");
    await driver.quit();
  } finally {
  }
})();
