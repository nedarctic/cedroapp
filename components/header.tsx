'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const header_items = [
        { label: 'Tours', href: '/tours' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'About', href: '/about' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Contact', href: '/contact' },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <header className="bg-black text-white sticky top-0 z-50">
            <div className="flex items-center justify-between h-16 px-6">

                {/* Logo */}
                <Link href="/">
                    <Image src="/logos/cedroadventureslogo.svg" alt="Logo" width={40} height={40} />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {header_items.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`text-[15px] transition-colors duration-200 ${isActive(item.href)
                                ? 'text-[#FAD039]'
                                : 'hover:text-[#FAD039]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="/book"
                        className="border border-white px-6 py-2 hover:bg-white hover:text-black transition"
                    >
                        Book a tour
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(true)}
                    className="md:hidden text-white"
                >
                    <GiHamburgerMenu size={20} className="text-white" />
                </button>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 animate-fadeIn"
                    onClick={() => setMenuOpen(false)}
                />
            )}

            {/* Overlay + Centered Flex Container */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fadeIn"
                    onClick={() => setMenuOpen(false)}
                >
                    {/* Stop click from bubbling so menu doesn't close */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="mt-20 md:mt-0 w-[90%] max-w-sm bg-black border border-white p-6 animate-slideIn"
                    >
                        <ul className="flex flex-col space-y-4">
                            {header_items.map((item) => (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`block text-lg ${isActive(item.href)
                                            ? 'text-[#FAD039]'
                                            : 'hover:text-[#FAD039]'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href="/book"
                            onClick={() => setMenuOpen(false)}
                            className="block mt-6 border border-white text-center py-2 hover:bg-white hover:text-black transition"
                        >
                            Book a tour
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}