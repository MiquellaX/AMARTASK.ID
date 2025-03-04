import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import * as motion from 'motion/react-client'

const Sidebar = ({ isOpen, setIsOpen, children, side }) => {
    const initialX = side === 'right' ? 500 : -500;

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        transition={{ duration: 0.2 }} 
                        className="fixed inset-0 bg-black/30 z-[10]" 
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div 
                        initial={{ x: initialX }}
                        animate={{ x: 0 }}
                        exit={{ x: initialX }}
                        transition={{ duration: 0.2 }}
                        className={`fixed top-0 bg-white w-full max-w-sm min-h-screen z-50 ${
                            side === 'right' ? 'right-0' : 'left-0'
                        }`}
                    >
                        <div className="absolute right-3 top-3">
                            <X 
                                className="close-icons" 
                                onClick={() => setIsOpen(false)}
                                aria-label="Close sidebar"
                            />
                        </div>
                        <div className="p-4">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default Sidebar;