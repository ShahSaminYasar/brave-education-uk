"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  Award,
  GraduationCap,
  Heart,
  Star,
  Users,
  BookOpen,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const Teachers = () => {
  const teachers = [
    {
      name: "Dr. Sarah Johnson",
      role: "UK History Specialist",
      experience: "12+ years teaching experience",
      qualification: "PhD in British History",
      image: "https://picsum.photos/150/150?q=4",
      specialties: ["Modern History", "Government", "Test Strategies"],
    },
    {
      name: "Mr. David Chen",
      role: "Citizenship Expert",
      experience: "8+ years exam preparation",
      qualification: "MA in Political Science",
      image: "https://picsum.photos/150/150?q=5",
      specialties: ["Legal System", "Citizenship", "Mock Tests"],
    },
  ];

  return (
    <div className="section py-16 bg-white">
      <section className="w-full max-w-6xl mx-auto px-4">
        <SectionTitle
          text={"Meet Your Expert Instructors"}
          subtext={"Learn from qualified UK education professionals"}
          animate={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image
                    src={teacher.image}
                    width={120}
                    height={120}
                    alt={teacher.name}
                    className="rounded-2xl shadow-lg"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-xl text-zinc-800">
                        {teacher.name}
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        {teacher.role}
                      </p>
                    </div>
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <GraduationCap className="h-4 w-4" />
                      {teacher.qualification}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-600">
                      <Award className="h-4 w-4" />
                      {teacher.experience}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-zinc-700 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teacher Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-zinc-800">500+</div>
            <div className="text-zinc-600 text-sm">Students Taught</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border">
            <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-zinc-800">98%</div>
            <div className="text-zinc-600 text-sm">Success Rate</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border">
            <BookOpen className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-zinc-800">10+</div>
            <div className="text-zinc-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center bg-white p-6 rounded-2xl shadow-lg border">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-zinc-800">4.9/5</div>
            <div className="text-zinc-600 text-sm">Student Rating</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Teachers;
