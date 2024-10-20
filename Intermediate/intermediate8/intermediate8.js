function getUniqueValues() {
    let input = document.getElementById('inputArray').value;
    let arr = input.split(',').map(item => item.trim()); 

    let uniqueValues = [...new Set(arr)];

    document.getElementById('result').innerText = `Unique values: ${uniqueValues.join(', ')}`;
}
