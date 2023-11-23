$(document).ready(function () {
    // 파일바
    const dd = $('.file-up dl dd')
    // 콘텐츠 표시 
    const conli = $('.con-up li')
    // 내용물
    const wrapli = $('.con-wrap li')
    // 목차
    const index1 = $('.index dd')


    // 목차 클릭했을 떼
    $(index1).click(function () {
        let havedark = $('.darkmode').hasClass('dark')
        let indexunm = $(this).index()

        if (havedark) {
            conli.removeClass('active white')
            conli.eq(indexunm - 1).addClass('active white')
            wrapli.removeClass('show')
            wrapli.eq(indexunm - 1).addClass('show')
            dd.removeClass('active white')
            dd.eq(indexunm - 1).addClass('active white')
        } else {
            // conli에 색 추가하기
            conli.removeClass('active')
            conli.eq(indexunm - 1).addClass('active')
            // 내용물 보이게 하기
            wrapli.removeClass('show')
            wrapli.eq(indexunm - 1).addClass('show')
            // 파일바 색 바꾸기
            dd.removeClass('active')
            dd.eq(indexunm - 1).addClass('active')
        }

        // 목차를 클릭할 때 1. 다크모드 일때, 아닐때
        // 이면 
    })

    // conli 클릭할때(탭)
    conli.click(function () {
        let conindex = $(this).index()
        let havedark = $('.darkmode').hasClass('dark')
        if (havedark) {
            // conli에 색 추가하기
            conli.removeClass('active white')
            $(this).addClass('active white')
            // 내용물 보이게 하기
            wrapli.removeClass('show')
            wrapli.eq(conindex).addClass('show')
            // 파일바 색 바꾸기
            dd.removeClass('active white')
            dd.eq(conindex).addClass('active white')
        } else {
            // conli에 색 추가하기
            conli.removeClass('active')
            $(this).addClass('active')
            // 내용물 보이게 하기
            wrapli.removeClass('show')
            wrapli.eq(conindex).addClass('show')
            // 파일바 색 바꾸기
            dd.removeClass('active')
            dd.eq(conindex).addClass('active')
        }
    })
    conli.eq(0).trigger('click')

    // open (파일바 누를 때)
    dd.click(function () {
        let ddindex = $(this).index()
        let havedark = $('.darkmode').hasClass('dark')
        if(havedark){
            if (conli.hasClass('block') === false) {
                // 해당 내용물이 있을 경우 (conli나 wrap이 block class가 없으면)
                // 파일바 색 바꾸기
                dd.removeClass('active white')
                $(this).addClass('active white')
                // 내욤물 순서 바꾸기
                wrapli.removeClass('show')
                wrapli.eq(ddindex - 1).addClass('show')
                // conli 색 추가하기
                conli.removeClass('active white')
                conli.eq(ddindex - 1).addClass('active white')
            } else {
                // 해당내용물이 없을 경우 (conli나 wrap이 block class가 있으면)
                // 파일바 색 바꾸기
                dd.removeClass('active white')
                $(this).addClass('active white')
                // conli.eq(ddindex-1) block class 없애고 active 클래스 주기
                conli.eq(ddindex - 1).removeClass('block')
                conli.removeClass('active white')
                conli.eq(ddindex - 1).addClass('active white')
                // wrapli.eq(ddindex-1) block class 없애고, show class주기
                wrapli.eq(ddindex - 1).removeClass('block')
                wrapli.removeClass('show')
                wrapli.eq(ddindex - 1).addClass('show')
            }
        }else{
            if (conli.hasClass('block') === false) {
                // 해당 내용물이 있을 경우 (conli나 wrap이 block class가 없으면)
                // 파일바 색 바꾸기
                dd.removeClass('active')
                $(this).addClass('active')
                // 내욤물 순서 바꾸기
                wrapli.removeClass('show')
                wrapli.eq(ddindex - 1).addClass('show')
                // conli 색 추가하기
                conli.removeClass('active')
                conli.eq(ddindex - 1).addClass('active')
            } else {
                // 해당내용물이 없을 경우 (conli나 wrap이 block class가 있으면)
                // 파일바 색 바꾸기
                dd.removeClass('active')
                $(this).addClass('active')
                // conli.eq(ddindex-1) block class 없애고 active 클래스 주기
                conli.eq(ddindex - 1).removeClass('block')
                conli.removeClass('active')
                conli.eq(ddindex - 1).addClass('active')
                // wrapli.eq(ddindex-1) block class 없애고, show class주기
                wrapli.eq(ddindex - 1).removeClass('block')
                wrapli.removeClass('show')
                wrapli.eq(ddindex - 1).addClass('show')
            }
        }

        // *active : 색 바뀌는 class
        // *show : z-index 바뀌는 class
        // *block : 안보이게 하는 class >> 기본: 보임
    })
    dd.eq(0).trigger('click')

    // close (conli 안에 span(X표) 누를때)
    $('.con-up li span').click(function () {
        $(this).parents('li').addClass('block')
        // 해당 conli에 block class주기
        let closeindex = $(this).parents('li').index()
        // 해당 wrapli에 block class 주기
        wrapli.eq(closeindex).addClass('block')
    })

    // 다크모드
    $('.darkmode').click(function () {
        // heaeder
        $('header').toggleClass('dark')
        $('.menu-op li a').toggleClass('dark')
        $('.find').find('a, span, p').toggleClass('dark')
        $('.window').find('span').toggleClass('dark')

        // main-file
        $('.three-op').toggleClass('dark')
        $('.file').toggleClass('dark')
        $('.three-op').find('a, span').toggleClass('dark')
        $('.file-up ').find('a, span, dt').toggleClass('dark')
        dd.toggleClass('dark')
        $('.file-up .active').toggleClass('white')
        $('.down-box').toggleClass('dark')
        // main-content
        $('.content-wrap').toggleClass('dark')
        wrapli.toggleClass('dark')
        $('.con-up').find('li, a , span').toggleClass('dark')
        $('.con-up .active').toggleClass('white')
        // profile
        $('.profile').find('h1, h2, dt, dd, a').toggleClass('dark')
        //work
        $('.work').find('p, a , span, strong').toggleClass('dark')
        // contact
        $('form').find('fieldset, input, textarea, #submit, h1').toggleClass('dark')

        $('.contact-left').find('h1, p, dd, dt').toggleClass('dark')

        // footer
        $('.gray, footer').toggleClass('dark')
        $('.gray').find('p, span').toggleClass('dark')
    })

    $('.X').click(function () {
        window.close()
    })
})