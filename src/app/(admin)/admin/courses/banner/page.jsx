"use client";
import { useState, useEffect } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import {
  Save,
  Loader2,
  Plus,
  Trash2,
  Palette,
  Copy,
  ShieldCheck,
  BookCheck,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const axiosSelf = useAxios();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [previews, setPreviews] = useState({ bg: null, hero: null });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    badge: { displayText: "", copyText: "" },
    button: { link: "", text: "" },
    active: true,
    keyPoints: [],
    bg: "",
    hero: "",
    themeColor: "#1e3a8a",
  });

  useEffect(() => {
    const getBannerData = async () => {
      const res = await axiosSelf.get("/banner?page=courses");
      if (res.data?.data) {
        const d = res?.data?.data?.[0];
        setFormData({
          title: d.title || "",
          description: d.description || "",
          badge: {
            displayText: d.badge?.displayText || "",
            copyText: d.badge?.copyText || "",
          },
          button: {
            link: d.button?.link || "",
            text: d.button?.text || "",
          },
          active: d.active ?? true,
          keyPoints: d.keyPoints || [],
          bg: d.bg || "",
          hero: d.hero || "",
          themeColor: d.themeColor || "#1e3a8a",
        });
      }
      setIsLoading(false);
      return res.data;
    };

    getBannerData();
  }, []);

  useEffect(() => {
    return () => {
      if (previews.bg) URL.revokeObjectURL(previews.bg);
      if (previews.hero) URL.revokeObjectURL(previews.hero);
    };
  }, [previews]);

  const lightenColor = (hex, percent = 30) => {
    hex = hex.replace("#", "");

    const num = parseInt(hex, 16);
    const amt = Math.round(2.55 * percent);

    const r = Math.min(255, (num >> 16) + amt);
    const g = Math.min(255, ((num >> 8) & 0x00ff) + amt);
    const b = Math.min(255, (num & 0x0000ff) + amt);

    return `rgb(${r}, ${g}, ${b})`;
  };

  const themeColor = formData?.themeColor || "#2563eb";
  const lightColor = lightenColor(themeColor, 35);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      const previewKey = e.target.name === "bgFile" ? "bg" : "hero";
      setPreviews((prev) => ({ ...prev, [previewKey]: blobUrl }));
    }
  };

  const handleKeyPointChange = (index, value) => {
    const newPoints = [...formData?.keyPoints];
    newPoints[index] = value;
    setFormData((prev) => ({ ...prev, keyPoints: newPoints }));
  };

  const addKeyPoint = () => {
    setFormData((prev) => ({ ...prev, keyPoints: [...prev.keyPoints, ""] }));
  };

  const removeKeyPoint = (index) => {
    setFormData((prev) => ({
      ...prev,
      keyPoints: prev.keyPoints.filter((_, i) => i !== index),
    }));
  };

  const uploadToImgBB = async (file) => {
    const data = new FormData();
    data.append("image", file);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
      data,
    );
    return res.data?.data?.display_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const form = new FormData(e.target);
      const bgFile = form.get("bgFile");
      const heroFile = form.get("heroFile");

      let finalBg = formData?.bg;
      let finalHero = formData?.hero;

      if (bgFile?.size > 0) finalBg = await uploadToImgBB(bgFile);
      if (heroFile?.size > 0) finalHero = await uploadToImgBB(heroFile);

      const payload = { ...formData, bg: finalBg, hero: finalHero };
      const res = await axiosSelf.put(
        `/course-banner?token=${localStorage.getItem("token")}`,
        payload,
      );

      if (res.data?.ok || res.status === 200) {
        toast.success("Banner updated successfully!");
        setFormData(payload);
        setPreviews({ bg: null, hero: null });
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading)
    return (
      <div className="p-10 text-center">
        <Loader2 className="animate-spin mx-auto text-purple-600" />
      </div>
    );

  return (
    <section className="fade min-h-screen pb-20 px-4">
      <AdminPageTitle>Course Page Banner</AdminPageTitle>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 mt-6">
        {/* FORM SIDE */}
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-700">Banner Configuration</h3>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  name="themeColor"
                  value={formData?.themeColor}
                  onChange={handleChange}
                  className="w-8 h-8 rounded-full border-none cursor-pointer overflow-hidden"
                />
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold uppercase text-gray-400">
                  <input
                    type="checkbox"
                    name="active"
                    checked={formData?.active}
                    onChange={handleChange}
                    className="w-4 h-4 accent-purple-600"
                  />
                  Active
                </label>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Badge Text
                </label>
                <input
                  name="badge.displayText"
                  value={formData?.badge.displayText || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg text-sm"
                  placeholder="Limited Offer"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Promo Code Info
                </label>
                <input
                  name="badge.copyText"
                  value={formData?.badge.copyText || ""}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg text-sm"
                  placeholder="Apply code BE50"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-400">
                Title
              </label>
              <input
                name="title"
                value={formData?.title || ""}
                required
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-gray-400">
                Description
              </label>
              <input
                name="description"
                value={formData?.description || ""}
                onChange={handleChange}
                className="w-full p-2 border rounded-lg text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Button Text
                </label>
                <input
                  name="button.text"
                  value={formData?.button.text || ""}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-lg text-sm"
                  placeholder="e.g. Apply Now"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Button Link
                </label>
                <input
                  name="button.link"
                  value={formData?.button.link || "#all_courses"}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg text-sm"
                  placeholder="e.g. #all_courses"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase text-gray-400">
                Key Points
              </label>
              {formData?.keyPoints.map((point, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    value={point || ""}
                    onChange={(e) => handleKeyPointChange(i, e.target.value)}
                    className="flex-1 p-2 border rounded-lg text-sm"
                    placeholder="e.g. classes available"
                  />
                  <button
                    type="button"
                    onClick={() => removeKeyPoint(i)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addKeyPoint}
                className="text-xs font-semibold text-purple-600 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Plus size={14} /> Add Line
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Background Image", name: "bgFile" },
                { label: "Hero Image", name: "heroFile" },
              ].map(({ label, name }) => (
                <div key={name} className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400">
                    {label}
                  </label>

                  <label className="flex items-center justify-center gap-2 h-9 cursor-pointer rounded-md border border-dashed border-gray-300 bg-gray-50 text-xs text-gray-600 hover:bg-gray-100">
                    <span>Choose image</span>
                    <input
                      type="file"
                      name={name}
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-black text-white rounded-xl font-semibold flex justify-center items-center gap-2 transition-all disabled:bg-gray-400 cursor-pointer"
            >
              {loading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  <Save size={20} /> Update Banner
                </>
              )}
            </button>
          </form>
        </div>

        {/* PREVIEW SIDE (Exact Design Replica) */}
        <div className="xl:col-span-3">
          <h3 className="text-xs font-semibold text-gray-600 uppercase mb-3">
            Preview
          </h3>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl scale-[0.85] md:scale-100 origin-top">
            <section
              className="px-5 py-12 flex items-center justify-center transition-all duration-500"
              style={{
                backgroundColor: formData?.themeColor,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${previews.bg || formData?.bg || "https://i.sstatic.net/y9DpT.jpg"})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",
              }}
            >
              <div className="w-full max-w-5xl mx-auto grid grid-cols-7 items-center justify-center gap-4">
                {/* Text Content */}
                <div className="text-white col-span-3 flex flex-col items-start gap-3 z-10">
                  <h2 className="text-4xl md:text-5xl font-extrabold block leading-tight">
                    {formData?.title || "Title"}
                  </h2>
                  <p className="text-sm font-normal opacity-90">
                    {formData?.description || "Description here"}
                  </p>

                  {formData?.keyPoints.map((point, idx) => (
                    <p key={idx} className="text-xs flex items-center gap-2">
                      <ShieldCheck size={16} /> {point}
                    </p>
                  ))}

                  {formData?.badge.displayText && (
                    <button
                      onClick={() => {
                        window.navigator.clipboard.writeText(
                          formData?.badge?.copyText || "",
                        );
                        return toast("Copied to clipboard");
                      }}
                      className={`group px-3 py-1 bg-white text-[10px] font-bold rounded-2xl my-2 flex items-center gap-2 cursor-pointer`}
                      style={{
                        color: formData?.themeColor,
                      }}
                    >
                      <Copy size={12} className="opacity-70" />
                      {formData?.badge.displayText}
                    </button>
                  )}

                  <div
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${themeColor}, ${lightColor}, ${themeColor})`,
                    }}
                    className="px-6 py-3 rounded-full shadow-lg hover:shadow-2xl font-semibold text-sm flex items-center gap-2 transition-all"
                  >
                    <BookCheck size={16} />{" "}
                    {formData?.button?.text || "CTA Button Text"}
                  </div>
                </div>

                {/* Hero Image */}
                <div className="col-span-4 relative h-full flex items-center justify-center">
                  <img
                    src={previews.hero || formData?.hero || "/offer.png"}
                    alt="Hero"
                    className="w-full h-auto object-contain max-h-[350px] drop-shadow-2xl"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
