import { SectionHeadline } from "@/components/section-headline";
import { Search } from "@/components/search";
import { TravelStoryCard } from "@/components/travel-story-card";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { travelStories } from "@/lib/data";
import Link from 'next/link';

export default function Blogs() {
    return (
        <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">

            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white py-16">

                {/* oour travel blog headline */}
                <SectionHeadline title={"Our travel blog"} color={"black"} />

                {/* search component */}
                <Search placeholder={"Search blogs"} />

                {/* grid with travel story cards */}
                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="grid grid-cols-2 gap-8">
                        {travelStories.map(({title, image, excerpt, date, slug}) => (
                            <Link href={`/blogs/${slug}`} ><TravelStoryCard title={title} image={image} date={date} story={excerpt} /></Link>
                        ))}
                    </div>

                </div>

                {/* newsletter signup component */}
                <NewsletterSignup />

            </section>
        </main>
    );
}