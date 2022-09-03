
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("roll_back").style.display = "flex";
    } else {
    document.getElementById("navbar").style.top = "-120px";
    document.getElementById("roll_back").style.display = "none";
    }
    }

const parllax = document.querySelector(".parallax");
window.addEventListener("scroll", function() {
  let offset = window.pageYOffset;
  parllax.style.backgroundPositionY = offset * 0.5 + 'px';
});

var english = document.getElementById("en"),
  change_text = document.getElementById("translate");
// declare some variables to catch the various HTML elements

english.addEventListener("click", function() {
    change(english);
  }, false
);
// add an event listener to listen to when the user clicks on one of the language span tags
// this triggers our custom "change" function, which we will define later

japanese.addEventListener("click", function() {
    change(english);
  }, false
);

chinese.addEventListener("click", function() {
    change(english);
  }, false
);

