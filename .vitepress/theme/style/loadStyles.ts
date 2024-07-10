import { Plugin } from 'vite'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { stylesConfig } from '../../diy.config'

interface StylesConfig {
  [key: string]: boolean
}

const stylePrefix = './.vitepress/theme/style/custom-'

export function loadStyles(stylesConfig: StylesConfig): string {
  return Object.entries(stylesConfig)
    .filter(([_, enabled]) => enabled)
    .map(([name]) => {
      const stylePath = path.resolve(stylePrefix + name + '.css');
      return fs.readFileSync(stylePath, 'utf-8');
    })
    .join('\n');
}

export function loadCustomStyles() {
  return loadStyles(stylesConfig);
}

export function VitePressStylesPlugin(): Plugin {
  return {
    name: 'vitepress-styles-plugin',
    enforce: 'pre',
    transformIndexHtml(html) {
      const styles = loadCustomStyles();
      return html.replace(
        '</head>',
        `<style>${styles}</style></head>`
      );
    }
  };
}