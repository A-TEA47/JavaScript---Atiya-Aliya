function checkAnagram() {

    let str1 = document.getElementById('string1').value.toLowerCase().replace(/[^a-z0-9]/g, '');
    let str2 = document.getElementById('string2').value.toLowerCase().replace(/[^a-z0-9]/g, '');

    
    let isAnagram = str1.split('').sort().join('') === str2.split('').sort().join('');

    if (isAnagram) {
        document.getElementById('result').innerText = "The two strings are anagrams.";
    } else {
        document.getElementById('result').innerText = "The two strings are not anagrams.";
    }
}
