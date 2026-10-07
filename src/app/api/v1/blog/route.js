import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { getDb } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { readJsonBody } from "@/lib/http";
import { generateSlug } from "@/lib/slug";

// Full post body is intentionally excluded from the list projection - it's
// not needed there and can be large.
const LIST_PROJECTION = { content: 0 };

export async function GET(request) {
  try {
    const slug = request.nextUrl.searchParams.get("slug");
    const db = await getDb();

    if (slug) {
      const post = await db.collection("blog_posts").findOne({ slug });

      if (!post) {
        return NextResponse.json(
          { ok: false, message: "Post not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({
        ok: true,
        message: "Fetch successful",
        data: post,
      });
    }

    const posts = await db
      .collection("blog_posts")
      .find({}, { projection: LIST_PROJECTION })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json({
      ok: true,
      message: "Fetch successful",
      data: posts,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const { title, category, excerpt, content, image } =
      await readJsonBody(request);

    if (!title || !image) {
      return NextResponse.json(
        { ok: false, message: "Title and cover image are required" },
        { status: 400 },
      );
    }

    const db = await getDb();
    const result = await db.collection("blog_posts").insertOne({
      title,
      slug: generateSlug(title),
      category: category || "",
      excerpt: excerpt || "",
      content: content || "",
      image,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (result?.insertedId) {
      revalidateTag("blog-posts", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Post published successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Failed to publish post" },
      { status: 500 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function PUT(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");
    const { title, category, excerpt, content, image } =
      await readJsonBody(request);

    const updateDoc = {
      $set: {
        ...(title && { title, slug: generateSlug(title) }),
        ...(category !== undefined && { category }),
        ...(excerpt !== undefined && { excerpt }),
        ...(content !== undefined && { content }),
        ...(image && { image }),
        updatedAt: new Date(),
      },
    };

    const db = await getDb();
    const result = await db
      .collection("blog_posts")
      .updateOne({ _id: new ObjectId(id) }, updateDoc);

    if (result.matchedCount === 1) {
      revalidateTag("blog-posts", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Post updated successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Post not found" },
      { status: 404 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request) {
  const authFail = await requireAdmin(request);
  if (authFail) return authFail;

  try {
    const id = request.nextUrl.searchParams.get("id");
    const db = await getDb();
    const result = await db
      .collection("blog_posts")
      .deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
      revalidateTag("blog-posts", { expire: 0 });
      return NextResponse.json({
        ok: true,
        message: "Post deleted successfully",
      });
    }

    return NextResponse.json(
      { ok: false, message: "Post not found" },
      { status: 404 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
}
