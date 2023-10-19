(function() {
  // Check if the GUI has already been added
  if (document.getElementById('custom-gui')) {
    return;
  }

  // Create a container div for the GUI
  const guiContainer = document.createElement('div');
  guiContainer.id = 'custom-gui';
  guiContainer.style.position = 'fixed';
  guiContainer.style.bottom = '10px';
  guiContainer.style.right = '10px';
  guiContainer.style.backgroundColor = 'red';
  guiContainer.style.border = '1px solid #ccc';
  guiContainer.style.padding = '10px';
  guiContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
  guiContainer.style.zIndex = '9999';

  // Create a title for the GUI
  const title = document.createElement('h2');
  title.textContent = 'YouWeb'; // Title

  // Create a description for the GUI
  const description = document.createElement('p');
  description.textContent = 'Made by Cole Cemore (YtFanboiii.exe)'; // Description

  // Create a button to toggle the visibility of the GUI content
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '▶'; // Arrow pointing right
  toggleButton.style.padding = '5px';
  toggleButton.style.border = 'none';
  toggleButton.style.backgroundColor = 'transparent';
  toggleButton.style.color = 'white';
  toggleButton.style.cursor = 'pointer';
  toggleButton.addEventListener('click', toggleGUI);

  // Create a div for the GUI content (initially hidden)
  const contentDiv = document.createElement('div');
  contentDiv.style.display = 'none';

  // Create a button for unblocking the video
  const unblockButton = document.createElement('button');
  unblockButton.textContent = 'Unblock the Video';
  unblockButton.style.backgroundColor = 'white';
  unblockButton.style.color = 'red';
  unblockButton.addEventListener('click', unblockVideo);

  // Create a button for downloading the video
  const downloadButton = document.createElement('button');
  downloadButton.textContent = 'Download the Video';
  downloadButton.style.backgroundColor = 'white';
  downloadButton.style.color = 'red';
  downloadButton.addEventListener('click', downloadVideo);

  // Add the title to the GUI container
  guiContainer.appendChild(title);

  // Add the description to the GUI container
  guiContainer.appendChild(description);

  // Add the toggle button to the GUI container
  guiContainer.appendChild(toggleButton);

  // Add the content div to the GUI container
  guiContainer.appendChild(contentDiv);

  // Add the unblock button to the content div
  contentDiv.appendChild(unblockButton);

  // Add the download button to the content div
  contentDiv.appendChild(downloadButton);

  // Add the GUI container to the document body
  document.body.appendChild(guiContainer);

  function toggleGUI() {
    contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
  }

  function unblockVideo() {
    if (window.location.toString().includes('www.youtube.com/watch?v')) {
      window.open('https://www.youtube-nocookie.com/embed/' + window.location.toString().split('=')[1]);
    }
  }

  function downloadVideo() {
    const fs = require('fs');
    const ytdl = require('ytdl-core');

    ytdl('http://www.youtube.com/watch?v=aqz-KE-bpKQ')
      .pipe(fs.createWriteStream('video.mp4'));
  }
})();
