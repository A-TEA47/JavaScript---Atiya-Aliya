function sortArray() {
    // Get the input string and convert it to an array of numbers
    let input = document.getElementById('numberArray').value;
    let numArray = input.split(',').map(num => parseFloat(num.trim()));

    // Bubble Sort algorithm implementation
    for (let i = 0; i < numArray.length - 1; i++) {
        for (let j = 0; j < numArray.length - i - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                // Swap the elements
                let temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }
        }
    }

    // Display the sorted array
    document.getElementById('result').innerText = `Sorted array is: ${numArray.join(', ')}`;
}
