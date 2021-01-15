//Functions
function connectMultipleStrings(x){
    let newString='';
    for(let i=0; i<x.length; i++){
        newString += x[i] + ' ';
    }
    return newString;
}

function maxAndMinAddition(y){
    let x =[];
    for(let i=0; i<y.length; i++){
        if(isNaN(y[i]) || (y[i] === "")){
            continue;
        }
        else{
            x.push(parseInt(y[i]));
        }
    }
    for(let i=x.length-1; i>=0; i--){
        for(let j=1; j<=i; j++){
            if (x[j-1]>x[j]){
                let temp = x[j-1];
                x[j-1] = x[j];
                x[j] = temp;
            }
        }
    }
    return `Min: ${x[0]}, Max: ${x[x.length-1]}, Sum: ${x[0] + x[x.length-1]}.`
}

function getFullName(x,y){
    let fullName =[];
    let i=0;
    let j=0;
    while(i<x.length){
        while(j<y.length){
            fullName.push(`${i+1}.${x[i]} ${y[j]}`);
            j++;
            i++;
        }
    }
    return fullName;
}







//Main
let switcher = prompt(`Which homework?`);
switch (switcher) {
    case '1':
        let arrayToConnect =[];
        let num = parseInt(prompt(`How manny elements do you want your initial array to have?`));
        for(let i=0; i<num; i++){
            arrayToConnect.push(prompt(`Enter your array element: `));
        }
        console.log(connectMultipleStrings(arrayToConnect));
        console.log(arrayToConnect);
        break;

    case '2':
        for (let i=1; i<21; i++){
            if (i%2 === 0){
                console.log(`${i}\n`);
            }
            else{
                console.log(`${i} `);
            }
        }
        // let oneToTwnty = [];
        // for (let i=1; i<21; i++){
        //     if(i%2 === 0){
        //         oneToTwnty.push(i + "\n");
        //     }
        //     else{
        //         oneToTwnty.push(i + " ");
        //     }
        // }
        // console.log(oneToTwnty);
        break;

    case '3':
        let maxAndMinAdditionArray = [];
        let num1 = prompt(`How many numbers would you like your array to have?`);
        for(let i=0; i<num1; i++){
            maxAndMinAdditionArray.push(prompt(`Enter your array numbers: `));
        }
        console.log(maxAndMinAddition(maxAndMinAdditionArray));
        break;

    case '4':
        let num2 = parseInt(prompt(`How many names would you like to have?`))
        let firstName = [], lastName = [], count1 = 0, count2 = 0;

        for(let i=0; i<num2; i++){
            let temp = prompt(`Enter first names:`);
            if(isNaN(temp) && (temp !== "")){
                firstName.push(temp);
            }
            else{
                count1++;
                break;
            }
        }
        if(count1===0){
            for(let i=0; i<num2; i++){
                let temp = prompt(`Enter last names:`);
                if(isNaN(temp) && (temp !== "")){
                    lastName.push(temp);
                }
                else{
                    count2++;
                    break;
                }
            }
        }
        if((count2===0) && (count1===0)){
            console.log(getFullName(firstName, lastName, count1, count2));
        }
        else{
            console.log(`Wrong input!`);
        }
        break;

    default:
        console.log(`Only 4 Homeworks.`);
        break;
}