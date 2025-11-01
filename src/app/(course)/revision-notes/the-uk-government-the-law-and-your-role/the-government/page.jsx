import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The Government",
};

const page = () => {
  const questions = [
    {
      question: "What is the official residence of the Prime Minister located?",
      options: [
        "20 Downing Street",
        "30 Downing Street",
        "10 Downing Street",
        "Buckingham Palace",
      ],
      answer: "c",
      answerText: "10 Downing Street",
    },
    {
      question: "What role does the opposition leader play?",
      options: [
        "Supporting government policies",
        "Critiquing the government's actions",
        "Overseeing the UK's defence",
        "Handling UK foreign relations",
      ],
      answer: "b",
      answerText: "Critiquing the government's actions",
    },
    {
      question: "Who appoints the cabinet ministers?",
      options: [
        "Members of Parliament (MPs)",
        "The Opposition Leader",
        "The Prime Minister",
        "The House of Lords",
      ],
      answer: "c",
      answerText: "The Prime Minister",
    },
    {
      question: "What area does the civil service not involve itself with?",
      options: [
        "Developing policies",
        "Politically supporting a party",
        "Delivering public services",
        "Implementing policies",
      ],
      answer: "b",
      answerText: "Politically supporting a party",
    },
    {
      question: "How often is the electoral register updated?",
      options: ["Monthly", "Every two years", "Annually", "Every five years"],
      answer: "c",
      answerText: "Annually",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The Government"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter details the structure of the UK government, including the
          roles of the Prime Minister, the Cabinet, the opposition, and the
          devolved administrations.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* The Prime Minister Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Prime Minister
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Role of the Prime Minister:</strong> The PM is the
                    leader of the ruling party (or a coalition) and appoints
                    cabinet members, with the official residence at 10 Downing
                    Street.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Changing the Prime Minister:</strong> The PM can be
                    replaced by a decision from his or her party's MPs or by
                    resigning, especially after losing a General Election.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Cabinet Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Cabinet
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Cabinet Appointment:</strong> The PM appoints around
                    20 senior MPs as ministers to head departments like the
                    economy, immigration, and foreign relations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Function of the Cabinet:</strong> The cabinet makes
                    key policy decisions which often require Parliament's debate
                    and approval.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Opposition Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Opposition
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Role of the Opposition:</strong> The opposition
                    party critiques government actions and proposes alternative
                    policies, especially during Prime Minister's Questions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Shadow Cabinet:</strong> The opposition assigns
                    shadow ministers to parallel government ministers and
                    challenge their policies.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Party System Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Party System
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Major Political Parties:</strong> Candidates usually
                    need to represent major parties like the Conservative Party,
                    Labour Party, or Liberal Democrats to be elected.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Role of Independents:</strong> Some MPs are
                    independents representing specific regional issues.
                  </span>
                </li>
              </ul>
            </div>

            {/* Other Systems Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Other Systems
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Local Government:</strong> Local authorities,
                    sometimes called councils, govern regions and are funded by
                    government and local taxes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Free Press:</strong> Newspapers are free from
                    government control but must balance political content on
                    radio and television.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Civil Service:</strong> Supports government
                    policy implementation while staying politically neutral.
                  </span>
                </li>
              </ul>
            </div>

            {/* Devolved Administrations Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Devolved Administrations
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Powers Delegation:</strong> Since 1997, Wales,
                    Scotland, and Northern Ireland have gained control over
                    localized issues like education and healthcare.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Welsh Government:</strong> The Welsh Assembly can
                    legislature on a variety of issues independently since 2011.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Scottish Parliament:</strong> Established in 1999,
                    it can pass laws on numerous non-reserved matters.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Northern Ireland Assembly:</strong> Resumed
                    post-Good Friday Agreement, it controls issues such as
                    education and environment.
                  </span>
                </li>
              </ul>
            </div>

            {/* Voting and Political Participation Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Voting and Political Participation
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Eligibility to Vote:</strong> UK, Commonwealth, and
                    Irish Republic residents aged 18 and over can vote in public
                    elections.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Electoral Register:</strong> To vote, one must be on
                    the electoral register, updated annually.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Where to vote:</strong> Designated places where
                    individuals cast votes, with an option for postal ballots.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Standing for Office (Eligibility):</strong> Most UK
                    citizens 18+ can run for public office, barring specific
                    exceptions like armed forces members.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Visiting Parliament and Assemblies:</strong> The
                    public can attend parliamentary debates and visit devolved
                    administrations with some planning.
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
