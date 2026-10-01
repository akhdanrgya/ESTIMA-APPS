export const demoProject = { code: "PRJ-2025-TGS", name: "Tangguh LNG Expansion Train 3", period: "Cut-off: Week 12 (17 - 23 Mar 2025)" };
export const kpis = [
  { label: "Overall progress", value: "64.2", unit: "%", icon: "550be.svg", progress: 64.2, note: "Baseline Rev-02", footer: "Target 100% · W28" },
  { label: "Planned progress", value: "68.4", unit: "%", icon: "fc178.svg", progress: 68.4, note: "Schedule Rev 2.1", footer: "W12 Milestone" },
  { label: "Actual executed", value: "64.2", unit: "%", icon: "852f0.svg", detail: "+2.8% vs W11", tone: "blue", note: "Weekly earned", footer: "3,480 Manhours" },
  { label: "Schedule variance", value: "-4.2", unit: "%", badge: "BEHIND", tone: "amber", detail: "Slippage in Area 42-C", note: "Mitigation plan", footer: "Night shift added" },
  { label: "Site manpower", value: "142", unit: "/ 150", badge: "94.6% MOB", tone: "green", progress: 94.6, note: "Direct: 118", footer: "Supervision: 24" },
  { label: "HSE safe manhours", value: "486.2", unit: "k", icon: "9e598.svg", detail: "0 LTI · 342 Safe Days", tone: "green", note: "Incident Rate (TRIR)", footer: "0.00" },
  { label: "Active scaffolds", value: "284", unit: "units", icon: "67fb7.svg", detail: "14,250 m³ Volume in Place", tone: "blue", note: "Turnover rate", footer: "18 units / week" },
  { label: "Inspection requests", value: "18", unit: "pending", badge: "3 HOLD", tone: "amber", detail: "Client QA sign-off queue", note: "Avg SLA clearance", footer: "4.8 Hours" },
  { label: "Open punch items", value: "14", unit: "total", icon: "bf7e3.svg", detail: "5 Cat A · 9 Cat B", tone: "amber", note: "Cleared (past 7d)", footer: "22 items" },
  { label: "Non-conformance", value: "3", unit: "NCRs", badge: "1 CRITICAL", tone: "red", detail: "2 under technical review", note: "Days to close SLA", footer: "< 72 Hours" },
] as const;
export const sectors = [
  { area: "42-A", name: "Area 42-A: Pipe Rack Tiers 1–3", material: "Hot & Cold Cellular Glass", planned: 85, actual: 82.4 },
  { area: "42-B", name: "Area 42-B: Cryogenic LNG Spheres (TK-4201)", material: "Perlite & Aerogel Blanket", planned: 64, actual: 61 },
  { area: "42-C", name: "Area 42-C: Acid Gas Absorber Column (C-4201)", material: "Mineral Wool & Al Cladding", planned: 56, actual: 44.5 },
  { area: "42-D", name: "Area 42-D: Flare KO Drum & Header", material: "Acoustic & Thermal Jacket", planned: 92, actual: 94 },
];
export const approvals = [
  { id: "SCF-42-0891", title: "Scaffold Tag Handover", time: "14 mins ago", description: "SCF-42-0891 Cuplock Tower (24m H), Area 42-A. Shift sign-off required.", owner: "Inspector: R. Situmorang", action: "Approve", trade: "Scaffolding", area: "42-A" },
  { id: "WP-42-02", title: "Insulation Sign-Off (Hold-Pt)", time: "1 hr ago", description: "WP-42-02 Cryogenic Perlite pack pre-cladding dry inspection (JGC/BP QC).", owner: "Client Action Req", action: "Sign", trade: "Insulation", area: "42-B" },
  { id: "VO-42-019", title: "Variation Claim IPC #07", time: "3 hrs ago", description: "Additional flare line scaffolding (VO-42-019). Value: $48,200 USD.", owner: "Commercial Dept", action: "Endorse", trade: "Scaffolding", area: "42-D" },
];
export const alerts = [
  { title: "7-Day Inspection Due", badge: "< 24h", tone: "amber", icon: "0d2b0.svg", description: "3 units (SCF-42-0610, 0614, 0722) will auto tag-out Red at 06:00 WIT tomorrow.", owner: "Assigned: Inspector Team Alpha" },
  { title: "Wind Gust Approaching Limit", badge: "14.2 Kts", tone: "blue", icon: "06a11.svg", description: "Area 42 Flare Riser erection suspended if gusts exceed 15.0 kts. Standby alert.", owner: "Monitored: Met Station Jetty 02" },
  { title: "NCR-2025-014 Open", badge: "STOP WORK", tone: "red", icon: "89ecc.svg", description: "Vapor barrier holiday pinhole failure detected on Line 14-P-4202 spool. Tagged out.", owner: "Owner: QC Manager M. Arifin" },
];
export const activities = [
  { title: "Scaffold SCF-42-0845 Dismantled", time: "12m", detail: "Materials returned to central yard (420 kg tubes, 180 clamps).", tone: "green" },
  { title: "Cladding Completed: 14-P-4202", time: "38m", detail: "Foreman M. Fauzi submitted QA inspection request form.", tone: "blue" },
  { title: "Aerogel Wrap Inspected", time: "1h", detail: "JGC/BP QC confirmed thickness tolerance (+/-1.5mm) on Sphere 01.", tone: "blue" },
  { title: "Shift Handover Filed", time: "2h", detail: "Day shift crew 142 pax logged out; 18 night-shift crew prepped.", tone: "blue" },
];
export const materials = [
  { name: "Drop Forged RA Coupler", days: "< 2 Days Buffer", remaining: "820 pcs", minimum: "1,500", note: "PO #4890 awaiting customs Bintuni", tone: "red" },
  { name: 'Mineral Wool Pipe Sec. 4″', days: "4.5 Days", remaining: "340 lm", minimum: "400", note: "Dispatched Sorong Depot", tone: "amber" },
  { name: "SS Banding 19mm x 0.7mm", days: "1.2 Days", remaining: "14 rolls", minimum: "30", note: "Re-order triggered to PT Cilegon", tone: "red" },
];
