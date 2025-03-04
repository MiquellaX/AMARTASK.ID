'use client'
import { Menu, ShoppingCart, User2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Components/Sidebar';
import Link from 'next/link';
import { BrandIcon } from './Icons';

const Header = () => {

    const [menuBarOpen, setMenuBarOpen] = useState(false);
    const [userBarOpen, setUserBarOpen] = useState(false);
    const [cartBarOpen, setCartBarOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 50 && !isScrolled) {
				setIsScrolled(true);
			} else if (scrollY <= 50 && isScrolled) {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolled]);

    return (
        <>
            <header className={'sticky top-0 border-b border-black/20 bg-white px-2 z-[2]'}>
                <div className='container w-full max-w-7xl mx-auto flex justify-between items-center py-2'>
                    <Menu className='left-header-icons' onClick={() => setMenuBarOpen(!menuBarOpen)}/>
                    <Link href={'/'} className='text-2xl font-medium cursor-pointer'><BrandIcon isScrolled={isScrolled}/></Link>
                    <div className='flex gap-2 sm:gap-3'>
                        <User2 className='right-header-icons' onClick={() => setUserBarOpen(!userBarOpen)}/>
                        <ShoppingCart className='right-header-icons' onClick={() => setCartBarOpen(!cartBarOpen)}/>
                    </div>
                </div>
            </header>

            <Sidebar variants={'menu'} side={'left'} isOpen={menuBarOpen} setIsOpen={setMenuBarOpen}>
                <div className='text-center py-14'>
                    <p>MenuSidebar</p>
                </div>
            </Sidebar>
            <Sidebar variants={'user'} side={'right'} isOpen={userBarOpen} setIsOpen={setUserBarOpen}>
                <div className='text-center py-14'>
                    <p>UserSidebar</p>
                </div>
            </Sidebar>
            <Sidebar variants={'cart'} side={'right'} isOpen={cartBarOpen} setIsOpen={setCartBarOpen}>
                <div className='text-center py-14'>
                    <p>CartSidebar</p>
                </div>
            </Sidebar>
        </>
    );
};

export default Header;