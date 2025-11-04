"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  BookOpen,
  Target,
  CheckCircle,
  FileText,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const Curriculum = () => {
  const modules = [
    {
      week: "Week 1-2",
      title: "UK History Foundation",
      topics: ["Early Britain", "Middle Ages", "Tudors and Stuarts"],
      duration: "4 classes",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      week: "Week 3-4",
      title: "Modern UK History",
      topics: ["Empire and Industry", "20th Century", "Post-war Britain"],
      duration: "4 classes",
      icon: <Target className="h-5 w-5" />,
    },
    {
      week: "Week 5",
      title: "UK Government & Law",
      topics: ["Political System", "Legal System", "Citizen Rights"],
      duration: "2 classes",
      icon: <FileText className="h-5 w-5" />,
    },
  ];

  return (
    <div className="section py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="w-full max-w-6xl mx-auto px-4">
        <SectionTitle
          text={"Comprehensive Curriculum"}
          subtext={"Structured learning path for guaranteed success"}
          animate={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  {module.icon}
                </div>
                <div>
                  <div className="text-sm text-blue-600 font-semibold">
                    {module.week}
                  </div>
                  <h3 className="font-bold text-zinc-800">{module.title}</h3>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-zinc-600 mb-2">
                  Topics Covered:
                </h4>
                <ul className="space-y-1">
                  {module.topics.map((topic, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-zinc-700"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-zinc-200">
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Clock className="h-4 w-4" />
                  {module.duration}
                </div>
                <div className="flex items-center gap-1 text-zinc-500 text-sm">
                  <Users className="h-4 w-4" />
                  Mock Test
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mock Tests Highlight */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mt-12 text-white text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="h-8 w-8 text-yellow-300" />
            <h3 className="text-2xl font-bold">Realistic Mock Tests</h3>
          </div>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Experience the actual test environment with our carefully designed
            mock tests that mirror the official Life in the UK exam format and
            difficulty level.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Curriculum;
