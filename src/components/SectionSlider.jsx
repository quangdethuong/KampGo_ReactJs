import React, { useEffect } from 'react'
import $ from 'jquery'
import "slick-carousel/slick/slick.js";

import kampgoImage from '../assets/images/supkampgo.jpg';
import kampgoImage2 from '../assets/images/camp-dalat-slide.jpg'
import kampgoImage3 from '../assets/images/camp-HonSon-Slide.jpg'



const SectionSlider = () => {
    useEffect(() => {


        /*==================================================================
        [ Slick1 ]*/
        $('.wrap-slick1').each(function () {
            var wrapSlick1 = $(this);
            var slick1 = $(this).find('.slick1');


            var itemSlick1 = $(slick1).find('.item-slick1');
            var layerSlick1 = $(slick1).find('.layer-slick1');
            var actionSlick1 = [];


            $(slick1).on('init', function () {
                var layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1');

                for (var i = 0; i < actionSlick1.length; i++) {
                    clearTimeout(actionSlick1[i]);
                }

                $(layerSlick1).each(function () {
                    $(this).removeClass($(this).data('appear') + ' visible-true');
                });

                for (var i = 0; i < layerCurrentItem.length; i++) {
                    actionSlick1[i] = setTimeout(function (index) {
                        $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
                    }, $(layerCurrentItem[i]).data('delay'), i);
                }
            });


            var showDot = false;
            if ($(wrapSlick1).find('.wrap-slick1-dots').length > 0) {
                showDot = true;
            }

            $(slick1).slick({
                pauseOnFocus: false,
                pauseOnHover: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                speed: 1000,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 6000,
                arrows: true,
                appendArrows: $(wrapSlick1),
                prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
                nextArrow: '<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
                dots: showDot,
                appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
                dotsClass: 'slick1-dots',
                customPaging: function (slick, index) {
                    var linkThumb = $(slick.$slides[index]).data('thumb');
                    var caption = $(slick.$slides[index]).data('caption');
                    return '<img src="' + linkThumb + '">' +
                        '<span class="caption-dots-slick1">' + caption + '</span>';
                },
            });

            $(slick1).on('afterChange', function (event, slick, currentSlide) {

                var layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1');

                for (var i = 0; i < actionSlick1.length; i++) {
                    clearTimeout(actionSlick1[i]);
                }

                $(layerSlick1).each(function () {
                    $(this).removeClass($(this).data('appear') + ' visible-true');
                });

                for (var i = 0; i < layerCurrentItem.length; i++) {
                    actionSlick1[i] = setTimeout(function (index) {
                        $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
                    }, $(layerCurrentItem[i]).data('delay'), i);
                }

            });

        });

        /*==================================================================
        [ Slick2 ]*/
        $('.wrap-slick2').each(function () {
            $(this).find('.slick2').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 4500,
                arrows: true,
                appendArrows: $(this),
                prevArrow: '<button class="arrow-slick2 prev-slick2"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="arrow-slick2 next-slick2"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });


        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            var nameTab = $(e.target).attr('href');
            $(nameTab).find('.slick2').slick('reinit');
        });

        /*==================================================================
        [ Slick3 ]*/
        $('.wrap-slick3').each(function () {
            $(this).find('.slick3').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 6000,

                arrows: true,
                appendArrows: $(this).find('.wrap-slick3-arrows'),
                prevArrow: '<button class="arrow-slick3 prev-slick3"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
                nextArrow: '<button class="arrow-slick3 next-slick3"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',

                dots: true,
                appendDots: $(this).find('.wrap-slick3-dots'),
                dotsClass: 'slick3-dots',
                customPaging: function (slick, index) {
                    var portrait = $(slick.$slides[index]).data('thumb');
                    return '<img src=" ' + portrait + ' "/><div class="slick3-dot-overlay"></div>';
                },
            });
        });


        return () => {

        }
    }, [])
    return (
        <section className="section-slide">
            <div className="wrap-slick1 rs2-slick1">
                <div className="slick1">

                    <div className="item-slick1 bg-overlay1" style={{ backgroundImage: `url(${kampgoImage})` }}
                    >
                        <div className="container h-full">
                            <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                                <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay={0}>
                                    <span className="ltext-202 txt-center cl0 respon2">
                                        Chèo Sup đê
                                    </span>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay={800}>
                                    <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                        Trải nghiệm thú vị
                                    </h2>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay={1600}>
                                    <a href="/4" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Liên hệ ngay
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-slick1 bg-overlay1" style={{ backgroundImage: `url(${kampgoImage2})` }} >
                        <div className="container h-full">
                            <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                                <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay={0}>
                                    <span className="ltext-202 txt-center cl0 respon2">
                                        Cắm trại rừng thông Đà Lạt
                                    </span>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay={800}>
                                    <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                        Ấm áp, thoải mái, an toàn
                                    </h2>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay={1600}>
                                    <a href="/page404" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Liên hệ ngay

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item-slick1 bg-overlay1" style={{ backgroundImage: `url(${kampgoImage3})` }} >
                        <div className="container h-full">
                            <div className="flex-col-c-m h-full p-t-100 p-b-60 respon5">
                                <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay={0}>
                                    <span className="ltext-202 txt-center cl0 respon2">
                                        Khu cắm trại biển Hòn Sơn
                                    </span>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay={800}>
                                    <h2 className="ltext-104 txt-center cl0 p-t-22 p-b-40 respon1">
                                        Dịch vụ mới
                                    </h2>
                                </div>
                                <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay={1600}>
                                    <a href="/page404" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Liên hệ ngay

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionSlider