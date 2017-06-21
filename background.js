/* global chrome */

browser.runtime.onInstalled.addListener(function (object) {
  if (browser.runtime.OnInstalledReason.INSTALL === object.reason) {
    browser.tabs.create({url: 'https://nbox.notif.me?ref=crxbg&installed=1'});
  }
});
