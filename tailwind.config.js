/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        "primary": "#2563eb",
        "background-light": "#ffffff",
        "background-dark": "#1f2937",
        "text-light": "#111827",
        "text-dark": "#f9fafb",
        "subtext-light": "#6b7280",
        "subtext-dark": "#9ca3af",
        "border-light": "#d1d5db",
        "border-dark": "#4b5563",
      }
    },
  },
  plugins: [],
}