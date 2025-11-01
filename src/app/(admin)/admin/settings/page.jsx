"use client";
import AdminPageTitle from "@/components/AdminPageTitle";
import PopUpUploadForm from "./PopUpUploadForm";
import PopUpList from "./PopUpList";

const page = () => {
  return (
    <section className="fade">
      <AdminPageTitle>Featured Popup</AdminPageTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PopUpUploadForm />
        <PopUpList />
      </div>
    </section>
  );
};
export default page;
