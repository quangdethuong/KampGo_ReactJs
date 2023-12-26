import React from 'react'
import ProductItem from './ProductItem';

const ProductList = () => {

  const arrayProducts = [
    { "maSP": 1, "namePro": "TRẠM SẠC DỰ PHÒNG, DI ĐỘNG ECOFLOW RIVER 2 PRO 768WH", "description": "abcd", "price": 20000000, "pic": "river-2-pro-e1692761846453-4762.jpg" },
    { "maSP": 2, "namePro": "Máy bơm nước có vòi sen 2in1 NatureHike NH20SJ018", "description": "assssssss", "price": 4050000, "pic": "quancamp-NatureHike.jpg" },
    { "maSP": 3, "namePro": "THẢM DÃ NGOẠI VẢI DỆT NATUREHIKE NH21FCD02", "description": "qqqq", "price": 1000000, "pic": "quancamp-NatureHike-NH21FCD02-Jungle.jpg" },
    { "maSP": 4, "namePro": "LỀU CẮM TRẠI, DÃ NGOẠI 4 NGƯỜI MADFOX TREKKER 4 2022", "description": "bbvbvbvbv", "price": 2500000, "pic": "quancamp-madfox-trekker4-xanhduong-2.jpg" },
    { "maSP": 5, "namePro": "ĐÈN PIN CẦM TAY FENIX PD35R", "description": "bbvbvbvbv", "price": 2000000, "pic": "fenix-pd35r-rechargeable-flashli2-7551.jpg" }
  ];


  const renderProducts = () => {
    return arrayProducts.map((pro, index) => (
      <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men" key={index}>

        <div className="block2" >
          <ProductItem proProps={pro} />

        </div>
      </div>
    ));
  };
  return (
    <>
      {renderProducts()}
    </>
  )
}

export default ProductList