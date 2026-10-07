"use client";
import { useEffect, useState } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import {
  Save,
  Loader2,
  Plus,
  Trash2,
  ChevronUp,
  ChevronDown,
  Phone,
  MessageCircle,
  Share2,
  Video,
} from "lucide-react";
import { toast } from "sonner";
import { useAxios } from "@/hooks/useAxios";

const EMPTY_CONTACT = {
  phones: [],
  whatsapp: { display: "", dial: "" },
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    youtube: "",
  },
};

const ContactInfoPage = () => {
  const axiosSelf = useAxios();

  const [tab, setTab] = useState("contact");
  const [isLoading, setIsLoading] = useState(true);
  const [savingContact, setSavingContact] = useState(false);
  const [savingGeneral, setSavingGeneral] = useState(false);

  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [introVideoUrl, setIntroVideoUrl] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const [contactRes, generalRes] = await Promise.all([
          axiosSelf.get("/contact-settings"),
          axiosSelf.get("/general-settings"),
        ]);
        setContact(contactRes?.data?.data || EMPTY_CONTACT);
        setIntroVideoUrl(generalRes?.data?.data?.introVideoUrl || "");
      } catch (error) {
        toast.error("Failed to load settings");
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, []);

  // ---- Phones helpers ----
  const addPhone = () => {
    setContact((prev) => ({
      ...prev,
      phones: [
        ...prev.phones,
        { id: crypto.randomUUID(), label: "", display: "", dial: "" },
      ],
    }));
  };

  const updatePhone = (index, field, value) => {
    setContact((prev) => {
      const phones = [...prev.phones];
      phones[index] = { ...phones[index], [field]: value };
      return { ...prev, phones };
    });
  };

  const removePhone = (index) => {
    setContact((prev) => ({
      ...prev,
      phones: prev.phones.filter((_, i) => i !== index),
    }));
  };

  const movePhone = (index, direction) => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    setContact((prev) => {
      if (targetIndex < 0 || targetIndex >= prev.phones.length) return prev;
      const phones = [...prev.phones];
      [phones[index], phones[targetIndex]] = [
        phones[targetIndex],
        phones[index],
      ];
      return { ...prev, phones };
    });
  };

  const handleSaveContact = async (e) => {
    e.preventDefault();
    setSavingContact(true);
    try {
      await axiosSelf.put(
        `/contact-settings?token=${localStorage.getItem("token")}`,
        contact,
      );
      toast.success("Contact information updated - live on the site now.");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to save contact info",
      );
    } finally {
      setSavingContact(false);
    }
  };

  const handleSaveGeneral = async (e) => {
    e.preventDefault();
    setSavingGeneral(true);
    try {
      await axiosSelf.put(
        `/general-settings?token=${localStorage.getItem("token")}`,
        { introVideoUrl },
      );
      toast.success("General settings updated - live on the site now.");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to save general settings",
      );
    } finally {
      setSavingGeneral(false);
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
      <AdminPageTitle>Contact & General Info</AdminPageTitle>
      <p className="text-xs text-gray-500 -mt-2 mb-6 max-w-2xl">
        This single set of values drives the header, footer, floating support
        button, WhatsApp links, and structured data across the whole site.
        Changes go live immediately after saving.
      </p>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-200">
        {[
          { key: "contact", label: "Contact Information" },
          { key: "general", label: "General" },
        ].map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2.5 text-sm font-semibold cursor-pointer border-b-2 transition-colors ${
              tab === t.key
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "contact" && (
        <form
          onSubmit={handleSaveContact}
          className="max-w-3xl bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-8"
        >
          {/* Phones */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-700 flex items-center gap-2">
                <Phone size={16} /> Phone Numbers
              </h3>
              <button
                type="button"
                onClick={addPhone}
                className="text-xs font-semibold text-purple-600 flex items-center gap-1 hover:underline cursor-pointer"
              >
                <Plus size={14} /> Add Phone
              </button>
            </div>
            <p className="text-[11px] text-gray-400">
              The first number in this list is used wherever the site shows
              just one phone number (footer, support button, forms). Display
              text and dial number are stored separately since they're often
              formatted differently (e.g. "0800 999 1257" vs
              "+4408009991257").
            </p>

            {contact.phones.length === 0 && (
              <p className="text-xs text-gray-400 italic">
                No phone numbers yet.
              </p>
            )}

            {contact.phones.map((phone, index) => (
              <div
                key={phone.id || index}
                className="grid grid-cols-12 gap-2 items-center bg-gray-50/50 border border-gray-100 rounded-lg p-3"
              >
                <input
                  value={phone.label || ""}
                  onChange={(e) => updatePhone(index, "label", e.target.value)}
                  placeholder="Label (e.g. Head Office)"
                  className="col-span-12 sm:col-span-3 p-2 border rounded-lg text-xs"
                />
                <input
                  value={phone.display || ""}
                  onChange={(e) =>
                    updatePhone(index, "display", e.target.value)
                  }
                  required
                  placeholder="Display text (e.g. 0800 999 1257)"
                  className="col-span-12 sm:col-span-4 p-2 border rounded-lg text-xs"
                />
                <input
                  value={phone.dial || ""}
                  onChange={(e) => updatePhone(index, "dial", e.target.value)}
                  required
                  placeholder="Dial number (e.g. +4408009991257)"
                  className="col-span-9 sm:col-span-4 p-2 border rounded-lg text-xs"
                />
                <div className="col-span-3 sm:col-span-1 flex items-center justify-end gap-1">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => movePhone(index, "up")}
                    className="p-1.5 text-gray-400 hover:text-purple-600 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    type="button"
                    disabled={index === contact.phones.length - 1}
                    onClick={() => movePhone(index, "down")}
                    className="p-1.5 text-gray-400 hover:text-purple-600 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronDown size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removePhone(index)}
                    className="p-1.5 text-red-400 hover:text-red-600 cursor-pointer"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Display Text
                </label>
                <input
                  value={contact.whatsapp?.display || ""}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      whatsapp: { ...prev.whatsapp, display: e.target.value },
                    }))
                  }
                  placeholder="e.g. +44 786 204 2900"
                  className="w-full p-2 border rounded-lg text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Dial Number
                </label>
                <input
                  value={contact.whatsapp?.dial || ""}
                  onChange={(e) =>
                    setContact((prev) => ({
                      ...prev,
                      whatsapp: { ...prev.whatsapp, dial: e.target.value },
                    }))
                  }
                  placeholder="e.g. +447862042900"
                  className="w-full p-2 border rounded-lg text-sm"
                />
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-700 flex items-center gap-2">
              <Share2 size={16} /> Social Links
            </h3>
            <p className="text-[11px] text-gray-400">
              Leave a field empty to hide that icon everywhere it's shown.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { key: "facebook", label: "Facebook" },
                { key: "instagram", label: "Instagram" },
                { key: "linkedin", label: "LinkedIn" },
                { key: "youtube", label: "YouTube" },
                { key: "tiktok", label: "TikTok" },
              ].map(({ key, label }) => (
                <div key={key} className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400">
                    {label}
                  </label>
                  <input
                    value={contact.socials?.[key] || ""}
                    onChange={(e) =>
                      setContact((prev) => ({
                        ...prev,
                        socials: { ...prev.socials, [key]: e.target.value },
                      }))
                    }
                    placeholder={`https://...`}
                    className="w-full p-2 border rounded-lg text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={savingContact}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold flex justify-center items-center gap-2 transition-all disabled:bg-gray-400 cursor-pointer"
          >
            {savingContact ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Save size={20} /> Save Contact Information
              </>
            )}
          </button>
        </form>
      )}

      {tab === "general" && (
        <form
          onSubmit={handleSaveGeneral}
          className="max-w-3xl bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4"
        >
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <Video size={16} /> Intro / Home Video
          </h3>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-gray-400">
              Video URL (YouTube link recommended)
            </label>
            <input
              value={introVideoUrl}
              onChange={(e) => setIntroVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full p-2 border rounded-lg text-sm"
            />
            <p className="text-[11px] text-gray-400">
              Used for the "Who Are We?" video on the home page and the About
              page's video section.
            </p>
          </div>

          <button
            type="submit"
            disabled={savingGeneral}
            className="w-full py-3 bg-black text-white rounded-xl font-semibold flex justify-center items-center gap-2 transition-all disabled:bg-gray-400 cursor-pointer"
          >
            {savingGeneral ? (
              <Loader2 className="animate-spin" size={20} />
            ) : (
              <>
                <Save size={20} /> Save General Settings
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
};

export default ContactInfoPage;
