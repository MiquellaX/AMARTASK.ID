import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const HomeWrapper = ({ children }) => {
    return (
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    );
};

export default HomeWrapper;