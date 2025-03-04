'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });
const animationData = require('../Components/404.json');

const NotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className='relative min-h-screen w-full'>
            <div className='absolute inset-0'>
                <Lottie 
                    options={defaultOptions} 
                    height='100%'
                    width='100%'
                    style={{ position: 'absolute', top: 0, left: 0 }}
                />
            </div>
            
            <div className='relative min-h-screen flex flex-col items-center justify-center gap-4'>
                <div className='sticky top-10 text-center space-y-4 bg-transparent p-8'>
                    <h1 className='text-4xl font-bold'>404 Not Found!</h1>
                    <p className='text-neutral-600'>The page you're looking for doesn't exist.</p>
                    <Link 
                        href="/" 
                        className='inline-block px-6 py-2 bg-black text-white rounded-md hover:bg-neutral-800 transition-colors'
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;