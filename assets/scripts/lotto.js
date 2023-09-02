/* Lotto */

function myFunction(count) {
    numbers = [];
    while (numbers.length < count) {
        x = Math.floor(Math.random() * 49);
        if(!numbers.includes(x)) {
           numbers.push(x);
           newnumbers = numbers.join(" | ");
        }
    }
    return newnumbers;
}

function clicked() {
    document.getElementById("number1").innerHTML = myFunction(5);
}

/* Euro Millions */

function emFunction() {
    const numbers = [];
    while (numbers.length < 5) {
        x = Math.floor(Math.random() * 51);
        if(!numbers.includes(x)) {
           numbers.push(x);
        }
    }
    const emLuckyStars = [];
    while (emLuckyStars.length < 2) {
        x = Math.floor(Math.random() * 15);
        if(!emLuckyStars.includes(x)) {
           emLuckyStars.push(x);
        }
    }
    const euroMillions = numbers.concat(emLuckyStars).join(" | ");
    return euroMillions;
}


function embtn() {
    document.getElementById("em-number").innerHTML = emFunction();
}



