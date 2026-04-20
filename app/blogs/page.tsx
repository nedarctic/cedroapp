import { NewsletterSignup } from "@/components/newsletter-signup";
import { SearchBlogs } from "@/components/search-blogs";
import { SectionHeadline } from "@/components/section-headline";
import { TravelStoryCard } from "@/components/travel-story-card";
import { getBlogs } from "@/lib/helpers";
import Link from 'next/link';

export default async function Blogs({ searchParams }: {
    searchParams: Promise<{ query: string }>
}) {

    const { query } = await searchParams;
    const blogs = await getBlogs(query);

    return (
        <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">

            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white py-16">

                {/* travel blog headline */}
                <SectionHeadline title={"Our travel blog"} color={"black"} />

                {/* search component */}
                <SearchBlogs />

                {/* grid with travel story cards */}
                <div className="flex flex-col justify-center items-center mt-20">
                    {blogs.length > 0 ? <div className="grid grid-cols-2 gap-8">
                        {blogs?.map(({ title, image, excerpt, date, slug }) => (
                            <Link key={excerpt} href={`/blogs/${slug}`} ><TravelStoryCard title={title} image={image} date={date} story={excerpt} /></Link>
                        ))}
                    </div> : <p className="font-bold text-black text-md">No blogs match your query.</p>}
                </div>

                {/* newsletter signup component */}
                <NewsletterSignup />

            </section>
        </main>
    );
}