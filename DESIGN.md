# ESTIMA Design System
## DESIGN.md for Google Stitch

**Product:** ESTIMA Project Management System  
**Product Type:** Industrial Project Control & Field Operation System  
**Primary Domain:** Scaffolding & Insulation Contractor  
**Primary Usage:** Desktop-first enterprise web application with responsive tablet/mobile support  

---

# 1. Product Design Direction

ESTIMA is not a generic task-management app.

It is an industrial project-control and field-operation platform used by:

- Project managers
- Planners / project control
- Site managers
- Supervisors
- Scaffold coordinators / inspectors
- Insulation supervisors
- QA/QC
- HSE
- Warehouse / material controllers
- Document controllers
- Commercial / QS / finance
- Management
- Client representatives

The interface must feel:

- Professional
- Industrial
- Enterprise-grade
- Clean
- Structured
- Data-dense but readable
- Reliable
- Operational
- Serious, not playful
- Modern without excessive decoration

Avoid:

- Cartoon-like illustrations
- Excessive gradients
- Oversized rounded cards everywhere
- Consumer-app visual language
- Decorative effects that reduce information density
- Overly colorful pages
- Glassmorphism
- Neon styling
- Excessive shadows

---

# 2. Core Visual Principles

## 2.1 Information First

Every screen should prioritize:

1. Current project context
2. Current module
3. Current status
4. Primary actions
5. Operational data
6. Exceptions / warnings
7. History / traceability

Users should be able to scan a page quickly without reading everything.

---

## 2.2 Desktop First

Primary target:

- 1440px+ desktop
- 1280px laptop

Secondary:

- Tablet
- Mobile / PWA for field operations

Desktop screens may use:

- Persistent sidebar
- Dense tables
- Split layouts
- Detail panels
- Multi-column dashboards

Mobile screens should prioritize:

- Daily report
- Field progress
- Inspection
- Punch
- Photo evidence
- Material request
- Scaffold request

---

# 3. Global Application Shell

Use a persistent left sidebar.

Main navigation:

- Dashboard
- Projects
- Scaffolding
- Insulation
- Planning & Progress
- Manpower
- Materials
- QA/QC
- HSE
- Commercial
- Documents
- Reports
- Administration

Top header should include:

- Current project selector
- Optional project breadcrumb
- Search
- Notification icon
- User profile
- Optional date / shift context

Recommended desktop layout:

```text
┌──────────────────────────────────────────────────────────────┐
│ ESTIMA         Project Selector           Search   Bell User │
├───────────────┬──────────────────────────────────────────────┤
│ Dashboard     │                                              │
│ Projects      │ Page Title                     Page Actions  │
│ Scaffolding   │ Breadcrumb / Context                        │
│ Insulation    │                                              │
│ Planning      │ Main Content                                 │
│ Manpower      │                                              │
│ Materials     │                                              │
│ QA/QC         │                                              │
│ HSE           │                                              │
│ Commercial    │                                              │
│ Documents     │                                              │
│ Reports       │                                              │
│ Admin         │                                              │
└───────────────┴──────────────────────────────────────────────┘
```

---

# 4. Color System

## 4.1 Base Colors

Primary brand direction:

- Deep Navy / Dark Blue
- Neutral Gray
- White

Suggested semantic usage:

### Primary
Deep blue for:

- Primary buttons
- Active navigation
- Links
- Main chart line
- Important section headers

### Neutral
Gray for:

- Secondary text
- Borders
- Disabled controls
- Inactive statuses
- Table separators

---

## 4.2 Status Colors

Use status colors consistently across every module.

### Green
Meaning:

- Approved
- Completed
- Ready
- Closed
- Passed
- Available

### Blue
Meaning:

- Active
- In Progress
- Submitted
- Under Review
- Erection
- Work Ongoing

### Orange / Amber
Meaning:

- Pending
- Warning
- Due Soon
- Waiting
- Needs Attention

### Red
Meaning:

- Rejected
- Overdue
- Critical
- Failed
- Blocked
- NCR Open

### Gray
Meaning:

- Draft
- Not Started
- Inactive
- Archived

Do not create different colors for the same semantic status in different modules.

---

# 5. Typography

Use a modern sans-serif typeface.

Preferred:

- Inter
- Geist
- Similar neutral enterprise sans-serif

Hierarchy:

- Page title: strong, clear, not oversized
- Section heading: medium-bold
- Card KPI number: visually dominant
- Table text: compact and readable
- Metadata: smaller muted text

Avoid extremely large marketing-style headings.

---

# 6. Spacing & Density

ESTIMA should be moderately dense.

Use:

- Consistent 8px spacing rhythm
- 16–24px card padding
- Tight but readable tables
- Compact filters
- Clear grouping

Do not use excessive empty space.

Dashboard and register pages should maximize useful information per viewport.

---

# 7. Cards

Cards should:

- Use subtle border
- Small or medium corner radius
- Minimal shadow or no shadow
- White background
- Clear internal hierarchy

Use cards for:

- KPI
- Summary
- Alerts
- Small charts
- Project overview
- Detail summaries

Do not wrap every piece of content in a card.

---

# 8. Tables

Tables are a critical component.

Required features:

- Sticky header where useful
- Search
- Filter
- Sort
- Pagination
- Column visibility
- Row selection where needed
- Row actions
- Status badges
- Bulk actions where relevant

Tables should feel suitable for:

- Hundreds of scaffold records
- Material transactions
- Manpower
- Punch lists
- NCR
- Documents
- BOQ
- Claims

Use clear alignment:

- Text: left
- Quantity / amount: right
- Status: centered or left
- Actions: right

---

# 9. Forms

Form design should support complex industrial data entry.

Use:

- Clear section grouping
- Labels above inputs
- Helper text only when needed
- Inline validation
- Required indicator
- Consistent field widths
- Multi-column desktop forms
- Single-column mobile forms

Common field types:

- Text
- Number
- Date
- Date/time
- Select
- Multi-select
- Checkbox
- User picker
- Project / area / work package picker
- File upload
- Photo upload
- Signature
- Dynamic custom fields

Primary action should remain visible.

---

# 10. Status Badges

Status badges must be consistent, compact, and highly scannable.

Examples:

- READY FOR USE
- ERECTION
- PENDING INSPECTION
- APPROVED
- REJECTED
- OPEN
- OVERDUE
- COMPLETED
- DRAFT

Use subtle tinted backgrounds rather than fully saturated pills.

---

# 11. Charts

Charts should be functional, not decorative.

Supported:

- S-Curve
- Planned vs Actual
- Bar chart
- Line chart
- Stacked bar
- Donut / status distribution
- Trend
- Aging chart

Always provide:

- Clear legend
- Axis labels
- Date range
- Units
- Tooltip
- Comparison context

Avoid 3D charts.

---

# 12. Alerts & Exceptions

Operational exceptions must stand out.

Examples:

- Scaffold inspection overdue
- Punch overdue
- NCR overdue
- Certification expiring
- Low stock
- Schedule delay
- Pending approval

Use:

- Alert banners
- Warning cards
- Table highlight
- Notification center

Do not overuse red. Reserve it for real exceptions.

---

# 13. Project Context

Most operational data is project-scoped.

Every major operational screen should clearly show the current project.

Typical hierarchy:

```text
Project
  └─ Area / Unit
      └─ Work Package
          └─ Equipment / Line / Scaffold / Work Item
```

Filters should reflect this hierarchy where relevant.

---

# 14. Module-Specific Patterns

## Dashboard

Prioritize:

- Overall project progress
- Planned vs Actual
- Manpower / manhour
- Scaffold status
- Insulation progress
- Pending inspection
- Punch / NCR
- Material alerts
- Commercial summary
- Project warnings

---

## Scaffolding

Primary status flow:

```text
Requested
→ Approved
→ Erection
→ Ready for Inspection
→ Inspected
→ Ready for Use
→ Modification
→ Re-inspection
→ Dismantling
→ Closed
```

Every scaffold detail should clearly show:

- Scaffold ID
- QR
- Area
- Location
- Dimension
- Type
- Load class
- Current status
- Tag status
- Last inspection
- Next inspection
- History

---

## Insulation

Primary status flow:

```text
Not Started
→ Material Ready
→ Surface Ready
→ Insulation Installed
→ Cladding Installed
→ QC Inspection
→ Punch List
→ Completed
```

Show:

- Equipment / Line
- Area
- Work Package
- Material
- Thickness
- Cladding
- Quantity
- Unit
- Progress
- Inspection state

---

## QA/QC

Focus on:

- Inspection status
- Checklist
- Result
- Punch
- NCR
- Re-inspection
- Photo evidence
- Client approval
- Closure

Traceability must be obvious.

---

# 15. Responsive Rules

## Desktop

Use:

- Sidebar
- Wide table
- 2–4 column KPI grid
- Split view where useful

## Tablet

Use:

- Collapsible sidebar
- Horizontal table scroll
- 2-column cards

## Mobile

Use:

- Drawer navigation
- Card-based list instead of full table where necessary
- Sticky primary action
- Camera-first evidence upload
- Compact forms
- Large tap targets

---

# 16. Interaction Rules

Use:

- Confirmation dialog for destructive actions
- Toast for successful action
- Inline loading state
- Skeleton for page-level fetch
- Disabled state during mutation
- Clear empty state
- Clear error recovery

Approval actions should always show:

- Actor
- Action
- Timestamp
- Comment
- Current step

---

# 17. Accessibility

Maintain:

- Strong color contrast
- Keyboard focus
- Visible focus states
- Form labels
- Semantic status text, not color alone
- Readable font sizes
- Clear disabled states

---

# 18. Overall Design Goal

The final ESTIMA UI should feel like a modern industrial operations platform somewhere between:

- Project-control software
- Enterprise ERP module
- Field-operation system
- Quality-management system

while remaining cleaner and easier to use than traditional enterprise software.

The user should immediately understand:

- What project they are in
- What requires action
- What is delayed
- What is approved
- What work is progressing
- What needs inspection
- What may block handover
