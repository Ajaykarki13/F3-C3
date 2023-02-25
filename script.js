//userinfo newdata

//if user exists

if(localStorage.getItem("newdata")!==null)
{
  const logdinuser = JSON.parse(localStorage.getItem("newdata"));
  window.location.href="./dashboard.html"
}
//else{window.location.href='./index.html'}