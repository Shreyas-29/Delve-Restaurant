import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoBagCheck } from 'react-icons/io5';
import { useStateContext } from '../context/StateContext';
import Head from 'next/head';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className="success-wrapper font-poppins mb-16">
            <Head>
                <title>Success - Shopit</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className="success bg-orange-100 relative">
                <IoBagCheck className='w-20 h-20 text-emerald-500' />
                <span className='hidden lg:flex absolute w-14 h-14 rounded-full bg-green-400 opacity-40 top-[5rem] blur-lg'></span>
                <h2 className='my-2'>Thank you for your purchase!</h2>
                <p className="mt-4">Check your email inbox for the receipt.</p>
                <p className="description">
                    If you have any questions, please email
                    <a className="email text-orange-500" href="mailto:webtech.shreyas@gmail.com">
                        webtech.shreyas@gmail.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="300px" className="my-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-md text-white font-medium px-6 py-3 capitalize shadow-md shadow-orange-500/30 hover:scale-110 active:scale-95 transition duration-300 ease-in-out">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success