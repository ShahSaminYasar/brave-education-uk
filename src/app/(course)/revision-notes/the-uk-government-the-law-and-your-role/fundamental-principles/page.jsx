import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Fundamental Principles of UK Law",
};

const page = () => {
  const questions = [
    {
      question:
        "Which document incorporated the European Convention on Human Rights into UK law?",
      options: [
        "Magna Carta",
        "Habeas Corpus Act",
        "Human Rights Act 1998",
        "Bill of Rights 1689",
      ],
      answer: "c",
      answerText: "Human Rights Act 1998",
    },
    {
      question: "What is the age requirement to drive a car in the UK?",
      options: ["16 years old", "17 years old", "18 years old", "21 years old"],
      answer: "b",
      answerText: "17 years old",
    },
    {
      question: "Which of the following is illegal in the UK?",
      options: [
        "Forced marriage",
        "Arranged marriage",
        "Domestic partnerships",
        "Cohabitation without marriage",
      ],
      answer: "a",
      answerText: "Forced marriage",
    },
    {
      question:
        "What is the system called where employers deduct tax directly from employees' wages?",
      options: ["PAYE", "Self-assessment", "National Insurance", "Tax Deduct"],
      answer: "a",
      answerText: "PAYE",
    },
    {
      question:
        "What must a vehicle in the UK have if it is over three years old?",
      options: [
        "MOT certificate",
        "International license",
        "Green tax disc",
        "Enhanced driver insurance",
      ],
      answer: "a",
      answerText: "MOT certificate",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Fundamental Principles of UK Law"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter covers the legal foundations of the UK, including key
          historical documents, human rights, equal opportunities, and specific
          legal requirements for residents.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Historical Roots Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Fundamental Principles of UK Law
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Historical Roots:</strong> UK law is based on
                    principles from Magna Carta, Habeas Corpus Act, and Bill of
                    Rights of 1689.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>European Convention on Human Rights:</strong> UK
                    contributed to the drafting and incorporated it into UK law
                    via the Human Rights Act 1998.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Key Rights:</strong> Includes right to life, freedom
                    from torture, and freedom of thought and expression.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Equal Opportunities:</strong> UK ensures no unfair
                    treatment based on personal characteristics in life or work.
                  </span>
                </li>
              </ul>
            </div>

            {/* Domestic Violence, FGM, Forced Marriage Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Domestic Violence, FGM, and Forced Marriage
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Domestic Violence:</strong> It's a serious crime in
                    the UK, and victims have access to helplines and safe
                    shelters.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Female Genital Mutilation (FGM):</strong> Practicing
                    or facilitating FGM is illegal in the UK.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Forced Marriage:</strong> Criminal offense if one or
                    both parties lack full and free consent; Protective measures
                    exist.
                  </span>
                </li>
              </ul>
            </div>

            {/* Income Tax and National Insurance Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Income Tax and National Insurance
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Income Tax:</strong> Collected from wages, pensions,
                    and more; contributes to government services funding.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>PAYE System:</strong> Employers deduct taxes
                    directly, while self-employed individuals use
                    self-assessment.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>National Insurance Contributions:</strong> Pays for
                    benefits and services; mandatory for employed and
                    self-employed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Obtaining a National Insurance Number:</strong>{" "}
                    Essential for tax and contributions, involves application
                    process.
                  </span>
                </li>
              </ul>
            </div>

            {/* Driving a Car Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Requirements for Driving a Car
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Legal Requirements:</strong> Must be at least 17,
                    pass a driving test, and have a driving licence.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Testing:</strong> Includes theory and practical
                    tests; licence validity extends till age 70.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Vehicle Regulations:</strong> Vehicles must be
                    registered, insured, and have an MOT certificate if over
                    three years old.
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
