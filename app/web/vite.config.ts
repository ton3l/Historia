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
            '@services': path.resolve(__dirname, 'src/services'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@historia/types': path.resolve(__dirname, '..', '..', 'packages', 'shared', 'types', 'src'),
            '@lib': path.resolve(__dirname, 'src/lib'),
        }
    },
    plugins: [react(), tailwind()],
});
