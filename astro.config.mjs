import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { unified } from '@astrojs/markdown-remark';

function rehypeLazyImages() {
  return (tree) => {
    const visit = (node) => {
      if (node?.type === 'element' && node.tagName === 'img') {
        node.properties ??= {};
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
      }
      node?.children?.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://lingyu061126.github.io',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { strict: false }], rehypeLazyImages],
    }),
  },
});
