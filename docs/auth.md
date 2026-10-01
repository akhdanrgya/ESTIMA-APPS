# Authentication and login

## User flow

1. Visitors open `/login`. Authenticated users are redirected to `/dashboard`.
2. Email/password sign-in goes through Better Auth. Public registration is disabled.
3. The server validates credentials and stores a session in PostgreSQL. Better Auth manages HttpOnly cookies, origin checks, hashing and session expiry. Production must use HTTPS.
4. Workspace layouts and pages validate the session on the server. Data services independently check authentication and project membership.
5. Sign out revokes the session before navigating back to login.

Sessions expire after seven days and refresh after one day. Unchecked “Remember me”
uses Better Auth's non-persistent session cookie. Browsers may restore session cookies
when restoring a previous session; use Sign out on shared devices.
Passwords are never persisted by the login UI. Login accepts email only.

Rate limits are stored in PostgreSQL: five sign-in attempts per IP per minute, and
60 requests per minute for other auth endpoints. Configure trusted proxy/IP handling
for the chosen hosting environment before production. Do not trust arbitrary forwarded headers.

## First administrator

Set `.env.local` using `.env.example`, use a random auth secret (32+ characters), then:

```powershell
npm run infra:up
npm run db:migrate
npm run auth:create-admin
```

The command prompts for name, email, and a hidden password (12–128 characters).
Automation can supply `ESTIMA_ADMIN_NAME`, `ESTIMA_ADMIN_EMAIL`, and
`ESTIMA_ADMIN_PASSWORD` through its secret environment; never commit these values.
Bootstrap refuses to run if an admin exists. User, credential and audit records are
created in one transaction. It does not overwrite existing users or grant project memberships.
`systemRole` is server-controlled; the admin role currently has no automatic project bypass.

## Figma implementation decisions

Source: Login Screen `1:2` in APP UI UX. Logo and 13 SVG assets are local under
`public/figma/login`. Inter and JetBrains Mono are self-hosted npm font assets.
The two-column layout stacks on mobile. Inline validation, loading, generic credential
errors, network errors, password visibility and logout retry states are implemented.

Project selection happens after authentication; the disabled selector explains this.
The right-side project statistics are labeled illustrative and contain no private data.
The design's ISO/TLS/2FA claims are replaced with accurate copy until configured.
SSO, inspector badges, access requests, and password recovery currently show guidance;
they do not submit requests or claim that a reset email has been sent.

## Remaining integrations

- Email delivery and expiring password-reset links.
- Company identity provider for SAML/SSO; second-factor enrollment and recovery.
- Admin user management, role editor and project-assignment screens.
- Deployment-specific proxy configuration and HTTPS verification.

## Verification

`npm run test:auth` runs browser/UI and auth API checks against a local Next server.
The suite creates isolated temporary users, never a default administrator, and removes
only those test records after completion. PostgreSQL and applied migrations are required.
