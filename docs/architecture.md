# ESTIMA foundation

Stack: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui conventions,
TanStack Query/Table, React Hook Form + Zod, Drizzle/PostgreSQL, Better Auth, S3/MinIO.

Request flow: page/action/route → service → repository → database.
Services authorize requests; repositories never accept a client-supplied user identity.
Every project operation must check membership and its permitted roles on the server.
Critical writes must include an audit record in the same database transaction.

`src/app`: routes and presentation. `src/components`: shared UI and application shell.
`src/features`: module forms and validation. `src/server`: auth, database,
repositories, services, and object storage. `src/config`: module registry.

Initial schema includes Better Auth tables, projects, project membership, and audit logs.
Operational modules, company hierarchy, WBS, workflow, custom field definitions,
file metadata, and business transactions still require implementation and migrations.
Workspace pages require server-validated sessions. Authentication endpoints support
email/password login with public sign-up disabled. A local CLI provisions the first
administrator; project access remains separately scoped. See `docs/auth.md`.

Figma is the UI source of truth:
https://www.figma.com/design/4oFPFJCJ4i7F2KJjYjMT8u/APP-UI-UX?node-id=1-26
The login screen follows Figma frame `1:2`; the workspace shell is still temporary.

Implement feature libraries (charts, calendar, workflow, uploads, PDF/Excel) when their
modules are developed. Offline PWA and advanced modules are deferred per PRD.
No Go service or Redis is required for this foundation.
