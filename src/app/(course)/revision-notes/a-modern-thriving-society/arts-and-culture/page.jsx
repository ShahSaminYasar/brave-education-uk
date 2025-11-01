import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Arts and Culture",
};

const page = () => {
  const questions = [
    {
      question:
        "Which music festival is known for its classical music performances?",
      options: [
        "Glastonbury",
        "The Proms",
        "V Festival",
        "Mercury Music Prize",
      ],
      answer: "b",
      answerText: "The Proms",
    },
    {
      question: "Who wrote 'The Phantom of the Opera'?",
      options: [
        "Tim Rice",
        "Andrew Lloyd Webber",
        "Gilbert and Sullivan",
        "Charles Dickens",
      ],
      answer: "b",
      answerText: "Andrew Lloyd Webber",
    },
    {
      question: "What is the Turner Prize awarded for?",
      options: [
        "Best Theatre Production",
        "Best Fashion Designer",
        "Contemporary Art",
        "Architectural Innovation",
      ],
      answer: "c",
      answerText: "Contemporary Art",
    },
    {
      question:
        "Who was responsible for designing New Delhi as the seat of government in India?",
      options: [
        "Sir Christopher Wren",
        "Sir Edwin Lutyens",
        "Robert Adam",
        "Dame Zaha Hadid",
      ],
      answer: "b",
      answerText: "Sir Edwin Lutyens",
    },
    {
      question: "Which novel is considered the best-loved in 2003?",
      options: [
        "Great Expectations",
        "The Lord of the Rings",
        "Pride and Prejudice",
        "Harry Potter",
      ],
      answer: "b",
      answerText: "The Lord of the Rings",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Arts and Culture"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter explores the rich landscape of British arts and culture,
          from classical music and theatre to literature, art, and modern
          fashion.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Music Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Music (Proms)
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Music is a significant part of British culture encompassing
                    everything from classical to pop music. Notable events
                    include The Proms, a summer classical music festival
                    organized by the BBC. Influential composers such as Henry
                    Purcell, George Frederick Handel, and Benjamin Britten have
                    significantly shaped British music. Modern British pop
                    culture has had a global impact, with bands like The Beatles
                    and The Rolling Stones being seminal influences.
                  </span>
                </li>
              </ul>
            </div>

            {/* Theatre Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Theatre (Edinburgh Fringe and London West End)
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Theatres are prevalent across the UK, with London's West End
                    being particularly notable. The UK is known for its strong
                    tradition of musical theatre, with works by Gilbert and
                    Sullivan, and Andrew Lloyd Webber being internationally
                    popular. The Edinburgh Festival Fringe is a key cultural
                    event for showcasing theatre and comedy.
                  </span>
                </li>
              </ul>
            </div>

            {/* Art Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Art (Turner Prize)
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    British art has its roots in the Middle Ages and has evolved
                    significantly over the centuries. Notable institutions
                    include the National Gallery and Tate Britain. Influential
                    artists include Thomas Gainsborough, David Allan, and Henry
                    Moore. The Turner Prize is a prestigious contemporary art
                    award established in 1984.
                  </span>
                </li>
              </ul>
            </div>

            {/* Architecture Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Architecture
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The UK's rich architectural heritage includes medieval
                    cathedrals, Norman castles, and modern constructions.
                    Influential architects like Sir Christopher Wren, Robert
                    Adam, and Sir Edwin Lutyens have left significant marks on
                    the landscape. Modern British architects such as Sir Norman
                    Foster continue to innovate globally.
                  </span>
                </li>
              </ul>
            </div>

            {/* Fashion and Design Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Fashion and Design
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    British design has historical significance and contemporary
                    influence. Notable designers in history include Thomas
                    Chippendale for furniture and more recent figures like
                    Vivienne Westwood for fashion.
                  </span>
                </li>
              </ul>
            </div>

            {/* Literature Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Literature (Booker Prize)
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The UK boasts a prestigious literary tradition with
                    contributors such as Jane Austen, Charles Dickens, and J.K.
                    Rowling. Prestigious awards like the Man Booker Prize
                    highlight achievement in fiction.
                  </span>
                </li>
              </ul>
            </div>

            {/* British Poets Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                British poets
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    British poetry has a rich heritage with iconic figures like
                    Byrons, Keats, and Shelly contributing significantly to the
                    literature landscape. Key works like "The Tyger" by William
                    Blake and "Daffodils" by William Wordsworth are classic
                    examples revered to this day.
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
