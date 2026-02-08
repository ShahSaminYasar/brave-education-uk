"use client";
import AdminPageTitle from "@/components/AdminPageTitle";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  Copy,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  User,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";

const page = () => {
  const axios = useAxios();
  const [expandedSections, setExpandedSections] = useState({
    today: true,
    upcoming: true,
    past: true,
  });

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      axios.get(`/appointment?token=${localStorage.getItem("token")}`),
  });

  const copyToClipboard = (item) => {
    navigator.clipboard.writeText(
      `Appointment Information
(${moment(item?.createdAt)
        .tz("Europe/London")
        .format("hh:mma, DD/MM/YYYY")}(GMT))
------------------------
Name: ${item?.name}
Phone: ${item?.phone}
Email: ${item?.email}
Message: ${item?.message || "---"}
Appointment date: ${moment(item?.datetime).format("DD MMMM YYYY")}
Appointment time: ${moment(item?.datetime).format("hh:mma")}`,
    );
    toast.success("Appointment details copied to clipboard", {
      icon: <Copy size={16} />,
    });
  };

  const formatDate = (date) => {
    return moment(date).tz("Europe/London").format("hh:mma, DD MMM YYYY");
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Group appointments by status
  const groupedAppointments = data?.data?.data?.reduce(
    (groups, item) => {
      const now = moment();
      const appointmentTime = moment(item?.datetime);
      const isToday = appointmentTime.isSame(now, "day");
      const isPast = appointmentTime.isBefore(now, "minute");

      if (isToday) {
        groups.today.push(item);
      } else if (isPast) {
        groups.past.push(item);
      } else {
        groups.upcoming.push(item);
      }

      return groups;
    },
    { today: [], upcoming: [], past: [] },
  );

  // Sort appointments within each group
  if (groupedAppointments) {
    // Today: sort by time (soonest first)
    groupedAppointments.today.sort((a, b) =>
      moment(a.datetime).diff(moment(b.datetime)),
    );
    // Upcoming: sort by date (soonest first)
    groupedAppointments.upcoming.sort((a, b) =>
      moment(a.datetime).diff(moment(b.datetime)),
    );
    // Past: sort by date (most recent first)
    groupedAppointments.past.sort((a, b) =>
      moment(b.datetime).diff(moment(a.datetime)),
    );
  }

  const SectionHeader = ({
    title,
    count,
    color,
    icon,
    isExpanded,
    onToggle,
  }) => (
    <div
      className={`flex items-center justify-between p-4 cursor-pointer rounded-t-lg ${color} transition-colors duration-200`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <h3 className="font-semibold text-white">{title}</h3>
          <p className="text-white/80 text-sm">
            {count} appointment{count !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {isExpanded ? (
          <ChevronUp size={20} className="text-white" />
        ) : (
          <ChevronDown size={20} className="text-white" />
        )}
      </div>
    </div>
  );

  const AppointmentCard = ({ item, index, status }) => (
    <div
      className="w-full bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group hover:border-zinc-300"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="bg-white/20 p-2 rounded-lg">
              <User size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold truncate">{item?.name}</h3>
              <div className="flex items-center gap-1 text-indigo-200 text-xs mt-1">
                <Calendar size={12} />
                <span>Submitted: {formatDate(item?.createdAt)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              copyToClipboard(item);
            }}
            className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 group/copy active:scale-90 cursor-pointer"
            title="Copy appointment details"
          >
            <Copy
              size={16}
              className="group-hover/copy:scale-110 transition-transform"
            />
          </button>
        </div>

        {/* Appointment Time Badge */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
            <Clock size={14} />
            <span className="text-xs font-medium">
              {moment(item?.datetime).format("DD MMM YYYY • hh:mma")}
            </span>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${
              status === "today"
                ? "bg-red-100 text-red-700"
                : status === "upcoming"
                  ? "bg-green-100 text-green-700"
                  : "bg-zinc-100 text-zinc-600"
            }`}
          >
            {status === "today"
              ? "Today"
              : status === "upcoming"
                ? "Upcoming"
                : "Completed"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3 bg-white">
        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-2">
          {/* Phone */}
          <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
            <Phone size={18} className="text-zinc-500 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-xs text-zinc-500 block">Phone</span>
              {item?.phone ? (
                <Link
                  href={`tel:${item?.phone}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 truncate block"
                >
                  {item?.phone}
                </Link>
              ) : (
                <span className="text-sm text-zinc-400">Not provided</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
            <Mail size={18} className="text-zinc-500 flex-shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-xs text-zinc-500 block">Email</span>
              <Link
                href={`mailto:${item?.email}`}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 truncate block"
              >
                {item?.email}
              </Link>
            </div>
          </div>
        </div>

        {/* Message */}
        {item?.message && (
          <div className="p-2">
            <div className="flex items-start gap-2 mb-2">
              <MessageSquare
                size={16}
                className="text-zinc-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-xs font-medium text-zinc-700">Message</span>
            </div>
            <div className="pl-6">
              <p className="text-sm text-zinc-600 leading-relaxed bg-zinc-50 p-3 rounded-lg border border-zinc-200">
                {item?.message}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <div className="flex items-center justify-between w-full">
        <AdminPageTitle>Appointments</AdminPageTitle>
        {data?.data?.data?.length > 0 && (
          <span className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
            {data.data.data.length} total appointment
            {data.data.data.length !== 1 ? "s" : ""}
          </span>
        )}
      </div>

      {isLoading ? (
        <div className="py-16 flex justify-center w-full">
          <Spinner size="lg" />
        </div>
      ) : isError ? (
        <ErrorMessage error={error} />
      ) : data?.data?.data?.length === 0 ? (
        <div className="w-full py-16 text-center">
          <Calendar className="mx-auto h-12 w-12 text-zinc-300 mb-4" />
          <h3 className="text-lg font-medium text-zinc-700">
            No appointments yet
          </h3>
          <p className="text-zinc-500 mt-2">
            Scheduled appointments will appear here.
          </p>
        </div>
      ) : (
        <div className="fade-up w-full space-y-6">
          {/* Today's Appointments */}
          {groupedAppointments.today.length > 0 && (
            <div className="border-2 border-red-200 rounded-lg bg-red-50/30 overflow-hidden">
              <SectionHeader
                title="Today"
                count={groupedAppointments.today.length}
                color="bg-gradient-to-r from-red-700 via-red-600 to-red-700"
                icon={<Clock size={24} className="text-white" />}
                isExpanded={expandedSections.today}
                onToggle={() => toggleSection("today")}
              />
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-700 ease-in-out ${
                  expandedSections?.today
                    ? "max-h-[100vh] overflow-y-auto p-4"
                    : "p-0 max-h-[0px] overflow-y-hidden"
                }`}
              >
                {groupedAppointments.today.map((item, index) => (
                  <AppointmentCard
                    key={item._id}
                    item={item}
                    index={index}
                    status="today"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Upcoming Appointments */}
          {groupedAppointments.upcoming.length > 0 && (
            <div className="border-2 border-green-200 rounded-lg bg-green-50/30 overflow-hidden">
              <SectionHeader
                title="Upcoming"
                count={groupedAppointments.upcoming.length}
                color="bg-gradient-to-r from-green-700 via-green-600 to-green-700"
                icon={<Calendar size={24} className="text-white" />}
                isExpanded={expandedSections.upcoming}
                onToggle={() => toggleSection("upcoming")}
              />
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-700 ease-in-out ${
                  expandedSections?.upcoming
                    ? "max-h-[100vh] overflow-y-auto p-4"
                    : "p-0 max-h-[0px] overflow-y-hidden"
                }`}
              >
                {groupedAppointments.upcoming.map((item, index) => (
                  <AppointmentCard
                    key={item._id}
                    item={item}
                    index={index}
                    status="upcoming"
                  />
                ))}
              </div>
            </div>
          )}

          {/* Past Appointments */}
          {groupedAppointments.past.length > 0 && (
            <div className="border-2 border-zinc-200 rounded-lg bg-zinc-50/30 overflow-hidden">
              <SectionHeader
                title="Completed"
                count={groupedAppointments.past.length}
                color="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800"
                icon={<Calendar size={24} className="text-white" />}
                isExpanded={expandedSections.past}
                onToggle={() => toggleSection("past")}
              />
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-4 transition-all duration-700 ease-in-out ${
                  expandedSections?.past
                    ? "max-h-[100vh] overflow-y-auto p-4"
                    : "p-0 max-h-[0px] overflow-y-hidden"
                }`}
              >
                {groupedAppointments.past.map((item, index) => (
                  <AppointmentCard
                    key={item._id}
                    item={item}
                    index={index}
                    status="past"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default page;
