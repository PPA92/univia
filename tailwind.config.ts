import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#102A43',
        blue: '#2563EB',
        sky: '#60A5FA',
        gold: '#F59E0B',
        ink: '#172B4D',
        mist: '#F5F8FC',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'Arial', 'sans-serif'],
        myanmar: ['var(--font-myanmar)', 'Noto Sans Myanmar', 'Myanmar Text', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 50px rgb(16 42 67 / 0.08)',
      },
    },
  },
  plugins: [],
} satisfies Config;
