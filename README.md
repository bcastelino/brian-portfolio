<div align="center">

## Brian's Personal Portfolio 🚀

A fully open-source and cost-free personal portfolio website built with Next.js, Tailwind CSS, and Supabase. Includes a real-time contact form powered by Supabase Edge Functions and Mailgun.

</div>

<div align="center">
  
[![My Skills](https://skillicons.dev/icons?i=js,ts,vscode,css,react,nextjs,nodejs,npm,tailwind,supabase,gmail&theme=light)](https://skillicons.dev)

</div>

---

## 🌐 Live URL
*[https://brianc.onrender.com](https://brianc.onrender.com)*

---

## 📦 Setup Instructions

### Clone the repository

```bash
git clone https://github.com/bcastelino/brian-portfolio
cd brian-portfolio
```

### Install dependencies

```bash
npm install
```

### Run the project locally

```bash
npm run dev
```

---

## ✨ Features

### ✅ 1. Responsive Portfolio UI
* Clean, mobile-friendly layout using `Tailwind CSS`
* Animated sections built with `Framer Motion`
* `Light` and `dark` mode support

### 📁 2. Project & Resume Showcase
* Dedicated sections for highlighting projects
* Downloadable PDF `resume` with external link support

### 📬 3. Fully Functional Contact Form
* Accepts name, email, and message from users
* Uses `Supabase Edge Functions` to securely send messages
* Sends emails via `Mailgun` directly to your inbox

### ☁️ 4. Free & Scalable Hosting
* Hosted on `Render` using the free tier
* Auto-deploys on every `GitHub commit`

### 🔌 5. Uptime Monitoring & Wake Prevention
* Integrated with `UptimeRobot`
* Keeps the Render app “awake” 24/7 by preventing spin-down

### 📦 6. Optimized Production Builds
* `sharp` installed for image optimization in production
* `ESLint` and `Prettier` included for clean, maintainable code

### 🔐 7. Environment Secrets & Secure API Handling
* `.env` used for secure Mailgun API keys
* Supabase secrets managed via Edge Function environment settings

---

## ☁️ External Services Used
#### Render
* Hosts the frontend web app
* Connects directly to GitHub for automatic deploys
* 750 free instance hours/month

#### Supabase
* Hosts the backend function (written in Deno)
* Executes email sending logic triggered by the frontend contact form

#### Mailgun (Free Tier)
* Sends emails from the "Contact Me" form
* Configured using an API key inside a Supabase Edge Function
* Uses sandbox domain or custom domain if verified

#### UptimeRobot
* Pings the site every 10 minutes
* Prevents Render from spinning down the free instance
* Sends alerts if the site goes offline

---

## 🔄 Portfolio WorkFlow

```mermaid
flowchart TD
    %% Frontend Layer
    subgraph "Frontend Layer"
        direction LR
        Browser["User's Browser"]:::infra
        NextApp["Next.js App"]:::frontend
        Page["page.tsx"]:::frontend
        About["about/page.tsx"]:::frontend
        Projects["projects/page.tsx"]:::frontend
        ResumePage["resume/page.tsx"]:::frontend
        ContactPage["contact/page.tsx"]:::frontend
        Browser -->|"HTTP GET pages/assets"| NextApp
        %%NextApp -->|"renders pages"| Browser
        NextApp -->|"serves assets"| Page
        Page -->|"navigates to"| About
        Page -->|"navigates to"| Projects
        Page -->|"navigates to"| ResumePage
        Page -->|"navigates to"| ContactPage
    end

    %% Backend Layer
    subgraph "Backend Layer"
        direction LR
        EdgeFunc["Supabase Edge Function"]:::backend
        RouteFile["route.ts"]:::backend
        EdgeFunc --> RouteFile
    end

    %% External Services
    subgraph "External Services"
        direction TB
        Mailgun["Mailgun API"]:::external
        Inbox["Brian's Inbox"]:::external
        UptimeRobot["UptimeRobot"]:::infra
        ContactPage -->|"POST /api/contact<br>(via Browser)"| EdgeFunc
        EdgeFunc -->|"Mailgun API call"| Mailgun
        Mailgun -->|"delivers email"| Inbox
        EdgeFunc -->|"response success<br>(via Browser)"| ContactPage
        UptimeRobot -->|"ping every 10min"| NextApp
    end

    %% CI/CD Infrastructure
    subgraph "Infrastructure"
        direction TB
        GitHub["GitHub"]:::infra
        Render["Render (Hosting)"]:::infra
        GitHub -->|"push triggers CI/CD"| Render
        Render -->|"hosts Next.js App"| NextApp
        Render -->|"deploys Edge Function"| EdgeFunc
    end

    %% Click Events
    click Page "https://github.com/bcastelino/brian-portfolio/blob/main/app/page.tsx"
    click Layout "https://github.com/bcastelino/brian-portfolio/blob/main/app/layout.tsx"
    click About "https://github.com/bcastelino/brian-portfolio/blob/main/app/about/page.tsx"
    click ContactPage "https://github.com/bcastelino/brian-portfolio/blob/main/app/contact/page.tsx"
    click Projects "https://github.com/bcastelino/brian-portfolio/blob/main/app/projects/page.tsx"
    click ResumePage "https://github.com/bcastelino/brian-portfolio/blob/main/app/resume/page.tsx"
    click ThemeProvider "https://github.com/bcastelino/brian-portfolio/blob/main/app/ThemeProvider.tsx"
    click ThemeToggle "https://github.com/bcastelino/brian-portfolio/blob/main/app/ThemeToggle.tsx"
    click Globals "https://github.com/bcastelino/brian-portfolio/blob/main/app/globals.css"
    click RouteFile "https://github.com/bcastelino/brian-portfolio/blob/main/app/api/contact/route.ts"
    click StaticAssets "https://github.com/bcastelino/brian-portfolio/tree/main/public/"
    click NextConfig "https://github.com/bcastelino/brian-portfolio/blob/main/next.config.js"
    click TailwindConfig "https://github.com/bcastelino/brian-portfolio/blob/main/tailwind.config.js"
    click PostcssConfig "https://github.com/bcastelino/brian-portfolio/blob/main/postcss.config.js"
    click TsConfig "https://github.com/bcastelino/brian-portfolio/blob/main/tsconfig.json"
    click PackageJSON "https://github.com/bcastelino/brian-portfolio/blob/main/package.json"
    click PackageLock "https://github.com/bcastelino/brian-portfolio/blob/main/package-lock.json"
    click Readme "https://github.com/bcastelino/brian-portfolio/blob/main/README.md"
    click EnvExample "https://github.com/bcastelino/brian-portfolio/blob/main/.env.example"
    click Gitignore "https://github.com/bcastelino/brian-portfolio/blob/main/.gitignore"

    %% Styles
    classDef frontend fill:#cce5ff,stroke:#0366d6,stroke-width:1px;
    classDef backend fill:#d4edda,stroke:#28a745,stroke-width:1px;
    classDef external fill:#fff3cd,stroke:#d39e00,stroke-width:1px;
    classDef infra fill:#e2e3e5,stroke:#6c757d,stroke-width:1px;


```

---

## ✅ Hosting Cost Summary (Free Tier)

* **Render** (free for 1 app, 750 hrs/month)
* **Supabase** (free for Edge Functions and Postgres usage)
* **Mailgun** (free up to 100 emails/day)
* **UptimeRobot** (free for 10-minute checks)

All services used are either open source or free-tier compatible.

---

## 📬 Contact

Built and maintained by [Brian Denis Castelino](mailto:briancastelino07@gmail.com).

---

> Want to fork this? Remove the contact email or reroute it to your own Mailgun + Supabase setup.
