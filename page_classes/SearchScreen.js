class SearchScreen {
  // Element identifiers as CONSTANTS
  LEAVING_FROM_FIELD_XPATH = "//*[@resource-id='SearchLocation']";

  leavingFromField() {
    return driver.findElement('xpath', this.LEAVING_FROM_FIELD_XPATH);
  }

  async tapLeavingFromField() {
    const leavingFromField = await this.leavingFromField();
    const elementId = leavingFromField['element-6066-11e4-a52e-4f735466cecf'] || leavingFromField.ELEMENT;
    await driver.elementClick(elementId);
  }
}

module.exports = SearchScreen;