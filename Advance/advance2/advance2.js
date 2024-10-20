async function makeRequest() {
    const url = document.getElementById('url').value;
    const method = document.getElementById('method').value;
    const data = document.getElementById('data').value;
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (method === 'POST' || method === 'PUT') {
        options.body = data;
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById('result').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
}
