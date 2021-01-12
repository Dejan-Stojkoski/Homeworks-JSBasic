//Functions
function tellStory (x){
    return `This is ${x[0].charAt(0).toUpperCase() + x[0].slice(1)}. ${x[0].charAt(0).toUpperCase() + x[0].slice(1)} is a nice person. Today they are ${x[1].toLowerCase()}. They are ${x[2].toLowerCase()} all day. The end`;
}

function validateNumber(x){
    for(i=0; i<5; i++){
        if(isNaN(x[i]) || (x[i] === '')){
            return false;
        }
        else{
            return true;
        }
    }
}

function sum (x){
    temp = validateNumber(x);
    if (temp === true){
        return `The sum of the numbers ${x[0]}, ${x[1]}, ${x[2]}, ${x[3]} and ${x[4]} is: ${x[0]+x[1]+x[2]+x[3]+x[4]}!`;
    }
    else{
        return `Wrong input!`;
    }
}




//Main
let switcher = parseInt(prompt(`Which homework?`));
switch (switcher) {
    case 1:
        let storyParameters = [];
        storyParameters[0] = prompt(`Enter the story characters name: `);
        storyParameters[1] = prompt(`Enter a mood for the character: `);
        storyParameters[2] = prompt(`Enter an activity for the character: `);
        console.log(tellStory(storyParameters));
        break;
    case 2:
        let numbers=[];
        for(let i=0; i<5; i++){
            numbers[i] = parseFloat(prompt(`Enter numbers for addition: `));
        }
        console.log(sum(numbers));
        break;
    default:
        console.log(`Only two tasks :D.`)
        break;
}
