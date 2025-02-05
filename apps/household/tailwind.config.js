/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "../../apps/household/src/**/*.{js,jsx,ts,tsx}",
        "../../libs/kpt-ui/**/*.{js,jsx,ts,tsx}",
    ],
    presets: [require("nativewind/preset")],

    theme: {
        extend: {}
    },
    plugins: []
};