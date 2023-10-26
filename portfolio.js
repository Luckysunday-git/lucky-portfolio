const menuBtn = document.querySelector('.menu-btn');

const navLinks = document.querySelector('.ul-navlinks');

menuBtn.addEventListener('click', () =>{
  navLinks.classList.toggle('mobile-menu');
  
});

   
    // for fixed navbar onscroll

   let height = 0;

   let scrollHeight = () => { 
    return height + scrollY;
   }

  window.addEventListener('scroll', () =>{
  const scroll = Math.floor(scrollHeight());
  console.log(scroll);
  
  let navHeader = document.querySelector('.nav-header');

  if(!scroll){
  navHeader.style.backgroundColor = 'transparent';
  navHeader.style.borderBottom = 'transparent';
  }else if(scroll){
    navHeader.style.backgroundColor = '#5f7d95';
    navHeader.style.borderBottom = `${1}px solid black`;
  }

})





