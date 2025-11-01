import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Sports",
};

const page = () => {
  const questions = [
    {
      question: "Which sport is considered the UK's most popular sport?",
      options: ["Rugby", "Cricket", "Football", "Tennis"],
      answer: "c",
      answerText: "Football",
    },
    {
      question:
        "In which year did Sir Roger Bannister break the four-minute mile?",
      options: ["1954", "1966", "1972", "1984"],
      answer: "a",
      answerText: "1954",
    },
    {
      question:
        "The Wimbledon Championships is a famous tournament for which sport?",
      options: ["Cricket", "Golf", "Tennis", "Rugby"],
      answer: "c",
      answerText: "Tennis",
    },
    {
      question: "Who was the first Briton to win the Tour de France?",
      options: ["Mo Farah", "Bradley Wiggins", "Andy Murray", "Chris Hoy"],
      answer: "b",
      answerText: "Bradley Wiggins",
    },
    {
      question: "Where is the main site for the 2012 Olympic Games located?",
      options: [
        "Cardiff",
        "Birmingham",
        "Stratford, East London",
        "Manchester",
      ],
      answer: "c",
      answerText: "Stratford, East London",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Sports"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the important role of sports in the UK, from
          famous originating sports and notable figures to major events like the
          Olympics and Wimbledon.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Popular Sports Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Popular Sports
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Popular Sports:</strong> Sports play an important
                    role in the UK with many famous sports originating there,
                    such as cricket, football, lawn tennis, golf, and rugby.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sports Facilities:</strong> Local governments and
                    private companies offer various sports facilities, including
                    swimming pools, tennis courts and gymnasiums.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Olympic Games:</strong> The UK has hosted the
                    Olympic Games three times: 1908, 1948, and 2012. The 2012
                    Games were notably successful for the British team.
                  </span>
                </li>
              </ul>
            </div>

            {/* Paralympic Games Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Paralympic Games
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Origins:</strong> The Paralympic Games originated
                    from the work of Dr. Sir Ludwig Guttman, focusing on
                    rehabilitation for people with spinal injuries.
                  </span>
                </li>
              </ul>
            </div>

            {/* Notable Figures Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Notable British Sports Figures
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sir Roger Bannister:</strong> First man to run a
                    mile in under four minutes in 1954.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sir Jackie Stewart:</strong> Won the Formula 1 world
                    championship three times.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Bobby Moore:</strong> Led England to World Cup
                    victory in 1966.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sir Ian Botham:</strong> Renowned for his
                    achievements in English Test cricket.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Jayne Torvill and Christopher Dean:</strong> Olympic
                    gold medallists in ice dancing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sir Steve Redgrave:</strong> Won gold medals in
                    rowing at five consecutive Olympic Games.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Baroness Tanni-Grey Thompson:</strong> Multiple
                    Paralympic gold medallist and record holder.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Dame Kelly Holmes:</strong> Double gold medallist in
                    2004 Olympic Games.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Dame Ellen MacArthur:</strong> Fastest person to
                    sail around the world solo as of 2004.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Sir Chris Hoy:</strong> Achieved six gold and one
                    silver Olympic medals in cycling.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>David Weir:</strong> Six-time Paralympic gold
                    medallist.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Bradley Wiggins:</strong> First Briton to win the
                    Tour de France.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Mo Farah:</strong> Olympic gold medallist in 5,000m
                    and 10,000m at the 2012 Olympics.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Jessica Ennis:</strong> Gold medallist in heptathlon
                    at the 2012 Olympics.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Andy Murray:</strong> First British man since 1936
                    to win a Grand Slam singles title.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Ellie Simmonds:</strong> Paralympic gold medallist
                    and record holder in swimming.
                  </span>
                </li>
              </ul>
            </div>

            {/* Specific Sports Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Specific Sports
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Cricket:</strong> Originated in England, known for
                    complex rules. The Ashes (vs Australia) is a famous
                    competition.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Football:</strong> Most popular UK sport. England
                    won the World Cup in 1966.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Rugby:</strong> Includes Rugby Union and Rugby
                    League. The Six Nations is a major competition.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Horse-racing:</strong> Notable events include Royal
                    Ascot and the Grand National.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Golf:</strong> Originated in Scotland. St Andrews is
                    the 'home of golf'. Major tournament is The Open
                    Championship.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Tennis:</strong> The Wimbledon Championships is the
                    oldest tennis tournament in the world.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Water Sports:</strong> Sailing is popular; Cowes
                    Week is a notable event.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Motor Sports:</strong> Britain has produced multiple
                    Formula 1 World Champions.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Skiing:</strong> Popularity is growing, with
                    facilities in Scotland and dry slopes elsewhere.
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
