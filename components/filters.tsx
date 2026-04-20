"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Filters({ filters }: { filters: string[] }) {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialFilter = searchParams.get("filter") || "";
    const [filter, setFilter] = useState<string>(initialFilter);
    const debounceTime = 500;

    
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
            <button className="border border-black text-black p-4">All Tours</button>
            <ul className="flex items-center space-x-6">
                {filters.map((filter, index) => (
                    <button onClick={() => handleClick(filter)} value={filter} key={index} className="text-lg text-black font-normal">{filter}</button>
                ))}
            </ul>
        </div>
    );
}