import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Leisure in the UK",
};

const page = () => {
  const questions = [
    {
      question: "What is an allotment?",
      options: [
        "A type of pub game",
        "Additional rented land for gardening",
        "A traditional British dish",
        "A popular type of movie genre",
      ],
      answer: "b",
      answerText: "Additional rented land for gardening",
    },
    {
      question: "Which film franchise is produced in the UK?",
      options: [
        "Star Wars",
        "Harry Potter",
        "Fast and Furious",
        "Jurassic Park",
      ],
      answer: "b",
      answerText: "Harry Potter",
    },
    {
      question:
        "What show introduced a new type of progressive comedy in 1969?",
      options: [
        "Coronation Street",
        "Monty Python’s Flying Circus",
        "Spitting Image",
        "EastEnders",
      ],
      answer: "b",
      answerText: "Monty Python’s Flying Circus",
    },
    {
      question: "What type of TV viewing requires a licence in the UK?",
      options: [
        "Only subscription channels",
        "Free local channels",
        "All TV viewing",
        "Only international channels",
      ],
      answer: "c",
      answerText: "All TV viewing",
    },
    {
      question:
        "What is the legal age to buy a ticket for the National Lottery in the UK?",
      options: ["16", "17", "18", "21"],
      answer: "c",
      answerText: "18",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Leisure in the UK"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter explores the various leisure activities enjoyed in the
          UK, from gardening and shopping to film, pubs, and pets.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Gardening Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Gardening
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Home Gardens and Allotments:</strong> Many UK
                    residents have home gardens and may also rent allotments for
                    growing fruits and vegetables.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Garden Shows and Centres:</strong> Events range from
                    local to major exhibits, with numerous garden centres
                    available.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Famous Gardens:</strong> Notable gardens include Kew
                    Gardens, Sissinghurst, Hidcote in England, and others in
                    Scotland, Wales, and Northern Ireland.
                  </span>
                </li>
              </ul>
            </div>

            {/* Shopping Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Shopping
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Variety of Shopping Venues:</strong> Includes town
                    centres, undercover shopping centres, and weekly markets.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Shopping Hours:</strong> Most shops operate seven
                    days a week with reduced hours on Sundays and holidays.
                  </span>
                </li>
              </ul>
            </div>

            {/* Cooking and Food Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Cooking and Food
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Cultural Influence on UK Cuisine:</strong> A wide
                    variety of dishes due to rich cultural heritage.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Traditional Foods by Region:</strong> Includes
                    English roast beef, Welsh cakes, Scottish haggis, and
                    Northern Ireland's Ulster fry.
                  </span>
                </li>
              </ul>
            </div>

            {/* Films Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Films
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>British Film Influence:</strong> Known for special
                    effects and notable early contributions from Charlie Chaplin
                    and others.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Successful Film Franchises:</strong> Includes Harry
                    Potter and James Bond, with expertise in effects and
                    animation.
                  </span>
                </li>
              </ul>
            </div>

            {/* British Comedy Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                British Comedy
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Traditions of Satire and Comedy:</strong> Notable
                    historical elements include jesters, Shakespearean comedies,
                    and modern TV shows like Monty Python.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Evolution with TV and Stand-Up:</strong> Transition
                    from music halls to TV comedy and resurgence of stand-up
                    comedy.
                  </span>
                </li>
              </ul>
            </div>

            {/* TV and Radio Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Television and Radio
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Variety of Channels:</strong> Free and subscription
                    channels with specific regional programming.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>TV Licensing:</strong> Required for watching TV,
                    with funds supporting the BBC.
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Networking Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Social Networking
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Popularity of Social Media:</strong> Usage of sites
                    like Facebook and Twitter for staying connected and sharing
                    media.
                  </span>
                </li>
              </ul>
            </div>

            {/* Pubs and Night Clubs Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Pubs and Night Clubs
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Social Gathering in Pubs:</strong> Integral to UK
                    culture, requires age restrictions for alcohol consumption.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Operating Hours:</strong> Pubs open during the day,
                    nightclubs operate later hours.
                  </span>
                </li>
              </ul>
            </div>

            {/* Betting and Gambling Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Betting and Gambling
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Gambling Activities:</strong> Includes sports
                    betting, casinos, and the National Lottery, with age
                    restrictions.
                  </span>
                </li>
              </ul>
            </div>

            {/* Pets Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">Pets</h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>High Pet Ownership:</strong> Common pets include
                    cats and dogs, with legal obligations for care and control.
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
