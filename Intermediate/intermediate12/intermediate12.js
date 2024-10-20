function findIntersection() {
    let array1 = document.getElementById('array1').value.split(',').map(Number);
    let array2 = document.getElementById('array2').value.split(',').map(Number);
    let intersection = array1.filter(value => array2.includes(value));
    document.getElementById('result').innerText = `Common elements: ${intersection.join(', ')}`;
}
