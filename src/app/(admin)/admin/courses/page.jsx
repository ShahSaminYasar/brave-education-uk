"use client";
import { useState, useEffect } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import * as motion from "motion/react-client";
import { Plus, X, Pencil, Trash2, Loader2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const Page = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  // NEW: State to track if we are editing
  const [editingCourse, setEditingCourse] = useState(null);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: () => axiosSelf.get("/courses"),
  });

  const courses = data?.data?.data || [];

  // Handle Edit Click
  const handleEditClick = (course) => {
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  // Close Modal and Reset
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCourse(null);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const form = new FormData(event.target);
      const imageFile = form.get("image");
      let imageUrl = editingCourse?.image || "";

      if (imageFile && imageFile.size > 0) {
        const imageData = new FormData();
        imageData.append("image", imageFile);
        const imageUpload = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
          imageData,
        );
        imageUrl = imageUpload?.data?.data?.display_url;
      }

      const courseData = {
        courseId: editingCourse?._id,
        id: form.get("id"),
        name: form.get("name"),
        classNo: form.get("classNo"),
        mockNo: form.get("mockNo"),
        duration: form.get("duration"),
        mode: form.get("mode"),
        fees: form.get("fees"),
        offerFees: form.get("offerFees"),
        bgColor: form.get("bgColor"),
        accentColor: form.get("accentColor"),
        four: form.get("four"),
        waLink: "",
        link: form.get("link"),
        image: imageUrl,
        token: localStorage.getItem("token"),
      };

      const response = editingCourse
        ? await axiosSelf.put(
            `/courses?token=${localStorage.getItem("token")}`,
            courseData,
          )
        : await axiosSelf.post(
            `/courses?token=${localStorage.getItem("token")}`,
            courseData,
          );

      if (
        response?.data?.ok ||
        response?.status === 200 ||
        response?.status === 201
      ) {
        toast.success(response?.data?.message || "Success!");
        event.target.reset();
        closeModal();
        queryClient.invalidateQueries(["courses"]);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (courseId) => {
    if (!window.confirm("Are you sure you want to delete this course?")) return;

    try {
      const response = await axiosSelf.delete(
        `/courses?id=${courseId}&token=${localStorage.getItem("token")}`,
      );

      if (response?.data?.ok || response?.status === 200) {
        toast.success(response?.data?.message || "Course removed");
        queryClient.invalidateQueries(["courses"]);
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Failed to delete course");
    }
  };

  return (
    <section className="fade min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <AdminPageTitle>All Courses</AdminPageTitle>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all active:scale-95 text-sm cursor-pointer"
        >
          <Plus size={18} />
          Add Course
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full overflow-x-auto bg-white/50 backdrop-blur-md border border-gray-100 rounded-xl shadow-sm"
      >
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50/50 border-b border-gray-100">
            <tr>
              {["Course Name", "Classes", "Fees", "Mode", "Actions"].map(
                (head) => (
                  <th key={head} className="p-4 font-semibold text-gray-600">
                    {head}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {courses.map((course) => (
              <tr
                key={course._id}
                className="hover:bg-purple-50/30 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    {course.image && (
                      <img
                        src={course.image}
                        alt=""
                        className="w-8 h-8 rounded shadow-sm object-cover"
                      />
                    )}
                    <span className="font-medium text-gray-800">
                      {course.name}
                    </span>
                  </div>
                </td>
                <td className="p-4 text-gray-600">
                  {course.classNo} Classes / {course.mockNo} Mocks
                </td>
                <td className="p-4">
                  <div className="flex flex-col">
                    {course?.offerFees ? (
                      <>
                        <span className="font-bold text-pink-600">
                          £{course.offerFees}
                        </span>
                        <span className="text-[10px] text-gray-400 line-through">
                          £{course.fees}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-pink-600">
                        £{course.fees}
                      </span>
                    )}
                  </div>
                </td>
                <td className="p-4 uppercase text-[10px] font-bold text-purple-600">
                  {course.mode}
                </td>
                <td className="p-4 flex gap-3 text-gray-400">
                  <Pencil
                    size={16}
                    className="cursor-pointer hover:text-purple-600 transition-colors"
                    onClick={() => handleEditClick(course)}
                  />
                  <Trash2
                    size={16}
                    className="cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => handleDelete(course._id)} // Updated this line
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-xl flex flex-col max-h-[90vh]"
          >
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {editingCourse ? "Edit Course" : "New Course Details"}
              </h2>
              <button
                disabled={loading}
                onClick={closeModal}
                className="p-1.5 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-5 overflow-y-auto custom-scrollbar"
            >
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase">
                    Course ID
                  </label>
                  <input
                    name="id"
                    defaultValue={editingCourse?.id || ""}
                    required
                    className="w-full p-2 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-semibold text-slate-700 uppercase">
                    Course Name
                  </label>
                  <input
                    name="name"
                    defaultValue={editingCourse?.name || ""}
                    required
                    className="w-full p-2 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                {[
                  { label: "Class No", id: "classNo" },
                  { label: "Mock No", id: "mockNo" },
                  { label: "Duration", id: "duration" },
                  { label: "Mode", id: "mode" },
                  { label: "Actual Fees", id: "fees" },
                  {
                    label: "Offer Fees (Empty for no offer)",
                    id: "offerFees",
                    required: false,
                  },
                  {
                    label: "BG Color",
                    id: "bgColor",
                    type: "color",
                    default: "#e02f33",
                  },
                  {
                    label: "Accent Color",
                    id: "accentColor",
                    type: "color",
                    default: "#b50e12",
                  },
                  { label: "Fourth Feature", id: "four", required: false },
                ].map((field) => (
                  <div key={field.id} className="space-y-1">
                    <label className="text-[10px] font-semibold text-slate-700 uppercase">
                      {field.label}
                    </label>
                    <input
                      name={field.id}
                      type={field.type || "text"}
                      required={field.required !== false}
                      defaultValue={
                        editingCourse?.[field.id] || field.default || ""
                      }
                      className={`w-full text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500 ${field.type === "color" ? "h-10 p-1 cursor-pointer" : "p-2"}`}
                    />
                  </div>
                ))}

                <div className="space-y-1">
                  <label className="text-[10px] font-semibold text-slate-700 uppercase">
                    Course Image
                  </label>
                  <input
                    name="image"
                    type="file"
                    accept="image/*"
                    required={!editingCourse} // Only required for new courses
                    className="w-full p-1.5 text-xs rounded-lg border border-gray-100 cursor-pointer file:cursor-pointer file:bg-purple-50 file:text-purple-700 file:border-0 file:rounded file:px-2"
                  />
                  {editingCourse && (
                    <p className="text-[9px] text-gray-400 italic">
                      Leave empty to keep current image
                    </p>
                  )}
                </div>

                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Redirect Link (Optional)
                  </label>
                  <input
                    name="link"
                    defaultValue={editingCourse?.link || ""}
                    className="w-full p-2 text-sm rounded-lg border border-gray-200 outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="mt-6 flex gap-3 sticky bottom-0 bg-white pt-2">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-2.5 border border-gray-200 text-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2.5 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-black cursor-pointer disabled:bg-gray-400 flex justify-center items-center gap-2"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : editingCourse ? (
                    "Update Course"
                  ) : (
                    "Create Course"
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

export default Page;
