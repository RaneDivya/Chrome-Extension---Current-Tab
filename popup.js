document.getElementById("getTitleBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let currentTab = tabs[0];
        let title = currentTab.title;

        document.getElementById("title").innerText = "Title: " + title;
    });
});