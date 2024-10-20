function countWords() {
    // Get the input text from the textarea
    let text = document.getElementById('inputText').value;

    // Split the text into words using regex to handle punctuation and multiple spaces
    let words = text.match(/\w+/g);
    
    // Create an object to hold word counts
    let wordCount = {};

    // Count occurrences of each word
    if (words) {
        words.forEach(word => {
            word = word.toLowerCase(); // Convert to lowercase for case-insensitivity
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
    }

    // Prepare the result to display
    let result = '';
    for (let word in wordCount) {
        result += `${word}: ${wordCount[word]}\n`;
    }

    // Display the result in the 'result' pre element
    document.getElementById('result').innerText = result || "No words found.";
}
