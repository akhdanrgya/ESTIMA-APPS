import type { Metadata } from "next";
import { requirePageSession } from "@/server/auth/session";
import { ExecutiveDashboard } from "@/features/dashboard/executive-dashboard";
export const metadata: Metadata = { title: "Executive Dashboard" };
export default async function Dashboard() {
  await requirePageSession();
  return <ExecutiveDashboard />;
}
