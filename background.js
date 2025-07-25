chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "getContrastMode") {
    chrome.storage.sync.get("contrastMode", (data) => {
      sendResponse({ contrastMode: data.contrastMode });
    });
    return true; //keeps sendResponse alive asynchronously
  }
});
