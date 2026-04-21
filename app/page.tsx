import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { TbArrowGuideFilled } from "react-icons/tb";
import { MdOutlineLocalHotel } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import Image from "next/image";
import { destination_items, social_items } from "@/lib/data";
import { OfferCard } from "@/components/offer-card";
import { PopularDestinationCard } from "@/components/popular-destination-card";
import { SectionHeadline } from "@/components/section-headline";
import { ViewMore } from "@/components/view-more";
import { PopularTourCard } from "@/components/popular-tour-card";
import { ClientTestimonialCard } from "@/components/client-testimonial-card";
import { TravelStoryCard } from "@/components/travel-story-card";
import { travelStories, testimonials } from '@/lib/data'
import { CarouselTestimonial } from "@/components/carousel-testimonials";
import { getDestinationData } from "@/lib/helpers";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">

      {/* LANDING PAGE SECTION */}
      <section id="hero" className="relative flex flex-col w-full items-center justify-center min-h-screen">

        {/* background gif */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/gifs/big-cats-hunting-zebra.gif"
            alt="Animals leaping in the savannah Wild"
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* landing page main content */}
        <div className="flex flex-col justify-center items-center flex-1 text-center space-y-4 sm:space-y-5 px-4 sm:px-6 md:px-8 z-20">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Welcome to <span className="text-[#FAD039]">Cedro Adventures</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl font-normal text-white px-2">
            Experience the Magic of Africa with Cedro Adventures
          </p>

          <Link
            href={'/tours'}
            className="bg-[#FAD039] text-base sm:text-lg px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 text-black flex items-center justify-center space-x-2 font-medium hover:bg-[#e8c12e] transition-colors duration-200"
          >
            Explore Tours
            <FaArrowRightLong className="ml-2 w-5 h-3 sm:w-6 sm:h-4" />
          </Link>
        </div>

        {/* landing page bottom details */}
        <div className="flex flex-col mb-25 sm:mb-5 sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-6 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-12 lg:py-18 z-20">

          {/* online rating */}
          <Link
            href="https://www.tripadvisor.com/Attraction_Review-g294207-d32985892-Reviews-Cedro_Adventures-Nairobi.html"
            target="_blank"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="flex space-x-1 text-white text-sm sm:text-base">
              <FaTripadvisor className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" />
              TripAdvisor
            </div>
            <div className="flex items-center">
              <TiStarFullOutline className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <TiStarFullOutline className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <TiStarFullOutline className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <TiStarFullOutline className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              <TiStarFullOutline className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </div>
          </Link>

          {/* marketing statement */}
          <p className="text-sm sm:text-base md:text-lg text-white text-center order-first sm:order-none">
            10 years of crafting adventures
          </p>

          {/* follow us on social media */}
          <div className="flex items-center space-x-2">
            <p className="text-sm sm:text-base font-normal text-white">Follow us:</p>
            <div className="flex space-x-2 sm:space-x-3">
              {social_items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center text-gray-700 hover:text-white transition-colors duration-200"
                >
                  {<item.logo className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section className="flex flex-col items-center w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

        {/* intro text */}
        <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-black border border-black py-8 sm:py-10 px-6 sm:px-10 lg:px-16 my-8 sm:my-10 max-w-4xl text-center">
          At Cedro Adventures, we believe that travel is more than just visiting new places, it's about embarking on transformative journeys, creating lasting memories, and forging meaningful connections with the world around us.
        </p>

        {/* headline */}
        <SectionHeadline title={"What We Offer"} color={"black"} />

        {/* cards */}
        <div className="flex flex-col items-center w-full max-w-6xl space-y-10 sm:space-y-14 lg:space-y-16">
          <OfferCard image_right={true} Logo={GrSchedulePlay} title={"Expertly Crafted Itineraries"} description={"Our team of travel experts meticulously designs each itinerary to showcase the best of Africa, combining must-see landmarks with hidden gems and authentic experiences."} image={"/offers/offer1.jpg"} />
          <OfferCard image_right={false} Logo={TbArrowGuideFilled} title={"Local Insights and Guides"} description={"Venture tours are led by knowledgeable local guides who provide insider insights, historical context, and personal anecdotes, enriching your travel experience and fostering meaningful connections."} image={"/offers/offer2.jpg"} />
          <OfferCard image_right={true} Logo={MdOutlineLocalHotel} title={"Comfortable Accommodations"} description={"Relax and recharge in carefully selected accommodations ranging from boutique hotels to charming bed and breakfasts, all chosen for their comfort, convenience, and local charm."} image={"/offers/offer3.jpg"} />
          <OfferCard image_right={false} Logo={MdOutlineGroups2} title={"Small Group Experiences"} description={"Enjoy intimate group sizes that allow for personalized attention and flexibility, ensuring you can immerse yourself fully in each destination without feeling rushed or overcrowded."} image={"/offers/offer4.jpg"} />
        </div>

      </section>

      {/* POPULAR DESTINATIONS SECTION */}
      <section className="flex flex-col items-center w-full bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

        <SectionHeadline title={"Popular Destinations"} color={"white"} />

        <div className="w-full lg:w-11/12 max-w-7xl flex flex-col items-center">

          {/* Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
            {destination_items.map(({ label, href, image }) => (
              <Link key={image} href={href}>
                <PopularDestinationCard
                  image={image}
                  destination={label}
                  tours={getDestinationData(label).length}
                />
              </Link>
            ))}
          </div>

          <ViewMore path={"destinations"} color={"white"} />
        </div>
      </section>

      {/* POPULAR TOURS SECTION */}
      <section className="flex flex-col items-center w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">

        {/* intro */}
        <p className="font-normal text-base sm:text-lg md:text-xl lg:text-2xl text-black border border-black py-8 sm:py-10 px-6 sm:px-10 lg:px-16 max-w-4xl text-center my-8 sm:my-10">
          We offer a diverse range of activities designed to cater to every traveler's interests, passions, and preferences. Whether you're seeking cultural immersion, outdoor adventure, culinary delights, or relaxation, we have the perfect activities to enhance your travel experience.
        </p>

        <SectionHeadline title={"Popular Tours"} color={"black"} />

        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            <PopularTourCard title={"4-Days Maasai Mara Kenyan Safari"} destination={"Kenya"} duration={"4 Days / 3 Nights"} dates={"Anytime"} price={"From USD $1,371.00"} image={"/popular-tours/maasai-mara.jpg"} group_size={"Max 16 People"} special_offer={true} link="https://cedroadventures.safarioffice.app/tour-7d077049318df-98e3bba/online" />
            <PopularTourCard title={"3-day Kenyan wildlife Safari"} destination={"Kenya"} duration={"3 Days / 2 Nights"} dates={"Anytime"} price={"From: USD $1,059.00"} image={"/popular-tours/amboseli.jpg"} group_size={"Max 20 People"} link="https://cedroadventures.safarioffice.app/tour-1548196002e2d-ae6e84269f6d/online" />
            <PopularTourCard title={"Kenya Luxury Safari Experience"} destination={"Kenya"} duration={"6 Days / 5 Nights"} dates={"Anytime"} price={"From: USD $3,290.00"} image={"/popular-tours/kenya-luxury.jpg"} group_size={"Max 16 People"} link="https://cedroadventures.safarioffice.app/tour-70c7947218e92-33ce/online" />
          </div>

          {/* horizontal line and view more tours */}
          <ViewMore path={"tours"} color={"black"} />

        </div>

      </section>

      {/* WHAT OUR CLIENTS SAY SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full bg-black py-8 sm:py-12 md:py-16 px-4 sm:px-6">

        {/* section headline */}
        <SectionHeadline title={"What our clients say"} color={"white"} />

        {/* carousel with travel story cards */}
        <div className="w-full max-w-7xl mx-auto">
          <CarouselTestimonial />
        </div>

      </section>

      {/* OUR TRAVEL STORIES SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-300 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">

        {/* section headline */}
        <SectionHeadline color={"black"} title="Our travel stories" />

        {/* grid with travel story cards */}
        <div className="flex flex-col justify-center items-center w-11/12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
            {travelStories.map(({ title, image, excerpt, date, slug }) => (
              <Link key={slug} href={`/blogs/${slug}`} className="w-full">
                <TravelStoryCard title={title} image={image} date={date} story={excerpt} />
              </Link>
            ))}
          </div>

          <div className="w-full mt-8 sm:mt-10 md:mt-12">
            <ViewMore path={"blogs"} color={"black"} />
          </div>
        </div>
      </section>

    </main>
  );
}
