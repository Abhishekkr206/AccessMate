console.log("working");

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("contrastMode");

  //storing it to chrome storage
  chrome.storage.sync.get("contrastMode", (data) => {
    if (data.contrastMode) {
      dropdown.value = data.contrastMode;
    }
  });
  
  dropdown.addEventListener("change", () => {
    const selectMode = dropdown.value;

    // one more sync
    chrome.storage.sync.set({ contrastMode: selectMode });

    //now in contentScript
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: "applyContrastMode",
        mode: selectMode
      })
    })
  })
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



