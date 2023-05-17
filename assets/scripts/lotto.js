/* Lotto */

var lottonumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

function randomLottoNumber(){
    const randomIndex = Math.floor(Math.random() * lottonumbers.length);
    const randomNum = lottonumbers[randomIndex];
    lottonumbers.splice(randomIndex, 1);
    return randomNum;
}

function getNumber(){
    document.getElementById("lottonumber01").innerHTML = randomLottoNumber();
    document.getElementById("lottonumber02").innerHTML = randomLottoNumber();
    document.getElementById("lottonumber03").innerHTML = randomLottoNumber();
    document.getElementById("lottonumber04").innerHTML = randomLottoNumber();
    document.getElementById("lottonumber05").innerHTML = randomLottoNumber();
}

/* Lotto HotPicks */

var lhpnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 45, 46, 47, 48, 49,
    50, 51, 52, 53, 54, 55, 56, 57, 58, 59];

function onePicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn = document.getElementById("lhp-btn");
    lhpnumber1 = document.getElementById("lhpnumber01");
    lhpnumber2 = document.getElementById("lhpnumber02");
    lhpnumber3 = document.getElementById("lhpnumber03");
    lhpnumber4 = document.getElementById("lhpnumber04");
    lhpnumber5 = document.getElementById("lhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    lhpnumber1.style.display = "block";
    lhpbtn.style.display = "block";
}

function twoPicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn = document.getElementById("lhp-btn");
    lhpnumber1 = document.getElementById("lhpnumber01");
    lhpnumber2 = document.getElementById("lhpnumber02");
    lhpnumber3 = document.getElementById("lhpnumber03");
    lhpnumber4 = document.getElementById("lhpnumber04");
    lhpnumber5 = document.getElementById("lhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    lhpnumber1.style.display = "block";
    lhpnumber2.style.display = "block";
    lhpbtn.style.display = "block";
}

function threePicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn = document.getElementById("lhp-btn");
    lhpnumber1 = document.getElementById("lhpnumber01");
    lhpnumber2 = document.getElementById("lhpnumber02");
    lhpnumber3 = document.getElementById("lhpnumber03");
    lhpnumber4 = document.getElementById("lhpnumber04");
    lhpnumber5 = document.getElementById("lhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    lhpnumber1.style.display = "block";
    lhpnumber2.style.display = "block";
    lhpnumber3.style.display = "block";
    lhpbtn.style.display = "block";
}

function fourPicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn = document.getElementById("lhp-btn");
    lhpnumber1 = document.getElementById("lhpnumber01");
    lhpnumber2 = document.getElementById("lhpnumber02");
    lhpnumber3 = document.getElementById("lhpnumber03");
    lhpnumber4 = document.getElementById("lhpnumber04");
    lhpnumber5 = document.getElementById("lhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    lhpnumber1.style.display = "block";
    lhpnumber2.style.display = "block";
    lhpnumber3.style.display = "block";
    lhpnumber4.style.display = "block";
    lhpbtn.style.display = "block";
}
function fivePicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn = document.getElementById("lhp-btn");
    lhpnumber1 = document.getElementById("lhpnumber01");
    lhpnumber2 = document.getElementById("lhpnumber02");
    lhpnumber3 = document.getElementById("lhpnumber03");
    lhpnumber4 = document.getElementById("lhpnumber04");
    lhpnumber5 = document.getElementById("lhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    lhpnumber1.style.display = "block";
    lhpnumber2.style.display = "block";
    lhpnumber3.style.display = "block";
    lhpnumber4.style.display = "block";
    lhpnumber5.style.display = "block";
    lhpbtn.style.display = "block";
}

function randomLHPNumber(){
    const randomIndex = Math.floor(Math.random() * lhpnumbers.length);
    const randomNum = lhpnumbers[randomIndex];
    lhpnumbers.splice(randomIndex, 1);
    return randomNum;
}

function getLHPNumber(){
    document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
    if(lhpnumber2.style.display == "block" && lhpnumber3.style.display == "none"){
        document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
    } else if (lhpnumber3.style.display == "block") {
        document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
        document.getElementById("lhpnumber03").innerHTML = randomLHPNumber();
    }
}








/*
I would create a function that accepts an argument called count - This is how many numbers we want to generate.

Next, create a new empty array called numbers

While numbers.length < count, generate a random number between 1-49.

If numbers DOES NOT include the generate number, at it to the numbers array.

We can then return numbers at the end of the function

It would then be the case of doing something like

const randomNumbers = generateRandomNumbers(5);
*/