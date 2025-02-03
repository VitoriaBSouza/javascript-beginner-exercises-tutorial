function sing() {
    let song = "";
    for (let string = 0; string <= 10; string++){
        if (string === 4 ) song += "there will be an answer, ";
        else if (string === 10) song += "whisper words of wisdom, let it be";
        else song += "let it be, ";
    }
    return song;
}

//Your code above ^^^

console.log(sing());