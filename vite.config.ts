/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // importante pro uso de describe/it/expect direto
    environment: 'jsdom', // essencial para DOM funcionar
    setupFiles: './setupTests.ts' // opcional, mas bom ter
  }
});
