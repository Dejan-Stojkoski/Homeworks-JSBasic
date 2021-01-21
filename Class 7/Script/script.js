let numberOfRows = document.getElementById("numberOfRows");
let numberOfColumns = document.getElementById("numberOfColumns");
let btn = document.getElementById("btn");
let paragraph = document.getElementById("paragraph");
let table = document.getElementById("table");
let reset = document.getElementById("resetBtn");

function validateNumber(x,y){
    if(!isNaN(parseInt(x)) && !isNaN(parseInt(y))){
        return true;
    }else{
        return false;
    }
}

function createTable(x,y){
    for(let i=0; i<x; i++){
        let row = table.insertRow(i);
         for(let j=0; j<y; j++){
            let column = row.insertCell(j);
            column.innerHTML = `Row-${i+1}, Column-${j+1}`;
        }
    }
}

btn.addEventListener('click', function(){
    if(validateNumber(numberOfRows.value, numberOfColumns.value)){
        createTable(numberOfRows.value, numberOfColumns.value);
        paragraph.innerHTML = "";
    }else{
        paragraph.innerText = `Wrong input!`;
    }
})

reset.addEventListener('click', function(){
    table.innerHTML = "";
    paragraph.innerHTML = "";
    numberOfRows.value = "";
    numberOfColumns.value = "";
})