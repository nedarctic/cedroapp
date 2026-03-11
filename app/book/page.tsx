import { SectionHeadline } from "@/components/section-headline";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/data";

export default function ToursPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center bg-white">

      {/* hero / intro */}
      <section className="min-h-screen flex flex-col items-center justify-center py-24 w-full">

        <SectionHeadline
          title="Our Safari Tours"
          color="black"
        />

        <p className="text-black text-2xl font-normal w-1/2 text-center pt-10">
          Discover carefully curated safari experiences across Kenya, designed
          to immerse you in wildlife, landscapes, and culture — whether you’re
          seeking adventure, luxury, or a short escape.
        </p>
      </section>

      {/* tours grid */}
      <section className="w-full flex flex-col items-center pb-32">

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 w-11/12">

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