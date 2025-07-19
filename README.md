# 🚀 AccessMate – Your Accessibility Companion 🔊🧠

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![Made with](https://img.shields.io/badge/Made%20with-JavaScript-blue)
![Chrome Extension](https://img.shields.io/badge/Platform-Chrome%20Extension-green)
![Accessibility](https://img.shields.io/badge/Focus-Accessibility-critical)

---

> **AccessMate** is a powerful browser extension designed to empower users with disabilities by making *any website* more accessible. Instead of making just one accessible site, AccessMate brings assistive tools to *every website* you visit.

---

## ✨ Features (MVP)
- 🖱️ Keyboard-only navigation mode
- 🌓 High contrast toggle
- 🔍 Text zoom controls
- 🗣️ Voice command navigation (via Web Speech API)
- 📢 ARIA support injection for screen readers
- 📏 Readable font toggler (OpenDyslexic)
- 🌐 Works on any webpage

---

## ⚙️ How It Works

AccessMate injects a **content script** into every webpage, allowing users to toggle accessibility enhancements like high contrast, larger text, or keyboard navigation. The **popup UI** gives users quick control with one click.

🔄 When a user clicks the extension icon:
1. A clean popup appears with toggles.
2. Actions are sent to the content script.
3. The script modifies the current webpage accordingly.

---

## 📁 Folder Structure

```
├── manifest.json
├── popup/ 
│ ├── popup.html
│ ├── popup.css
│ └── popup.js  
├── contentScript.js
├── background.js 
├── icons/
│ └── AccessMate.png
├── README.md
```


---

## 🛠️ Tech Stack

- HTML, CSS, JavaScript
- Chrome Extensions API (Manifest V3)
- Web Accessibility APIs (ARIA, Speech API, etc.)
- (Optional future): React (for advanced popup UI)

---

## 🔧 Setup Instructions

1. Clone this repo
2. Open Chrome and go to `chrome://extensions/`
3. Turn on **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the folder AccessMate
6. The extension will now be installed and running


🤝 Contributing
Have ideas to improve accessibility for everyone? Contributions are welcome!

```bash
Fork this repo
Create a feature branch
Submit a pull request
```