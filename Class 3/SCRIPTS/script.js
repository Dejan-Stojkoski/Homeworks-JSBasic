//Functions
function typeCheck (x){
    return console.log(typeof x);
}

function convertDogYears(option, years){
    option = prompt(`What do you want to convert? (Choose 1 or 2)\n 1. Dog to human yeas.\n 2. Human to dog years.`);

    if (isNaN(option) || (option<1) || (option>2)){
        alert(`Wrong value.`);
    }
    else {
        switch (option) {
            case '1':
                years = prompt(`Enter dog years:`);
                break;
            default:
                years = prompt(`Enter human years:`);
                break;
        }
    }

    switch (option){
        case '1':
            console.log(`Your dog has ${years*7} human years`);
            break;
            default:
            console.log(`You have ${years/7} dog years`);
            break;
    }
}

function ATM(money){
    console.log(`You have $${money} left on your account.`);
    option = prompt(`Do you want to withdraw any money? (Yes/No)`);

    switch (option.toLowerCase()) {
        case `yes`:
            toWithdraw = prompt(`How much money do you want to withdraw?`);
            if (isNaN(toWithdraw) || toWithdraw<0){
                alert(`Wrong input! Try again.`);
            }
            else if (toWithdraw > money){
                alert(`Not enough money!`)
            }
            else{
                money -= toWithdraw;
                console.log(`You have withdrawn $${toWithdraw}, and have you $${money} left on your account.`);
                alert(`Transaction successful.`);
            }
            break;
        case `no`:
            alert(`Thank you for using our services.`);
            break;
        default :
            alert(`Wrong input. Try again.`);
    }
}

//Main
let homeworkSwitcher = parseInt(prompt(`Which homework do you want see?`));
if(homeworkSwitcher===1){
//Part 1
    let case1 = new Object();
    let case2 = true;
    let case3 = 12;
    let case4 = `SEDC`;
    let case5
    typeCheck(case1);
    typeCheck(case2);
    typeCheck(case3);
    typeCheck(case4);
    typeCheck(case5);
}

else if (homeworkSwitcher===2){
//Part 2
    let choiceDogOrHuman;
    let age;
    convertDogYears(choiceDogOrHuman,age);
}

else if(homeworkSwitcher===3){
//Part 3
    let randomNumberOrPrompt = parseInt(prompt(`Choose one: \n 1. Random Number \n 2. Prompt()`));

    if (randomNumberOrPrompt===2){
        let totalMoneyOnAccount = parseFloat(prompt(`How much money do you want to deposit?`));
        if(isNaN(totalMoneyOnAccount) || (totalMoneyOnAccount<0)){
            alert(`Not a valid value!`);
        }
        else{
            alert(`You have $${totalMoneyOnAccount} on your account`);
            ATM(totalMoneyOnAccount);
            }
        }
    else if(randomNumberOrPrompt===1){
        var totalMoneyOnAccountRandom = Math.random()*1000;
        ATM(totalMoneyOnAccountRandom);
    }
    else{
        alert(`Only two cases available.`);
    }
}

else{
    alert(`There were only three homeworks! :D`);
}