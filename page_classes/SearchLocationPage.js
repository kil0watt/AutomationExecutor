class SearchLocationPage {
  // Element identifiers as constants
  LEAVING_FROM_INPUT = "//android.widget.EditText[@resource-id='SearchLocationInput']";
  COCHIN_NON_FOCUSABLE_ELEMENT = "//*[@text='Cochin (COK - Cochin Intl.)' and @focusable='false']";
  GOING_TO_INPUT = "//*[@resource-id='SearchLocationInput']";
  BENGALURU_OPTION = "//*[@text='Bengaluru (BLR - Kempegowda Intl.)' and @focusable='false']";

  // Attributes (Getters for elements)
  async getLeavingFromInput() {
    await driver.pause(3000); 
    return driver.findElement('xpath', this.LEAVING_FROM_INPUT); 
  }

  async getCochinNonFocusableElement() {
    await driver.pause(3000);
    return driver.findElement('xpath', this.COCHIN_NON_FOCUSABLE_ELEMENT);
  }

  async getGoingToInput() {
    await driver.pause(3000);
    return driver.findElement('xpath', this.GOING_TO_INPUT);
  }

  async getBengaluruOption() {
    await driver.pause(3000);
    return driver.findElement('xpath', this.BENGALURU_OPTION);
  }

  // Behaviors (Methods for interactions)
  async clearLeavingFromInput() {
    const input = await this.getLeavingFromInput();
    await driver.elementClear(input.ELEMENT);
  }

  async enterLeavingFromLocation(location) {
    const input = await this.getLeavingFromInput();
    await driver.elementSendKeys(input.ELEMENT, location);
  }

  async selectCochinFromList() {
    const cochin = await this.getCochinNonFocusableElement();
    await driver.elementClick(cochin.ELEMENT);
  }

  async tapGoingToInput() {
    const input = await this.getGoingToInput();
    await driver.elementClick(input.ELEMENT);
  }

  async clearGoingToInput() {
    const input = await this.getGoingToInput();
    await driver.elementClear(input.ELEMENT);
  }

  async enterGoingToLocation(location) {
    const input = await this.getGoingToInput();
    await driver.elementSendKeys(input.ELEMENT, location);
  }

  async selectBengaluruFromList() {
    const bengaluru = await this.getBengaluruOption();
    await driver.elementClick(bengaluru.ELEMENT);
  }
}

module.exports = SearchLocationPage;