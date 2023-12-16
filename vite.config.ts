import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': ['useMouse', ['useFetch', 'useMyFetch']],
          axios: [['default', 'axios']],
        },
        { from: 'vue-router', imports: ['RouteLocationRaw'], type: true },
      ],
      defaultExportByFilename: false,
      dirs: [],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      resolvers: [],
      injectAtEnd: true,
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      resolvers: [VantResolver()],
      dirs: ['src/components', 'src/layouts'],
      dts: true,
      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView'],
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
