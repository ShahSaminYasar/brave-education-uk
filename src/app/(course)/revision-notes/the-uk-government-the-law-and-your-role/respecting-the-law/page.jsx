import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The Role of the Judiciary",
};

const page = () => {
  const questions = [
    {
      question: "What is the main role of judges in the UK?",
      options: [
        "To write new laws",
        "To ensure fair trials and interpret the law",
        "To fund police activities",
        "To supervise legal advisors",
      ],
      answer: "b",
      answerText: "To ensure fair trials and interpret the law",
    },
    {
      question:
        "Which court handles minor criminal cases in England and Wales?",
      options: [
        "Crown Court",
        "Magistrates' Court",
        "County Court",
        "High Court",
      ],
      answer: "b",
      answerText: "Magistrates' Court",
    },
    {
      question:
        "Where are serious civil case disputes involving large compensations handled in Scotland?",
      options: [
        "Court of Session",
        "Magistrates' Court",
        "County Court",
        "Sheriff Court",
      ],
      answer: "a",
      answerText: "Court of Session",
    },
    {
      question: "What is the small claims procedure used for?",
      options: [
        "Complex criminal cases",
        "Large dispute settlements",
        "Minor civil disputes",
        "All criminal cases",
      ],
      answer: "c",
      answerText: "Minor civil disputes",
    },
    {
      question:
        "What is unique about the jury system in Scotland compared to England?",
      options: [
        "They do not have juries",
        "Only 5 members are allowed",
        "Includes a 'not proven' verdict option",
        "Juries vote anonymously",
      ],
      answer: "c",
      answerText: "Includes a 'not proven' verdict option",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The Role of the Judiciary"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter explains the responsibilities of the judiciary, the
          different types of courts (criminal and civil), and how legal disputes
          are resolved in the UK.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Judicial Responsibility Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Judicial Responsibility
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Judges interpret laws and ensure fair trials without
                    government interference. They can rule against the
                    government if actions are illegal.
                  </span>
                </li>
              </ul>
            </div>

            {/* Legal Dispute Resolution Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Legal Dispute Resolution
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Judges resolve disputes involving contracts, property,
                    employment rights, or accidents.
                  </span>
                </li>
              </ul>
            </div>

            {/* Criminal Courts Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Criminal Courts in the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>
                      Magistrates' and Justice of the Peace Courts:
                    </strong>{" "}
                    Minor criminal cases are handled here with unpaid
                    magistrates or legally qualified judges.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Crown Courts and Sheriff Courts:</strong> Serious
                    offences involve a judge and jury; some cases go to a High
                    Court.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Youth Courts:</strong> Cases involving
                    10-17-year-olds are normally processed here, with no public
                    access.
                  </span>
                </li>
              </ul>
            </div>

            {/* Civil Courts Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Civil Courts in the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>County Courts:</strong> Deal with civil disputes
                    such as debts, personal injuries, family matters, and
                    contracts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>High Court and Court of Session:</strong> Handle
                    more serious civil cases with significant compensation
                    involved.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Small Claims Procedure:</strong> Offers an informal
                    resolution for disputes under £10,000 in England/Wales, and
                    £5,000 in Scotland/Northern Ireland. Claims can be filed
                    online.
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
