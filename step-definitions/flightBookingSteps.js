const { Given, When, Then } = require('@cucumber/cucumber');

// Import Page Object Model classes
const HomePage = require('../page_classes/HomePage.js');
const FlightSearchPage = require('../page_classes/FlightSearchPage.js');
const SearchLocationPage = require('../page_classes/SearchLocationPage.js');
const PopupPage = require('../page_classes/PopupPage.js');

// Initialize Page Object instances
const homePage = new HomePage();
const flightSearchPage = new FlightSearchPage();
const searchLocationPage = new SearchLocationPage();
const popupPage = new PopupPage();

// Step Definitions for Flight Booking Feature

Given(/^the user is on the home screen$/, async () => {
    // Assumption: App is already launched and user is on home screen
    // Additional setup can be added here if needed
    console.log('User is on the home screen');
});

When(/^the user closes the popup dialog$/, async () => {
    await popupPage.closePopup();
});
Then('the popup dialog should be closed', async () => {
    // Add verification logic here if needed
    console.log('closed the popup dialog');
});

When("the user clicks on the 'Flights' tab", async () => {
    await homePage.goToFlightsTab();
});

Then('the user should be navigated to the flights search page', async () => {
    // Add verification logic here if needed
    console.log('User navigated to flights search page');
});

When('user clicks on the One-Way tab', async () => {
    await flightSearchPage.clickOneWayTab();
});

When(/^the user clicks on the 'Leaving From Button'$/, async () => {
    await flightSearchPage.clickLeavingFromButton();
});

Then(/^the 'Leaving From' input field should be focused$/, async () => {
    // Add verification logic for input field focus if needed
    console.log('Leaving From input field is focused');
});

When(/^the user clears the "Leaving From" input field$/, async () => {
    await searchLocationPage.clearLeavingFromInput();
});

When(/^the user types "([^"]*)" into the "Leaving From" input field$/, async (location) => {
    await searchLocationPage.enterLeavingFromLocation(location);
});

Then(/^the input field should display "([^"]*)"$/, async (expectedText) => {
    // Add verification logic to check input field text
    console.log(`Input field displays: ${expectedText}`);
});

When(/^the user clicks on the non-focusable 'Cochin' element from the list$/, async () => {
    await searchLocationPage.selectCochinFromList();
});

Then(/^the Cochin location should be selected$/, async () => {
    // Add verification logic for location selection
    console.log('Cochin location selected');
});

When(/^the user taps on the 'Going To' field$/, async () => {
    await flightSearchPage.tapGoingToButton();
});

Then(/^the location input field for 'Going To' should be activated$/, async () => {
    // Add verification logic for Going To field activation
    console.log('Going To input field is activated');
});

When(/^the user clears the "Going to" input field$/, async () => {
    await searchLocationPage.clearGoingToInput();
});

When(/^the user enters "([^"]*)" into the "Going to" input field$/, async (location) => {
    await searchLocationPage.enterGoingToLocation(location);
});

Then(/^the "Going to" input field should display "([^"]*)"$/, async (expectedText) => {
    // Add verification logic to check Going To input field text
    console.log(`Going to input field displays: ${expectedText}`);
});

When(/^the user clicks on the non-focusable 'Bengaluru' element from the list$/, async () => {
    await searchLocationPage.selectBengaluruFromList();
});

Then(/^the Bengaluru location should be selected$/, async () => {
    // Add verification logic for Bengaluru location selection
    console.log('Bengaluru location selected');
});

When(/^the user clicks on the search button$/, async () => {
    await flightSearchPage.clickSearchButton();
});

Then(/^the search results should be displayed$/, async () => {
    // Add verification logic for search results display
    console.log('Search results are displayed');
});

module.exports = {
    homePage,
    flightSearchPage,
    searchLocationPage
};