function farACel(){
	var tempFahr = getElementById("c").value;
	var fahrenheit = (parseInt(tempFahr)*1.8) + 32;

	document.getElementById("c").value= fahrenheit;
}

function celAFahr(){
	var tempCel = getElementById("f").value;
	var celsius = (parseInt(tempCel)-32) * 1.8;

	document.getElementById("f").value= celcius
}