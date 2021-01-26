let name = $("#name");
let btn = $("#btn");
let text = $("#text");
let color = $("#color");
let headerBtn = $("#h1Button");
let message = $("#messages");

//Functions
function validateString(x){
    let temp = 0;
    if(x !== ""){
        for(let i=0; i<x.length; i++){
            if(isNaN(x[i])){
                continue;
            }else{temp++;}
        }
    }else{temp++;}
    if(temp===0){
        return true;
    }else{return false;}
}

function validateText(x){
    return x!=="";
}

//Event listeners
btn.click(function(){
    if(validateString(name.val())){
        btn.after(`<h1 id="greetHeader">Hello there ${name.val()}!</h1>`);
        $("#greetHeader").css("color", "green");
        name.val("");
    }else{
        btn.after(`<h1 id="wrongGreet">Wrong input!</h1>`);
        $("#wrongGreet").css("color", "red");
        name.val("");
    }
})

headerBtn.click(function(){
    if(validateText(text.val())){
        message.html("");
        headerBtn.after(`<h1 id="generatedHeader">${text.val()} </h1>`);
        $("#generatedHeader").css("color",`${color.val()}`);
        text.val("");
    }else{
        message.css("color", "red");
        message.text("Something is wrong! Try again.");
        text.val("");
    }
})


