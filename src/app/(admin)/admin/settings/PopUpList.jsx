"use client";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { Spinner } from "@/components/ui/spinner";
import { useAxios } from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import {
  CirclePower,
  Clipboard,
  MousePointerClick,
  Trash,
  View,
} from "lucide-react";
import moment from "moment-timezone";
import Image from "next/image";
import { toast } from "sonner";

const PopUpList = () => {
  const axios = useAxios();

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["popups"],
    queryFn: () => axios.get("/popup"),
  });

  //   Functions
  const handlePatchPopup = async (id, activeStatus) => {
    try {
      const result = await axios.patch("/popup", { id, activeStatus });

      if (result?.data?.ok) {
        return refetch();
      } else {
        return toast.error(result?.data?.message);
      }
    } catch (error) {
      console.error(error);
      return toast.error(error?.message || "An error occured");
    }
  };

  const handleDeletePopup = async (id) => {
    try {
      const result = await axios.delete(
        `/popup?id=${id}&token=${localStorage?.getItem("token")}`
      );

      if (result?.data?.ok) {
        return refetch();
      } else {
        return toast.error(result?.data?.message);
      }
    } catch (error) {
      console.error(error);
      return toast.error(error?.message || "An error occured");
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <h4 className="font-josefin-sans font-semibold text-xl text-left text-zinc-900">
        Published Popups
      </h4>

      <div className="w-full h-full space-y-2 max-h-[80vh] overflow-y-auto">
        {isLoading ? (
          <div className="flex justify-center py-10">
            <Spinner />
          </div>
        ) : isError ? (
          <ErrorMessage error={error} />
        ) : data?.data?.data?.length > 0 ? (
          data?.data?.data?.map((item) => (
            <div
              key={item?._id}
              className={`w-full rounded-sm overflow-hidden bg-gradient-to-r border-2 ${
                item?.active
                  ? "from-green-200 via-green-300 to-green-200 border-green-600"
                  : "from-red-200 via-red-300 to-red-200 border-red-600"
              } text-xs font-montserrat font-medium`}
            >
              <div
                className={`w-full ${
                  item?.active ? "bg-green-500" : "bg-red-500"
                } p-2 text-blue-100`}
              >
                {item?.title}
              </div>

              <div className="w-full grid grid-cols-4 items-start gap-3 p-3">
                <div className="space-y-2">
                  <Image
                    src={item?.image}
                    width={500}
                    height={500}
                    alt={item?.title}
                    className="w-full max-w-[120px] aspect-square object-contain rounded-sm"
                  />
                </div>

                <div className="space-y-2 flex flex-col w-full col-span-3">
                  <span className="text-zinc-500">
                    Created:{" "}
                    <span>
                      {moment(item?.createdAt)
                        .tz("Europe/London")
                        .format("hh:mma, DD/MM/YYYY")}
                    </span>
                  </span>

                  <span className="text-zinc-500">
                    Updated:{" "}
                    <span>
                      {moment(item?.updatedAt)
                        .tz("Europe/London")
                        .format("hh:mma, DD/MM/YYYY")}
                    </span>
                  </span>

                  <span className="text-zinc-500">Key: {item?.key}</span>

                  <span className="text-zinc-500">
                    Link: {item?.link} ({item?.type})
                  </span>

                  <span className="text-zinc-500">
                    Excluded:{" "}
                    {item?.excludedLinks?.map(
                      (l, li) =>
                        `${l}${
                          li !== item?.excludedLinks?.length - 1 ? " • " : ""
                        }`
                    )}
                  </span>

                  <div className="w-full flex flex-row items-center gap-3 justify-start font-semibold">
                    <span className="flex items-center gap-1">
                      <View size={12} /> {item?.views || 0}
                    </span>
                    <span className="flex items-center gap-1">
                      <MousePointerClick size={12} /> {item?.clicks || 0}
                    </span>
                  </div>

                  <div className="flex flex-row w-full items-center gap-2">
                    <button
                      onClick={() => handlePatchPopup(item?._id, !item?.active)}
                      className={`w-full max-w-[114px] flex items-center gap-2 rounded-sm py-2 px-3 text-white font-semibold text-center justify-center cursor-pointer active:scale-[97%] ${
                        item?.active ? "bg-red-600" : "bg-green-600"
                      }`}
                    >
                      <CirclePower size={14} />
                      {item?.active ? "Deactivate" : "Activate"}
                    </button>

                    <button
                      onClick={() => handleDeletePopup(item?._id)}
                      className={`w-full max-w-[114px] flex items-center gap-2 rounded-sm py-2 px-3 font-semibold text-center justify-center cursor-pointer active:scale-[97%] bg-red-900 text-red-400`}
                    >
                      <Trash size={14} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full max-w-sm flex flex-col items-center justify-center gap-2 mt-3 p-5 rounded-lg bg-slate-100 text-xs text-slate-400 font-medium">
            <Clipboard size={55} />
            <p>No popups yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PopUpList;
