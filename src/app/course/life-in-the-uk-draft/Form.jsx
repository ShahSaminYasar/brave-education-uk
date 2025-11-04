import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Book, Flame, Star, ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

const Form = () => {
  const inputStyle =
    "p-4 bg-white/10 border border-white/20 rounded-xl block w-full text-white placeholder:text-white/70 outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-300";

  return (
    <div id="enroll" className="py-16 px-4 w-full">
      <section className="w-full max-w-6xl mx-auto">
        <motion.div
          className="w-full rounded-2xl p-8 lg:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(13, 2, 72,0.95), rgba(32, 21, 108,0.9)), url(/bg-dark.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                text={"Start Your Journey Today"}
                subtext={"Secure your spot in the next batch"}
                align="left"
                style={{
                  color: "#fff",
                }}
                animate={true}
              />

              <p className="text-blue-100 mb-8 text-lg">
                Fill in your details and we'll contact you within 24 hours to
                confirm your enrollment.
              </p>

              <form className="w-full space-y-4">
                <input
                  type="text"
                  placeholder="Your full name"
                  className={inputStyle}
                  name="name"
                  required
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  className={inputStyle}
                  name="email"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your phone number"
                  className={inputStyle}
                  name="phone"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300 group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-white text-xl font-bold mb-4">
                  Why Choose Our Course?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-100">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span>Qualified UK-certified teachers</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <Book className="h-5 w-5 text-cyan-400" />
                    <span>Comprehensive study materials</span>
                  </div>
                  <div className="flex items-center gap-3 text-blue-100">
                    <Flame className="h-5 w-5 text-orange-400" />
                    <span>Proven success rate</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-center">
                <div className="text-2xl font-bold text-white">£140.00</div>
                <div className="text-white/90 text-sm">Complete Course Fee</div>
                <div className="text-white/80 text-xs mt-2">
                  No hidden charges
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
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
      </section>
    </div>
  );
};
export default Form;
