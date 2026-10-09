import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { getContactSettings } from "@/lib/settings";

/**
 * Deliberately its own (non-`(main)`) layout with no shared `loading.jsx`/
 * `<Suspense>` wrapper - same reasoning as `src/app/updates/[slug]/layout.jsx`.
 * The `(main)` route group wraps every page in a
 * `<Suspense fallback={<Loading />}>`, which means Next starts streaming a
 * 200 response (the fallback) before this page's own async work -
 * including the `notFound()` call for an unknown/unpublished slug -
 * resolves. Without that ancestor Suspense boundary, `notFound()` in the
 * page body (or generateMetadata) correctly produces a real 404 status
 * instead of a 200 with the not-found UI.
 */
const layout = async ({ children }) => {
  const contact = await getContactSettings();

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer contact={contact} />
    </>
  );
};
export default layout;
