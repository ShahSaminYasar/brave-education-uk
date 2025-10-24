"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "motion/react";
import Link from "next/link";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/bg-1.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <motion.section
        initial={{ filter: "blur(5px)", scale: 0.98, opacity: 0.7 }}
        animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
        transition={{ delay: 0.05, duration: 0.15, ease: "linear" }}
        className="py-[100px] w-full max-w-6xl mx-auto px-5 flex flex-col gap-3 items-center justify-center min-h-[100vh]"
      >
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Step-by-Step Guide"}
            text={"Student Finance"}
            align="center"
            style={{
              fontSize: "50px",
              fontWeight: "800",
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-center w-full max-w-md mx-auto">
          Follow our 9-step guide to secure your funding and manage your loan
          throughout your education journey.
        </p>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-9 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-300 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.section>

      <div className="bg-white w-full section">
        <section className="w-full max-w-6xl mx-auto">
          {/* Steps Grid */}
          <div className="grid gap-6">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  1
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Check if you're eligible
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground">
                Check if you're eligible for student finance.{" "}
                <Link href={"/check-eligibility"} className="text-primary">
                  Check eligibility here
                </Link>
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  2
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Find Out How Much Loan You Could Get
                </h3>
              </div>
              <div className="text-[15px] font-medium text-secondary-foreground space-y-3">
                <p>
                  Find out the maximum tuition fee and maintenance loan you
                  could get if you're a:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>new full-time student</li>
                  <li>continuing full-time student</li>
                  <li>EU student</li>
                </ul>
                <p className="text-sm mt-3">
                  How much maintenance loan you get depends on where you'll
                  study and your household income.
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start">
                    <span className="text-red-600 font-semibold mr-2">1.</span>
                    <span>
                      Use the student finance calculator to estimate your
                      maintenance loan
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-semibold mr-2">2.</span>
                    <span>Find out how much you'll repay</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-600 font-semibold mr-2">3.</span>
                    <span>Find out when you'll start repaying</span>
                  </div>
                </div>
              </div>

              {/* Extra Help Section */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h4 className="text-lg font-semibold text-red-600 mb-3">
                  Check if you can get extra help
                </h4>
                <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                  You might be able to get extra money if you:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[15px] font-medium text-secondary-foreground ml-2">
                  <li>
                    are under 25, have no contact with your parents and support
                    yourself
                  </li>
                  <li>pay for childcare</li>
                  <li>are a full-time student with children</li>
                  <li>have an adult who depends on you financially</li>
                  <li>
                    have a disability, mental or physical health problem or
                    learning difficulty like dyslexia
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  3
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Prepare your application
                </h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[15px] font-medium text-secondary-foreground ml-2">
                <li>Check when you can apply</li>
                <li>Check what ID you'll need</li>
                <li>
                  Check if you need to give proof of your household income
                </li>
              </ul>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  4
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Apply online
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground">
                You'll need to create a student finance account if you're a new
                student or sign into an existing account if you're a returning
                student.
              </p>
              <p className="text-[15px] font-medium text-secondary-foreground mt-2">
                It can take up to 6 weeks to process your application. You might
                have to provide extra evidence.
              </p>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  5
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Update your details
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                You must update your application if your circumstances change.
                For example if you:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[15px] font-medium text-secondary-foreground ml-2">
                <li>change your course through clearing</li>
                <li>
                  change where you're going to live – for example with your
                  parents instead of halls
                </li>
              </ul>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  6
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Make sure you can be paid
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                After you register at your university or college you'll usually
                get your maintenance loan paid directly into your bank account
                at the start of each term.
              </p>
              <p className="text-[15px] font-medium text-secondary-foreground">
                Use your student finance account to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[15px] font-medium text-secondary-foreground ml-2 mt-2">
                <li>
                  update your bank details – for example if you open a student
                  account
                </li>
                <li>check how much you'll be paid</li>
                <li>check when you'll be paid</li>
              </ul>
            </motion.div>

            {/* Step 7 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  7
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  During your studies
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                You'll need to reapply for student finance for each year of your
                course.
              </p>
              <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                You must keep your details up to date throughout your course
                because some changes can affect your loan payments.
              </p>
              <div className="space-y-1 text-[15px] font-medium text-secondary-foreground">
                <div className="flex items-start">
                  <span className="text-red-600 font-semibold mr-2">1.</span>
                  <span>Check how to update your details</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 font-semibold mr-2">2.</span>
                  <span>
                    Find out what to do if you suspend or leave your course
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Step 8 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  8
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  When you stop studying
                </h3>
              </div>
              <p className="text-[15px] font-medium text-secondary-foreground mb-3">
                When you stop studying the Student Loans Company (SLC) will
                create a student loans repayment account for you.
              </p>
              <p className="text-[15px] font-medium text-secondary-foreground">
                Make sure your contact details are up to date in your repayment
                account.
              </p>
            </motion.div>

            {/* Step 9 */}
            <motion.div
              initial={{ opacity: 0.2, y: 100, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ margin: "100px 0px -10% 0px" }}
              transition={{ duration: 0.3, type: "tween" }}
              className="origin-bottom border border-gray-300 rounded-lg p-6 bg-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-sm font-semibold mr-3">
                  9
                </div>
                <h3 className="text-xl font-semibold text-red-600">
                  Repay your loan
                </h3>
              </div>
              <div className="space-y-2 text-[15px] font-medium text-secondary-foreground">
                <div className="flex items-center">
                  <span className="text-red-600 font-semibold mr-2">•</span>
                  <span>Find out how much you'll repay</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 font-semibold mr-2">•</span>
                  <span>Find out when you'll start repaying</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default page;
