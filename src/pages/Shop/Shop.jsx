import React from 'react'
import Product from '../../components/Product'
import './Shop.css'
import ProductItem from '../../components/ProductItem'
import Category from '../../components/Category'
import ProductList from '../../components/ProductList'

function Shop() {


    return (

        <>
            <div className="bg0 m-t-95 p-b-140">
                <div className="container">
                    <Category />

                    <div className="row isotope-grid">
                        <ProductList />
                    </div>
                    <div className="flex-c-m flex-w w-full p-t-45">
                        <a href="a" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                            Tải thêm
                        </a>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Shop