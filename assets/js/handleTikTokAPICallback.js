// Assuming this function is called when the API callback is received
function handleAPICallback() {

    console.log('handleCallbackRequest function called successfully.');

    // Extract the parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const scopes = urlParams.get('scopes');
    const state = urlParams.get('state');

    console.log(`code: ${code}\nscopes: ${scopes}`);

    // Forward the data to your Google Apps Script Web App
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbw6Qit1FLGQD1mgSH26ppTQb09gzBbR3Wedg6LG0Gol618vftavUbRAaE6rk45q9CjQGw/exec';
    const payload = {
        code: code,
        scopes: scopes,
        state: state
    };
  
    // Use fetch or other appropriate method to send data to the Google Apps Script
    fetch(googleScriptUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
}