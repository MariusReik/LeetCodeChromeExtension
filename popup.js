document.getElementById('push').addEventListener('click', () => {
    const repo = document.getElementById('repo').value;
    const path = document.getElementById('path').value;
    const message = document.getElementById('message').value;
    const token = document.getElementById('token').value;
  
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'getSolution' }, (response) => {
        if (response.solution) {
          chrome.runtime.sendMessage({
            action: 'pushToGitHub',
            token: token,
            repo: repo,
            path: path,
            content: response.solution,
            message: message
          }, (response) => {
            if (response.status === 'success') {
              alert('Solution pushed to GitHub!');
            } else {
              alert('Error: ' + response.error);
            }
          });
        } else {
          alert('Error: ' + response.error);
        }
      });
    });
  });
  