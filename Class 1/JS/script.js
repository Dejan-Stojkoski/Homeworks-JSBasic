//Phones+tax
var phonePrice = 119.95;
var tax = (phonePrice / 100) *5;
var numberOfPhones = 30;

var finalPrice = (phonePrice + tax) * numberOfPhones;
console.log("Total phones plus tax price: " + finalPrice + '.');


/* Extra Homework
Calculate the reminder of two numbers. */
var dividend = 1388;
var divisor = 3;

var reminder = dividend % divisor;
console.log("The reminder is: " + reminder + ".");

//The farm problem
var numberOfChickens = 3;
var numberOfCows = 4;
var numberOfPigs = 7;
var twoLegs = 2;
var fourLegs = 4;

var totalNumberOfChickenLegs = numberOfChickens * twoLegs;
var totalNumberOfCowLegs = numberOfCows * fourLegs;
var totalNumberOfPigLegs = numberOfPigs * fourLegs;
var totalLegs = totalNumberOfChickenLegs + totalNumberOfCowLegs + totalNumberOfPigLegs;
console.log("The total number of chicken legs is " + totalNumberOfChickenLegs + ", the total number of cow legs is " + totalNumberOfCowLegs + ", the total number of pig legs is " + totalNumberOfPigLegs + " and the total number of legs in the farm is " + totalLegs + ".");

//Perimeter of a rectangle
var rectangleSideA = 4;
var rectangleSideB = 7;

var perimeter = 2 * (rectangleSideA+rectangleSideB);
console.log("The perimeter of the rectangle is " + perimeter +".");

//Height of equilateral triangle
var triangleSide = 5;
var squareRootOf3 = 1.73205080757;

var heightOfTriangle = (triangleSide * squareRootOf3) / 2;
console.log("The height of the equilateral triangle is " + heightOfTriangle + '.')

