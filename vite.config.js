import { resolve } from 'path'
import { defineConfig} from "vite";

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'public')

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [
    ],
    publicDir: 'public',
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                city: resolve(root, 'category/city', 'index.html'),
                exhibition: resolve(root, 'category/exhibition', 'index.html'),
                landscape: resolve(root, 'category/landscape', 'index.html'),
                panorama: resolve(root, 'category/panorama', 'index.html'),
                portrait: resolve(root, 'category/portrait', 'index.html'),
                streetArt: resolve(root, 'category/street-art', 'index.html'),
                wildlife: resolve(root, 'category/wildlife', 'index.html')
            }
        }
    },
    json: {
        namedExports: true,
        stringify: false
    }
})
