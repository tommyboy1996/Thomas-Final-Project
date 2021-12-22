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

//PAGE TRANSITION
  
window.onload = () => {
  const anchors = document.querySelectorAll('a');
  const transition_el = document.querySelector('.transition');

  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 750);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener('click', e => {
      e.preventDefault();
      let target = e.target.href;

      console.log(transition_el);

      transition_el.classList.add('is-active');

      console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 750);
    })
  }
}

