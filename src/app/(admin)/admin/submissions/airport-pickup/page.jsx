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
  Calendar,
  User,
  MapPin,
  Plane,
  Luggage,
} from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";

const page = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["airport-reservations"],
    queryFn: () =>
      axios.get(
        `/airport-pickup-reservation?token=${localStorage.getItem("token")}`
      ),
  });

  const copyToClipboard = (item) => {
    navigator.clipboard.writeText(
      `Booking Information
(${moment(item?.createdAt)
        .tz("Europe/London")
        .format("hh:mma, DD/MM/YYYY")}(GMT))
------------------------
Name: ${item?.firstName} ${item?.lastName}
Phone: ${item?.phone}
Email: ${item?.email}
Flight: ${item?.flightNumber}
Arrival: ${item?.arrivalDate} at ${item?.arrivalTime}
Airport: ${item?.airport}
Destination: ${item?.destination}
Passengers: ${item?.passengerNumber}
Luggage: ${item?.luggageNumber}
Special Requirements: ${item?.specialRequirements || "None"}
Status: ${item?.confirmed ? "Confirmed" : "Pending"}`
    );
    toast.success("Copied to clipboard", {
      icon: <Copy size={16} />,
    });
  };

  const formatDate = (date) => {
    return moment(date).tz("Europe/London").format("hh:mma, DD/MM/YYYY");
  };

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <div className="flex items-center justify-between w-full">
        <AdminPageTitle>Bookings</AdminPageTitle>
        {data?.data?.data?.length > 0 && (
          <span className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
            {data.data.data.length} booking
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
          <h3 className="text-lg font-medium text-zinc-700">No bookings yet</h3>
          <p className="text-zinc-500 mt-2">
            Customer bookings will appear here.
          </p>
        </div>
      ) : (
        <div className="fade-up w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data?.data?.data?.map((item, index) => (
            <div
              key={item?._id}
              className="w-full bg-white border border-zinc-300 rounded-xl shadow-none hover:shadow-md transition-all duration-300 overflow-hidden group hover:border-zinc-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div
                className={`w-full bg-gradient-to-r ${
                  item?.confirmed
                    ? "from-green-600 to-green-700"
                    : "from-amber-600 to-amber-700"
                } text-white p-4`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <User size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold truncate">
                        {item?.firstName} {item?.lastName}
                      </h3>
                      <div className="flex items-center gap-1 text-white/80 text-xs mt-1">
                        <Calendar size={12} />
                        <span>{formatDate(item?.createdAt)} (GMT)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full ${
                        item?.confirmed ? "bg-green-500" : "bg-amber-500"
                      }`}
                    >
                      {item?.confirmed ? "Confirmed" : "Pending"}
                    </span>
                    <button
                      onClick={() => copyToClipboard(item)}
                      className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 group/copy cursor-pointer active:scale-90"
                      title="Copy booking details"
                    >
                      <Copy
                        size={16}
                        className="group-hover/copy:scale-110 transition-transform"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3 bg-white">
                {/* Flight Details */}
                <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
                  <Plane size={18} className="text-zinc-500 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-zinc-500 block">Flight</span>
                    <span className="text-sm font-medium text-zinc-700">
                      {item?.flightNumber}
                    </span>
                  </div>
                </div>

                {/* Arrival Details */}
                <div className="p-2 rounded-lg bg-zinc-50">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar
                      size={16}
                      className="text-zinc-500 flex-shrink-0"
                    />
                    <span className="text-xs font-medium text-zinc-700">
                      Arrival
                    </span>
                  </div>
                  <div className="pl-6">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-zinc-600">{item?.arrivalDate}</span>
                      <span className="font-medium text-zinc-800">
                        {item?.arrivalTime}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {item?.airport}
                    </div>
                  </div>
                </div>

                {/* Destination */}
                <div className="p-2 rounded-lg bg-zinc-50">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={16} className="text-zinc-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-zinc-700">
                      Destination
                    </span>
                  </div>
                  <div className="pl-6">
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {item?.destination}
                    </p>
                  </div>
                </div>

                {/* Passenger & Luggage Info */}
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
                    <User size={18} className="text-zinc-500 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-zinc-500 block">
                        Passengers
                      </span>
                      <span className="text-sm font-medium text-zinc-700">
                        {item?.passengerNumber}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
                    <Luggage
                      size={18}
                      className="text-zinc-500 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-zinc-500 block">
                        Luggage
                      </span>
                      <span className="text-sm font-medium text-zinc-700">
                        {item?.luggageNumber}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-zinc-200 pt-3 mt-2">
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
                        <span className="text-sm text-zinc-400">
                          Not provided
                        </span>
                      )}
                    </div>
                  </div>

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

                {/* Special Requirements */}
                {item?.specialRequirements && (
                  <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-amber-700">
                        Special Requirements
                      </span>
                    </div>
                    <div className="pl-2">
                      <p className="text-sm text-amber-600 leading-relaxed">
                        {item?.specialRequirements}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default page;
