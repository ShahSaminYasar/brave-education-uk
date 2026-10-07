const IAABadge = ({ className }) => {
  return (
    <div
      className={className ?? ""}
      style={{ width: "100%", maxWidth: "125px", maxHeight: "190px" }}
    >
      <div
        style={{
          position: "relative",
          paddingBottom: "152%",
          height: "auto",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://cdn2.yoshki.com/badgeframe?10"
          title="IAA Regulated Digital Badge"
          style={{
            overflow: "hidden",
            border: "0px",
            margin: "0px",
            padding: "0px",
            backgroundColor: "transparent",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};
export default IAABadge;
