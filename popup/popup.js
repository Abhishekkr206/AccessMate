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

//increase size btn

document.addEventListener("DOMContentLoaded", function (){
  const zoombtn = document.getElementById("zoomBtn");
  zoombtn.addEventListener("click",() => {
    chrome.tabs.query({ active:true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id ,{action:"IncreaseText"})
    })
  })
})

//decrease size btn

document.addEventListener("DOMContentLoaded", function (){
  const decBtn = document.getElementById("decBtn");
  decBtn.addEventListener("click",() => {
    chrome.tabs.query({ active:true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id ,{action:"DecreaseText"})
    })
  })
})

//reset size btn

document.addEventListener("DOMContentLoaded", function (){
  const decBtn = document.getElementById("resetBtn");
  decBtn.addEventListener("click",() => {
    chrome.tabs.query({ active:true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id ,{action:"Reset"})
    })
  })
})



