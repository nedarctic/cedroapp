"use client";

import { useState } from "react";
import { Tour } from '@/lib/types';
import Image from 'next/image';

export function TourDetails({ safari }: { safari: Tour }) {

    const [activeTab, setActiveTab] = useState<"Details" | "Itinerary" | "Gallery">("Details");

    const handleTabClick = (tab: "Details" | "Itinerary" | "Gallery") => {
        setActiveTab(prev => tab);
    }

    return (
        <div className="flex flex-col items-center justify-start py-6 px-6 border w-11/12 min-h-screen border-black bg-gray-300 mb-10">

            {/* tab buttons */}
            <div className="flex items-center space-x-6">
                <button onClick={() => handleTabClick("Details")} value="Details" className="border border-black p-4 text-black">Details</button>
                <button onClick={() => handleTabClick("Itinerary")} value="Itinerary" className="border border-black p-4 text-black">Itinerary</button>
                <button onClick={() => handleTabClick("Gallery")} value="Gallery" className="border border-black p-4 text-black">Gallery</button>
            </div>

            {/* horizontal divider */}

            <hr className="border border-black w-full mt-5" />

            {/* region with variable data */}

            {/* data to show if details tab is active */}
            {activeTab === "Details" && (<div className="flex flex-col items-start justify-center p-10">

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


            </div>)}

            {/* data to show if itinerary tab is active */}
            {activeTab === "Itinerary" && (<div className="flex flex-col items-start justify-center w-full p-10">

                {/* title */}
                <h1 className="text-black text-xl font-bold mb-2">Itinerary</h1>

                {/* day and title with bulleted details below it */}
                {safari.itinerary.map(({ day, title, activities }) => (
                    <div key={title} className="py-6">
                        <h1 className="text-black text-lg font-bold">{day}: {title}</h1>
                        <ul className="list-disc">
                            {activities.map((activity) => (
                                <li key={activity} className="font-normal text-black text-md">{activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}


            </div>)}

            {/* data to show if gallery tab is active */}
            {activeTab === "Gallery" && (
                <div className="flex flex-col items-center justify-center w-full min-h-screen pt-10">

                    {/* grid with images related with tour */}
                    <div className="grid grid-cols-2 gap-6 w-full min-h-screen">
                        {safari.images.map((image) => (
                            <div className="relative w-full aspect-4/3">
                                <Image src={image} alt={image} priority fill className="object-cover border border-black" />
                            </div>
                        ))}
                    </div>

                </div>
            )}

        </div>
    );
}