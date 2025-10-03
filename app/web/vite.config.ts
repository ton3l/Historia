import react from '@vitejs/plugin-react-swc';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@routes': path.resolve(__dirname, 'src/routes'),
        }
    },
    plugins: [react(), tailwind()],
});
