import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Header from './components/Header';
import { useEffect } from 'react';
import 'animsition';
import $ from 'jquery'
import DevelopmentNotification from './pages/404/DevelopePage';
import Footer from './components/Footer';
import CartOrder from './pages/Cart/CartOrder';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import TourShop from './pages/TourShop/TourShop';
import ProductItemImg from './pages/ProductDetail/ProductItemImg';
import TourDetail from './pages/TourDetail/TourDetail';






function App() {

  useEffect(() => {
    $('.animsition').animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 1500,
      outDuration: 800,
      linkElement: '.animsition-link',
      loading: true,
      loadingParentElement: 'html',
      loadingClass: 'animsition-loading-1',
      loadingInner: '<div class="loader05"></div>',
      timeout: false,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'html',
      transition: function (url) { window.location.href = url; }
    });


    /*[ Back to top ]
    ===========================================================*/
    var windowH = $(window).height() / 2;

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > windowH) {
        $("#myBtn").css('display', 'flex');
      } else {
        $("#myBtn").css('display', 'none');
      }
    });

    $('#myBtn').on("click", function () {
      $('html, body').animate({ scrollTop: 0 }, 300);
    });


    /*==================================================================
    [ Fixed Header ]*/
    var headerDesktop = $('.container-menu-desktop');
    var wrapMenu = $('.wrap-menu-desktop');

    if ($('.top-bar').length > 0) {
      var posWrapHeader = $('.top-bar').height();
    } else {
      var posWrapHeader = 0;
    }


    if ($(window).scrollTop() > posWrapHeader) {
      $(headerDesktop).addClass('fix-menu-desktop');
      $(wrapMenu).css('top', 0);
    } else {
      $(headerDesktop).removeClass('fix-menu-desktop');
      $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
    }

    $(window).on('scroll', function () {
      if ($(this).scrollTop() > posWrapHeader) {
        $(headerDesktop).addClass('fix-menu-desktop');
        $(wrapMenu).css('top', 0);
      } else {
        $(headerDesktop).removeClass('fix-menu-desktop');
        $(wrapMenu).css('top', posWrapHeader - $(this).scrollTop());
      }
    });


    /*==================================================================
    [ Menu mobile ]*/
    $('.btn-show-menu-mobile').on('click', function () {
      $(this).toggleClass('is-active');
      $('.menu-mobile').slideToggle();
    });

    var arrowMainMenu = $('.arrow-main-menu-m');

    for (var i = 0; i < arrowMainMenu.length; i++) {
      $(arrowMainMenu[i]).on('click', function () {
        $(this).parent().find('.sub-menu-m').slideToggle();
        $(this).toggleClass('turn-arrow-main-menu-m');
      })
    }

    $(window).resize(function () {
      if ($(window).width() >= 992) {
        if ($('.menu-mobile').css('display') == 'block') {
          $('.menu-mobile').css('display', 'none');
          $('.btn-show-menu-mobile').toggleClass('is-active');
        }

        $('.sub-menu-m').each(function () {
          if ($(this).css('display') == 'block') {
            console.log('hello');
            $(this).css('display', 'none');
            $(arrowMainMenu).removeClass('turn-arrow-main-menu-m');
          }
        });

      }
    });


    /*==================================================================
    [ Show / hide modal search ]*/
    $('.js-show-modal-search').on('click', function () {
      $('.modal-search-header').addClass('show-modal-search');
      $(this).css('opacity', '0');
    });

    $('.js-hide-modal-search').on('click', function () {
      $('.modal-search-header').removeClass('show-modal-search');
      $('.js-show-modal-search').css('opacity', '1');
    });

    $('.container-search-header').on('click', function (e) {
      e.stopPropagation();
    });



    /*==================================================================
    [ Cart ]*/
    $('.js-show-cart').on('click', function () {
      $('.js-panel-cart').addClass('show-header-cart');
    });

    $('.js-hide-cart').on('click', function () {
      $('.js-panel-cart').removeClass('show-header-cart');
    });

    /*==================================================================
    [ Cart ]*/
    $('.js-show-sidebar').on('click', function () {
      $('.js-sidebar').addClass('show-sidebar');
    });

    $('.js-hide-sidebar').on('click', function () {
      $('.js-sidebar').removeClass('show-sidebar');
    });

    /*==================================================================
    [ +/- num product ]*/
    $('.btn-num-product-down').on('click', function () {
      var numProduct = Number($(this).next().val());
      if (numProduct > 0) $(this).next().val(numProduct - 1);
    });

    $('.btn-num-product-up').on('click', function () {
      var numProduct = Number($(this).prev().val());
      $(this).prev().val(numProduct + 1);
    });

    /*==================================================================
    [ Rating ]*/
    $('.wrap-rating').each(function () {
      var item = $(this).find('.item-rating');
      var rated = -1;
      var input = $(this).find('input');
      $(input).val(0);

      $(item).on('mouseenter', function () {
        var index = item.index(this);
        var i = 0;
        for (i = 0; i <= index; i++) {
          $(item[i]).removeClass('zmdi-star-outline');
          $(item[i]).addClass('zmdi-star');
        }

        for (var j = i; j < item.length; j++) {
          $(item[j]).addClass('zmdi-star-outline');
          $(item[j]).removeClass('zmdi-star');
        }
      });

      $(item).on('click', function () {
        var index = item.index(this);
        rated = index;
        $(input).val(index + 1);
      });

      $(this).on('mouseleave', function () {
        var i = 0;
        for (i = 0; i <= rated; i++) {
          $(item[i]).removeClass('zmdi-star-outline');
          $(item[i]).addClass('zmdi-star');
        }

        for (var j = i; j < item.length; j++) {
          $(item[j]).addClass('zmdi-star-outline');
          $(item[j]).removeClass('zmdi-star');
        }
      });
    });

    /*==================================================================
    [ Show modal1 ]*/
    $('.js-show-modal1').on('click', function (e) {
      e.preventDefault();
      $('.js-modal1').addClass('show-modal1');
    });

    $('.js-hide-modal1').on('click', function () {
      $('.js-modal1').removeClass('show-modal1');
    });





  }, [])
  return (
    <BrowserRouter>
      <div className='animsition'>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />

          <Route exact path='/' component={Home} />

          <Route exact path='/shop' component={Shop} />
          
          <Route exact path='/tour-shop' component={TourShop} />


          <Route exact path='/cart' component={CartOrder} />

          <Route exact path='/product-detail/:maSP' component={ProductDetail} />

          <Route exact path='/tour-detail/:maTour' component={TourDetail} />




          <Route path="*" component={DevelopmentNotification} />


        </Switch>
        <div className="btn-back-to-top" id="myBtn">
          <span className="symbol-btn-back-to-top">
            <i className="zmdi zmdi-chevron-up" />
          </span>
        </div>
        <Footer />

      </div>
    </BrowserRouter>


  );
}

export default App;