"use client";
import { CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useAxios } from "@/hooks/useAxios";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const axios = useAxios();

  const [sending, setSending] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [token, setToken] = useState(null);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      setSending(true);

      const name = e?.target?.name?.value;
      const email = e?.target?.email?.value;
      const phone = e?.target?.phone?.value;
      const message = e?.target?.message?.value || "";

      if (!name || !email || !phone) {
        return toast.warning("Name, email and phone are required");
      }

      if (!token)
        return toast.error(
          "ReCaptcha failed, please check the 'I'm not a robot' button"
        );

      const res = await axios.post(`/contact?captoken=${token}`, {
        name,
        email,
        phone,
        message,
      });

      if (res?.data?.ok) {
        e.target.reset();
        return setConfirmationModalOpen(true);
      } else {
        console.log(res?.data);
        return toast.error(
          res?.data?.message || "Failed to send message, please try again"
        );
      }
    } catch (error) {
      toast.error(error?.message || "An error occured, please try again");
      console.log(error?.message);
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  const inputStyle =
    "p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px]";

  return (
    <>
      <form onSubmit={handleSendMessage} className="flex flex-col w-full gap-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={inputStyle}
        />
        <input
          type="tel"
          placeholder="Your phone number"
          className={inputStyle}
          name="phone"
          required
        />
        <input
          type="email"
          placeholder="Your email address"
          className={inputStyle}
          name="email"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className={inputStyle}
          rows={5}
        ></textarea>

        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={(value) => {
            if (value) {
              setToken(value);
            }
          }}
        />

        <Button
          type="submit"
          className={"w-full border border-zinc-700 disabled:grayscale-100"}
          size={"lg"}
          disabled={sending || !token}
        >
          {sending ? "Sending..." : "Send Message"} <Send size={18} />
        </Button>

        <p className="block w-full text-center text-[9px] text-white/40 font-normal">
          This site is protected by reCAPTCHA and the Google{" "}
          <Link href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="https://policies.google.com/terms" target="_blank">
            Terms of Service
          </Link>{" "}
          apply.
        </p>
      </form>

      <AnimatePresence>
        {confirmationModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full fixed top-0 left-0 z-[70] bottom-0 right-0 bg-black/30 backdrop-blur-[3px] flex items-center justify-center p-8 font-montserrat"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full max-w-md rounded-xl bg-white shadow-lg p-5 flex flex-col items-center justify-center gap-4"
            >
              <CheckCircle size={50} className="text-green-600" />
              <span className="text-3xl text-green-600 font-semibold font-josefin-sans block text-center -mt-3">
                Thank You
              </span>
              <p className="text-xs font-medium text-zinc-600 block text-center">
                We received your message and our team will get in touch with you
                as soon as possible.
              </p>
              <Button
                variant={"default"}
                className={"w-[120px]"}
                onClick={() => setConfirmationModalOpen(false)}
              >
                Okay
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default ContactForm;
