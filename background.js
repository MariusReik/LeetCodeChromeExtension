chrome.runtime.onInstalled.addListener(() => {
    console.log('LeetCode to GitHub extension installed.');
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'pushToGitHub') {
      const { token, repo, path, content, message } = request;
      fetch(`https://api.github.com/repos/${repo}/contents/${path}`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          content: btoa(content)
        })
      })
      .then(response => response.json())
      .then(data => {
        sendResponse({ status: 'success', data: data });
      })
      .catch(error => {
        sendResponse({ status: 'error', error: error });
      });
      return true;  // Keep the message channel open for sendResponse
    }
  });
  