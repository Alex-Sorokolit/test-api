
const BASE_URL = 'http://localhost:3000'

const newKey = {
      hotkey: "Ctrl + D",
      desctiption: "Вибрати ++ однаковий текст"
}

const options = {
      method: 'POST',
      headers: {
      'Content-Type': 'aplication/json',
      },
      body: JSON.stringify(newKey)
};

fetch(`${BASE_URL}/vscode/`, options)
      .then(response => response.json())
      .then(console.log);