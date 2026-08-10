import Image from 'next/image';
import { NewsletterSignup } from '@/components/newsletter-signup';
import { TravelStoryCard } from '@/components/travel-story-card';
import Link from 'next/link';
import { ViewMore } from '@/components/view-more';
import { SectionHeadline } from '@/components/section-headline';
import { getBlog, getOtherBlogs } from '@/lib/helpers/blogs.helpers';

export default async function BlogDetails({ params }: { params: Promise<{ blogId: string }> }) {
    const { blogId } = await params;

    const { data: blog } = await getBlog(blogId);
    
    if (!blog) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center">
                <p className="text-black font-normal text-lg">Blog not found</p>
            </div>
        );
    }

    const { data: otherBlogs } = await getOtherBlogs(blogId);

    if (!otherBlogs) return null;

    return (
        <main className="min-h-screen flex flex-col items-center bg-white w-full">

            {/* HERO SECTION */}
            <section className="flex flex-col items-center w-full pt-12 md:pt-16">

                {/* header */}
                <div className="flex flex-col items-center gap-4 md:gap-6 my-12 md:my-20 w-11/12 max-w-4xl">
                    <hr className="border border-black w-full" />
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center">
                        {blog.title}
                    </h1>
                    <p className="text-sm text-black">{blog.date}</p>
                    <hr className="border border-black w-full" />
                </div>

                {/* image */}
                <div className="relative w-11/12 max-w-5xl h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
                    <Image
                        src={blog.blogImage}
                        alt={blog.title}
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                <hr className="border border-black w-11/12 max-w-5xl my-12 md:my-16" />
            </section>

            {/* CONTENT SECTION */}
            <section className="flex flex-col items-center w-full">

                <div className="flex flex-col gap-6 md:gap-8 w-11/12 max-w-3xl">

                    <p className="text-black text-base md:text-lg">
                        {blog.story.intro}
                    </p>

                    {blog.story.sections.map(({ id, subtitle, content }) => (
                        <div key={id} className="space-y-2 md:space-y-3">
                            <h2 className="text-black font-bold text-xl md:text-2xl">
                                {subtitle}
                            </h2>
                            <p className="text-black text-base md:text-lg">
                                {content}
                            </p>
                        </div>
                    ))}

                    <p className="text-black text-base md:text-lg">
                        {blog.story.conclusion}
                    </p>
                </div>

                <div className="mt-16 w-full flex justify-center">
                    <NewsletterSignup />
                </div>
            </section>

            {/* MORE STORIES */}
            <SectionHeadline title="See more stories" color="black" />

            <section className="flex flex-col items-center w-full mb-16 md:mb-20">

                <div className="mt-12 md:mt-20 w-11/12 max-w-6xl">

                    {/* responsive grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                        {otherBlogs.map(({ id, title, date, blogImage, excerpt }) => (
                            <div key={id}>
                                <Link href={`/blogs/${id}`}>
                                    <TravelStoryCard
                                        title={title}
                                        image={blogImage}
                                        date={date}
                                        story={excerpt}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-11/12 mt-12">
                    <ViewMore path="blogs" color="black" />
                </div>
            </section>

        </main>
    );

}