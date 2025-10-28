"use client";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const inputStyle =
    "p-2 border-b border-zinc-200 block w-full text-sm text-zinc-100 placeholder:text-zinc-200 outline-[0px]";

  return (
    <form className="flex flex-col w-full gap-6">
      <input type="text" placeholder="Your name" className={inputStyle} />
      <input
        type="tel"
        placeholder="Your phone number"
        className={inputStyle}
      />
      <input
        type="email"
        placeholder="Your email address"
        className={inputStyle}
      />
      <textarea
        name="message"
        placeholder="Message"
        className={inputStyle}
        rows={5}
      ></textarea>

      <Button className={"w-full border border-zinc-600"} size={"lg"}>
        Send Message <Send size={18} />
      </Button>
    </form>
  );
};
export default ContactForm;
