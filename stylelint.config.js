module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
    "stylelint-config-rational-order",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["deep"],
      },
    ],
  },
};
