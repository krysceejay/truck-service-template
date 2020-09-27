module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#006db7",
        "brand-yellow": "#fac312",
        "overlay-color": "rgba(0, 0, 0, 0.4)",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        144: "36rem",
      },
      fontSize: {
        "7xl": "4.5rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover"],
  },
  plugins: [],
};
