const ServiceBox = ({ title, icon, id = 0 }) => {
  return (
    <div
      className="p-px rounded-3xl bg-gradient-to-r from-[#59caff] via-[#f1fbff] to-[#59caff] service-card"
      style={{
        animationDelay: `${id}s`,
      }}
    >
      <div className="py-[5px] md:py-3 px-2 md:px-4 rounded-3xl text-[#15154d] text-[9px] sm:text-xs md:text-sm font-medium flex flex-row items-center gap-2 w-fit bg-white/90 text-nowrap">
        {icon}
        {title}
      </div>
    </div>
  );
};
export default ServiceBox;
