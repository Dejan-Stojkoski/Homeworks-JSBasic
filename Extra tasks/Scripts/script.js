//Functions
function fillAnArray(){
    let count = parseInt(prompt(`How many elements would you like?`));
    x=[];
    let temp;
    if(isNaN(count) || (count === "")){
        temp=false;
    }
    else{
        for(let i=0; i<count; i++){
            x.push(parseInt(prompt(`Enter your element: `)));
        }
    }
    for(let i=0; i<x.length; i++){
        if(isNaN(x[i])){
            temp=false;
        }
    }
    if(temp!==false){
        return x;
    }
    else{
        return temp;
    }
}

function createArray(x){
    let newArray=[];
    for(let i=1; i<=x; i++){
        newArray.push(i);
    }
    return newArray;
}

function getFirstValue(x){
    return x.shift();
}

function reverse(x){
    let newArray=[];
    for(let i=x.length-1; i>=0; i--){
        newArray.push(x[i]);
    }
    return newArray;
}

function search(x,y){
    return x.indexOf(y);
}

function check(x,y){
    let temp=0;
    for(let i=0; i<x.length; i++){
        if(x[i] === y){
            temp = true;
            break;
        }
        else if(x === 0){
            temp = false;
        }
        else{
            temp = false;
        }
    }
    return temp;
}

function negate (x){
    for(let i=0; i<x.length; i++){
        if((x[i]<0) || (x[i]>0)){
            x[i]*=-1;
        }
    }
    return x;
}

function diffMaxMin (x){
    let max = x[1];
    let min = x[1];
    for(let i=0; i<x.length; i++){
        if(max<x[i]){
            max=x[i];
        }
        else if(min>x[i]){
            min=x[i];
        }
    }
    return `Smallest number is ${min}, biggest number is ${max} and their difference is ${max-min}`;
}

function multiplyByLength (x){
    for(let i=0; i<x.length; i++){
        x[i]*=x.length;
    }
    return x;
}

function hurdleJump(x,y){
    max = x[1];
    for(let i=0; i<x.length; i++){
        if(max<x[i]){
            max = x[i];
        }
    }
    if((max<=y) || (x == "")){
        return true;
    }
    else{
        return false;
    }
}

function countdown (x){
    let newArray=[];
    if((isNaN(x)) || (x<0)){
        newArray = `You can't use negative numbers or letters!`;
    }
    else{
        for(let i=x; i>=0; i--){
            newArray.push(i);
        }
    }
    return newArray;
}

function transform (x){
    for(let i=0; i<x.length; i++){
        if(x[i]%2===0){
            x[i]=x[i]-1;
        }
        else{
            x[i]=x[i]+1;
        }
    }
    return x;
}





//Main
let switcher = parseInt(prompt(`Which task do you want to see? (0-10)`));
switch (switcher) {
    case 0:
        alert(`Create a function that takes a number and creates array with all numbers till that number.`);
        let numberForArray = parseInt(prompt(`Enter a number to create a new array: `));
        if(isNaN(numberForArray) || (numberForArray === "")){
            console.log(`Wrong input!`);
        }
        else if(numberForArray<0){
            console.log(`You can use only positive numbers.`);
        }
        else{
            console.log(createArray(numberForArray));
        }
        break;

    case 1:
        alert(`Create a function that takes an array and returns the first element.`);
        let arrayForFirstValue=fillAnArray();
        if(arrayForFirstValue !== false){
            console.log(getFirstValue(arrayForFirstValue));
        }
        else{alert(`Wrong input!`);}
        break;

    case 2:
        alert(`Write a function to reverse an array.`);
        let arrayForReverse=fillAnArray();
        if(arrayForReverse !== false){
            console.log(reverse(arrayForReverse));
        }
        else{alert(`Wrong input!`);}
        break;

    case 3:
        alert(`Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.`);
        let arrayForSearch=fillAnArray();
        if(arrayForSearch !== false){
            let elementToSearch = parseInt(prompt(`Enter the element you want to search for: `));
            console.log(search(arrayForSearch, elementToSearch));
        }
        else{alert(`Wrong input!`);}
        break;

    case 4:
        alert(`Write a function to check if an array contains a particular number.`);
        let arrayForCheck=fillAnArray();
        if(arrayForCheck !== false){
            let elementToCheck = parseInt(prompt(`Enter the element you want to check if exist in the array: `));
        console.log(check(arrayForCheck, elementToCheck));
        }
        else{alert(`Wrong input!`);}
        break;

    case 5:
        alert(`Given an array of numbers, negate all elements contained within.`);
        let arrayForNegate=fillAnArray();
        if(arrayForNegate !== false){
            console.log(negate(arrayForNegate));
        }
        else{alert(`Wrong input!`);}
        break;

    case 6:
        alert(`Create a function that takes an array and returns the difference between the biggest and smallest numbers.`);
        let arrayForMaxMinDiff = fillAnArray();
        if(arrayForMaxMinDiff !== false){
            console.log(diffMaxMin(arrayForMaxMinDiff));
        }
        else{alert(`Wrong input!`);}

        let infinityExample = [1,2,55,4, Infinity, -Infinity];
        console.log(diffMaxMin(infinityExample));
        break;

    case 7:
        alert(`Create a function to multiply all values in an array by the amount of values in that array.`);
        let arrayForMultiplyByLength = fillAnArray();
        if(arrayForMultiplyByLength !== false){
            console.log(multiplyByLength(arrayForMultiplyByLength));
        }
        else{alert(`Wrong input!`);}
        break;

    case 8:
        alert(`Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.`);
        let arrayForHurdleJump = fillAnArray();
        if(arrayForHurdleJump !== false){
            let jumpHeight = parseInt(prompt(`Enter the jumper's jump height: `));
            console.log(hurdleJump(arrayForHurdleJump, jumpHeight));
        }
        else{alert(`Wrong input!`);}
        break;

    case 9:
        alert(`Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.`);
        let setCountdown = parseInt(prompt(`Enter how many seconds do you want your countdown to be: `));
        console.log(countdown(setCountdown));
    break;

    case 10:
        alert(`Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.`);
        let arrayForTransform = fillAnArray();
        if(arrayForTransform !== false){
            console.log(arrayForTransform);
            console.log(transform(arrayForTransform));
        }
        else{alert(`Wrong input!`);}
    break;

    default:
        alert(`No such task!`);
        break;
}