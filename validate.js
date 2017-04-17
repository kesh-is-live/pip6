function validateForm() {
	var error = "Invalid input."
	
	var y = document.getElementsByName("Y")[0].value;
	if (isNaN(y) || y <=-5 || y >= 5 ) {
		alert("Неправильно введен Y");
		return false;
	}
	var r = document.getElementsByName("R")[0].value;
	if (isNaN(r) || r <=2 || r >= 5) {
		alert("Неправильно введен R");
		return false;
	}
	return true;
}