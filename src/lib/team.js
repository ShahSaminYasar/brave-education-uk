import { unstable_cache } from "next/cache";
import { getDb } from "./mongodb";

async function fetchTeamMembers() {
  const db = await getDb();
  const members = await db
    .collection("team_members")
    .find()
    .sort({ order: 1 })
    .toArray();

  return members.map((m) => ({ ...m, _id: m._id.toString() }));
}

/**
 * Cached team members reader, ordered for display. Tagged "team-members" -
 * call `revalidateTag("team-members")` from the admin create/update/delete/
 * reorder routes so the About page picks up changes immediately.
 */
export const getTeamMembers = unstable_cache(
  fetchTeamMembers,
  ["team-members"],
  { tags: ["team-members"] },
);
