import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { blogs } from "@/data/blogs";

export default function BlogListingPage() {
  return (
    <main className="py-20 lg:py-32 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-pharma-green-600 font-bold uppercase tracking-wider text-sm mb-2 block">
            স্বাস্থ্য ব্লগ
          </span>
          <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4">
            সুস্থ থাকার পরামর্শ
          </h1>
          <p className="text-slate-600 text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তার ও ফার্মাসিস্টদের নিয়মিত স্বাস্থ্য বিষয়ক টিপস।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group cursor-pointer bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="overflow-hidden rounded-xl mb-4 relative h-64">
                <img
                  src={blog.img}
                  alt={blog.tag}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                  {blog.tag}
                </div>
              </div>
              <div className="p-2">
                <div className="text-slate-400 text-xs font-bold mb-2">
                  {blog.date}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-pharma-green-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                  {blog.desc}
                </p>
                <span className="text-pharma-green-600 font-bold text-sm inline-flex items-center gap-1">
                  পড়ুন <ArrowRight weight="bold" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
