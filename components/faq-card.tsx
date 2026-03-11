"use client"

import { useState } from "react";

export function FaqCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-black rounded-md overflow-hidden">
      
      {/* top row: question + toggle */}
      <button
        className="flex items-center justify-between w-full px-6 py-4 bg-gray-200 hover:bg-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-bold text-black text-lg">{question}</p>
        <span className="font-bold text-2xl">{isOpen ? "-" : "+"}</span>
      </button>

      {/* description: only visible if open */}
      {isOpen && (
        <div className="px-6 py-4 bg-white text-black text-md">
          {answer}
        </div>
      )}
    </div>
  );
}