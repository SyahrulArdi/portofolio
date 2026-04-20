/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    950: '#020617',
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                },
                cyan: {
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                },
                purple: {
                    400: '#c084fc',
                    500: '#a855f7',
                    600: '#9333ea',
                },
                emerald: {
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                },
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
