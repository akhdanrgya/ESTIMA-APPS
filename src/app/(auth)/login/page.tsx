import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getSession } from "@/server/auth/session";
import { LoginForm } from "@/features/auth/login-form";
import { LoginIcon } from "@/features/auth/login-icon";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "./login.css";

export const metadata: Metadata = { title: "Sign in" };
export default async function LoginPage() {
  if (await getSession()) redirect("/dashboard");
  return <div className="login-screen"><div className="ambient-glow" aria-hidden="true" />
    <header className="login-header"><div className="login-brand"><Image src="/figma/login/48198.png" width={197} height={55} alt="ESTIMA — One Stop Insulation Services" priority /><span className="brand-divider" /><span className="brand-tagline">INDUSTRIAL PROJECT CONTROL &amp; FIELD OPERATION</span></div><span className="security-label"><LoginIcon name="shield" />AUTHORIZED PERSONNEL ONLY</span></header>
    <main id="main-content" className="login-main"><div className="login-card">
      <section className="login-form-panel"><div className="portal-eyebrow"><span />ENTERPRISE PORTAL ACCESS</div><h1>Sign In to Your Workspace</h1><p className="login-intro">Authorized personnel only. Access scaffolding registers, thermal insulation trackers, S-Curve analytics, and QA/QC inspection hold-points.</p><LoginForm /></section>
      <aside className="login-context" aria-label="Operations preview"><Image src="/figma/login/c4766.svg" width={210} height={210} alt="" className="scaffold-watermark" unoptimized /><div className="context-content"><span className="operations-label"><LoginIcon name="operations" />ACTIVE OPERATIONS CONTROL</span><h2>Tangguh LNG Expansion Project</h2><p className="context-subtitle">Train 3 — Area 42 Utilities &amp; Cryogenic Rack</p><p className="context-description">Specialist Contractor for Industrial Scaffolding, Cold Aerogel &amp; Hot Acoustic Insulation Systems.</p><p className="preview-label">ILLUSTRATIVE PROJECT DATA</p>
        <div className="telemetry"><section className="telemetry-card"><div className="metric-row"><h3>Physical S-Curve Progress</h3><p><strong>64.2%</strong> <span className="variance">(-4.2% Var)</span></p></div><div className="progress-track"><span /></div></section>
          <section className="telemetry-card"><div className="metric-row"><h3>Scaffolding Fleet Tags</h3><strong>284 Units Active</strong></div><div className="fleet-tags"><div className="fleet-green"><strong>218</strong><span>GREEN (READY)</span></div><div className="fleet-yellow"><strong>34</strong><span>YELLOW (ERECT)</span></div><div className="fleet-red"><strong>32</strong><span>RED (HOLD/INSP)</span></div></div></section>
          <section className="telemetry-card safety-metrics"><div><h3>SAFE MANHOURS (ZERO LTI)</h3><strong>486,200 hrs</strong></div><div><h3>CURRENT SITE POB</h3><strong>142 Personnel</strong></div></section></div></div>
        <div className="context-footer"><p><LoginIcon name="compliance" />Project access is managed by your administrator.</p><p>Inspection records, progress, and approvals are available only to authorized project members.</p></div></aside>
    </div></main><footer className="login-footer">© {new Date().getFullYear()} ESTIMA OPS. All rights reserved.</footer>
  </div>;
}
