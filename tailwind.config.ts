import type { Config } from 'tailwindcss'
const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          dark: "#000000",
          light: "#FFF",
          mediumlight: "#e8efe3",
          lightgreen: "#7DA016",
          mediumgreen: "#588005",
          darkgreen: "#0C3902"
        },

      },
      fontFamily: {
        montserrat_alternate: ["var(--font-montserrat)", ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
