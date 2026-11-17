export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 45px rgba(76, 107, 255, 0.18)',
      },
      colors: {
        primary: '#6d7bff',
        secondary: '#8b5cf6',
        dark: '#07111f',
        panel: '#0f172a',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(99,102,241,0.2), transparent 60%)',
      },
    },
  },
  plugins: [],
};
