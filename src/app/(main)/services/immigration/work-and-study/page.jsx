import CategoryPage from "@/components/immigration/CategoryPage";
import { getCategory } from "@/lib/immigration";

const category = getCategory("work-and-study");

export const metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/services/immigration/work-and-study" },
  robots: "index, follow",
};

const page = () => <CategoryPage slug={category.slug} />;

export default page;
