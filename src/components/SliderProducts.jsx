import React from 'react'
import { Route, Link, generatePath, useRouteMatch, NavLink } from 'react-router-dom';

const SliderProducts = () => {
    const arrayProducts = [
        { "maSP": 1, "namePro": "TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH", "description": "abcd", "price": 20000000, "pic": "river-2-pro-e1692761846453-4762.jpg" },
        { "maSP": 2, "namePro": "Máy bơm nước có vòi sen 2in1 NatureHike NH20SJ018", "description": "assssssss", "price": 4050000, "pic": "quancamp-NatureHike.jpg" },
        { "maSP": 3, "namePro": "THẢM DÃ NGOẠI VẢI DỆT NATUREHIKE NH21FCD02", "description": "qqqq", "price": 1000000, "pic": "quancamp-NatureHike-NH21FCD02-Jungle.jpg" },
        { "maSP": 4, "namePro": "LỀU CẮM TRẠI, DÃ NGOẠI 4 NGƯỜI MADFOX TREKKER 4 2022", "description": "bbvbvbvbv", "price": 2500000, "pic": "quancamp-madfox-trekker4-xanhduong-2.jpg" },
        { "maSP": 5, "namePro": "ĐÈN PIN CẦM TAY FENIX PD35R", "description": "bbvbvbvbv", "price": 2000000, "pic": "fenix-pd35r-rechargeable-flashli2-7551.jpg" }
    ];


    const renderProducts = () => {
        return arrayProducts.map((pro, index) => (
            <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={index}>
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src={require(`../assets/images/${pro.pic}`)} alt="IMG-PRODUCT" />

                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <a href={`/product-detail/${pro.maSP}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {pro.namePro}
                            </a>
                            <span className="stext-105 cl3">
                                {pro.price.toLocaleString()}VNĐ
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        ));
    };
    return (
        <section className="sec-relate-product bg0 p-t-45 p-b-105">
            <div className="container">
                <div className="p-b-45">
                    <h3 className="ltext-106 cl5 txt-center">
                        Sản phẩm nổi bật
                    </h3>
                </div>
                <div className="wrap-slick2">
                    <div className="slick2">
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SliderProducts