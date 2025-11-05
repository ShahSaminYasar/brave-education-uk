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
  User,
  Link2Icon,
} from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";

const page = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["leads"],
    queryFn: () => axios.get(`/lead?token=${localStorage.getItem("token")}`),
  });

  const copyToClipboard = (item) => {
    navigator.clipboard.writeText(
      `Lead Information
(${item?.source})
(${moment(item?.createdAt)
        .tz("Europe/London")
        .format("hh:mma, DD/MM/YYYY")}(GMT))
------------------------
Name: ${item?.name}
Phone: ${item?.phone}
Email: ${item?.email}
    `
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
        <AdminPageTitle>Leads</AdminPageTitle>
        {data?.data?.data?.length > 0 && (
          <span className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
            {data.data.data.length} lead
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
          <MessageSquare className="mx-auto h-12 w-12 text-zinc-300 mb-4" />
          <h3 className="text-lg font-medium text-zinc-700">No messages yet</h3>
          <p className="text-zinc-500 mt-2">
            Lead submissions will appear here.
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
              <div className="w-full bg-gradient-to-r from-rose-600 to-rose-700 text-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <User size={16} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold truncate">{item?.name}</h3>
                      <div className="flex items-center gap-1 text-purple-200 text-xs mt-1">
                        <Calendar size={12} />
                        <span>{formatDate(item?.createdAt)} (GMT)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item)}
                    className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 group/copy cursor-pointer active:scale-90"
                    title="Copy message details"
                  >
                    <Copy
                      size={16}
                      className="group-hover/copy:scale-110 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3 bg-white">
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
                      <span className="text-sm text-zinc-400">
                        Not provided
                      </span>
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

                {/* Source */}
                <div className="flex items-center gap-3 p-2 rounded-lg bg-zinc-50 hover:bg-blue-50 transition-colors duration-200">
                  <Link2Icon
                    size={18}
                    className="text-zinc-500 flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <span className="text-xs text-zinc-500 block">Source</span>
                    <p className="text-sm font-medium text-slate-600 hover:text-slate-700 truncate block">
                      {item?.source}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default page;
