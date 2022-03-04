setInterval(videoResizeFn,100);
$(window).resize(function(){
    videoResizeFn();
});

function videoResizeFn(){
    winH=$(window).innerHeight();
    winW=$(window).innerWidth();
    imgH=$('.banner_inner ul li').innerHeight();
    // console.log(imgH);
    imgW=$('.banner_inner ul li').innerWidth();
    // console.log(imgW);

    $('.banner_inner ul').css({width:100+"%", height:winH});
    if(winH>imgH){// 창의 높이보다 이미지높이가 크다면
        $('.banner_inner ul li').css({width:"auto", height:winH});
    }
    if(winW>imgW){// 창너비보다 이미지너비가 작으면
        $('.banner_inner ul li').css({width:winW, height:"auto"});
    }

    $('.banner_inner ul li').css({marginTop:(winH-imgH)/2, marginLeft: (winW-imgW)/2});
    // 추후 수정필요 3/4
}