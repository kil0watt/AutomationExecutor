class FlightSearchPage {
  // Element identifiers as CONSTANTS
  LEAVING_FROM_BUTTON_ID = "Leaving from Button Cochin (COK-Cochin Intl.)";
  GOING_TO_BUTTON_XPATH = "//android.view.View[@resource-id='GoingToButton']";
  SEARCH_BUTTON_XPATH = "//*[@resource-id='SearchButton']";

  // Methods to interact with elements
  async leavingFromButton() {
    await driver.pause(3000);
    return driver.findElement('accessibility id', this.LEAVING_FROM_BUTTON_ID);
  }

  async clickLeavingFromButton() {
    const leavingFromBtn = await this.leavingFromButton();
    await driver.elementClick(leavingFromBtn.ELEMENT);
  }

  async goingToButton() {
    await driver.pause(3000);
    return driver.findElement('xpath', this.GOING_TO_BUTTON_XPATH);
  }

  async tapGoingToButton() {
    const goingToBtn = await this.goingToButton();
    await driver.elementClick(goingToBtn.ELEMENT);
  }

  async searchButton() {
    await driver.pause(3000);
    return driver.findElement('xpath', this.SEARCH_BUTTON_XPATH);
  }

  async clickSearchButton() {
    const searchBtn = await this.searchButton();
    await driver.elementClick(searchBtn.ELEMENT);
  }

  get ONE_WAY_TAB_XPATH() { return "//*[@text='One-way']"; }

  // Attributes (Element getters)
  async oneWayTab() { 
    await driver.pause(3000);
    return driver.findElement('xpath', this.ONE_WAY_TAB_XPATH); 
  }

  // Behaviors (Methods)
  async clickOneWayTab() {
    const oneWayBtn = await this.oneWayTab();
    await driver.elementClick(oneWayBtn.ELEMENT);
  }
}

module.exports = FlightSearchPage;