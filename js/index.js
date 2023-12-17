"use strict";

let loginEmail = document.getElementById('loginEmail')
let loginPassword = document.getElementById('loginPassword')
let loginBtn = document.getElementById('loginBtn')

let users;
if (localStorage.getItem("users") == null) {
   users = [];
} else {
   users = JSON.parse(localStorage.getItem('users'))
}



/***********************************************************/

function checkData() {
   for (let i = 0; i < users.length; i++) {
      if (users[i].email == loginEmail.value && users[i].password == loginPassword.value) {
         return true;
      }else if(users[i].email == loginEmail.value && users[i].password != loginPassword.value){
         document.getElementById('wrongPassword').classList.remove('d-none')
         document.getElementById('wrongLogin').classList.add('d-none')
      }else if(users[i].email != loginEmail.value && users[i].password == loginPassword.value){
         document.getElementById('wrongLogin').classList.remove('d-none')
         document.getElementById('wrongPassword').classList.add('d-none')
   }
   
   }
   
   return false;
}

loginBtn.addEventListener('click', function () {
   if (checkData() == true ) {
      document.getElementById('wrongLogin').classList.add('d-none')
      document.getElementById('wrongPassword').classList.add('d-none')
      
      window.location='./welcome.html'

   }

})

var typing=new Typed(".text", {
   strings: ["", "Youtuber", "Freelancer", "Graphics Designer", "Web Designer", "Web Developer"],
   typeSpeed: 100,
   backSpeed: 80,
   loop: true,
});

console.log(typing);
















