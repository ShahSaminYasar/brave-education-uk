const ServiceBox = ({ title, icon }) => {
  return (
    <div className="py-3 px-4 rounded-2xl border-2 border-[#15154d] text-[#15154d] text-sm font-medium flex flex-row items-center gap-2 w-fit bg-white text-nowrap">
      {icon}
      {title}
    </div>
  );
};
export default ServiceBox;
