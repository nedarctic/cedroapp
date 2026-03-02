import Link from 'next/link';
import Image from 'next/image';

export default function Header() {

    // header items
    const header_items = [
        { label: 'Tours', href: '/tours' },
        { label: 'Destinations', href: '/destinations' },
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blogs' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-black text-white sticky top-0 z-50">
            <div className="flex items-center h-15 px-6">

                {/* logo */}
                <Link href={"/"} className="flex w-1/3 justify-start">
                    <Image src="/logos/cedroadventureslogo.svg" alt="Cedro Adventures Logo" width={40} height={40} />
                </Link>

                {/* header items map */}
                <div className="flex w-1/3 justify-center">
                    <ul className="flex space-x-5">
                        {header_items.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="hover:text-[#FAD039] transition-colors duration-200 text-[15px] font-normal">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* book a tour button */}
                <div className="flex w-1/3 justify-end">
                    <Link href={'/book'} className="border border-white text-md px-10 py-2 text-white">Book a tour</Link>
                </div>

            </div>
        </header>
    );
}