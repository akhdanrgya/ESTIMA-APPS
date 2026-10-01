# Product Requirements Document (PRD)
# ESTIMA Project Management System

**Document Version:** 1.2  
**Document Status:** Draft for Development  
**Product Name:** ESTIMA Project Management System  
**Product Type:** Web-based Project Control & Field Operation System  
**Primary Domain:** Industrial Construction / Oil & Gas / Power Plant  
**Primary Disciplines:** Scaffolding & Insulation  
**Target Platform:** Responsive Web / PWA  

---

## 1. Executive Summary

ESTIMA Project Management System adalah sistem berbasis web yang dirancang untuk mengintegrasikan proses project control dan field operation pada perusahaan kontraktor insulation dan scaffolding yang menangani proyek oil & gas, power plant, shutdown, maintenance, dan pekerjaan industrial sejenis.

Sistem ini dirancang untuk mengelola lifecycle proyek secara terintegrasi:

**Estimasi → Mobilisasi → Work Pack → Material & Manpower → Progress → Inspection → Handover → Billing**

ESTIMA harus mampu menangani perbedaan requirement antar-client dan antar-project. Setiap project dapat memiliki kombinasi modul, field, dokumen, checklist, approval workflow, struktur folder, dan report template yang berbeda.

Karena itu, prinsip utama ESTIMA adalah:

- Project-based configuration
- Modular feature architecture
- Configurable workflow
- Dynamic form & custom field
- Project-level access control
- Auditability
- Traceable field operation
- Integrated project control
- Scalable but maintainable architecture

Untuk tahap awal development/MVP, ESTIMA menggunakan **Next.js sebagai full-stack framework**. Frontend, server-side logic, API/Route Handlers, Server Actions, authentication, authorization, dan business logic dijalankan dalam satu codebase TypeScript yang terstruktur secara modular.

Backend Go **tidak menjadi requirement pada Phase 1**. Go hanya menjadi opsi pada fase scaling apabila terdapat kebutuhan performa, background processing berat, integrasi kompleks, atau pemisahan service tertentu.

---

## 2. Product Vision

Membangun satu platform operasional yang menjadi **single source of truth** untuk seluruh aktivitas project scaffolding dan insulation, dari perencanaan hingga billing.

ESTIMA harus mengurangi ketergantungan pada:

- Spreadsheet terpisah
- Chat pribadi / grup
- Form manual
- Dokumen tidak terstruktur
- File lokal yang tersebar
- Approval manual tanpa histori
- Rekap data berulang
- Reporting manual

ESTIMA harus membuat seluruh stakeholder dapat melihat status project berdasarkan data terbaru, sesuai hak akses masing-masing.

---

## 3. Problem Statement

### 3.1 Data Project Tersebar

Data project saat ini dapat tersebar di Excel, chat, dokumen manual, file lokal, email, foto lapangan, dan report terpisah.

**Dampak:**
- Sulit mengetahui versi data terbaru
- Duplikasi data
- Status antar-pihak tidak konsisten
- Sulit melakukan audit
- Sulit menelusuri perubahan

**Kebutuhan:**
- Centralized project platform
- Project-based data
- Version/history tracking
- Audit trail

### 3.2 Requirement Tiap Project Berbeda

Setiap client/project dapat memiliki format dokumen, checklist, approval, report, field tambahan, struktur folder, dan kombinasi modul yang berbeda.

**Dampak:** sistem yang terlalu rigid tidak dapat digunakan lintas project.

**Kebutuhan:**
- Project Template
- Module Activation
- Custom Field
- Dynamic Checklist
- Configurable Workflow
- Configurable Document Requirement
- Configurable Report Template

### 3.3 Planning dan Actual Progress Tidak Terintegrasi

Sulit memonitor planned vs actual, delay, constraint, productivity, recovery plan, dan forecast jika planning terpisah dari progress lapangan.

**Kebutuhan:** Planning & Progress module yang terhubung dengan field operation.

### 3.4 Lifecycle Scaffold Tidak Terdokumentasi dengan Baik

Lifecycle scaffold:

**Request → Approval → Erection → Inspection → Ready for Use → Modification → Re-inspection → Dismantle → Closed**

**Risiko:**
- Inspection terlewat
- Tag status tidak jelas
- Modifikasi tidak terdokumentasi
- History sulit ditelusuri

**Kebutuhan:** scaffold register dengan unique Scaffold ID, QR Code, lifecycle status, inspection history, modification history, dan dismantling status.

### 3.5 Data Manpower, Material, dan Progress Terpisah

**Dampak:** sulit menganalisis productivity, manhour, material consumption, resource utilization, dan actual performance.

**Kebutuhan:** integrasi manpower, timesheet, material, work package, dan progress.

### 3.6 Punch List dan NCR Tidak Ter-track Secara End-to-End

**Dampak:** closure terlambat, handover tertahan, evidence tercecer, dan responsibility tidak jelas.

**Kebutuhan:** structured QA/QC workflow.

### 3.7 Commercial Data Terpisah dari Field Progress

Commercial team harus melakukan rekonsiliasi manual antara BOQ, field progress, approved quantity, variation, claim, dan invoice.

**Kebutuhan:** commercial module yang terhubung ke progress lapangan.

### 3.8 Internal dan Client Membutuhkan Data Berbeda

Client tidak boleh melihat internal cost, margin, payroll, internal notes, dan private company data.

**Kebutuhan:** RBAC, project access, client-specific visibility, dan audit trail.

---

## 4. Product Goals

ESTIMA harus dapat:

1. Menjadi pusat data project.
2. Mengintegrasikan field operation dan project control.
3. Mengurangi proses manual.
4. Mempercepat proses reporting.
5. Meningkatkan traceability.
6. Mempercepat inspection dan closure.
7. Mendukung konfigurasi berbeda setiap project.
8. Memberikan dashboard realtime kepada management.
9. Menghubungkan progress lapangan ke commercial progress.
10. Menyediakan controlled client access.

---

## 5. Non-Goals

Pada versi awal, ESTIMA tidak ditujukan untuk menggantikan full ERP, accounting software, payroll system, procurement ERP skala enterprise, BIM platform, Primavera P6, SAP, atau full document engineering system.

Integrasi dengan sistem tersebut dapat ditambahkan pada fase berikutnya.

---

## 6. Target Users & Stakeholders

### 6.1 Internal Management

**Director / Management**
- Executive Dashboard
- Project performance
- KPI
- Risk monitoring
- Progress
- Commercial overview

**Project Manager**
- Project setup
- Planning
- Progress
- Approval
- Resource monitoring
- Client coordination

**Project Control / Planner**
- Schedule
- Baseline
- Planned vs Actual
- Look Ahead
- Recovery Plan
- Productivity
- S-Curve

### 6.2 Project & Site Team

**Site Manager / Superintendent**
- Site operation overview
- Approval
- Productivity
- Manhour
- Work planning

**Supervisor / Foreman**
- Daily report
- Progress entry
- Constraint
- Photo evidence
- Scaffold request
- Material request

**Scaffold Coordinator / Inspector**
- Scaffold register
- QR
- Erection
- Inspection
- Tagging
- Modification
- Dismantling

**Insulation Supervisor**
- Work register
- Installation progress
- Quantity tracking
- Handover
- Material request

**QA/QC Inspector**
- Inspection request
- Checklist
- Punch
- NCR
- Re-inspection
- Closure

**HSE Officer**
- Toolbox meeting
- Safety observation
- Incident
- Permit
- JSA/JHA
- Corrective action

**Worker / Technician**
- Assignment
- Attendance
- Task information

### 6.3 Support Functions

**Warehouse / Material Controller**
- Stock
- Material issue
- Return
- Transfer
- Damage/loss

**Document Controller**
- Document register
- Revision
- Approval
- Distribution
- Final dossier

**Commercial / QS / Finance**
- Contract
- BOQ
- Measurement
- Claim
- Variation
- Invoice
- Retention
- Payment

**System Administrator**
- User
- Role
- Permission
- Project access
- Configuration
- Audit trail

### 6.4 Client / Owner

**Client Management**
- Dashboard
- Progress
- Reports

**Client QC / Inspector**
- Inspection
- Punch
- NCR
- Approval

**Client HSE**
- Corrective action
- HSE monitoring

**Client Engineer / Representative**
- Document review
- Variation approval
- Inspection review

---

## 7. Product Scope

Main navigation:

1. Dashboard
2. Projects
3. Scaffolding
4. Insulation
5. Planning & Progress
6. Manpower
7. Materials
8. QA/QC
9. HSE
10. Commercial
11. Documents
12. Reports
13. Administration

---

## 8. Functional Requirements

### 8.1 Dashboard & Project Overview

**Features:**
- Executive Dashboard
- Active Project Summary
- Planned vs Actual Progress
- S-Curve
- Manpower Summary
- Manhour Summary
- Scaffold Summary
- Insulation Summary
- Material Status
- Pending Inspection
- Open Punch List
- Open NCR
- Commercial Summary
- Billing Summary
- Alerts
- Warnings

**Filters:**
- Project
- Area
- Discipline
- Work Package
- Date Range

### 8.2 Project Management & Configuration

**Project Setup Fields:**
- Project Code
- Project Name
- Client
- Contract
- Location
- Start Date
- Finish Date
- Status

**Project Organization:**
- Project Manager
- Site Manager
- Planner
- QA/QC
- HSE
- Warehouse
- Commercial
- Client team

**Project Structure:**
- Area
- Unit
- Location
- Discipline
- WBS
- Work Package
- Equipment Tag
- Line Number

**Project Configuration:**
- Active modules
- Custom fields
- Approval workflow
- Checklist
- Document requirements
- Report templates
- Folder structure
- Units
- Naming conventions

### 8.3 Project Template

Default templates:

1. Oil & Gas – Scaffolding
2. Oil & Gas – Insulation
3. Power Plant – Shutdown
4. Scaffolding + Insulation

Template dapat berisi modules, checklist, folder structure, approval workflow, custom fields, dan report templates.

### 8.4 Custom Field

Supported field types:
- Text
- Number
- Date
- Dropdown
- Checkbox
- Attachment
- User
- Signature

Custom fields dapat diterapkan pada Project, Scaffold, Insulation Work, Inspection, Material, Daily Report, dan Document.

### 8.5 Planning & Progress Control

Features:
- Master Schedule
- Activity Planning
- Baseline
- Planned Start
- Planned Finish
- Actual Start
- Actual Finish
- Progress %
- Daily Progress
- Weekly Progress
- Look Ahead
- Gantt
- S-Curve
- Milestone
- Delay Tracking
- Constraint Register
- Recovery Plan
- Productivity Tracking

Progress dapat dianalisis berdasarkan Project, Area, Discipline, dan Work Package.

### 8.6 Scaffolding Management

**Scaffold Request Fields:**
- Project
- Area
- Location
- Requester
- Purpose
- Height
- Length
- Width
- Scaffold Type
- Load Class
- Drawing
- Required Date

**Scaffold Lifecycle:**
1. Requested
2. Approved
3. Erection
4. Ready for Inspection
5. Inspected
6. Ready for Use
7. Modification
8. Re-inspection
9. Dismantling
10. Closed

**Scaffold Register Data:**
- Scaffold ID
- QR Code
- Project
- Area
- Location
- Dimension
- Type
- Load Class
- Tag Status
- Current Status

**Scaffold Inspection:**
- Dynamic checklist
- Inspection result
- Accepted / Rejected
- Photo evidence
- Inspector
- Signature
- Client approval
- Re-inspection

**Scaffold Monitoring:**
- Standing duration
- Inspection due
- Overdue inspection
- Utilization
- Modification history
- Dismantling history

### 8.7 Insulation Management

**Work Register Fields:**
- Project
- Area
- Work Package
- Equipment
- Line Number
- Insulation Type
- Material
- Thickness
- Cladding Type
- Dimension
- Quantity
- Unit

**Progress Status:**
1. Not Started
2. Material Ready
3. Surface Ready
4. Insulation Installed
5. Cladding Installed
6. QC Inspection
7. Punch List
8. Completed

Supported Units: m², m, m³, pcs, lot.

### 8.8 Manpower & Manhour

**Employee Master:**
- Employee ID
- Name
- Position
- Trade
- Skill
- Qualification
- Certification
- Certification Expiry

**Project Assignment:**
- Project
- Mobilization Date
- Demobilization Date
- Crew
- Work Package

**Timesheet:**
- Date
- Employee
- Project
- Work Package
- Regular Hours
- Overtime
- Activity

**Analytics:**
- Manpower by project
- Manhour
- Productivity
- Crew allocation
- Historical manpower

### 8.9 Material & Warehouse

**Material Master:**
- Material Code
- Material Name
- Category
- Unit
- Minimum Stock

**Material Lifecycle:**

**Available → Reserved → Issued → Installed/Erected → Returned → Damaged/Lost**

**Features:**
- Warehouse
- Stock Balance
- Material Request
- Approval
- Issue
- Return
- Transfer
- Consumption
- Reservation
- Project Allocation
- Installed Material
- Damaged Material
- Lost Material
- Low Stock Alert
- Transaction History

### 8.10 QA/QC Inspection

Features:
- Inspection Request
- Inspection Template
- Dynamic Checklist
- Result
- Photo Evidence
- Inspector
- Signature
- Client Approval
- History
- Re-inspection

Inspection dapat diterapkan pada Scaffold, Insulation, Material, dan Work Package.

### 8.11 Punch List

**Workflow:**

**Open → Assigned → Rework → Ready for Inspection → Re-inspection → Closed**

Jika gagal:

**Re-inspection → Rejected → Rework**

**Punch Data:**
- Description
- Category
- Priority
- PIC
- Due Date
- Before Photo
- Corrective Action
- After Photo
- Status
- History

Punch dapat menjadi blocker untuk handover.

### 8.12 NCR

Fields:
- NCR Number
- Description
- Root Cause
- Corrective Action
- Preventive Action
- PIC
- Due Date
- Verification
- Closure

### 8.13 HSE

Features:
- Toolbox Meeting
- Attendance
- Safety Observation
- Unsafe Act
- Unsafe Condition
- Near Miss
- Incident
- Accident
- JSA
- JHA
- Work Permit Register
- Safety Inspection
- Corrective Action
- Photo Evidence
- Safety KPI
- HSE Report

### 8.14 Document Control

**Document Register Fields:**
- Project
- Document Number
- Document Type
- Title
- Revision
- Status
- File
- Created By
- Reviewed By
- Approved By

**Supported Document Types:**
- Drawing
- Method Statement
- ITP
- JSA
- JHA
- Procedure
- Datasheet
- Work Pack
- RFI
- Inspection Report
- MOM
- Daily Report
- Certificate

**Features:**
- Revision Control
- Upload
- Download
- Review
- Approval
- Client Comment
- History
- Expiry
- Final Dossier

### 8.15 Commercial & Contract

**Contract:**
- Contract Number
- Contract Value
- Client
- Start Date
- Finish Date

**BOQ:**
- BOQ Item
- Description
- Contract Quantity
- Unit
- Unit Rate
- Actual Quantity
- Approved Quantity
- Progress Value

**Progress Claim:**
- Measurement
- Monthly Claim
- Claim Items
- Approved Quantity
- Claim Value

**Invoice:**
- Invoice Number
- Invoice Date
- Value
- Retention
- Payment Status

### 8.16 Variation / Additional Work

Sources:
- Field Change
- Extra Work
- Client Instruction
- Additional Work Request

Fields:
- Description
- Estimated Manhour
- Material
- Estimated Cost
- Supporting Photo
- Approval
- VO Number
- Approved Value
- Billing Status

### 8.17 Reports

Supported reports:
- Daily Report
- Weekly Report
- Monthly Report
- Project Progress
- Scaffold Report
- Insulation Report
- Manpower Report
- Manhour Report
- Productivity Report
- Material Report
- Inspection Report
- Punch Report
- NCR Report
- HSE Report
- Commercial Report

Exports:
- PDF
- Excel

Report template dapat berbeda per project.

### 8.18 Client Portal

Client dapat melihat:
- Project Dashboard
- Progress
- Reports
- Documents
- Inspection
- Punch
- Photo Progress

Client tidak boleh melihat:
- Internal cost
- Margin
- Payroll
- Internal notes
- Private company data

### 8.19 Approval Workflow

Workflow harus configurable per project.

Example:

**Supervisor → Site Manager → Project Manager → Client**

Features:
- Multi-level approval
- Approve
- Reject
- Return for Revision
- Comment
- Digital sign-off
- History

### 8.20 Notification

Notification types:
- Pending Approval
- Scaffold Inspection Due
- Certification Expiry
- Punch Overdue
- NCR Overdue
- Activity Delay
- Low Stock
- Document Expiry
- Report Ready

Initial channel: In-app.

Future channels: Email dan WhatsApp.

### 8.21 Audit Trail

System harus menyimpan:
- Created By
- Created At
- Updated By
- Updated At
- Approved By
- Approval Date
- Change History
- Old Value
- New Value
- Login Activity

---

## 9. Role-Based Access Control

Default roles:
- Director
- Project Manager
- Project Control
- Site Manager
- Supervisor
- Scaffold Coordinator
- Scaffold Inspector
- Insulation Supervisor
- QA/QC
- HSE
- Warehouse
- Document Controller
- Commercial
- Finance
- System Administrator
- Client Management
- Client QC
- Client HSE
- Client Engineer

Permission format:

**Module + Action**

Examples:
- scaffold.view
- scaffold.create
- scaffold.approve
- scaffold.inspect
- project.configure
- material.issue
- punch.close
- document.approve
- commercial.view

Permissions dapat dibatasi berdasarkan project.

---

## 10. Core Workflows

### 10.1 Scaffold

```text
Request
  ↓
Approval
  ↓
Erection
  ↓
Inspection
  ↓
Ready for Use
  ↓
Modification (optional)
  ↓
Re-inspection
  ↓
Dismantle
  ↓
Closed
```

### 10.2 Insulation

```text
Not Started
  ↓
Material Ready
  ↓
Surface Ready
  ↓
Insulation Installed
  ↓
Cladding Installed
  ↓
QC Inspection
  ↓
Punch List
  ↓
Completed
```

### 10.3 Punch

```text
Open
 ↓
Assigned
 ↓
Rework
 ↓
Ready for Inspection
 ↓
Re-inspection
 ↓
Closed
```

Failure:

```text
Re-inspection
 ↓
Rejected
 ↓
Rework
```

### 10.4 Document

```text
Draft
 ↓
Submitted
 ↓
Under Review
 ↓
Approved / Rejected / Revision Required
```

### 10.5 Variation

```text
Additional Work Request
 ↓
Cost / Quantity Estimate
 ↓
Internal Review
 ↓
Client Approval
 ↓
Variation Order
 ↓
Billing
```

---

## 11. Technical Architecture

## 11.1 Phase 1 Architecture — Next.js Full-Stack

Pada tahap awal development dan MVP, ESTIMA menggunakan **Next.js full-stack** dalam satu codebase TypeScript.

Next.js menangani:

- UI / frontend
- Server Components
- Server Actions
- Route Handlers / API
- Authentication
- Authorization / RBAC
- Business logic
- Validation
- Database access
- File upload orchestration
- Report request
- Audit logging
- Notification logic dasar

Arsitektur awal:

```text
User
  ↓
Next.js
├─ UI / Pages
├─ Server Components
├─ Server Actions
├─ Route Handlers
├─ Auth & RBAC
├─ Business Services
├─ Repository / Database Access
└─ Validation
  ↓
PostgreSQL

File / Photo / Document
  ↓
S3 / MinIO
```

Tujuan pendekatan ini:

- Mempercepat development MVP
- Mengurangi infrastructure complexity
- Menggunakan satu bahasa utama: TypeScript
- Mempermudah debugging
- Mempermudah deployment
- Tetap menjaga struktur modular agar dapat dipisahkan di masa depan

---

## 11.2 Frontend Technology

Technology:

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui

Supporting libraries:

- TanStack Query
- TanStack Table
- React Hook Form
- Zod
- React Flow
- Recharts
- FullCalendar
- Uppy
- React PDF

---

## 11.3 Server-Side Architecture

Walaupun menggunakan satu Next.js application, business logic tidak boleh dicampur langsung ke UI.

Recommended flow:

```text
Page / Component
   ↓
Server Action / Route Handler
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL
```

Recommended server modules:

- auth
- company
- project
- scaffold
- insulation
- planning
- progress
- manpower
- material
- quality
- punchlist
- hse
- document
- commercial
- report
- notification
- audit

Setiap modul harus memiliki separation of concern yang jelas.

Example:

```text
Scaffold UI
   ↓
Scaffold Server Action
   ↓
Scaffold Service
   ↓
Scaffold Repository
   ↓
PostgreSQL
```

---

## 11.4 Future Scaling Architecture

Jika ESTIMA berkembang dan terdapat kebutuhan seperti:

- High concurrent usage
- Background processing berat
- Large PDF generation
- Bulk processing
- Complex integrations
- Scheduled jobs
- Independent service scaling

maka service tertentu dapat dipisahkan dari Next.js.

Possible future architecture:

```text
Next.js
   ↓
Go API / Service
   ↓
PostgreSQL
```

atau secara bertahap:

```text
Next.js Core Application
   │
   ├─ PostgreSQL
   ├─ S3 / MinIO
   │
   └─ Go Worker / Specialized Service
```

Go bukan requirement pada MVP dan hanya digunakan jika terdapat alasan teknis yang jelas.

---

## 11.5 Architecture Principle

Phase 1 menggunakan prinsip:

**Modular Monolith inside Next.js**

Artinya:

- Satu application
- Satu deployment utama
- Satu codebase TypeScript
- Modul bisnis tetap dipisahkan dengan jelas
- Business logic tidak ditaruh langsung di page/component
- Database access dipisahkan dari presentation layer

Microservices harus dihindari sebelum kebutuhan scaling benar-benar muncul.

---

# 12. Frontend Library Mapping

### shadcn/ui + Tailwind
Digunakan untuk buttons, dialog, modal, form, tabs, drawer, cards, dan layout.

### TanStack Table
Digunakan untuk Scaffold Register, Material Register, Manpower, Punch List, NCR, Document Register, BOQ, dan Claims.

Features: sorting, filtering, pagination, column visibility, dan selection.

### TanStack Query
Digunakan untuk API fetching, server-state cache, mutation, data invalidation, dan background refetch.

### React Hook Form + Zod
Digunakan untuk Scaffold Request, Inspection, Daily Report, Material Request, Dynamic Custom Field, dan Project Configuration.

### React Flow
Digunakan untuk Approval Workflow Builder.

Example:

```text
Supervisor
    ↓
Site Manager
    ↓
Project Manager
    ↓
Client
```

### Recharts
Digunakan untuk S-Curve, Planned vs Actual, Manpower, Manhour, Productivity, Material Consumption, Punch Aging, dan Commercial Progress.

### FullCalendar
Digunakan untuk Master Schedule Calendar, Look Ahead, Inspection Calendar, Scaffold Inspection Due, dan Certification Expiry.

### Uppy
Digunakan untuk drawing upload, photo evidence, PDF, attachment, certificates, dan reports.

File disimpan di S3-compatible storage / MinIO.

---

## 13. Database

Database: **PostgreSQL**

Core principles:
- Relational model
- Foreign key integrity
- `project_id` pada project-scoped data
- JSONB untuk custom fields
- Auditability

### Core Entities
- COMPANY
- USER
- ROLE
- USER_ROLE
- PROJECT
- PROJECT_MEMBER
- PROJECT_MODULE
- PROJECT_SETTING
- AREA
- WORK_PACKAGE
- EQUIPMENT_TAG
- CUSTOM_FIELD_DEF
- CUSTOM_FIELD_VALUE
- APPROVAL_WORKFLOW
- APPROVAL_STEP
- AUDIT_LOG

### Field Operations
- SCAFFOLD_REQUEST
- SCAFFOLD
- SCAFFOLD_INSPECTION
- SCAFFOLD_MODIFICATION
- INSULATION_WORK
- INSULATION_PROGRESS

### Manpower
- EMPLOYEE
- EMPLOYEE_ASSIGNMENT
- TIMESHEET

### Progress
- DAILY_REPORT
- DAILY_PROGRESS_ITEM

### Quality
- INSPECTION
- INSPECTION_ITEM
- PUNCH_LIST
- NCR

### Material
- MATERIAL
- WAREHOUSE
- INVENTORY_BALANCE
- MATERIAL_TRANSACTION

### Documents
- DOCUMENT
- DOCUMENT_REVISION

### Approval
- APPROVAL_WORKFLOW
- APPROVAL_INSTANCE
- APPROVAL_ACTION

### Commercial
- CONTRACT
- BOQ_ITEM
- VARIATION
- VARIATION_ITEM
- PROGRESS_CLAIM
- CLAIM_ITEM
- INVOICE

### Notification
- NOTIFICATION

---

## 14. Object Storage

Storage:
- AWS S3
- MinIO
- Other S3-compatible storage

Stored files:
- Drawing
- PDF
- Photos
- Certificates
- Reports
- Attachments

PostgreSQL hanya menyimpan metadata dan object key.

---

## 15. Background Processing

## Phase 1

Pada MVP, proses ringan dapat dijalankan langsung melalui server-side Next.js.

Contoh:

- Simple notification
- Small report generation
- Audit log
- Standard data processing

Untuk scheduled/background job yang belum kompleks, dapat digunakan:

- Cron job
- Platform scheduler
- Database-backed job
- External managed queue jika diperlukan

Redis **tidak wajib pada Phase 1**.

---

## Future Scaling

Jika proses asynchronous menjadi berat, dapat ditambahkan:

- Redis
- Queue
- Worker
- Go Worker
- Dedicated report service

Example:

```text
Next.js
   ↓
Queue
   ↓
Worker
   ↓
S3 / MinIO
   ↓
Notification
```

Background worker baru ditambahkan ketika kebutuhan nyata muncul.

---

# 16. Reporting Architecture

## Phase 1

Simple reports dapat dibuat menggunakan:

- React PDF
- Server-side PDF generation
- Excel export library

Example:

```text
User requests report
 ↓
Next.js Server Action / Route Handler
 ↓
Read data from PostgreSQL
 ↓
Generate PDF / Excel
 ↓
Return file / store in S3
```

---

## Heavy Report Strategy

Jika report menjadi berat atau membutuhkan proses panjang:

```text
User requests Monthly Report
 ↓
Next.js creates report job
 ↓
Queue / Worker
 ↓
PDF generated
 ↓
Stored in S3 / MinIO
 ↓
User receives "Report Ready"
```

Pada tahap scaling, worker dapat menggunakan Node.js atau Go tergantung kebutuhan performa dan operasional.

---

# 17. Security Requirements

System harus menggunakan:
- HTTPS
- Secure authentication
- RBAC
- Project-level authorization
- Audit trail
- Secure object storage
- Presigned upload/download URL
- Input validation
- Rate limiting
- Password hashing
- Session/token expiry

Optional defense-in-depth: **PostgreSQL Row Level Security**.

---

## 18. Non-Functional Requirements

### Performance
- Normal API response target < 500 ms
- Dashboard initial load target < 3 seconds
- Large table pagination harus server-side
- File upload tidak melalui database

### Scalability
Architecture harus mampu berkembang dari single company, multiple projects, hundreds of users, hingga thousands of scaffold/work items.

### Availability
Target production availability: **99.5%+**

### Backup
- PostgreSQL
- Object storage
- Environment configuration

### Monitoring
- API logs
- Error logs
- Worker logs
- Database monitoring
- Storage monitoring

---

## 19. Responsive Requirements

ESTIMA harus usable pada:
- Desktop
- Laptop
- Tablet
- Mobile

Priority:
1. Desktop
2. Tablet
3. Mobile / PWA

Field operation screen harus mobile-friendly.

---

## 20. MVP Scope

MVP focus:
1. Dashboard
2. Project / WBS
3. Scaffolding
4. Insulation
5. Progress
6. Manpower
7. Material
8. QA/QC
9. Punch List
10. Reports
11. User / Role / Project Access
12. Audit Trail

---

## 21. Phase 2 Scope

- Advanced Planning
- HSE
- Commercial
- Billing
- Variation Order
- Document Control
- Client Portal
- Advanced Workflow Builder
- Email Notification
- WhatsApp Notification

---

## 22. Future Scope

Potential future features:
- Native Mobile App
- Offline mode
- Primavera integration
- ERP integration
- SAP integration
- IoT / RFID tracking
- AI-assisted reporting
- AI document extraction
- AI project risk detection
- Predictive productivity analytics
- GIS / map integration
- BIM integration

---

## 23. Success Metrics

### Operational
- % daily report submitted digitally
- % inspection completed digitally
- Punch closure time
- NCR closure time
- Scaffold inspection compliance
- Data completeness

### Productivity
- Manhour per quantity
- Productivity trend
- Material variance
- Look Ahead completion rate

### Adoption
- Daily Active Users
- Monthly Active Users
- Active project ratio
- Feature adoption

### Reporting
- Report preparation time
- Manual Excel usage reduction
- Report error reduction

---

## 24. Acceptance Criteria

### Project
User dengan permission yang benar dapat create project, configure project, assign user, dan activate module.

### Scaffold
System harus dapat generate Scaffold ID, generate QR Code, track status, record inspection, track modification, dan track dismantling.

### Insulation
System harus dapat register work, track quantity, track installation status, record inspection, dan track completion.

### Progress
System harus dapat menghitung Planned Progress, Actual Progress, dan Variance.

### QA/QC
System harus mendukung Dynamic Checklist, Inspection, Punch, NCR, Re-inspection, dan Closure.

### Material
System harus dapat Request, Issue, Return, Transfer, dan Track Stock.

### Access
System harus memastikan user hanya dapat mengakses project yang diassign, module sesuai permission, dan data sesuai role.

---

## 25. Recommended Repository Structure

Phase 1 menggunakan satu repository Next.js full-stack.

```text
estima/
│
├── app/
│   ├── (auth)/
│   ├── dashboard/
│   ├── projects/
│   ├── scaffolding/
│   ├── insulation/
│   ├── planning/
│   ├── manpower/
│   ├── materials/
│   ├── quality/
│   ├── hse/
│   ├── commercial/
│   ├── documents/
│   ├── reports/
│   └── administration/
│
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
│
├── features/
│   ├── project/
│   ├── scaffold/
│   ├── insulation/
│   ├── planning/
│   ├── manpower/
│   ├── material/
│   ├── quality/
│   ├── hse/
│   ├── document/
│   └── commercial/
│
├── server/
│   ├── auth/
│   ├── permissions/
│   ├── services/
│   ├── repositories/
│   ├── audit/
│   └── notifications/
│
├── db/
│   ├── schema/
│   ├── migrations/
│   └── index.ts
│
├── lib/
│
├── types/
│
├── public/
│
└── docs/
```

Business logic harus ditempatkan di `server/services` atau module-specific service, bukan langsung di UI.

---

# 26. Recommended Deployment

## Phase 1

Deployment dapat dibuat sederhana:

```text
Internet
   ↓
Next.js Full-Stack Application
   ↓
PostgreSQL
   ↓
S3 / MinIO
```

Possible hosting:

- Vercel
- VPS / Node.js server
- Docker-based deployment

Optional:

- Nginx
- Managed PostgreSQL
- Managed S3-compatible storage

Redis tidak wajib untuk MVP.

---

## Future Deployment

Jika beban sistem meningkat:

```text
Internet
   ↓
Reverse Proxy
   ↓
Next.js
   ↓
Go API / Worker (optional)
   ↓
PostgreSQL
   ↓
Redis
   ↓
S3 / MinIO
```

Scaling dilakukan secara bertahap berdasarkan kebutuhan aktual.

---

# 27. Development Principles

1. Next.js full-stack modular monolith first.
2. Avoid premature microservices.
3. Server-side logic is the source of truth.
4. Client-side UI must not control authorization.
5. Project isolation is mandatory.
6. Every critical transaction must be auditable.
7. Business logic belongs in server/service layer, not UI components.
8. File storage must use external object storage.
9. Background worker hanya ditambahkan ketika proses berat benar-benar membutuhkan.
10. UI should remain configurable but controlled.
11. Reuse mature frontend libraries whenever possible.
12. Optimize field workflows for speed and simplicity.
13. Keep module boundaries clear so services can be extracted later.
14. Go is an optional scaling technology, not an MVP requirement.

---

## 28. Key Technical Decision Summary

## Phase 1 / MVP

| Area | Technology |
|---|---|
| Full-stack Framework | Next.js |
| Language | TypeScript |
| UI | Tailwind CSS + shadcn/ui |
| Data Fetching | TanStack Query |
| Table | TanStack Table |
| Form | React Hook Form |
| Validation | Zod |
| Workflow UI | React Flow |
| Chart | Recharts |
| Calendar | FullCalendar |
| Upload | Uppy |
| Database | PostgreSQL |
| ORM | Drizzle ORM or Prisma |
| Authentication | Auth.js or Better Auth |
| File Storage | S3 / MinIO |
| PDF | React PDF / server-side generation |
| Deployment | Vercel, VPS, or Docker |

## Optional Future Scaling

| Area | Technology |
|---|---|
| Specialized Backend Service | Go |
| Worker | Node.js or Go |
| Queue / Cache | Redis |
| Reverse Proxy | Nginx |
| CI/CD | GitHub Actions |

---

# 29. Final Product Definition

ESTIMA bukan sekadar aplikasi task management.

ESTIMA adalah:

> **Configurable Project Control & Field Operation System untuk mengintegrasikan planning, scaffolding, insulation, manpower, material, QA/QC, HSE, document control, commercial, reporting, dan client collaboration dalam satu platform berbasis project.**

Core differentiation:
- Industrial project workflow
- Scaffolding lifecycle
- Insulation progress
- Dynamic project configuration
- QA/QC workflow
- Project-based access
- Integrated progress and commercial data
- Auditability
- Configurable client requirements

---

## 30. Product Roadmap Summary

### Phase 1 — MVP

**Architecture: Next.js Full-Stack + PostgreSQL + S3/MinIO**

```text
Dashboard
   ↓
Project / WBS
   ↓
Scaffolding
   ↓
Insulation
   ↓
Progress
   ↓
Manpower
   ↓
Material
   ↓
QA/QC + Punch
   ↓
Reports
```

### Phase 2

**Architecture: tetap Next.js full-stack selama masih memenuhi kebutuhan. Service tambahan hanya ditambahkan bila diperlukan.**

```text
Advanced Planning
   ↓
HSE
   ↓
Commercial
   ↓
Variation
   ↓
Document Control
   ↓
Client Portal
```

### Phase 3

**Architecture: evaluasi pemisahan Go service/worker, Redis, queue, dan service scaling berdasarkan kebutuhan aktual.**

```text
External Integration
   ↓
Mobile / Offline
   ↓
Advanced Analytics
   ↓
AI-assisted Project Control
```

---

**End of Product Requirements Document**


---

# 31. Spreadsheet Integration Roadmap

## Phase 1

- Excel export from ESTIMA progress data
- Project-specific export template
- Basic `.xlsx` import
- Mapping profile
- Import preview
- Validation
- Manual confirmation
- Audit trail
- Project Shell progress template as Reference Template #1

## Phase 2

- Mapping Wizard
- Template versioning
- Auto-detection of known workbook formats
- Advanced sheet mapping
- Activity / unit transformation
- Import duplicate detection
- Bulk historical migration

## Phase 3

- Intelligent mapping suggestion
- Client template library
- Advanced formula / transformation rules
- Cross-project reusable templates
- External integration/API ingestion
- Automated reconciliation between imported client report and ESTIMA database

