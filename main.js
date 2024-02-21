

function my_function(){
    let FirstName = document.getElementById("first-name").value;
    if (FirstName==""){
        document.getElementById("firstname-iconerror").style.display= "block";
        document.getElementById("first-name-alert").style.display= "block";
        document.getElementById("first-name").style.marginBottom= "0";
        document.getElementById("first-name").style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("first-name").style.borderWidth= ".2vw";
    }

    let LastName = document.getElementById("last-name").value;
    if (LastName==""){
        document.getElementById("lastname-iconerror").style.display= "block";
        document.getElementById("last-name-alert").style.display= "block";
        document.getElementById("last-name").style.marginBottom= "0";
        document.getElementById("last-name").style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("last-name").style.borderWidth= ".2vw";
    }
    
    let Email = document.getElementById("email").value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (Email==""){
        document.getElementById("email-iconerror").style.display= "block";
        document.getElementById("email-alert").style.display= "block";
        document.getElementById("email").style.marginBottom= "0";
        document.getElementById("email").style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("email").style.borderWidth= ".2vw";
    } else if (Email.match(validRegex)) {
        
    } else {
        document.getElementById("email-iconerror").style.display= "block";
        document.getElementById("email-alert2").style.display= "block";
        document.getElementById("email").style.marginBottom= "0";
        document.getElementById("email").style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("email").style.borderWidth= ".2vw";
    }

    let Password = document.getElementById("Password").value;
    if (Password==""){
        document.getElementById("password-iconerror").style.display= "block";
        document.getElementById("Password-alert").style.display= "block";
        document.getElementById("Password").style.marginBottom= "0";
        document.getElementById("Password").style.borderColor= "hsl(0, 100%, 74%)";
        document.getElementById("Password").style.borderWidth= ".2vw";
    }

    if (FirstName!="" && LastName!="" && Email!="" && Email.match(validRegex) && Password!=""){
        window.alert("Sucessful sign up")
    }

}