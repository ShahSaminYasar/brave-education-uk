"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { DEFAULT_PERK_ICON, PERK_ICON_OPTIONS, getPerkIcon } from "@/data/perkIcons";

const fieldLabel = "text-[10px] font-bold text-gray-500 uppercase block mb-1";

const PerksStep = ({ formData, setFormData }) => {
  const { perks } = formData;

  const setPerks = (patch) =>
    setFormData((prev) => ({ ...prev, perks: { ...prev.perks, ...patch } }));

  const addItem = () =>
    setPerks({
      items: [...perks.items, { icon: DEFAULT_PERK_ICON, heading: "", description: "" }],
    });

  const updateItem = (index, patch) =>
    setPerks({
      items: perks.items.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    });

  const removeItem = (index) =>
    setPerks({ items: perks.items.filter((_, i) => i !== index) });

  return (
    <div className="space-y-6">
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 cursor-pointer w-fit">
        <input
          type="checkbox"
          checked={perks.enabled}
          onChange={(e) => setPerks({ enabled: e.target.checked })}
        />
        Show a perks section on this event's page
      </label>

      {perks.enabled && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={fieldLabel}>Section Title</label>
              <Input
                value={perks.title}
                onChange={(e) => setPerks({ title: e.target.value })}
                placeholder="Why attend"
              />
            </div>
            <div>
              <label className={fieldLabel}>Layout</label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setPerks({ theme: "split" })}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
                    perks.theme === "split" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  Split
                </button>
                <button
                  type="button"
                  onClick={() => setPerks({ theme: "centered" })}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer ${
                    perks.theme === "centered" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  Centered
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className={fieldLabel}>Section Description</label>
            <Textarea
              rows={2}
              value={perks.description}
              onChange={(e) => setPerks({ description: e.target.value })}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-gray-700">Perk Items</p>
              <button
                type="button"
                onClick={addItem}
                className="flex items-center gap-1 text-xs font-semibold text-purple-700 hover:text-purple-900 cursor-pointer"
              >
                <Plus size={14} /> Add item
              </button>
            </div>

            {perks.items.length === 0 && (
              <p className="text-xs text-gray-400">No items yet. Add at least one.</p>
            )}

            {perks.items.map((item, index) => {
              const Icon = getPerkIcon(item.icon);
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-3 space-y-2 bg-gray-50/50"
                >
                  <div className="flex items-start gap-2">
                    <div className="relative shrink-0">
                      <select
                        value={item.icon}
                        onChange={(e) => updateItem(index, { icon: e.target.value })}
                        className="appearance-none w-10 h-10 rounded-md border border-gray-200 bg-white text-transparent cursor-pointer"
                      >
                        {PERK_ICON_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <Icon
                        size={18}
                        className="absolute inset-0 m-auto text-purple-700 pointer-events-none"
                      />
                    </div>

                    <Input
                      value={item.heading}
                      onChange={(e) => updateItem(index, { heading: e.target.value })}
                      placeholder="Heading"
                      className="flex-1"
                    />

                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="text-gray-400 hover:text-red-500 p-2 cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <Textarea
                    rows={2}
                    value={item.description}
                    onChange={(e) => updateItem(index, { description: e.target.value })}
                    placeholder="Short description"
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default PerksStep;
