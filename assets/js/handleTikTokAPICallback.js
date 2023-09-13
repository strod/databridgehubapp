// Assuming this function is called when the API callback is received
function handleAPICallback() {

    console.log('handleCallbackRequest function called successfully.');
    
    // AppScript ID
    const appId = 'AKfycbw09qyvQJbt38t_ItXZPZwlYUO94n9RoQTwg47zYAo2M55smaqhd9G9WQlXepb2C7YtWg';

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
