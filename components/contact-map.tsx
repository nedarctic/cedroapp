"use client";

import { Clock, Mail, Phone } from 'lucide-react';

export const ContactMap = () => {
  return (
    <div className="w-full bg-white font-sans antialiased">
      <div className="w-full border border-black p-4 sm:p-6 md:p-8 lg:p-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-start">

          {/* Left Column - Contact Info */}
          <div className="space-y-6 sm:space-y-8 lg:col-span-1">

            {/* Address */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-gray-700">

                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Address
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed text-sm sm:text-base">
                2nd Floor, 90 JGO, Mugumo Gardens,<br />
                LR. NO.3734/173
                Lavington, NAIROBI
              </p>

            </div>

            {/* Business Hours */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Business Hours
                </h3>
              </div>
              <div className="text-gray-800 space-y-1.5 sm:space-y-2 text-sm sm:text-base">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">6:00 AM - 9:00 PM</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Sunday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="pt-4 border-t border-gray-100">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Phone className="w-4 h-4 text-yellow-500" />
                  <a href="tel:+1234567890" className="text-gray-800 hover:text-yellow-600 transition">
                    (+254) 721 174 008
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base">
                  <Mail className="w-4 h-4 text-yellow-500" />
                  <a href="mailto:info@cedroadventures.com" className="text-gray-800 hover:text-yellow-600 transition break-words">
                    info@cedroadventures.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column - SIMPLE WORKING VERSION */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 overflow-hidden shadow-sm border border-gray-200">
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.983580792682!2d36.87574607446994!3d-1.1720445988167474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1bd1204218db%3A0xf84a1bbcff6eb186!2sMugumo%20Gardens!5e0!3m2!1sen!2ske!4v1788267164223!5m2!1sen!2ske"
                  className="h-full w-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin" />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              📍 Located in the heart of Nairobi, easily accessible from all major hotels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};