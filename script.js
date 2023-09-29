let menu = document.querySelector("#bar");
let navbar = document.querySelector(".navi");
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
// let section =document.querySelectorAll('section');
// let navLinks =document.querySelectorAll('header .navi a');
window.onscroll = () => {
  menu.classList.remove("fa-times");
  // navbar.classList.toggle('active');
//   section.forEach(sec =>{
//    let top =window.scrollY;
//    let height =sec.offsetHeight;
//    let offset =sec.offsetTop - 150;
//    let id =sec.getAttribute('id');
//    if(top => offset && top < offset + height){
//     navLinks.forEach(links =>{
//       links.classList.remove('active');
//       document.querySelector('header .navi a[href*='+id+']').classList.add('active');
//     });
//    };

//   });
};

var swiper = new Swiper(".container", {
  spaceBetween: 30,
  hashNavigation: {
    watchState: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
var swiper = new Swiper(".review-slide", {
  spaceBetween: 20,
  hashNavigation: {
    watchState: true,
  },
  loop: true,
});
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader,3000);
}
window.onload = fadeOut;
