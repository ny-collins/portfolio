# Collins' Digital Workbench

A modern, performant portfolio website built with Astro, showcasing my journey as a systems explorer and developer.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) - Static site generation with islands architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Components**: [Svelte](https://svelte.dev/) - Reactive UI components
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe content management
- **Deployment**: [Railway](https://railway.app/) - Cloud platform for static sites
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth transitions and micro-interactions

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Navigation with theme toggle
│   ├── Footer.astro    # Site footer with branding
│   ├── WorkbenchCard.astro  # Project preview cards
│   └── ThemeToggler.svelte  # Dark/light theme switcher
├── content/            # Content collections
│   └── workbench/      # Project showcase entries
├── layouts/            # Page layout templates
│   ├── Layout.astro    # Main site layout
│   └── WorkbenchEntryLayout.astro  # Individual project pages
├── pages/              # Route-based pages
│   ├── index.astro     # Homepage
│   ├── journey.astro   # Learning journey
│   └── workbench/      # Project showcase
└── styles/
    └── global.css      # Global styles and utilities
```

## 🛠️ Development

### Prerequisites

- Node.js 22+
- npm 10+

### Setup

```bash
# Clone the repository
git clone https://github.com/ny-collins/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## 🎨 Design Philosophy

### Systems Explorer Theme
The site embodies the "π-shaped developer" model - broad systems knowledge combined with deep expertise in specific crafts. The design reflects this through:

- **Clean Architecture**: Minimal, purposeful design that doesn't distract from content
- **Exploration Metaphor**: Digital workbench concept representing continuous learning
- **Modern Aesthetics**: Gradient backgrounds, smooth transitions, and thoughtful typography
- **Accessibility First**: Proper contrast ratios, keyboard navigation, and semantic HTML

### Technical Decisions

- **Static Generation**: Maximum performance with zero runtime JavaScript for content pages
- **Islands Architecture**: Interactive components (theme toggle) hydrate only when needed
- **Content Collections**: Type-safe content management with schema validation
- **Responsive Design**: Mobile-first approach with fluid typography and spacing

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: ~100KB total (mostly fonts and icons)
- **Core Web Vitals**: Excellent scores across all pages
- **SEO**: Proper meta tags, structured data, and semantic HTML

## 🚀 Deployment

The site is automatically deployed to Railway on every push to the main branch.

```bash
# Build configuration (handled by Railway)
npm run build
npx serve dist
```

## 📝 Content Management

Projects are managed through Astro Content Collections in `src/content/workbench/`. Each project includes:

- Title and description
- Live URL and GitHub repository
- Technology stack
- Hero image
- Key insights and learnings

### Adding a New Project

1. Create a new `.md` file in `src/content/workbench/`
2. Follow the existing schema structure
3. Add a hero image to `public/images/`
4. The site will automatically rebuild and deploy

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Please feel free to:

- Open issues for bugs or feature requests
- Submit pull requests for improvements
- Share feedback on the design or content

## 📄 License

This project is private and intended for personal use.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/) - The web framework for content-driven websites
- Styled with [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- Components powered by [Svelte](https://svelte.dev/) - Cybernetically enhanced web apps
- Deployed on [Railway](https://railway.app/) - Made for developers, loved by teams

---

*"The best way to predict the future is to create it."*

Built with curiosity, crafted with care, deployed with confidence.