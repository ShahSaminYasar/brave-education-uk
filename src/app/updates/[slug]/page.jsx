import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug } from "@/lib/blog";

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/**
 * `generateMetadata` fully resolves before Next starts streaming the
 * response, so this is where we must do the "does this post exist" check
 * and call `notFound()` - the (main) route group has a shared
 * `loading.jsx`, which means Next begins streaming a 200 response before
 * the page component's own body resolves. If the existence check only
 * happened in the page body, a bad slug would render the not-found UI
 * correctly but still ship a 200 status. `getBlogPostBySlug` is wrapped in
 * React's `cache()`, so this lookup and the one in the page body below
 * share a single DB/cache hit per request.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.excerpt || post.title,
    robots: "index, follow",
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

// Posts created before the Tiptap editor existed have plain text content
// (literal newlines, no tags) and relied on `whitespace-pre-line` to keep
// their paragraph breaks. Posts from the new editor always start with a
// block tag (Tiptap never emits bare text). Rather than migrate the old
// docs, detect the format at render time and render each correctly.
const isHtmlContent = (content) => /^\s*</.test(content || "");

const page = async ({ params }) => {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="bg-white min-h-screen pt-[100px] pb-20 px-5">
      <article className="w-full max-w-3xl mx-auto flex flex-col gap-6">
        <Link
          href="/updates"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-primary w-fit"
        >
          <ArrowLeft size={16} /> Back to Updates
        </Link>

        <div className="flex flex-col gap-3">
          {post.category && (
            <span className="w-fit bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
              {post.category}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            {post.title}
          </h1>
          <span className="text-sm text-zinc-400 font-medium">
            {formatDate(post.createdAt)}
          </span>
        </div>

        {post.image && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {isHtmlContent(post.content) ? (
          <div
            className="prose prose-sm sm:prose-base max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        ) : (
          <div className="flex flex-col gap-4 text-base text-zinc-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        )}
      </article>
    </main>
  );
};
export default page;
