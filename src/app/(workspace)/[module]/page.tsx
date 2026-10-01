import { notFound } from "next/navigation";
import { modules } from "@/config/modules";
import { requirePageSession } from "@/server/auth/session";
export function generateStaticParams() { return modules.filter(m => m.slug !== "dashboard").map(m => ({ module: m.slug })); }
export default async function ModulePage({ params }: { params: Promise<{ module: string }> }) {
  await requirePageSession();
  const { module: slug } = await params;
  const moduleInfo = modules.find(m => m.slug === slug);
  if (!moduleInfo || slug === "dashboard") notFound();
  return <div><p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">ESTIMA / {moduleInfo.name}</p><h1 className="mt-3 text-2xl font-semibold">{moduleInfo.name}</h1><p className="mt-2 text-sm text-muted-foreground">{moduleInfo.description}</p><section className="mt-7 rounded-md border bg-white p-8"><span className="rounded bg-amber-50 px-2 py-1 text-xs font-medium text-amber-800">Belum diimplementasikan</span><h2 className="mt-5 font-semibold">Modul tersedia untuk pengembangan</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Halaman ini adalah fondasi navigasi. Form, data register, approval, dan laporan akan dibangun sesuai PRD. Belum ada data operasional yang ditampilkan.</p></section></div>;
}
