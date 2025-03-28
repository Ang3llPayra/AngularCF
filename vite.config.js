import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: 'localhost', // Usa la IP pública de la instancia
    port: 4300,
    strictPort: true,
    allowedHosts: ['cf.99mas1.mx'],
    cors: true
  }
});


