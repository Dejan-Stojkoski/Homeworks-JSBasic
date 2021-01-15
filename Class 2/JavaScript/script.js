var yearOfBirth = parseInt(prompt(`Enter your year of birth:`));
if( (isNaN(yearOfBirth)) || (yearOfBirth > 2020) || (yearOfBirth < 1)){
    alert(`Not a valid value!`);
}

else{
    var calculate = (yearOfBirth - 4) % 12;

    if(calculate === 0){
        alert(`Your Chinese Zodiac is RAT.`);
    }
     else if(calculate === 1){
         alert(`Your Chinese Zodiac is OX.`);
     }
     else if(calculate === 2){
         alert(`Your Chinese Zodiac is TIGER.`);
     }
     else if(calculate === 3){
         alert(`Your Chinese Zodiac is RABBIT.`);
     }
     else if(calculate === 4){
         alert(`Your Chinese Zodiac is DRAGON.`);
     }
     else if(calculate === 5){
         alert(`Your Chinese Zodiac is SNAKE.`);
     }
     else if(calculate === 6){
         alert(`Your Chinese Zodiac is HORSE.`);
    }
     else if(calculate === 7){
         alert(`Your Chinese Zodiac is GOAT.`);
     }
     else if(calculate === 8){
         alert(`Your Chinese Zodiac is MONKEY.`);
     }
     else if(calculate === 9){
         alert(`Your Chinese Zodiac is ROOSTER.`);
     }
     else if(calculate === 10){
         alert(`Your Chinese Zodiac is DOG.`);
     }
     else{
         alert(`Your Chinese Zodiac is PIG.`);
     }
}
