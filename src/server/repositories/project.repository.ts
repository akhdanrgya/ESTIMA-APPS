import "server-only";
import { eq } from "drizzle-orm";
import { getDb } from "@/server/db";
import { projects, projectMembers } from "@/server/db/schema";
export async function findProjectsForUser(userId: string) {
  return getDb().select({ id: projects.id, code: projects.code, name: projects.name, status: projects.status, role: projectMembers.role })
    .from(projectMembers).innerJoin(projects, eq(projectMembers.projectId, projects.id)).where(eq(projectMembers.userId, userId));
}
