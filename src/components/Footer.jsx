import React from 'react'

function Footer() {
    return (
        <footer className="bg3 p-t-75 p-b-32">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">Danh Mục</h4>
                        <ul>
                            <li className="p-b-10">
                                <a href="a" className="stext-107 cl7 hov-cl1 trans-04"> Dịch vụ chèo sup </a>
                            </li>
                            <li className="p-b-10">
                                <a href="a" className="stext-107 cl7 hov-cl1 trans-04"> Sản phẩm cắm trại </a>
                            </li>

                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">Trợ giúp</h4>
                        <ul>
                            <li className="p-b-10">
                                <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Theo dõi đơn hàng
                                </a>
                            </li>
                            <li className="p-b-10">
                                <a href="/" className="stext-107 cl7 hov-cl1 trans-04"> Returns </a>
                            </li>
                            <li className="p-b-10">
                                <a href="/" className="stext-107 cl7 hov-cl1 trans-04">
                                    Giao hàng tận nơi
                                </a>
                            </li>
                            <li className="p-b-10">
                                <a href="/" className="stext-107 cl7 hov-cl1 trans-04"> FAQs </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">Liên hệ với chúng tôi</h4>
                        <p className="stext-107 cl7 size-201">
                            Các câu hỏi khác? Hãy liên lạc với chúng tôi tại 600,  Nguyễn Văn Cừ (nối dài), phường An Bình, quận Ninh Kiều, TP. Cần Thơ or call us 0944370119(developer)
                        </p>
                        <div className="p-t-27">
                            <a href="a" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="a" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-instagram" />
                            </a>
                            <a href="a" className="fs-18 cl7 hov-cl1 trans-04 m-r-16">
                                <i className="fa fa-pinterest-p" />
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3 p-b-50">
                        <h4 className="stext-301 cl0 p-b-30">Bản tin về dịch vụ bên chúng tôi</h4>
                        <form>
                            <div className="wrap-input1 w-full p-b-4">
                                <input className="input1 bg-none plh1 stext-107 cl7" type="text" name="email" placeholder="email@example.com" />
                                <div className="focus-input1 trans-04" />
                            </div>
                            <div className="p-t-18">
                                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                    Đăng ký
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="p-t-40">
                    <div className="flex-c-m flex-w p-b-18">
                        <a href="a" className="m-all-1">
                            <img src={require('../assets/images/icons/icon-pay-01.png')} alt="ICON-PAY" />
                        </a>
                        <a href="a" className="m-all-1">
                            <img src={require('../assets/images/icons/icon-pay-02.png')} alt="ICON-PAY" />
                        </a>
                        <a href="a" className="m-all-1">
                            <img src={require('../assets/images/icons/icon-pay-03.png')} alt="ICON-PAY" />
                        </a>
                        <a href="a" className="m-all-1">
                            <img src={require('../assets/images/icons/icon-pay-04.png')} alt="ICON-PAY" />
                        </a>
                        <a href="a" className="m-all-1">
                            <img src={require('../assets/images/icons/icon-pay-05.png')} alt="ICON-PAY" />
                        </a>
                    </div>
                    <p className="stext-107 cl6 txt-center">
                        {/* Copyright ©
                        All rights reserved | This template is made with
                        <i className="fa fa-heart-o" aria-hidden="true" /> by
                        <a href="https://colorlib.com/" target="_blank">Colorlib</a> */}
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer