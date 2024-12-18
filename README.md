Made with ❤️ by Ankit Bhagat

# 🚀 Focus Mode - Chrome Extension

Focus Mode is a simple yet powerful Chrome extension that helps you stay productive by blocking distracting websites. Add websites to the blocklist, and Focus Mode will automatically prevent access to them while you're working.

---

## 🌟 **Features**
- 🔒 **Block Distracting Websites** - Prevent access to specific sites like YouTube, Facebook, and more.
- 📋 **Custom Blocklist** - Add or remove sites from the blocklist via a simple user-friendly interface.
- ⏳ **Real-Time Blocking** - The extension immediately blocks websites without needing to restart the browser.
- 📂 **Data Persistence** - Your blocked site list is stored and saved, even after closing Chrome.
- 🧹 **Clear Blocklist** - Clear the entire list of blocked sites with one click.

---


## 📥 **How to Install and Use Locally**

Follow these steps to set up and run Focus Mode on your local machine.

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/ankitsensei/Focus-Mode-Extension.git
cd focus-mode-extension

2️⃣ Load the Extension into Chrome
Open Chrome and go to chrome://extensions/.
Turn on Developer Mode (toggle at the top-right of the page).
Click Load unpacked and select the folder where you cloned this repo.
The Focus Mode extension will now be added to Chrome.

3️⃣ How to Use
Click the Focus Mode icon in the Chrome toolbar.
Enter a website URL (e.g., youtube.com) and click Add Site.
Visit the website you added, and it will be blocked.
To remove a site from the blocklist, click Remove next to the site name.
To clear all blocked sites, click Clear All.


### 🔧 Tech Stack
HTML: Structure of the popup UI.
CSS: Simple and clean design.
JavaScript: Handles logic for blocking sites, UI interactions, and background scripts.
Chrome APIs: Uses Chrome's storage, scripting, and tabs APIs.

### 🚀 How It Works
Popup Interface: Add sites to the blocklist using the popup UI.
Background Script: The background.js listens for tab updates and checks if the URL matches any blocked site.
Storage: Your blocked sites are stored in Chrome's storage, so your blocklist stays intact even after restarting the browser.