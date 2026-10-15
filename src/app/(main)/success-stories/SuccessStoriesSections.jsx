"use client";
import { useSuccessStories } from "@/hooks/useSuccessStories";
import { ChevronDown, Play, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import ReactPlayer from "react-player";
import { Spinner } from "@/components/ui/spinner";
import { SUCCESS_CATEGORIES, getSuccessStoryAlt } from "@/lib/successStories";
import SectionTitle from "@/components/ui/SectionTitle";

const PAGE_SIZE = 8;

const StoryCard = ({ item, onPlay }) => (
  <div className="relative w-full flex items-center justify-center rounded-2xl aspect-[9/15] overflow-hidden">
    {item?.image && (
      <img
        src={item.image}
        alt={getSuccessStoryAlt(item)}
        className="absolute inset-0 w-full h-full object-cover"
      />
    )}

    {item?.video ? (
      <button
        type="button"
        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/30 transition-colors cursor-pointer"
        onClick={() => onPlay(item.video)}
      >
        <Play size={56} className="text-white" />
      </button>
    ) : null}

    {item?.country && (
      <span className="absolute bottom-2 left-2 z-10 rounded-full bg-black/65 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
        {item.country}
      </span>
    )}
  </div>
);

const CategorySection = ({ title, items, onPlay }) => {
  const [visible, setVisible] = useState(PAGE_SIZE);

  if (!items?.length) return null;

  const shown = items.slice(0, visible);
  const hasMore = visible < items.length;

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
      <SectionTitle text={title} align="center" animate={false} />

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {shown.map((item, index) => (
          <motion.div
            key={item?._id || index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.3, delay: (index % PAGE_SIZE) * 0.04 }}
          >
            <StoryCard item={item} onPlay={onPlay} />
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setVisible((v) => v + PAGE_SIZE)}
          className="inline-flex items-center gap-1.5 rounded-3xl border-2 border-[#180d5d] px-6 py-2.5 text-sm font-medium text-[#180d5d] bg-white transition-all hover:scale-[103%]"
        >
          Load more <ChevronDown size={16} />
        </button>
      )}
    </div>
  );
};

const SuccessStoriesSections = () => {
  const [activeVideoLink, setActiveVideoLink] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSetItems = async () => {
      const successStories = await useSuccessStories();
      setItems(successStories);
      setLoading(false);
    };

    getSetItems();
  }, []);

  const grouped = useMemo(
    () =>
      SUCCESS_CATEGORIES.map((category) => ({
        category,
        items: items.filter((item) => (item?.category || "") === category),
      })),
    [items],
  );

  const hasAnyStories = grouped.some((g) => g.items.length > 0);

  return (
    <>
      <div className="bg-white bg-[radial-gradient(#0000001a_1px,#ffffff_1px)] bg-[size:12px_12px] w-full section">
        <section className="w-full max-w-6xl mx-auto">
          {loading ? (
            <div className="min-h-[50vh] w-full grid place-content-center bg-white">
              <Spinner />
            </div>
          ) : !hasAnyStories ? (
            <p className="text-center para py-20">
              No success stories published yet. Check back soon.
            </p>
          ) : (
            <div className="w-full flex flex-col gap-16">
              {grouped.map(({ category, items: categoryItems }) => (
                <CategorySection
                  key={category}
                  title={category}
                  items={categoryItems}
                  onPlay={setActiveVideoLink}
                />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Video Player */}
      <AnimatePresence>
        {activeVideoLink && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-white bg-[radial-gradient(#0000001a_1px,#ffffff_1px)] bg-[size:12px_12px] p-8 flex items-center justify-center flex-col z-[999]"
          >
            <div
              className="bg-transparent absolute top-0 left-0 w-full h-full bottom-0 right-0"
              onClick={() => setActiveVideoLink("")}
            ></div>
            <div className="relative">
              <div className="w-full aspect-[9/16] max-w-md mx-auto rounded-xl overflow-hidden">
                <ReactPlayer
                  src={activeVideoLink}
                  width="100%"
                  height="100%"
                  loop={true}
                  controls={true}
                  playsInline={true}
                  autoPlay={true}
                />
              </div>

              <button
                onClick={() => setActiveVideoLink("")}
                className="text-slate-800 cursor-pointer bg-white/50 aspect-square rounded-full p-2 absolute -top-5 -right-10"
              >
                <X size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SuccessStoriesSections;
