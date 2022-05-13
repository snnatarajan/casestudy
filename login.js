let email = document.getElementById("inputEmail4");
let passwd = document.getElementById("inputPassword4");
let error = document.getElementById("error");

function validate(){
    if (email.value == "admin" && passwd.value == "12345"){
        error.innerHTML = "Valid Credentials";
        error.style.color = "green";
        window.open("./simpletodolist.html","_blank", "width=1500, height=2700", true);
        window.location.href="./index.html"
        window.close(window.location.href);
        return (true);
    }
    else{
        error.innerHTML = "Invalid Credentials";
        error.style.color = "red";
        return (false);
    }
}