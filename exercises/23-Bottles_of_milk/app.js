// Your code here:
function sing() {
    for (let string = 99; string >= 0; string--){
        if (string === 1 ){
            console.log ("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        }
        else if (string === 0){
            console.log ("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
        else if (string === 2) {
            console.log(string+ " bottles of milk on the wall, " +string+ " bottles of milk. Take one down and pass it around, " +(string-1)+ " bottle of milk on the wall.");
        }
        else {
            console.log(string+ " bottles of milk on the wall, " +string+ " bottles of milk. Take one down and pass it around, " +(string-1)+ " bottles of milk on the wall.");
        }
    }
}

sing();