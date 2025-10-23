const Perk = ({ icon, text }) => {
  return (
    <div className="flex sm:flex-row items-center justify-start gap-4">
      <div className="w-[30px]">{icon}</div>
      <p className="text-xl sm:text-2xl text-zinc-900 block text-left font-medium">
        {text}
      </p>
    </div>
  );
};
export default Perk;
