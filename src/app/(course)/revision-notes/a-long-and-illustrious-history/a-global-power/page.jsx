import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: A Global Power",
};

const page = () => {
  const questions = [
    {
      question:
        "What document confirmed the rights of Parliament over the monarchy in 1689?",
      options: [
        "Magna Carta",
        "The Declaration of Independence",
        "The Bill of Rights",
        "The Act of Union",
      ],
      answer: "c",
      answerText: "The Bill of Rights",
    },
    {
      question:
        "Who became the first official Prime Minister of Great Britain?",
      options: [
        "Winston Churchill",
        "George I",
        "Sir Robert Walpole",
        "Benjamin Disraeli",
      ],
      answer: "c",
      answerText: "Sir Robert Walpole",
    },
    {
      question:
        "Which event attempted to restore a Stuart king to the throne in 1745?",
      options: [
        "The Glorious Revolution",
        "The Jacobite Rebellion",
        "The American Revolution",
        "The French Revolution",
      ],
      answer: "b",
      answerText: "The Jacobite Rebellion",
    },
    {
      question:
        "Who was a prominent Scottish economist during the Enlightenment?",
      options: [
        "David Hume",
        "Robert Burns",
        "Adam Smith",
        "Sir Robert Walpole",
      ],
      answer: "c",
      answerText: "Adam Smith",
    },
    {
      question:
        "What significant change took place during the Industrial Revolution?",
      options: [
        "Expansion of agriculture",
        "Mechanisation and use of steam power",
        "Disbanding of the British Army",
        "Colonisation of South America",
      ],
      answer: "b",
      answerText: "Mechanisation and use of steam power",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"A Global Power"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
            Src
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter details Britain's transformation into a global power,
          covering the establishment of a constitutional monarchy, the
          Industrial Revolution, and the expansion and complexities of the
          British Empire.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Politics Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Politics
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Bill of Rights:</strong> In 1689, the Bill of
                    Rights confirmed the rights of Parliament and limited the
                    king’s power, establishing the foundation for a
                    constitutional monarchy.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Creation of the Kingdom of Great Britain:</strong>{" "}
                    In 1707, the Act of Union merged England and Scotland into
                    Great Britain while keeping separate legal and religious
                    institutions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>First Prime Minister:</strong> Due to George I’s
                    reliance on ministers, the role of Prime Minister emerged,
                    first officially held by Sir Robert Walpole.
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Reforms Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Social Reforms
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Voting Reforms and Suffrage:</strong> Reforms
                    increased voter eligibility, eventually leading to women
                    gaining partial voting rights in 1918.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Abolition of the Slave Trade:</strong> The slave
                    trade was abolished in 1807 due to abolitionist campaigns,
                    leading to the 1833 Emancipation Act.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Famine and Nationalism in Ireland:</strong> The
                    Irish famine, along with growing nationalist movements,
                    contributed to social upheaval and emigration during the
                    19th century.
                  </span>
                </li>
              </ul>
            </div>

            {/* Growth and Immigration Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Growth and Immigration
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Enlightenment:</strong> Prominent Scottish
                    thinkers like Adam Smith and David Hume advanced ideas in
                    economics and philosophy during the Enlightenment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Industrial Revolution:</strong> Britain’s
                    economy shifted with the mechanisation and use of steam
                    power, sparking increased production and urbanisation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Free Trade and Economic Expansion:</strong> During
                    the Victorian era, the repeal of the Corn Laws supported
                    industrial growth and improved working conditions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Migration and Refugees' Settlement:</strong> Between
                    1680 and 1720, many Huguenot refugees settled in Britain,
                    contributing to cultural and economic growth.
                  </span>
                </li>
              </ul>
            </div>

            {/* Conflicts and Wars Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Conflicts and Wars
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Defeat of the Jacobite Rebellion:</strong> Bonnie
                    Prince Charlie’s rebellion in 1745 ended at the Battle of
                    Culloden, diminishing clan power and leading to the Highland
                    Clearances.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The American War of Independence:</strong> In 1776,
                    13 American colonies declared independence from Britain,
                    leading to the American Revolution and eventual victory.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>War with France and the Defeat of Napoleon:</strong>{" "}
                    Britain fought several wars with France, culminating in the
                    naval victory at Trafalgar (1805) and Napoleon’s defeat in
                    1815.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Crimean War:</strong> This conflict introduced
                    media coverage developments and military reforms, including
                    Florence Nightingale’s medical care reforms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Boer War:</strong> War in South Africa with settlers
                    from the Netherlands called the Boers. Post-Boer War,
                    discussions around the Empire's direction led to greater
                    autonomy for colonies and eventual independence.
                  </span>
                </li>
              </ul>
            </div>

            {/* The Victorian Era Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The Victorian Era
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Expansion and Influence:</strong> The Victorian Age
                    saw the British Empire reach its height, expanding into
                    India, Australia, and large parts of Africa.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Reign of Queen Victoria:</strong> This era marked
                    advancements in trade, industry, and social reforms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Shifts Towards Autonomy:</strong> Post-Boer War,
                    discussions around the Empire's direction led to greater
                    autonomy for colonies and eventual independence.
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
