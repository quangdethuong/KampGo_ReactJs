import React from 'react'
import './CardOrder.css'
import FormCart from './components/FormCart'
import BreabCum from '../../components/BreabCum'
import { useEffect } from 'react';

import $ from 'jquery'
function CartOrder() {
    useEffect(() => {


        $('.btn-num-product-down').on('click', function () {
            var numProduct = Number($(this).next().val());
            if (numProduct > 0) $(this).next().val(numProduct - 1);
        });

        $('.btn-num-product-up').on('click', function () {
            var numProduct = Number($(this).prev().val());
            $(this).prev().val(numProduct);
        });

        return () => {

        }
    }, [])
    return (
        <>
            <BreabCum />
            <FormCart />
        </>

    )
}

export default CartOrder