function calculateSum() {
    // Get the values from the input fields
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    // Check if both inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        let sum = num1 + num2;
        document.getElementById('result').innerText = `The sum is: ${sum}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid numbers.";
    }
}
