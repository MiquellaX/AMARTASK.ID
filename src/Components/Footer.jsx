import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { AmexIcon, BrandIcon, DiscoverIcon, KarmaFBIcon, KarmaIGIcon, MastercardIcon, MidtransIcon, VisaIcon } from '../Components/Icons';

const Footer = () => {
    const BRAND = process.env.NEXT_PUBLIC_BRAND;
    return (
        <footer className="bg-neutral-900 text-neutral-200">

            {/* NEWSLETTER */}
            <div className="border-b border-neutral-800">
                <div className="container mx-auto py-8 px-4">
                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-xl font-medium mb-2">Subscribe to Our Newsletter</h3>
                        <p className="text-sm text-neutral-400 mb-4">Get 10% off your first order and stay updated</p>
                        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 min-h-8 items-center text-sm bg-neutral-800 border border-neutral-700 rounded-md focus:outline-none focus:border-neutral-600"
                            />
                            <button className="px-6 h-8 items-center cursor-pointer bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* KONTEN FOOTER */}
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* BRAND */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4"><BrandIcon className={'invert'}/></h2>
                        <p className="text-sm text-neutral-400 mb-4">
                            Deskripsi brand...
                        </p>
                        <div className="flex gap-3">
                            <Link href="https://facebook.com" target='_blank' aria-label='FACEEBOOK' className="hover:text-white transition-colors">
                                <KarmaFBIcon className='transition duration-200 hover:scale-125' />
                            </Link>
                            <Link href="https://instagram.com" target='_blank' aria-label='INSTAGRAM' className="hover:text-white transition-colors">
                                <KarmaIGIcon className='transition duration-200 hover:scale-125' />
                            </Link>
                        </div>
                    </div>

                    {/* SHOP */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><Link href="/new-arrivals" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">New Arrivals</Link></li>
                            <li><Link href="/bestsellers" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Bestsellers</Link></li>
                            <li><Link href="/men" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Kategori</Link></li>
                            <li><Link href="/women" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Kategori</Link></li>
                            <li><Link href="/accessories" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Kategori</Link></li>
                            <li><Link href="/sale" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Kategori</Link></li>
                        </ul>
                    </div>

                    {/* HELP */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Help</h3>
                        <ul className="space-y-2">
                            <li><Link href="/returns" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Returns & Exchange</Link></li>
                            <li><Link href="/size-guide" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Guide</Link></li>
                            <li><Link href="/faq" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">FAQ</Link></li>
                            <li><Link href="/contact" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* KONTAK */}
                    <div>
                        <h3 className="text-lg font-medium mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2 text-neutral-400">
                                <MapPin size={20} />
                                <span>Dimana</span>
                            </li>
                            <li className="flex items-center gap-2 text-neutral-400">
                                <Phone size={20} />
                                <span>No HP</span>
                            </li>
                            <li className="flex items-center gap-2 text-neutral-400">
                                <Mail size={20} />
                                <span>Email</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* BAR BAWAH */}
            <div className="border-t border-neutral-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-neutral-400">&copy; {new Date().getFullYear()} {BRAND.toUpperCase()}. All rights reserved.</p>
                        <div className="flex flex-col items-center gap-1">
                            <p>Powered By</p>
                            <div className='flex items-center gap-4'>
                                <MidtransIcon/>
                                <AmexIcon/>
                                <VisaIcon/>
                                <MastercardIcon/>
                                <DiscoverIcon/>
                            </div>
                        </div>
                        <div className="flex gap-4 text-sm">
                            <Link href="/privacy" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Privacy Policy</Link>
                            <Link href="/terms" className="text-neutral-400 hover:text-white transition-colors karma-hover-effect">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;