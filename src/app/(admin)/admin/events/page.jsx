"use client";
import Link from "next/link";
import AdminPageTitle from "@/components/AdminPageTitle";
import * as motion from "motion/react-client";
import { CalendarClock, Pencil, Plus, Trash2 } from "lucide-react";
import { useAxios } from "@/hooks/useAxios";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const formatDate = (value) => {
  if (!value) return "No date";
  // Raw "YYYY-MM-DDTHH:mm" datetime-local string - displayed as-is (wall
  // clock time), not parsed through the browser's local timezone.
  const [datePart, timePart] = value.split("T");
  if (!datePart) return value;
  const d = new Date(`${datePart}T00:00:00`);
  const dateLabel = d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return timePart ? `${dateLabel}, ${timePart}` : dateLabel;
};

const EventsPage = () => {
  const axiosSelf = useAxios();
  const queryClient = useQueryClient();

  const { data: events, isLoading } = useQuery({
    queryKey: ["events-admin"],
    queryFn: async () => {
      const res = await axiosSelf.get("/events?all=true");
      return res?.data?.data || [];
    },
  });

  const handleToggle = async (event) => {
    try {
      await axiosSelf.patch(
        `/events?id=${event._id}`,
        { published: !event.published },
        { params: { token: localStorage.getItem("token") } },
      );
      toast.success(event.published ? "Unpublished" : "Published");
      queryClient.invalidateQueries(["events-admin"]);
    } catch {
      toast.error("Failed to update");
    }
  };

  const handleDelete = async (event) => {
    if (!confirm(`Delete "${event.title}"? This can't be undone.`)) return;
    try {
      await axiosSelf.delete(
        `/events?id=${event._id}&token=${localStorage.getItem("token")}`,
      );
      toast.success("Event deleted");
      queryClient.invalidateQueries(["events-admin"]);
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <section className="fade p-2 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <AdminPageTitle>Events</AdminPageTitle>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-all active:scale-95 text-sm cursor-pointer"
        >
          <Plus size={18} />
          New Event
        </Link>
      </div>

      {isLoading ? (
        <div className="min-h-[60vh] w-full grid place-content-center">
          <Spinner />
        </div>
      ) : !events?.length ? (
        <p className="text-sm text-gray-400">No events yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <div
                className="relative h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${event?.hero?.bgImage})` }}
              >
                <span
                  className={`absolute top-2 left-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    event.published
                      ? "bg-emerald-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {event.published ? "Published" : "Draft"}
                </span>
              </div>

              <div className="p-3 space-y-2">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-1">
                  {event.title}
                </h3>
                <p className="flex items-center gap-1.5 text-xs text-gray-500">
                  <CalendarClock size={13} /> {formatDate(event.startDate)}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <button
                    onClick={() => handleToggle(event)}
                    className={`relative w-9 h-5 rounded-full transition-colors cursor-pointer ${
                      event.published ? "bg-purple-600" : "bg-gray-300"
                    }`}
                    title={event.published ? "Unpublish" : "Publish"}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 size-4 rounded-full bg-white transition-transform ${
                        event.published ? "translate-x-4" : ""
                      }`}
                    />
                  </button>

                  <div className="flex gap-1">
                    <Link
                      href={`/admin/events/${event.slug}`}
                      className="text-gray-400 hover:text-purple-600 p-1 transition-colors cursor-pointer"
                    >
                      <Pencil size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(event)}
                      className="text-gray-400 hover:text-red-500 p-1 transition-colors cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default EventsPage;
