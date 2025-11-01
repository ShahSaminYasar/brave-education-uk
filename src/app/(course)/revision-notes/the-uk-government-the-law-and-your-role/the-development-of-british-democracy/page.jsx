import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: The Development of British Democracy",
};

const page = () => {
  const questions = [
    {
      question: "In early 19th century Britain, who were allowed to vote?",
      options: [
        "All adult men and women",
        "Only women over 30",
        "Property-owning men over 21",
        "Men and women over 18",
      ],
      answer: "c",
      answerText: "Property-owning men over 21",
    },
    {
      question: "What did the Chartists campaign for in the 1830s and 1840s?",
      options: [
        "Abolition of monarchy",
        "Democratic reforms including universal male suffrage",
        "Expansion of the British Empire",
        "Women's voting rights",
      ],
      answer: "b",
      answerText: "Democratic reforms including universal male suffrage",
    },
    {
      question: "By what year were most Chartist reforms adopted?",
      options: ["1848", "1928", "1969", "1918"],
      answer: "d",
      answerText: "1918",
    },
    {
      question: "When was the voting age reduced to 18 in Britain?",
      options: ["1918", "1969", "1928", "1848"],
      answer: "b",
      answerText: "1969",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"The Development of British Democracy"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter traces the evolution of the UK's political system from a
          limited franchise to the comprehensive democracy in place today,
          highlighting key reforms and movements.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Key Points Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Key Points
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Definition of Democracy:</strong> Democracy is
                    defined as a system of government where every adult in the
                    population has a say, either through direct voting or by
                    electing representatives to make decisions on their behalf.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>19th Century Britain:</strong> At the beginning of
                    the 19th century, Britain was not a democracy as it allowed
                    only a small group of property-owning men over the age of 21
                    to vote, limiting widespread electoral participation.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Expansion of Franchise:</strong> Over the 19th
                    century, the franchise – the pool of eligible voters –
                    expanded, leading to greater political involvement from
                    ordinary men and women.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Chartists' Reforms:</strong> In the 1830s and 1840s,
                    the Chartists campaigned for democratic reform with demands
                    for universal male suffrage, annual elections, equal
                    electoral districts, secret ballots, eligibility of any man
                    to stand as MP, and paid MPs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Perceived Failure and Later Adoption:</strong>{" "}
                    Although the Chartists’ reforms were initially seen as a
                    failure, by 1918 most had been realized. Furthermore, these
                    reforms eventually extended voting rights to women over 30,
                    and later to all adults over 21, with the voting age reduced
                    to 18 by 1969.
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
