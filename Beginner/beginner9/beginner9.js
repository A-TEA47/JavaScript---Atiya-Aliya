function generateFizzBuzz() {
    // Get the maximum number from the input field
    let maxNumber = parseInt(document.getElementById('maxNumber').value);
    
    // Check if the input is within the valid range
    if (isNaN(maxNumber) || maxNumber < 1 || maxNumber > 100) {
        document.getElementById('result').innerText = "Please enter a valid number between 1 and 100.";
        return;
    }

    // Initialize an array to hold FizzBuzz results
    let fizzBuzzArray = [];
    
    // Loop through numbers from 1 to maxNumber
    for (let i = 1; i <= maxNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzzArray.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fizzBuzzArray.push("Fizz");
        } else if (i % 5 === 0) {
            fizzBuzzArray.push("Buzz");
        } else {
            fizzBuzzArray.push(i);
        }
    }

    // Display the results
    document.getElementById('result').innerText = fizzBuzzArray.join(', ');
}
