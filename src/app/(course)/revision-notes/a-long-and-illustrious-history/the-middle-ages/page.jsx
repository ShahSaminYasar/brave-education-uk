import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Middle Ages",
};

const page = () => {
  const questions = [
    {
      question:
        "Which of the following was NOT a consequence of the Black Death?",
      options: [
        "Population decline",
        "Agricultural changes",
        "Increased food production",
        "Labor shortages",
      ],
      answer: "c",
      answerText: "Increased food production",
    },
    {
      question: "The Hundred Years War was fought between:",
      options: [
        "England and Scotland",
        "England and France",
        "England and Ireland",
        "England and Wales",
      ],
      answer: "b",
      answerText: "England and France",
    },
    {
      question: "What was the significance of the Magna Carta?",
      options: [
        "It established the Church of England",
        "It ended the Wars of the Roses",
        "It limited the king's power and established that he was subject to the law",
        "It united the House of Lancaster and the House of York",
      ],
      answer: "c",
      answerText:
        "It limited the king's power and established that he was subject to the law",
    },
    {
      question:
        "Which of these was NOT a part of the English Parliament in the Middle Ages?",
      options: [
        "House of Lords",
        "House of Commons",
        "House of Clergy",
        "King's council of advisers",
      ],
      answer: "c",
      answerText: "House of Clergy",
    },
    {
      question:
        "Who defeated King Richard III at the Battle of Bosworth Field?",
      options: ["William the Conqueror", "Henry VIII", "Henry VII", "Edward I"],
      answer: "c",
      answerText: "Henry VII",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Middle Ages"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter explores the turbulent Middle Ages, covering major
          conflicts, the development of Parliament, the societal impact of the
          Black Death, and the conclusion of the era with the Wars of the Roses.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Wars Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Wars in the Middle Ages
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>English conquests:</strong> English kings fought
                    with Welsh, Scottish, and Irish noblemen for control of
                    their lands.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Welsh annexation:</strong> In 1284, King Edward I
                    introduced the Statute of Rhuddlan, annexing Wales to the
                    Crown of England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Scottish independence:</strong> Scotland remained
                    unconquered, with Robert the Bruce defeating the English at
                    the Battle of Bannockburn in 1314.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Irish conquest:</strong> By 1200, the English ruled
                    an area of Ireland known as the Pale, around Dublin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Crusades:</strong> Many English knights participated
                    in the Crusades to control the Holy Land.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Hundred Years War:</strong> A long war between
                    England and France, including the famous Battle of Agincourt
                    in 1415.
                  </span>
                </li>
              </ul>
            </div>

            {/* Parliament Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Development of Parliament
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Origins:</strong> Developed from the king's council
                    of advisers, including important noblemen and Church
                    leaders.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Magna Carta:</strong> Signed in 1215, it established
                    that even the king was subject to the law and restricted his
                    power.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Two Houses:</strong> Parliament evolved into two
                    separate parts - the House of Lords and the House of
                    Commons.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Scottish Parliament:</strong> Developed similarly
                    but with three Houses called Estates: lords, commons, and
                    clergy.
                  </span>
                </li>
              </ul>
            </div>

            {/* Land Ownership Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Land Ownership
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Feudalism:</strong> The Normans introduced a system
                    where the king gave land to lords in return for help in war.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Serfs:</strong> Most peasants were serfs who worked
                    on their lord's land and couldn't move away.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Clan system:</strong> In northern Scotland and
                    Ireland, land was owned by members of prominent families
                    called clans.
                  </span>
                </li>
              </ul>
            </div>

            {/* Black Death Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Effects of the Black Death
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Population decline:</strong> About one-third of the
                    population in England, Scotland, and Wales died.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Agricultural changes:</strong> Less need to grow
                    cereal crops due to smaller population.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Labor shortages:</strong> Led to peasants demanding
                    higher wages.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Social changes:</strong> New social classes emerged,
                    including the gentry and a stronger middle class in towns.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Irish impact:</strong> The Pale (English-controlled
                    area) became smaller for a time.
                  </span>
                </li>
              </ul>
            </div>

            {/* Language and Culture Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Development of English Language and Culture
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Language fusion:</strong> Norman French and
                    Anglo-Saxon gradually combined to form the English language.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Official adoption:</strong> By 1400, English became
                    the language of official documents and the royal court.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Literature:</strong> Geoffrey Chaucer wrote The
                    Canterbury Tales, one of the first printed books in English.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Architecture:</strong> Castles and great cathedrals
                    were built during this period.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Trade and immigration:</strong> England became an
                    important trading nation, attracting skilled workers from
                    abroad.
                  </span>
                </li>
              </ul>
            </div>

            {/* Wars of the Roses Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Wars of the Roses and House of Tudor
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Civil war:</strong> Fought between the House of
                    Lancaster (red rose) and the House of York (white rose) from
                    1455.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Battle of Bosworth Field:</strong> In 1485, Henry
                    Tudor defeated King Richard III, ending the war.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>House of Tudor:</strong> Henry VII became the first
                    Tudor king, uniting the houses by marrying Elizabeth of
                    York.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Tudor rose:</strong> The symbol of the House of
                    Tudor was a red rose with a white rose inside, representing
                    the union of the two houses.
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
