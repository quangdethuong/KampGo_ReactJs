import React from 'react'
import $ from 'jquery'
import { useEffect } from 'react';

import 'animsition';
import 'isotope-layout/dist/isotope.pkgd.min.js'



export default function Header() {

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
        <>
            <header className="header-v3">
                <div className="container-menu-desktop trans-03">
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop p-l-45">
                            <a href="a" className="logo">
                                <img src={require('../assets/images/icons/Asset-1.png')} alt="IMG-LOGO" />
                            </a>
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>
                                        <a href="index-2.html">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index-2.html">Homepage 1</a></li>
                                            <li><a href="home-02.html">Homepage 2</a></li>
                                            <li><a href="home-03.html">Homepage 3</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="product.html">Shop</a>
                                    </li>
                                    <li className="label1" data-label1="hot">
                                        <a href="shoping-cart.html">Features</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="wrap-icon-header flex-w flex-r-m h-full">
                                <div className="flex-c-m h-full p-r-25 bor6">
                                    <div className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify={2}>
                                        <i className="zmdi zmdi-shopping-cart" />
                                    </div>
                                </div>
                                <div className="flex-c-m h-full p-lr-19">
                                    <div className="icon-header-item cl0 hov-cl1 trans-04 p-lr-11 js-show-sidebar">
                                        <i className="zmdi zmdi-menu" />
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="index-2.html"><img src="images/icons/logo-01.png" alt="IMG-LOGO" /></a>
                    </div>
                    <div className="wrap-icon-header flex-w flex-r-m h-full m-r-15">
                        <div className="flex-c-m h-full p-r-5">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify={2}>
                                <i className="zmdi zmdi-shopping-cart" />
                            </div>
                        </div>
                    </div>
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span>
                    </div>
                </div>
                <div className="menu-mobile">
                    <ul className="main-menu-m">
                        <li>
                            <a href="index-2.html">Home</a>
                            <ul className="sub-menu-m">
                                <li><a href="index-2.html">Homepage 1</a></li>
                                <li><a href="home-02.html">Homepage 2</a></li>
                                <li><a href="home-03.html">Homepage 3</a></li>
                            </ul>
                            <span className="arrow-main-menu-m">
                                <i className="fa fa-angle-right" aria-hidden="true" />
                            </span>
                        </li>
                        <li>
                            <a href="product.html">Shop</a>
                        </li>
                        <li>
                            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">Features</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <button className="flex-c-m btn-hide-modal-search trans-04">
                        <i className="zmdi zmdi-close" />
                    </button>
                    <form className="container-search-header">
                        <div className="wrap-search-header">
                            <input className="plh0" type="text" name="search" placeholder="Search..." />
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search" />
                            </button>
                        </div>
                    </form>
                </div>

            </header>

            <aside className="wrap-sidebar js-sidebar">
                <div className="s-full js-hide-sidebar" />
                <div className="sidebar flex-col-l p-t-22 p-b-25">
                    <div className="flex-r w-full p-b-30 p-r-27">
                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-sidebar">
                            <i className="zmdi zmdi-close" />
                        </div>
                    </div>
                    <div className="sidebar-content flex-w w-full p-lr-65 js-pscroll">
                        <ul className="sidebar-link w-full">
                            <li className="p-b-13">
                                <a href="index-2.html" className="stext-102 cl2 hov-cl1 trans-04">
                                    Home
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    My Wishlist
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    My Account
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Track Oder
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Refunds
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Help &amp; FAQs
                                </a>
                            </li>
                        </ul>
                        <div className="sidebar-gallery w-full p-tb-30">
                            <span className="mtext-101 cl5">
                                @ KampGo
                            </span>
                        </div>
                        <div className="sidebar-gallery w-full">
                            <span className="mtext-101 cl5">
                                About Us
                            </span>
                            <p className="stext-108 cl6 p-t-27">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus vulputate hendrerit. Praesent faucibus erat vitae rutrum gravida. Vestibulum tempus mi enim, in molestie sem fermentum quis.
                            </p>
                        </div>
                    </div>
                </div>
            </aside>


            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart" />
                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Your Cart
                        </span>
                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close" />
                        </div>
                    </div>
                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-01.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="a" className="header-cart-item-name m-b-18 hov-cl1 trans-04" >
                                        White Shirt Pleat
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $19.00
                                    </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-02.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="a" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Converse All Star
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $39.00
                                    </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-03.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="a" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Nixon Porter Leather
                                    </a>
                                    <span className="header-cart-item-info">
                                        1 x $17.00
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Total: $75.00
                            </div>
                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </>
    )
}
