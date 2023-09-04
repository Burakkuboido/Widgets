/* Lotto */

function myFunction(count) {
    numbers = [];
    while (numbers.length < count) {
        x = Math.floor(Math.random() * 49);
        if (!numbers.includes(x)) {
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
        if (!numbers.includes(x)) {
            numbers.push(x);
        }
    }
    const emLuckyStars = [];
    while (emLuckyStars.length < 2) {
        x = Math.floor(Math.random() * 15);
        if (!emLuckyStars.includes(x)) {
            emLuckyStars.push(x);
        }
    }
    const euroMillions = numbers.concat(emLuckyStars).join(" | ");
    return euroMillions;
}


function embtn() {
    document.getElementById("em-number").innerHTML = emFunction();
}

/* Set For Life */


function s4lFunction(num1, num2) {
    const numbers = [];
    while (numbers.length < 5) {
        x = Math.floor(Math.random() * num1);
        if (!numbers.includes(x)) {
            numbers.push(x);
        }
    }
    const lifeball = [];
    while (lifeball.length < 2) {
        x = Math.floor(Math.random() * num2);
        if (!lifeball.includes(x)) {
            lifeball.push(x);
        }
    }
    const setforlife = numbers.concat(lifeball).join(" | ");
    return setforlife;
}

function sflbtn() {
    document.getElementById("s4l-number").innerHTML = s4lFunction(48, 11);
}

/* ThunderBall */


function tbFunction(num1, num2) {
    const numbers = [];
    while (numbers.length < 5) {
        x = Math.floor(Math.random() * num1);
        if (!numbers.includes(x)) {
            numbers.push(x);
        }
    }
    const tball = [];
    while (tball.length < 2) {
        x = Math.floor(Math.random() * num2);
        if (!tball.includes(x)) {
            tball.push(x);
        }
    }
    const thunderball = numbers.concat(tball).join(" | ");
    return thunderball;
}

function tbbtn() {
    document.getElementById("tb-number").innerHTML = tbFunction(40, 15);
}


/* Lotto HotPicks */

let btns = document.querySelectorAll('.hpnum');

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    number = i.innerHTML;
    const numbers = [];
    while (numbers.length < number) {
        x = Math.floor(Math.random() * 60);
        if (!numbers.includes(x)) {
            numbers.push(x);
            newnumbers = numbers.join(" | ");
        }
    }
    document.querySelector('.lhp').innerHTML = newnumbers;
  });
});


/* EuroMillions HotPicks */

let emhpbtn = document.querySelectorAll('.emhpnum');

emhpbtn.forEach(function (i) {
  i.addEventListener('click', function() {
    number = i.innerHTML;
    const numbers = [];
    while (numbers.length < number) {
        x = Math.floor(Math.random() * 51);
        if (!numbers.includes(x)) {
            numbers.push(x);
            newnumbers = numbers.join(" | ");
        }
    }
    document.querySelector('.emhp').innerHTML = newnumbers;
  });
});

