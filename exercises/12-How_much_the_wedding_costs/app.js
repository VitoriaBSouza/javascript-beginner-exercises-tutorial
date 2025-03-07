let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    let cost = 0;
    // Your code here
<<<<<<< HEAD
    if (guests <= 50){
        return cost = 4000;
    }
    else if ((guests > 50) && (guests <= 100)){
        return cost = 10000;
    }
    else if ((guests > 100) && (guests <= 200)) {
        return cost = 15000;
    }
    else if (guests >200){
        return cost = 20000;
    }
 
=======
    if (guests >= 201) {
        cost = 20000
    }
    else if (guests >=101) {
        cost = 15000
    }
    else if (guests >=51) {
        cost = 10000
    }
    else {
        cost= 4000
    }
>>>>>>> 7fe78b38eff1c93b8ae53b42d774c175c8645209

    return cost;
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');
