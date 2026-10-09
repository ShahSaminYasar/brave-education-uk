"use client";
import { Input } from "@/components/ui/input";

const fieldLabel = "text-[10px] font-bold text-gray-500 uppercase block mb-1";

/**
 * This is the STANDALONE cta (independent of hero.cta), typically shown
 * further down the event page as its own call-to-action band. `formData.cta`
 * is always a live object here (see lib/eventForm.js) - the API is what
 * collapses it back to `null` on save when both fields are left blank, so
 * this step never has to think about that.
 */
const CtaStep = ({ formData, setFormData }) => {
  const { cta } = formData;

  const setCta = (patch) =>
    setFormData((prev) => ({ ...prev, cta: { ...prev.cta, ...patch } }));

  return (
    <div className="space-y-6">
      <p className="text-xs text-gray-500">
        An optional standalone call-to-action shown further down the event
        page, separate from the hero button. Leave both fields blank to skip
        it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={fieldLabel}>Button Label</label>
          <Input
            value={cta.label}
            onChange={(e) => setCta({ label: e.target.value })}
            placeholder="Book Your Spot"
          />
        </div>
        <div>
          <label className={fieldLabel}>Button Link</label>
          <Input
            value={cta.link}
            onChange={(e) => setCta({ link: e.target.value })}
            placeholder="/appointment"
          />
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer w-fit">
        <input
          type="checkbox"
          checked={cta.openInNewTab}
          onChange={(e) => setCta({ openInNewTab: e.target.checked })}
        />
        Open in a new tab
      </label>
    </div>
  );
};

export default CtaStep;
