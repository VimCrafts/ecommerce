import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: 'tw-',
  theme: {
    colors: {
      primary: {
        pm1: '#000000',
      },
      secondary: {
        blue: '#377DFF',
        green: '#38CB89',
        orange: '#FFAB00',
        red: '#FF5630',
      },
      neutral: {
        n7: '#141718',
        n6: '#232627',
        n5: '#343839',
        n4: '#6C7275',
        n3: '#E8ECEF',
        n2: '#F3F5F7',
        n1: '#FEFEFE',
      }
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
