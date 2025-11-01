import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: What is the UK",
};

const page = () => {
  const questions = [
    {
      question: "Which of the following is NOT a country that makes up the UK?",
      options: ["England", "Scotland", "Ireland", "Northern Ireland"],
      answer: "c",
      answerText: "Ireland",
    },
    {
      question: "What does the term 'Great Britain' refer to?",
      options: [
        "England, Scotland, Wales, and Northern Ireland",
        "England, Scotland, and Wales",
        "England and Wales",
        "The entire British Isles",
      ],
      answer: "b",
      answerText: "England, Scotland, and Wales",
    },
    {
      question: "What is the official name of the UK?",
      options: [
        "Great Britain",
        "United Kingdom",
        "United Kingdom of Great Britain and Northern Ireland",
        "British Isles",
      ],
      answer: "c",
      answerText: "United Kingdom of Great Britain and Northern Ireland",
    },
    {
      question: "Which of the following is a Crown dependency?",
      options: [
        "Northern Ireland",
        "Scotland",
        "Isle of Man",
        "Falkland Islands",
      ],
      answer: "c",
      answerText: "Isle of Man",
    },
    {
      question: "Where is the main parliament of the UK located?",
      options: ["Edinburgh", "Cardiff", "Belfast", "Westminster"],
      answer: "d",
      answerText: "Westminster",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"What is the UK"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter defines the United Kingdom, its constituent countries,
          and its relationship with other territories. Understanding the
          geography and political structure of the UK is essential.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Key Facts Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Key Facts
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Four constituent countries:</strong> The UK is
                    composed of England, Scotland, Wales, and Northern Ireland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Great Britain:</strong> This term refers only to
                    England, Scotland, and Wales, excluding Northern Ireland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Official name:</strong> The full official name of
                    the country is the United Kingdom of Great Britain and
                    Northern Ireland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Ireland:</strong> The rest of Ireland, separate from
                    Northern Ireland, is an independent country.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Crown dependencies:</strong> The Channel Islands and
                    the Isle of Man are closely linked with the UK but are not
                    part of it.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>British overseas territories:</strong> Areas such as
                    St Helena and the Falkland Islands are linked to the UK but
                    not part of it.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Governance:</strong> The UK is governed by the
                    parliament in Westminster, with Scotland, Wales, and
                    Northern Ireland having their own parliaments or assemblies
                    with devolved powers.
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
