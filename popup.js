const siteInput = document.getElementById('site-input');
const addSiteButton = document.getElementById('add-site');
const blockedSitesList = document.getElementById('blocked-sites');
const clearSitesButton = document.getElementById('clear-sites');

// Load blocked sites when popup opens
chrome.storage.sync.get(['blockedSites'], (data) => {
  const sites = data.blockedSites || [];
  sites.forEach(addSiteToList);
});

// Add site to blocklist
addSiteButton.addEventListener('click', () => {
  const site = siteInput.value.trim();
  if (!site) return;

  chrome.storage.sync.get(['blockedSites'], (data) => {
    const sites = data.blockedSites || [];
    if (!sites.includes(site)) {
      sites.push(site);
      chrome.storage.sync.set({ blockedSites: sites });
      addSiteToList(site);
    }
  });

  siteInput.value = '';
});

// Clear all blocked sites
clearSitesButton.addEventListener('click', () => {
  chrome.storage.sync.set({ blockedSites: [] });
  blockedSitesList.innerHTML = '';
});

function addSiteToList(site) {
  const li = document.createElement('li');
  li.textContent = site;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', () => {
    chrome.storage.sync.get(['blockedSites'], (data) => {
      const sites = data.blockedSites.filter(s => s !== site);
      chrome.storage.sync.set({ blockedSites: sites });
      li.remove();
    });
  });
  li.appendChild(removeButton);
  blockedSitesList.appendChild(li);
}
