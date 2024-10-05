let userDetails = JSON.parse(localStorage.getItem("userDetails"))
let loginName = document.getElementById("login-name")
let loginForm = document.getElementById("form")
let loginPsd = document.getElementById("login-psd")
loginForm.addEventListener("submit", handleLogin);
let valid = false
//  if(userDetails!=null){
  // function handleLogin(e) {
  //   e.preventDefault()
  //   userDetails.map((item, i) => {
  //     if ((item.username == loginName.value || item.email == loginName.value) && item.password == loginPsd.value) {
  //       valid = true
  //     }
  
  //   })
  //   if (valid) {
  //     // location.assign("http://127.0.0.1:5500/index1.html")
  //     location.assign("index1.html")
  //   }
  //   else {
  //     alert("invalid credentials")
  //   }
  // }
function handleLogin(e) {
  e.preventDefault()
  let userDetails = JSON.parse(localStorage.getItem("userDetails"))
  if (userDetails !== null) {
    let valid = false
    userDetails.map((item, i) => {
      if ((item.username == loginName.value || item.email == loginName.value) && item.password == loginPsd.value) {
        valid = true
      }
    })
    if (valid) {
      location.assign("index1.html")
    } else {
      alert("invalid credentials")
    }
  } else {
    alert("No user details found in local storage")
  }
}


function passwordType() {
  if (loginPsd.type === "password") {
    loginPsd.type = "text";
  } else {
    loginPsd.type = "password";
  }
}





