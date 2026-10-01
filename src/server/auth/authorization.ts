import "server-only";
import { headers } from "next/headers";
import { and, eq } from "drizzle-orm";
import { getAuth } from ".";
import { getDb } from "@/server/db";
import { projectMembers } from "@/server/db/schema";
export async function requireSession() {
  const session = await getAuth().api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthenticated");
  return session;
}
export async function requireProjectAccess(projectId: string, roles?: (typeof projectMembers.$inferSelect.role)[]) {
  const session = await requireSession();
  const membership = await getDb().query.projectMembers.findFirst({ where: and(eq(projectMembers.projectId, projectId), eq(projectMembers.userId, session.user.id)) });
  if (!membership || (roles && !roles.includes(membership.role))) throw new Error("Forbidden");
  return { session, membership };
}
