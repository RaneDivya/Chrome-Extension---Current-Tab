**Chrome Extension – Current Tab**

A simple Chrome Extension that displays the title and URL of the currently active tab.
This extension was built as part of the Banao Internship Task.

🚀 **Features**

Shows the current tab's title

Shows the current tab's URL

Minimal, clean popup design

Works instantly with one click

No backend required

📁 **Project Structure**
current-tab-extension/
│── manifest.json
│── icon.png
│── popup.html
│── popup.css
│── popup.js

🧩 **How It Works**

User clicks on the extension icon

The popup opens

JavaScript uses chrome.tabs.query() to get the active tab

The popup displays the tab’s title and URL

🛠️ **Technologies Used**

HTML → Popup layout

CSS → Styling

JavaScript → Fetch and display current tab info

JSON → Chrome manifest configuration

🔧 **How to Install the Extension (Locally)**

Download or clone this repository

Open Google Chrome

Go to:

chrome://extensions/


Enable Developer Mode (top right)

Click Load Unpacked

Select the project folder

The extension will appear in your Chrome toolbar
