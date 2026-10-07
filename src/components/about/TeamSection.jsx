import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";

/**
 * Renders nothing when there are no team members - the section should never
 * show up empty/broken on the public site.
 */
const TeamSection = ({ members = [] }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="w-full bg-[#fdffff] section">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-10">
        <SectionTitle
          subtext={"The people behind Brave"}
          text={"Our Team"}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member._id}
              className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={member.photo}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute left-3 right-3 bottom-3 rounded-xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-lg">
                <h5 className="text-sm font-bold text-zinc-900 truncate">
                  {member.name}
                </h5>
                {member.role && (
                  <span className="text-xs font-medium text-primary uppercase tracking-wide block truncate">
                    {member.role}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TeamSection;
