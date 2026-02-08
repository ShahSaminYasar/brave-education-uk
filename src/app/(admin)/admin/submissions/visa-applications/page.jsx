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
  User,
  Calendar,
  MapPin,
  BookOpen,
  Banknote,
  Globe,
  Users,
  FileText,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import moment from "moment-timezone";
import Link from "next/link";
import { toast } from "sonner";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  const axios = useAxios();
  const [expandedCards, setExpandedCards] = useState({});

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["visa-applications"],
    queryFn: () =>
      axios.get(`/visa-application?token=${localStorage.getItem("token")}`),
  });

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyToClipboard = (item) => {
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
          ? moment(item.passportIssueDate).format("DD MMMM YYYY")
          : "---"
      }
Passport Expiry Date: ${
        item?.passportExpiryDate
          ? moment(item.passportExpiryDate).format("DD MMMM YYYY")
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
          ? moment(item.spouse.passportIssueDate).format("DD MMMM YYYY")
          : "---"
      }
Spouse Passport Expiry: ${
        item?.spouse?.passportExpiryDate
          ? moment(item.spouse.passportExpiryDate).format("DD MMMM YYYY")
          : "---"
      }

Course Information:
------------------------
Course Name: ${item?.course?.name || "---"}
Course Start Date: ${
        item?.course?.startDate
          ? moment(item.course.startDate).format("DD MMMM YYYY")
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
          ? moment(item.parents.motherDob).format("DD MMMM YYYY")
          : "---"
      }
Father's Name: ${item?.parents?.father || "---"}
Father's DOB: ${
        item?.parents?.fatherDob
          ? moment(item.parents.fatherDob).format("DD MMMM YYYY")
          : "---"
      }
Nationality: ${item?.parents?.nationality || "---"}
Address Same: ${item?.parents?.addressSame || "---"}

Travel History:
------------------------
Previous Refusal: ${item?.refusal || "---"}
Travelled to Other Countries: ${item?.travelledAnyCountry || "---"}`,
    );
    toast.success("Visa application copied to clipboard", {
      icon: <Copy size={16} />,
    });
  };

  const formatDate = (date) => {
    return (
      moment(date)?.tz("Europe/London")?.format("hh:mma, DD MMM YYYY") ||
      "Unknown date"
    );
  };

  const InfoSection = ({ title, icon, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <div className="border border-zinc-200 rounded-lg overflow-hidden">
        <div
          className="flex items-center justify-between p-3 bg-zinc-50 cursor-pointer hover:bg-zinc-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-medium text-zinc-700">{title}</span>
          </div>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
        <div
          className={`space-y-2 transition-all duration-700 ease-in-out ${
            isOpen
              ? "max-h-[100vh] p-3 overflow-y-auto"
              : "max-h-[0vh] p-0 overflow-y-hidden"
          }`}
        >
          {children}
        </div>
      </div>
    );
  };

  const InfoField = ({ label, value, isLink = false, linkType = "tel" }) => (
    <div className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-zinc-100">
      <span className="text-sm text-zinc-600 font-medium">{label}</span>
      {isLink && value !== "---" ? (
        <Link
          href={`${linkType}:${value}`}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium truncate max-w-[200px]"
        >
          {value}
        </Link>
      ) : (
        <span className="text-sm text-zinc-800 truncate max-w-[200px] text-right">
          {value || "---"}
        </span>
      )}
    </div>
  );

  const DateField = ({ label, date }) => (
    <div className="flex items-center justify-between py-2 px-3 bg-white rounded-lg border border-zinc-100">
      <span className="text-sm text-zinc-600 font-medium">{label}</span>
      <span className="text-sm text-zinc-800">
        {date ? moment(date).format("DD MMM YYYY") : "---"}
      </span>
    </div>
  );

  return (
    <section className="fade flex flex-col items-start gap-3 w-full">
      <div className="flex items-center justify-between w-full">
        <AdminPageTitle>Visa Applications</AdminPageTitle>
        {data?.data?.data?.length > 0 && (
          <span className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
            {data.data.data.length} application
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
          <FileText className="mx-auto h-12 w-12 text-zinc-300 mb-4" />
          <h3 className="text-lg font-medium text-zinc-700">
            No visa applications yet
          </h3>
          <p className="text-zinc-500 mt-2">
            Visa applications will appear here.
          </p>
        </div>
      ) : (
        <div className="fade-up w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
          {data?.data?.data?.map((item) => (
            <div
              key={item?._id}
              className="w-full bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <User size={16} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold truncate">
                        {item?.firstName} {item?.lastName}
                      </h3>
                      <div className="flex items-center gap-1 text-teal-200 text-xs mt-1">
                        <Calendar size={12} />
                        <span>{formatDate(item?.createdAt)} (GMT)</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(item)}
                    className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors duration-200 active:scale-90 cursor-pointer"
                    title="Copy application details"
                  >
                    <Copy size={16} />
                  </button>
                </div>

                {/* Quick Info Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  {item?.passportNumber && (
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">
                      📄 {item.passportNumber}
                    </span>
                  )}
                  {item?.course?.name && (
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">
                      🎓 {item.course.name}
                    </span>
                  )}
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">
                    {item?.married ? "💍 Married" : "💍 Single"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                {/* Personal Information */}
                <InfoSection
                  title="Personal Information"
                  icon={<User size={16} className="text-teal-600" />}
                  defaultOpen={false}
                >
                  <InfoField label="First Name" value={item?.firstName} />
                  <InfoField label="Last Name" value={item?.lastName} />
                  <DateField label="Date of Birth" date={item?.dob} />
                  <InfoField label="Phone" value={item?.phone} isLink={true} />
                  <InfoField
                    label="Email"
                    value={item?.email}
                    isLink={true}
                    linkType="mailto"
                  />
                  <InfoField label="NID Number" value={item?.nidNumber} />
                  <InfoField
                    label="Bangladesh Address"
                    value={item?.bdAddress}
                  />
                  <InfoField
                    label="Married"
                    value={item?.married ? "Yes" : "No"}
                  />
                </InfoSection>

                {/* Passport Details */}
                <InfoSection
                  title="Passport Details"
                  icon={<FileText size={16} className="text-blue-600" />}
                >
                  <InfoField
                    label="Passport Number"
                    value={item?.passportNumber}
                  />
                  <DateField
                    label="Issue Date"
                    date={item?.passportIssueDate}
                  />
                  <DateField
                    label="Expiry Date"
                    date={item?.passportExpiryDate}
                  />
                  <InfoField
                    label="Issue Authority"
                    value={item?.issueAuthority}
                  />
                </InfoSection>

                {/* Spouse Information */}
                {item?.married && (
                  <InfoSection
                    title="Spouse Information"
                    icon={<Users size={16} className="text-purple-600" />}
                  >
                    <InfoField label="Spouse Name" value={item?.spouse?.name} />
                    <DateField label="Spouse DOB" date={item?.spouse?.dob} />
                    <InfoField
                      label="Spouse Passport"
                      value={item?.spouse?.passportNumber}
                    />
                    <DateField
                      label="Passport Issue"
                      date={item?.spouse?.passportIssueDate}
                    />
                    <DateField
                      label="Passport Expiry"
                      date={item?.spouse?.passportExpiryDate}
                    />
                  </InfoSection>
                )}

                {/* Course Information */}
                <InfoSection
                  title="Course Information"
                  icon={<BookOpen size={16} className="text-green-600" />}
                >
                  <InfoField label="Course Name" value={item?.course?.name} />
                  <DateField
                    label="Start Date"
                    date={item?.course?.startDate}
                  />
                  <DateField label="End Date" date={item?.course?.endDate} />
                </InfoSection>

                {/* Sponsorship & Bank */}
                <InfoSection
                  title="Sponsorship & Bank"
                  icon={<Banknote size={16} className="text-yellow-600" />}
                >
                  <InfoField
                    label="Sponsor Number"
                    value={item?.sponsorNumber}
                  />
                  <InfoField
                    label="CAS/COS Number"
                    value={item?.casCosNumber}
                  />
                  <InfoField label="Bank Name" value={item?.bankName} />
                </InfoSection>

                {/* UK Information */}
                <InfoSection
                  title="UK Information"
                  icon={<MapPin size={16} className="text-red-600" />}
                >
                  <InfoField label="UK Address" value={item?.ukAddress} />
                </InfoSection>

                {/* Parents Information */}
                <InfoSection
                  title="Parents Information"
                  icon={<Users size={16} className="text-indigo-600" />}
                >
                  <InfoField
                    label="Mother's Name"
                    value={item?.parents?.mother}
                  />
                  <DateField
                    label="Mother's DOB"
                    date={item?.parents?.motherDob}
                  />
                  <InfoField
                    label="Father's Name"
                    value={item?.parents?.father}
                  />
                  <DateField
                    label="Father's DOB"
                    date={item?.parents?.fatherDob}
                  />
                  <InfoField
                    label="Nationality"
                    value={item?.parents?.nationality}
                  />
                  <InfoField
                    label="Address Same"
                    value={item?.parents?.addressSame}
                  />
                </InfoSection>

                {/* Travel History */}
                <InfoSection
                  title="Travel History"
                  icon={<Globe size={16} className="text-orange-600" />}
                >
                  <InfoField label="Previous Refusal" value={item?.refusal} />
                  <InfoField
                    label="Travelled to Other Countries"
                    value={item?.travelledAnyCountry}
                  />
                </InfoSection>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default page;
