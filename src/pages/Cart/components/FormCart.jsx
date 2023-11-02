import React from 'react'

function FormCart() {


    return (
        <>
            <form className="bg0 p-t-75 p-b-85">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <tbody><tr className="table_head">
                                            <th className="column-1">Sản phẩm</th>
                                            <th className="column-2" />
                                            <th className="column-3">Giá</th>
                                            <th className="column-4">Số lượng</th>
                                            <th className="column-5">Tổng </th>
                                        </tr>
                                            <tr className="table_row">
                                                <td className="column-1">
                                                    <div className="how-itemcart1">
                                                        <img src={require('../../../assets/images/item-cart.jpg')} alt="IMG" />
                                                    </div>
                                                </td>
                                                <td className="column-2">TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH</td>
                                                <td className="column-3">20.000.000VNĐ</td>
                                                <td className="column-4">
                                                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus" />
                                                        </div>
                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value={1} />
                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="column-5">20.000.000VNĐ</td>
                                            </tr>

                                        </tbody></table>
                                </div>
                                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                                    <div className="flex-w flex-m m-r-20 m-tb-5">
                                        <input className="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5" type="text" name="coupon" placeholder="Mã" />
                                        <div className="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5">
                                            Mã giảm giá
                                        </div>
                                    </div>
                                    <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                                        Cập nhật
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 cl2 p-b-30">
                                    Cart Totals
                                </h4>
                                <div className="flex-w flex-t bor12 p-b-13">
                                    <div className="size-208">
                                        <span className="stext-110 cl2">
                                            Giá:
                                        </span>
                                    </div>
                                    <div className="size-209">
                                        <span className="mtext-110 cl2">
                                            20.000.000VNĐ
                                        </span>
                                    </div>
                                </div>
                                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                    <div className="size-208 w-full-ssm">
                                        <span className="stext-110 cl2">
                                            Giao hàng:
                                        </span>
                                    </div>
                                    <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                        <p className="stext-111 cl6 p-t-2">
                                            Vui lòng chọn phương thức thanh toán
                                        </p>

                                    </div>
                                </div>
                                <div className="flex-w flex-t p-t-27 p-b-33">
                                    <div className="size-208">
                                        <span className="mtext-101 cl2">
                                            Tổng: 
                                        </span>
                                    </div>
                                    <div className="size-209 p-t-1">
                                        <span className="mtext-110 cl2">
                                            20.000.000VNĐ
                                        </span>
                                    </div>
                                </div>
                                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer">
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormCart