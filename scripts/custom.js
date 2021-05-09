$(function () {
    "use strict";

    $(window).scrollTop(0);

    //===Resize all elements================================================================
    $("body").trigger("resize");
});

$(document).ready(function () {
    //===Set current year of copyright=====================================================
    var currentYear = new Date().getFullYear();
    $("#copyrightYear").text(currentYear);
    $("body").trigger("resize");

    //===Fix header while scroll============================================================
    $(window).scroll(function () {
        assignStickyHeader();
    });

    //===Responsive Navbar Toggle===========================================================
    $(".hamburgerMenuBtn").click(function () {
        $(".hamburgerMenu").toggleClass("active");
        $(".hamburgerMenuBtn").toggleClass("active");
    });

    //===Owl Carousel===========================================================
    // $(".owl-carousel").owlCarousel();
    $("#homeCarouselSlider").owlCarousel({
        center: true,
        items: 1,
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
    });
    $("#itemCarouselSlider").owlCarousel({
        center: true,
        items: 7,
        loop: true,
        margin: 25,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            520: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 5,
            },
            1920: {
                items: 7,
            },
        },
    });
    $(".productCarouselSlider").owlCarousel({
        center: false,
        items: 4,
        loop: true,
        margin: 25,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            520: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 3,
            },
            1920: {
                items: 4,
            },
        },
    });
    $("#rewardProductCarouselSlider").owlCarousel({
        center: false,
        items: 5,
        loop: true,
        margin: 25,
        dots: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            520: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1024: {
                items: 4,
            },
            1920: {
                items: 5,
            },
        },
    });
});

//===Set Sticky Header and Go to Top button================================================
function assignStickyHeader() {
    if ($(window).scrollTop() > 0) {
        addStickyHeader();
    } else {
        removeStickyHeader();
    }
}

function addStickyHeader() {
    $('.nav-main').addClass("sticky-header");
}

function removeStickyHeader() {
    $('.nav-main').removeClass("sticky-header");
}

//===Check screen size=====================================================================
function isMobileDevice() {
    if (window.innerWidth <= 1024) {
        return true;
    } else {
        return false;
    }
}