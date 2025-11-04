import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import * as motion from "motion/react-client";

const Success = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      comment:
        "Passed on first attempt! The mock tests were identical to the real one.",
      image: "https://picsum.photos/200/200?q=1",
    },
    {
      id: 2,
      name: "Ahmed K.",
      comment: "Excellent teachers who made complex topics easy to understand.",
      image: "https://picsum.photos/200/200?q=2",
    },
    {
      id: 3,
      name: "Maria L.",
      comment:
        "Flexible schedule perfect for working professionals. Highly recommend!",
      image: "https://picsum.photos/200/200?q=3",
    },
  ];

  return (
    <div className="section py-16 bg-gradient-to-br from-blue-50 to-cyan-100">
      <section className="w-full max-w-6xl mx-auto px-4">
        <SectionTitle
          text={"Success Stories"}
          subtext={"Hear from our successful students"}
          animate={true}
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-200 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  width={60}
                  height={60}
                  alt={testimonial.name}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-zinc-800">
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                </div>
              </div>
              <p className="text-zinc-600 italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-zinc-600">Students Passed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">98%</div>
            <div className="text-zinc-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">10</div>
            <div className="text-zinc-600">Comprehensive Classes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">2</div>
            <div className="text-zinc-600">Mock Tests</div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
export default Success;
