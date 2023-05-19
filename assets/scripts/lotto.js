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
    lhpbtn1 = document.getElementById("lhp-btn1");
    lhpbtn2 = document.getElementById("lhp-btn2");
    lhpbtn3 = document.getElementById("lhp-btn3");
    lhpbtn4 = document.getElementById("lhp-btn4");
    lhpbtn5 = document.getElementById("lhp-btn5");
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
    lhpbtn1.style.display = "block";
    lhpbtn2.style.display = "none";
    lhpbtn3.style.display = "none";
    lhpbtn4.style.display = "none";
    lhpbtn5.style.display = "none";
}

function twoPicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn1 = document.getElementById("lhp-btn1");
    lhpbtn2 = document.getElementById("lhp-btn2");
    lhpbtn3 = document.getElementById("lhp-btn3");
    lhpbtn4 = document.getElementById("lhp-btn4");
    lhpbtn5 = document.getElementById("lhp-btn5");
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
    lhpbtn1.style.display = "none";
    lhpbtn2.style.display = "block";
    lhpbtn3.style.display = "none";
    lhpbtn4.style.display = "none";
    lhpbtn5.style.display = "none";
}

function threePicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn1 = document.getElementById("lhp-btn1");
    lhpbtn2 = document.getElementById("lhp-btn2");
    lhpbtn3 = document.getElementById("lhp-btn3");
    lhpbtn4 = document.getElementById("lhp-btn4");
    lhpbtn5 = document.getElementById("lhp-btn5");
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
    lhpbtn1.style.display = "none";
    lhpbtn2.style.display = "none";
    lhpbtn3.style.display = "block";
    lhpbtn4.style.display = "none";
    lhpbtn5.style.display = "none";
}

function fourPicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn1 = document.getElementById("lhp-btn1");
    lhpbtn2 = document.getElementById("lhp-btn2");
    lhpbtn3 = document.getElementById("lhp-btn3");
    lhpbtn4 = document.getElementById("lhp-btn4");
    lhpbtn5 = document.getElementById("lhp-btn5");
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
    lhpbtn1.style.display = "none";
    lhpbtn2.style.display = "none";
    lhpbtn3.style.display = "none";
    lhpbtn4.style.display = "block";
    lhpbtn5.style.display = "none";
}
function fivePicked(){
    one = document.getElementById("pick1");
    two = document.getElementById("pick2");
    three = document.getElementById("pick3");
    four = document.getElementById("pick4");
    five = document.getElementById("pick5");
    lhpbtn1 = document.getElementById("lhp-btn1");
    lhpbtn2 = document.getElementById("lhp-btn2");
    lhpbtn3 = document.getElementById("lhp-btn3");
    lhpbtn4 = document.getElementById("lhp-btn4");
    lhpbtn5 = document.getElementById("lhp-btn5");
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
    lhpbtn1.style.display = "none";
    lhpbtn2.style.display = "none";
    lhpbtn3.style.display = "none";
    lhpbtn4.style.display = "none";
    lhpbtn5.style.display = "block";
}

function randomLHPNumber(){
    const randomIndex = Math.floor(Math.random() * lhpnumbers.length);
    const randomNum = lhpnumbers[randomIndex];
    lhpnumbers.splice(randomIndex, 1);
    return randomNum;
}

function getLHPNumber1(){
    lhpnumber1 = document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
}

function getLHPNumber2(){
    lhpnumber1 = document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
    lhpnumber2 = document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
}

function getLHPNumber3(){
    lhpnumber1 = document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
    lhpnumber2 = document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
    lhpnumber3 = document.getElementById("lhpnumber03").innerHTML = randomLHPNumber();
}

function getLHPNumber4(){
    lhpnumber1 = document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
    lhpnumber2 = document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
    lhpnumber3 = document.getElementById("lhpnumber03").innerHTML = randomLHPNumber();
    lhpnumber4 = document.getElementById("lhpnumber04").innerHTML = randomLHPNumber();
}

function getLHPNumber5(){
    lhpnumber1 = document.getElementById("lhpnumber01").innerHTML = randomLHPNumber();
    lhpnumber2 = document.getElementById("lhpnumber02").innerHTML = randomLHPNumber();
    lhpnumber3 = document.getElementById("lhpnumber03").innerHTML = randomLHPNumber();
    lhpnumber4 = document.getElementById("lhpnumber04").innerHTML = randomLHPNumber();
    lhpnumber5 = document.getElementById("lhpnumber05").innerHTML = randomLHPNumber();
}

/* EuroMillions */

var emnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 45, 46, 47, 48, 49,
    50];

var emluckystars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12];

function randomEMNumber(){
    const randomIndex = Math.floor(Math.random() * emnumbers.length);
    const randomNum = emnumbers[randomIndex];
    emnumbers.splice(randomIndex, 1);
    return randomNum;
}

function randomLSNumber(){
    const randomIndex = Math.floor(Math.random() * emluckystars.length);
    const randomNum = emluckystars[randomIndex];
    emluckystars.splice(randomIndex, 1);
    return randomNum;
}

function getEMNumber(){
    document.getElementById("emnumber01").innerHTML = randomEMNumber();
    document.getElementById("emnumber02").innerHTML = randomEMNumber();
    document.getElementById("emnumber03").innerHTML = randomEMNumber();
    document.getElementById("emnumber04").innerHTML = randomEMNumber();
    document.getElementById("emnumber05").innerHTML = randomEMNumber();
    document.getElementById("lsnumber01").innerHTML = randomLSNumber();
    document.getElementById("lsnumber02").innerHTML = randomLSNumber();
}

/* EuroMillions HotPicks */

var emhpnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 45, 46, 47, 48, 49,
    50];

function emhpOnePicked(){
    one = document.getElementById("empick1");
    two = document.getElementById("empick2");
    three = document.getElementById("empick3");
    four = document.getElementById("empick4");
    five = document.getElementById("empick5");
    emhpbtn1 = document.getElementById("emhp-btn1");
    emhpbtn2 = document.getElementById("emhp-btn2");
    emhpbtn3 = document.getElementById("emhp-btn3");
    emhpbtn4 = document.getElementById("emhp-btn4");
    emhpbtn5 = document.getElementById("emhp-btn5");
    emhpnumber1 = document.getElementById("emhpnumber01");
    emhpnumber2 = document.getElementById("emhpnumber02");
    emhpnumber3 = document.getElementById("emhpnumber03");
    emhpnumber4 = document.getElementById("emhpnumber04");
    emhpnumber5 = document.getElementById("emhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    emhpnumber1.style.display = "block";
    emhpbtn1.style.display = "block";
    emhpbtn2.style.display = "none";
    emhpbtn3.style.display = "none";
    emhpbtn4.style.display = "none";
    emhpbtn5.style.display = "none";
}

function emhpTwoPicked(){
    one = document.getElementById("empick1");
    two = document.getElementById("empick2");
    three = document.getElementById("empick3");
    four = document.getElementById("empick4");
    five = document.getElementById("empick5");
    emhpbtn1 = document.getElementById("emhp-btn1");
    emhpbtn2 = document.getElementById("emhp-btn2");
    emhpbtn3 = document.getElementById("emhp-btn3");
    emhpbtn4 = document.getElementById("emhp-btn4");
    emhpbtn5 = document.getElementById("emhp-btn5");
    emhpnumber1 = document.getElementById("emhpnumber01");
    emhpnumber2 = document.getElementById("emhpnumber02");
    emhpnumber3 = document.getElementById("emhpnumber03");
    emhpnumber4 = document.getElementById("emhpnumber04");
    emhpnumber5 = document.getElementById("emhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    emhpnumber1.style.display = "block";
    emhpnumber2.style.display = "block";
    emhpbtn1.style.display = "none";
    emhpbtn2.style.display = "block";
    emhpbtn3.style.display = "none";
    emhpbtn4.style.display = "none";
    emhpbtn5.style.display = "none";
}

function emhpThreePicked(){
    one = document.getElementById("empick1");
    two = document.getElementById("empick2");
    three = document.getElementById("empick3");
    four = document.getElementById("empick4");
    five = document.getElementById("empick5");
    emhpbtn1 = document.getElementById("emhp-btn1");
    emhpbtn2 = document.getElementById("emhp-btn2");
    emhpbtn3 = document.getElementById("emhp-btn3");
    emhpbtn4 = document.getElementById("emhp-btn4");
    emhpbtn5 = document.getElementById("emhp-btn5");
    emhpnumber1 = document.getElementById("emhpnumber01");
    emhpnumber2 = document.getElementById("emhpnumber02");
    emhpnumber3 = document.getElementById("emhpnumber03");
    emhpnumber4 = document.getElementById("emhpnumber04");
    emhpnumber5 = document.getElementById("emhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    emhpnumber1.style.display = "block";
    emhpnumber2.style.display = "block";
    emhpnumber3.style.display = "block";
    emhpbtn1.style.display = "none";
    emhpbtn2.style.display = "none";
    emhpbtn3.style.display = "block";
    emhpbtn4.style.display = "none";
    emhpbtn5.style.display = "none";
}

function emhpFourPicked(){
    one = document.getElementById("empick1");
    two = document.getElementById("empick2");
    three = document.getElementById("empick3");
    four = document.getElementById("empick4");
    five = document.getElementById("empick5");
    emhpbtn1 = document.getElementById("emhp-btn1");
    emhpbtn2 = document.getElementById("emhp-btn2");
    emhpbtn3 = document.getElementById("emhp-btn3");
    emhpbtn4 = document.getElementById("emhp-btn4");
    emhpbtn5 = document.getElementById("emhp-btn5");
    emhpnumber1 = document.getElementById("emhpnumber01");
    emhpnumber2 = document.getElementById("emhpnumber02");
    emhpnumber3 = document.getElementById("emhpnumber03");
    emhpnumber4 = document.getElementById("emhpnumber04");
    emhpnumber5 = document.getElementById("emhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    emhpnumber1.style.display = "block";
    emhpnumber2.style.display = "block";
    emhpnumber3.style.display = "block";
    emhpnumber4.style.display = "block";
    emhpbtn1.style.display = "none";
    emhpbtn2.style.display = "none";
    emhpbtn3.style.display = "none";
    emhpbtn4.style.display = "block";
    emhpbtn5.style.display = "none";
}
function emhpFivePicked(){
    one = document.getElementById("empick1");
    two = document.getElementById("empick2");
    three = document.getElementById("empick3");
    four = document.getElementById("empick4");
    five = document.getElementById("empick5");
    emhpbtn1 = document.getElementById("emhp-btn1");
    emhpbtn2 = document.getElementById("emhp-btn2");
    emhpbtn3 = document.getElementById("emhp-btn3");
    emhpbtn4 = document.getElementById("emhp-btn4");
    emhpbtn5 = document.getElementById("emhp-btn5");
    emhpnumber1 = document.getElementById("emhpnumber01");
    emhpnumber2 = document.getElementById("emhpnumber02");
    emhpnumber3 = document.getElementById("emhpnumber03");
    emhpnumber4 = document.getElementById("emhpnumber04");
    emhpnumber5 = document.getElementById("emhpnumber05");
    one.style.display = "none";
    two.style.display = "none";
    three.style.display = "none";
    four.style.display = "none";
    five.style.display = "none";
    emhpnumber1.style.display = "block";
    emhpnumber2.style.display = "block";
    emhpnumber3.style.display = "block";
    emhpnumber4.style.display = "block";
    emhpnumber5.style.display = "block";
    emhpbtn1.style.display = "none";
    emhpbtn2.style.display = "none";
    emhpbtn3.style.display = "none";
    emhpbtn4.style.display = "none";
    emhpbtn5.style.display = "block";
}

function randomEMHPNumber(){
    const randomIndex = Math.floor(Math.random() * emhpnumbers.length);
    const randomNum = emhpnumbers[randomIndex];
    emhpnumbers.splice(randomIndex, 1);
    return randomNum;
}

function getEMHPNumber1(){
    emhpnumber1 = document.getElementById("emhpnumber01").innerHTML = randomEMHPNumber();
}

function getEMHPNumber2(){
    emhpnumber1 = document.getElementById("emhpnumber01").innerHTML = randomEMHPNumber();
    emhpnumber2 = document.getElementById("emhpnumber02").innerHTML = randomEMHPNumber();
}

function getEMHPNumber3(){
    emhpnumber1 = document.getElementById("emhpnumber01").innerHTML = randomEMHPNumber();
    emhpnumber2 = document.getElementById("emhpnumber02").innerHTML = randomEMHPNumber();
    emhpnumber3 = document.getElementById("emhpnumber03").innerHTML = randomEMHPNumber();
}

function getEMHPNumber4(){
    emhpnumber1 = document.getElementById("emhpnumber01").innerHTML = randomEMHPNumber();
    emhpnumber2 = document.getElementById("emhpnumber02").innerHTML = randomEMHPNumber();
    emhpnumber3 = document.getElementById("emhpnumber03").innerHTML = randomEMHPNumber();
    emhpnumber4 = document.getElementById("emhpnumber04").innerHTML = randomEMHPNumber();
}

function getEMHPNumber5(){
    emhpnumber1 = document.getElementById("emhpnumber01").innerHTML = randomEMHPNumber();
    emhpnumber2 = document.getElementById("emhpnumber02").innerHTML = randomEMHPNumber();
    emhpnumber3 = document.getElementById("emhpnumber03").innerHTML = randomEMHPNumber();
    emhpnumber4 = document.getElementById("emhpnumber04").innerHTML = randomEMHPNumber();
    emhpnumber5 = document.getElementById("emhpnumber05").innerHTML = randomEMHPNumber();
}

/* Set For life */

var sflnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 45, 46, 47];

var sfllifeball = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function randomSFLNumber(){
    const randomIndex = Math.floor(Math.random() * sflnumbers.length);
    const randomNum = sflnumbers[randomIndex];
    sflnumbers.splice(randomIndex, 1);
    return randomNum;
}

function randomSFLBall(){
    const randomIndex = Math.floor(Math.random() * sfllifeball.length);
    const randomNum = sfllifeball[randomIndex];
    sfllifeball.splice(randomIndex, 1);
    return randomNum;
}

function getSFLNumber(){
    document.getElementById("sflnumber01").innerHTML = randomSFLNumber();
    document.getElementById("sflnumber02").innerHTML = randomSFLNumber();
    document.getElementById("sflnumber03").innerHTML = randomSFLNumber();
    document.getElementById("sflnumber04").innerHTML = randomSFLNumber();
    document.getElementById("sflnumber05").innerHTML = randomSFLNumber();
    document.getElementById("lifeballnumber01").innerHTML = randomSFLBall();
    document.getElementById("lifeballnumber02").innerHTML = randomSFLBall();
}

/* Thunderball */

var tbnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39];

var TBnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function randomtbNumber(){
    const randomIndex = Math.floor(Math.random() * tbnumbers.length);
    const randomNum = tbnumbers[randomIndex];
    tbnumbers.splice(randomIndex, 1);
    return randomNum;
}

function randomTB(){
    const randomIndex = Math.floor(Math.random() * TBnumbers.length);
    const randomNum = TBnumbers[randomIndex];
    TBnumbers.splice(randomIndex, 1);
    return randomNum;
}

function getTBNumber(){
    document.getElementById("tbnumber01").innerHTML = randomtbNumber();
    document.getElementById("tbnumber02").innerHTML = randomtbNumber();
    document.getElementById("tbnumber03").innerHTML = randomtbNumber();
    document.getElementById("tbnumber04").innerHTML = randomtbNumber();
    document.getElementById("tbnumber05").innerHTML = randomtbNumber();
    document.getElementById("TBnumber01").innerHTML = randomTB();
}



function myFunction(count) {
    numbers = [];
    while (numbers.length < count) {
        x = Math.floor(Math.random() * 49);
        if(!numbers.includes(x)) {
           numbers.push(x)
        }
    }
    return numbers;
}

function clicked(){
    document.getElementById("number1").innerHTML = myFunction(5);
}

