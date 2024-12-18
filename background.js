chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      chrome.storage.sync.get(['blockedSites'], (data) => {
        const blockedSites = data.blockedSites || [];
        blockedSites.forEach(site => {
          if (tab.url.includes(site)) {
            chrome.tabs.update(tabId, { url: 'about:blank' });
          }
        });
      });
    }
  });
  