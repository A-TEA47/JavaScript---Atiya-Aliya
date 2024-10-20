function calculateFactorial() {
    let num = parseInt(document.getElementById('number').value);

    if (num >= 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        document.getElementById('result').innerText = `The factorial of ${num} is: ${factorial}`;
    } else {
        document.getElementById('result').innerText = "Please enter a non-negative number.";
    }
}
