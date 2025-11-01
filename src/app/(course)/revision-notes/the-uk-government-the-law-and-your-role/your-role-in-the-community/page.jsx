import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Your Role in the Community",
};

const page = () => {
  const questions = [
    {
      question: "What is one way parents can help at their child's school?",
      options: [
        "By voting in local elections",
        "By helping in classrooms and fundraising events",
        "By becoming a magistrate",
        "By serving as a juror",
      ],
      answer: "b",
      answerText: "By helping in classrooms and fundraising events",
    },
    {
      question: "What is one role of a school governor?",
      options: [
        "Collecting school fees",
        "Setting strategic direction for the school",
        "Writing academic textbooks",
        "Organizing community parties",
      ],
      answer: "b",
      answerText: "Setting strategic direction for the school",
    },
    {
      question: "How can citizens participate in political processes?",
      options: [
        "By only watching political news",
        "By joining a political party and canvassing during elections",
        "By treating everyone equally",
        "By donating to local shops",
      ],
      answer: "b",
      answerText:
        "By joining a political party and canvassing during elections",
    },
    {
      question: "How can one volunteer in local services?",
      options: [
        "By joining a sports club",
        "By becoming a magistrate or special constable",
        "By reading stories at local cafes",
        "By planting trees only in reserved parks",
      ],
      answer: "b",
      answerText: "By becoming a magistrate or special constable",
    },
    {
      question: "How is donated blood used?",
      options: [
        "For educational purposes only",
        "To cure common colds",
        "To help people with injuries and illnesses in hospitals",
        "To dye textiles",
      ],
      answer: "c",
      answerText: "To help people with injuries and illnesses in hospitals",
    },
    {
      question: "Which of the following is a benefit of volunteering?",
      options: [
        "High financial compensation",
        "Reducing work stress",
        "Gaining new skills and improving community",
        "Exclusive travel discounts",
      ],
      answer: "c",
      answerText: "Gaining new skills and improving community",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Your Role in the Community"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the various ways individuals can contribute to
          their local community, from volunteering and supporting schools to
          environmental responsibility.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Supporting Community Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Supporting your local community
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Helping at Your Child's School:</strong> Parents can
                    support by assisting in classrooms, helping with activities,
                    and participating in fundraising events organized by PTAs.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>School Governors:</strong> They contribute to
                    children's education by setting strategic direction,
                    ensuring accountability, and evaluating performance. You can
                    apply to become one through your local school or online.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Political Party Members:</strong> Members support
                    political views, engage in the democratic process,
                    especially during elections, and can stand for office in
                    various capacities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Volunteer Opportunities:</strong> Involve
                    volunteering with local hospitals, youth projects, police,
                    and other local services to support community decisions and
                    services.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Blood and Organ Donation:</strong> Blood is donated
                    through country-specific organizations, while organs can be
                    registered online to help those in need of transplants.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Advantages of Volunteering:</strong> Includes
                    meeting new people, gaining new skills, and enhancing
                    community cohesion. It is beneficial for personal growth and
                    community development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Volunteer Activities:</strong> Include working with
                    animals, participating in environmental clean-ups,
                    mentoring, and assisting in hospitals and elderly care.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Looking After the Environment:</strong> Recycling
                    and supporting local businesses reduce waste and carbon
                    footprints. Walking and using public transport also minimize
                    pollution.
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
