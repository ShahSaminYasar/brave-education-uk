import { getContactSettings } from "@/lib/settings";
import CourseLayoutClient from "./CourseLayoutClient";

const layout = async ({ children }) => {
  const contact = await getContactSettings();

  return (
    <CourseLayoutClient contact={contact}>{children}</CourseLayoutClient>
  );
};
export default layout;
