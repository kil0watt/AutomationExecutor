const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('the app is launched', async function () {
  // WebdriverIO + Appium starts the app automatically based on wdio.conf.js
});

When('the user taps the close button', async function () {
  // Replace selector with your button’s accessibility id or resource-id
  const closeBtn = await $('~closeButton');
  await closeBtn.waitForDisplayed({ timeout: 5000 });
  await closeBtn.click();
});

Then('the app should close', async function () {
  // Verify the app is no longer in foreground
  // driver.closeApp() terminates the session but here we assert activity change
  const currentActivity = await driver.getCurrentActivity();
  expect(currentActivity).to.not.equal('.MainActivity');
});
