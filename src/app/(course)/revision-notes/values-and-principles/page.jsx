import SectionTitle from "@/components/ui/SectionTitle";
// Assuming the motion import is not needed for this static content
// import * as motion from "motion/react-client";

export const metadata = {
  title: "Revision Notes: Values and Principles of the UK",
};

const page = () => {
  const questions = [
    {
      question: "What are the fundamental principles of British life?",
      options: [
        "Democracy, rule of law, community participation",
        "Monarchy, socialism, individualism",
        "Capitalism, secularism, nationalism",
        "Autocracy, uniformity, isolationism",
      ],
      answer: "a",
      answerText: "Democracy, rule of law, community participation",
    },
    {
      question: "What is NOT mentioned as a responsibility of UK residents?",
      options: [
        "Respect and obey the law",
        "Treat others with fairness",
        "Look after the area in which you live",
        "Participate in religious activities",
      ],
      answer: "d",
      answerText: "Participate in religious activities",
    },
    {
      question:
        "Which of the following is NOT listed as a freedom offered by the UK?",
      options: [
        "Freedom of belief and religion",
        "Freedom of speech",
        "Freedom from unfair discrimination",
        "Freedom to ignore local laws",
      ],
      answer: "d",
      answerText: "Freedom to ignore local laws",
    },
    {
      question: "What do new citizens pledge during the citizenship ceremony?",
      options: [
        "To speak only English",
        "To uphold democratic values and observe laws faithfully",
        "To renounce their previous citizenship",
        "To join the British armed forces",
      ],
      answer: "b",
      answerText: "To uphold democratic values and observe laws faithfully",
    },
    {
      question:
        "According to the text, British values and principles are based on:",
      options: [
        "Recent political decisions",
        "European Union regulations",
        "History and traditions",
        "Religious doctrines",
      ],
      answer: "c",
      answerText: "History and traditions",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Values and Principles of the UK"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the fundamental values and principles that form
          the foundation of British society. These values are protected by law
          and reflect the responsibilities, rights, and privileges of British
          citizenship, which all residents are expected to respect and support.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Key Points Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Key Points
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Foundation of British Society:</strong> Based on
                    fundamental values and principles that all residents should
                    respect and support.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Historical Basis:</strong> These values reflect the
                    responsibilities, rights, and privileges of British
                    citizenship, rooted in history and traditions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Legal Protection:</strong> The values are protected
                    by law, customs, and expectations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Zero Tolerance:</strong> No place for extremism or
                    intolerance in British society.
                  </span>
                </li>
              </ul>
            </div>

            {/* Principles Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Fundamental Principles of British Life
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Democracy:</strong> A core principle of the UK's
                    political system.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Rule of Law:</strong> Everyone is subject to and
                    equal before the law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Individual Liberty:</strong> Personal freedom within
                    the bounds of law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Tolerance:</strong> Respect for different faiths and
                    beliefs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Community Participation:</strong> Active involvement
                    in community life.
                  </span>
                </li>
              </ul>
            </div>

            {/* Responsibilities Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Responsibilities of Permanent Residents and Citizens
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Law Abidance:</strong> Respect and obey the law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Respect for Others:</strong> Respect others' rights
                    and opinions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Fairness:</strong> Treat others with fairness.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Self-Sufficiency:</strong> Look after yourself and
                    your family.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Environmental Responsibility:</strong> Care for your
                    local area and the environment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Freedoms Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Freedoms Offered by the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Religious Freedom:</strong> Freedom of belief and
                    religion.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Freedom of Expression:</strong> Freedom of speech.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Non-Discrimination:</strong> Freedom from unfair
                    discrimination.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Fair Trial:</strong> Right to a fair trial.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Democratic Participation:</strong> Right to
                    participate in elections.
                  </span>
                </li>
              </ul>
            </div>

            {/* Process Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Process of Becoming a Permanent Resident or Citizen
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Citizenship Ceremony:</strong> New citizens
                    participate in a ceremony.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Loyalty Pledge:</strong> New citizens pledge loyalty
                    to the UK and its values.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Upholding Democratic Values:</strong> Commitment to
                    uphold UK's democratic values.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Law Observance:</strong> Promise to observe laws
                    faithfully.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Fulfilling Duties:</strong> Pledge to fulfill duties
                    and obligations as a British citizen.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Quiz */}
          <div className="space-y-8">
            {/* Multiple Choice Questions Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Multiple Choice Questions
              </h2>
              <div className="space-y-6">
                {questions.map((q, index) => (
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
                            name={`${index}`}
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
                  {questions.map((q, index) => (
                    <p key={index}>
                      <strong>{q.answer}</strong> - {q.answerText}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
