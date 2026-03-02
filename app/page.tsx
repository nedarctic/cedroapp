import Link from "next/link";
import { TiStarFullOutline } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTripadvisor } from "react-icons/fa";
import { GrSchedulePlay } from "react-icons/gr";
import { TbArrowGuideFilled } from "react-icons/tb";
import { MdOutlineLocalHotel } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import Image from "next/image";
import { social_items } from "@/lib/data";
import { OfferCard } from "@/components/offer-card";
import { PopularDestinationCard } from "@/components/popular-destination-card";
import { SectionHeadline } from "@/components/section-headline";
import { ViewMore } from "@/components/view-more";
import { PopularTourCard } from "@/components/popular-tour-card";
import { ClientTestimonialCard } from "@/components/client-testimonial-card";
import { TravelStoryCard } from "@/components/travel-story-card";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">

      {/* LANDING PAGE SECTION */}
      <section id="hero" className="relative flex flex-col w-full items-center justify-center h-screen overflow-hidden">

        {/* background gif */}
        <div className="absolute inset-0 h-11/12">
          <Image
            src="/gifs/big-cats-hunting-zebra.gif"
            alt="Animals leaping in the savannah Wild"
            className="object-cover"
            fill
            priority
          />
        </div>

        {/* dark overlay */}
        <div className="absolute h-11/12 inset-0 bg-black/40 z-10" />

        {/* landing page main content */}
        <div className="flex flex-col justify-center items-center flex-1 text-center space-y-5 mb-20 z-20">
          <p className="text-6xl font-extrabold text-white">Welcome to <span className="text-[#FAD039]">Cedro Adventures</span></p>
          <p className="font-normal text-lg text-white">Experience the Magic of Africa with Cedro Adventures</p>

          <Link href={'/tours'} className="bg-[#FAD039] text-lg px-10 py-3 text-black flex items-center justify-center space-x-2 font-medium">Explore Tours <FaArrowRightLong className="ml-2 w-8 h-4" /></Link>
        </div>

        {/* landing page bottom details */}
        <div className="flex items-center justify-between place-self-end w-full px-20 pb-18 z-20">

          {/* online rating */}
          <Link href="https://www.tripadvisor.com/Attraction_Review-g294207-d32985892-Reviews-Cedro_Adventures-Nairobi.html" target="_blank" className="flex items-center space-x-2">
            <div className="flex space-x-1 text-white"><FaTripadvisor className="text-yellow-400 w-6 h-6 mr-2" />TripAdvisor</div>
            <div className="flex items-center">
              <TiStarFullOutline className="text-yellow-400 w-6 h-6" />
              <TiStarFullOutline className="text-yellow-400 w-6 h-6" />
              <TiStarFullOutline className="text-yellow-400 w-6 h-6" />
              <TiStarFullOutline className="text-yellow-400 w-6 h-6" />
              <TiStarFullOutline className="text-yellow-400 w-6 h-6" />
            </div>
          </Link>

          {/* marketing statement */}
          <p className="text-md text-white">10 years of crafting adventures</p>

          {/* follow us on social media */}
          <div className="flex items-center space-x-2">
            <p className="font-normal text-white">Follow us:</p>
            <div className="flex space-x-2">
              {social_items.map((item) => (
                <Link key={item.label} href={item.href} className="flex items-center text-gray-700 hover:text-white">{<item.logo className="w-6 h-6 text-white" />}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white/30 py-16">

        {/* intro text */}
        <p className="font-normal text-3xl text-black border border-black py-16 px-32 my-10 w-3/4">
          At Cedro Adventures, we believe that travel is more than just visiting new places, it's about embarking on transformative journeys, creating lasting memories, and forging meaningful connections with the world around us.
        </p>

        {/* what we offer headline */}
        <SectionHeadline title={"What We Offer"} color={"black"} />

        {/* offer cards */}
        <div className="flex flex-col items-center justify-center space-y-16">
          <OfferCard image_right={true} Logo={GrSchedulePlay} title={"Expertly Crafted Itineraries"} description={"Our team of travel experts meticulously designs each itinerary to showcase the best of Africa, combining must-see landmarks with hidden gems and authentic experiences."} image={"/offers/offer1.jpg"} />
          <OfferCard image_right={false} Logo={TbArrowGuideFilled} title={"Local Insights and Guides"} description={"Venture tours are led by knowledgeable local guides who provide insider insights, historical context, and personal anecdotes, enriching your travel experience and fostering meaningful connections."} image={"/offers/offer2.jpg"} />
          <OfferCard image_right={true} Logo={MdOutlineLocalHotel} title={"Comfortable Accommodations"} description={"Relax and recharge in carefully selected accommodations ranging from boutique hotels to charming bed and breakfasts, all chosen for their comfort, convenience, and local charm."} image={"/offers/offer3.jpg"} />
          <OfferCard image_right={false} Logo={MdOutlineGroups2} title={"Small Group Experiences"} description={"Enjoy intimate group sizes that allow for personalized attention and flexibility, ensuring you can immerse yourself fully in each destination without feeling rushed or overcrowded."} image={"/offers/offer4.jpg"} />
        </div>

      </section>

      {/* POPULAR DESTINATIONS SECTION */}
      <section className="flex flex-col items-center justify-start min-h-screen w-full bg-black py-16">

        {/* popular destinations headline */}
        <SectionHeadline title={"Popular Destinations"} color={"white"} />

        {/* grid with popular destination cards */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-8 w-full">
            <PopularDestinationCard image={"/popular-destinations/kenya.jpg"} destination={"Kenya"} tours={1} />
            <PopularDestinationCard image={"/popular-destinations/rwanda.jpg"} destination={"Rwanda"} tours={1} />
            <PopularDestinationCard image={"/popular-destinations/tanzania.jpg"} destination={"Tanzania"} tours={1} />
            <PopularDestinationCard image={"/popular-destinations/zanzibar.jpg"} destination={"Zanzibar"} tours={1} />
          </div>

          {/* horizontal line & view all destinations button  */}
          <ViewMore path={"destinations"} color={"white"} />
        </div>

      </section>

      {/* POPULAR TOURS SECTION */}
      <section className="flex flex-col items-center justify-center min-h-screen w-full bg-white/30 py-16">

        {/* intro text */}
        <p className="font-normal text-3xl text-black border border-black py-16 px-32 w-3/4 my-10">
          We offer a diverse range of activities designed to cater to every traveler's interests, passions, and preferences. Whether you're seeking cultural immersion, outdoor adventure, culinary delights, or relaxation, we have the perfect activities to enhance your travel experience.
        </p>

        {/* popular tours headline */}
        <SectionHeadline title={"Popular Tours"} color={"black"} />

        {/* grid with popular tour cards */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-10">
            <PopularTourCard title={"4-Days Maasai Mara Kenyan Safari"} destination={"Kenya"} duration={"4 Days / 3 Nights"} dates={"Anytime"} price={"From USD $1,371.00"} image={"/popular-tours/maasai-mara.jpg"} group_size={"Max 16 People"} special_offer={true} link="https://cedroadventures.safarioffice.app/tour-7d077049318df-98e3bba/online" />
            <PopularTourCard title={"3-day Kenyan wildlife Safari"} destination={"Kenya"} duration={"3 Days / 2 Nights"} dates={"Anytime"} price={"From: USD $1,059.00"} image={"/popular-tours/amboseli.jpg"} group_size={"Max 20 People"} link="https://cedroadventures.safarioffice.app/tour-1548196002e2d-ae6e84269f6d/online" />
            <PopularTourCard title={"Kenya Luxury Safari Experience"} destination={"Kenya"} duration={"6 Days / 5 Nights"} dates={"Anytime"} price={"From: USD $3,290.00"} image={"/popular-tours/kenya-luxury.jpg"} group_size={"Max 16 People"} link="https://cedroadventures.safarioffice.app/tour-70c7947218e92-33ce/online" />
          </div>

          {/* horizontal line and view more tours */}
          <ViewMore path={"tours"} color={"black"} />

        </div>

      </section>

      {/* WHAT OUR CLIENTS SAY SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full bg-black py-16">

        {/* section headline */}
        <SectionHeadline title={"What our clients say"} color={"white"} />

        {/* carousel with travel story cards */}

        <div className="flex flex-col space-y-8">
          <ClientTestimonialCard image_right={true} image={"/client-testimonials/client1.jpg"} name={"Melinda P."} testimonial={"Cedro Adventures made my holiday! The trip to Maasai Mara and Amboseli were truly life changing for me. The itinerary was so well put together and the general service from the experts from Cedro Adventures was one of the best."} country={"USA"} />
          <ClientTestimonialCard image_right={false} image={"/client-testimonials/client2.jpg"} name={"Selina W."} testimonial={"Cedro Adventures are the best! What I loved most was their attention to detail in their service. The itinierary was great, I personally recommend Kenya Luxury Safari, which entails a safari to the Maasai Mara and Lake Nakuru, a total experience!"} country={"France"} />
          <ClientTestimonialCard image_right={true} image={"/client-testimonials/client3.jpg"} name={"Jack H."} testimonial={"I highly recommend travelling with Cedro Adventures. They are highly professional and take their service seriously. Trust me, coming from a poor tour agency safari experience, Cedro Adventures were such a breather. I don't know why I hadn't already heard of them."} country={"Canada"} />
        </div>

      </section>

      {/* OUR TRAVEL STORIES SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-300 py-16">

        {/* section headline  */}
        <SectionHeadline color={"black"} title="Our travel stories" />

        {/* grid with travel story cards */}
        <div className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-8">
            <TravelStoryCard date={"March 30, 2024"} image={"/travel-stories/amboseli.jpg"} story={"A magical safari experience is a quite relative experience as a lot of people like to argue. However, a safari through the vast Amboseli savannah shatters every expectation one had in mind."} title={"Magical Safari Experience with Cedro Adventures at Amboseli"} />
            <TravelStoryCard date={"July 12, 2024"} image={"/travel-stories/rwanda.jpg"} story={"Everyone thinks they love wildlife nature until they visit Rwanda, then they fall in love with it all over again but this time, Rwanda-style. The majestic gorillas not only dominate the forested Rwandan hilly ranges at the Volcanes but also the hearts of everyone who visits."} title={"Gorillas in the Mist with Cedro Adventures"} />
            <TravelStoryCard date={"August 08, 2025"} image={"/travel-stories/zanzibar.jpg"} story={"Zanzibar has a way to steal anyone's heart, including anyone claiming to be introverted. The Zanzibar Archipellago experience with Cedro Adventures will take your breath away. This isn't a promise - it's guaranteed."} title={"Explore the beauty of Zanzibar with Cedro Adventures"} />
          </div>

          <ViewMore path={"blogs"} color={"black"} />
        </div>

      </section>

    </main>
  );
}
