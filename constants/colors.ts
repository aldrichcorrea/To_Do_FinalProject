export const COLORS = {
  // Neutrals
  white: "#FFFFFF",
  lightGray: "#F5F5F5",
  gray100: "#E8E8E8",
  gray200: "#D1D1D1",
  gray300: "#A1A1AA",
  gray400: "#71717A",
  gray500: "#52525B",
  gray600: "#3F3F46",
  gray700: "#27272A",
  gray800: "#1A1A1A",
  gray900: "#4e4e4e",
  black: "#0A0A0A",

  // Semantic
  background: "#0A0A0A",
  surface: "#aaaaaa",
  card: "#1A1A1A",
  border: "#2A2A2A",
  text: "#FFFFFF",
  textSecondary: "#c7c7c7",
  textTertiary: "#71717A",

  // Feedback (subtle monochrome)
  success: "#D4D4D8",
  error: "#A1A1AA",
  warning: "#71717A",
} as const;

export const GRADIENTS = {
  surfaceGradient: ["rgba(26, 26, 26, 0.8)", "rgba(17, 17, 17, 0.95)"],
  cardGradient: ["rgba(30, 30, 30, 1)", "rgba(20, 20, 20, 1)"],
} as const;

export const SHADOWS = {
  xs: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;
