$(document).ready(function(){

  //w_header 뒤에 header_bg 추가
  $('.w_header').append('<div class="header_bg"></div>')

  //w_header
  $('.gnb > li').on('mouseenter',function(){
    $('.submenu, .header_bg').stop().slideDown(300);
  })
  $('.gnb > li').on('mouseleave',function(){
    $('.submenu, .header_bg').stop().slideUp(300);
  })

  //m_header
  $('.menu_btn').on('click',function(){
    $('.menu_btn').toggleClass('active')
    $('.mh_menu').toggleClass('open')
  })

  $('.m_menu > ul li').on('click',function(){
    const i = $(this).index();
    $('.m_menu > ul > li').removeClass('current');
    $('.mn_left > ul > li').eq(i).addClass('current');
    $('.mn_right > ul > li').eq(i).addClass('current');
  })
  
  $(window).on('resize',function(){
    const i = $(this).index();
    $('.mh_nav .submenu').css({'display':'block'})
  })

  //메인 슬라이드 최초 접속시 텍스트 효과제어
  $('.slider').on('init', function(event, slick) {
    $('.slider').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
    setTimeout( function() {
      $('.slider').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
    }, 1);
  });
  
  //메인 슬라이드
  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    draggable:false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    fade: true,
    pauseOnHover:false
  });

  //반응형
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  //이용약관버튼 클릭 시 팝업
  // $('.pop_temrs').on('click',function(){
  //   $('html, body').css({'overflow':'hidden'});
  //   $('.pop_wrap_temrs').fadeIn(200);
  // });

  //개인정보처리방침버튼 클릭 시 팝업
  $('.popup_privacy').on('click',function(){
    $('html, body').css({'overflow':'hidden'});
    $('.pop_wrap_privacy').fadeIn(200);
  });

  //팝업 종료
  $('.popup_close').on('click',function(){
    $('html, body').css({'overflow':'visible'});
    $('.pop_wrap').fadeOut(200);
  });

   // 팝업 스크롤
   $(".pop_content .pop_text").mCustomScrollbar({
   });




})