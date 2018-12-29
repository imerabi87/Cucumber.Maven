$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "password1"
      ],
      "line": 9,
      "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter valid \"abc@gmail.com\" and valid \"password\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "SmokeTest.open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 6128170100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 15
    },
    {
      "val": "password",
      "offset": 41
    }
  ],
  "location": "SmokeTest.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 34343000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"username\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 23 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027DESKTOP-NAE8MPS\u0027, ip: \u0027192.168.1.151\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50206}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5), userDataDir\u003dC:\\Users\\pc\\AppData\\Local\\Temp\\scoped_dir5232_17233}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d71.0.3578.98, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fbd2611bb1ba5d419c27bc80cf2213f2\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat StepDefinition.SmokeTest.i_enter_valid_and_valid(SmokeTest.java:26)\r\n\tat ✽.When I enter valid \"abc@gmail.com\" and valid \"password\"(test.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SmokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SmokeTest.application_should_be_closed()"
});
formatter.result({
  "status": "skipped"
});
});