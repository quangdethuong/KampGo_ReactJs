import React from 'react'
import Header from '../../components/Header'
import SectionSlider from '../../components/SectionSlider';
import Banner from '../../components/Banner';
import Product from '../../components/Product';

function Home() {


    return (
        <div className='animsition'>
            <Header />
            <SectionSlider />
            <Banner />
            <Product />
        </div>
    )
}

export default Home