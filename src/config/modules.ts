export const modules = [
  { slug: "dashboard", name: "Dashboard", description: "Ringkasan project control dan aktivitas lapangan." },
  { slug: "projects", name: "Projects", description: "Konfigurasi proyek, organisasi, area, WBS, dan work package." },
  { slug: "scaffolding", name: "Scaffolding", description: "Scaffold register, erection, inspection, dan dismantling." },
  { slug: "insulation", name: "Insulation", description: "Work item, material, installation, cladding, dan QC." },
  { slug: "planning", name: "Planning & Progress", description: "Baseline, planned vs actual, dan progress lapangan." },
  { slug: "daily-reports", name: "Daily Reports", description: "Aktivitas harian, manhour, kendala, dan bukti lapangan." },
  { slug: "manpower", name: "Manpower", description: "Personel, penugasan, sertifikasi, dan manhour." },
  { slug: "materials", name: "Materials", description: "Register material, stok, permintaan, dan pemakaian." },
  { slug: "quality", name: "QA/QC", description: "Inspection, checklist, NCR, dan approval." },
  { slug: "punchlist", name: "Punch List", description: "Temuan, penanggung jawab, verifikasi, dan closure." },
  { slug: "reports", name: "Reports", description: "Laporan proyek dan integrasi spreadsheet." },
  { slug: "administration", name: "Administration", description: "User, role, akses proyek, dan audit trail." },
] as const;
