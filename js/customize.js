// 自行加入的JS請寫在這裡
$(function () {
  //sticky sidebar
  if ($('.stickySidebar').length > 0) {
    var stickySidebar = new StickySidebar('.stickySidebar', {
      containerSelector: '.main',
      topSpacing: 93,
      bottomSpacing: 0,
      minWidth: 768,
      resizeSensor: true,
    });
  }

  // 政府輔導資源手冊 按鈕高度，是吃左方icon的高度
  $(document).ready(function() {
    // 初始化
    updateFocusHeight();
    // 視窗大小調整時更新
    $(window).on('resize', function() {
      updateFocusHeight();
    });
    function updateFocusHeight() {
      var imgContainerHeight = $('.resourceList .img-container').height();
      $('a.focus').css('height', imgContainerHeight + 'px');
    }
  });

  // btn_close clicked， .m_search add display:none;
  $('.searchCtrl_desk').click(function(){
    $('.search .searchItem').addClass('show');
    $('.search .searchItem').stop(true, false).fadeIn('400', 'easeOutQuint');
  })
  $('.searchCtrl').click(function(){
    $('.m_search').stop(true, false).fadeIn('400', 'easeOutQuint');
  })
  
  $('.search .btn_close').click(function(){
    $('.search .searchItem').stop(true, false).fadeOut('400', 'easeOutQuint');
  })
  $('.m_search .btn_close').click(function(){
    $('.m_search').stop(true, false).fadeOut('400', 'easeOutQuint');
  })

  // 首頁輪播
  $('.mpSlider').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false,
    speed: 1200, 
    focusOnSelect: true,
    dots: true,
    // infinite: true,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 1,
      //     arrows: true,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '100px',
        },
      },
      {
        breakpoint: 575,
        settings: {
          centerPadding: '50px',
        },
      },
    ],
  });
  // 廣告輪播
  $('.adSlider').slick({
    mobileFirst: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //       arrows: true,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       arrows: true,
    //     },
    //   },
    //   {
    //     breakpoint: 575,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       arrows: true,
    //     },
    //   },
    // ],
  });
  //燈箱slick+lightBox組合
  $('.cp_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    pauseOnFocus: true,
    focusOnSelect: true,
    accessibility: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  //
  $('.cppic_slider').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    // pauseOnHover: true,
    // pauseOnFocus: true,
    // focusOnSelect: true,
    // accessibility: true,
    // lazyLoad: 'ondemand',
    // ease: 'ease',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  // cp_photo
  $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controls').html(i + '/' + slick.slideCount);
  });
  $('.Slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
    swipeToSlide: false,
    lazyLoad: 'ondemand',
    asNavFor: '.Slider-nav',
    infinite: true,
  });
  $('.Slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.Slider-for',
    dots: true,
    arrows: true,
    lazyLoad: 'ondemand',
    focusOnSelect: true,
    infinite: true,
  });

  // password_toggle
  var passShow = false;
  $('.password_toggle').each(function (index, el) {
    $(this)
      .find('.btn-icon')
      .off()
      .click(function (e) {
        if (!passShow) {
          $(this).children('i').removeClass().addClass('i_show');
          $(this).parents('.password_toggle').find('input[type="password"]').attr('type', 'text');
          passShow = true;
          // console.log(passShow);
        } else {
          $(this).children('i').removeClass().addClass('i_hide');
          $(this).parents('.password_toggle').find('input[type="text"]').attr('type', 'password');
          passShow = false;
          // console.log(passShow);
        }
        e.preventDefault();
      });
  });
});
