import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Revision Notes: Places of Interest",
};

const page = () => {
  const questions = [
    {
      question: "What is the main function of the National Trust in the UK?",
      options: [
        "To create new museums",
        "To maintain national parks",
        "To preserve important buildings and countryside",
        "To build new landmarks",
      ],
      answer: "c",
      answerText: "To preserve important buildings and countryside",
    },
    {
      question: "Where is the Eden Project located?",
      options: ["Scotland", "Wales", "Northern Ireland", "Cornwall"],
      answer: "d",
      answerText: "Cornwall",
    },
    {
      question: "What is the London Eye's primary purpose today?",
      options: [
        "A historical building",
        "Part of New Year celebrations",
        "A small museum",
        "A governmental office",
      ],
      answer: "b",
      answerText: "Part of New Year celebrations",
    },
    {
      question:
        "Which national park houses Snowdon, the highest mountain in Wales?",
      options: [
        "The Lake District",
        "Loch Lomond and the Trossachs",
        "Snowdonia",
        "None of these",
      ],
      answer: "c",
      answerText: "Snowdonia",
    },
    {
      question: "What is significant about the Giant’s Causeway's structure?",
      options: [
        "Built in the 18th century",
        "Formed from volcanic lava",
        "Located in Wales",
        "Made of limestone",
      ],
      answer: "b",
      answerText: "Formed from volcanic lava",
    },
  ];

  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Places of Interest"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        <p className="para block text-left w-full mb-5">
          This chapter highlights famous UK landmarks, national parks, and
          cultural institutions like the National Trust that are available for
          public enjoyment.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Outdoor Activities Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Public Footpaths and Outdoor Activities
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The UK offers a vast network of public footpaths in the
                    countryside for various outdoor activities like mountain
                    biking, mountaineering, and hill walking. It also features
                    15 national parks across England, Wales, and Scotland.
                  </span>
                </li>
              </ul>
            </div>

            {/* Museums and Landmarks Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Museums and Landmarks
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The UK hosts numerous museums ranging from small community
                    ones to large national collections. Many famous landmarks
                    are accessible for public viewing, often for a charge.
                  </span>
                </li>
              </ul>
            </div>

            {/* National Trust Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                The National Trust
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    The National Trust and the National Trust for Scotland
                    preserve important buildings, coastlines, and countryside.
                    Founded in 1895, they support protected areas through the
                    help of over 61,000 volunteers.
                  </span>
                </li>
              </ul>
            </div>

            {/* UK Landmarks Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                UK Landmarks
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Big Ben:</strong> Known colloquially as both the
                    great bell and the clock at the Houses of Parliament, this
                    iconic landmark was renamed ‘Elizabeth Tower’ in honor of
                    Queen Elizabeth II's Diamond Jubilee in 2012.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Eden Project:</strong> Situated in Cornwall,
                    England, this site includes biomes that house global plant
                    life and also functions as a charity running environmental
                    and social projects.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Edinburgh Castle:</strong> Dominating Edinburgh's
                    skyline, this historic site from the early Middle Ages is
                    maintained by Historic Scotland, a government agency.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Giant’s Causeway:</strong> Located in Northern
                    Ireland, this natural formation of volcanic columns dates
                    back approximately 50 million years and is surrounded by
                    legends.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>
                      Loch Lomond and the Trossachs National Park:
                    </strong>{" "}
                    Covering 720 square miles in Scotland, it includes Loch
                    Lomond, mainland Britain's largest body of freshwater.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>London Eye:</strong> A 443-foot Ferris wheel on the
                    River Thames' southern bank, inaugurated for the new
                    millennium and now a central element of New Year
                    celebrations.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Snowdonia National Park:</strong> Encompassing 838
                    square miles in North Wales, it's best known for Snowdon,
                    the highest peak in Wales.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Tower of London:</strong> Built by William the
                    Conqueror in 1066, it offers tours by Yeoman Warders and
                    houses the Crown Jewels.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>The Lake District:</strong> England’s largest
                    national park with famous lakes and mountains, including
                    Windermere and Wastwater, voted as Britain’s favorite view
                    in 2007.
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
