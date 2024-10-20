function deepCloneObject() {
    let input = document.getElementById('inputObject').value;
    let originalObject;
    
    try {
        originalObject = JSON.parse(input);
    } catch (e) {
        document.getElementById('result').innerText = "Invalid JSON format.";
        return;
    }

    function deepClone(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (Array.isArray(obj)) return obj.map(deepClone);
        
        const clonedObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clonedObj[key] = deepClone(obj[key]);
            }
        }
        return clonedObj;
    }

    let clonedObject = deepClone(originalObject);
    document.getElementById('result').innerText = JSON.stringify(clonedObject, null, 2);
}
