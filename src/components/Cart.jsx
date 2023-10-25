import React from 'react'

function Cart() {
    return (
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
                                <img src={require('../assets/images/item-cart.jpg')} alt="IMG" />
                            </div>
                            <div className="header-cart-item-txt p-t-8">
                                <a href="a" className="header-cart-item-name m-b-18 hov-cl1 trans-04" >
                                    TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH
                                </a>
                                <span className="header-cart-item-info">
                                    1 x $900
                                </span>
                            </div>
                        </li>

                    </ul>
                    <div className="w-full">
                        <div className="header-cart-total w-full p-tb-40">
                            Total: $900
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
    )
}

export default Cart