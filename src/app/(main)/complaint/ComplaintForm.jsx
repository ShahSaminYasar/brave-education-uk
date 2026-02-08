"use client";
import { Button } from "@/components/ui/button";
import { useAxios } from "@/hooks/useAxios";
import { CheckCircle, Send, MessageSquareText } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

const ComplaintForm = () => {
  const axios = useAxios();
  const [processing, setProcessing] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [token, setToken] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const form = new FormData(e.target);

      const data = {
        text: form.get("text"),
      };

      if (!data.text || data.text.toString().length < 10) {
        return toast.error("Please provide a more detailed description.");
      }

      if (!token)
        return toast.error(
          "ReCaptcha failed, please check the 'I'm not a robot' button",
        );

      const res = await axios.post(`/complaint?captoken=${token}`, data);

      if (res?.data?.ok) {
        setConfirmationModalOpen(true);
        e.target.reset();
      } else {
        toast.error("Failed to submit. Please try again later.");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "An error occurred.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
        <div className="space-y-3">
          <label
            htmlFor="text"
            className="text-white/80 text-sm font-medium flex items-center gap-2"
          >
            <MessageSquareText size={16} /> Describe your issue *
          </label>
          <textarea
            name="text"
            required
            rows={6}
            placeholder="Tell us what happened..."
            className="p-4 border border-white/20 rounded-xl block w-full text-sm text-zinc-100 placeholder:text-white/30 outline-none bg-white/5 focus:bg-white/10 focus:border-white/40 transition-all resize-none"
          />
        </div>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={(value) => {
            if (value) {
              setToken(value);
            }
          }}
        />

        <Button
          disabled={processing}
          className="w-full md:w-fit px-12 border border-white/20 bg-white/10 hover:bg-white text-white hover:text-black mt-4 disabled:opacity-50 transition-all"
          size="lg"
        >
          {processing ? "Submitting..." : "Submit Complaint"}
          <Send size={18} className="ml-2" />
        </Button>

        <p className="text-white/40 text-[11px]">
          By submitting, you agree that this feedback will be used to improve
          our services.
        </p>
      </form>

      {/* Success Modal */}
      <AnimatePresence>
        {confirmationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-md flex items-center justify-center p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 20 }}
              className="w-full max-w-md rounded-2xl bg-white p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Received!</h3>
              <p className="text-sm text-zinc-500">
                Thank you for bringing this to our attention. We have received
                your complaint and will investigate it thoroughly.
              </p>
              <Button
                className="w-full mt-2"
                onClick={() => setConfirmationModalOpen(false)}
              >
                Close
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ComplaintForm;
