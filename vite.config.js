import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
    base: "/component-library/", // Required so GitHub Pages finds your compiled JS/CSS paths
    plugins: [
        react()
    ]
})