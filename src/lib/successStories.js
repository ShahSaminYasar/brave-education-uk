export const SUCCESS_CATEGORIES = [
  "English Course",
  "University Admission",
  "Immigration",
];

export const DEFAULT_SUCCESS_CATEGORY = "University Admission";

export const SUCCESS_STORY_COUNTRIES = [
  "Australia",
  "Canada",
  "Cyprus",
  "Denmark",
  "Finland",
  "Malaysia",
  "Malta",
  "New Zealand",
  "Sweden",
  "United Kingdom",
  "United States",
];

// Story records have no name/title field, only category + (for Immigration)
// country - build the most descriptive alt text available from those.
export function getSuccessStoryAlt(item) {
  const category = item?.category || DEFAULT_SUCCESS_CATEGORY;
  return item?.country
    ? `${item.country} ${category} success story`
    : `${category} success story`;
}
