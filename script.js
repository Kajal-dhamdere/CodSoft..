let currentInput = "";

function appendValue(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearScreen() {
    currentInput = "";
    document.getElementById("result").value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById("result").value = currentInput;
    } catch (error) {
        document.getElementById("result").value = "Error";
        currentInput = "";
    }
}
