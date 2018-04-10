var name = prompt("May i know what is your name?");
alert("Thanks for the information " + name + " Lets play an addition game now!");

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
	var one = parseFloat(numOne.value) || 0;
	var two = parseFloat(numTwo.value) || 0;
	document.getElementById("answer").value = one + two;
}