const BASE_URL = 'http://localhost:3000'
function getHotKeys() {
return fetch(`${BASE_URL}/vscode`)
 .then(response => response.json())
 .then(console.log);
  
}
 
function getHotKeyById(keyId) {
return fetch(`${BASE_URL}/vscode/${keyId}`)
 .then(response => response.json())
 .then(console.log);

}

