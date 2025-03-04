'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';

const bannerImages = [
    '/1.jpeg',
    '/2.jpeg',
    '/3.jpeg'
];

const HomeContent = () => {
    const BRAND = process.env.NEXT_PUBLIC_BRAND;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [autoplayKey, setAutoplayKey] = useState(0);
    const [dragDistance, setDragDistance] = useState(0);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const handleNext = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
        setAutoplayKey(prev => prev + 1);
    }, []);

    const handlePrev = useCallback(() => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
        setAutoplayKey(prev => prev + 1);
    }, []);

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, [handleNext, autoplayKey]);

    const handleDragStart = useCallback((e) => {
        e.preventDefault();
        setIsDragging(true);
        setDragDistance(0);
        setStartX(e.clientX || e.touches?.[0]?.clientX);
    }, []);

    const handleDragEnd = useCallback((e) => {
        if (!isDragging) return;

        const endX = e.clientX || e.changedTouches?.[0]?.clientX;
        const diff = startX - endX;

        // More conservative drag threshold
        if (Math.abs(diff) > 50) {
            const nextIndex = diff > 0 ?
                Math.min(currentIndex + 1, bannerImages.length - 1) :
                Math.max(currentIndex - 1, 0);

            if (nextIndex !== currentIndex) {
                setDirection(diff > 0 ? 1 : -1);
                setCurrentIndex(nextIndex);
                setAutoplayKey(prev => prev + 1);
            }
        }

        setIsDragging(false);
        setDragDistance(0);
    }, [isDragging, startX, currentIndex]);

    const handleDragMove = useCallback((e) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentX = e.clientX || e.touches?.[0]?.clientX;
        const diff = startX - currentX;

        // Limit drag distance
        const maxDrag = 200;
        const limitedDiff = Math.max(Math.min(diff, maxDrag), -maxDrag);
        setDragDistance(limitedDiff);
    }, [isDragging, startX]);

    const slideVariantsOpacity = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
            <div className='relative h-screen overflow-hidden'>

                {/* BANNER */}
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.5 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.2}
                        dragMomentum={false}
                        dragSnapToOrigin
                        className="absolute inset-0 h-[690px] overflow-hidden"
                        onMouseDown={handleDragStart}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEnd}
                        style={{
                            touchAction: 'none',
                            x: isDragging ? -dragDistance : 0
                        }}
                    >
                        <Image
                            src={bannerImages[currentIndex]}
                            alt={`Banner ${currentIndex + 1}`}
                            fill
                            className="object-cover object-center"
                            quality={100}
                            priority={currentIndex === 0}
                        />

                        {/* OVERLAY VIGNETTE */}
                        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent vignette' />
                    </motion.div>
                </AnimatePresence>

                {/* TOMBOL NAVIGASI + COUNTER */}
                <div className='absolute bottom-16 left-5 z-[1] flex items-center gap-4'>
                    <button
                        onClick={handlePrev}
                    >
                        <ChevronLeft className='cursor-pointer w-5 h-5 text-black mt-[1.5px] transition duration-200 hover:scale-150' />
                    </button>

                    <div className='font-medium text-xs items-center'>
                        {currentIndex + 1} / {bannerImages.length}
                    </div>

                    <button
                        onClick={handleNext}
                    >
                        <ChevronRight className='cursor-pointer w-5 h-5 text-black mt-[1.5px] transition duration-200 hover:scale-150' />
                    </button>
                </div>
            </div>

            {/* KONTEN */}
            <motion.div
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ once: true }}
                variants={slideVariantsOpacity}
                className='container mx-auto px-4 py-16'
            >
                <h1 className='text-4xl font-bold mb-8'>{BRAND.toUpperCase()}</h1>
                <p className='text-lg text-gray-600'>Konten lain ke didieu...</p>
            </motion.div>
        </motion.div>
    );
};

export default HomeContent;