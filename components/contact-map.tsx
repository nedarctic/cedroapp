import { Clock, MapPin } from 'lucide-react';

export const ContactMap = () => {
  return (
    <div className="w-full bg-white font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-10 items-start">

          {/* Left Column */}
          <div className="space-y-8 lg:col-span-1">

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Address
                </h3>
              </div>
              <p className="text-gray-800 leading-relaxed">
                Bazaar Plaza<br />
                Moi Avenue<br />
                Nairobi, Kenya
              </p>
            </div>

            {/* Business Hours */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <Clock className="w-4 h-4" />
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
                  Business Hours
                </h3>
              </div>
              <div className="text-gray-800 space-y-1">
                <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-2 bg-gray-50 overflow-hidden shadow-sm border border-gray-200">

            {/* Responsive Map Container */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[300px]">

              <iframe
                title="Moi Avenue Nairobi Map"
                src="https://www.google.com/maps?q=Moi+Avenue+Nairobi&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};