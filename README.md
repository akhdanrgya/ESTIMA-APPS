# ESTIMA Project Management System

Fondasi Next.js full-stack berdasarkan PRD v1.2. Desain UI utama:
[Figma APP UI UX](https://www.figma.com/design/4oFPFJCJ4i7F2KJjYjMT8u/APP-UI-UX?node-id=1-26).
Shell saat ini masih sementara, belum merupakan implementasi desain Figma.

## Menjalankan aplikasi

Prasyarat: Node.js 22+ dan npm. Docker diperlukan untuk PostgreSQL/MinIO lokal.

```powershell
npm install
Copy-Item .env.example .env.local
# Isi BETTER_AUTH_SECRET dengan nilai acak minimal 32 karakter.
npm run infra:up
npm run db:migrate
npm run dev
```

Buka http://localhost:3000. Halaman awal dapat dibuka tanpa database;
auth dan layanan data memerlukan environment serta migrasi database.
Generate secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`.

MinIO console: http://localhost:9001. Kredensial lokal ada di `compose.yaml`.
Buat bucket privat `estima` melalui console sebelum mengembangkan upload.
Kredensial compose hanya untuk development; gunakan secret terpisah untuk deployment.

## Perintah pengembangan

```powershell
npm run lint
npm run typecheck
npm run build
npm run db:generate
npm run db:migrate
npm run db:studio
```

`/api/health` memeriksa liveness aplikasi, bukan koneksi database/storage.
Auth menggunakan Better Auth dengan pendaftaran publik dinonaktifkan.
UI login dan provisioning admin belum dibuat. Workspace saat ini berisi placeholder
publik tanpa data; wajib dilindungi sebelum menyambungkan data operasional.
Modul bisnis belum diimplementasikan. Detail struktur: [architecture](docs/architecture.md).

## Catatan paket desain awal

File contents:

1. `DESIGN.md`
   - Global ESTIMA design system
   - Visual language
   - Navigation
   - Status colors
   - Tables
   - Forms
   - Responsive behavior
   - Module-specific UI rules

2. `STITCH_MASTER_PROMPT.md`
   - Overall product context
   - User roles
   - Core features
   - Main navigation
   - MVP screen priority

3. `STITCH_SCREEN_PROMPTS.md`
   - 20 individual screen prompts
   - Recommended order
   - Prototype linking suggestions

## Recommended Workflow

1. Create a new Stitch project.
2. Add/import `DESIGN.md` if supported in your Stitch workflow.
3. Start with the Master Prompt.
4. Generate the Global App Shell.
5. Generate Dashboard.
6. Generate screens sequentially using `STITCH_SCREEN_PROMPTS.md`.
7. For each next screen, explicitly tell Stitch to preserve the same design system.
8. Link the screens into the prototype flow.
9. Review consistency before moving to Next.js implementation.

## MVP Design Priority

Start with:

- Login
- App Shell
- Dashboard
- Projects
- Scaffolding
- Insulation
- Planning & Progress
- Daily Report
- Manpower
- Material
- QA/QC
- Punch
- Reports
- Administration

Do not prioritize HSE, Commercial, Documents, or Client Portal detail screens until the core MVP UI is stable.
