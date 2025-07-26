console.log("working");

// Function to toggle visibility of dropdowns
function toggleDropdown(id) {
  const element = document.getElementById(id);
  if (element.style.display === 'block') {
    element.style.display = 'none';
  } else {
    element.style.display = 'block';
  }
}

// DOM fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Toggle buttons
  const contrastToggleBtn = document.getElementById("toggleContrastDropdown");
  const textToggleBtn = document.getElementById("toggleTextControl");

  contrastToggleBtn.addEventListener("click", () => toggleDropdown("contrastMode"));
  textToggleBtn.addEventListener("click", () => toggleDropdown("textControl"));

  // Dropdown options (High Contrast / Colorblind / Low Sensory)
  const options = document.querySelectorAll("#contrastMode p");

  // Load saved contrast mode from storage and highlight selected
chrome.storage.sync.get("contrastMode", () => {});

  // Handle dropdown option click
  options.forEach((option) => {
    option.addEventListener("click", () => {
      const selectedMode = option.dataset.value;

      // Save to chrome storage
      chrome.storage.sync.set({ contrastMode: selectedMode });

      // Send message to content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "applyContrastMode",
          mode: selectedMode
        });
      });
    });
  });

  // Text Controls - Increase Size
  const zoomBtn = document.getElementById("zoomBtn");
  zoomBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "IncreaseText" });
    });
  });

  // Text Controls - Decrease Size
  const decBtn = document.getElementById("decBtn");
  decBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "DecreaseText" });
    });
  });

  // Text Controls - Reset Size
  const resetBtn = document.getElementById("resetBtn");
  resetBtn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "Reset" });
    });
  });
});
