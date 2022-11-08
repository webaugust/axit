// Scroll Menu
$(function() {

    let header = $("#header");
    let intro = $("#intro");

    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    let nav = $("#header__nav");
    let navTooggle = $("#navTooggle");

    checkScroll(scrollPos, introH)

    // Fixed Header
    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll (scrollPos, introH);

    });


    function checkScroll(scrollPos, introH) {
        if(scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    //Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();


        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset - 30
        }, 700);
    });

    // Nav Tooggle

    navTooggle.on("click", function(event){
        event.preventDefault();

        nav.toggleClass("show");


    });









    
});