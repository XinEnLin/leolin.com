import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 時：
// 如果你的 repo 名稱是 username.github.io → site 填你的網址，不需要 base
// 如果你的 repo 名稱是其他名字 → 取消下方 base 的註解，填入 repo 名稱

export default defineConfig({
  site: 'https://leolin.github.io',
  base: '/leolin.com',
});
