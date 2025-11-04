import SectionTitle from "@/components/ui/SectionTitle";
import Link from "next/link";

export const metadata = {
  title: "Revision Notes & Study Guides",
  description:
    "Access effective revision notes, practice materials, and study guides for your A1, B1, Life in the UK, and Theory test courses. Study smarter with Brave Education UK.",
  keywords: [
    "Revision notes",
    "study guides",
    "Life in the UK test revision",
    "B1 test practice",
    "theory test revision notes",
    "exam preparation materials",
  ],
  robots: "index, follow",
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
            {/* <div
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
            </div> */}

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
            </div>

            <div className="bg-teal-200 rounded-lg border-2 border-teal-600 text-teal-600 p-6">
              <p className="text-secondary-foreground">
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
                Acknowledgment
              </h2>
              <div className="space-y-3 text-secondary-foreground">
                <p>
                  Educational content featured here is sourced and adapted from
                  materials by{" "}
                  <Link
                    href={"https://britizen.uk/revision-notes"}
                    target="_blank"
                    className="font-semibold"
                  >
                    Britizen
                  </Link>
                  . Reproduced with attribution in accordance with their usage
                  policy. All rights to the original content belong to Britizen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
