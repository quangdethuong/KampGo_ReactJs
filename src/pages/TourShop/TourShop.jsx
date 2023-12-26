import React from 'react'
import Category from '../../components/Category'
import TourList from './TourList'

const TourShop = () => {
    return (
        <div className="bg0 m-t-95 p-b-140">
            <div className="container">
                <Category />

                <div className="row isotope-grid">
                    <TourList />
                </div>
                <div className="flex-c-m flex-w w-full p-t-45">
                    <a href="a" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                        Tải thêm
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TourShop