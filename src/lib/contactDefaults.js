/**
 * Pure, dependency-free defaults for contact/general settings.
 *
 * Kept separate from `lib/settings.js` (which imports the Mongo client and
 * `next/cache`) so that client components can safely import just the
 * default fallback values - e.g. a component rendered before its
 * server-fetched props resolve, or in isolated previews - without pulling
 * server-only code into the client bundle.
 *
 * These mirror what used to be hardcoded across the site (Footer,
 * SupportButton, WhatsAppLink, contact page, etc) so nothing looks blank
 * before an admin ever saves the settings document.
 */
export const DEFAULT_CONTACT_SETTINGS = {
  phones: [
    {
      id: "head-office",
      label: "Head Office (UK)",
      display: "0800 999 1257",
      dial: "+4408009991257",
    },
    {
      id: "sylhet-office",
      label: "Sylhet Office (Bangladesh)",
      display: "+8801623999611",
      dial: "+8801623999611",
    },
  ],
  whatsapp: {
    display: "+44 786 204 2900",
    dial: "+447862042900",
  },
  socials: {
    facebook: "https://www.facebook.com/braveeduuk/",
    instagram: "https://www.instagram.com/braveeducationuk/",
    linkedin: "https://uk.linkedin.com/company/braveedu",
    tiktok: "https://www.facebook.com/braveeduuk/",
    youtube: "",
  },
};

export const DEFAULT_GENERAL_SETTINGS = {
  introVideoUrl: "https://vimeo.com/1131962110?share=copy&fl=sv&fe=ci",
};
