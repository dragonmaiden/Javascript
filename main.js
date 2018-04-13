//var name = prompt("May i know what is your name?");
//alert("Thanks for the information " + name + " Lets play an addition game now!");

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