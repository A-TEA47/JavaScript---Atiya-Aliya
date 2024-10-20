function findLargest() {

    let input = document.getElementById('inputArray').value;
    
    let numbers = input.split(',').map(Number);

    let largest = Math.max(...numbers);
    
    if (!isNaN(largest)) {
        document.getElementById('result').innerText = `The largest number is: ${largest}`;
    } else {
        document.getElementById('result').innerText = "Please enter valid numbers.";
    }
}
