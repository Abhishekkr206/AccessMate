console.log("working");

document.getElementById("zoomBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "zoomText" })
  })
})