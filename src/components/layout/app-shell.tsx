"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/features/auth/logout-button";
import { FigmaIcon } from "@/features/dashboard/figma-icon";
import { demoProject, alerts, approvals } from "@/features/dashboard/demo-data";
import { Modal } from "@/components/ui/modal";

const navigation = [
  ["dashboard", "Dashboard"], ["projects", "Projects"], ["scaffolding", "Scaffolding"], ["insulation", "Insulation"],
  ["planning", "Planning & Progress"], ["manpower", "Manpower"], ["materials", "Materials"],
  ["quality", "QA/QC"], ["hse", "HSE"], ["commercial", "Commercial"], ["documents", "Documents"],
  ["reports", "Reports"], ["administration", "Administration"],
];
export function AppShell({ children, userName }: { children: React.ReactNode; userName: string }) {
  const pathname = usePathname();
  const [qualityOpen, setQualityOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [popover, setPopover] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [detail, setDetail] = useState<{ title: string; body: string } | null>(null);
  const bar = useRef<HTMLElement>(null);
  const drawer = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    function close(e: PointerEvent) { if (!bar.current?.contains(e.target as Node)) setPopover(null); }
    function escape(e: KeyboardEvent) { if (e.key === "Escape") setPopover(null); }
    document.addEventListener("pointerdown", close); document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, []);
  useEffect(() => { if (mobileOpen) drawer.current?.showModal(); else drawer.current?.close(); }, [mobileOpen]);
  const toggle = (name: string) => setPopover(current => current === name ? null : name);
  const closeNav = () => { setMobileOpen(false); setPopover(null); };
  const sidebar = <>
    <Link className="workspace-logo" href="/dashboard" onClick={closeNav}><Image src="/figma/login/48198.png" alt="ESTIMA" width={197} height={55} priority /></Link>
    <p className="sidebar-caption">OPERATIONS &amp; CONTROL</p>
    <nav aria-label="Main navigation" className="workspace-nav">{navigation.map(([slug, name]) => slug === "quality" ?
      <div key={slug}><button className={cn("nav-item nav-section", (pathname === "/quality" || pathname === "/punchlist") && "nav-parent-active")} onClick={() => setQualityOpen(!qualityOpen)} aria-expanded={qualityOpen}>{name}<span className={cn(!qualityOpen && "rotate-chevron")}><FigmaIcon file="17e3f.svg" /></span></button>
      {qualityOpen && <div className="nav-subitems"><Link onClick={closeNav} className={cn("nav-item", pathname === "/quality" && "active")} aria-current={pathname === "/quality" ? "page" : undefined} href="/quality">Inspection Register</Link><Link onClick={closeNav} className={cn("nav-item", pathname === "/punchlist" && "active")} aria-current={pathname === "/punchlist" ? "page" : undefined} href="/punchlist">Punch List</Link></div>}</div> :
      <Link key={slug} onClick={closeNav} href={`/${slug}`} className={cn("nav-item", pathname === `/${slug}` && "active")} aria-current={pathname === `/${slug}` ? "page" : undefined}>{name}</Link>)}</nav>
    <footer className="sidebar-footer"><div className="wind-status"><FigmaIcon file="cf2e5.svg" /><div><p>Wind: 14 kts <span>GREEN</span></p><small>Insulation work permitted</small></div></div><div className="sidebar-version"><span>Version</span><span>v2.4.1-enterprise</span></div></footer>
  </>;
  const results = [...approvals.map(a => ({ title: a.id, body: a.description })), ...alerts.map(a => ({ title: a.title, body: a.description }))].filter(r => `${r.title} ${r.body}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="workspace-shell">
    <aside className="workspace-sidebar">{sidebar}</aside>
    <dialog className="mobile-nav-dialog" ref={drawer} onCancel={() => setMobileOpen(false)} onClick={e => { if (e.target === e.currentTarget) setMobileOpen(false); }}><div className="mobile-nav-inner"><button className="drawer-close" aria-label="Close navigation" onClick={() => setMobileOpen(false)}>×</button>{sidebar}</div></dialog>
    <div className="workspace-body"><header className="workspace-topbar" ref={bar}>
      <button className="mobile-nav-toggle" aria-label="Open navigation" onClick={() => setMobileOpen(true)}>☰</button>
      <div className="topbar-project-wrap"><button className="topbar-project" onClick={() => toggle("project")} aria-expanded={popover === "project"}><FigmaIcon file="ac380.svg" /><span><small>CURRENT PROJECT</small><strong>{demoProject.code}: {demoProject.name}</strong></span><FigmaIcon file="7f4de.svg" /></button>
      {popover === "project" && <div className="topbar-popover project-popover"><p className="popover-caption">DEMO WORKSPACE</p><strong>{demoProject.name}</strong><p>Area 42 · Scaffolding &amp; Insulation</p><Link href="/projects" onClick={closeNav}>View project register →</Link></div>}</div>
      <div className="topbar-search"><FigmaIcon file="ade86.svg" /><input type="search" placeholder="Search tag, permit, drawing, or PO..." aria-label="Search demo records" value={query} onChange={e => { setQuery(e.target.value); setPopover("search"); }} onFocus={() => setPopover("search")} />
      {popover === "search" && query && <div className="topbar-popover search-results"><p className="popover-caption">DEMO RECORDS · {results.length} RESULTS</p>{results.length ? results.map(result => <button key={result.title} onClick={() => { setDetail(result); setPopover(null); }}><strong>{result.title}</strong><span>{result.body}</span></button>) : <p>No matching records. Try “SCF”, “NCR”, or “42”.</p>}</div>}</div>
      <button className="shift-indicator" onClick={() => setDetail({ title: "Day shift · Demo schedule", body: "07:00–18:00 WIT · 142 personnel mobilized. Night shift: 18:00–07:00 WIT · 18 personnel planned. Reporting cut-off: 23 March 2025." })}><FigmaIcon file="f15e9.svg" /><span>DAY SHIFT<small>(07:00 - 18:00)</small></span></button>
      <div className="notification-wrap"><button className="notification-button" aria-label="Notifications, 3 unread" onClick={() => toggle("notifications")} aria-expanded={popover === "notifications"}><FigmaIcon file="f3a29.svg" /><span /></button>{popover === "notifications" && <div className="topbar-popover notification-popover"><p className="popover-caption">NOTIFICATIONS · DEMO</p>{alerts.map(a => <button key={a.title} onClick={() => { setDetail({ title: a.title, body: a.description }); setPopover(null); }}><strong>{a.title}</strong><span>{a.badge} · {a.owner}</span></button>)}</div>}</div>
      <div className="profile-wrap"><button className="profile-button" aria-label="Open account menu" onClick={() => toggle("profile")} aria-expanded={popover === "profile"}><Image src="/figma/dashboard/c704d.png" alt="Demo profile" width={32} height={32} /><span><strong>Marcus Sterling</strong><small>Lead Project Manager</small></span></button>{popover === "profile" && <div className="topbar-popover profile-popover"><p className="popover-caption">SIGNED IN AS</p><strong>{userName}</strong><p>Dashboard profile and project data are illustrative.</p><LogoutButton /></div>}</div>
    </header><main id="main-content" className="workspace-main">{children}</main></div>
    {detail && <Modal title={detail.title} onClose={() => setDetail(null)}><p className="demo-modal-label">DEMO RECORD</p><p>{detail.body}</p></Modal>}
  </div>;
}
