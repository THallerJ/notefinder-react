import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
	server: {
		port: 5000,
	},
	plugins: [react(), svgr({ exportAsDefault: true })],
});
