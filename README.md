Cucumber- Java script project for running UI automation tests in emulator

### Dependencies and Installation
```
npm init -y

npm install --save-dev \
  @wdio/cli \
  @wdio/local-runner \
  @wdio/cucumber-framework \
  @wdio/appium-service \
  @wdio/spec-reporter \
  webdriverio \
  appium \
  chai

appium driver install uiautomator2

```

### Execution steps
1. Start Appium.```appium
2. Start your Android emulator (if not already running). ```sh ./start_emulator.sh
3. execute this command to run the project: ```npx wdio run wdio.conf.js```
