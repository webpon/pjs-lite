import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

function setupPlugins(env) {
  return [
    vue(),
  ]
}

export default defineConfig((env) => {
  const viteEnv = loadEnv(env.mode, process.cwd())
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
      },
    },
    plugins: setupPlugins(viteEnv),
    server: {
      proxy: {
        '/api': {
          target: `http://127.0.0.1:${viteEnv.VITE_SERVER_DEV_PORT}`,
          changeOrigin: true,
        },
      },
    },
    build: {
      reportCompressedSize: false,
      sourcemap: false,
      commonjsOptions: {
        ignoreTryCatch: false,
      },
      assetsDir: 'static',
    },
  }
})
