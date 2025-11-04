"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-16 px-4 w-full">
      <section className="w-full max-w-6xl mx-auto py-8 lg:py-12">
        <motion.div
          className="w-full rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(13, 2, 72,0.95), rgba(32, 21, 108,0.85)), url(/assets/images/uk_classroom_filled.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Floating elements */}
          <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            🎯 98% Success Rate
          </div>

          <div className="relative z-10 w-full flex flex-col items-center gap-6 text-center">
            <motion.h1
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Pass Your Life in the UK Test <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                With Confidence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-blue-100 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join our comprehensive 10-class preparatory course led by
              qualified UK teachers. Master the material, practice with
              realistic mock tests, and take the next step in your British
              journey with confidence.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-2 text-blue-200">
                <Users size={18} />
                <span className="text-sm">500+ Students Passed</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Award size={18} />
                <span className="text-sm">Qualified Teachers</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Clock size={18} />
                <span className="text-sm">Flexible Schedule</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href={"#enroll"}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-3 rounded-full group"
                >
                  Book Your Seat Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.p
              className="text-blue-200 text-sm mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              ⚡ Limited seats available - Enroll today to secure your spot
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default Hero;
