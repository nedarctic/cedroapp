import Image from "next/image";
import Link from "next/link";
import {
    destination_items,
    pages_items,
    utility_items,
    social_items,
    email,
    phone,
} from "@/lib/data";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between bg-gray-300 text-black min-h-screen px-6 md:px-12 lg:px-28 pt-16 lg:pt-20">

            {/* main content */}
            <div className="flex flex-col lg:flex-row gap-12">

                {/* LEFT: logo + contact + socials */}
                <div className="flex flex-col w-full lg:w-1/2">

                    <Image
                        src="/logos/cedroadventureslogo.svg"
                        alt="Cedro Adventures Logo"
                        width={150}
                        height={150}
                    />

                    {/* contact */}
                    <Link href={email.href} className="mt-6 text-xl">
                        Email:
                        <br />
                        <span className="text-lg font-light text-gray-600">
                            {email.label}
                        </span>
                    </Link>

                    <hr className="my-4 w-full border-black" />

                    <Link href={phone.href} className="text-xl">
                        Phone:
                        <br />
                        <span className="text-lg font-light text-gray-600">
                            {phone.label}
                        </span>
                    </Link>

                    <hr className="my-4 w-full border-gray-400" />

                    {/* socials */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {social_items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex items-center text-gray-700 hover:text-black text-sm border border-black px-2 py-1"
                            >
                                <item.logo className="w-4 h-4" />
                                <span className="ml-1">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* RIGHT: links */}
                <div className="w-full lg:w-1/2">

                    {/* mobile: stacked | desktop: 3 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex">

                        {/* destinations */}
                        <div className="flex flex-col w-full lg:w-1/3 px-0 lg:px-4 mb-8 lg:mb-0">
                            <h3 className="text-2xl font-medium mb-2">Destinations</h3>
                            <ul className="space-y-2">
                                {destination_items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-gray-700 hover:text-black text-lg lg:text-xl">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* pages */}
                        <div className="flex flex-col w-full lg:w-1/3 px-0 lg:px-4 mb-8 lg:mb-0">
                            <h3 className="text-2xl font-medium mb-2">Pages</h3>
                            <ul className="space-y-2">
                                {pages_items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-gray-700 hover:text-black text-lg lg:text-xl">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* utility */}
                        <div className="flex flex-col w-full lg:w-1/3 px-0 lg:px-4">
                            <h3 className="text-2xl font-medium mb-2">Utility</h3>
                            <ul className="space-y-2">
                                {utility_items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="text-gray-700 hover:text-black text-lg lg:text-xl">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* bottom */}
            <div className="py-4 flex flex-col items-center">
                <hr className="w-full border-gray-400 mb-2" />
                <div className="text-center text-gray-600 text-sm">
                    © {new Date().getFullYear()} Cedro Adventures. All rights reserved.
                </div>
            </div>

        </footer>
    );
}