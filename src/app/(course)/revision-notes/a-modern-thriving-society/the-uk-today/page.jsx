import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The UK Today",
};

const page = () => {
  const questions = [
    {
      question: "What is the capital city of the UK?",
      options: ["Edinburgh", "Cardiff", "London", "Belfast"],
      answer: "c",
      answerText: "London",
    },
    {
      question:
        "Which language is spoken in parts of the Highlands and Islands of Scotland?",
      options: ["Welsh", "Irish Gaelic", "Scottish Gaelic", "French"],
      answer: "c",
      answerText: "Scottish Gaelic",
    },
    {
      question: "What has caused recent population growth in the UK?",
      options: [
        "Decrease in birth rates",
        "Increase in migration",
        "Fewer people moving abroad",
        "Natural disasters",
      ],
      answer: "b",
      answerText: "Increase in migration",
    },
    {
      question: "Which of the following currencies is used in the UK?",
      options: ["Euro", "US Dollar", "Pound Sterling", "Canadian Dollar"],
      answer: "c",
      answerText: "Pound Sterling",
    },
    {
      question:
        "What does the UK's legal system mandate concerning gender equality?",
      options: [
        "Women must stay at home",
        "Equal rights for men and women",
        "Women should earn less than men",
        "Men exclusively own property",
      ],
      answer: "b",
      answerText: "Equal rights for men and women",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The UK Today"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter provides an overview of the modern United Kingdom,
          including its diverse population, political geography, culture, and
          commitment to equality.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Diversity Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Diversity of the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Ethnic Diversity:</strong> The UK is characterized
                    by its ethnic and religious diversity, with nearly 10% of
                    the population having foreign-born parents or grandparents.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Multinational Society:</strong> The UK is composed
                    of multinational and multiracial populations that contribute
                    to a rich and varied culture.
                  </span>
                </li>
              </ul>
            </div>

            {/* Capital Cities Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Capital Cities
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>London:</strong> The capital city of the UK is
                    London. It is also the financial, cultural, and political
                    heart of the nation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Edinburgh:</strong> The capital city of Scotland is
                    Edinburgh.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Cardiff:</strong> The capital city of Wales is
                    Cardiff.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Belfast:</strong> The capital city of Northern
                    Ireland is Belfast.
                  </span>
                </li>
              </ul>
            </div>

            {/* UK Currency Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                UK Currency
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Pound Sterling (£):</strong> The UK's currency is
                    the pound sterling, subdivided into 100 pence. The
                    denominations include various coins and banknotes (Coins:
                    1p, 2p, 5p, 10p, 20p, 50p, £1, £2. Notes: £5, £10, £20, £50.
                    Bank of Scotland also issues a £100 note.).
                  </span>
                </li>
              </ul>
            </div>

            {/* Languages Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Languages and Dialects
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Welsh:</strong> Spoken in Wales and taught in
                    schools and universities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Scottish Gaelic:</strong> Spoken in the Highlands
                    and Islands of Scotland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Irish Gaelic:</strong> Spoken by some in Northern
                    Ireland.
                  </span>
                </li>
              </ul>
            </div>

            {/* Population Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Population
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Population Growth:</strong> The UK population has
                    grown from just over 4 million in 1600 to an estimated 67.6
                    million in 2022.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Population Distribution:</strong> England
                    constitutes about 84% of the total UK population, followed
                    by Scotland, Wales, and Northern Ireland.
                  </span>
                </li>
              </ul>
            </div>

            {/* Equal Society Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                An Equal Society
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Gender Equality:</strong> UK law mandates equal
                    rights for men and women regarding work, property, marriage,
                    and divorce.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Employment Opportunities:</strong> Women's
                    participation in the workforce is nearly equal to that of
                    men with more females attaining higher education and
                    employment in high-level positions than before.
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
