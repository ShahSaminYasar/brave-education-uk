import Script from "next/script";

const IASBadge = ({ className }) => {
  return (
    <>
      <span
        id="iasBadge"
        data-account-id="7213"
        className={className ?? ""}
      ></span>

      <Script
        id="icef-ias-badge"
        src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
        strategy="afterInteractive"
        crossorigin="anonymous"
      />
    </>
  );
};
export default IASBadge;
