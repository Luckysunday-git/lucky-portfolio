// fixing the mobile screen menu icon onclick.

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.ul-navlinks');
menuBtn.addEventListener('click', () =>{
  navLinks.classList.toggle('mobile-menu');

});

// updating the footer alright reserved date.

const footerDate = document.querySelector('.date');
const currentDate = new Date().getFullYear();
footerDate.innerHTML = currentDate;
console.log(currentDate);

// for fixed navbar onscroll

  let height = 0;
  let scrollHeight = () => { 
   return height + scrollY;
}

  window.addEventListener('scroll', () =>{
  const scroll = Math.floor(scrollHeight());
  let navHeader = document.querySelector('.nav-header');
  if(!scroll){
  navHeader.style.backgroundColor = 'transparent';
  navHeader.style.borderBottom = 'transparent';
  }else if(scroll){
  navHeader.style.backgroundColor = '#5f7d95';
  navHeader.style.borderBottom = `${2}px solid black`;
}
 
 const animateGoal = document.querySelector('.about-message-goal');
 const animateLang = document.querySelector('.about-message-lang');
 const animateEdu = document.querySelector('.about-message-edu');
 if( scroll >= 250 && scroll <= 900){
   animateGoal.style.transform = `translateX(${scroll * 0 }px)`
   animateLang.style.transform = `translateX(${scroll * 0})`
   animateEdu.style.transform = `translateY(${scroll * 0})`;
 }
  //  Adding back-to-top button
  const upArrow = document.querySelector('.up-arrow');
  if(scroll >= 1300){
  upArrow.style.display = 'block';
 }else{
  upArrow.style.display = 'none';
 }
  
})

//when any of the nav link is clicked on mobile screen, the nav links disappear.

const mobileScreens = document.querySelectorAll('.mobile-screen');
mobileScreens.forEach((mobileScreen) => {
  mobileScreen.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
  })

})
  
  // Codes for dark/light theme button;the page turns either light or dark when clicking the button.

  const aboutContent = document.querySelector('.content');
  const aboutContainer = document.querySelector('.about-container');
  const listItems = document.querySelector('.list-items');
  const numberExperience = document.querySelector('.number-experience');
  const experienceContainer = document.querySelector('.experience-frontend-container');
  const darkThemeContainer = document.querySelector('.dark-theme-container');
  const lightMode = document.querySelector('.light-mode');
  const footer = document.querySelector('.footer');
  const navHeader = document.querySelector('.nav-header');

   lightMode.addEventListener('click', () => {
     if( lightMode.innerHTML === 'Light Mode'){
    lightMode.innerHTML = 'Dark Mode';
    document.body.style.backgroundColor = 'black';
    lightMode.style.transform = `translate(${20}px)`
    aboutContent.style.backgroundColor = 'black';
    aboutContainer.style.backgroundColor = 'black';
    experienceContainer.style.backgroundColor = 'black';
    listItems.style.backgroundColor = 'black';
    numberExperience.style.backgroundColor = 'black';
    footer.style.backgroundColor = 'black';
    
  }else if(lightMode.innerHTML === 'Dark Mode'){
    lightMode.innerHTML = 'Light Mode';
    document.body.style.backgroundColor = 'wheat';
    lightMode.style.transform = `translate(-${20}px)`
    aboutContent.style.backgroundColor = 'initial';
    aboutContainer.style.backgroundColor = '#5f7d95';
    experienceContainer.style.backgroundColor = 'white';
    listItems.style.backgroundColor = '#5f7d95';
    numberExperience.style.backgroundColor = '#5f7d95';
    footer.style.backgroundColor = '#5f7d95';
    
  }else{
    lightMode.innerHTML = 'Light Mode';
    document.body.style.backgroundColor = 'wheat';
    lightMode.style.transform = `translate(-${20}px)`
    aboutContent.style.backgroundColor = 'initial'; 
    aboutContainer.style.backgroundColor = '#5f7d95';
    footer.style.backgroundColor = '#5f7d95';
  }

 })
  
  //pre-loader
    const preLoader = document.getElementById('pre-loader');
    const upArrow = document.querySelector('.up-arrow');
    const preLoaderContainer = document.querySelector('.pre-loader-container');
    window.addEventListener('load', () =>{
    preLoader.style.display = 'none';
    preLoaderContainer.style.display = 'none';
    upArrow.style.display = 'none';
  })

