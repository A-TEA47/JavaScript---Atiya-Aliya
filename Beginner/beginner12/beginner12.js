function generateRandomNumber() {
    
    let min = parseInt(document.getElementById('minValue').value);
    let max = parseInt(document.getElementById('maxValue').value);

    if (min < max) {
        
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('result').innerText = `Random number: ${randomNumber}`;
    } else {
        document.getElementById('result').innerText = "Please ensure the minimum value is less than the maximum value.";
    }
}
