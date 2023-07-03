$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
/*===============================================form =================================================*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbz69GBDM5BR0rF_3-_oct1yJUl38mHA8qaPkMa8N-146BuTzm2PdZjaiDrn6VRfZEswEw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting me...! I will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})

/*===============================================typed js=================================================*/

const typed = new Typed('.multiple-text' ,{
    strings:['Helping Hands'],
    typeSpeed:25,
    backSpeed:50,
    backDelay:1000,
    loop:true
  }); 

});