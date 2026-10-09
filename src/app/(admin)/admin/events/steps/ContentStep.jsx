"use client";
import RichTextEditor from "@/components/admin/RichTextEditor";

const ContentStep = ({ formData, setFormData }) => {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-500 uppercase block">
        Event Content
      </label>
      <RichTextEditor
        content={formData.content}
        onChange={(html) => setFormData((prev) => ({ ...prev, content: html }))}
      />
    </div>
  );
};

export default ContentStep;
