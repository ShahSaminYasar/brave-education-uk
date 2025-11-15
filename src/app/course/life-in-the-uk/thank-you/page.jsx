import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-5 pt-[145px] pb-10 font-josefin-sans"
      style={{
        backgroundImage: "url(/white-bg-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-lg w-full bg-gradient-to-br backdrop-blur-[4px] from-white/50 via-white/20 to-white/50 border border-white/80 rounded-2xl shadow-none p-8 text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-sm font-normal text-slate-600 block text-center">
          Thank you for reaching out to us. We have received your information
          and our team will contact you shortly.
        </p>

        <p className="text-sm font-medium block text-center mt-4 text-slate-400">
          We typically respond within 24 hours during business days.
        </p>

        {/* Contact Info */}
        <div className="bg-white/50 border border-white/60 rounded-lg p-4 mt-6 mb-6">
          <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>✓ Our representative will call you at the provided number</li>
            <li>✓ We'll discuss your requirements in detail</li>
            <li>✓ Provide personalized solutions</li>
          </ul>
        </div>

        {/* Emergency Contact */}
        <div className="text-sm text-gray-500 mb-6">
          <p>Need immediate assistance?</p>
          <p className="font-semibold text-primary">
            Call us directly:{" "}
            <Link href={"tel:>08009991257"} target="_blank">
              0800 999 1257
            </Link>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <Link
            href={"/course/life-in-the-uk"}
            className="px-4 py-2 bg-white text-primary rounded-lg hover:bg-slate-50 transition-colors text-xs flex items-center gap-2 flex-nowrap w-fit font-medium"
          >
            <ArrowLeft size={12} /> Go Back
          </Link>
          <Link
            href={"/"}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-yellow-500 transition-colors text-xs flex items-center gap-2 flex-nowrap w-fit font-medium"
          >
            <Home size={12} /> Home
          </Link>
        </div>

        {/* Follow-up Note */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400">
            Didn't receive a call within 24 hours? Please check your spam folder
            or contact us directly.
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
