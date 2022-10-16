
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
    } else {
    document.getElementById("navbar").style.top = "-1000px";
    }
    }


    $(document).ready(function() {

        // required elements
        var imgPopup = $('.img-popup');
        var imgCont  = $('.container__img-holder');
        var popupImage = $('.img-popup img');
        var closeBtn = $('.close-btn');
        
        // handle events
        imgCont.on('click', function() {
          var img_src = $(this).children('img').attr('src');
          imgPopup.children('img').attr('src', img_src);
          imgPopup.addClass('opened');
        });
        
        $(imgPopup, closeBtn).on('click', function() {
          imgPopup.removeClass('opened');
          imgPopup.children('img').attr('src', '');
        });
        
        popupImage.on('click', function(e) {
          e.stopPropagation();
        });
        
        });
        