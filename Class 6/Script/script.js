//-----------------------------------------------------------FIRST EXERCISE------------------------------------------------------------
/*let firstDiv = document.getElementById("first");
console.log(firstDiv);

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

let lastDiv = document.getElementsByTagName("div")[2];
console.log(lastDiv);

let header3 = lastDiv.lastElementChild;console.log(header3);

let header1 = lastDiv.firstElementChild;
console.log(header1);

let secondParagraph = allParagraphs[1];
console.log(secondParagraph.textContent);

let text = document.getElementsByTagName("text")[0];
text.innerHTML += ' text.';
console.log(text);

header1.innerHTML = "Text Changed";
console.log(header1);

header3.textContent = "And also this is changed :D";
console.log(header3);*/


//-----------------------------------------------------------SECOND EXERCISE------------------------------------------------------------
/*let chickenDiv = document.getElementById("chickenDiv");

function weightInChickens(x){
    if(isNaN(x) || (x==="")){
        chickenDiv.innerHTML =
        `<p style="color: red;">
            You have entered wrong input!
        </p>`;
    }else{
        x /= 0.5;
        chickenDiv.innerHTML +=
        `<p style="color: #111111;; background-color: #14a9db; font-size: 50px;">
            You weight ${x} chicken.
        </p> `;
    }
}

let weight = parseFloat(prompt(`How much do you weigth in kilograms?`));
weightInChickens(weight);*/


//-----------------------------------------------------------HOMEWORK PART 1------------------------------------------------------------
/*let paragraphs = document.getElementsByTagName("p");
let firstHeader = document.getElementById("myTitle");
let allDivs = document.getElementsByTagName("div");
let lastDiv = allDivs[2];
let secondHeader = lastDiv.firstElementChild;
let thirdHeader = lastDiv.lastElementChild;

firstHeader.innerHTML = "This is the first header!";
secondHeader.innerHTML = "This is the second header";
thirdHeader.innerHTML = "This is the third header";

paragraphs[0].textContent = "This is the first paragraph";
paragraphs[1].textContent = "This is the second paragraph";

let text = document.getElementsByTagName("text")[0];
text.innerHTML = "It bothered me to leave this one unchanged :D ";*/


//-----------------------------------------------------------HOMEWORK PART 2------------------------------------------------------------
/*let result = document.getElementById("firstDiv");
let sum = document.getElementsByTagName("div")[1];

function validateArray(x){
    for(let i=0; i<x.length; i++){
        if(isNaN(x[i]) || (x="")){
            return false;
        }else{
            return true;
        }
    }
}

function printArrayNumbers(x){
    if(validateArray(x)===false){
        result.innerHTML =
        `<p style="color: #9c0008; font-size: 40px;">
        Wrong input! Refresh the page and try again.
        </p>`
    }else{
        result.innerHTML +=
        `<p style="font-size: 30px;">Your array numbers are:
        <ul>`;
        for(let i=0; i<x.length; i++){
            result.innerHTML +=
            `<li style="font-size: 25px;">${x[i]}</li>`;
        }
        result.innerHTML +=
        `</ul></p>`;
        printArraySum(x);
    }
}

function printArraySum(x){
    if(validateArray(x)===true){
        sum.innerHTML =`Sum: `;
        finalSum = 0;
        for(let i=0; i<x.length; i++){
            sum.innerHTML +=
            `${x[i]}`;
            finalSum+=x[i];
            if(i<x.length-1){
                sum.innerHTML += " + ";
            }else{
                sum.innerHTML+= ` = ${finalSum}`;
            }
        }
    }
}



let num = parseInt(prompt(`How many numbers?`));
let array = [];
for(let i=0; i<num; i++){
    array.push(parseInt(prompt(`Enter your number:`)));
}
console.log(array);
printArrayNumbers(array);*/


//-----------------------------------------------------------BONUS HOMEWORK------------------------------------------------------------
let header = document.getElementById("header");
let paragraph = document.getElementById("paragraph");
let table = document.getElementById("table");

function validateString(x){
    let temp=0;
    for(let i=0; i<x.length; i++){
        if(isNaN(x[i]) && (x[i] !== null)){
            continue;
        }else{temp++}
    }
    if(temp === 0){
        return true;
    }
}

function validateHeader(x){
    if(isNaN(x) && (x!==null)){
        return true;
    }else{
        return false;
    }
}

function createTable(x){
    table.style.border = "1px solid black";
    let head = table.createTHead();
    head.innerHTML = '<b>Ingredients: </b>';
    for(let i=0; i<x.length; i++){
        let row = table.insertRow(i);
        let cell = row.insertCell(0);
        cell.innerHTML = `${x[i]}`;
    }
}

let recipeName = prompt(`What is the name of the recipe?`);
let numberOfIngredients = parseInt(prompt('How many ingredients you need?'));
let ingredients = [];

if(!isNaN(numberOfIngredients)){
    for(let i=0; i<numberOfIngredients; i++){
        ingredients.push(prompt(`Enter ingredient: `));
    }
    if(validateHeader(recipeName) && validateString(ingredients)){
        header.innerHTML = `${recipeName}`;
        createTable(ingredients);
    }else{
        header.style.color = "red";
        header.innerHTML = `Wrong input! Reload the page and try again.`;
    }
}else{
    header.style.color = "red";
    header.innerHTML = `Wrong input! Reload the page and try again.`;
}