import SectionTitle from "@/components/ui/SectionTitle";
import {
  Book,
  Flame,
  Folder,
  Star,
  CheckCircle,
  Clock,
  Users,
  Target,
} from "lucide-react";
import Image from "next/image";
import * as motion from "motion/react-client";

const Details = () => {
  const features = [
    { icon: <Folder className="h-5 w-5" />, text: "10 comprehensive classes" },
    { icon: <Target className="h-5 w-5" />, text: "2 Realistic Mock Tests" },
    { icon: <Clock className="h-5 w-5" />, text: "1 hr 10 mins per session" },
    { icon: <Users className="h-5 w-5" />, text: "Qualified UK Teachers" },
    { icon: <Book className="h-5 w-5" />, text: "Study materials included" },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      text: "Pass guarantee support",
    },
  ];

  return (
    <div className="section py-16 px-4">
      <section className="w-full max-w-6xl mx-auto">
        {/* Feature badges */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
            <Star className="h-5 w-5 text-yellow-300" />
            <span className="font-semibold text-sm">
              Taught by Qualified Teachers
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-4 text-white shadow-lg">
            <Book className="h-5 w-5 text-cyan-300" />
            <span className="font-semibold text-sm">
              Online & In-person Classes
            </span>
          </div>
          <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-4 text-white shadow-lg">
            <Flame className="h-5 w-5 text-orange-300" />
            <span className="font-semibold text-sm">
              Limited Seats - Enroll Today
            </span>
          </div>
        </motion.div>

        <div className="w-full flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtext={"Comprehensive Preparation"}
              text={"A Course Designed for Your Success"}
              animate={true}
            />

            <p className="text-zinc-700 text-lg leading-relaxed">
              Preparing for the Life in the UK test can be stressful. Our
              carefully structured course breaks down everything you need to
              know into simple, manageable lessons. We focus on key topics and
              test-taking strategies to ensure you feel fully prepared and
              confident on exam day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-blue-600">{feature.icon}</div>
                  <span className="text-zinc-800 font-medium text-sm">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-4">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold text-xl px-6 py-3 rounded-xl shadow-lg">
                £140.00
              </span>
              <div className="text-sm text-zinc-600">
                <p>One-time payment</p>
                <p className="text-green-600 font-semibold">No hidden fees</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Image
              src={"/assets/images/uk_classroom_2.jpg"}
              width={600}
              height={400}
              alt="Brave Education Classroom"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">98%</div>
                <div className="text-sm text-zinc-600 font-semibold">
                  Success Rate
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Details;
