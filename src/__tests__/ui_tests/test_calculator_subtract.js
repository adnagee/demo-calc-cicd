// This code uses the Selenium framework to perform the user interface aka Integration testing before final deployment
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");
jest.setTimeout(10000);
describe("Calculator Integration Tests", () => {
  test("performs subtraction correctly", async () => {
     

    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://learn-cicd-anthony-24f4f0f46557.herokuapp.com/"); // Replace with the actual URL of your React app

      await driver
      .findElement(By.id("Number 1"))
      .sendKeys("10");
    await driver.findElement(By.css("select")).sendKeys("-");
    await driver
      .findElement(By.id("Number 2"))
      .sendKeys("3");
    await driver.findElement(By.xpath('//button[text()="Calculate"]')).click();

    await driver.wait(
      until.elementLocated(By.xpath('//*[@id="root"]/div/h2')),
      5000
    );
    const resultElement = await driver.findElement(
      By.xpath('//*[@id="root"]/div/h2')
    );
    const resultText = await resultElement.getText();
    assert.strictEqual(resultText, "Result: 7");function add(a, b) {
  return a + b;
}
    } finally {
     // await driver.quit();
    }
  });
});




// (async function testCalculatorSubtract() {
//   const driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("https://learn-cicd-anthony-24f4f0f46557.herokuapp.com/"); // Replace with the actual URL of your React app

//     await driver
//       .findElement(By.css('input[placeholder="Number 1"]'))
//       .sendKeys("10");
//     await driver.findElement(By.css("select")).sendKeys("-");
//     await driver
//       .findElement(By.css('input[placeholder="Number 2"]'))
//       .sendKeys("3");
//     await driver.findElement(By.xpath('//button[text()="Calculate"]')).click();

//     await driver.wait(
//       until.elementLocated(By.xpath('//h2[text()="Result: 7"]')),
//       5000
//     );
//     const resultElement = await driver.findElement(
//       By.xpath('//h2[text()="Result: 7"]')
//     );
//     const resultText = await resultElement.getText();
//     assert.strictEqual(resultText, "Result: 7");function add(a, b) {
//   return a + b;
// }

// test('adds 1 + 2 to equal 3', () => {
//   expect(add(1, 2)).toBe(3);
// });
//   } finally {
//     await driver.quit();
//   }
// })();
