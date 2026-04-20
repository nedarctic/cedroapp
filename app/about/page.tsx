import { SectionHeadline } from "@/components/section-headline";
import { GrSchedulePlay } from "react-icons/gr";
import { TbArrowGuideFilled } from "react-icons/tb";
import { MdOutlineLocalHotel } from "react-icons/md";
import { MdOutlineGroups2 } from "react-icons/md";
import { OfferCard } from "@/components/offer-card";
import { AboutHero } from "@/components/about-hero";
import { TeamMemberCard } from "@/components/team-member-card";
import { TravelStoryCard } from "@/components/travel-story-card";
import { travelStories, teamMembers } from "@/lib/data";
import Link from 'next/link';
import { CarouselTestimonial } from "@/components/carousel-testimonials";

export default function About() {
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
                    {teamMembers.map((member) => (
                        <TeamMemberCard
                            key={member.name}
                            image={member.image}
                            name={member.name}
                            designation={member.designation}
                            description={member.description}
                        />
                    ))}
                </div>

            </section>

            {/* WHAT OUR CLIENTS SAY SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center w-full bg-black py-16">

                {/* section headline */}
                <SectionHeadline title={"What our clients say"} color={"white"} />

                {/* carousel with travel story cards */}

                <div className="flex flex-col space-y-8">
                    <CarouselTestimonial />
                </div>

            </section>

            {/* OUR TRAVEL STORIES SECTION */}
            <section className="min-h-screen flex flex-col items-center justify-center w-full bg-gray-300 py-16">

                {/* section headline  */}
                <SectionHeadline color={"black"} title="Our travel stories" />

                {/* grid with travel story cards */}
                <div className="flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 gap-8">
                        {travelStories.map(({ title, image, excerpt, date, slug }) => (
                            <Link key={slug} href={`/blogs/${slug}`} ><TravelStoryCard title={title} image={image} date={date} story={excerpt} /></Link>
                        ))}
                    </div>

                </div>

            </section>

        </main>
    );
}