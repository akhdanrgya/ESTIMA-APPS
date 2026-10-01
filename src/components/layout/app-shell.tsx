"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HardHat, LayoutDashboard, FolderKanban, ChevronRight } from "lucide-react";
import { modules } from "@/config/modules";
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/features/auth/logout-button";
export function AppShell({ children, userName }: { children: React.ReactNode; userName: string }) {
  const pathname = usePathname();
  return <div className="min-h-screen lg:grid lg:grid-cols-[240px_1fr]">
    <aside className="bg-[#10243b] text-slate-300 lg:min-h-screen">
      <Link href="/dashboard" className="flex h-20 items-center gap-3 px-6 text-white"><HardHat className="size-8" /><span><strong className="text-xl tracking-[.15em]">ESTIMA</strong><span className="block text-[10px] tracking-widest text-slate-400">PROJECT MANAGEMENT</span></span></Link>
      <nav aria-label="Navigasi utama" className="flex gap-1 overflow-x-auto p-3 lg:flex-col">{modules.map((item) => <Link key={item.slug} href={`/${item.slug}`} aria-current={pathname === `/${item.slug}` ? "page" : undefined} className={cn("flex shrink-0 items-center gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-white/10 hover:text-white", pathname === `/${item.slug}` && "bg-white/10 text-white font-medium")}>
        {item.slug === "dashboard" ? <LayoutDashboard className="size-4" /> : <FolderKanban className="size-4" />}{item.name}
      </Link>)}</nav>
      <p className="hidden px-6 py-8 text-xs leading-5 text-slate-400 lg:block">Project control &amp;<br />field operation platform</p>
    </aside>
    <div className="min-w-0"><header className="flex min-h-20 flex-wrap items-center justify-between gap-3 border-b bg-white px-6"><div className="flex items-center gap-3 text-sm"><span className="text-muted-foreground">Workspace</span><ChevronRight className="size-4 text-slate-400" /><span className="font-medium">Belum ada proyek dipilih</span></div><div className="flex items-center gap-3"><span className="text-sm">{userName}</span><LogoutButton /></div></header><main id="main-content" className="mx-auto max-w-[1600px] p-5 md:p-8">{children}</main></div>
  </div>;
}
