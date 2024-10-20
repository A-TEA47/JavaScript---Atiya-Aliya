function checkSubstring() {
    let mainStr = document.getElementById('mainString').value;
    let subStr = document.getElementById('substring').value;

    if (mainStr.includes(subStr)) {
        document.getElementById('result').innerText = `"${subStr}" is a substring of "${mainStr}"`;
    } else {
        document.getElementById('result').innerText = `"${subStr}" is NOT a substring of "${mainStr}"`;
    }
}
