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

* Responsive personal portfolio
* Contact form with email delivery
* Fully deployable on Render (free)
* Deno-based Supabase Edge Function integration
* Sharp-enabled image optimization for production
* UptimeRobot to keep site live 24/7

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

## 🔄 Contact Form Flow

```mermaid
---
config:
  layout: dagre
  theme: neo-dark
  look: neo
---
graph LR
    A[User Submits Contact Form] --> B[Frontend calls Supabase Edge Function]
    B --> C[Supabase Function sends email using Mailgun]
    C --> D[Email delivered to Brian's inbox]
    D --> E[Frontend confirms submission to user]
```

---

## ✅ Hosting Cost Summary (Free Tier)

* **Render** (free for 1 app, 750 hrs/month)
* **Supabase** (free for Edge Functions and Postgres usage)
* **Mailgun** (free up to 100 emails/day)
* **UptimeRobot** (free for 10-min checks)

All services used are either open source or free-tier compatible.

---

## 📬 Contact

Built and maintained by [Brian Denis Castelino](mailto:briancastelino07@gmail.com).

---

> Want to fork this? Remove the contact email or reroute it to your own Mailgun + Supabase setup.
