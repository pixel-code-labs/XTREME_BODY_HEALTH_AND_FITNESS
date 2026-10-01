# 🏋️ Xtreme Gym — Multi-Location Fitness Web App

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?style=for-the-badge&logo=github)](https://pixel-code-labs.github.io/client-xtreme-gym/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A fast, responsive, and mobile-optimized multi-branch fitness platform for **Xtreme Gym**. Engineered for seamless user experience with dynamic branch switching, real-time class schedule filtering, local business SEO schema, and direct Google Maps navigation.

---

## 🔥 Key Features

- 📍 **Multi-Branch Location Switcher:** Toggle between Downtown HQ, Uptown Hub, and North Metro Arena to dynamically update operating hours, amenities, contact numbers, and direct map navigation.
- 📅 **Localized Class Schedules:** Interactive schedule board that automatically updates session times and trainer info based on the selected gym branch.
- 🗺️ **Direct Navigation & Local SEO:** Built-in Google Maps navigation links and structured Schema.org JSON-LD data for enhanced local search visibility.
- 📱 **Mobile-First Sticky Bar:** Floating bottom action bar on mobile devices for instant one-tap directions and studio inquiries.
- ✉️️ **Inquiry & Booking Form:** Clean contact form pre-filled with location preferences for direct client engagement.

---

## 🛠️ Tech Stack

- **Markup:** HTML5 (Semantic Structure & Accessibility)
- **Styling:** Tailwind CSS (CDN) + Custom `css/style.css`
- **Scripting:** Pure ES6+ JavaScript (`js/script.js`)
- **SEO & Data:** Schema.org (`ExerciseGym` JSON-LD)

---

## 📁 Repository Structure

```text
client-xtreme-gym/
├── .github/
│   └── workflows/
│       └── release.yml   # Automated GitHub release action
├── css/
│   └── style.css        # Custom styles & scrollbar overrides
├── js/
│   └── script.js        # Dynamic location switcher & interactivity
├── index.html           # Main web application & SEO metadata
└── README.md            # Repository documentation