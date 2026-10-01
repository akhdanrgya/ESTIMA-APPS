import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAuth } from ".";

export const getSession = cache(async () => {
  const requestHeaders = await headers();
  // No session cookie means no database connection is needed for public visitors.
  if (!requestHeaders.get("cookie")?.includes("better-auth.session_token=")) return null;
  return getAuth().api.getSession({ headers: requestHeaders });
});
export async function requirePageSession() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}
