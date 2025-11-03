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
    queryKey: ["visa-applications"],
    queryFn: () =>
      axios.get(`/visa-application?token=${localStorage.getItem("token")}`),
  });

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <AdminPageTitle>Visa Applications</AdminPageTitle>

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
              <div className="w-full bg-gradient-to-r from-teal-800 via-teal-900 to-teal-800 text-white p-3 flex items-center justify-between gap-2">
                <span>
                  {item?.firstName} {item?.lastName}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-slate-400 text-xs font-light italic">
                    {moment(item?.createdAt)
                      ?.tz("Europe/London")
                      ?.format("hh:mma, DD/MM/YYYY") || "Unknown date"}{" "}
                    (GMT)
                  </span>

                  <button
                    className="cursor-pointer text-slate-200"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Visa Application Information
========================
Personal Information:
------------------------
First Name: ${item?.firstName || "---"}
Last Name: ${item?.lastName || "---"}
Date of Birth: ${item?.dob ? moment(item.dob).format("DD MMMM YYYY") : "---"}
Phone: ${item?.phone || "---"}
Email: ${item?.email || "---"}
NID Number: ${item?.nidNumber || "---"}
Bangladesh Address: ${item?.bdAddress || "---"}
Married: ${item?.married ? "Yes" : "No"}

Passport Details:
------------------------
Passport Number: ${item?.passportNumber || "---"}
Passport Issue Date: ${
                          item?.passportIssueDate
                            ? moment(item.passportIssueDate).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Passport Expiry Date: ${
                          item?.passportExpiryDate
                            ? moment(item.passportExpiryDate).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Issue Authority: ${item?.issueAuthority || "---"}

Spouse Information:
------------------------
Spouse Name: ${item?.spouse?.name || "---"}
Spouse DOB: ${
                          item?.spouse?.dob
                            ? moment(item.spouse.dob).format("DD MMMM YYYY")
                            : "---"
                        }
Spouse Passport: ${item?.spouse?.passportNumber || "---"}
Spouse Passport Issue: ${
                          item?.spouse?.passportIssueDate
                            ? moment(item.spouse.passportIssueDate).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Spouse Passport Expiry: ${
                          item?.spouse?.passportExpiryDate
                            ? moment(item.spouse.passportExpiryDate).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }

Course Information:
------------------------
Course Name: ${item?.course?.name || "---"}
Course Start Date: ${
                          item?.course?.startDate
                            ? moment(item.course.startDate).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Course End Date: ${
                          item?.course?.endDate
                            ? moment(item.course.endDate).format("DD MMMM YYYY")
                            : "---"
                        }

Sponsorship & Bank:
------------------------
Sponsor Number: ${item?.sponsorNumber || "---"}
CAS/COS Number: ${item?.casCosNumber || "---"}
Bank Name: ${item?.bankName || "---"}

UK Information:
------------------------
UK Address: ${item?.ukAddress || "---"}

Parents Information:
------------------------
Mother's Name: ${item?.parents?.mother || "---"}
Mother's DOB: ${
                          item?.parents?.motherDob
                            ? moment(item.parents.motherDob).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Father's Name: ${item?.parents?.father || "---"}
Father's DOB: ${
                          item?.parents?.fatherDob
                            ? moment(item.parents.fatherDob).format(
                                "DD MMMM YYYY"
                              )
                            : "---"
                        }
Nationality: ${item?.parents?.nationality || "---"}
Address Same: ${item?.parents?.addressSame || "---"}

Travel History:
------------------------
Previous Refusal: ${item?.refusal || "---"}
Travelled to Other Countries: ${item?.travelledAnyCountry || "---"}`
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
                {/* Personal Information */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">First Name</span>
                  <span>{item?.firstName || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Last Name</span>
                  <span>{item?.lastName || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Date of Birth</span>
                  <span>
                    {item?.dob
                      ? moment(item.dob).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

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

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">NID Number</span>
                  <span>{item?.nidNumber || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Bangladesh Address</span>
                  <span className="text-right">{item?.bdAddress || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Married</span>
                  <span>{item?.married ? "Yes" : "No"}</span>
                </div>

                {/* Passport Details */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Passport Number</span>
                  <span>{item?.passportNumber || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Passport Issue Date</span>
                  <span>
                    {item?.passportIssueDate
                      ? moment(item.passportIssueDate).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Passport Expiry Date</span>
                  <span>
                    {item?.passportExpiryDate
                      ? moment(item.passportExpiryDate).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Issue Authority</span>
                  <span>{item?.issueAuthority || "---"}</span>
                </div>

                {/* Spouse Information */}
                {item?.married && (
                  <>
                    <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                      <span className="text-zinc-700">Spouse Name</span>
                      <span>{item?.spouse?.name || "---"}</span>
                    </div>

                    <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                      <span className="text-zinc-700">Spouse DOB</span>
                      <span>
                        {item?.spouse?.dob
                          ? moment(item.spouse.dob).format("DD MMMM YYYY")
                          : "---"}
                      </span>
                    </div>

                    <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                      <span className="text-zinc-700">Spouse Passport</span>
                      <span>{item?.spouse?.passportNumber || "---"}</span>
                    </div>

                    <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                      <span className="text-zinc-700">
                        Spouse Passport Issue
                      </span>
                      <span>
                        {item?.spouse?.passportIssueDate
                          ? moment(item.spouse.passportIssueDate).format(
                              "DD MMMM YYYY"
                            )
                          : "---"}
                      </span>
                    </div>

                    <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                      <span className="text-zinc-700">
                        Spouse Passport Expiry
                      </span>
                      <span>
                        {item?.spouse?.passportExpiryDate
                          ? moment(item.spouse.passportExpiryDate).format(
                              "DD MMMM YYYY"
                            )
                          : "---"}
                      </span>
                    </div>
                  </>
                )}

                {/* Course Information */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Course Name</span>
                  <span>{item?.course?.name || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Course Start Date</span>
                  <span>
                    {item?.course?.startDate
                      ? moment(item.course.startDate).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Course End Date</span>
                  <span>
                    {item?.course?.endDate
                      ? moment(item.course.endDate).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                {/* Sponsorship & Bank */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Sponsor Number</span>
                  <span>{item?.sponsorNumber || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">CAS/COS Number</span>
                  <span>{item?.casCosNumber || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Bank Name</span>
                  <span>{item?.bankName || "---"}</span>
                </div>

                {/* UK Information */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">UK Address</span>
                  <span className="text-right">{item?.ukAddress || "---"}</span>
                </div>

                {/* Parents Information */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Mother's Name</span>
                  <span>{item?.parents?.mother || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Mother's DOB</span>
                  <span>
                    {item?.parents?.motherDob
                      ? moment(item.parents.motherDob).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Father's Name</span>
                  <span>{item?.parents?.father || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Father's DOB</span>
                  <span>
                    {item?.parents?.fatherDob
                      ? moment(item.parents.fatherDob).format("DD MMMM YYYY")
                      : "---"}
                  </span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Parents Nationality</span>
                  <span>{item?.parents?.nationality || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Address Same</span>
                  <span>{item?.parents?.addressSame || "---"}</span>
                </div>

                {/* Travel History */}
                <div className="w-full flex items-center justify-between gap-2 border-b border-zinc-200 py-3">
                  <span className="text-zinc-700">Previous Refusal</span>
                  <span>{item?.refusal || "---"}</span>
                </div>

                <div className="w-full flex items-center justify-between gap-2 py-3">
                  <span className="text-zinc-700">
                    Travelled to Other Countries
                  </span>
                  <span>{item?.travelledAnyCountry || "---"}</span>
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
