import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The UK and International Institutions",
};

const page = () => {
  const questions = [
    {
      question: "What is the role of the monarch in the Commonwealth?",
      options: [
        "Executive head of the Commonwealth",
        "Ceremonial head of the Commonwealth",
        "Legislative head of the Commonwealth",
        "Judicial head of the Commonwealth",
      ],
      answer: "b",
      answerText: "Ceremonial head of the Commonwealth",
    },
    {
      question:
        "Which international organisation is not part of the EU but focuses on human rights?",
      options: [
        "The United Nations",
        "The Council of Europe",
        "NATO",
        "The Commonwealth",
      ],
      answer: "b",
      answerText: "The Council of Europe",
    },
    {
      question: "When did the UK officially leave the European Union?",
      options: [
        "1 January 2021",
        "31 January 2020",
        "29 March 2019",
        "31 December 2020",
      ],
      answer: "b",
      answerText: "31 January 2020",
    },
    {
      question:
        "How many permanent members are there on the UN Security Council?",
      options: ["10", "5", "15", "20"],
      answer: "b",
      answerText: "5",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The UK and International Institutions"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter outlines the UK's role and membership in key
          international organisations, including the Commonwealth, the EU, the
          UN, and NATO.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* The Commonwealth Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Commonwealth
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Nature of the Commonwealth:</strong> The
                    Commonwealth is an association of countries that collaborate
                    for shared goals in democracy and development. Despite most
                    members being former parts of the British Empire, some
                    non-former colonies have joined.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Leadership:</strong> The monarch, currently King
                    Charles III, serves as the ceremonial head. It has 56 member
                    states, and membership is voluntary without authoritative
                    power.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Core Values:</strong> The Commonwealth is rooted in
                    democracy, good governance, and the rule of law. It can
                    suspend membership if necessary.
                  </span>
                </li>
              </ul>
            </div>

            {/* Commonwealth Members Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Commonwealth Members
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Member States by Region:</strong> There are 56
                    member states spread across regions like Africa, Asia, the
                    Caribbean, the Americas, Europe, and the Pacific.
                  </span>
                </li>
              </ul>
            </div>

            {/* The European Union Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The European Union
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Formation and History:</strong> The EU was initially
                    named the European Economic Community, formed by six
                    countries who signed the Treaty of Rome in 1957.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Brexit:</strong> The UK joined in 1973 and
                    officially left after the Brexit vote on 31 January 2020.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Current Members:</strong> The EU consists of 27
                    member states, and its laws are categorised as directives,
                    regulations, or framework decisions.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Council of Europe Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Council of Europe
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Purpose and Membership:</strong> Separate from the
                    EU, the Council of Europe includes 47 member countries and
                    focuses on human rights protection.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Conventions and Charters:</strong> Among its
                    conventions, the European Convention on Human Rights is the
                    most notable.
                  </span>
                </li>
              </ul>
            </div>

            {/* The United Nations Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The United Nations
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Role and Membership:</strong> The UK is a member of
                    the UN, founded post-World War II to prevent conflict and
                    promote global peace.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Security Council:</strong> The UN Security Council,
                    which addresses international crises, includes the UK as a
                    permanent member.
                  </span>
                </li>
              </ul>
            </div>

            {/* NATO Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                North Atlantic Treaty Organization (NATO)
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Function and Membership:</strong> NATO is an
                    alliance of European and North American countries to
                    maintain mutual defence and peace.
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
