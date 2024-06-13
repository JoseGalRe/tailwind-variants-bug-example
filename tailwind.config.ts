import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      'mobile-display-small': [
        '24px',
        {
          fontWeight: 700,
          lineHeight: '32px',
          letterSpacing: 'normal',
        },
      ],
    },
  },
};

export default config;
