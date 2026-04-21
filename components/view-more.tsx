import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const colorStyles: Record<string, string> = {
  white: "border-white text-white",
  black: "border-black text-black",
};

export function ViewMore({ path, color }: { path: string; color: string }) {
  return (
    <div className="w-full flex items-center mt-8 sm:mt-10">
      <hr className={`flex-1 border ${colorStyles[color]}`} />
      <Link
        href={`/${path}`}
        className={`flex items-center font-medium text-base sm:text-lg pl-4 sm:pl-6 ${colorStyles[color]}`}
      >
        View all {path}
        <FaArrowRightLong className="ml-2 sm:ml-3" />
      </Link>
    </div>
  );
}