// all clear function setting display "result" to be an empty string
function AC() {
    document.getElementById("result").value = " ";
}

//deletes last previous input
function del() {
    document.getElementById("result").value = document.getElementById("result").value.slice(0, -1);
}

//display function -> given parameter of value
function display(value) {
    document.getElementById("result").value += value;
}

//calucation function
function calculate() {
    var numbers = document.getElementById("result").value;
    var calculation = eval(numbers);
    document.getElementById("result").value = calculation;
}




