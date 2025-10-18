const Perk = ({ icon, text }) => {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      {icon}
      <p className="text-2xl text-zinc-900 block text-left font-medium">
        {text}
      </p>
    </div>
  );
};
export default Perk;
