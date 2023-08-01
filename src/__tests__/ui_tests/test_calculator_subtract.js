// This code uses the Selenium framework to perform the user interface aka Integration testing before final deployment
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

(async function testCalculatorSubtract() {
  const driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://git.heroku.com/learn-cicd-anthony.git"); // Replace with the actual URL of your React app

    await driver
      .findElement(By.css('input[placeholder="Number 1"]'))
      .sendKeys("10");
    await driver.findElement(By.css("select")).sendKeys("-");
    await driver
      .findElement(By.css('input[placeholder="Number 2"]'))
      .sendKeys("3");
    await driver.findElement(By.xpath('//button[text()="Calculate"]')).click();

    await driver.wait(
      until.elementLocated(By.xpath('//h2[text()="Result: 7"]')),
      5000
    );
    const resultElement = await driver.findElement(
      By.xpath('//h2[text()="Result: 7"]')
    );
    const resultText = await resultElement.getText();
    assert.strictEqual(resultText, "Result: 7");
  } finally {
    await driver.quit();
  }
})();
