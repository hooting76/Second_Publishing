// 배너이미지 리사이즈 기능
setInterval(imgResizeFn,150);
$(window).resize(function(){
    imgResizeFn();
});

function imgResizeFn(){
    winH=$(window).innerHeight();
    winW=$(window).innerWidth();
    imgH=$('.banner_inner ul li img').innerHeight();
    // console.log(imgH); //<-값은 잘 들어옴 이미지 높이
    imgW=$('.banner_inner ul li img').innerWidth();
    // console.log(imgW);  //<-값은 잘 들어옴 이미지 너비
    imgH_ratio = winW*(0.35); // 이미지 가로비율

    // console.log(imgH_ratio); //정상작동
    // 이미지크기 초기화
    $('.banner_inner ul li').css({width:100+"%", height:100+"%"});

    if(winW>imgW){// 창너비보다 이미지너비가 작을때
        $('.banner_inner ul li img').css({width:winW});
        $('.banner_inner ul li img').css({height:imgH_ratio});
        $('.banner').css({height:imgH_ratio});
        $('.banner_inner').css({height:imgH_ratio});
        $('.banner_inner ul').css({height:imgH_ratio});
        $('.banner_inner ul li').css({height:imgH_ratio});
    }else{
        $('.banner_inner ul li img').css({width:winW});
        $('.banner_inner ul li img').css({height:imgH_ratio});
        $('.banner').css({height:imgH_ratio});
        $('.banner_inner').css({height:imgH_ratio});
        $('.banner_inner ul').css({height:imgH_ratio});
        $('.banner_inner ul li').css({height:imgH_ratio});
    }
    
};
// 배너 이미지 리사이즈 끝

// 배너 이미지슬라이더
let moving = $('.banner_inner>ul');
let moving2 = $('.banner_inner ul li');
let arr_right = $('.right_Btn');
let arr_left = $('.left_Btn');
let current=0;
let timer;
let pager = $('.pager span');

pager.eq(0).addClass('on');

// 슬라이더 자동재생
slide();
function slide(){
    timer = setInterval(function(){
        let prev = moving2.eq(current);
        let left = pager.eq(current);
        fadeSlide(prev,1,0);
        left.removeClass('on');
        current++;
    
        if(current==moving2.size()) current=0;
        
        let next = moving2.eq(current);
        let right = pager.eq(current);
        fadeSlide(next,0,1);
        right.addClass('on');
    },5000);
};

// 화살표버튼 관련
arr_right.click(function(){
    let prev = moving2.eq(current);
    let arr_left = pager.eq(current);
    fadeSlide(prev,1,0);
    arr_left.removeClass('on');
    current++;

    if(current == moving2.size()){
        current=0;
    }

    let next = moving2.eq(current);
    let arr_right = pager.eq(current);
    fadeSlide(next,0,1);
    arr_right.addClass('on');
});

arr_left.click(function(){
    let prev = moving2.eq(current);
    let arr_left = pager.eq(current);
    fadeSlide(prev,1,0);
    arr_left.removeClass('on');
    current--;

    if(current == -moving2.size()){
        current=0;
    }

    let next = moving2.eq(current);
    let arr_right = pager.eq(current);
    fadeSlide(next,0,1);
    arr_right.addClass('on');
});

// 화살표 호버시 자동재생 멈춤
$('.banner_inner>a').hover(function(){
    clearInterval(timer);
}, function(){
    slide();
});

// pager호버시 자동재생멈춤
$('.pager').hover(function(){
    clearInterval(timer);
}, function(){
    slide();
});


// 페이저버튼으로 이동
function slidePager1(i){
    if(current==i) return;

    let currentEl = moving2.eq(current);
    let nextEl = moving2.eq(i);

    // console.log(nextEl);

    fadeSlide(currentEl,1,0)
    // currentEl.fadeOut(500);
    fadeSlide(nextEl,0,1)
    // nextEl.fadeIn(500);
    current =i;
}

function slidePager2(i){
    if(current==i) return;

    let currentEl = moving2.eq(current);
    let nextEl = moving2.eq(i);

    // console.log(nextEl);

    fadeSlide(currentEl,1,0)
    // currentEl.fadeOut(500);
    fadeSlide(nextEl,0,1)
    // nextEl.fadeIn(500);
    current =i;
}

function fadeSlide(tg,start,end){
    tg.css('opacity', start).stop().animate({opacity:end},500);
}

pager.click(function(){
    let tg = $(this);
    let i = tg.index();

    pager.removeClass('on');
    tg.addClass('on');

    if(current>i){
        slidePager1(i);
    }else{
        slidePager2(i);
    }
});
// 배너 이미지슬라이더 끝.

// 퀵메뉴 관련 시작.
let q_btn = $('.q_menu>a');
let q_main = $('.quick_menu_remote');
// console.log(q_btn); 확인
// console.log(q_main); 확인

q_btn.click(function(){
    let leftSize = q_main.css("left");
    let arr_q = $('.quick_menu>img');
    // console.log(leftSize); //n px단위로 들어옴 <- 콘솔찍는걸 생활화 하자...

    if(leftSize=='370px'){
        q_main.css("left",0);
        arr_q.css("transform","rotate(180deg)");
    }else if(leftSize=='0px'){
        q_main.css("left","370px");
        arr_q.css("transform","rotate(0)");
    }
});
// 퀵메뉴 끝.

// 탭 메뉴
let tab = $('.notice_title_area>.notice_title_text');
let tabContent = $('.notice_title_text>ul');
let width = $(window).innerWidth();
tabContent.eq(0).css('display','flex');

tab.click(function(){
    let tg = $(this);
    let idx = tg.index();

    // console.log(tab);
    // console.log(tabContent);
    // console.log(tg);
    // console.log(idx);
    // console.log(tab.find('a'));

    console.log(width);
    tab.find('a').removeClass('on');
    tg.find('a').addClass('on');

    tabContent.css('display','none');
    tabContent.eq(idx).css('display','flex');

    if(idx==2){
        $('.main_mid').css('height','900px');
    }else{
        $('.main_mid').css('height','1600px');
    }
});

