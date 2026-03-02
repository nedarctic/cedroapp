import { SectionHeadline } from "@/components/section-headline";
import { GrSchedulePlay } from "react-icons/gr";
import { TbArrowGuideFilled } from "react-icons/tb";
import { MdOutlineLocalHotel } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import { OfferCard } from "@/components/offer-card";
import { AboutHero } from "@/components/about-hero";
import { TeamMemberCard } from "@/components/team-member-card";
import { TravelStoryCard } from "@/components/travel-story-card";
import { ClientTestimonialCard } from "@/components/client-testimonial-card";

export default function About () {
    return (
        <main className="min-h-screen w-full flex flex-col justify-center items-center">

            {/* landing section */}
            <section className="flex flex-col items-center justify-center bg-white min-h-screen py-24">

                {/* section headline */}
                <SectionHeadline color={"black"} title={"About Cedro Adventures"} />

                {/* description */}
                <p className="text-black text-2xl font-normal w-1/2 text-center pt-10 pb-20">Cedro Adventures is a safari company born from the passion and expertise of a young African woman who, after working with prestigious five-star hotels in Tsavo and Maasai Mara National Parks and leading travel agencies across Africa, set out to fulfill her dream—crafting unforgettable travel experiences.</p>

                {/* hero image + mission + why us => about hero component */}
                <AboutHero image={"/about-hero.jpg"} image_description={"About hero image featuring the Maasai Mara scenery bustling with wildlife"} title1={"Our Mission"} description1={"To deliver quality service, customized tours, and exciting activities that showcase the diverse beauty, wildlife and culture of East Africa while practising responsible and sustainable tourism and supporting local conservation and development projects."} title2={"Why Choose Us"} description2={"With 10 years of experience and a deep understanding of our destinations, our team of travel experts ensures that every aspect of your journey is carefully planned and executed to perfection."} />

            </section>


            {/* what we offer section */}
            <section className="flex flex-col justify-center items-center bg-white min-h-screen pb-24">

                {/* section headline */}
                <SectionHeadline color={"black"} title={"What we offer"} />

                {/* what we offer cards */}
                <div className="flex flex-col items-center justify-center space-y-8">
                    <OfferCard image_right={true} Logo={GrSchedulePlay} title={"Expertly Crafted Itineraries"} description={"Our team of travel experts meticulously designs each itinerary to showcase the best of Africa, combining must-see landmarks with hidden gems and authentic experiences."} image={"/offers/offer1.jpg"} />
                    <OfferCard image_right={false} Logo={TbArrowGuideFilled} title={"Local Insights and Guides"} description={"Venture tours are led by knowledgeable local guides who provide insider insights, historical context, and personal anecdotes, enriching your travel experience and fostering meaningful connections."} image={"/offers/offer2.jpg"} />
                    <OfferCard image_right={true} Logo={MdOutlineLocalHotel} title={"Comfortable Accommodations"} description={"Relax and recharge in carefully selected accommodations ranging from boutique hotels to charming bed and breakfasts, all chosen for their comfort, convenience, and local charm."} image={"/offers/offer3.jpg"} />
                    <OfferCard image_right={false} Logo={MdOutlineGroups2} title={"Small Group Experiences"} description={"Enjoy intimate group sizes that allow for personalized attention and flexibility, ensuring you can immerse yourself fully in each destination without feeling rushed or overcrowded."} image={"/offers/offer4.jpg"} />
                </div>
            </section>

            {/* our team section */}
            <section className="flex flex-col justify-center items-center bg-black min-h-screen w-full pb-24">

                {/* section headline */}
                <SectionHeadline title={"Meet our team"} color={"white"} />

                {/* grid containing team member cards */}
                <div className="grid grid-cols-3 gap-8">
                    <TeamMemberCard image={"/team/lornah.jpg"} name={"Lornah Tangus"} designation={"Founder, Travel & Tour Specialist"} description={"With over 15 years of experience in the travel industry, Lornah leads Cedro Adventures with a passion for creating meaningful, well-curated travel experiences that connect people to places and cultures."} />
                    <TeamMemberCard image={"/team/kelvin.jpg"} name={"Kelvin Kimutai"} designation={"Finance & Operations Manager"} description={"Kelvin oversees finance and operations, ensuring that every tour runs smoothly, sustainably, and efficiently while maintaining the highest standards of service and accountability."} />
                    <TeamMemberCard image={"/team/ruto.jpg"} name={"Emmanuel Kipruto"} designation={"Digital Marketing"} description={"Emmanuel drives Cedro Adventures' digital presence, crafting engaging content and marketing strategies that connect travelers with inspiring destinations and unforgettable experiences."} />
                    <TeamMemberCard image={"/team/jus.jpg"} name={"Justus Kimtai"} designation={"Software Developer"} description={"Justus designs and builds the digital systems behind Cedro Adventures, ensuring seamless user experiences, reliable platforms, and scalable technology that supports the company’s growth."} />
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

                </div>

            </section>


        </main>
    );
}