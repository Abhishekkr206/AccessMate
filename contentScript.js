const h1 = document.createElement("h1");
h1.textContent = "Hello from extension!";
h1.style.color = "skyblue";
h1.style.textAlign = "center";
document.body.prepend(h1); // Add to top of the page

console.log("Content script loaded successfully!");

// Contrast toggle state
function applyContrast(mode) {
  const allElements = document.querySelectorAll("*");

  allElements.forEach((e) => {
    e.dataset.originalBg = e.style.backgroundColor;
    e.dataset.originalColor = e.style.color;
  });

  switch (mode) {
    case "highContrast":
      allElements.forEach((e) => {
        e.style.backgroundColor = "#000";
        e.style.color = "#FFF";
      });
      document.querySelectorAll("img").forEach((img) => {
        img.style.filter = "invert(1)";
      });
      break;

    case "colorblind":
      allElements.forEach((e) => {
        e.style.backgroundColor = "#F5F5F5";
        e.style.color = "#005FA3";
      });
      break;

    case "lowSensory":
      allElements.forEach((e) => {
        e.style.backgroundColor = "#2E3B4E";
        e.style.color = "#BFD7EA";
      });
      break;

    default:
      allElements.forEach((e) => {
        e.style.backgroundColor = e.dataset.originalBg || "";
        e.style.color = e.dataset.originalColor || "";
      });
      document.querySelectorAll("img").forEach((img) => {
        img.style.filter = "";
      });
      break;
  }
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "applyContrastMode") {
    applyContrast(req.mode);
  }
});

chrome.runtime.sendMessage({ action: "getContrastMode" }, (response) => {
  if (response.contrastMode) {
    applyContrast(response.contrastMode);
  }
});

