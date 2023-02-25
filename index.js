let btn1 = document.querySelector("#signup");
let form = document.querySelector(".signup");
let users = [];
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#pass");
let confirm = document.querySelector("#confirm");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let data;
  if (password.value != confirm.value) {
    alert("password not matched");
  } else if (password.value == confirm.value) {
    data = { Email: email.value, Password: password.value, Name: name.value };
    users.push(data);
    //console.log(users)
    localStorage.setItem("userinfo", JSON.stringify(users));
    window.location.href = "./login.html";
  }
}
console.log(users);
