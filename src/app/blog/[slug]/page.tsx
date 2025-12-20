import Link from "next/link";
import { ArrowLeft, CalendarBlank, Tag } from "@phosphor-icons/react/dist/ssr";
import { blogs } from "@/data/blogs";

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">লেখাটি পাওয়া যায়নি</h1>
                <Link href="/blog" className="text-pharma-green-600 font-bold hover:underline">
                    <ArrowLeft className="inline mr-2" />
                    ফিরে যান
                </Link>
            </div>
        );
    }

    return (
        <article className="pt-32 pb-20 bg-white min-h-screen">
            <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-pharma-green-600 font-bold mb-8 transition-colors"
                >
                    <ArrowLeft weight="bold" />
                    সব ব্লগ
                </Link>

                <header className="mb-10 text-center">
                    <div className="inline-block px-4 py-1.5 bg-pharma-green-50 text-pharma-green-700 font-bold rounded-full text-sm mb-6">
                        {blog.tag}
                    </div>
                    <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <CalendarBlank size={20} />
                            {blog.date}
                        </div>
                    </div>
                </header>

                <div className="rounded-3xl overflow-hidden shadow-lg mb-12">
                    <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-[400px] lg:h-[500px] object-cover"
                    />
                </div>

                <div
                    className="prose prose-lg prose-slate mx-auto prose-headings:font-heading prose-a:text-pharma-green-600 hover:prose-a:text-pharma-green-700"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                ></div>

                <div className="border-t border-slate-100 mt-16 pt-10">
                    <p className="text-center text-slate-500 italic">
                        লেখাটি কেবল সচেতনতার জন্য। কোনো সমস্যা হলে অবশ্যই ডাক্তারের পরামর্শ নিন।
                    </p>
                </div>
            </div>
        </article>
    );
}
