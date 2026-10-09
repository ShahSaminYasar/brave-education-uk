"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Image as ImageIcon, Loader2, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fieldLabel = "text-[10px] font-bold text-gray-500 uppercase block mb-1";

const GalleryStep = ({ formData, setFormData }) => {
  const { gallery } = formData;
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const setGallery = (patch) =>
    setFormData((prev) => ({ ...prev, gallery: { ...prev.gallery, ...patch } }));

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = "";
    if (!files.length) return;

    setUploading(true);
    try {
      const uploaded = await Promise.all(
        files.map(async (file) => {
          const form = new FormData();
          form.append("image", file);
          const res = await axios.post(
            `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
            form,
          );
          return res?.data?.data?.display_url;
        }),
      );
      const urls = uploaded.filter(Boolean);
      if (urls.length) {
        setGallery({ images: [...gallery.images, ...urls] });
      }
      if (urls.length < files.length) {
        toast.error("Some images failed to upload");
      }
    } catch {
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index) =>
    setGallery({ images: gallery.images.filter((_, i) => i !== index) });

  return (
    <div className="space-y-6">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 cursor-pointer w-fit">
        <input
          type="checkbox"
          checked={gallery.enabled}
          onChange={(e) => setGallery({ enabled: e.target.checked })}
        />
        Show a gallery section on this event's page
      </label>

      {gallery.enabled && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={fieldLabel}>Section Title</label>
              <Input
                value={gallery.title}
                onChange={(e) => setGallery({ title: e.target.value })}
                placeholder="Gallery"
              />
            </div>
          </div>

          <div>
            <label className={fieldLabel}>Section Description</label>
            <Textarea
              rows={2}
              value={gallery.description}
              onChange={(e) => setGallery({ description: e.target.value })}
            />
          </div>

          <div>
            <p className="text-xs font-bold text-gray-700 mb-2">Images</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {gallery.images.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 group"
                >
                  <img src={src} className="w-full h-full object-cover" alt="" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => !uploading && inputRef.current?.click()}
                className="aspect-square rounded-lg border-2 border-dashed border-gray-200 hover:bg-gray-50 flex flex-col items-center justify-center gap-1 cursor-pointer"
              >
                {uploading ? (
                  <Loader2 className="animate-spin text-gray-400" size={20} />
                ) : (
                  <>
                    <Plus className="text-gray-400" size={20} />
                    <span className="text-[10px] text-gray-400">Add images</span>
                  </>
                )}
              </button>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleFiles}
              className="hidden"
            />
            {gallery.images.length === 0 && (
              <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                <ImageIcon size={12} /> No images yet.
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GalleryStep;
