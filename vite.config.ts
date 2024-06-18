//vite.config.ts
import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from 'tailwindcss';

installGlobals();

export default defineConfig({
    plugins: [remix(), tsconfigPaths()],
    server: {
        port: 3000,
        hmr: {
            protocol: 'ws',
            host: 'localhost',
            port: 3000,
        },
    },
    css: {
        postcss: {
            plugins: [tailwindcss],
        },
    },
});
