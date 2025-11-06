---
title: "Curiosity PWA"
subtitle: "A Local-First 'Second Brain'"
order: 2
repoUrl: "https://github.com/ny-collins/curiosity-pwa"
liveUrl: "https://curiosity-pwa.web.app"
heroImage: "/images/curiosity.png"
techStack: ["React", "Vite", "Firebase", "PWA", "Dexie.js", "WebAuthn", "Framer Motion"]
theSpark: "I was overwhelmed with ideas and no good place to note them down on my laptop. I decided to build a simple notes app, which escalated as my curiosity took over."
keyInsights: [
  "Architected a 'local-first' application using IndexedDB (via Dexie.js) for 100% offline functionality, which is critical for a personal notes app.",
  "Discovered and implemented the WebAuthn API as a high-security, modern alternative to password-based auth, enabling fingerprint and face unlock.",
  "Learned that UI/UX is my biggest concern; a personal app must have a deeply personal and fluid feel, which I explored with Framer Motion.",
  "Successfully combined local (Dexie) and cloud (Firebase) state into a complex but powerful sync pattern for robust, always-available data."
]
---

My initial goal was just to capture quick thoughts. But as I built the React + Vite foundation, I started asking "What if?"

1.  **"What if I need my notes on the go?"** This led me to PWA architecture, so I could "install" it on my devices.

2.  **"What if I'm offline?"** A PWA isn't enough; it needs to *work* offline. This sent me down a rabbit hole of client-side storage. I landed on **IndexedDB** and used `Dexie.js` as a wrapper to create a true "local-first" app.

3.  **"What if I use multiple devices?"** Local-first is great, but I need sync. I chose **Firebase Firestore** as the cloud backup. Now the architecture was a "local-first with cloud sync" model.

4.  **"What if this data is sensitive?"** The app was becoming a "Vault" for passwords and private thoughts. A simple email/password login felt weak. This is when I discovered the **WebAuthn API** and got a fingerprint/face-unlock proof-of-concept working.

5.  **"What if it feels 'boring'?"** A personal app needs personality. This led me to `framer-motion`, which I used to create the animated splash screen.

This project is the perfect example of my "chain-reaction" curiosity, where one feature sparks the exploration of three new, modern technologies.