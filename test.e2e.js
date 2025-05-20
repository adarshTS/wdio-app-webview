const { expect, browser } = require("@wdio/globals");

describe("App Launch", () => {
  it("should open the app on device", async () => {
    await browser.pause(3000);
  });
});
