import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The 20th Century",
};

const page = () => {
  const questions = [
    {
      question: "What event triggered the outbreak of the First World War?",
      options: [
        "The invasion of Poland",
        "The assassination of Archduke Franz Ferdinand",
        "The sinking of the Lusitania",
        "The Russian Revolution",
      ],
      answer: "b",
      answerText: "The assassination of Archduke Franz Ferdinand",
    },
    {
      question:
        "In which year was Ireland partitioned into Northern Ireland and the Irish Free State?",
      options: ["1913", "1916", "1921", "1922"],
      answer: "d",
      answerText: "1922",
    },
    {
      question:
        "Who became the Prime Minister of Britain in 1940 and led the country through most of World War II?",
      options: [
        "Neville Chamberlain",
        "Winston Churchill",
        "Clement Attlee",
        "Stanley Baldwin",
      ],
      answer: "b",
      answerText: "Winston Churchill",
    },
    {
      question:
        "What was the name given to the German bombing campaign against British cities during World War II?",
      options: [
        "The Luftwaffe",
        "The Blitzkrieg",
        "The Blitz",
        "The Battle of Britain",
      ],
      answer: "c",
      answerText: "The Blitz",
    },
    {
      question:
        "On which date did Allied forces land in Normandy, an event often referred to as 'D-Day'?",
      options: [
        "June 6, 1944",
        "August 15, 1945",
        "May 8, 1945",
        "September 1, 1939",
      ],
      answer: "a",
      answerText: "June 6, 1944",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The 20th Century"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the tumultuous events of the 20th century,
          including the two World Wars that reshaped global politics and the
          significant partition of Ireland.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* First World War Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                First World War
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Outbreak of War:</strong> Triggered by the
                    assassination of Archduke Franz Ferdinand of Austria on June
                    28, 1914, leading to a chain of events that resulted in a
                    global conflict.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Allied Powers:</strong> Britain fought alongside
                    France, Russia, Japan, Belgium, Serbia, and later Greece,
                    Italy, Romania, and the United States.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>British Empire's Involvement:</strong> Over a
                    million Indians and soldiers from the West Indies, Africa,
                    Australia, New Zealand, and Canada fought for Britain.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Major Battles:</strong> The Battle of the Somme in
                    July 1916 resulted in about 60,000 British casualties on the
                    first day alone.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>End of the War:</strong> The First World War ended
                    at 11:00 am on November 11, 1918, with victory for Britain
                    and its allies.
                  </span>
                </li>
              </ul>
            </div>

            {/* Partition of Ireland Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Partition of Ireland
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Home Rule Promise:</strong> In 1913, the British
                    government promised 'Home Rule' for Ireland, proposing a
                    self-governing Ireland within the UK.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Easter Rising:</strong> In 1916, Irish Nationalists
                    staged an uprising against British rule in Dublin.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Irish Free State:</strong> In 1922, Ireland was
                    divided into two countries: Northern Ireland (part of the
                    UK) and the Irish Free State.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Troubles:</strong> Years of disagreement led to
                    a terror campaign in Northern Ireland and elsewhere.
                  </span>
                </li>
              </ul>
            </div>

            {/* Second World War Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Second World War
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Outbreak of War:</strong> Hitler's invasion of
                    Poland in 1939 led Britain and France to declare war on
                    Germany.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Dunkirk Evacuation:</strong> In 1940, over 300,000
                    Allied soldiers were evacuated from the beaches of Dunkirk.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Battle of Britain:</strong> The RAF successfully
                    defended Britain against German air attacks in the summer of
                    1940.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Blitz:</strong> German bombing campaign against
                    British cities, particularly affecting London and Coventry.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Winston Churchill:</strong> Became Prime Minister in
                    1940 and led Britain through the war with inspirational
                    leadership.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>D-Day:</strong> On June 6, 1944, Allied forces
                    landed in Normandy, marking a turning point in the war.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>End of the War:</strong> Germany was defeated in May
                    1945, and Japan surrendered in August 1945 after the atomic
                    bombings of Hiroshima and Nagasaki.
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
