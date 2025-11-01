import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Early Britain",
};

const page = () => {
  const questions = [
    {
      question: "Who were the first people to live in Britain?",
      options: ["Romans", "Anglo-Saxons", "Hunter-gatherers", "Normans"],
      answer: "c",
      answerText: "Hunter-gatherers",
    },
    {
      question:
        "What monument, built during the Stone Age, still stands in Wiltshire?",
      options: ["Big Ben", "Stonehenge", "Hadrian's Wall", "Tower of London"],
      answer: "b",
      answerText: "Stonehenge",
    },
    {
      question: "When did the Bronze Age begin in Britain?",
      options: [
        "About 2,000 years ago",
        "About 4,000 years ago",
        "About 6,000 years ago",
        "About 10,000 years ago",
      ],
      answer: "b",
      answerText: "About 4,000 years ago",
    },
    {
      question: "Who led the successful Roman invasion of Britain in AD 43?",
      options: ["Julius Caesar", "Emperor Claudius", "Boudicca", "Hadrian"],
      answer: "b",
      answerText: "Emperor Claudius",
    },
    {
      question:
        "What did the Romans build to defend against the Picts in Scotland?",
      options: [
        "Stonehenge",
        "The White Cliffs of Dover",
        "Hadrian's Wall",
        "The Tower of London",
      ],
      answer: "c",
      answerText: "Hadrian's Wall",
    },
    {
      question: "Which groups invaded Britain after the Romans left?",
      options: [
        "Jutes, Angles, and Saxons",
        "French, Spanish, and Portuguese",
        "Greeks, Persians, and Egyptians",
        "Huns, Goths, and Vandals",
      ],
      answer: "a",
      answerText: "Jutes, Angles, and Saxons",
    },
    {
      question: "When did the Vikings first visit Britain?",
      options: ["AD 410", "AD 600", "AD 789", "AD 1066"],
      answer: "c",
      answerText: "AD 789",
    },
    {
      question:
        "Who defeated Harold, the Saxon king of England, in the Battle of Hastings?",
      options: [
        "Julius Caesar",
        "William the Conqueror",
        "King Cnut",
        "Emperor Claudius",
      ],
      answer: "b",
      answerText: "William the Conqueror",
    },
    {
      question: "What was the Domesday Book?",
      options: [
        "A religious text",
        "A collection of Norman laws",
        "A survey of England's towns, villages, and resources",
        "A record of the Battle of Hastings",
      ],
      answer: "c",
      answerText: "A survey of England's towns, villages, and resources",
    },
    {
      question: "How did the Norman Conquest influence the English language?",
      options: [
        "It introduced Latin as the primary language",
        "It had no impact on the language",
        "It influenced the development of English through Norman French",
        "It replaced English with French entirely",
      ],
      answer: "c",
      answerText:
        "It influenced the development of English through Norman French",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Early Britain"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the earliest history of the UK, from its first
          inhabitants during the Stone Age, through the Roman occupation, and
          concluding with the pivotal Norman Invasion.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Before Romans Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                History of the UK before the Romans
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Stone Age:</strong> The first inhabitants were
                    hunter-gatherers who followed herds of deer and horses.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Land Bridge:</strong> Britain was connected to the
                    continent until about 10,000 years ago.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>First Farmers:</strong> Arrived about 6,000 years
                    ago, likely from south-east Europe.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Stonehenge:</strong> A monument built during the
                    Stone Age, probably for seasonal ceremonies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Bronze Age:</strong> Began around 4,000 years ago,
                    characterized by metalworking and round barrows.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Iron Age:</strong> Followed the Bronze Age, with
                    hill forts and the first British coins.
                  </span>
                </li>
              </ul>
            </div>

            {/* Romans Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Impact of the Romans on British Society
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Initial Invasion:</strong> Julius Caesar's
                    unsuccessful invasion in 55 BC.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Claudius' Conquest:</strong> Successful occupation
                    of most of Britain in AD 43.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Hadrian's Wall:</strong> Built to defend against the
                    Picts in Scotland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Infrastructure:</strong> Romans built roads and
                    public buildings.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Legal System:</strong> Introduced a structure of
                    law.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Agriculture:</strong> Introduced new plants and
                    animals.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Christianity:</strong> First Christian communities
                    appeared in the 3rd and 4th centuries AD.
                  </span>
                </li>
              </ul>
            </div>

            {/* After Romans Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Different Groups that Invaded after the Romans
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Anglo-Saxons:</strong> Jutes, Angles, and Saxons
                    invaded after the Roman departure in AD 410.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Anglo-Saxon Kingdoms:</strong> Established by about
                    AD 600, mainly in what is now England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Vikings:</strong> First raided in AD 789, later
                    formed communities in eastern England and Scotland.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Danelaw:</strong> Area of Viking settlement in
                    eastern and northern England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Danish Kings:</strong> Brief period of rule,
                    including King Cnut (Canute).
                  </span>
                </li>
              </ul>
            </div>

            {/* Norman Invasion Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Importance of the Norman Invasion in 1066
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Battle of Hastings:</strong> William of Normandy
                    defeated Harold, the Saxon king of England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Last Successful Invasion:</strong> The Norman
                    Conquest was the last successful foreign invasion of
                    England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Governmental Changes:</strong> Led to significant
                    changes in government structures.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Social Changes:</strong> Altered social structures
                    in England.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Linguistic Influence:</strong> Norman French
                    influenced the development of the English language.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Domesday Book:</strong> Comprehensive survey of
                    England's towns, villages, and resources.
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
