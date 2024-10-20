function sumArrayElements() {

    let input = document.getElementById('arrayInput').value;
    
    let numbers = input.split(',').map(Number);

    let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    
    document.getElementById('result').innerText = `Sum of array elements is: ${sum}`;
}
