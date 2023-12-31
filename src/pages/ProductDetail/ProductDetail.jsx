import React, { useEffect } from 'react'
import $ from 'jquery'
import "slick-carousel/slick/slick.js";
import SliderProducts from '../../components/SliderProducts';
import swal from 'sweetalert/dist/sweetalert.min.js'
import { useState } from 'react';
import ProductDetail_Img from './ProductItemImg';
import ProductItemImg from './ProductItemImg';



const ProductDetail = (props) => {
    const [product, setProduct] = useState();

    const arrayProducts = [
        { "maSP": 1, "namePro": "TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH", "description": "RIVER 2 Pro Với bốn tùy chọn sạc linh hoạt, chúng tôi đảm bảo rằng bạn có thể sạc RIVER 2 Pro gần như mọi lúc mọi nơi. Sạc bằng ổ cắm AC để sạc cực nhanh trong 70 phút, sạc khi đang di chuyển trên ô tô và cùng với khả năng sạc nhanh bằng tấm năng lượng mặt trời. RIVER 2 Pro có tùy chọn sạc hoàn toàn mới, USB-C. Cắm và sạc thuận tiện ở bất cứ đâu có ổ cắm.", "price": 20000000, "pic": "https://quancamp.vn/thumb2/580x620/1/upload/sanpham/river-2-pro-e1692761846453-4762.png", "pic2": "https://quancamp.vn/thumb2/580x620/1/upload/sanpham/river-620%E6%AC%A7%E8%A7%84%E5%8F%B3%E4%BE%A7-1024x576-6329.png", "pic3": "https://quancamp.vn/thumb2/580x620/1/upload/hinhthem/river6201024x576-7561.png" },
        { "maSP": 2, "namePro": "Máy bơm nước có vòi sen 2in1 NatureHike NH20SJ018", "description": "assssssss", "price": 4050000, "pic": "https://quancamp.vn/thumb2/580x620/1/upload/sanpham/quancamp-bom-naturehike-nh20sj018-4427.jpg", "pic2": "https://quancamp.vn/thumb2/580x620/1/upload/sanpham/quancamp-naturehike-nh20sj018-2-7852.jpg", "pic3": "https://quancamp.vn/thumb2/580x620/1/upload/hinhthem/quancampnaturehike-nh20sj0184-1519.jpg" },
        { "maSP": 3, "namePro": "THẢM DÃ NGOẠI VẢI DỆT NATUREHIKE NH21FCD02", "description": "Nổi bật với thiết kế cửa có thể mở thành mái hiên tiện lợi - Lều 4 người Madfox Trekker 4 2022 được tối ưu diện tích sử dụng với 2 mái hiên có thể được tạo ra bởi 2 cửa đối diện nhau. Là mẫu lều dã ngoại, cắm trại dành thích hợp cho những chuyến đi cùng gia đình, bạn bè. Các đường may được xử lý ép seam chống thấm nước", "price": 1000000, "pic": "https://quancamp.vn/upload/images/quancamp-NatureHike-NH21FCD02-love.jpg", "pic2": "https://quancamp.vn/upload/images/quancamp-NatureHike-NH21FCD02-free.jpg", "pic3": "https://quancamp.vn/upload/images/quancamp-NatureHike-NH21FCD02-Jungle.jpg" },
        { "maSP": 4, "namePro": "LỀU CẮM TRẠI, DÃ NGOẠI 4 NGƯỜI MADFOX TREKKER 4 2022", "description": "Lớp trong được thiết kế đa phần là lưới mắt nhỏ giúp ngăn côn trùng, đồng thời đảm bảo thông thoáng Thiết kế 2 cửa đối diện nhau giúp người trong lều dễ dàng di chuyển ra ngoài. 2 cửa có thể dựng lên thành 2 mái hiên, có thể sử dụng cho sinh hoạt, ăn uống nhóm nhỏ. (Sào chống mái hiên KHÔNG được đi kèm) Lớp lều bên trong thiết kế full clip hook (không cần xỏ khung trước khi dựng)Bộ cọc lều cũng bằng nhôm cao cấp, chắc chắn", "price": 2500000, "pic": "https://quancamp.vn/upload/images/quancamp-madfox-trekker4-xanhduong-3.png", "pic2": "https://quancamp.vn/upload/images/quancamp-madfox-trekker4-xanhduong-1.png", "pic3": "ecoflow3.jpg" },
        { "maSP": 5, "namePro": "ĐÈN PIN CẦM TAY FENIX PD35R", "description": "Fenix PD35R có công suất 1700 lumens, tầm chiếu xa tối đa 353 mét. Hãng sử dụng LED Luminus SFT40 tuổi thọ lên đến 50.000 giờ, cho ra ánh sáng trắng chân thực và mịn, dịu mắt. Đèn pin Fenix PD35R có 5 chế độ sáng, và 1 mức Trobe, toàn bộ được điều khiển bằng công tắc kép ở đuôi.", "price": 2000000, "pic": "https://quancamp.vn/upload/images/PD35R_E_-01.jpeg", "pic2": "https://quancamp.vn/upload/images/PD35R_E_-04.jpeg", "pic3": "https://quancamp.vn/upload/images/PD35R_E_-07.jpeg" }
    ];

    const productsLookup = {};



    useEffect(() => {
        // const selectedProduct = arrayProducts.find(product => product.maSP === props.match.params.maSP);

        // if (selectedProduct) {
        //     setProduct(selectedProduct);
        // }
        //     arrayProducts.forEach(p => productsLookup[p.maSP] = p);

        // console.log(data);
        // arrayProducts.forEach(p => productsLookup[p.maSP] = p);
        // const selected = productsLookup[props.match.params.maSP];
        // console.log(selected);
        // setProduct(data)

        console.log(arrayProducts.find(vl => vl.maSP == props.match.params.maSP));
        setProduct(arrayProducts.find(vl => vl.maSP == props.match.params.maSP))
        /*==================================================================
        [ Slick1 ]*/

        // let stringPic = require('../../assets/images/')
        // console.log(stringPic);
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
                    return '<img src={required(' + linkThumb + ')}>' +
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
                    // var portrait = $(slick.$slides[index]).data('thumb');
                    return (
                        <img src="" alt="" />
                    )
                },
            });
        });

        $('.js-addwish-b2, .js-addwish-detail').on('click', function (e) {
            e.preventDefault();
        });

        $('.js-addwish-b2').each(function () {
            var nameProduct = $(this).parent().parent().find('.js-name-b2').html();
            $(this).on('click', function () {
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish-b2');
                $(this).off('click');
            });
        });

        $('.js-addwish-detail').each(function () {
            var nameProduct = $(this).parent().parent().parent().find('.js-name-detail').html();

            $(this).on('click', function () {
                swal(nameProduct, "is added to wishlist !", "success");

                $(this).addClass('js-addedwish-detail');
                $(this).off('click');
            });
        });

        /*---------------------------------------------*/

        $('.js-addcart-detail').each(function () {
            var nameProduct = $(this).parent().parent().parent().parent().find('.js-name-detail').html();
            $(this).on('click', function () {
                swal(nameProduct, "is added to cart !", "success");
            });
        });



        return () => {

        }
    }, [props.match.params.maSP])
    console.log(product, "state");
    return (

        <>
            <section className="sec-product-detail bg0 p-t-65 p-b-60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots" />
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                    <div className="slick3 gallery-lb">
                                        <ProductItemImg imgProps={product} />
                                        {/* <div className="item-slick3">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src={product?.pic} alt="IMG-PRODUCT" />
                                            </div>
                                        </div>
                                        <div className="item-slick3">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src={product?.pic2} alt="IMG-PRODUCT" />
                                            </div>
                                        </div>
                                        <div className="item-slick3">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src={product?.pic3} alt="IMG-PRODUCT" />
                                            </div>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div> <img src={stringPic} alt="" /></div> */}
                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {/* TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH */}
                                    {product?.namePro}
                                </h4>
                                <span className="mtext-106 cl2">
                                    {product?.price.toLocaleString()}VNĐ
                                </span>
                                <p className="stext-102 cl3 p-t-23">
                                    {product?.description}

                                </p>
                                <div className="p-t-33">

                                    <div className="flex-w flex-r-m-detail p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-minus" />
                                                </div>
                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-plus" />
                                                </div>
                                            </div>
                                            <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Add to cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                            <i className="zmdi zmdi-favorite" />
                                        </a>
                                    </div>
                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                        <i className="fa fa-facebook" />
                                    </a>
                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bor10 m-t-50 p-t-43 p-b-40">
                        <div className="tab01">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item p-b-10">
                                    <a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                                </li>
                                <li className="nav-item p-b-10">
                                    <a className="nav-link" data-toggle="tab" href="#information" role="tab">Additional
                                        information</a>
                                </li>
                                <li className="nav-item p-b-10">
                                    <a className="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                                </li>
                            </ul>
                            <div className="tab-content p-t-43">
                                <div className="tab-pane fade show active" id="description" role="tabpanel">
                                    <div className="how-pos2 p-lr-15-md">
                                        <p className="stext-102 cl6">
                                            Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla
                                            sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit
                                            lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim,
                                            cursus
                                            et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in,
                                            faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit
                                            amet orci nec iaculis. Cras sit amet nulla libero. Curabitur
                                            dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus
                                            augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis
                                            in egestas nunc.
                                        </p>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="information" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="reviews" role="tabpanel">
                                    <div className="row">
                                        <div className="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                            <div className="p-b-30 m-lr-15-sm">
                                                <div className="flex-w flex-t p-b-68">
                                                    <div className="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                        <img src={require('../../assets/images/quang.jpg')} alt="AVATAR" />
                                                    </div>
                                                    <div className="size-207">
                                                        <div className="flex-w flex-sb-m p-b-17">
                                                            <span className="mtext-107 cl2 p-r-20">
                                                                Quang Nhat Nguyen
                                                            </span>
                                                            <span className="fs-18 cl11">
                                                                <i className="zmdi zmdi-star" />
                                                                <i className="zmdi zmdi-star" />
                                                                <i className="zmdi zmdi-star" />
                                                                <i className="zmdi zmdi-star" />
                                                                <i className="zmdi zmdi-star-half" />
                                                            </span>
                                                        </div>
                                                        <p className="stext-102 cl6">
                                                            Quod autem in homine praestantissimum atque optimum est, id
                                                            deseruit. Apud ceteros autem philosophos
                                                        </p>
                                                    </div>
                                                </div>
                                                <form className="w-full">
                                                    <h5 className="mtext-108 cl2 p-b-7">
                                                        Add a review
                                                    </h5>
                                                    <p className="stext-102 cl6">
                                                        Your email address will not be published. Required fields are marked *
                                                    </p>
                                                    <div className="flex-w flex-m p-t-50 p-b-23">
                                                        <span className="stext-102 cl3 m-r-16">
                                                            Your Rating
                                                        </span>
                                                        <span className="wrap-rating fs-18 cl11 pointer">
                                                            <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                            <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                            <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                            <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                            <i className="item-rating pointer zmdi zmdi-star-outline" />
                                                            <input className="dis-none" type="number" name="rating" />
                                                        </span>
                                                    </div>
                                                    <div className="row p-b-25">
                                                        <div className="col-12 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="review">Your review</label>
                                                            <textarea className="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review" defaultValue={""} />
                                                        </div>
                                                        <div className="col-sm-6 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="name">Name</label>
                                                            <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                                        </div>
                                                        <div className="col-sm-6 p-b-5">
                                                            <label className="stext-102 cl3" htmlFor="email">Email</label>
                                                            <input className="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <SliderProducts />
        </>


    )
}

export default ProductDetail