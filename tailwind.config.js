/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "book-cloth": "#CC785C", // Book Cloth (orange-brown)
        kraft: "#374151", // Replaced blue with minimal-gray-700 (dark gray)
        manilla: "#fdfbf7", // Manilla (light beige)
        "minimal-white": "#FFFFFF", // White background
        "minimal-gray-100": "#F3F4F6", // Light gray for backgrounds
        "minimal-gray-200": "#E5E7EB", // Medium light gray
        "minimal-gray-500": "#6B7280", // Medium gray for text
        "minimal-gray-700": "#374151", // Dark gray for accents
        "minimal-gray-900": "#111827", // Almost black for text and backgrounds
        "minimal-black": "#000000", // Pure black for contrast
      },
      boxShadow: {
        subtle: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        "subtle-lg": "0 10px 15px rgba(0, 0, 0, 0.1)", // Larger subtle shadow
        bold: "0 4px 6px rgba(0, 0, 0, 0.2)", // Bold shadow for depth
        "bold-lg": "0 10px 15px rgba(0, 0, 0, 0.2)", // Larger bold shadow
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-out": "fadeOut 1s ease-in-out",
        glow: "glow 2s infinite alternate", // Glow animation for interactive elements
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 8px rgba(204, 120, 92, 0.4), 0 0 16px rgba(204, 120, 92, 0.3)", // Book Cloth glow
          },
          "100%": {
            boxShadow:
              "0 0 16px rgba(204, 120, 92, 0.6), 0 0 32px rgba(204, 120, 92, 0.5)", // Book Cloth glow
          },
        },
      },
    },
  },
  plugins: [],
};
