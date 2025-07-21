console.log("working");

document.addEventListener("DOMContentLoaded", function () {
  const contrastBtn = document.getElementById("contrastBtn");

  if (contrastBtn) {
    contrastBtn.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleContrast" });
      });
    });
  }
});

