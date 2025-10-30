const AdminPageTitle = ({ children, className }) => {
  return (
    <h2
      className={`text-[30px] block text-zinc-900 mb-2 ${
        className && className
      }`}
    >
      {children}
    </h2>
  );
};
export default AdminPageTitle;
