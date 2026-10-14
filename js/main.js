

function collectionOfdata() {

    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");


    result.setAttribute("class","alert theme-danger text-center d-block");
    result.style.backgroundColor="#f7d6d9"
    if (user == "" && email == "" && pass == "" && confirm == "") {

        result.innerHTML = "Enter Data";
        return false;

    } else if (user.length < 5 || user.length > 15) {

        result.innerHTML = "Enter 5-15 charcter in name";
        return false;

    } else if (email.indexOf("@", 1) == -1 || email.indexOf(".com") == -1) {

        result.innerHTML = "enter valid email"
        return false;
    } else if (pass.length < 8) {
        result.innerHTML = "week passowerd"
        return false;
    } else if (pass != confirm) {
        result.innerHTML = "week passowerd"
        return false;
    }

}