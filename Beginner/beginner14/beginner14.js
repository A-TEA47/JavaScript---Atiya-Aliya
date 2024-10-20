function removeDuplicates() {
    
    let input = document.getElementById('inputArray').value;
    let array = input.split(',').map(item => item.trim());

    
    let uniqueArray = [...new Set(array)];

    document.getElementById('result').innerText = `Array without duplicates: ${uniqueArray.join(', ')}`;
}
