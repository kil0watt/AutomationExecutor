Feature: End-to-End Flight Booking Flow
  Scenario: User completes flight search and proceeds to checkout
    Given the user is on the home screen
    When the user closes the popup dialog
    Then the popup dialog should be closed

    When the user clicks on the 'Flights' tab
    Then the user should be navigated to the flights search page

    When user clicks on the One-Way tab
    And the user clicks on the 'Leaving From Button'
    Then the 'Leaving From' input field should be focused

    When the user clears the "Leaving From" input field
    And the user types "Cochin" into the "Leaving From" input field
    Then the input field should display "Cochin"

    When the user clicks on the non-focusable 'Cochin' element from the list
    Then the Cochin location should be selected

    When the user taps on the 'Going To' field
    Then the location input field for 'Going To' should be activated

    When the user clears the "Going to" input field
    And the user enters "Bengaluru" into the "Going to" input field
    Then the "Going to" input field should display "Bengaluru"

    When the user clicks on the non-focusable 'Bengaluru' element from the list
    Then the Bengaluru location should be selected

    When the user clicks on the search button
    Then the search results should be displayed

