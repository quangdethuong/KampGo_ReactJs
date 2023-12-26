import React from 'react'

const ProductItem = ({ proProps }) => {
    return (
        <>
            <a href={`/product-detail/${proProps.pic}`} className="block2-pic hov-img0">
                <img src={require(`../assets/images/${proProps?.pic}`)} alt="IMG-PRODUCT" />

            </a>
            <div className="block2-txt flex-w flex-t ~p-t-14">
                <div className="block2-txt-child1 flex-col-l ">
                    <a href={`/product-detail/${proProps.pic}`} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                        {proProps?.namePro}
                    </a>
                    <span className="stext-105 cl3">
                        {proProps?.price.toLocaleString()}VNĐ
                    </span>
                </div>

            </div>

        </>
    )
}

export default ProductItem