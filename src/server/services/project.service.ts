import "server-only";
import { requireSession } from "@/server/auth/authorization";
import { findProjectsForUser } from "@/server/repositories/project.repository";
export async function listMyProjects() {
  const session = await requireSession();
  return findProjectsForUser(session.user.id);
}
