import { getBlogPosts } from "@/lib/blog";
import { getPublishedEvents } from "@/lib/events";

const BASE_URL = "https://www.braveeducationuk.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/success-stories",
  "/events",
  "/services/immigration",
  "/services/immigration/work-and-study",
  "/services/immigration/family",
  "/services/immigration/settlement-and-citizenship",
  "/services/immigration/visit-and-travel",
  "/services/immigration/self-sponsorship",
  "/services/immigration/fees",
  "/courses",
  "/contact",
  "/updates",
  "/airport-pickup",
  "/appointment",
  "/check-eligibility",
  "/complaint",
  "/visa-application",
  "/student-finance",
  "/trinity-college-tests",
  "/privacy-policy",
  "/terms-and-conditions",
  "/course/life-in-the-uk",
  "/a-modern-thriving-society/the-uk-today",
  "/revision-notes",
  "/revision-notes/values-and-principles",
  "/revision-notes/what-is-the-uk",
  "/revision-notes/a-long-and-illustrious-history",
  "/revision-notes/a-long-and-illustrious-history/early-britain",
  "/revision-notes/a-long-and-illustrious-history/the-middle-ages",
  "/revision-notes/a-long-and-illustrious-history/the-tudors-and-the-stuarts",
  "/revision-notes/a-long-and-illustrious-history/a-global-power",
  "/revision-notes/a-long-and-illustrious-history/the-20th-century",
  "/revision-notes/a-long-and-illustrious-history/britain-since-1945",
  "/revision-notes/a-modern-thriving-society",
  "/revision-notes/a-modern-thriving-society/the-uk-today",
  "/revision-notes/a-modern-thriving-society/religion",
  "/revision-notes/a-modern-thriving-society/customs-and-traditions",
  "/revision-notes/a-modern-thriving-society/sport",
  "/revision-notes/a-modern-thriving-society/arts-and-culture",
  "/revision-notes/a-modern-thriving-society/leisure",
  "/revision-notes/a-modern-thriving-society/places-of-interest",
  "/revision-notes/the-uk-government-the-law-and-your-role",
  "/revision-notes/the-uk-government-the-law-and-your-role/the-development-of-british-democracy",
  "/revision-notes/the-uk-government-the-law-and-your-role/the-british-constitution",
  "/revision-notes/the-uk-government-the-law-and-your-role/the-government",
  "/revision-notes/the-uk-government-the-law-and-your-role/the-uk-and-international-institutions",
  "/revision-notes/the-uk-government-the-law-and-your-role/respecting-the-law",
  "/revision-notes/the-uk-government-the-law-and-your-role/fundamental-principles",
  "/revision-notes/the-uk-government-the-law-and-your-role/your-role-in-the-community",
];

export default async function sitemap() {
  const [posts, events] = await Promise.all([getBlogPosts(), getPublishedEvents()]);

  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const postEntries = posts.map((post) => ({
    url: `${BASE_URL}/updates/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const eventEntries = events.map((event) => ({
    url: `${BASE_URL}/events/${event.slug}`,
    lastModified: new Date(event.updatedAt || event.createdAt),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries, ...eventEntries];
}
