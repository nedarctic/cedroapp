import { getBlog, getOtherBlogs } from '@/lib/helpers';
import Image from 'next/image';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { TravelStoryCard } from '@/components/travel-story-card';
import Link from 'next/link';
import { ViewMore } from '@/components/view-more';
import { SectionHeadline } from '@/components/section-headline';

export default async function BlogDetails({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const blog = await getBlog(slug);

    if (!blog) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <p className="text-black font-normal text-lg">Blog not found</p>
            </div>
        );
    }

    const otherBlogs = await getOtherBlogs(slug);

    if (!otherBlogs) return null;

    return (
        <main className="min-h-screen flex flex-col items-center bg-white dark:bg-black w-full">

            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white mt-16">

                {/* header title + date */}
                <div className="flex flex-col items-center justify-center gap-6 my-20">
                    <hr className="border border-black w-full" />
                    <h1 className="text-4xl font-extrabold text-black md:w-3/4 w-full text-center">{blog.title}</h1>
                    <p className="text-sm text-black text-medium">{blog.date}</p>
                    <hr className="border border-black w-full" />

                </div>

                {/* image */}

                <div className="relative w-10/12 h-screen">
                    <Image src={blog.image} alt={blog.title} fill priority />
                </div>

                {/* horizontal line */}

                <hr className="border border-black w-10/12 my-16" />

            </section>

            <section className="flex flex-col items-center justify-start min-h-screen w-full bg-white">

                {/* blog details */}
                <div className="flex flex-col items-start justify-center gap-8 min-h-screen w-10/12">

                    {/* intro paragraph */}
                    <p className="text-black text-lg font-normal">
                        {blog.story.intro}
                    </p>

                    {/* sections map paragraphs */}
                    {blog.story.sections.map(({ subtitle, content }) => (
                        <div key={subtitle} className="space-y-3">
                            <h1 className="text-black font-bold text-2xl">{subtitle}</h1>
                            <p className="text-black font-normal text-lg">{content}</p>
                        </div>
                    ))}

                    {/* conclusion paragraph */}
                    <p className="text-black text-lg font-normal">
                        {blog.story.conclusion}
                    </p>
                </div>

                {/* newsletter signup */}
                <NewsletterSignup />

            </section>

            {/* see more stories headline */}
            <SectionHeadline title={"See more stories"} color={"black"} />

            <section className="flex flex-col items-center justify-start min-h-screen w-10/12 bg-white mb-20">



                {/* other blogs */}
                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="grid grid-cols-2 gap-8">
                        {otherBlogs.map(({ slug, title, date, image, excerpt }) => (
                            <div key={blog.slug}>
                                <Link href={`/blogs/${slug}`} ><TravelStoryCard title={title} image={image} date={date} story={excerpt} /></Link>
                            </div>
                        ))}
                    </div>
                </div>

                {/* view more */}
                <ViewMore path={"blogs"} color={"black"} />

            </section>
        </main>
    );

}