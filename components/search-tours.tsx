"use client";

import { InputGroupInlineStart } from "@/components/input-group-inline-start";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export function SearchTours() {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("query") || "";
    const [search, setSearch] = useState<string>(initialQuery);
    const debounceTime = 500;

    useEffect(() => {

        const handler = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())

            if (search) {
                params.set("query", search);                
            } else {
                params.delete("query");
            }

            router.replace(`${pathname}?${params.toString()}`);
        }, debounceTime)

        return () => {
            clearTimeout(handler)
        }
    }, [search, router]);

    return (
        <div className="flex flex-col 
        items-start sm:gap-6 gap-3">
            <div className="flex gap-6 w-full">
                <InputGroupInlineStart
                    name="search"
                    value={search}
                    onChangeHandler={e => setSearch(e.target.value)}
                    placeholder={"Search tours..."}
                />
            </div>

        </div>
    )
}