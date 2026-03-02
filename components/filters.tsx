import Link from "next/link";

export function Filters ({filters}: {filters: string[]}) {
    return (
        <div className="flex items-center space-x-6">
            <Link href={""} className="border border-black text-black p-4">All Tours</Link>
            <ul className="flex items-center space-x-6">
                {filters.map((filter, index) => (
                    <Link href={""}><li key={index} className="text-lg text-black font-normal">{filter}</li></Link>
                ))}
            </ul>
        </div>
    );
}