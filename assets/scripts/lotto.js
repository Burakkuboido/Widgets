var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 45, 46, 47, 48, 49];

function randomNumber(){
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const randomNum = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    return randomNum;
}

function getNumber(){
    document.getElementById("number01").innerHTML = randomNumber();
    document.getElementById("number02").innerHTML = randomNumber();
    document.getElementById("number03").innerHTML = randomNumber();
    document.getElementById("number04").innerHTML = randomNumber();
    document.getElementById("number05").innerHTML = randomNumber();
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