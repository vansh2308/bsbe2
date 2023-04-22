// responsive menu
const menuIcon = document.getElementById("menu-icon")
const resNav = document.querySelector(".res-menu")
const closeBtn = document.querySelector("#close-btn")
menuIcon.addEventListener("click", (e)=>{
  resNav.style.height = "100vh";
})
closeBtn.addEventListener("click", (e)=>{
  resNav.style.height = '0';
})

