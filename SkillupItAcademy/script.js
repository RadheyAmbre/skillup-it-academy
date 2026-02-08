// When the user scrolls the page
window.onscroll = function () {
    scrollFunction();
    myFunction();
    progressBar();
    MultipleAnime();
    rightAnime();
    leftAnime();
    upAnime();
    downAnime();
};

// Navbar Overlay
/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}


// TOP Button
//Get the button
let mybutton = document.getElementById("top-btn");

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Stick Header-Bottom
var header = document.getElementById('sticky');
var sticky = header.offsetTop + 300;

function myFunction() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}


// Progress Bar
function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


//Animation On Scroll //Multiple-Times
let multipleSections = document.querySelectorAll('.MultipleAnimation');

function MultipleAnime() {
    multipleSections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
        else {
            sec.classList.remove('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Right
let right = document.querySelectorAll('.animationRight');

function rightAnime() {
    right.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Left
let left = document.querySelectorAll('.animationLeft');

function leftAnime() {
    left.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Up
let up = document.querySelectorAll('.animationUp');

function upAnime() {
    up.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}


//Animation On Scroll //Single-Times //Animation Down
let down = document.querySelectorAll('.animationDown');

function downAnime() {
    down.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 700;

        if (top >= offset) {
            sec.classList.add('show');
        }
    });
}