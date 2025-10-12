const SectionTitle = ({ text, subtext, className, style, align = "left" }) => {
  return (
    <div
      className={`w-fit flex flex-col gap-2 mb-2 ${
        align == "left"
          ? "items-start"
          : align == "center"
          ? "items-center"
          : "items-end"
      }`}
    >
      {subtext && (
        <>
          <span
            className={`block w-full text-${align} text-sm font-semibold text-primary`}
          >
            {subtext}
          </span>
          <span
            className={`w-6 h-px bg-slate-200 block ${
              align == "left"
                ? "mx-0"
                : align == "center"
                ? "mx-auto"
                : "ml-auto"
            } -mt-1`}
          ></span>
        </>
      )}
      <h2 className="text-5xl font-montserrat font-semibold bg-gradient-to-br from-slate-600 via-slate-900 to-slate-600 text-transparent bg-clip-text">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
