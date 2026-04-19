"use client";

import { useState } from "react";
import { Tour } from '@/lib/types';
import Image from 'next/image';

export function TourDetails({ safari }: { safari: Tour }) {

    // const [activeTab, setActiveTab] = useState<"Details" | "Itinerary" | "Gallery">("Details");

    // const handleTabClick = (tab: "Details" | "Itinerary" | "Gallery") => {
    //     setActiveTab(prev => tab);
    // }

    return (
        <div className="flex flex-col items-center justify-start py-6 px-6 border w-11/12 min-h-screen border-black bg-gray-300 mb-10">

            {/* data to show if details tab is active */}
            <div className="flex flex-col items-start justify-center p-10">

                {/* tour description */}
                <h1 className="text-black text-xl font-bold mb-2">Tour Description:</h1>
                <p className="text-black text-md font-normal mt-6 mb-10">{safari.intro}</p>


                {/* what's included */}
                <h1 className="text-black text-xl font-bold mb-2">What's Included:</h1>
                <ul className="mb-6 list-disc">
                    {safari.included.map((item) => <li className="font-normal text-md text-black">{item}</li>)}
                </ul>

                {/* what's excluded */}
                <h1 className="text-black text-xl font-bold mb-2">What's Excluded:</h1>
                <ul className="mb-6 list-disc">
                    {safari.excluded.map((item) => <li className="font-normal text-md text-black">{item}</li>)}
                </ul>


                {/* activities */}
                <h1 className="text-black text-xl font-bold mb-2">Activities:</h1>
                <ul className="mb-6 list-disc">
                    {safari.activities.map((item) => <li className="font-normal text-md text-black">{item}</li>)}
                </ul>


            </div>

        </div>
    );
}