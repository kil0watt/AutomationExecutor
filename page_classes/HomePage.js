class HomePage {
  // Element identifiers as CONSTANTS
  async FLIGHTS_TAB() {
    await driver.pause(3000);
    return await driver.$("//*[@text='Flights']");;
  }

  // Behaviors
  async goToFlightsTab() {
    const flightsTab = await this.FLIGHTS_TAB();
    await flightsTab.click();
  }
}

module.exports = HomePage;