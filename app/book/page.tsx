import { SectionHeadline } from "@/components/section-headline";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/data";

export default function ToursPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white overflow-x-hidden">
      
      {/* hero / intro section */}
      <section className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 w-full px-4 sm:px-6 md:px-8">
        
        <SectionHeadline
          title="Our Safari Tours"
          color="black"
        />

        <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-normal w-full sm:w-3/4 lg:w-1/2 text-center pt-6 sm:pt-8 md:pt-10 px-4 leading-relaxed">
          Discover carefully curated safari experiences across Kenya, designed
          to immerse you in wildlife, landscapes, and culture — whether you're
          seeking adventure, luxury, or a short escape.
        </p>
      </section>

      {/* tours grid section */}
      <section className="w-full flex flex-col items-center pb-16 sm:pb-20 md:pb-24 lg:pb-32 px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-7xl">
          
          {tours.map((tour) => (
            <TourCard
              key={tour.slug}
              title={tour.title}
              intro={tour.intro}
              duration={tour.duration}
              group_size={tour.group_size}
              price={tour.price}
              heroImage={tour.heroImage}
              slug={tour.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}