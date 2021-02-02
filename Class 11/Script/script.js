let login = $("#login");
let loginUsername = $("#loginUsername");
let loginPassword = $("#loginPassword");
let loginBtn = $("#loginBtn");
let registerLink = $("#registerLink");
let register = $("#register");
let registerUsername = $("#registerUsername");
let registerPassword = $("#registerPassword");
let registerBtn = $("#registerBtn");
let infoDiv = $("#infoDiv");
let info = $("#info");
let signOut = $("#signOut");
let usersTable = $("#usersTable");
let backBtn = $("#backBtn");

let usersList = [];
let userDejan = new User('Dejan', 'Dejans', true);
let userBob = new User('Bobby', 'Bobsky');
let userWill = new User('Bonsk', 'Wonsky');
usersList.push(userDejan, userBob, userWill);


//CONSTRUCTOR
function User (username, password, admin = false){
    this.username = username;
    this.password = password;
    this.admin = admin;
}

//FUNCTIONS
function loginUser(un, pass){
    for(let i=0; i<usersList.length; i++){
        if((un === usersList[i].username) && (pass === usersList[i].password)){
            if(usersList[i].admin === true){
                return 1;
            }else{return 2;}
        }else{continue;}
    }
}

function validateUsername(x, y){
    if(isNaN(x) && x.length>=5){
        if(y.length>=6){
            return true;
        }else{return false;}
    }else{return false;}
}

function checkUsernameAvailability(un){
    for(let i=0; i<usersList.length; i++){
        if(un === usersList[i].username){
            return false;
        }else{continue;}
    }
    return true;
}

function registerUser(un, pass){
    if(validateUsername(un, pass)){
        let user = new User(un, pass);
        usersList.push(user);
        login.show();
        register.hide();
        registerLink.after(`<p id="registerSuccess" style="border: 1px solid black;">Register successfull! You can sign in.</p>`);
    }else{
        backBtn.after(`<p id="invalidRegister" class="red">Invalid username or password!</p>`);
    }
}

function printUsers(x,y){
    info.html("");
    info.append(`<p style="background: #4470b1"; style="color: #a6bbd5";>Welcome ${y}</p>
    <table>
    <tr><th>Available users</th></tr>`);
    for(let i=0; i<x.length; i++){
        info.append(`<tr><td>${i+1}. ${x[i].username}</td></tr>`);
    }
    info.append(`</table>`)
}

function adminPrintUsers(x,y){
    info.html("");
    info.append(`<p style="background: #4470b1"; style="color: #a6bbd5";>Welcome ${y}</p>
    <table>
    `);
    for(let i=0; i<x.length; i++){
        info.append(`
        <tr><td>
        ${i+1}. ${x[i].username}
        </td>
        <td>
        Admin status ${x[i].admin}
        </td>
        <td><button id="edit${i}">Admin</button></td>
        <td><button id="delete${i}">Delete</button></td>
        </tr>`);
        if($(`#edit${i}`).click(function(){
            setAdmin(i);
            info.after(`<p id="setAdmin">User with number ${i+1} is now admin.`)
        })){};
        if($(`#delete${i}`).click(function(){
            deleteUser(i);
            info.after(`<p id="deletedUser">User with number ${i+1} deleted.`);
        })){};
    }
    info.append(`</table>`);
}

function setAdmin(x){
    usersList[x].admin = true;
}

function deleteUser(x){
    usersList.splice(x, 1);
}

function clearLoginInput(){
    loginUsername.val("");
    loginPassword.val("");
}

function clearRegisterInput(){
    registerUsername.val("");
    registerPassword.val("");
}


//EVENTS
$(document).ready(function(){
    register.hide();
    infoDiv.hide();
})

signOut.click(function(){
    login.show();
    register.hide();
    infoDiv.hide();
    $("#invalid").html('');
    clearLoginInput();
    $("#registerSuccess").html("");
    $("#registerSuccess").css("border", "none");
})

loginBtn.click(function(){
    $("#invalid").html("");
    if(loginUser(loginUsername.val(),loginPassword.val())){
        login.hide();
        register.hide();
        infoDiv.show();
        $("#deletedUser").html("");
        $("#setAdmin").html("");
        let checkAdmin = loginUser(loginUsername.val(),loginPassword.val());
        if(checkAdmin === 1){
            adminPrintUsers(usersList, loginUsername.val());
        }else{
            printUsers(usersList, loginUsername.val());
        }
    }else{
        loginBtn.after(`<p id="invalid" style="color: #d16262";>Invalid username or password!</p>`)
    }
})

registerLink.click(function(){
    register.show();
    login.hide();
    $("#invalid").html('');
    clearLoginInput();
})

registerBtn.click(function(){
    $("#invalidRegister").html("");
    $("#usernameInUse").html("");
    if(checkUsernameAvailability(registerUsername.val())){
        registerUser(registerUsername.val(), registerPassword.val());
        clearRegisterInput();
    }else{
        backBtn.after(`<p id="usernameInUse" class="red">Username already in use!</p>`);
    }
})

backBtn.click(function(){
    login.show();
    register.hide();
    infoDiv.hide();
})