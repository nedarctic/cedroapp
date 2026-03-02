import { FiSearch } from "react-icons/fi";

export function Search ({placeholder}: {placeholder: string}) {
    return (
        <div className="flex items-center w-80 border-black border px-6 py-2 justify-between">
            <input placeholder={placeholder} className="font-normal text-md border-0" />

            <FiSearch size={20} className="text-black" />
        </div>
    );
}