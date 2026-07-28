"use client";

import { Tour } from "@/lib/types/tour";

export function TourDetails({ safari }: { safari: Tour }) {

    return (
        <div className="flex flex-col items-start px-4 justify-start py-6 border w-full min-h-screen border-black bg-gray-300 mb-10">

            {/* data to show if details tab is active */}
            <div className="flex flex-col items-start justify-center p-8 gap-6">

                {/* tour description */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-xl font-bold">Tour Description</h1>
                    <p className="text-black text-md font-normal">{safari.description}</p>
                </div>

                {/* what's included */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-xl font-bold">What's Included</h1>
                    <ul className="list-disc pl-4">
                        {safari.included.map((item) => <li key={item} className="font-normal text-md text-black">{item}</li>)}
                    </ul>
                </div>

                {/* what's excluded */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-xl font-bold">What's Excluded</h1>
                    <ul className="list-disc pl-4">
                        {safari.excluded.map((item) => <li key={item} className="font-normal text-md text-black">{item}</li>)}
                    </ul>
                </div>

                {/* activities */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-black text-xl font-bold">Activities</h1>
                    <ul className="list-disc pl-4">
                        {safari.activities.map((item) => <li key={item} className="font-normal text-md text-black">{item}</li>)}
                    </ul>
                </div>


            </div>

        </div>
    );
}