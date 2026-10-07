import { cache } from "react";
import { unstable_cache } from "next/cache";
import { getDb } from "./mongodb";

// Full post body is intentionally excluded from the list projection - it's
// not needed on the list page and can be large.
const LIST_PROJECTION = { content: 0 };

function serializePost(post) {
  if (!post) return null;
  return {
    ...post,
    _id: post._id.toString(),
    createdAt: post.createdAt?.toISOString?.() || post.createdAt,
    updatedAt: post.updatedAt?.toISOString?.() || post.updatedAt,
  };
}

async function fetchBlogPosts() {
  const db = await getDb();
  const posts = await db
    .collection("blog_posts")
    .find({}, { projection: LIST_PROJECTION })
    .sort({ createdAt: -1 })
    .toArray();

  return posts.map(serializePost);
}

async function fetchBlogPostBySlug(slug) {
  const db = await getDb();
  const post = await db.collection("blog_posts").findOne({ slug });
  return serializePost(post);
}

/**
 * Cached list reader (newest first, no `content` field). Tagged
 * "blog-posts" - call `revalidateTag("blog-posts")` from the admin
 * create/update/delete routes so /updates picks up changes immediately.
 */
export const getBlogPosts = unstable_cache(fetchBlogPosts, ["blog-posts"], {
  tags: ["blog-posts"],
});

const getCachedBlogPostBySlug = unstable_cache(
  fetchBlogPostBySlug,
  ["blog-post-by-slug"],
  { tags: ["blog-posts"] },
);

/**
 * Cached by-slug reader, additionally wrapped in React's `cache()` so that
 * within a single request, `generateMetadata` and the page body share one
 * DB/cache lookup instead of hitting it twice.
 */
export const getBlogPostBySlug = cache(getCachedBlogPostBySlug);
