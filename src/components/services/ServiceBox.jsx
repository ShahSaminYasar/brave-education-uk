const ServiceBox = ({ title, icon }) => {
  return (
    <div className="py-3 px-4 rounded-2xl border-2 border-orange-500 text-orange-500 text-lg font-medium flex flex-row items-center gap-2 w-fit bg-white">
      {icon}
      {title}
    </div>
  );
};
export default ServiceBox;
