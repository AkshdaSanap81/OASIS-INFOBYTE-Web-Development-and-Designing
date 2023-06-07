function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    var currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}
