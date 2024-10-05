let signinUserName = document.getElementById("signin-username");
let signinEmail = document.getElementById("signin-email");
let createPsd = document.getElementById("create-psd");
let confirmPsd = document.getElementById("confirm-psd");
let form = document.getElementById("form")

let userDetails = JSON.parse(localStorage.getItem("userDetails")) || []; 
form.addEventListener("submit", handleSignin);
function handleSignin(e) {
  e.preventDefault();
  if (createPsd.value !== confirmPsd.value) {
    alert("Please enter the same password");
  } else {
    let userObj = {
      username: signinUserName.value,
      email: signinEmail.value,
      password: confirmPsd.value
    };
    if (userDetails==null) { 
      userDetails = [];
    }
    userDetails.push(userObj);
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log(userObj);
    console.log(userDetails);
    alert("Account Created Successfully")
    let confirmMessage = confirm("Do you want to go Login Page Press OK")
    if (confirmMessage == true) {
      location.assign("index.html")
    }
  }

}