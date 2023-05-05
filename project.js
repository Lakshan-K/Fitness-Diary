//account creation page js
function createAccount() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var securityQuestion = document.getElementById("securityQuestion").value;
    var securityAnswer = document.getElementById("securityAnswer").value;

    if (validateForm(firstName, lastName, username, password,
        confirmPassword, securityQuestion, securityAnswer)) {
        StoreData(username, password, securityAnswer, securityQuestion, firstName, lastName);
        alert("Congratulations, your account has been created.");
        location.href = "loginPage.html";
    }
};

function validateForm(firstName, lastName, username, password,
    confirmPassword, securityQuestion, securityAnswer) {


    if (firstName === "") {
        alert("Missing First Name");
        return false;
    }
    if (lastName === "") {
        alert("Missing Last Name");
        return false;
    }
    if (username === "") {
        alert("Missing Username");
        return false;
    }
    if (password === "") {
        alert("Missing Password");
        return false;
    }
    if (confirmPassword === "") {
        alert("Missing Confirmation Password");
        return false;
    }
    if (confirmPassword !== password) {
        alert("Password not matching");
        return false;
    }
    if (securityAnswer === "") {
        alert("Wrong answer to security question");
        return false;

    }
    return true;

}
/*store data*/
async function StoreData(username, password, answer, question, FirstName, LastName) {
    /*store the value in JS */
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    localStorage.setItem("answer", answer);
    localStorage.setItem("question", question);
    localStorage.setItem("FirstName", FirstName);
    localStorage.setItem("LastName", LastName);
}
//login page js
function loginButton() {
    var enteredUser = document.getElementById("usernameL").value;
    var enteredPass = document.getElementById("passwordL").value;

    var storedUser = localStorage.getItem("username");
    var storedPass = localStorage.getItem("password");

    if (enteredUser == storedUser && enteredPass == storedPass) {
    alert("Login Successful!");
    
    window.location.href = "newEntry.html";
    }
    else {
        alert("Login Failed! Username and/or Password is Incorrect!");
    }

};

//forgot password page js

function forgot(){
    var enteredQuestion=document.getElementById("securityQuestion").value;
    var enteredAnswer=document.getElementById("securityAnswer").value;
    var storedQuestion=localStorage.getItem("question");
    var storedAnswer=localStorage.getItem("answer");
    var storedPassword=localStorage.getItem("password");

   


    if(enteredQuestion==storedQuestion && enteredAnswer==storedAnswer){
        alert("Here is your password: "+ storedPassword);
        
    }else{
       alert("Your answer is not correct, please try again!")
       
    }
}

//home page js

function openCreation() {
    window.location.href = "accountcreation.html";
}

function openLogin() {
    window.location.href = "loginPage.html";
}

//new entry page js
//get current diary and show it in the textarea
function getDiary(){
    var textarea = document.getElementById("textEntry");
    var currentDiary=localStorage.getItem("diary");
    textarea.value = currentDiary;
}

//store diary
function saveDiary(){
    var diary=document.getElementById("textEntry").value;
    localStorage.setItem("diary", diary);
}

function newEntryPage() {
    var newEntry = document.getElementById("createEntry");
    newEntry.style.display = "inline";
}
//need to add in css file that .createEntry display = "none"

function homePage() {
    window.location.href = "loginPage.html";
}

function addDateStamp() {
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];  
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    document.getElementById("showDateStamp").innerHTML = day + " " + months[month] + " " + year
}

function showChangeFont() {
    document.getElementById("backgroundColourForm").style.display = "none";
    document.getElementById("textColourForm").style.display = "none";
    document.getElementById("fontForm").style.display = "inline";
}

function showChangeTextColour() {
    document.getElementById("backgroundColourForm").style.display = "none";
    document.getElementById("fontForm").style.display = "none";
    document.getElementById("textColourForm").style.display = "inline";
}

function showChangeBackgroundColour() {
    document.getElementById("fontForm").style.display = "none";
    document.getElementById("textColourForm").style.display = "none";
    document.getElementById("backgroundColourForm").style.display = "inline";
}


function changeFont() {
    if (document.getElementById("timesNewRoman").checked) {
        document.getElementById("textEntry").style.fontFamily = "Times New Roman";
    } else if (document.getElementById("bradleyHand").checked) {
        document.getElementById("textEntry").style.fontFamily = "Bradley Hand";
    } else if (document.getElementById("arial").checked) {
        document.getElementById("textEntry").style.fontFamily = "Arial";
    } else if (document.getElementById("arialBlack").checked) {
        document.getElementById("textEntry").style.fontFamily = "Arial Black";
    }
    document.getElementById("fontForm").style.display = "none";

}


function changeTextColour() {
    if (document.getElementById("pink").checked) {
        document.getElementById("textEntry").style.color = "pink";
    } else if (document.getElementById("blue").checked) {
        document.getElementById("textEntry").style.color = "blue";
    } else if (document.getElementById("green").checked) {
        document.getElementById("textEntry").style.color = "green";
    } else if (document.getElementById("purple").checked) {
        document.getElementById("textEntry").style.color = "plum";
    } else if (document.getElementById("originalTextColour").checked) {
        document.getElementById("textEntry").style.color = "black";
    }
    document.getElementById("textColourForm").style.display = "none";
}


function changeBackgroundColour() {
    if (document.getElementById("orange").checked) {
        document.getElementById("form").style.backgroundColor = "rgb(252,173,117)";
    } else if (document.getElementById("red").checked) {
        document.getElementById("form").style.backgroundColor = "rgb(249,92,118)";
    } else if (document.getElementById("purple").checked) { 
        document.getElementById("form").style.backgroundColor = "rgb(181,141,191)";
    } else if (document.getElementById("teal").checked) {
        document.getElementById("form").style.backgroundColor = "rgb(141,202,208)";
    } else if (document.getElementById("originalBackground").checked) {
        document.getElementById("form").style.backgroundColor = "rgba(245, 244, 244, 0.87)";
    }
    document.getElementById("backgroundColourForm").style.display = "none";
}



document.addEventListener("DOMContentLoaded", function() {
const addPhoto = document.querySelector("#addPhoto");
var chosenImage = "";

addPhoto.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        chosenImage = reader.result;
        document.querySelector(".addPhoto").style.backgroundImage = `url(${chosenImage})`;
    });
    reader.readAsDataURL(this.files[0]);

})
});