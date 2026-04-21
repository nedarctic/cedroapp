"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export function Filters({ filters }: { filters: string[] }) {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get("filter") || "";
    const [filter, setFilter] = useState<string>(initialFilter);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {

        const params = new URLSearchParams(searchParams.toString());

        if (filter) {
            params.set("query", filter)
        } else {
            params.delete("query")
        }

        router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
        })

    }, [filter, router])

    const handleClick = (filter: string) => {
        setFilter(filter);
        setIsMobileMenuOpen(false); // Close mobile menu after selection
    }

    // Get the current active filter label for mobile display
    const getActiveFilterLabel = () => {
        if (filter === "") return "All Tours";
        return filter;
    }

    return (
        <div className="w-full">
            {/* Desktop View - Hidden on mobile, shown on tablet and up */}
            <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
                <button
                    onClick={() => setFilter("")}
                    className={`px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base whitespace-nowrap transition-colors hover:bg-gray-100 ${
                        filter === "" ? "border-b-2 border-black font-medium" : "border-b-2 border-transparent"
                    }`}
                >
                    All Tours
                </button>

                <ul className="flex items-center space-x-2 lg:space-x-4 overflow-x-auto pb-2">
                    {filters.map((f, index) => (
                        <button
                            key={index}
                            onClick={() => handleClick(f)}
                            className={`px-3 py-2 lg:px-4 lg:py-2 text-sm lg:text-base whitespace-nowrap transition-colors hover:bg-gray-100 ${
                                filter === f ? "border-b-2 border-black font-medium" : "border-b-2 border-transparent"
                            }`}
                        >
                            {f}
                        </button>
                    ))}
                </ul>
            </div>

            {/* Mobile View - Dropdown/Select style */}
            <div className="md:hidden relative w-full">
                {/* Mobile Filter Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 transition-colors"
                >
                    <span className="text-sm font-medium text-gray-700">
                        Filter: <span className="text-black font-semibold">{getActiveFilterLabel()}</span>
                    </span>
                    <FaChevronDown 
                        className={`text-gray-500 transition-transform duration-200 ${
                            isMobileMenuOpen ? "rotate-180" : ""
                        }`} 
                    />
                </button>

                {/* Mobile Dropdown Menu */}
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 z-40 bg-black/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        
                        {/* Dropdown Options */}
                        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-gray-200 shadow-lg overflow-hidden">
                            <button
                                onClick={() => handleClick("")}
                                className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                                    filter === "" ? "bg-gray-100 font-medium text-black" : "text-gray-700"
                                }`}
                            >
                                All Tours
                                {filter === "" && (
                                    <span className="float-right text-black">✓</span>
                                )}
                            </button>
                            
                            {filters.map((f, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleClick(f)}
                                    className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 border-t border-gray-100 ${
                                        filter === f ? "bg-gray-100 font-medium text-black" : "text-gray-700"
                                    }`}
                                >
                                    {f}
                                    {filter === f && (
                                        <span className="float-right text-black">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Optional: Horizontal scroll hint for tablet */}
            <div className="hidden md:block lg:hidden">
                <div className="flex justify-end mt-1">
                    <span className="text-xs text-gray-400 animate-pulse">
                        ← scroll →
                    </span>
                </div>
            </div>
        </div>
    );
}