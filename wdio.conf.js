exports.config = {
  runner: 'local',
  framework: 'cucumber',
  specs: ['./features/**/*.feature'],
  cucumberOpts: {
    require: ['./step-definitions/**/*.js'],
    timeout: 60000
  },
  reporters: ['spec'],
  services: [
    ['appium', {
      args: {
        // leave blank or customize Appium CLI args here
      },
    }],
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:app': '/Users/A-204983/Downloads/expedia.apk',
    'appium:appPackage': 'com.expedia.bookings',
    'appium:appActivity': 'com.expedia.bookings.activity.SearchActivity',
    'appium:noReset': true
  }],
  logLevel: 'info'
};
