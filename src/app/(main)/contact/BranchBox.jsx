import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BranchBox = ({ image, name, address, mapLink, phone }) => {
  return (
    <div className="w-full max-w-2xl grid grid-cols-12 gap-1 items-center justify-center rounded-sm shadow-xl overflow-hidden border-0 border-zinc-200">
      <Image
        src={image}
        width={400}
        height={400}
        alt={name}
        className="w-full h-full object-cover min-h-[260px] col-span-5"
      />

      <div className="px-7 py-8 flex flex-col items-start gap-4 col-span-7">
        <h5 className="text-lg font-semibold text-zinc-900">{name}</h5>

        <p className="para">{address}</p>

        {mapLink && (
          <Link
            href={mapLink}
            className="block w-fit border-b-2 font-semibold border-zinc-900"
          >
            View on map
          </Link>
        )}

        {phone && (
          <Link
            href={`tel:${phone}`}
            className="flex items-center gap-2 w-fit font-semibold"
          >
            <PhoneCall size={20} /> {phone}
          </Link>
        )}
      </div>
    </div>
  );
};
export default BranchBox;
