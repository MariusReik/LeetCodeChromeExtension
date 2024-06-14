// Run this script when the user clicks the extension icon
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSolution') {
      const codeElement = document.querySelector('.CodeMirror-code');
      if (codeElement) {
        const solution = codeElement.innerText;
        sendResponse({ solution: solution });
      } else {
        sendResponse({ error: 'Solution not found' });
      }
    }
  });
  