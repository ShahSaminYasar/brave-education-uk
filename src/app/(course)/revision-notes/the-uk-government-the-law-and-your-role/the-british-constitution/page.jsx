import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The British Constitution",
};

const page = () => {
  const questions = [
    {
      question: "What type of constitution does the UK have?",
      options: ["Written", "Unwritten", "Semi-written", "None"],
      answer: "b",
      answerText: "Unwritten",
    },
    {
      question: "What kind of government does the UK have?",
      options: [
        "Monarchy-only",
        "Oligarchy",
        "Parliamentary democracy",
        "Republic",
      ],
      answer: "c",
      answerText: "Parliamentary democracy",
    },
    {
      question: "Who appoints life peers in the House of Lords?",
      options: [
        "The Monarch",
        "The Prime Minister",
        "High Court Judges",
        "The Speaker",
      ],
      answer: "b",
      answerText: "The Prime Minister",
    },
    {
      question:
        "What is the system called that is used for electing MPs in the UK?",
      options: [
        "Proportional Representation",
        "Majority Vote",
        "First Past the Post",
        "Alternative Vote",
      ],
      answer: "c",
      answerText: "First Past the Post",
    },
    {
      question:
        "How are European Parliament elections conducted in terms of representation?",
      options: [
        "First Past the Post",
        "Winner Takes All",
        "Proportional Representation",
        "Nomination by Monarch",
      ],
      answer: "c",
      answerText: "Proportional Representation",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The British Constitution"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter explains the unique 'unwritten' nature of the British
          constitution and the key institutions that make up its parliamentary
          democracy.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Nature of Constitution Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Nature of the British Constitution
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The British constitution is 'unwritten', comprising
                    principles and institutions developed over hundreds of
                    years, allowing flexibility in governance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The UK government is composed of various parts, including
                    the monarchy, Parliament, and the judiciary, among others.
                  </span>
                </li>
              </ul>
            </div>

            {/* System of Government Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                System of Government
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Parliamentary Democracy:</strong> The UK's
                    government operates as a parliamentary democracy with
                    elected MPs forming the House of Commons.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The House of Commons:</strong> The House of Commons,
                    composed of elected MPs, is crucial for law-making and
                    governmental scrutiny.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The House of Lords:</strong> Unlike the House of
                    Commons, the House of Lords is not elected and includes life
                    peers nominated by the Prime Minister.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Speaker:</strong> The Speaker is the neutral
                    chair of Commons' debates, ensuring order and representing
                    Parliament in ceremonies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Monarchy:</strong> The monarch is the head of
                    state of the UK, serves as the ceremonial head of state,
                    appoints the government, and represents the UK
                    internationally. All Acts of Parliament are made in the
                    Majesty's name.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The National Anthem (God Save the King):</strong>{" "}
                    The UK National Anthem is played at national events and as
                    part of the citizenship ceremony is an oath to the monarch.
                  </span>
                </li>
              </ul>
            </div>

            {/* Members of Parliament Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Members of Parliament
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Elections:</strong> General elections in the UK
                    occur every five years via a 'first past the post' system.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Contacting MPs:</strong> Constituents can contact
                    their representatives via various channels, including local
                    surgeries and official contact details.
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
                            name={index}
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
