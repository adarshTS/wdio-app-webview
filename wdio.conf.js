exports.config = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["test.e2e.js"],
  maxInstances: 10,
  capabilities: [
    {
      "bstack:options": {
        deviceName: "Samsung Galaxy S22 Ultra",
        platformVersion: "12.0",
        platformName: "android",
        projectName: "wdio-app-webview",
        buildName: `browserstack build`,
      },
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,
  services: [
    [
      "browserstack",
      {
        app: "bs://15382b801c5658f31655642ee2329df149f74266",
      },
    ],
  ],

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
