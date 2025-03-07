function getColor(selection)
{
<<<<<<< HEAD
	switch(selection.toLowerCase()){
		// Add more options here
		case "red":
			return true;

		case "green":
			return true;
		case "blue":
			return true;

	    default:
	    	return false;  //returns false because the user picked an unavailable color              
=======
	switch(selection){
		case 'red':
			return true;
		case 'green':
			return true;
		case 'blue':
			return true;
		default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
>>>>>>> 7fe78b38eff1c93b8ae53b42d774c175c8645209
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname.toLocaleLowerCase());

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
