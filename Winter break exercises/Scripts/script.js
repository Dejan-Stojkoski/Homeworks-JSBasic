// EXTRA WINTER HOMEWORK

// * Note: Link this script to your html document and enter your solutions here.
// ** Note: Take all parameters from user input using prompt


// ----------- Task 01 --------------
// Write a JS function that will decide if a number entered by user is even or odd
// Example: isOddOrEven(3)
// Output 'Number 3 is odd number.'
function isOddOrEven (x){
    if(isNaN(x)){
        console.log(`The input is not a number.`);
    }
    else{
        temp = x % 2;
        if(temp===0){
            console.log(`Number ${x} is even number.`);
        }
        else{
            console.log(`Number ${x} is odd number.`);
        }
    }
}


// ------------ Task 02 --------------
// Write a function that takes an integer minutes and converts it to seconds.
// Example: convert(5)
// output 300
function toSecondsConverter (x){
    if (isNaN(x) || (x<0)){
        alert(`Wrong input or negative number.`)
    }
    else{
        console.log(`${x} minutes have ${x * 60} seconds.`);
    }
}


// ------------ Task 03 -------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Example: points(38, 8)
// output 100
function pointsCount (x,y){
    if (isNaN(x) || isNaN(y) || (x<0) || (y<0)){
        alert(`Wrong input or negative number.`);
    }
    else{
        total = (x*2) + (y*3);
        console.log(`The team scored ${x} two-pointers and ${y} three-pointers, and have a total points of ${total}`);
    }
}


// ------------ Task 04 ------------
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// Example: howManyLegs(5, 2, 8)
// output: 50
function howManyLegs (x,y,z){
    if (isNaN(x) || isNaN(y) || isNaN(z) || (x<0) || (y<0) || (z<0)){
        alert(`Wrong input or negative number.`)
    }
    else{
        console.log(`The farm has ${x} chickens, ${y} cows and ${z} pigs, and total of ${(x*2) + ((y+z)*4)} legs.`);
    }
}


// ------------ Task 05 ------------
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// Example: calculate(3, 7, '*')
// output: 21
function calculate (x, y, z) {
    if(isNaN(x) || isNaN(y)){
        console.log(`Wrong number input.`);
    }
    else{
        switch (z) {
            case '+':
                console.log(`The result is: ${x+=y}`);
                break;
            case '-':
                console.log(`The result is: ${x-=y}`);
                break;
            case '*':
                console.log(`The result is: ${x*=y}`);
                break;
            case '/':
                console.log(`The result is: ${x/=y}`);
                break;
            case '%':
                console.log(`The result is: ${x%=y}`);
                break;
            default:
                console.log(`Wrong operator.`)
                break;
        }
    }
}


// ------------- Task 06 -----------
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Example: comp("ABC", "DE")
// output false
function comparison (x,y){
    if(isNaN(x) && isNaN(y)){
         return x.length===y.length;
    }
    else{
        return `Wrong input.`;
    }
}


// ------------- Task 07 -----------
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Example: shouldServeDrinks(17, true) output false
// Example: shouldServeDrinks(19, false) output true
// Example: shouldServeDrinks(30, true) output false
function shouldServeDrinks (x,y){
    if(isNaN(x)  || isNaN(y)){
        console.log(`Wrong input.`);
    }
    else if((x<18) || (y===1)){
        console.log(`Should NOT serve drinks.`)
    }
    else{
        console.log(`Should serve drinks.`)
    }
}


// ------------- Task 08 -----------
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Example: moodToday("happy") output "Today, I am feeling happy"
// Example: moodToday() output "Today, I am feeling neutral"
function moodToday (x){
    if(isNaN(x)){
        switch (x.toLowerCase()) {
            case 'happy':
                mood = 'happy';
                break;
            case 'sad':
                mood = 'sad';
                break;
            case'excited':
                mood = 'excited';
                break;
            case 'angry':
                mood = 'angry';
                break;
            case 'bored':
                mood = 'bored';
                break;
            default:
                mood=`neutral`;
                break;
        }
        console.log(`Today, I am feeling ${mood}.`);
    }
    else if (x===''){
        console.log(`Today, I am feeling neutral.`);
    }
    else{
        console.log(`Numbers can not be a feeling.`)
    }
}


// ------------ Task 09 -----------
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

//The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)
function pieSlicesSplit (x,y,z){
    temp = x - (y*z);
    if(isNaN(x) || isNaN(y) || isNaN(z) || (x<0) || (y<0) || (z<0)){
        return 'Wrong input.';
    }
    else if(temp>0){
        return true;
    }
    else{
        return false;
    }
}


// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248
function totalCups (x){
    if(isNaN(x) || (x<0)){
        console.log(`Wrong input.`)
    }
    else{
        temp = x/6;
        int = Math.floor(temp);
        console.log(`You will have ${x+int} drinks in total.`);
    }
}



//MAIN
let homeworkSwitcher = parseInt(prompt(`Which homework do you want to see? (1-10)`));

switch(homeworkSwitcher){
    case 1 :
        alert(`Odd or Even number.`);
        let oddOrEvenNumber = prompt(`Enter a number to check if it is even or odd:`);
        isOddOrEven(oddOrEvenNumber);
        break;

    case 2 :
        alert('Convert minutes to seconds.');
        let seconds = parseInt(prompt(`How many minutes do you want to convert into seconds?`));
        toSecondsConverter(seconds);
        break;

    case 3 :
        alert(`Total score of a basketball game.`);
        let twoPointers = prompt(`How many 2-pointers the team scored?`);
        let threePointers = prompt(`How many 3-pointers the team scored?`);
        pointsCount(twoPointers, threePointers);
        break;

    case 4 :
        alert(`The farm problem.`);
        let chickens = parseInt(prompt(`How many chickens?`));
        let cows = parseInt(prompt(`How many cows`));
        let pigs = parseInt(prompt(`How many pigs?`));
        howManyLegs(chickens, cows, pigs);
        break;

    case 5 :
        alert(`Simple calculator`);
        let num1 = parseFloat(prompt(`Enter first number: `));
        let num2 = parseFloat(prompt(`Enter second number: `));
        let operator = prompt(`Enter operator:`);
        calculate(num1,num2,operator);
        break;
    case 6 :
        alert(`String length comparison.`);
        let str1 = prompt(`Enter the first string for comparison: `);
        let str2 = prompt(`Enter the second string for comparison: `);
        console.log(comparison (str1, str2));
        break;
    case 7 :
        alert(`Bartender drink control.`);
        let howOldIsCostumer = parseInt(prompt(`How old is the costumer?`));
        let isBartenderOnBreak = parseInt(prompt(`Is the bartender on break? (Choose 1 or 2) \n 1. Yes \n 2. No `));
        shouldServeDrinks(howOldIsCostumer, isBartenderOnBreak);
        break;
    case 8 :
        alert(`Todays mood.`);
        let mood = prompt(`How are you feeling today?`);
        moodToday(mood);
        break;
    case 9 :
        alert(`Equaly divide a pie to people.`);
        let totalSlices = parseInt(prompt(`How many slices have the pie?`));
        let numberOfRecipients = parseInt(prompt(`How many recipients are there?`));
        let slicesEach = parseInt(prompt(`How many slices should each get?`));
        console.log(pieSlicesSplit(totalSlices, numberOfRecipients, slicesEach));
        break;
    case 10 :
        alert(`Coffee cups bonus.`);
        let drinks = parseInt(prompt(`How many drinks will you buy?`));
        totalCups(drinks);
        break;
    default:
        alert(`Only 10 homeworks :D.`)
}