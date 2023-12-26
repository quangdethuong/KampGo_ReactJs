import React from 'react'

import SectionSlider from '../../components/SectionSlider';
import Banner from '../../components/Banner';
import Product from '../../components/Product';

import SliderProducts from '../../components/SliderProducts';
import TourSlider from '../../components/TourSlider';


function Home() {



    return (
        <>
            <SectionSlider />
            <Banner />

            <SliderProducts />
            <TourSlider />
            <Product />
        </>
    )
}

export default Home