function convertNumberToString() {

    let num = document.getElementById('inputNumber').value;
    
    let str = num.toString();
    
    document.getElementById('result').innerText = `String representation is: ${str}`;
}
