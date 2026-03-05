# Ritoz Pharmaceutical Pvt. Ltd.

A professional, high-performance landing page and corporate website for **Ritoz Pharmaceutical Pvt. Ltd.** (formerly Alexa Biopharma). This project represents a modern, responsive web presence designed to showcase manufacturing capabilities, product portfolios, certifications, and partnership opportunities.

## 🚀 Key Features

- **Modern Architecture:** Built with React 18 and Vite for lightning-fast HMR and optimized production builds.
- **Premium UI/UX:** A bespoke design system utilizing custom typography (Inter & JetBrains Mono), glassmorphism effects, and highly refined color palettes emphasizing healthcare trust (Navy Blue `#1e1e5c` and Teal/Gold accents).
- **Fully Responsive:** Tailored experiences from mobile devices to ultrawide desktop monitors seamlessly handled by Tailwind CSS.
- **Dynamic-Ready Data Layer:** All text content, products, testimonials, and team members are isolated in a centralized standard TypeScript data layer (`src/data/index.ts`), making future migration to an API or Headless CMS incredibly smooth.
- **Modular Component Design:** Follows strict specialized file structures promoting reusability (atoms, sections, and pages).

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org/)
- **Bundler:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** TypeScript 5+

## 📂 Project Structure

```text
ritoz-pharma/
├── public/                 # Static assets (Favicon, etc.)
├── src/
│   ├── assets/             # Images, SVGs, global CSS
│   ├── components/         # Reusable React components
│   │   ├── layout/         # High-level wrappers (Navbar, Footer, etc.)
│   │   ├── sections/       # Complex page sections (Hero, Features, etc.)
│   │   └── ui/             # Atomic design elements (Buttons, Logos, etc.)
│   ├── data/               # Centralized content store (index.ts)
│   ├── pages/              # Route components (Home, Contact, Products)
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Root component and Router config
│   └── main.tsx            # Application entry point
├── tailwind.config.js      # Custom theme configurations
└── vite.config.ts          # Vite build settings
```

## ⚙️ How to Run Locally

Follow these steps to spin up the project on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mharsh22/ritoz-pharma.git
   cd ritoz-pharma
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

4. **Build for production:**
   To generate an optimized `/dist` folder for deployment:
   ```bash
   npm run build
   ```

## 📝 License & Ownership

Developed for **Ritoz Pharmaceutical Pvt. Ltd.**
All rights reserved © 2026.
