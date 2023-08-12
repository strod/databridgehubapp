// Assuming this function is called when the API callback is received
function handleAPICallback() {

    console.log('handleCallbackRequest function called successfully.');
    
    // AppScript ID
    const appId = 'AKfycbyhf-wKXRfHLxfn0IVgSbAn5XWSH4rCKmTT_FHtldnq4efmLuRYXtOoLvQhboNFZ9euhQ' ;

    // Extract the parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const scopes = urlParams.get('scopes');
    const state = urlParams.get('state');

    console.log(`code: ${code}\nscopes: ${scopes}`);

    // Forward the data to your Google Apps Script Web App
    const googleScriptUrl = `https://script.google.com/macros/s/${appId}/exec?code=${code}&scopes=${scopes}&state=${state}`;

    console.log(googleScriptUrl);

    // Use fetch or other appropriate method to send data to the Google Apps Script
    fetch(googleScriptUrl, {
      method: 'POST'
    }
    )
    .then(response => response.text())  // Get the response as text
    .then(responseText => {
      // Place the response text in the <p> tag with id 'api-response'
      const apiResponseElement = document.getElementById('api-response');
      if (apiResponseElement) {
          apiResponseElement.textContent = responseText;
      }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
