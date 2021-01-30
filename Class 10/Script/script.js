let header = $("#header");
let menu = $("#menu");
let people = $("#people");
let planets = $("#planets");
let films = $("#films");
let species = $("#species");
let starships = $("#starships");
let vehicles = $("#vehicles");
let inputField = $("#inputField");
let input = $("#peopleInput");
let inputBtn = $("#peopleInputBtn");
let planetsInput = $("#planetsInput");
let planetsInputBtn = $("#planetsInputBtn");
let peopleInputField = $("#peopleInputField");
let planetsInputField = $("#planetsInputField");
let infoParagraph = $("#infoParagraph");
let info = $("#info");
let vehiclesDiv = $("#vehiclesDiv");
let vehicleInfo = $("#vehicleInfo");

//Event listeners
$(document).ready(function(){
    header.html(
        `<img src="../Images/logo.png" alt="swLogo" id="logo"/>
        <h1 id="swHead">Star Wars</h1>`
    );
    $("#lightsaber").html(`<img src="../Images/lightsaber.jpg" alt="lightsaber" id="lightsaberImage" />`);
    $("#credentials").html(`Used API: <a href="https://swapi.dev/" target="_blank">SWAPI</a>`);
    $("#aim").text('Homework Class 10');
    peopleInputField.hide();
    planetsInputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
});

people.click(function(){
    inputField.show();
    peopleInputField.show();
    planetsInputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
    info.html("");
    infoParagraph.text(`There are 10 people available at the moment. Enter a person full name to see if we have it available.`);
    inputBtn.click(function(){
        let name = input.val();
        if(validateString(name)){
            $.ajax({
                url: "https://swapi.dev/api/people/",
                success: function(data){
                    showPerson(data.results, name);
                    input.val("");
                },
                error: function(){
                    alert('Something went wrong!')
                }
            })
        }else{
            info.css("background","red");
            info.text(`Sorry, that person is not available at the moment, or it doesn't exist.`)
        }
    })
})

planets.click(function(){
    inputField.show();
    planetsInputField.show();
    peopleInputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
    info.html("");
    infoParagraph.text(`Check which planets have at least the given diameter. Enter the minimum diameter.`);
    planetsInputBtn.click(function(){
        if(validateNumber(parseInt(planetsInput.val()))){
            $.ajax({
                url: "https://swapi.dev/api/planets/",
                success: function(data){
                    let check = checkPlantDiameters(data.results, planetsInput.val());
                    if(check){
                        info.css("background", "#fcfc03");
                        info.html(`${check} have minimum the given diameter.`);
                        planetsInput.val("");
                    }else{
                        info.css("background", "red");
                        info.text("There is no such planet!")
                        planetsInput.val("");
                    }
                },
                error: function(){
                    alert('Something went wrong!');
                }
            })
        }else{
            info.css("background", "red");
            info.text("There is no such planet!");
            planetsInput.val("");
        }
    })
})

films.click(function(){
    inputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
    $.ajax({
        url: "https://swapi.dev/api/films/",
        success: function(data){
            info.css("background", "#fcfc03");
            filmsList(data.results);
        },
        error: function(){
            alert('Something went wrong!');
        }
    })
})

species.click(function(){
    inputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
    $.ajax({
        url: "https://swapi.dev/api/species/",
        success: function(data){
            let array = speciesList(data.results);
            info.html(`<ul class="title">Species: `)
            for(let i=0; i<array.length; i++){
                document.getElementById("info").innerHTML +=`<li class="list">${array[i]}</li>`;
            }
            document.getElementById("info").innerHTML += `</ul>`;
        }
    })
})

starships.click(function(){
    inputField.hide();
    vehiclesDiv.hide();
    vehicleInfo.hide();
    $.ajax({
        url: "https://swapi.dev/api/starships/",
        success: function(data){
            let maxMinLength = starshipsMinMax(data.results);
            info.html(
                `<p class="maxMin">Max length: <br>Name - ${maxMinLength[0]}, length - ${maxMinLength[1]}</p>
                <p class="maxMin">Min length: <br>Name - ${maxMinLength[2]}, length - ${maxMinLength[3]}</p>`
            );
        },
        error: function(){
            alert('Something went wrong!');
        }
    })
})

vehicles.click(function(){
    inputField.hide();
    info.html("");
    vehiclesDiv.show();
    $.ajax({
        url: "https://swapi.dev/api/vehicles/",
        success: function(data){
            vehiclesInfoHover(data.results);
        }
    })
})


//FUNCTIONS
function showPerson(data, name){
    let temp = 0;
    for(let i=0; i<data.length; i++){
        if(data[i].name.toLowerCase() === name.toLowerCase()){
            info.css("background", "#fcfc03");
            info.html(
                `${data[i].name} is ${data[i].height} high and have a mass of ${data[i].mass}. <br>
                Hair color: ${data[i].hair_color}, <br>
                Skin color: ${data[i].skin_color}, <br>
                Eye color: ${data[i].eye_color}, <br>
                Year of birth: ${data[i].birth_year}, <br>
                Gender: ${data[i].gender}.`
            );
            temp++;
        }
    }
    if(temp===0){
        info.css("background","red");
        info.text(`Sorry, that person is not available at the moment, or it doesn't exist.`);
        input.val("");
    }
} //Shows info if the person exist, for people

function checkPlantDiameters(data, diameter){
    let planetsArray = [];
    let temp = 0;
    for(let i=0; i<data.length; i++){
        let int = parseInt(data[i].diameter);
        if(int >= diameter){
            planetsArray.push(data[i].name);
            temp++;
        }
    }
    if(temp !== 0){
        return planetsArray;
    }else{return false;}
}//Returns an array of planets with min diameter

function filmsList(filmsArray){
    info.html(
        `<ul class="title">Film Titles:`
    );
    for(let i=0; i<filmsArray.length; i++){
        document.getElementById("info").innerHTML +=
            `<li class="list">${filmsArray[i].title}</li>`;
    }
    document.getElementById("info").innerHTML += `</ul>`;
}//Returns list of films

function speciesList(species){
    let namesAndClassifications = [];
    for(let i=0; i<species.length; i++){
        namesAndClassifications.push(`Name: ${species[i].name}, classification: ${species[i].classification}`);
    }
    return namesAndClassifications;
}//Returns an array of merged names and classifications

function starshipsMinMax(data){
    let nameMax = "";
    let nameMin = "";
    let minLength = parseFloat(data[0].length)
    let maxLength = parseFloat(data[0].length);
    for(let len of data){
        if(maxLength<parseFloat(len.length)){
            maxLength = len.length;
            nameMax = len.name;
        }else if(minLength>parseFloat(len.length)){
            minLength = len.length;
            nameMin = len.name;
        }
    }
    let array = [nameMax, maxLength, nameMin, minLength];
    return array;
}//Returns an array with max and min length and names of the starships

function vehiclesInfoHover(vehicle){
    $("#one").hover(function(){
        vehiclePrint(vehicle,0)
    });
    $("#two").hover(function(){
        vehiclePrint(vehicle,1)
    });
    $("#three").hover(function(){
        vehiclePrint(vehicle,2)
    });
    $("#four").hover(function(){
        vehiclePrint(vehicle,3)
    });
    $("#five").hover(function(){
        vehiclePrint(vehicle,4)
    });
    $("#six").hover(function(){
        vehiclePrint(vehicle,5)
    });
    $("#seven").hover(function(){
        vehiclePrint(vehicle,6)
    });
    $("#eight").hover(function(){
        vehiclePrint(vehicle,7)
    });
    $("#nine").hover(function(){
        vehiclePrint(vehicle,8)
    });
    $("#ten").hover(function(){
        vehiclePrint(vehicle,9)
    });
}//Sets element/hover number

function vehiclePrint(vehicle,x){
    vehicleInfo.show();
    for(let i=0; i<vehicle.length; i++){
        vehicleInfo.html(`
        <h3>${vehicle[x].name}</h3>
        <p>Model: ${vehicle[x].model}<br>
        Manufacturer: ${vehicle[x].manufacturer}<br>
        Crew: ${vehicle[x].crew}<br>
        Passengers: ${vehicle[x].passengers}<br>
        Cargo Capacity: ${vehicle[x].cargo_capacity}<br>
        Max Speed: ${vehicle[x].max_atmosphering_speed}.`)
    }
}//Prints vehicle name and info



function validateString(x){
    return x !== "";
}

function validateNumber(x){
    return !isNaN(x) && x !== "";
}