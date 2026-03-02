import Image from "next/image";
import Link from "next/link";
import { destination_items, pages_items, utility_items, social_items, email, phone } from "@/lib/data";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-between bg-gray-300 text-black min-h-screen px-28 pt-20">

            {/* main content - logo + contact + socials + other links */}
            <div className="flex">

                {/* logo + contact + socials section */}
                <div className="flex flex-col items-start justify-start w-1/2">

                    {/* logo */}
                    <Image src="/logos/cedroadventureslogo.svg" alt="Cedro Adventures Logo" width={150} height={150} />

                    {/* contact */}
                    <Link href={email.href} className="mt-4 text-black text-xl font-normal">Email: <br /><span className="text-lg font-light text-gray-600">{email.label}</span></Link>
                    <hr className="my-4 w-full border-black border" />
                    <Link href={phone.href} className="mt-4 text-black text-xl font-normal">Phone: <br /><span className="text-lg font-light text-gray-600">{phone.label}</span></Link>
                    <hr className="my-4 w-full border-gray-400 border" />

                    {/* socials */}
                    <div className="flex space-x-4 mt-4">
                        {social_items.map((item) => (
                            <Link key={item.label} href={item.href} className="flex items-center text-gray-700 hover:text-black text-sm border border-black px-2 py-1">{<item.logo className="w-4 h-4" />}<div className="ml-1">{item.label}</div></Link>
                        ))}
                    </div>
                </div>

                {/* other links - destinations, pages, utility */}
                <div className="w-1/2 flex items-start">

                    {/* destination links section */}
                    <div className="flex flex-col justify-center w-1/3 px-4">
                        <h3 className="text-black text-2xl font-medium mb-2">Destinations</h3>
                        <ul className="space-y-2">
                            {destination_items.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-700 hover:text-black text-xl">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* pages links section */}
                    <div className="flex flex-col justify-center w-1/3 px-4">
                        <h3 className="text-black text-2xl font-medium mb-2">Pages</h3>
                        <ul className="space-y-2">
                            {pages_items.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-700 hover:text-black text-xl">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* utility links section */}
                    <div className="flex flex-col justify-center w-1/3 px-4">
                        <h3 className="text-black text-2xl font-medium mb-2">Utility</h3>
                        <ul className="space-y-2">
                            {utility_items.map((item) => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-700 hover:text-black text-xl">{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* horizontal line + copyright */}
            <div className="py-1 space-y-1 flex flex-col items-center justify-center">
                <hr className="w-full border-gray-400 border" />
                <div className="text-center text-gray-600 text-sm">© {new Date().getFullYear()} Cedro Adventures. All rights reserved.</div>
            </div>

        </footer>
    );
}