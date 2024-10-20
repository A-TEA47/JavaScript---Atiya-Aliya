function countVowels() {
    let str = document.getElementById('inputString').value.toLowerCase();

    let vowels = 'aeiou';

    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById('result').innerText = `Number of vowels: ${count}`;
}
