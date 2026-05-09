/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Monochrome premium palette
        mono: {
          0: "#FFFFFF",     // White
          50: "#F5F5F5",    // Very Light Gray
          100: "#E8E8E8",   // Light Gray
          200: "#D1D1D1",   // Light Gray
          300: "#A1A1AA",   // Muted Text
          400: "#71717A",   // Medium Gray
          500: "#52525B",   // Gray
          600: "#3F3F46",   // Dark Gray
          700: "#27272A",   // Darker Gray
          800: "#1A1A1A",   // Card Gray
          900: "#111111",   // Dark Gray
          950: "#0A0A0A",   // Black
        },
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        xxl: "24px",
      },
      borderRadius: {
        xs: "6px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "16px" }],
        sm: ["14px", { lineHeight: "20px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "28px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
      },
      shadows: {
        xs: "0 1px 2px 0 rgba(10, 10, 10, 0.05)",
        sm: "0 2px 4px 0 rgba(10, 10, 10, 0.1)",
        md: "0 4px 6px -1px rgba(10, 10, 10, 0.1)",
      },
    },
  },
  plugins: [],
}