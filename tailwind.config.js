/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["roboto"],
        poppins: ["poppins"],
      },
      colors: {
        gagak: "#5D5E5F",
        base_blue: "#0C5DAD",
        bg_hero: "#ECE6D1",
        font_header: "#333333",
        font_desc: "#52575C",
        gb_benefit: "#EEF7FF",
        text_footer: "#232323",
        text_footer_desc: "#222525",
        color_hr: "#B1B1B1",
      },
    },
  },
  plugins: [],
};
