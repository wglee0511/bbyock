export const COLORS = {
  // Base
  black: "#050505",
  white: "#FFFFFF",
  gray100: "#E2E8F0",
  gray400: "#94A3B8",
  gray800: "#1E293B",

  // Theme
  bgDark: "#0B0F19",
  glassBg: "rgba(30, 41, 59, 0.6)",
  glassBorder: "rgba(255, 255, 255, 0.1)",
  primary: "#D4AF37", // Gold
  primaryHover: "#F3E5AB", // Lighter gold
  green: "#009E3F", // Keep original green for fallback if needed, but we'll use primary

  // Five Elements Colors
  wood: "#10B981", // Green
  fire: "#EF4444", // Red
  earth: "#F59E0B", // Yellow/Brown
  metal: "#E2E8F0", // White/Gray
  water: "#3B82F6", // Blue/Black
} as const;
