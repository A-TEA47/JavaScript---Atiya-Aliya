function checkEvenOdd() {
    const num = parseInt(document.getElementById('num').value);
    if (isNaN(num)) {
        document.getElementById('result').innerText = "Please enter a valid number.";
    } else {
        const result = (num % 2 === 0) ? "Even" : "Odd";
        document.getElementById('result').innerText = "The number is: " + result;
    }
}
