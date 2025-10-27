"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "motion/react";

const page = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(182deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/white-bg.jpg)",
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
            subtext={" Revision Notes: Britain Since 1945"}
            text={"Life in the UK"}
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
          Comprehensive study guide covering key events, social changes, and
          technological developments in modern British history
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

      <div
        className="section"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(/white-bg-2.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <section className="w-full max-w-6xl mx-auto px-5">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Left Column - Historical Events */}
            <div className="space-y-8">
              {/* Welfare State Section */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  The Establishment of the Welfare State
                </h2>
                <ul className="space-y-3 text-secondary-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Labour Government Election:</strong> In 1945, the
                      British people elected a Labour government led by Clement
                      Atlee, promising to introduce the welfare state
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>National Health Service (NHS):</strong>{" "}
                      Established in 1948 by Aneurin Bevan, guaranteeing free
                      healthcare for all at the point of use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Social Security:</strong> A national system of
                      benefits was introduced to protect the population "from
                      cradle to grave"
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Nationalization:</strong> The government took
                      public ownership of railways, coal mines, and utilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Decolonization:</strong> Independence was granted
                      to nine countries in 1947, including India and Pakistan
                    </span>
                  </li>
                </ul>
              </div>

              {/* 1960s-1970s Changes Section */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Changes in Britain in the 1960s and 1970s
                </h2>
                <ul className="space-y-3 text-secondary-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>The Swinging Sixties:</strong> A period of
                      significant social change, growth in British fashion,
                      cinema, and popular music
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Economic Growth:</strong> People became better
                      off, with many buying cars and consumer goods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Social Liberalization:</strong> Laws were
                      liberalized regarding divorce and abortion in England,
                      Wales, and Scotland
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Women's Rights:</strong> New laws gave women the
                      right to equal pay and protection against gender
                      discrimination
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Technological Progress:</strong> Development of
                      Concorde and new architectural styles
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Immigration Changes:</strong> New laws restricted
                      immigration, requiring strong connections to Britain
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Economic Challenges:</strong> The 1970s saw the
                      end of the post-war economic boom, with rising prices and
                      unstable exchange rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Industrial Unrest:</strong> Many industries and
                      services were affected by strikes, causing problems
                      between trade unions and the government
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Northern Ireland Conflict:</strong> Serious unrest
                      in Northern Ireland led to direct rule by the UK
                      government in 1972
                    </span>
                  </li>
                </ul>
              </div>

              {/* Events Since 1979 Section */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Events Since 1979
                </h2>
                <ul className="space-y-3 text-secondary-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Thatcher Era:</strong> Margaret Thatcher became
                      the first woman Prime Minister, serving from 1979 to 1990
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Economic Reforms:</strong> Privatization of
                      nationalized industries and legal controls on trade unions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Falklands War:</strong> In 1982, Britain recovered
                      the Falkland Islands after Argentine invasion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Blair Government:</strong> Tony Blair's Labour
                      Party elected in 1997, introducing devolution to Scotland
                      and Wales
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Good Friday Agreement:</strong> Signed in 1998,
                      part of the Northern Ireland peace process
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Military Engagements:</strong> British forces
                      involved in conflicts in Afghanistan and Iraq
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Coalition Government:</strong> Formed in 2010
                      between Conservatives and Liberal Democrats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Brexit:</strong> The 2016 EU membership referendum
                      led to the UK leaving the European Union
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>COVID-19 Pandemic:</strong> The government's
                      handling of the global health crisis
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>
                      <strong>Labour Government:</strong> Keir Starmer's Labour
                      party won the majority in the 2024 general election
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Inventions & Quiz */}
            <div className="space-y-8">
              {/* British Inventions Section */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  British Inventions of the 20th Century
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-secondary-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Television:</strong> John Logie Baird (1920s)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Radar:</strong> Sir Robert Watson-Watt
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Turing Machine:</strong> Alan Turing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>DNA Structure:</strong> British universities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Jet Engine:</strong> Sir Frank Whittle (1930s)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Hovercraft:</strong> Sir Christopher Cockerell
                        (1950s)
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-secondary-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>ATM (Cashpoint):</strong> James Goodfellow
                        (1960s)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>IVF Therapy:</strong> Sir Robert Edwards &
                        Patrick Steptoe
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>Animal Cloning:</strong> Sir Ian Wilmut & Keith
                        Campbell
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>MRI Scanner:</strong> Sir Peter Mansfield
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>
                        <strong>World Wide Web:</strong> Sir Tim Berners-Lee
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Multiple Choice Questions Section */}
              <div className="bg-white rounded-lg border border-zinc-200 p-6">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  Multiple Choice Questions
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      question:
                        "Who led the establishment of the National Health Service (NHS) in 1948?",
                      options: [
                        "Clement Atlee",
                        "Aneurin Bevan",
                        "Margaret Thatcher",
                        "Tony Blair",
                      ],
                      answer: "b",
                    },
                    {
                      question:
                        "Which of the following was NOT a part of the welfare state established after World War II?",
                      options: [
                        "National Health Service",
                        "Social security benefits",
                        "Privatization of industries",
                        "Public ownership of utilities",
                      ],
                      answer: "c",
                    },
                    {
                      question:
                        "What significant social change occurred in the 1960s?",
                      options: [
                        "Introduction of the NHS",
                        "Liberalization of divorce and abortion laws",
                        "Restriction of women's rights in the workplace",
                        "Nationalization of major industries",
                      ],
                      answer: "b",
                    },
                    {
                      question:
                        "Which British invention revolutionized diagnostic medicine?",
                      options: [
                        "Radar",
                        "Hovercraft",
                        "MRI scanner",
                        "Concorde",
                      ],
                      answer: "c",
                    },
                    {
                      question:
                        "Who was the first woman Prime Minister of the UK?",
                      options: [
                        "Mary Peters",
                        "Margaret Thatcher",
                        "Queen Elizabeth II",
                        "Theresa May",
                      ],
                      answer: "b",
                    },
                    {
                      question:
                        "What significant event occurred in 1982 during Margaret Thatcher's premiership?",
                      options: [
                        "The Good Friday Agreement",
                        "The Falklands War",
                        "The fall of the Berlin Wall",
                        "The introduction of the Euro",
                      ],
                      answer: "b",
                    },
                    {
                      question:
                        "Which government introduced devolution to Scotland and Wales?",
                      options: [
                        "John Major's Conservative government",
                        "Tony Blair's Labour government",
                        "David Cameron's Coalition government",
                        "Theresa May's Conservative government",
                      ],
                      answer: "b",
                    },
                    {
                      question:
                        "What major political event happened in the UK in 2016?",
                      options: [
                        "The Scottish independence referendum",
                        "The EU membership referendum (Brexit)",
                        "The formation of the Coalition government",
                        "The Good Friday Agreement",
                      ],
                      answer: "b",
                    },
                  ].map((q, index) => (
                    <div
                      key={index}
                      className="border-b border-zinc-100 pb-4 last:border-0 last:pb-0"
                    >
                      <p className="font-medium text-secondary-foreground mb-3">
                        {index + 1}. {q.question}
                      </p>
                      <div className="grid gap-2">
                        {q.options.map((option, optIndex) => (
                          <label
                            key={optIndex}
                            className="flex items-center space-x-2 text-secondary-foreground"
                          >
                            <input
                              type="radio"
                              name={`q${index}`}
                              value={String.fromCharCode(97 + optIndex)}
                              className="text-primary"
                            />
                            <span>
                              {String.fromCharCode(97 + optIndex)}) {option}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Answers Section */}
                <div className="mt-6 p-4 bg-zinc-50 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Answers:</h3>
                  <div className="text-sm text-secondary-foreground space-y-1">
                    <p>
                      <strong>b</strong> - Aneurin Bevan
                    </p>
                    <p>
                      <strong>c</strong> - Privatization of industries
                    </p>
                    <p>
                      <strong>b</strong> - Liberalization of divorce and
                      abortion laws
                    </p>
                    <p>
                      <strong>c</strong> - MRI scanner
                    </p>
                    <p>
                      <strong>b</strong> - Margaret Thatcher
                    </p>
                    <p>
                      <strong>b</strong> - The Falklands War
                    </p>
                    <p>
                      <strong>b</strong> - Tony Blair's Labour government
                    </p>
                    <p>
                      <strong>b</strong> - The EU membership referendum (Brexit)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default page;
