/* ===============================
      Design by Md Shakib Reza 
   =============================== */

window.onscroll = function () {
    myFunction()
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }


}

// Intro Tab start
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Intro Tab End 

// Owl Carousel
jQuery(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        center: true,
        margin: 30,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            850: {
                items: 3,
            }
        }
    });
});