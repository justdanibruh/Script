fetch('https://raw.githubusercontent.com/justdanibruh/Script/main/test.html')

  .then(response => response.text())
  .then(htmlContent => {
    const overlayDiv = document.createElement('div');
    overlayDiv.innerHTML = htmlContent;
    overlayDiv.style.position = 'fixed';
    overlayDiv.style.top = '0';
    overlayDiv.style.left = '0';
    overlayDiv.style.width = '100%';
    overlayDiv.style.height = '100%';
    overlayDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    overlayDiv.style.zIndex = '10000';
    overlayDiv.style.overflow = 'auto';

    document.body.appendChild(overlayDiv);
  })
  .catch(error => console.error('Error loading the HTML content:', error));
