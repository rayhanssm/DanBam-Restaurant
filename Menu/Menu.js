$(document).ready(function(){
    let slideCount = $('.menuspromo div.menus div.menu').length
    let slideWidth = $('.menuspromo div.menus div.menu').width()
    let slideHeight = $('.menuspromo div.menus div.menu').height()
    let totalWidth = slideCount*slideWidth

    $('.menuspromo').css({ width : slideWidth, height : slideHeight })
    $('.menuspromo div.menus').css({ width : totalWidth, marginLeft : -slideWidth })
    $('.menuspromo div.menus div.menu:last-child').prependTo('.menuspromo div.menus')

    $('#prev').click(function(){
        $('.menuspromo div.menus').animate({
            left : slideWidth
        }, 300, function(){
            $('.menuspromo div.menus div.menu:last-child').prependTo('.menuspromo div.menus')
            $('.menuspromo div.menus').css({ left : '' })
        })
    })

    $('#next').click(function(){
        $('.menuspromo div.menus').animate({
            left : -slideWidth
        }, 300, function(){
            $('.menuspromo div.menus div.menu:first-child').appendTo('.menuspromo div.menus')
            $('.menuspromo div.menus').css({ left : '' })
        })
    })
})