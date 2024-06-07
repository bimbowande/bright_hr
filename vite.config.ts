import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { UserConfig } from "vite";

interface VitestConfig extends UserConfig {
  test?: {
    globals?: boolean;
    environment?: string;
    setupFiles?: string[];
  };
}
///<reference types='vitest'>

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
} as VitestConfig);
