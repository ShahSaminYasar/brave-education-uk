"use client";
import { useState, useEffect } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import * as motion from "motion/react-client";
import {
  Plus,
  X,
  Trash2,
  Loader2,
  PlayCircle,
  Image as ImageIcon,
  Pencil,
} from "lucide-react";
import axios from "axios";
import { useAxios } from "@/hooks/useAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import {
  DEFAULT_SUCCESS_CATEGORY,
  SUCCESS_CATEGORIES,
  SUCCESS_STORY_COUNTRIES,
} from "@/lib/successStories";

const SuccessStories = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stories, setStories] = useState([]);
  const [editData, setEditData] = useState(null);
  const [preview, setPreview] = useState(null);
  const [category, setCategory] = useState(DEFAULT_SUCCESS_CATEGORY);

  const { isLoading } = useQuery({
    queryKey: ["success"],
    queryFn: async () => {
      const res = await axiosSelf.get("/success");
      setStories(res?.data?.data || []);
      return res?.data?.data || [];
    },
  });

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "unset";
      setEditData(null);
      setPreview(null);
      setCategory(DEFAULT_SUCCESS_CATEGORY);
    }
  }, [isModalOpen]);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this story?")) return;
    try {
      const res = await axiosSelf.delete(
        `/success?id=${id}&token=${localStorage.getItem("token")}`,
      );
      if (res.data.ok) {
        toast.success("Deleted successfully");
        queryClient.invalidateQueries(["success"]);
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
      const video = form.get("video");
      const country = form.get("country");
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

      const payload = {
        video,
        image: imageUrl,
        category,
        ...(category === "Immigration" && country ? { country } : {}),
      };
      const config = { params: { token: localStorage.getItem("token") } };

      if (editData) {
        await axiosSelf.put(`/success?id=${editData._id}`, payload, config);
        toast.success("Story updated!");
      } else {
        await axiosSelf.post(`/success`, payload, config);
        toast.success("Story added!");
      }

      setIsModalOpen(false);
      queryClient.invalidateQueries(["success"]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fade p-2 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <AdminPageTitle>Success Stories</AdminPageTitle>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all active:scale-95 text-sm cursor-pointer"
        >
          <Plus size={18} />
          Add Story
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="md:col-span-2 lg:col-span-4 min-h-[70vh] w-full grid place-content-center bg-white">
            <Spinner />
          </div>
        ) : (
          stories?.map((story) => (
            <motion.div
              key={story._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm group"
            >
              <div
                className="relative h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${story?.image})` }}
              >
                {story?.video && (
                  <a
                    href={story.video}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all cursor-pointer"
                  >
                    <PlayCircle className="text-white opacity-80" size={40} />
                  </a>
                )}
                <span className="absolute top-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  {story?.category || DEFAULT_SUCCESS_CATEGORY}
                  {story?.country ? ` · ${story.country}` : ""}
                </span>
              </div>
              <div className="p-3 flex justify-between items-center bg-white">
                <span className="text-[10px] font-mono text-gray-400">
                  ID:{" "}
                  {story?._id
                    ? `${story._id.slice(0, 8)}...${story._id.slice(-8)}`
                    : ""}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditData(story);
                      setPreview(story.image);
                      setCategory(story.category || DEFAULT_SUCCESS_CATEGORY);
                      setIsModalOpen(true);
                    }}
                    className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(story._id)}
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
            className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
          >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
              <h2 className="font-bold text-gray-800">
                {editData ? "Edit Story" : "New Success Story"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">
                  Category
                </label>
                <select
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                >
                  {SUCCESS_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {category === "Immigration" && (
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-500 uppercase">
                    Country (Optional)
                  </label>
                  <select
                    name="country"
                    defaultValue={editData?.country || ""}
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                  >
                    <option value="">No country</option>
                    {SUCCESS_STORY_COUNTRIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">
                  YouTube Video Link (Optional)
                </label>
                <input
                  name="video"
                  type="url"
                  defaultValue={editData?.video || ""}
                  placeholder="https://..."
                  className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">
                  Thumbnail {editData && "(Leave empty to keep current)"}
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
                      Click to upload new image
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
                    "Update Story"
                  ) : (
                    "Publish Story"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default SuccessStories;
