import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [svgr(), react(), eslintPlugin(), tsconfigPaths()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
