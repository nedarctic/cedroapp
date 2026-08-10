import { NewsletterSignup } from "@/components/newsletter-signup";
import { PaginationComponent } from "@/components/pagination";
import { Search } from "@/components/search";
import { SectionHeadline } from "@/components/section-headline";
import { TravelStoryCard } from "@/components/travel-story-card";
import { getBlogs } from "@/lib/helpers/blogs.helpers";
import Link from 'next/link';

export default async function Blogs({ searchParams }: {
    searchParams: Promise<{
        page?: string;
        limit?: string;
        search?: string;
    }>
}) {

    const {
        limit = "10",
        page = "1",
        search
    } = await searchParams;

    const params = new URLSearchParams();

    params.append("page", page);
    params.append("limit", limit);
    search && params.append("search", search);

    const url = `${process.env.BACKEND_URL}/blogs?${params.toString()}`

    const { data: paginatedBlogsData } = await getBlogs(url);
    const { blogs, meta } = paginatedBlogsData!;
    console.log("blogs", blogs);

    return (
        <main className="min-h-screen flex flex-col items-center bg-white w-full">
            <section className="flex flex-col items-center justify-start w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 gap-6">

                {/* travel blog headline */}
                <SectionHeadline title={"Our travel blogs"} color={"black"} />

                {/* search component - responsive width */}
                <div className="w-full lg:w-1/3 mx-auto mt-4 sm:mt-6 md:mt-8 px-4 sm:px-0">
                    <Search placeholder={"Search blogs..."} />
                </div>

                {/* grid with travel story cards */}
                <div className="flex flex-col justify-center items-center w-full max-w-7xl mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    {blogs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8 w-full">
                            {blogs?.map(({ title, blogImage, excerpt, date, id }) => (
                                <Link
                                    key={id}
                                    href={`/blogs/${id}`}
                                    className="block transition-transform hover:scale-[1.02] duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg"
                                >
                                    <TravelStoryCard
                                        title={title}
                                        image={blogImage}
                                        date={date}
                                        story={excerpt}
                                    />
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 sm:py-16">
                            <p className="font-bold text-black text-base sm:text-lg md:text-xl">
                                No blogs match your query.
                            </p>
                            <p className="text-gray-600 text-sm sm:text-base mt-2">
                                Try searching with different keywords or browse all our articles.
                            </p>
                        </div>
                    )}
                </div>

                <PaginationComponent meta={meta} />

                {/* newsletter signup component - responsive width */}
                <div className="w-full mt-8 sm:mt-12 md:mt-16 lg:mt-20">
                    <NewsletterSignup />
                </div>
            </section>
        </main>
    );
}