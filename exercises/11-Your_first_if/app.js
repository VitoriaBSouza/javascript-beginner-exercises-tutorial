let total = parseInt(prompt('How many km are left to go?'));

// Your code below:
<<<<<<< HEAD

function HowMany(){

    total = parseInt(total);

    if (total > 100){
        console.log("We still have a bit of driving left to go");
    }
    
    else if ((total > 50) && (total <= 100)){
        console.log("We'll be there in 5 minutes");
    }
    else if (total <= 50){
        console.log("I'm parking. I'll see you right now");
    }
    
}

HowMany();
=======
function distance(total) {
    let number;
    if (total >= 101) {
        number = "We still have a bit of driving left to go";
    } else if ( total >= 51) {
        number = "We'll be there in 5 minutes";
    } else {
        number = "I'm parking. I'll see you right now";
    }
    return number;
}

console.log(distance(total))
>>>>>>> 7fe78b38eff1c93b8ae53b42d774c175c8645209
