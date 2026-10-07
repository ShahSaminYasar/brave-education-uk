import { Headset } from "lucide-react";
import Link from "next/link";

const SupportButton = ({ contact }) => {
  const dial = contact?.phones?.[0]?.dial || "+4408009991257";

  return (
    <Link
      href={`tel:${dial}`}
      className="block fixed z-40 bottom-5 right-5 aspect-square rounded-full p-3 bg-gradient-to-br from-red-400 via-red-500 to-red-400 text-white shadow-xl border-2 border-white/300 hover:rotate-[10deg] hover:shadow-lg hover:scale-105 transition-all duration-100"
    >
      <Headset size={22} />
    </Link>
  );
};
export default SupportButton;
