import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Customs and Traditions in the UK",
};

const page = () => {
  const questions = [
    {
      question: "What is celebrated on 25 December?",
      options: ["Boxing Day", "Easter", "Christmas Day", "Diwali"],
      answer: "c",
      answerText: "Christmas Day",
    },
    {
      question: "When does Lent begin?",
      options: [
        "Shrove Tuesday",
        "Ash Wednesday",
        "Easter Monday",
        "Christmas Eve",
      ],
      answer: "b",
      answerText: "Ash Wednesday",
    },
    {
      question: "What is the significance of Bonfire Night?",
      options: [
        "Celebrating the New Year",
        "Honoring war heroes",
        "Guy Fawkes' failed plot to kill the king",
        "Marking the start of winter",
      ],
      answer: "c",
      answerText: "Guy Fawkes' failed plot to kill the king",
    },
    {
      question: "What does Eid al-Fitr celebrate?",
      options: [
        "The end of Ramadan",
        "The birth of Jesus Christ",
        "The founding of the Khalsa",
        "The Jewish struggle for freedom",
      ],
      answer: "a",
      answerText: "The end of Ramadan",
    },
    {
      question: "Which festival is known as the Festival of Lights?",
      options: ["Christmas", "Diwali", "Halloween", "Hannukah"],
      answer: "b",
      answerText: "Diwali",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Customs and Traditions in the UK"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter outlines the major religious and secular festivals,
          holidays, and traditions celebrated by people across the United
          Kingdom.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Christian Festivals Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Main Christian Festivals
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Christmas Day (25 December):</strong> Celebrates the
                    birth of Jesus Christ. Public holiday marked by gift-giving,
                    special meals, and decorations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Boxing Day (26 December):</strong> The day after
                    Christmas; a public holiday in the UK.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Easter:</strong> Marks the death of Jesus on Good
                    Friday and his resurrection on Easter Sunday. Public
                    holidays on Good Friday and Easter Monday.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Lent:</strong> A 40-day period of reflection before
                    Easter, often marked by fasting or giving up something.
                  </span>
                </li>
              </ul>
            </div>

            {/* Other Religious Festivals Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Other Religious Festivals
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Diwali:</strong> Hindu and Sikh festival celebrated
                    in October or November, known as the Festival of Lights,
                    celebrating the victory of good over evil.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Hannukah:</strong> Jewish festival in November or
                    December, lasting eight days, commemorating religious
                    freedom. A candle is lit each night of the festival.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Eid al-Fitr:</strong> Celebrates the end of Ramadan
                    for Muslims, thanking Allah for the strength to fast for a
                    month.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Eid ul-Adha:</strong> Commemorates the prophet
                    Ibrahim's willingness to sacrifice his son, marked by the
                    sacrifice of an animal.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Vaisakhi (14 April):</strong> Sikh festival
                    celebrating the founding of the Khalsa with parades,
                    dancing, and singing.
                  </span>
                </li>
              </ul>
            </div>

            {/* Other Events Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Other Events Celebrated in the UK
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>New Year (1 January):</strong> Public holiday with
                    celebrations on New Year's Eve, called Hogmanay in Scotland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Valentine’s Day (14 February):</strong> Day for
                    lovers to exchange gifts and cards, sometimes anonymously.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>April Fool’s Day (1 April):</strong> A day for jokes
                    and pranks, often with hoaxes in media.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Mothering Sunday:</strong> Celebrated three weeks
                    before Easter, when children give cards and gifts to their
                    mothers.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Father’s Day:</strong> Celebrated on the third
                    Sunday of June to honor fathers with gifts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Halloween (31 October):</strong> An ancient festival
                    where people dress in costumes, carve pumpkins, and
                    celebrate with ‘trick or treat’.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Bonfire Night (5 November):</strong> Commemorates
                    the failed plot by Guy Fawkes to kill the king in 1605,
                    celebrated with fireworks.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Remembrance Day (11 November):</strong> Honors those
                    who died in war, especially during WWI, with a two-minute
                    silence and poppies.
                  </span>
                </li>
              </ul>
            </div>

            {/* Bank Holiday Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                What a Bank Holiday Is
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Bank Holidays:</strong> Public holidays when banks
                    and many businesses close. They occur in early May, late May
                    or early June, August, and some special days in Northern
                    Ireland.
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
