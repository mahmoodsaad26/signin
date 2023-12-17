let userEmail = document.getElementById("email");
let userName = document.getElementById("name");
let userPassword = document.getElementById("password");
let passwordWarning = document.getElementById('passwordWarning')
let emailWarning = document.getElementById('emailWarning')
let nameWarning=document.getElementById('nameWarning')
let emailExists=document.getElementById('existEmail')
let signupBtn=document.getElementById('signupBtn')
let users;
if (localStorage.getItem("users") == null) {
   users = [];
} else {
   users = JSON.parse(localStorage.getItem('users'))
}

/***********validation*********/


function addUser(){
   for(let i=0;i<users.length;i++){
      if(userEmail.value==users[i].email){
         emailExists.classList.remove('d-none')
         console.log('hiiiiiiii');
         return 0;
      }
   }
    if(nameValidation()==true&&passwordValidation()==true&&emailValidation()==true){
        let user={
            name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        }

        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
        window.location='./index.html'
    }else if(nameValidation()==false){
      nameWarning.classList.remove('d-none')
    }else if(emailValidation()==false){
      emailWarning.classList.remove('d-none')
    }else if(passwordValidation()==false){
      passwordWarning.classList.remove('d-none')
    }

}

function emailValidation() {
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let status = regex.test(userEmail.value)
    
    if (status == true) {
       emailWarning.classList.add('d-none')
       return true
    } else if (status == false || userEmail.value == " ") {
      
       return false;
    }
 }
 
 function passwordValidation() {
    let regex = /^.{8,16}$/;
    let status = regex.test(userPassword.value)
    
    if (status == true) {
       passwordWarning.classList.add('d-none')
       return true
    } else if (status == false || userPassword.value == " ") {
      
       return false;
    }
 }

 function nameValidation(){
    let regex=/^[a-zA-z]+\w*$/
    let status=regex.test(userName.value);
    if(status==true){
        nameWarning.classList.add('d-none')
        return true

    }else if(status == false || userPassword.value == ""){
       return false
    }
 }


 /**********events***************/
 signupBtn.addEventListener('click',function(){
   addUser()
 })

