function reverseString() {
    // Get the input string from the user
    let str = document.getElementById('inputString').value;
    
    // Reverse the string
    let reversedStr = str.split('').reverse().join('');
    
    // Display the result
    document.getElementById('result').innerText = `Reversed string is: ${reversedStr}`;
}
