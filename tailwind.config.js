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
        "dark-color": "#2d3741",
        "medium-dark-color": "#fcfcfc",
        "client-brand-color": "#f6f6f6",
        "footer-color": "#25272e",
        "form-color": "#565f66",
      },
      spacing: {
        72: "18rem",
        80: "20rem",
        144: "36rem",
      },
      fontSize: {
        "7xl": "4.5rem",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontSize: ["responsive", "hover"],
  },
  plugins: [],
};
