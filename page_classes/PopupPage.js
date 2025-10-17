class PopupPage {
  // Element identifiers as CONSTANTS
  CLOSE_BUTTON_ID = 'Close';

  // Attributes (getters for elements)
  async closeButton() { 
    return driver.findElement('accessibility id', this.CLOSE_BUTTON_ID); 
  }

  // Behaviors (methods for interactions)
  async closePopup() {
    const closeButton = await this.closeButton();
    const elementId = closeButton['element-6066-11e4-a52e-4f735466cecf'] || closeButton.ELEMENT;
    await driver.elementClick(elementId);
  }
}

module.exports = PopupPage;