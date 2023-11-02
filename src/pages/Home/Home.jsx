import React from 'react'

import SectionSlider from '../../components/SectionSlider';
import Banner from '../../components/Banner';
import Product from '../../components/Product';

import SliderProducts from '../../components/SliderProducts';


function Home() {



    return (
        <div className=''>
            <SectionSlider />
            <Banner />

            <SliderProducts />
            <Product />


        </div>
    )
}

export default Home