$(window).scroll(function() {
    skipButtonToggle();
});

$(document).ready(function(){
	init();
});

function init() {
	onloadFadeIn();
	initCarousel();
    	initChangeImg();
	scrollToggle();
	switchImg();
}

function onloadFadeIn() {
    $('body').fadeIn(700);
    $('.skip-button').css("display", "none")
}

function initCarousel() {

   $('.carousel-wrapper').click(function(){
        var $this = $(this),
            $Img = $this.find('.active'),
            $currentImg = $Img.is(":last-child");

        $Img.removeClass('active');

        if ($currentImg  == true) {
            $Img.siblings().first().addClass('active');
        } else {
            $Img.next().addClass('active');
        }
   })
}

function initChangeImg() {
    $('.finger-tap').click(function(){
        var $this = $(this),
            $fingerAttr = $this.attr('data-finger-count'),
            $img = $('.switch-img');

            $this.addClass('active');
            $this.siblings().removeClass('active');

            $img.each(function(){
                var $this = $(this),
                    $imgAttr = $this.attr('data-switch-count');

                if ($fingerAttr == $imgAttr) {
                    $this.addClass('active');
                    $this.siblings().removeClass('active');
                } else {}
            })
    })
}

function scrollToggle() {
    var elm = document.getElementById("back-button");
    if (elm != null){

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("back-button").style.opacity = "1";
    } else {
        document.getElementById("back-button").style.opacity = "0";
    }

    prevScrollpos = currentScrollPos;

    }
    } else {}
}

function skipButtonToggle() {
    var $elm = $('#skip-button'),
        $currentPos = window.pageYOffset;
        $uiSection = $('#UIOverview').offset();
    
    if ($elm.length) {

        if ($currentPos < $uiSection.top) {
            $elm.fadeIn();
        } else {
            $elm.fadeOut();
        }
    } else {}
}

function switchImg() {
    $('.switch-img').click(function(){
        var $this = $(this);
            next = 1;
            imgAttr = $this.attr('data-switch-count');
            nextAttr = (+next + +imgAttr);
            currentImg = $this.is(":last-child");
            finger = $('.finger-tap');
        
        $this.removeClass('active');

        if (currentImg == true) {
            var firstImg = $this.siblings().first();
                firstImgAttr = firstImg.attr('data-switch-count');

            firstImg.addClass('active');

            finger.each(function(){
                var $this = $(this);
                fingerAttr = $this.attr('data-finger-count');
                if (fingerAttr == firstImgAttr) {
                    $this.siblings().removeClass('active');
                    $this.addClass('active');
                } else {}
            })
        } else {
            $this.next().addClass('active');

            finger.each(function(){
                var $this = $(this);
                    fingerAttr = $this.attr('data-finger-count');
    
                if (fingerAttr == nextAttr) {
                    $this.addClass('active');
                    $this.siblings().removeClass('active');
                } else {}
            })
        }
    })
}
