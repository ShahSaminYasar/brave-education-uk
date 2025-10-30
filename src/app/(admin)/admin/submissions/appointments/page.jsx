"use client";
import AdminPageTitle from "@/components/AdminPageTitle";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import moment from "moment-timezone";
import Link from "next/link";

const page = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["appointments"],
    queryFn: () => axios.get("/appointment"),
  });

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <AdminPageTitle>Appointments</AdminPageTitle>

      {isLoading ? (
        <div className="py-10 flex items-center w-full">
          <Spinner />
        </div>
      ) : isError ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="fade-up w-full grid grid-cols-1 md:grid-cols-2 gap-3 text-zinc-900">
          {data?.data?.data?.map((item) => (
            <div
              key={item?._id}
              className="w-full bg-white border border-slate-200 grid grid-cols-1 gap-0 rounded-lg overflow-hidden"
            >
              <div className="w-full bg-secondary-foreground text-white p-3 flex items-center justify-between gap-2">
                <span>{item?.name}</span>
              </div>

              <div className="w-full bg-white px-5 pb-3">
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Phone</span>
                  {item?.phone ? (
                    <Link href={`tel:${item?.phone}`} target="_blank">
                      {item?.phone}
                    </Link>
                  ) : (
                    <span>---</span>
                  )}
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Email</span>
                  <Link href={`mailto:${item?.email}`} target="_blank">
                    {item?.email}
                  </Link>
                </div>

                <div className="w-full flex items-center justify-between gap-2 py-3 border-b border-zinc-200">
                  <span className="text-zinc-700 block text-nowrap">
                    Message
                  </span>
                  <p>{item?.message}</p>
                </div>

                <div className="w-full flex items-center justify-between gap-2 py-3 border-b border-zinc-200">
                  <span className="text-zinc-700 block text-nowrap">
                    Apointment date
                  </span>
                  <span>
                    {moment(item?.datetime)
                      .tz("Europe/London")
                      .format("DD MMMM YYYY")}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 py-3  border-zinc-200">
                  <span className="text-zinc-700 block text-nowrap">
                    Apointment time
                  </span>
                  <span>
                    {moment(item?.datetime)
                      .tz("Europe/London")
                      .format("hh:mma")}
                  </span>
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
