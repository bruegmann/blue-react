import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: "deployment"
    },
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-react-compiler"]
            }
        })
    ]
})
