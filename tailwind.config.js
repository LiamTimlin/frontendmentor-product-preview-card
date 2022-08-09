/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                vollkorn: ["Vollkorn", "sans-serif"],
                montserrat: ["Montserrat", "serif"],
            },
            backgroundImage: {
                "product-mobile": "url('/src/assets/image-product-mobile.jpg')",
                "product-desktop": "url('/src/assets/image-product-desktop.jpg')",
            },
        },
    },
    plugins: [],
};
