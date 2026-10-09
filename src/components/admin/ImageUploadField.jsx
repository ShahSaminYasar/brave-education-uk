"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Image as ImageIcon, Loader2, X } from "lucide-react";

/**
 * A single image upload field: file picker -> imgbb upload -> preview,
 * matching the upload pattern already used across the admin (success
 * stories, blog, team) rather than introducing a new one.
 */
const ImageUploadField = ({ label, value, onChange, required, aspectHint }) => {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    try {
      setUploading(true);
      const form = new FormData();
      form.append("image", file);
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        form,
      );
      const url = res?.data?.data?.display_url;
      if (url) onChange(url);
      else toast.error("Image upload failed");
    } catch {
      toast.error("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-1">
      <label className="text-[10px] font-bold text-gray-500 uppercase">
        {label} {required && <span className="text-red-500">*</span>}
        {aspectHint && <span className="normal-case font-normal text-gray-400"> ({aspectHint})</span>}
      </label>
      <div
        onClick={() => !uploading && inputRef.current?.click()}
        className="relative border-2 border-dashed border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2 min-h-[110px] cursor-pointer overflow-hidden"
      >
        {uploading ? (
          <Loader2 className="animate-spin text-gray-400" size={22} />
        ) : value ? (
          <img src={value} className="absolute inset-0 w-full h-full object-cover" alt="" />
        ) : (
          <>
            <ImageIcon className="text-gray-400" size={22} />
            <span className="text-[11px] text-gray-400">Click to upload</span>
          </>
        )}

        {value && !uploading && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
            className="absolute top-1.5 right-1.5 bg-black/60 text-white rounded-full p-1 hover:bg-black/80 cursor-pointer"
          >
            <X size={14} />
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ImageUploadField;
