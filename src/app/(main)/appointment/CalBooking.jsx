"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalBooking = ({ event }) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#221e52" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden p-1 sm:p-4">
      <Cal
        calLink={event ? `braveuk/${event}` : "braveuk"}
        style={{ width: "100%", height: "100%", minHeight: "700px", overflow: "auto" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default CalBooking;
