"use client";
import { use } from "react";
import AdminPageTitle from "@/components/AdminPageTitle";
import EventWizard from "../EventWizard";

const EditEventPage = ({ params }) => {
  const { slug } = use(params);

  return (
    <section className="fade p-2 min-h-screen">
      <AdminPageTitle>Edit Event</AdminPageTitle>
      <EventWizard eventSlug={slug} />
    </section>
  );
};

export default EditEventPage;
