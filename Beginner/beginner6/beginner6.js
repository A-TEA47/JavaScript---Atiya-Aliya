function checkPalindrome() {
    let str = document.getElementById('inputString').value;
    
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    if (cleanedStr === reversedStr && str !== "") {
        document.getElementById('result').innerText = `"${str}" is a palindrome!`;
    } else {
        document.getElementById('result').innerText = `"${str}" is not a palindrome.`;
    }
}
