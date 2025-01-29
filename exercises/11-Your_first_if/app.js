let total = parseInt(prompt('How many km are left to go?'));

// Your code below:
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