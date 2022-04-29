function loadPage(){
const loginBtn = document.querySelector('#loginBtn');

loginBtn.addEventListener('click', (event)=>{
  event.preventDefault(EventTarget)
  loadUser()
})
async function loadUser (){
  await validateUser()
  if (!validateUser){
    return alert("Your log in credentials seem to be inncorrect. Please try again or select Forgot Password to reset your password.")
  } else {
    window.location.href="index.html"
  }
}

function validateUser(){
  let email = document.querySelector('#typeEmailX');
  let password = document.querySelector('#typePasswordX');
  let hasAccount = false;

  fetch("/userinfo.json")
  .then((res) => res.json())
    .then((data)=>{
      let isValidEmail = data.Users[0]["user email"];
      let isValidPass = data.Users[0]["user password"];
      if (email.value === isValidEmail && password.value === isValidPass)
      hasAccount=true
      console.log(isValidEmail, isValidPass);
    })
  return hasAccount;  
}
}
loadPage()