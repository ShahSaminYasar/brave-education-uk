"use client";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useAxios } from "@/hooks/useAxios";

const ContactForm = () => {
  const axios = useAxios();

  const [sending, setSending] = useState(false);

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

      const res = await axios.post("/contact", {
        name,
        email,
        phone,
        message,
      });

      if (res?.data?.ok) {
        return toast.success("Message sent successfully");
      } else {
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

      <Button
        type="submit"
        className={"w-full border border-zinc-700 disabled:opacity-50"}
        size={"lg"}
        disabled={sending}
      >
        {sending ? "Sending..." : "Send Message"} <Send size={18} />
      </Button>
    </form>
  );
};
export default ContactForm;
