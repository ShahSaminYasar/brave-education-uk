import SectionTitle from "@/components/ui/SectionTitle";

export const metadata = {
  title: "Life in the UK Test: Revision Notes",
};

const page = () => {
  return (
    <main>
      <section className="w-full max-w-6xl mx-auto py-8 px-5">
        {/* Page Title */}
        <div className="w-fit bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 bg-clip-text">
          <SectionTitle
            subtext={"Revision Notes"}
            text={"Life in the UK Test"}
            align="left"
            style={{
              color: "transparent",
            }}
            animate={false}
          />
        </div>

        {/* Intro Paragraph */}
        <p className="para block text-left w-full mb-5">
          These are condensed summary notes for "Life in the United Kingdom: A
          Guide for New Residents" publication (available in physical and PDF
          form). These summaries are designed to help you prepare for the Life
          in the UK test, which is a requirement for those seeking Indefinite
          Leave to Remain in the UK or British citizenship.
        </p>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Using space-y-8 to stack the content cards */}
          <div className="space-y-8">
            {/* Features Section */}
            <div
              id="features"
              className="bg-white rounded-lg border border-zinc-200 p-6"
            >
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Features
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    ✂ <strong>85% less reading</strong> compared to the full
                    publication.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>📚 Covers all testable learning materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>🔗 Contains links for further reading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>🔍 Fully searchable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    ❓ Multiple choice questions to test your understanding of
                    source material
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>🌙 Dark mode</span>
                </li>
              </ul>
            </div>

            {/* Structure Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Structure of the Revision Notes
              </h2>
              <p className="text-secondary-foreground mb-4">
                The study material is divided into five main chapters, each
                covering different aspects of life in the UK:
              </p>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>The values and principles of the UK</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>What is the UK</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>A long and illustrious history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>A modern, thriving society</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>The UK government, the law and your role</span>
                </li>
              </ul>
            </div>

            {/* How to Use Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                How to use the Revision Notes
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Start with Chapter 1 (The values and principles of the UK)
                    and work your way through each chapter in order.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Read the key facts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Complete the multiple choice quiz at the end of the notes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Refer to additional learning materials.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Review the notes before your test.</span>
                </li>
              </ul>
              <p className="text-secondary-foreground mt-4">
                Remember, while these notes provide a solid foundation, they are
                a condensed version of the original guide. For the most
                comprehensive preparation, consider using these notes in
                conjunction with the full "Life in the United Kingdom"
                publication and other study materials listed below.
              </p>
              <p className="text-secondary-foreground mt-4">
                Having stated that, completing the notes and interactive
                practice tests should be enough for the majority of people to
                pass with flying colours.
              </p>
            </div>

            {/* Additional Materials Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Additional learning materials
              </h2>
              <ul className="space-y-3 text-secondary-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    Read the full publication of Life in the UK: A guide of new
                    residents
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>45 life in the UK practice tests</span>
                </li>
              </ul>
            </div>

            {/* Other Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Other
              </h2>
              <p className="text-secondary-foreground">
                Good luck with your studies and your Life in the UK test!
              </p>
            </div>

            {/* Copyright Section */}
            <div className="bg-white rounded-lg border border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Copyright
              </h2>
              <div className="space-y-3 text-secondary-foreground">
                <p>
                  Copyright by Britizen. Reproduction, copying and quoting these
                  learning materials is allowed as long as full attribution is
                  provided (see below). Commerical use is allowed for
                  educational bodies (teachers, courses) as long as appropriate
                  attribution is provided. If in doubt, please contact us.
                </p>
                <p>Appropriate attribution:</p>
                <blockquote className="border-l-4 border-zinc-300 pl-4 italic text-secondary-foreground/80 space-y-2">
                  <p>
                    A direct link to the copied section if allowed by the medium
                    (HTML)
                  </p>
                  <p>
                    A textual acknoledgement ("Britizen" mention) if HTML
                    deep-linking is not allowed e.g. "Revision Notes from
                    Britizen".
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
