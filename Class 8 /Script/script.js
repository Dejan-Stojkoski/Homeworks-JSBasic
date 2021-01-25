let animalName = document.getElementById("name");
let animalKind = document.getElementById("kind");
let animalBtn = document.getElementById("btn");
let speakParagraph = document.getElementById("paragraph");
let title = document.getElementById("title");
let author = document.getElementById("author");
let readingStatus = document.getElementById("readingStatus");
let bookParagraph = document.getElementById("bookParagraph");
let bookBtn = document.getElementById("bookBtn");

//Constructors
function  Animal(name,kind){
    this.name = name;
    this.kind = kind;
    this.speak = function(){
        return `The ${this.kind} says: 'My name is ${this.name}'.`;
    };
}

function Book (title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
    this.readingInfo = function(){
        if(this.read === 'true'){
            return `Already read '${this.title}' by ${this.author}.`;
        }else if(this.read === 'false'){
            return `You still need to read '${this.title}' by ${this.author}.`;
        }
    }
}

//Functions
function validateString(x){
    if(isNaN(x) && (x!==null)){
        return true;
    }else{
        return false;
    }
}

function printSpeak(x){
    for(let i=0; i<x.length; i++){
        speakParagraph.innerHTML += `<br> ${x[i].speak()} </br>`;
    }
}

function printBooks(x){
    for(let i=0; i<x.length; i++){
        bookParagraph.innerHTML += `<br>${x[i].readingInfo()} </br>`;
    }
}

//Main
let animals =[];
animalBtn.addEventListener('click', function(){
    if(validateString(animalName.value) && validateString(animalKind.value)){
        animals.push(new Animal(animalName.value, animalKind.value));
        speakParagraph.innerHTML = "";
        speakParagraph.style.color = "blue";
        printSpeak(animals);
        animalName.value = "";
        animalKind.value = "";
    }else{
        speakParagraph.style.color = "red";
        speakParagraph.innerHTML += `Wrong input!`;
    }
})

let books=[];
bookBtn.addEventListener('click', function(){
    if(validateString(title.value) && validateString(author.value)){
        books.push(new Book(title.value, author.value, readingStatus.value));
        bookParagraph.style.color = "black";
        bookParagraph.innerHTML = "";
        printBooks(books);
        title.value = "";
        author.value = "";
    }else{
        bookParagraph.style.color = "red";
        bookParagraph.innerHTML += "Wrong input!";
    }
})






