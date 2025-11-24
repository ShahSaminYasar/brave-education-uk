"use client";
import { useAxios } from "@/hooks/useAxios";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState, useRef } from "react";
import { toast } from "sonner";

const PopUpUploadForm = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const [fileName, setFileName] = useState("No file chosen");
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("No file chosen");
      setPreviewUrl("");
    }
  };

  const handleLabelClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.style.background =
      "linear-gradient(to bottom right, #38bdf8, #0284c7)";
    e.currentTarget.style.borderColor = "#0ea5e9";
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.background =
      "linear-gradient(to bottom right, #7dd3fc, #0ea5e9)";
    e.currentTarget.style.borderColor = "#0c4a6e";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.style.background =
      "linear-gradient(to bottom right, #7dd3fc, #0ea5e9)";
    e.currentTarget.style.borderColor = "#0c4a6e";

    if (e.dataTransfer.files.length) {
      const file = e.dataTransfer.files[0];
      setFileName(file.name);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewUrl(event.target.result);
      };
      reader.readAsDataURL(file);

      // Update file input
      if (fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  };

  const handlePublish = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const form = new FormData(event.target);
      const title = form.get("title");
      const image = form.get("popup_image");
      const link = form.get("link");
      const type = form.get("link_type");
      const excludedLinks =
        form.get("excluded_links")?.length > 0
          ? form.get("excluded_links")?.replace(/\s+/g, "")?.split(",")
          : [];

      const data = new FormData();
      data.append("image", image);

      const imageUpload = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API}`,
        data
      );

      if (!imageUpload?.data?.success)
        return toast.error(
          "Image upload failed, please check your internet and try again"
        );

      const result = await axiosSelf.post(
        `/popup?token=${localStorage.getItem("token")}`,
        {
          title,
          image: imageUpload?.data?.data?.display_url,
          link,
          type,
          token: localStorage?.getItem("token"),
          excludedLinks,
        }
      );

      if (result?.data?.ok) {
        queryClient?.invalidateQueries(["popups"]);
        event?.target?.reset();
        return toast.success(
          result?.data?.message || "Popup published successfully"
        );
      } else {
        return toast.error(
          result?.data?.message || "Failed to publish popup, please try again"
        );
      }
    } catch (error) {
      console.error(error);
      return toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-josefin-sans font-semibold text-xl text-left text-zinc-900">
        New Popup
      </h4>
      <form
        onSubmit={handlePublish}
        className="rounded-xl bg-gradient-to-br from-sky-400 to-blue-300 border-2 border-sky-600 text-sky-600 p-4 flex flex-col gap-2"
      >
        <div className="w-full bg-white rounded-xl p-3">
          <input
            type="text"
            placeholder="Popup title"
            name="title"
            required={true}
            className="w-full p-2 rounded-lg border-2 border-sky-600"
          />
        </div>

        <div className="w-full bg-white rounded-t-xl p-3">
          <input
            type="text"
            placeholder="Redirect link"
            name="link"
            required={true}
            className="w-full p-2 rounded-lg border-2 border-sky-600"
          />
        </div>

        <div className="w-full bg-white rounded-b-xl p-3 flex flex-row items-center justify-start gap-3 -mt-4">
          <div className="flex flex-row items-center gap-1">
            <label htmlFor="link_type">Internal</label>
            <input
              type="radio"
              name="link_type"
              required={true}
              value={"internal"}
            />
          </div>

          <div className="flex flex-row items-center gap-1">
            <label htmlFor="link_type">External</label>
            <input
              type="radio"
              name="link_type"
              required={true}
              value={"external"}
            />
          </div>
        </div>

        <div className="w-full bg-white rounded-xl p-3">
          <input
            type="text"
            placeholder="Excluded links (eg. /about, /services)"
            name="excluded_links"
            className="w-full p-2 rounded-lg border-2 border-sky-600"
          />
        </div>

        {/* Image Input */}
        <div className="w-full p-3 bg-white rounded-2xl relative">
          <div className="mb-4">
            <div
              className="w-full rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 border-2 border-dashed border-blue-700 px-3 pt-20 pb-10 text-center cursor-pointer transition-all duration-300 hover:from-sky-300 hover:to-blue-400 hover:-translate-y-0.5 hover:shadow-lg relative"
              onClick={handleLabelClick}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="absolute top-7 left-1/2 transform -translate-x-1/2 w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
              <span className="text-white font-semibold text-sm block">
                Click here to choose a file
              </span>
              <span className="text-white text-xs font-normal block mt-1">
                (PNG or JPG files only)
              </span>
            </div>

            <input
              ref={fileInputRef}
              name="popup_image"
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              className="hidden"
              onChange={handleFileChange}
              required={true}
            />

            <div className="text-center text-xs mt-3 text-blue-800 font-medium">
              {fileName}
            </div>
          </div>

          {previewUrl && (
            <div className="absolute top-7 left-7 bg-white p-1 rounded-lg">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full max-w-[50px] aspect-square rounded-lg"
              />
              <p className="text-center text-[7px] font-medium mt-0">Preview</p>
            </div>
          )}
        </div>
        <input
          type="submit"
          value={loading ? "Working on it..." : "Publish Popup"}
          disabled={loading}
          className="w-full cursor-pointer bg-blue-500 shadow-lg active:shadow-sm p-2 rounded-lg font-poppins font-semibold text-white text-center transition-all duration-150 disabled:grayscale-[50%]"
        />
      </form>
    </div>
  );
};
export default PopUpUploadForm;
