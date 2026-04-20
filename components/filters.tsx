"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Filters({ filters }: { filters: string[] }) {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get("filter") || "";
    const [filter, setFilter] = useState<string>(initialFilter);


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
        setFilter(filter)
    }

    return (
        <div className="flex items-center space-x-6">
            <button
                onClick={() => setFilter("")}
                className={`p-4 ${filter === "" ? "border border-black" : ""
                    }`}
            >
                All Tours
            </button>

            <ul className="flex items-center space-x-6">
                {filters.map((f, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(f)}
                        className={`text-lg font-normal p-2 ${filter === f ? "border border-black" : ""
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </ul>
        </div>
    );
}