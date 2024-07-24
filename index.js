document.querySelector("form").addEventListener("submit",function(e){
    e.preventDefault()
let name = document.getElementById("name").value
let email =   document.getElementById("email").value
let password =  document.getElementById("password").value

  let userdetails ={
    name : name,
    email : email,
    password : password
  }

  console.log(userdetails);
  localStorage.setItem("userkadata",JSON.stringify(userdetails));

})