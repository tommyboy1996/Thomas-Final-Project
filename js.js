// Dark/Light Mode button //
const darkButton = document.getElementById("darkmode");

darkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "black"
})

const lightButton = document.getElementById("lightmode");

lightButton.addEventListener("click", function (){
  document.body.style.backgroundColor = "#3d3b3c"

})


  //MENU//
  const SlideOpenAndClose = document.getElementById("menu-hamburger");
SlideOpenAndClose.addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("menu-open");
});

const menuCloser = document.getElementById("menu-close");
menuCloser.addEventListener("click", function () {
  document.querySelector(".menu").classList.remove("menu-open");
});

