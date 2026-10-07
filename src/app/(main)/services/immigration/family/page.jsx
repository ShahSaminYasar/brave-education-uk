import CategoryPage from "@/components/immigration/CategoryPage";
import { getCategory } from "@/lib/immigration";

const category = getCategory("family");

export const metadata = {
  title: category.metaTitle,
  description: category.metaDescription,
  alternates: { canonical: "/services/immigration/family" },
  robots: "index, follow",
};

const page = () => <CategoryPage slug={category.slug} />;

export default page;
