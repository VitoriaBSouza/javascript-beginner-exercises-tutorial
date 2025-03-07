function getColor(colorNumber = 0) {
	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

function getAllStudentColors() {
	for (let i = 0; i < 10; i++) {
		let exampleColor = getColor(Math.floor(Math.random() * 4) + 1);
		console.log(exampleColor);
		}	

<<<<<<< HEAD
	for (let student = 0; student < 9; student++){

		let randomColor = Math.floor(Math.random()*4)+1;
		console.log(getColor(randomColor));
	}

	let exampleColor = getColor(1);

	console.log (exampleColor);
	
=======
>>>>>>> 7fe78b38eff1c93b8ae53b42d774c175c8645209
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

