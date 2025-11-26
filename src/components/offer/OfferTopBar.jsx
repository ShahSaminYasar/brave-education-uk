"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const Completionist = () => <span>00D 00H 00M 00S</span>;

const OfferTopBar = () => {
  const [countdownDate, setCountdownDate] = useState(null);

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    setCountdownDate(tomorrow);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return countdownDate ? (
        <span>
          {days}D {hours}H {minutes}M {seconds}S
        </span>
      ) : (
        <Completionist />
      );
    }
  };

  return (
    <Link
      href={"/courses"}
      className="w-full h-[30px] shine relative flex items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(240, 34, 34, 1) 0%, rgba(240, 34, 34, 1) 40%, rgba(250, 70, 70, 1) 45%, rgba(250, 70, 70, 1) 50%, rgba(240, 34, 34, 1) 55%, rgba(240, 34, 34, 1) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "border-box",
      }}
    >
      <div
        className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          backgroundImage: "url(/sale.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-x",
        }}
      ></div>

      <div className="relative z-10 w-fit h-full bg-gradient-to-r from-[rgba(240,34,34, 0)] via-[rgba(240,34,34,1)] to-[rgba(240,34,34,0)] rounded-sm px-10 text-xs font-medium text-white flex items-center justify-center">
        <p>Claim 40% off all courses</p>
        <div className="ml-2 w-fit px-1 py-0 rounded-sm min-w-[100px] flex items-center justify-center">
          {countdownDate && (
            <Countdown date={countdownDate} renderer={renderer} />
          )}
        </div>
      </div>
    </Link>
  );
};
export default OfferTopBar;
