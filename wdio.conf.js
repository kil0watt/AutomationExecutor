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
        relaxedSecurity: true,
        allowInsecure: ['adb_shell']
      },
      logPath: './logs/'
    }],
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:app': '/Users/A-204983/Downloads/expedia.apk',
    'appium:appPackage': 'com.expedia.bookings',
    'appium:appActivity': 'com.expedia.bookings.activity.SearchActivity',
    'appium:noReset': false, // Changed to false to ensure fresh app launch
    'appium:fullReset': false,
    'appium:autoGrantPermissions': true,
    'appium:appWaitActivity': '*',
    'appium:appWaitDuration': 30000, // Wait up to 30 seconds for app to launch
    'appium:newCommandTimeout': 60000,
    'appium:androidInstallTimeout': 90000,
    'appium:adbExecTimeout': 60000
  }],
  logLevel: 'info',
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  
  // Hook to run before session starts
  beforeSession: async (config, capabilities) => {
    console.log('🔧 Preparing test session...');
    console.log('📱 Capabilities:', JSON.stringify(capabilities, null, 2));
  },
  
  // Hook to run after session is created but before tests start
  before: async (capabilities, specs) => {
    console.log('🚀 Session created, ensuring app is launched...');
    
    try {
      // Wait for app to be installed and launched
      await driver.pause(5000);
      
      // Check if app is running
      const currentPackage = await driver.getCurrentPackage();
      console.log('📦 Current package:', currentPackage);
      
      if (currentPackage !== 'com.expedia.bookings') {
        console.log('🔄 App not running, attempting to launch...');
        await driver.startActivity('com.expedia.bookings', 'com.expedia.bookings.activity.SearchActivity');
        await driver.pause(5000);
      }
      
      // Verify app is now running
      const finalPackage = await driver.getCurrentPackage();
      const currentActivity = await driver.getCurrentActivity();
      
      console.log('✅ App launch verification:');
      console.log('   📦 Package:', finalPackage);
      console.log('   🎯 Activity:', currentActivity);
      
      if (finalPackage === 'com.expedia.bookings') {
        console.log('✅ Expedia app is successfully running!');
      } else {
        throw new Error(`❌ Expected Expedia app but found: ${finalPackage}`);
      }
      
      // Grant any permissions that might popup
      try {
        await driver.pause(2000);
        const allowButton = await driver.$('//android.widget.Button[@text="Allow" or @text="ALLOW"]');
        if (await allowButton.isExisting()) {
          await allowButton.click();
          console.log('✅ Granted app permissions');
          await driver.pause(1000);
        }
      } catch (permissionError) {
        console.log('ℹ️ No permission dialogs found');
      }
      
    } catch (error) {
      console.error('❌ Error during app launch verification:', error.message);
      throw error;
    }
  },
  
  // Hook to run after each test
  afterTest: async (test, context, { error, result, duration, passed, retries }) => {
    if (error) {
      console.log('❌ Test failed:', error.message);
      // Take screenshot on failure (optional)
      try {
        const screenshot = await driver.takeScreenshot();
        console.log('📸 Screenshot taken for failed test');
      } catch (screenshotError) {
        console.log('📸 Could not take screenshot:', screenshotError.message);
      }
    }
  }
};
