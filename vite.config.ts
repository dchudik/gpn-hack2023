import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dchudik.github.io/gpn-hack2023/",
  plugins: [react()],
});
