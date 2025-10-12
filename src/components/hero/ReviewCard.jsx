import { US } from "country-flag-icons/react/3x2";

const ReviewCard = ({ name, flag, description, date, className }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-3 flex flex-col gap-2 w-full max-w-[232px] text-sm ${
        className && className
      }`}
    >
      <div className="flex flex-row justify-between items-center gap-3 text-slate-800">
        <span className="font-bold">{name}</span>
        {flag}
      </div>

      <p className="text-slate-500 font-normal text-justify leading-[120%]">
        {description}
      </p>

      <span className="font-semibold">{date}</span>
    </div>
  );
};
export default ReviewCard;
