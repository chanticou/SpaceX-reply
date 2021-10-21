    // ANIMACIONES CON JQUERY

    $('.scroll-1').click(function () {

        $('html,body').animate({
            scrollTop: $('.fin-scroll__footer').offset().top
        }, 2000)
    })



    $('.shop-space').animate({
        fontSize: '100px',
        opacity: .8
    }, 3000)


