"use client";
import { useState, useEffect } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import * as motion from "motion/react-client";
import {
  Plus,
  X,
  Trash2,
  Loader2,
  Pencil,
  Image as ImageIcon,
} from "lucide-react";
import axios from "axios";
import { useAxios } from "@/hooks/useAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const UpdatesPage = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingEditData, setLoadingEditData] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editData, setEditData] = useState(null);
  const [preview, setPreview] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const res = await axiosSelf.get("/blog");
      setPosts(res?.data?.data || []);
      return res?.data?.data || [];
    },
  });

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "unset";
      setEditData(null);
      setPreview(null);
    }
  }, [isModalOpen]);

  const handleEditClick = async (post) => {
    setLoadingEditData(true);
    setIsModalOpen(true);
    try {
      const res = await axiosSelf.get(`/blog?slug=${post.slug}`);
      setEditData(res?.data?.data);
      setPreview(res?.data?.data?.image);
    } catch (error) {
      toast.error("Failed to load post");
      setIsModalOpen(false);
    } finally {
      setLoadingEditData(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    try {
      const res = await axiosSelf.delete(
        `/blog?id=${id}&token=${localStorage.getItem("token")}`,
      );
      if (res.data.ok) {
        toast.success("Deleted successfully");
        queryClient.invalidateQueries(["blog-posts"]);
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const form = new FormData(event.target);
      const title = form.get("title");
      const category = form.get("category");
      const excerpt = form.get("excerpt");
      const content = form.get("content");
      const imageFile = form.get("image");
      let imageUrl = editData?.image;

      if (imageFile && imageFile.size > 0) {
        const imageData = new FormData();
        imageData.append("image", imageFile);
        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          imageData,
        );
        imageUrl = imgRes.data.data.display_url;
      }

      const payload = { title, category, excerpt, content, image: imageUrl };
      const config = { params: { token: localStorage.getItem("token") } };

      if (editData) {
        await axiosSelf.put(`/blog?id=${editData._id}`, payload, config);
        toast.success("Post updated!");
      } else {
        await axiosSelf.post(`/blog`, payload, config);
        toast.success("Post published!");
      }

      setIsModalOpen(false);
      queryClient.invalidateQueries(["blog-posts"]);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fade p-2 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <AdminPageTitle>Updates</AdminPageTitle>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all active:scale-95 text-sm cursor-pointer"
        >
          <Plus size={18} />
          New Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="md:col-span-2 lg:col-span-4 min-h-[70vh] w-full grid place-content-center bg-white">
            <Spinner />
          </div>
        ) : posts?.length === 0 ? (
          <div className="md:col-span-2 lg:col-span-4 min-h-[40vh] w-full grid place-content-center text-gray-400 text-sm">
            No posts yet. Publish one to show it on the Updates page.
          </div>
        ) : (
          posts?.map((post) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm group"
            >
              <div
                className="relative h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${post?.image})` }}
              />
              <div className="p-3 flex flex-col gap-2 bg-white">
                <div>
                  {post?.category && (
                    <span className="text-[9px] font-bold uppercase tracking-wide text-purple-600">
                      {post.category}
                    </span>
                  )}
                  <p className="text-sm font-bold text-gray-800 truncate">
                    {post?.title}
                  </p>
                  <p className="text-[10px] text-gray-400">
                    {post?.createdAt &&
                      new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleEditClick(post)}
                    className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg flex flex-col max-h-[90vh]"
          >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="font-bold text-gray-800">
                {editData ? "Edit Post" : "New Post"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {loadingEditData ? (
              <div className="p-10 flex justify-center">
                <Loader2 className="animate-spin text-purple-600" />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-5 space-y-4 overflow-y-auto custom-scrollbar"
              >
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    required
                    defaultValue={editData?.title || ""}
                    placeholder="e.g. January 2026 Intake Deadline Announced"
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Category (Optional)
                  </label>
                  <input
                    name="category"
                    type="text"
                    defaultValue={editData?.category || ""}
                    placeholder="e.g. Intakes, Visa News, Events"
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Excerpt (Short summary shown on the Updates cards)
                  </label>
                  <textarea
                    name="excerpt"
                    rows={2}
                    defaultValue={editData?.excerpt || ""}
                    placeholder="A one or two sentence summary..."
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30 resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Content
                  </label>
                  <textarea
                    name="content"
                    rows={8}
                    required
                    defaultValue={editData?.content || ""}
                    placeholder="Write the full update here. Plain paragraphs - no formatting needed."
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30 resize-y"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Cover Image {editData && "(Leave empty to keep current)"}
                  </label>
                  <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 min-h-[95px]">
                    {preview ? (
                      <img
                        src={preview}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <ImageIcon className="text-gray-400" size={24} />
                    )}
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      required={!editData}
                      onChange={(e) =>
                        e.target.files?.[0] &&
                        setPreview(URL.createObjectURL(e.target.files[0]))
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    {!preview && (
                      <span className="text-[11px] text-gray-400">
                        Click to upload cover image
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 py-2.5 text-gray-500 text-sm font-semibold hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-2.5 bg-purple-600 text-white rounded-lg text-sm font-semibold hover:bg-purple-700 disabled:bg-gray-400 flex justify-center items-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : editData ? (
                      "Update Post"
                    ) : (
                      "Publish Post"
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default UpdatesPage;
