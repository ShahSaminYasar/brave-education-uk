"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  Users,
  BookOpen,
  Target,
  CheckCircle,
} from "lucide-react";
import { motion } from "motion/react";

const Schedule = () => {
  const schedules = [
    {
      day: "Monday & Wednesday",
      time: "6:00 PM - 7:10 PM",
      type: "Online",
      seats: "5 seats left",
    },
    {
      day: "Tuesday & Thursday",
      time: "7:30 PM - 8:40 PM",
      type: "In-person",
      seats: "3 seats left",
    },
    {
      day: "Saturday",
      time: "10:00 AM - 1:00 PM",
      type: "Weekend Intensive",
      seats: "2 seats left",
    },
  ];

  return (
    <div className="section py-16 bg-white">
      <section className="w-full max-w-6xl mx-auto px-4">
        <SectionTitle
          text={"Flexible Class Schedule"}
          subtext={"Choose the timing that works best for you"}
          animate={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {schedules.map((schedule, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-zinc-800 text-lg">
                  {schedule.day}
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{schedule.time}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <Video className="h-4 w-4" />
                  <span className="text-sm">{schedule.type}</span>
                </div>
                <div className="flex items-center gap-2 text-red-600 font-semibold">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">{schedule.seats}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-blue-200">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Join This Batch
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Schedule;
