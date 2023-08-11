// Assuming this function is called when the API callback is received
function handleAPICallback() {

    console.log('handleCallbackRequest function called successfully.');

    // Extract the parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const scopes = urlParams.get('scopes');
    const state = urlParams.get('state');

    // Forward the data to your Google Apps Script Web App
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzmTXC-8uc82nGghBgKTeT6DWe94rXrcB-NBqpGIlbr/dev?action=callback';
    const payload = {
        code: code,
        scopes: scopes,
        state: state
    };
  
    // Use fetch or other appropriate method to send data to the Google Apps Script
    fetch(googleScriptUrl, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
}
  