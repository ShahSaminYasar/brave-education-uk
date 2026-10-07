import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Updates",
  description:
    "Intake deadlines, visa rule changes, office news, and the latest updates from Brave Education UK.",
  keywords: [
    "Brave Education UK updates",
    "intake deadlines",
    "visa news",
    "education news UK",
  ],
  robots: "index, follow",
};

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const page = async () => {
  const posts = await getBlogPosts();

  return (
    <main className="bg-white min-h-screen">
      <div
        style={{
          background:
            "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/page_bg_2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="pt-[100px] pb-10 px-5 min-h-screen flex items-center justify-center flex-col"
      >
        <div className="w-fit mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"News & Announcements"}
            text={"Updates"}
            align="center"
            style={{ color: "transparent" }}
            animate={false}
          />
        </div>
        <p className="para block text-center w-full max-w-md mx-auto">
          Intake deadlines, visa rule changes, office news, and everything else
          worth knowing from Brave Education UK.
        </p>
      </div>

      <section className="section pt-0 w-full max-w-6xl mx-auto">
        {posts.length === 0 ? (
          <div className="w-full min-h-[30vh] flex flex-col items-center justify-center gap-3 text-zinc-400">
            <Newspaper size={32} />
            <p className="text-sm font-medium">
              No updates have been posted yet. Check back soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/updates/${post.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-lg transition-shadow duration-200 bg-white"
              >
                <div className="relative w-full aspect-video overflow-hidden bg-zinc-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.category && (
                    <span className="absolute top-3 left-3 bg-white/95 text-primary text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-2 p-5 flex-1">
                  <span className="text-xs font-medium text-zinc-400">
                    {formatDate(post.createdAt)}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-sm text-zinc-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-auto pt-2 text-sm font-semibold text-primary flex items-center gap-1">
                    Read more <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
export default page;
