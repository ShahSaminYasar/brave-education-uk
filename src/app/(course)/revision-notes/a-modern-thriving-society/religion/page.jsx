import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Religions Practised in the UK",
};

const page = () => {
  const questions = [
    {
      question:
        "What percentage of the UK population identified as Christian in 2009?",
      options: ["70%", "60%", "50%", "30%"],
      answer: "a",
      answerText: "70%",
    },
    {
      question:
        "Which church is the established Church of the state in England?",
      options: [
        "Roman Catholic Church",
        "Church of England (Anglican)",
        "Methodist Church",
        "Baptist Church",
      ],
      answer: "b",
      answerText: "Church of England (Anglican)",
    },
    {
      question:
        "Which of the following religions makes up around 1% of the UK population?",
      options: ["Hinduism", "Sikhism", "Judaism", "Buddhism"],
      answer: "b",
      answerText: "Sikhism",
    },
    {
      question: "On what date is St George's Day celebrated in England?",
      options: ["1 March", "17 March", "23 April", "30 November"],
      answer: "c",
      answerText: "23 April",
    },
    {
      question:
        "Which countries have their patron saint's day as an official holiday?",
      options: [
        "England and Wales",
        "Scotland and Northern Ireland",
        "Wales and Northern Ireland",
        "Scotland and England",
      ],
      answer: "b",
      answerText: "Scotland and Northern Ireland",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Religions Practised in the UK"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter details the religious diversity of the UK, the role of
          the established churches, and the celebration of national patron
          saints.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Religions Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Religions Practised in the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Christian Majority:</strong> The UK is historically
                    a Christian country, with 70% identifying as Christian in
                    the 2009 Citizenship Survey.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Muslim Community:</strong> 4% of the UK population
                    identified as Muslim, with numerous mosques established
                    nationwide.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Hindu Population:</strong> Hindus account for 2% of
                    the population, and there are many Hindu temples in the UK.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sikh Presence:</strong> Around 1% of people in the
                    UK are Sikh, and Sikh gurdwaras are present throughout the
                    country.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Jewish and Buddhist Minorities:</strong> Both Jews
                    and Buddhists make up less than 0.5% each of the UK
                    population.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Other Religions and Non-Religious:</strong> Around
                    2% follow other religions, and 21% reported having no
                    religion in the survey.
                  </span>
                </li>
              </ul>
            </div>

            {/* Christian Churches Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Christian Churches in the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Established Church:</strong> The Church of England
                    (Anglican Church) is the established Church of the state in
                    England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Monarch's Role:</strong> The monarch is the head of
                    the Church of England, with spiritual leadership by the
                    Archbishop of Canterbury.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Church of Scotland:</strong> A Presbyterian Church
                    that is the national Church in Scotland, governed by
                    ministers and elders.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Non-Established Churches:</strong> Wales and
                    Northern Ireland do not have an established Church, with
                    various Protestant groups and Roman Catholicism widely
                    practiced.
                  </span>
                </li>
              </ul>
            </div>

            {/* Patron Saints' Days Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Patron Saints' Days
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>St David's Day:</strong> Celebrated on 1 March in
                    Wales.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>St Patrick's Day:</strong> Celebrated on 17 March in
                    Northern Ireland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>St George's Day:</strong> Celebrated on 23 April in
                    England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>St Andrew's Day:</strong> Celebrated on 30 November
                    in Scotland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Public Holidays:</strong> Official holidays for
                    patron saints' days only exist in Scotland and Northern
                    Ireland, though celebrations occur throughout the UK.
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
