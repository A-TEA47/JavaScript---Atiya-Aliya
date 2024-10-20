function flattenArray() {
    try {
        let inputArray = JSON.parse(document.getElementById('inputArray').value);

        function flatten(arr) {
            return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
        }


        let flattenedArray = flatten(inputArray);
        document.getElementById('result').innerText = `Flattened array: ${JSON.stringify(flattenedArray)}`;
    } catch (error) {
        document.getElementById('result').innerText = "Invalid input. Please enter a valid nested array.";
    }
}
