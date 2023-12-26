import React from 'react'

const ProductItemImg = ({ imgProps }) => {
    console.log(imgProps);
    return (
        <>
            <div className="item-slick3">
                <div className="wrap-pic-w pos-relative">

                    <img src={imgProps?.pic} alt="IMG-PRODUCT" />
                </div>
            </div>
            <div className="item-slick3">
                <div className="wrap-pic-w pos-relative">
                    <img src={imgProps?.pic2} alt="IMG-PRODUCT" />
                </div>
            </div>
            <div className="item-slick3">
                <div className="wrap-pic-w pos-relative">
                    <img src={imgProps?.pic3} alt="IMG-PRODUCT" />
                </div>
            </div>
        </>
    )
}

export default ProductItemImg