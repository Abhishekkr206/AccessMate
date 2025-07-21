const h1 = document.createElement("h1");
h1.textContent = "Hello from extension!";
h1.style.color = "skyblue";
h1.style.textAlign = "center";
document.body.prepend(h1); // Add to top of the page

console.log("Content script loaded successfully!");

// Contrast toggle state
let isHighContrastEnabled = false;

function applyHighContrastMode() {
  const allElements = document.querySelectorAll('*');

  allElements.forEach((element) => {
    element.dataset.originalBg = element.style.backgroundColor;
    element.dataset.originalColor = element.style.color;

    element.style.backgroundColor = "#000";
    element.style.color = "#FFF";
  });

  document.querySelectorAll("img").forEach((img) => {
    img.style.filter = 'invert(1)';
  });
}

function removeHighContrastMode() {
  const allElements = document.querySelectorAll('*');

  allElements.forEach((element) => {
    element.style.backgroundColor = element.dataset.originalBg || "";
    element.style.color = element.dataset.originalColor || "";
  });

  document.querySelectorAll("img").forEach((img) => {
    img.style.filter = '';
  });
}

chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.action === 'toggleContrast') {
    isHighContrastEnabled = !isHighContrastEnabled;

    if (isHighContrastEnabled) {
      applyHighContrastMode();
    } else {
      removeHighContrastMode();
    }
  }
});
