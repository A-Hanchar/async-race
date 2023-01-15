/// <reference types="vitest" />

import { AliasOptions, defineConfig } from 'vite'
import { tscPlugin } from 'vite-plugin-tsc-watch'

import path from 'path'

const getAlias = (aliases: string[]): AliasOptions =>
  aliases.map((alias) => ({
    find: alias,
    replacement: path.resolve(__dirname, 'src', alias),
  }))

const alias: AliasOptions = getAlias([
  'api',
  'assets',
  'components',
  'constants',
  'enums',
  'helpers',
  'interfaces',
  'pages',
  'router',
  'types',
  'utils',
])

/**
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  plugins: [tscPlugin()],
  resolve: {
    alias,
  },
  appType: 'spa',
})
