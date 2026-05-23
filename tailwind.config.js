/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}", // <-- 這行最重要，確保掃描所有 Vue 和 JS 檔案
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}