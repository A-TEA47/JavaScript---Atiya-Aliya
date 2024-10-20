let myObject = {};

function displayObject() {
    document.getElementById('objectDisplay').innerText = JSON.stringify(myObject, null, 2);
}

function addProperty() {
    const name = document.getElementById('propertyName').value;
    const value = document.getElementById('propertyValue').value;

    if (name && value) {
        myObject[name] = value;
        displayObject();
        clearInputs();
    } else {
        alert("Please enter both property name and value.");
    }
}

function updateProperty() {
    const name = document.getElementById('propertyName').value;
    const value = document.getElementById('propertyValue').value;

    if (name in myObject) {
        if (value) {
            myObject[name] = value;
            displayObject();
            clearInputs();
        } else {
            alert("Please enter a new value to update.");
        }
    } else {
        alert("Property does not exist.");
    }
}

function removeProperty() {
    const name = document.getElementById('propertyName').value;

    if (name in myObject) {
        delete myObject[name];
        displayObject();
        clearInputs();
    } else {
        alert("Property does not exist.");
    }
}

function clearInputs() {
    document.getElementById('propertyName').value = '';
    document.getElementById('propertyValue').value = '';
}
