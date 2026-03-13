/** @type {import('tailwindcss').Config} */
module.exports = {
    // 1. Activamos el modo oscuro basado en una clase de CSS
    darkMode: 'selector',

    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}