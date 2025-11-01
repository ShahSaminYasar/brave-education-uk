import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The Tudors and Stuarts",
};

const page = () => {
  const questions = [
    {
      question: "Who established the Church of England?",
      options: ["Mary I", "Elizabeth I", "Henry VIII", "James I"],
      answer: "c",
      answerText: "Henry VIII",
    },
    {
      question:
        "What was the name of the period of republican rule in England?",
      options: [
        "The Protectorate",
        "The Commonwealth",
        "The Interregnum",
        "The Restoration",
      ],
      answer: "b",
      answerText: "The Commonwealth",
    },
    {
      question:
        "Which playwright is considered the greatest of the Elizabethan era?",
      options: [
        "Christopher Marlowe",
        "Ben Jonson",
        "William Shakespeare",
        "Thomas Kyd",
      ],
      answer: "c",
      answerText: "William Shakespeare",
    },
    {
      question: "What was the 'Glorious Revolution'?",
      options: [
        "The overthrow of Charles I",
        "The restoration of Charles II",
        "The peaceful takeover by William and Mary",
        "The defeat of the Spanish Armada",
      ],
      answer: "c",
      answerText: "The peaceful takeover by William and Mary",
    },
    {
      question:
        "Who was the Lord Protector during the period when England was a republic?",
      options: [
        "Charles I",
        "Oliver Cromwell",
        "Richard Cromwell",
        "William of Orange",
      ],
      answer: "b",
      answerText: "Oliver Cromwell",
    },
    {
      question: "Why did Henry VIII break away from the Catholic Church?",
      options: [
        "He wanted to marry Anne Boleyn",
        "He wanted to centralize power",
        "He wanted to maintain Catholic traditions",
        "He wanted to avoid war",
      ],
      answer: "a",
      answerText: "He wanted to marry Anne Boleyn",
    },
    {
      question: "What was a result of the Elizabethan Religious Settlement?",
      options: [
        "Complete Protestant control",
        "Toleration of both Catholics and Protestants",
        "Civil war",
        "Restoration of Catholic rule",
      ],
      answer: "b",
      answerText: "Toleration of both Catholics and Protestants",
    },
    {
      question: "Which figure is most associated with Elizabethan drama?",
      options: [
        "William Shakespeare",
        "Christopher Wren",
        "Oliver Cromwell",
        "Thomas More",
      ],
      answer: "a",
      answerText: "William Shakespeare",
    },
    {
      question: "When did England become a republic?",
      options: [
        "After the defeat of the Spanish Armada",
        "During the reign of Charles II",
        "During the Commonwealth period",
        "During the Glorious Revolution",
      ],
      answer: "c",
      answerText: "During the Commonwealth period",
    },
    {
      question: "What caused the Glorious Revolution?",
      options: [
        "James II’s Catholicism",
        "Cromwell’s dictatorship",
        "William of Orange’s rebellion",
        "Execution of Charles I",
      ],
      answer: "a",
      answerText: "James II’s Catholicism",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The Tudors and Stuarts"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the significant religious, political, and cultural
          changes from the reign of Henry VIII, through the English Civil War
          and Republic, to the Glorious Revolution.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Religion Changes Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Religion Changes During This Period
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Henry VIII's Break from the Church of Rome:</strong>{" "}
                    Henry VIII famously broke away from the Catholic Church
                    after disagreements with the Pope over his desire to divorce
                    Catherine of Aragon.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Six Wives of Henry VIII:</strong> Henry VIII had
                    six wives with various political and personal motivations
                    for each marriage and divorce, leading to the establishment
                    of the Church of England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Establishment of the Church of England:</strong>{" "}
                    Henry VIII established the Church of England, with himself
                    as the Supreme Head, initiating a movement toward
                    Protestantism in England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Tudor Religious Policies:</strong> The religious
                    conflicts of this period included the switch between
                    Catholicism and Protestantism based on the reigning monarch
                    (e.g., Edward VI promoted Protestantism, while Mary I
                    restored Catholicism).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Elizabeth I's Religious Settlement:</strong>{" "}
                    Elizabeth I aimed for a middle ground with the Elizabethan
                    Religious Settlement to maintain stability by tolerating
                    both Catholic and Protestant practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>
                      The Reformation in Scotland and Mary, Queen of Scots:
                    </strong>{" "}
                    The reformation established a Protestant Church out of the
                    state's control, and Mary, Queen of Scots, was executed due
                    to suspected political treason.
                  </span>
                </li>
              </ul>
            </div>

            {/* Poetry and Drama Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Poetry and Drama in the Elizabethan Period
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Renaissance Influence:</strong> The Elizabethan
                    period was marked by a flowering of English literature,
                    influenced by the European Renaissance.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>William Shakespeare:</strong> The most prominent
                    figure of this era, Shakespeare’s plays combined drama,
                    history, and poetry, appealing to all social classes.
                  </span>
                </li>
              </ul>
            </div>

            {/* Ireland Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Britain's Involvement in Ireland
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Tudor Conquest of Ireland:</strong> England
                    intensified its control over Ireland during the Tudor
                    period, establishing English laws and practices in Irish
                    territories.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Plantations in Ulster:</strong> English and Scottish
                    Protestants were settled in Ireland during this period,
                    contributing to future religious and political conflicts.
                  </span>
                </li>
              </ul>
            </div>

            {/* Parliament and Republic Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Development of Parliament and England's Republic
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Rise of Parliament:</strong> Parliament
                    gradually gained influence during the Tudor and Stuart
                    periods, especially in matters of taxation and law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The English Civil War (1642-1651):</strong> Tensions
                    between King Charles I and Parliament led to the Civil War,
                    ultimately resulting in the execution of Charles I.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>
                      Oliver Cromwell and the English Republic (Commonwealth,
                      1649-1660):
                    </strong>{" "}
                    After the Civil War, England briefly became a republic under
                    Oliver Cromwell, marking the only period in its history
                    without a monarch.
                  </span>
                </li>
              </ul>
            </div>

            {/* Restoration Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Restoration of Monarchy
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Failure of the Commonwealth:</strong> The republican
                    government failed to gain popular support, and instability
                    led to the restoration of the monarchy.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Charles II's Return:</strong> In 1660, Charles II
                    was invited back from exile, marking the Restoration of the
                    Monarchy.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Re-establishment of Traditional Authority:</strong>{" "}
                    The monarchy, along with the Church of England, was
                    reinstated as central institutions of power.
                  </span>
                </li>
              </ul>
            </div>

            {/* Royal Society Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Royal Society
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Isaac Newton (born 1642):</strong> Promotion of
                    'natural knowledge' during Charles II's reign. The Royal
                    Society is the oldest surviving scientific society in the
                    world.
                  </span>
                </li>
              </ul>
            </div>

            {/* Glorious Revolution Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Glorious Revolution
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>James II's Catholicism:</strong> James II's open
                    Catholicism caused conflict with Protestant England, leading
                    to fears of a return to Catholic rule.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>William of Orange's Invasion:</strong> In 1688,
                    William of Orange was invited by Protestant nobles to invade
                    England and take the throne.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Establishment of a Constitutional Monarchy:</strong>{" "}
                    The Glorious Revolution resulted in the overthrow of James
                    II and the establishment of a constitutional monarchy under
                    William III and Mary II.
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
