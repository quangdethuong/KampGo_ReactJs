import React from 'react'

import { NavLink } from 'react-router-dom';


import 'isotope-layout/dist/isotope.pkgd.min.js'
import Cart from './Cart';



export default function Header() {


    return (
        <>

            <header>
                <div className="container-menu-desktop">
                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">

                            </div>
                            <div className="right-top-bar flex-w h-full">
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    Trợ giúp
                                </a>
                                <a href="/page404" className="flex-c-m trans-04 p-lr-25">
                                    Tài khoản của tôi
                                </a>
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">
                            <a href="/home" className="logo">
                                <img src={require('../assets/images/icons/Asset-1.png')} alt="IMG-LOGO" />
                            </a>
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>

                                        <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link animsition-link" to="/home">Trang chủ</NavLink>
                                        {/* <a href="/home">Home</a> */}
                                    </li>
                                    <li>
                                        {/* <a href="/shop">Shop</a> */}

                                        <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link" to="/shop">Sản phẩm</NavLink>
                                    </li>

                                    <li>
                                        {/* <a href="/shop">Shop</a> */}

                                        <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link" to="/tour-shop">Dịch vụ </NavLink>
                                    </li>
                                    <li className="">
                                        <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link" to="/cart">Giỏ hàng</NavLink>

                                    </li>

                                </ul>
                            </div>
                            <div className="wrap-icon-header flex-w flex-r-m">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                    <i className="zmdi zmdi-search" />
                                </div>
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
                                    <i className="zmdi zmdi-shopping-cart" />
                                </div>
                                <a href="a" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
                                    <i className="zmdi zmdi-favorite-outline" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="wrap-header-mobile">
                    <div className="logo-mobile">
                        <a href="/home" className="logo">
                            <img src={require('../assets/images/icons/Asset-1.png')} alt="IMG-LOGO" />
                        </a>
                    </div>
                    <div className="wrap-icon-header flex-w flex-r-m m-r-15">
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                            <i className="zmdi zmdi-search" />
                        </div>
                        <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
                            <i className="zmdi zmdi-shopping-cart" />
                        </div>
                        <a href="a" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
                            <i className="zmdi zmdi-favorite-outline" />
                        </a>
                    </div>
                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner" />
                        </span>
                    </div>
                </div>
                <div className="menu-mobile">
                    <ul className="topbar-mobile">
                        <li>
                            <div className="left-top-bar">

                            </div>
                        </li>
                        <li>
                            <div className="right-top-bar flex-w h-full">
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    Trợ giúp
                                </a>
                                <a href="/page404" className="flex-c-m trans-04 p-lr-25">
                                    Tài khoản của tôi
                                </a>
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    EN
                                </a>
                                <a href="/" className="flex-c-m trans-04 p-lr-25">
                                    USD
                                </a>
                            </div>
                        </li>
                    </ul>
                    <ul className="main-menu-m">
                        <li>

                            <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link animsition-link" to="/home">Home</NavLink>
                            {/* <a href="/home">Home</a> */}
                        </li>
                        <li>
                            {/* <a href="/shop">Shop</a> */}

                            <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link" to="/shop">Shop</NavLink>
                        </li>
                        <li className="">
                            <NavLink activeStyle={{ color: ' #6c7ae0' }} className="nav-link" to="/cart">Cart Order</NavLink>

                        </li>

                    </ul>
                </div>
                <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
                    <div className="container-search-header">
                        <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                            <img src={require('../assets/images/icons/icon-close2.png')} alt="CLOSE" />
                        </button>
                        <form className="wrap-search-header flex-w p-l-15">
                            <button className="flex-c-m trans-04">
                                <i className="zmdi zmdi-search" />
                            </button>
                            <input className="plh3" type="text" name="search" placeholder="Search..." />
                        </form>
                    </div>
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
                                    Trang chủ
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Mục yêu thích
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Tài Khoản của tôi
                                </a>
                            </li>
                            <li className="p-b-13">
                                <a href="a" className="stext-102 cl2 hov-cl1 trans-04">
                                    Theo dõi đơn hàng
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


            <Cart />


        </>
    )
}
