"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed z-50 w-full px-6 py-4 lg:px-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-1/90 backdrop-blur-sm border-b border-gray-800' 
          : 'bg-dark-1'
      }`}
    >
      <div className="flex-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-1">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="text-[26px] font-extrabold text-white max-sm:hidden relative">
              MeetVerse
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </motion.div>
        </Link>

        <div className="flex-between gap-5">
          <SignedIn>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <UserButton 
                afterSignOutUrl="/sign-in"
                appearance={{
                  elements: {
                    avatarBox: "hover:ring-2 hover:ring-blue-500 transition-all duration-300"
                  }
                }}
              />
            </motion.div>
          </SignedIn>

          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;