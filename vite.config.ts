
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {

      'figma:asset/f13ac2087af26364f191382c9e7e6523c8376c9b.png': path.resolve(__dirname, './src/assets/f13ac2087af26364f191382c9e7e6523c8376c9b.png'),
      'figma:asset/926c0c76ee0ece8bfb9fd2e8e9cbfaa25d07d82c.png': path.resolve(__dirname, './src/assets/926c0c76ee0ece8bfb9fd2e8e9cbfaa25d07d82c.png'),
      'figma:asset/1ed4b0b5ded56e6604ee56090d48d2995bf177ea.png': path.resolve(__dirname, './src/assets/1ed4b0b5ded56e6604ee56090d48d2995bf177ea.png'),

      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});