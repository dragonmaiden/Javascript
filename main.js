//var name = prompt("May i know what is your name?");

var numOne = document.getElementById("sum-one");
var numTwo = document.getElementById("sum-two");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	document.getElementById("sum-answer").value = one + two;
}

var lessOne = document.getElementById("less-one");
var lessTwo = document.getElementById("less-two");

lessOne.addEventListener("input", less);
lessTwo.addEventListener("input", less);

function less(){
	var one = parseFloat(lessOne.value) || 0;
	var two = parseFloat(lessTwo.value) || 0;
	document.getElementById("less-answer").value = one - two;
}

//Button Generator
document.getElementById("demo").addEventListener("click", generator);

function generator() {
    var num = Math.floor((Math.random()*5) + 1);
    alert("The chosen random number for " + name + " is: " + num);
}
