"use client";
import AdminPageTitle from "@/components/AdminPageTitle";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Copy } from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";

const page = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["messages"],
    queryFn: () => axios.get(`/contact?token=${localStorage.getItem("token")}`),
  });

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <AdminPageTitle>Messages</AdminPageTitle>

      {isLoading ? (
        <div className="py-10 flex justify-center w-full">
          <Spinner />
        </div>
      ) : isError ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="fade-up w-full grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-900 text-xs md:text-sm">
          {data?.data?.data?.map((item) => (
            <div
              key={item?._id}
              className="w-full bg-white border border-slate-300 grid grid-cols-1 gap-0 rounded-lg overflow-hidden group"
            >
              <div className="w-full bg-gradient-to-r from-purple-800 via-purple-900 to-purple-800 text-white p-3 flex items-center justify-between gap-2">
                <span>{item?.name}</span>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs font-light italic">
                    {moment(item?.createdAt)
                      .tz("Europe/London")
                      .format("hh:mma, DD/MM/YYYY")}{" "}
                    (GMT)
                  </span>

                  <button
                    className="cursor-pointer text-slate-200"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Contact Message Information
(${moment(item?.createdAt)
                          .tz("Europe/London")
                          .format("hh:mma, DD/MM/YYYY")}(GMT))
------------------------
Name: ${item?.name}
Phone: ${item?.phone}
Email: ${item?.email}
Message: ${item?.message || "---"}`
                      );
                      toast("Copied to clipboard", {
                        icon: <Copy size={12} />,
                      });
                    }}
                  >
                    <Copy size={15} />
                  </button>
                </div>
              </div>

              <div className="w-full bg-white group-hover:bg-gradient-to-br from-white via-sky-50 to-white px-5 pb-3">
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Phone</span>
                  {item?.phone ? (
                    <Link
                      href={`tel:${item?.phone}`}
                      target="_blank"
                      className="text-primary hover:text-secondary-foreground"
                    >
                      {item?.phone}
                    </Link>
                  ) : (
                    <span>---</span>
                  )}
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Email</span>
                  <Link
                    href={`mailto:${item?.email}`}
                    target="_blank"
                    className="text-primary hover:text-secondary-foreground"
                  >
                    {item?.email}
                  </Link>
                </div>

                <div className="w-full flex items-center justify-between gap-2 py-3">
                  <span className="text-zinc-700 block text-nowrap">
                    Message
                  </span>
                  <p className="block text-right text-zinc-400">
                    {item?.message}
                  </p>
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
