import { ClipboardClock, FileUser, UserCheck } from "lucide-react";
import AdminNavItem from "./AdminNavItem";
import Header from "./Header";

const layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 text-sm font-poppins font-medium text-secondary-foreground relative min-h-[300vh]">
        {/* Nav Menu/Sidebar */}
        <nav className="w-full h-screen overflow-y-auto flex flex-col items-start gap-0 border-r border-slate-300 @min-7xl:border-l sticky top-0">
          <AdminNavItem link={"/admin"} text={"Overview"} />
          <AdminNavItem
            link={"/admin/submissions"}
            text={"Form Submissions"}
            submenu={[
              {
                link: "/admin/submissions/appointments",
                text: "Appointments",
                icon: <ClipboardClock size={15} />,
              },
              {
                link: "/admin/submissions/messages",
                text: "Messages",
                icon: <UserCheck size={15} />,
              },
              {
                link: "/admin/submissions/visa-applications",
                text: "Visa Applications",
                icon: <FileUser size={15} />,
              },
            ]}
          />
          <AdminNavItem link={"/admin/settings"} text={"Website Settings"} />
        </nav>

        {/* Main Content */}
        <div className="w-full col-span-5 p-5">{children}</div>
      </main>
    </>
  );
};
export default layout;
