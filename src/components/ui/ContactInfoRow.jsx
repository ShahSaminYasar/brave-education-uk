import { Facebook, Instagram, Linkedin, MessageSquare, Music2, Youtube } from "lucide-react";
import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/whatsapp";

/**
 * The "phone number + social icons" block repeated across several form
 * pages (appointment, check-eligibility, visa-application, complaint,
 * contact). Renders just the two inner blocks so each page can keep its own
 * outer grid wrapper classes - drop it in as:
 *
 *   <div className="...grid...">
 *     <ContactInfoRow contact={contact} />
 *   </div>
 */
const ContactInfoRow = ({ contact, label = "Phone Number" }) => {
  const primaryPhone = contact?.phones?.[0];
  const socials = contact?.socials || {};

  const socialLinks = [
    {
      key: "facebook",
      href: socials.facebook,
      icon: Facebook,
      color: "hover:text-blue-800",
    },
    {
      key: "linkedin",
      href: socials.linkedin,
      icon: Linkedin,
      color: "hover:text-sky-600",
    },
    {
      key: "instagram",
      href: socials.instagram,
      icon: Instagram,
      color: "hover:text-pink-600",
    },
    {
      key: "youtube",
      href: socials.youtube,
      icon: Youtube,
      color: "hover:text-red-600",
    },
    {
      key: "whatsapp",
      href: contact?.whatsapp?.dial
        ? buildWhatsAppLink(contact.whatsapp.dial)
        : null,
      icon: MessageSquare,
      color: "hover:text-green-600",
    },
    {
      key: "tiktok",
      href: socials.tiktok,
      icon: Music2,
      color: "hover:text-slate-800",
    },
  ].filter((social) => social.href);

  return (
    <>
      {primaryPhone && (
        <div>
          <span className="font-semibold block">{label}</span>
          <Link href={`tel:${primaryPhone.dial}`}>{primaryPhone.display}</Link>
        </div>
      )}

      <div
        className={`${
          primaryPhone ? "col-span-2" : "col-span-3"
        } flex flex-wrap items-center justify-end gap-2`}
      >
        {socialLinks.map(({ key, href, icon: Icon, color }) => (
          <Link
            key={key}
            href={href}
            target="_blank"
            className={`block aspect-square p-2 rounded-full bg-white/20 text-white/70 hover:bg-white/90 ${color} duration-200`}
          >
            <Icon size={15} />
          </Link>
        ))}
      </div>
    </>
  );
};
export default ContactInfoRow;
