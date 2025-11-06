---
title: "SpeedCheck"
subtitle: "An International Speed Test"
order: 1
repoUrl: "https://github.com/ny-collins/internet_speed_test"
liveUrl: "https://speed-test.up.railway.app"
heroImage: "/images/speedcheck.png"
techStack: ["Node.js", "Express", "Vanilla JS", "PWA", "Prometheus", "Jest"]
theSpark: "My curiosity was sparked by a simple question: 'Can I build my own version of Ookla's speed test?' I wanted to understand the technology behind it."
keyInsights: [
  "Discovered that a 'bug' (slow speeds) was actually a 'feature.' My server in the Netherlands was measuring real international speed, a more honest metric for global services.",
  "Learned to pivot a project's core value proposition based on an unexpected discovery.",
  "Taught myself how to build a production-grade backend with a full observability stack, including structured logging (Pino), Prometheus metrics, and a circuit breaker.",
  "Successfully implemented a custom 'build-version.js' script to automate PWA cache-busting, a key part of the deployment 'environment'."
]
---

My initial goal was to replicate a standard speed test. I built the Vanilla JS frontend and a Node.js backend, and everything worked, but the results were "wrong"—they were much slower than my ISP's advertised speeds.

My first assumption was a failure in my code. But after extensive testing and AI-assisted review, I diagnosed the real cause: **server location**.

This was the "ah-ha" moment. I wasn't measuring the "last-mile" ISP speed; I was measuring the *entire journey* from my device to a server in Europe. This is a far more realistic metric for anyone streaming international content or using global cloud services.

This "bug" became the project's central feature.

1.  I refocused the project as an **International Speed Test**.
2.  I built a `/learn` page to educate users on the difference between local vs. global speed.
3.  I implemented a full PWA (Progressive Web App) service worker for offline access and "native feel."
4.  I documented the entire architecture, from the testing methodology to the CI/CD pipeline, in a 500+ line `FUNCTIONALITY.md` file.

This project taught me to trust my diagnostics and to see the "why" behind the data, ultimately leading to a more unique and useful tool.