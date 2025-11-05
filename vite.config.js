import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "dist", // Vercel usará esta carpeta
        emptyOutDir: true, // Limpia dist antes del build
    },
    server: { port: 5173 },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
