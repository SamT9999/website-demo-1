
function validateForm() {
if (document.forms["signupForm"]["firstName"].value === "") {
      alert("First Name must not be empty.");
      return false;
    }
if (document.forms["signupForm"]["lastName"].value === "") {
      alert("Last Name must not be empty.");
      return false;
    }
if (document.forms["signupForm"]["email"].value === "") {
      alert("email must not be empty.");
      return false;
    }
    return true; 
}
function signUpComplete(form){
document.getElementById("complete").innerHTML = "Your sign up was successful!";
form.reset();
document.getElementById("firstName").disabled = true;
document.getElementById("lastName").disabled = true;
document.getElementById("email").disabled = true;
}
