import Image from "next/image";
import Link from "next/link";

const MobileMenuLink = ({ img, link, callback, name }) => {
  return (
    <li className="block w-full text-2xl sm:text-3xl text-center font-medium text-slate-900 hover:text-slate-50 border-b-2 border-zinc-200 hover:border-zinc-900 duration-100 relative overflow-hidden bg-transparent hover:bg-black/60 group rounded-none hover:rounded-[25px]">
      <Image
        src={img}
        className="absolute top-1/2 -translate-y-1/2 left-0 opacity-0 group-hover:opacity-100 right-0 bottom-0 w-full object-cover -z-10"
        width={1000}
        height={200}
        alt="Decor nav image"
      />
      <Link
        href={link}
        className="block py-3 group-hover:px-5 duration-200 capitalize"
      >
        {name}
      </Link>
    </li>
  );
};
export default MobileMenuLink;
