"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageUploadField from "@/components/admin/ImageUploadField";

const fieldLabel = "text-[10px] font-bold text-gray-500 uppercase block mb-1";

const HeroStep = ({ formData, setFormData }) => {
  const { hero } = formData;

  const setHero = (patch) =>
    setFormData((prev) => ({ ...prev, hero: { ...prev.hero, ...patch } }));

  const setHeroCta = (patch) =>
    setFormData((prev) => ({
      ...prev,
      hero: { ...prev.hero, cta: { ...prev.hero.cta, ...patch } },
    }));

  return (
    <div className="space-y-6">
      <div>
        <label className={fieldLabel}>
          Event Title <span className="text-red-500">*</span>
        </label>
        <Input
          value={formData.title}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          placeholder="Study Abroad Expo 2026"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={fieldLabel}>
            Start Date & Time <span className="text-red-500">*</span>
          </label>
          <Input
            type="datetime-local"
            value={formData.startDate}
            onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className={fieldLabel}>End Date & Time (optional)</label>
          <Input
            type="datetime-local"
            value={formData.endDate}
            onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
          />
        </div>
      </div>

      <ImageUploadField
        label="Hero Background Image"
        required
        value={hero.bgImage}
        onChange={(url) => setHero({ bgImage: url })}
      />

      <div>
        <label className={fieldLabel}>Hero Title Style</label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setHero({ titleType: "text" })}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              hero.titleType === "text" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            Text
          </button>
          <button
            type="button"
            onClick={() => setHero({ titleType: "image" })}
            className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
              hero.titleType === "image" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            Image
          </button>
        </div>
      </div>

      {hero.titleType === "text" ? (
        <div>
          <label className={fieldLabel}>Hero Title Text</label>
          <Input
            value={hero.titleText}
            onChange={(e) => setHero({ titleText: e.target.value })}
            placeholder="Defaults to the event title if left blank"
          />
        </div>
      ) : (
        <ImageUploadField
          label="Hero Title Image"
          value={hero.titleImage}
          onChange={(url) => setHero({ titleImage: url })}
        />
      )}

      <div>
        <label className={fieldLabel}>Hero Description</label>
        <Textarea
          rows={3}
          value={hero.description}
          onChange={(e) => setHero({ description: e.target.value })}
          placeholder="A short line shown under the hero title"
        />
      </div>

      <ImageUploadField
        label="Secondary Hero Image (optional)"
        aspectHint="~4:1"
        value={hero.secondaryImage || ""}
        onChange={(url) => setHero({ secondaryImage: url || null })}
      />

      <div className="border-t border-gray-100 pt-5">
        <p className="text-xs font-bold text-gray-700 mb-3">Hero Button (optional)</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={fieldLabel}>Button Label</label>
            <Input
              value={hero.cta.label}
              onChange={(e) => setHeroCta({ label: e.target.value })}
              placeholder="Register Now"
            />
          </div>
          <div>
            <label className={fieldLabel}>Button Link</label>
            <Input
              value={hero.cta.link}
              onChange={(e) => setHeroCta({ link: e.target.value })}
              placeholder="/appointment"
            />
          </div>
        </div>
        <label className="flex items-center gap-2 mt-3 text-xs text-gray-600 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={hero.cta.openInNewTab}
            onChange={(e) => setHeroCta({ openInNewTab: e.target.checked })}
          />
          Open in a new tab
        </label>
      </div>
    </div>
  );
};

export default HeroStep;
