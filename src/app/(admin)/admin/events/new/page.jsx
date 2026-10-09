"use client";
import AdminPageTitle from "@/components/AdminPageTitle";
import EventWizard from "../EventWizard";

const NewEventPage = () => {
  return (
    <section className="fade p-2 min-h-screen">
      <AdminPageTitle>New Event</AdminPageTitle>
      <EventWizard />
    </section>
  );
};

export default NewEventPage;
