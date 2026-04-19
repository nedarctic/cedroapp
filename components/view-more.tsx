import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

export function ViewMore({path, color}: {path: string; color: string}) {
    return (
        <div className="w-full flex justify-end items-center mt-10">
            <hr className={`border border-${color} dark:border-white flex-1`} />
            <Link href={`/${path}`} className={`flex items-center text-${color} dark:text-white font-medium text-lg pl-6`}>View all {path} <FaArrowRightLong size={16} className={`ml-3 text-${color} dark:text-white`} /> </Link>
        </div>
    );
}