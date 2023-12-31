import React from 'react'

function Banner() {
    return (
        <>
            <div className="sec-banner bg0 p-t-95 p-b-55">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src={require('../assets/images/westsup.png')} alt="IMG-BANNER" />
                                <a href="/tour-shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Dịch vụ cắm trại
                                        </span>
                                        <span className="block1-info stext-102 trans-04">
                                            Trải nghiệm mới
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Xem ngay
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src={require('../assets/images/camp-product.jpg')} alt="IMG-BANNER" />
                                <a href="/shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Sản phẩm <br /> cắm trại
                                        </span>
                                        <span className="block1-info stext-102 trans-04">
                                            Ưu đãi
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Xem ngay
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src={require('../assets/images/banner-07.jpg')} alt="IMG-BANNER" />
                                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Watches
                                        </span>
                                        <span className="block1-info stext-102 trans-04">
                                            Spring 2018
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Book Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src={require('../assets/images/banner-08.jpg')} alt="IMG-BANNER" />
                                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Bags
                                        </span>
                                        <span className="block1-info stext-102 trans-04">
                                            Spring 2018
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 p-b-30 m-lr-auto">
                            <div className="block1 wrap-pic-w">
                                <img src={require('../assets/images/banner-09.jpg')} alt="IMG-BANNER" />
                                <a href="product.html" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Accessories
                                        </span>
                                        <span className="block1-info stext-102 trans-04">
                                            Spring 2018
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Shop Now
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}

export default Banner