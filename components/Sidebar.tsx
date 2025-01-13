'use client';
"use client"
import React from 'react';
import { sidebarLinks } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <motion.section 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px] border-r border-gray-800/50"
        >
            <div className="flex flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);

                    return (
                        <motion.div
                            key={link.label}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                href={link.route}
                                className={cn(
                                    'flex gap-4 items-center p-4 rounded-lg justify-start transition-all duration-300',
                                    isActive 
                                        ? 'bg-blue-1 shadow-lg shadow-blue-1/20' 
                                        : 'hover:bg-gray-800/50'
                                )}
                            >
                                <div className="relative w-6 h-6">
                                    <Image 
                                        src={link.imgURL} 
                                        alt={link.label} 
                                        fill
                                        className={cn(
                                            "transition-transform duration-300",
                                            isActive ? "scale-110" : ""
                                        )}
                                    />
                                </div>
                                <p className={cn(
                                    'text-lg font-semibold max-lg:hidden transition-all duration-300',
                                    isActive ? 'text-white' : 'text-gray-400'
                                )}>
                                    {link.label}
                                </p>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute left-0 w-1 h-8 bg-blue-500 rounded-r-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </motion.section>
    );
};

export default Sidebar;