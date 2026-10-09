import Image from "next/image";
import Link from "next/link";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import * as motion from "motion/react-client";
import SectionTitle from "@/components/ui/SectionTitle";
import { getPublishedEvents } from "@/lib/events";
import { formatEventDate } from "@/lib/eventDisplay";

export const metadata = {
  title: "Events",
  description:
    "Upcoming events from Brave Education UK - expos, info sessions and workshops for students and visa applicants.",
  keywords: [
    "Brave Education UK events",
    "student events UK",
    "education expo",
  ],
  robots: "index, follow",
};

const page = async () => {
  const events = await getPublishedEvents();

  return (
    <main>
      <div
        style={{
          background:
            "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/page_bg_2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <motion.section
          initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
          animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
          className="py-[100px] w-full max-w-6xl mx-auto px-5 flex flex-col gap-3 items-center justify-center min-h-screen"
        >
          <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
            <SectionTitle
              subtext={"Join Us"}
              text={"Events"}
              align="center"
              style={{ color: "transparent" }}
              animate={false}
            />
          </div>

          <p className="para block text-center w-full max-w-md mx-auto">
            Expos, info sessions and workshops for students and visa applicants.
          </p>
        </motion.section>
      </div>

      <section className="px-5 pb-20 pt-10">
        <div className="max-w-6xl mx-auto">
          {events.length === 0 ? (
            <p className="text-center para py-16">
              No upcoming events right now. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.3, delay: (index % 6) * 0.06 }}
                >
                  <Link
                    href={`/events/${event.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-primary/50"
                  >
                    <div className="relative w-full aspect-[16/10] bg-zinc-100">
                      {event.hero?.bgImage && (
                        <Image
                          src={event.hero.bgImage}
                          alt={event.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div className="flex flex-col gap-2 p-5 flex-1">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                        <CalendarDays size={14} aria-hidden="true" />
                        {formatEventDate(event.startDate)}
                      </span>
                      <h3 className="font-josefin-sans text-lg font-semibold text-zinc-900 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      {event.hero?.description && (
                        <p className="text-sm text-slate-600 line-clamp-2">
                          {event.hero.description}
                        </p>
                      )}
                      <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#221e52] pt-2">
                        View event
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default page;
