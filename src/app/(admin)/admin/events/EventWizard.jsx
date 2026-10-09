"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAxios } from "@/hooks/useAxios";
import { Spinner } from "@/components/ui/spinner";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { emptyEventForm, mergeEventIntoForm } from "@/lib/eventForm";
import HeroStep from "./steps/HeroStep";
import PerksStep from "./steps/PerksStep";
import ContentStep from "./steps/ContentStep";
import CtaStep from "./steps/CtaStep";
import GalleryStep from "./steps/GalleryStep";

const STEPS = [
  { key: "hero", label: "Hero", Component: HeroStep },
  { key: "perks", label: "Perks", Component: PerksStep },
  { key: "content", label: "Content", Component: ContentStep },
  { key: "cta", label: "CTA", Component: CtaStep },
  { key: "gallery", label: "Gallery", Component: GalleryStep },
];

const EventWizard = ({ eventSlug }) => {
  const router = useRouter();
  const axiosSelf = useAxios();
  const isEdit = !!eventSlug;

  const [formData, setFormData] = useState(emptyEventForm());
  // The doc's Mongo _id, needed for PUT (slug is stable and used for
  // *loading* the event, but mutations address it by _id, same as every
  // other admin route in this codebase).
  const [eventDbId, setEventDbId] = useState(null);
  const [loadingEvent, setLoadingEvent] = useState(isEdit);
  const [stepIndex, setStepIndex] = useState(0);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isEdit) return;

    const load = async () => {
      try {
        const res = await axiosSelf.get(`/events?slug=${eventSlug}`);
        const event = res?.data?.data;
        setFormData(mergeEventIntoForm(event));
        setEventDbId(event?._id);
      } catch {
        toast.error("Failed to load event");
      } finally {
        setLoadingEvent(false);
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventSlug]);

  const validateBeforeSave = () => {
    if (!formData.title.trim()) {
      toast.error("Title is required");
      setStepIndex(0);
      return false;
    }
    if (!formData.hero.bgImage) {
      toast.error("Hero background image is required");
      setStepIndex(0);
      return false;
    }
    if (!formData.startDate) {
      toast.error("Start date is required");
      setStepIndex(0);
      return false;
    }
    return true;
  };

  const handleSave = async (publish) => {
    if (!validateBeforeSave()) return;

    const payload = { ...formData, published: publish };
    const config = { params: { token: localStorage.getItem("token") } };

    try {
      setSaving(true);
      if (isEdit) {
        await axiosSelf.put(`/events?id=${eventDbId}`, payload, config);
        toast.success("Event updated");
      } else {
        await axiosSelf.post(`/events`, payload, config);
        toast.success(publish ? "Event published" : "Event saved as draft");
      }
      router.push("/admin/events");
    } catch {
      toast.error("Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  if (loadingEvent) {
    return (
      <div className="min-h-[50vh] grid place-content-center">
        <Spinner />
      </div>
    );
  }

  const { Component } = STEPS[stepIndex];
  const isLastStep = stepIndex === STEPS.length - 1;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Stepper */}
      <div className="flex items-center gap-1 mb-6 overflow-x-auto pb-1">
        {STEPS.map((step, index) => (
          <button
            key={step.key}
            type="button"
            onClick={() => setStepIndex(index)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              index === stepIndex
                ? "bg-purple-600 text-white"
                : index < stepIndex
                  ? "bg-purple-50 text-purple-700"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            <span
              className={`grid place-content-center size-5 rounded-full text-[10px] ${
                index === stepIndex
                  ? "bg-white text-purple-700"
                  : index < stepIndex
                    ? "bg-purple-600 text-white"
                    : "bg-gray-300 text-white"
              }`}
            >
              {index < stepIndex ? <Check size={12} /> : index + 1}
            </span>
            {step.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <Component formData={formData} setFormData={setFormData} />
      </div>

      {/* Navigation + save */}
      <div className="flex flex-wrap items-center justify-between mt-6 gap-3">
        <button
          type="button"
          onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
          disabled={stepIndex === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        >
          <ArrowLeft size={16} /> Back
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave(false)}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 disabled:opacity-50 cursor-pointer whitespace-nowrap"
          >
            Save as Draft
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => handleSave(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-50 cursor-pointer"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : null}
            {isEdit ? "Save & Publish" : "Publish Event"}
          </button>

          {!isLastStep && (
            <button
              type="button"
              onClick={() => setStepIndex((i) => Math.min(STEPS.length - 1, i + 1))}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-gray-900 text-white hover:bg-black cursor-pointer"
            >
              Next <ArrowRight size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventWizard;
