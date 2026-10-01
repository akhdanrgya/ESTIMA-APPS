import { AppShell } from "@/components/layout/app-shell";
import { requirePageSession } from "@/server/auth/session";
export default async function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  const session = await requirePageSession();
  return <AppShell userName={session.user.name}>{children}</AppShell>;
}
