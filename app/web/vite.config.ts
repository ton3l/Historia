import react from '@vitejs/plugin-react-swc';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwind()],
});
