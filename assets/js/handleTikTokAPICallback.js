// Assuming this function is called when the API callback is received
function handleAPICallback() {

    console.log('handleCallbackRequest function called successfully.');
    
    // AppScript ID
    const appId = 'AKfycby1ffFG5lj2qZLAmSAiGbpwty56ZgTPDw_RLsGUXDysnPFkhGTiB3o_qd5-W7YjelCP6Q' ;

    // Extract the parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const scopes = urlParams.get('scopes');
    const state = urlParams.get('state');

    console.log(`code: ${code}\nscopes: ${scopes}`);

    // Forward the data to your Google Apps Script Web App
    const googleScriptUrl = `https://script.google.com/macros/s/${appId}/exec?code=${code}&scopes=${scopes}&state=${state}`;

    console.log(googleScriptUrl);

    const anchorElement = document.getElementById('api-response-button');
    anchorElement.href = googleScriptUrl;
}

function handleAuthorization() {
  // Prompt the user for authorization
  window.close();
}
