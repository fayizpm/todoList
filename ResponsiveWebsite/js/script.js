var swiper = new Swiper(".mySwiper", {
  speed: 2000,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true
});
// responsive

let Bar=document.querySelector('.fa-bars')
let Menu=document.querySelector('.menu')




Bar.addEventListener('click',()=>{
  Menu.classList.toggle('open');
  
 

  
})
123
123
123
