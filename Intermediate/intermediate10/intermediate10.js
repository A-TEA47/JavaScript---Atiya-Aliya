function generateFibonacci() {
    let n = parseInt(document.getElementById('inputNumber').value);
    let fibSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }

    let resultText = n > 0 ? fibSequence.slice(0, n).join(', ') : 'Please enter a positive number.';
    document.getElementById('result').innerText = resultText;
}
