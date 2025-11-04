"use client";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle, Star, Clock, Users, Award, BookOpen } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const CTA = () => {
  const benefits = [
    "10 comprehensive classes with expert teachers",
    "2 realistic mock tests with detailed feedback",
    "Study materials and online resources included",
    "Flexible online and in-person class options",
    "98% first-time pass rate success guarantee",
    "Free course retake if you don't pass",
  ];

  return (
    <div className="section py-16 bg-gradient-to-br from-purple-600 to-blue-700">
      <section className="w-full max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            text={"Ready to Start Your UK Journey?"}
            subtext={"Join hundreds of successful students today"}
            animate={true}
            style={{ color: "#fff" }}
          />

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Benefits */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                    <span className="text-purple-100 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enrollment Card */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-zinc-800">£140</div>
                <div className="text-zinc-600">One-time payment</div>
                <div className="text-green-600 font-semibold mt-2">
                  No hidden fees
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Classes:</span>
                  <span className="font-semibold">10 Sessions</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Mock Tests:</span>
                  <span className="font-semibold">2 Full Tests</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-600">Support:</span>
                  <span className="font-semibold">Until You Pass</span>
                </div>
              </div>

              <Link href="#enroll" className="block">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enroll Now - Limited Seats
                </Button>
              </Link>

              <div className="text-center mt-4">
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  {"★".repeat(5)}
                </div>
                <p className="text-zinc-500 text-sm">
                  Rated 4.9/5 by 500+ students
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Urgency Section */}
          <motion.div
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 text-yellow-300">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">
                  Next batch starts: March 1st
                </span>
              </div>
              <div className="flex items-center gap-2 text-red-300">
                <Users className="h-5 w-5" />
                <span className="font-semibold">Only 3 seats remaining</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default CTA;
