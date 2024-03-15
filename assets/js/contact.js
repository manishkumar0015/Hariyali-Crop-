function validateName() {
    var name = document.getElementById('floatingname').value;
    if (name.length == 0) {
        window.alert("Name Can't Be Blank", "Please Type Your Name", "info");
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name","","info");//Validation Message
        return false;
    }
    return true;
}

function validateCompanyname() {
    var name = document.getElementById('floatingcompany').value;
    if (name.length == 0) {
        window.alert("Company Name Can't Be Blank", "Please Type Your CompanyName", "info");
        return false;
    }
    if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct Company name","","info");//Validation Message
        return false;
    }
    return true;
}







function validateEmail() {

    var email = document.getElementById('floatingemail').value;
    if (email.length == 0) {
        alert("Email can't be blank");//Validation Message
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address");//Validation Message
        return false;

    }

    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateCompanyname()) {

        swal("Form not submitted","","error");//Validation Message
        return false;
    }
    else {
        swal("Your Form Successfuly Submitted","We Sent You An Email On Your Provided Email Address","success");//Validation Message
        submitted = true;
        return true;
    }
}