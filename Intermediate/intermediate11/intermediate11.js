function capitalizeWords() {
    let sentence = document.getElementById('inputSentence').value;
    let capitalizedSentence = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    document.getElementById('result').innerText = `Capitalized sentence: ${capitalizedSentence}`;
}
