"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { HelpCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqs = [
    {
      question: "How long is the Life in the UK test?",
      answer:
        "The test is 45 minutes long and consists of 24 questions. You need to answer at least 18 correctly (75%) to pass.",
    },
    {
      question: "What topics are covered in the test?",
      answer:
        "The test covers British history, government, laws, traditions, and everyday life. Our course breaks down all these topics into manageable sections.",
    },
    {
      question: "Can I retake the course if I don't pass?",
      answer:
        "Yes! We offer free retakes of our course if you don't pass the actual test on your first attempt. We're committed to your success.",
    },
    {
      question: "Do you provide study materials?",
      answer:
        "Absolutely! You'll receive comprehensive study guides, practice questions, and access to our online learning portal with additional resources.",
    },
    {
      question: "How soon can I take the test after the course?",
      answer:
        "Most students are ready to take the test within 1-2 weeks after completing our course. We'll help you book your test at the right time.",
    },
  ];

  return (
    <div
      className="section py-16"
      style={{
        backgroundImage: "url(/white-bg-3.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section className="w-full max-w-4xl mx-auto px-4">
        <SectionTitle
          text={"Frequently Asked Questions"}
          subtext={"Everything you need to know about our course"}
          animate={false}
          align="center"
        />

        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-zinc-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-blue-50 transition-colors cursor-pointer ${
                  openItems[index] && "bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-zinc-800 text-lg">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`transform transition-transform duration-300 ${
                    openItems[index] ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5 text-zinc-500" />
                </div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openItems[index] ? "auto" : 0,
                  opacity: openItems[index] ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-6">
                  <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default FAQ;
