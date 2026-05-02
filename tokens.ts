export const tokens = {
  colors: {
    ink: "#0E0E0C",
    bone: "#F5F1EA",
    navy: "#1B2A40",
    tan: "#8B5E3C",
    oxblood: "#5C1A1B",
    teal: "#1F4A48",
    brass: "#B08D57",
    boneAlt: "#EFE9DE",
    inkSoft: "#1A1A17",
    line: "#1F1F1B",
    muted: "#6B6358",
  },
  swatches: {
    Tan: "#8B5E3C",
    Black: "#171513",
    Blue: "#1B2A40",
    Navy: "#1B2A40",
    Gray: "#5A5A55",
    Maroon: "#5C1A1B",
    Teal: "#1F4A48",
    Brown: "#5A3A26",
    Orange: "#C2562A",
    Yellow: "#D6A537",
  },
  fonts: {
    display: '"Cormorant Garamond", "Canela", ui-serif, Georgia, serif',
    sans: '"Inter", "Söhne", ui-sans-serif, system-ui, sans-serif',
  },
  radii: {
    none: "0",
    xs: "2px",
    sm: "4px",
    md: "8px",
  },
} as const;

export type ColourName = keyof typeof tokens.swatches;
