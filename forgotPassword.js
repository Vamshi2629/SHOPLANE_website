let form=document.getElementById("form")
let email=document.getElementById("forgot-email")
let resetPsd=document.getElementById("reset-psd")
let confirmPsd=document.getElementById("confirm-psd")
let userDetails = JSON.parse(localStorage.getItem("userDetails"))
console.log(userDetails)
let valid=false;
let passwordIndex=0
form.addEventListener("submit",function(e){
    e.preventDefault()
    if(userDetails!=null){
        userDetails.map((item,i)=>{
            if(item.email==email.value){
                valid=true
                passwordIndex=i
            }
        })
    }

    if(valid==false && (resetPsd.value !=confirmPsd.value)){
        alert("Oops! It looks like your passwords don't match")
    }
    else if(valid==true && (resetPsd.value ==confirmPsd.value)){
        userDetails[passwordIndex].password=confirmPsd.value
        alert("You've successfully reset your password")
    }
    else{
        alert("Invalid email address. Please try again")
    }
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

})
