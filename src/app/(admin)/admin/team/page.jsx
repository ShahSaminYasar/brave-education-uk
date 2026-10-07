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
  User,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import axios from "axios";
import { useAxios } from "@/hooks/useAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const TeamPage = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reorderingId, setReorderingId] = useState(null);
  const [members, setMembers] = useState([]);
  const [editData, setEditData] = useState(null);
  const [preview, setPreview] = useState(null);

  const { isLoading } = useQuery({
    queryKey: ["team-members"],
    queryFn: async () => {
      const res = await axiosSelf.get("/team-members");
      setMembers(res?.data?.data || []);
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

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    try {
      const res = await axiosSelf.delete(
        `/team-members?id=${id}&token=${localStorage.getItem("token")}`,
      );
      if (res.data.ok) {
        toast.success("Removed successfully");
        queryClient.invalidateQueries(["team-members"]);
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const handleReorder = async (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= members.length) return;

    const reordered = [...members];
    [reordered[index], reordered[targetIndex]] = [
      reordered[targetIndex],
      reordered[index],
    ];

    setReorderingId(members[index]._id);
    setMembers(reordered);

    try {
      await axiosSelf.patch(
        `/team-members?token=${localStorage.getItem("token")}`,
        { order: reordered.map((m) => m._id) },
      );
      queryClient.invalidateQueries(["team-members"]);
    } catch (error) {
      toast.error("Failed to reorder");
      setMembers(members); // revert on failure
    } finally {
      setReorderingId(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const form = new FormData(event.target);
      const name = form.get("name");
      const role = form.get("role");
      const imageFile = form.get("photo");
      let photoUrl = editData?.photo;

      if (imageFile && imageFile.size > 0) {
        const imageData = new FormData();
        imageData.append("image", imageFile);
        const imgRes = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          imageData,
        );
        photoUrl = imgRes.data.data.display_url;
      }

      const payload = { name, role, photo: photoUrl };
      const config = { params: { token: localStorage.getItem("token") } };

      if (editData) {
        await axiosSelf.put(
          `/team-members?id=${editData._id}`,
          payload,
          config,
        );
        toast.success("Team member updated!");
      } else {
        await axiosSelf.post(`/team-members`, payload, config);
        toast.success("Team member added!");
      }

      setIsModalOpen(false);
      queryClient.invalidateQueries(["team-members"]);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fade p-2 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <AdminPageTitle>Our Team</AdminPageTitle>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all active:scale-95 text-sm cursor-pointer"
        >
          <Plus size={18} />
          Add Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <div className="md:col-span-2 lg:col-span-4 min-h-[70vh] w-full grid place-content-center bg-white">
            <Spinner />
          </div>
        ) : members?.length === 0 ? (
          <div className="md:col-span-2 lg:col-span-4 min-h-[40vh] w-full grid place-content-center text-gray-400 text-sm">
            No team members yet. Add one to show the Team section on the
            About page.
          </div>
        ) : (
          members?.map((member, index) => (
            <motion.div
              key={member._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm group"
            >
              <div
                className="relative h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${member?.photo})` }}
              />
              <div className="p-3 flex flex-col gap-2 bg-white">
                <div>
                  <p className="text-sm font-bold text-gray-800 truncate">
                    {member?.name}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate">
                    {member?.role}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <button
                      disabled={index === 0 || reorderingId}
                      onClick={() => handleReorder(index, "up")}
                      className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move up"
                    >
                      <ChevronUp size={16} />
                    </button>
                    <button
                      disabled={index === members.length - 1 || reorderingId}
                      onClick={() => handleReorder(index, "down")}
                      className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move down"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditData(member);
                        setPreview(member.photo);
                        setIsModalOpen(true);
                      }}
                      className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(member._id)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
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
                {editData ? "Edit Team Member" : "New Team Member"}
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
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  defaultValue={editData?.name || ""}
                  placeholder="e.g. Jane Doe"
                  className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">
                  Role
                </label>
                <input
                  name="role"
                  type="text"
                  defaultValue={editData?.role || ""}
                  placeholder="e.g. Admissions Counsellor"
                  className="w-full p-2.5 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 bg-gray-50/30"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-500 uppercase">
                  Photo {editData && "(Leave empty to keep current)"}
                </label>
                <div className="relative border-2 border-dashed border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 min-h-[95px]">
                  {preview ? (
                    <img
                      src={preview}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <User className="text-gray-400" size={24} />
                  )}
                  <input
                    name="photo"
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
                      Click to upload new photo
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
                    "Update Member"
                  ) : (
                    "Add Member"
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

export default TeamPage;
