"use client";

import { InputGroupInlineStart } from "@/components/input-group-inline-start";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay = 400) {
    const [debouncedValue, setDebouncedValue] = useState<T>();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debouncedValue;
}

export function Search({ placeholder }: { placeholder: string }) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState(searchParams.get('search') ?? "");

    const debouncedSearch = useDebounce(search);

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        debouncedSearch?.trim() ? params.set('search', debouncedSearch) : params.delete('search');
        search && params.set('search', search);
        search && params.set('page', '1');
        router.push(`?${params.toString()}`)
    }, [debouncedSearch, router, search]);

    return (
        <div className="flex flex-col items-start sm:gap-6 gap-3">
            <div className="flex gap-6 w-full">
                <InputGroupInlineStart
                    name="search"
                    value={search}
                    onChangeHandler={e => setSearch(e.target.value)}
                    placeholder={placeholder}
                />
            </div>

        </div>
    )
}