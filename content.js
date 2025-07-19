const h1 = document.createElement("h1");
h1.textContent = "Hello from extension!";
h1.style.color = "red";       
h1.style.textAlign = "center";

document.body.prepend(h1); // Add to top of the page

console.log("Content script loaded successfully!");
