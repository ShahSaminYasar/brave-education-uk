const SectionHeading = ({ eyebrow, title, intro, align = "center", id }) => {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl mb-10 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold text-primary font-josefin-sans">
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className="font-josefin-sans text-3xl md:text-4xl font-semibold text-zinc-900 leading-tight text-balance"
      >
        {title}
      </h2>
      {intro && <p className="text-slate-600 text-pretty">{intro}</p>}
    </div>
  );
};

export default SectionHeading;
