// Grab elements
const selectElement = selectin_variable =>{
    const element = document.querySelector(selectin_variable)
    if(element) return element;
    throw new Error(`Something went, make sure that ${selectin_variable}
    exists or is typed correctly`);
};

// Nav styles on scroll

const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }

    else{
        headerElement.classList.remove('activated');
    }

};

window.addEventListener('scroll', scrollHeader);

// Open menu & search pop up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () =>{
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);











// Open/Close search form pop up
const formOpenBtn = selectElement('#search-icon');
const formCloseBtn = selectElement('#form-close-btn');
const searchFormContainer = selectElement('#search-form-container');


// show the form when search icon is clicked
// classList.add adds or basically shows the element
formOpenBtn.addEventListener('click', () => 
searchFormContainer.classList.add('activated'));


// Hide the form when close button is clicked
// classList.remove closes or hides the element
formCloseBtn.addEventListener('click', () => 
searchFormContainer.classList.remove('activated'));



//  -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event =>{
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
});


















//  switch theme/add to local storage
// This is the code to load selected theme when page is refreshed

const bodyElement = document.body;
// This is the variable defined to store the body element

const themeToggleBtn = selectElement('#theme-toggle-btn');
// same thing happens here

const currentTheme = localStorage.getItem('currentTheme');
// This stores the selected theme in local storage

if(currentTheme){
    bodyElement.classList.add('light-theme');
    // This will trigger the light theme class for the bodyElement
}

themeToggleBtn.addEventListener('click', () =>{

    // if button is clicked body will have light theme added
    bodyElement.classList.toggle('light-theme');


    if(bodyElement.classList.contains('light-theme')){

        // This code is to check if any theme is added to local storage
        localStorage.setItem('currentTheme', 'themeActive');

    }

    else{

        // if not added it will be removed
        localStorage.removeItem('currentTheme');

    }

}
);






























// Swiper

const swiper = new Swiper('.swiper',{
    slidesPerView: 1,
    spaceBetween: 20,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination:{
        el: '.swiper-pagination'
    },

    breakpoints:{
        700:{
            slidesPerView: 2
        },

        1200:{
            slidesPerView: 3
        }
    }
}
);

































$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });