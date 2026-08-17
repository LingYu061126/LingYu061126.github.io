# Valproate · Astro

从原 Hexo 博客迁移的 Astro 静态博客。

```bash
npm install
npm run dev
npm run build
```

文章位于 `src/content/posts/`，静态资源位于 `public/images/`。

## 配置

大部分日常设置集中在 `src/config.ts`：

- `title`、`subtitle`、`description`、`author`：站点文字信息
- `siteUrl`、`lang`、`startYear`：网址、语言与页脚起始年份
- `banner.image`、`banner.position`：首页横幅图片和裁切位置
- `profile.avatar`、`profile.bio`：头像和个人简介
- `theme.hue`、`saturation`、`lightness`：主题色 HSL 参数
- `theme.cardOpacity`、`theme.radius`：卡片透明度和圆角
- `navigation`：顶部导航菜单
- `social`：个人资料卡中的外部链接
- `friends`：友链页面中的站点列表
- `waline`：留言板服务地址、登录方式、必填项和字数限制
- `features`：Banner、侧栏、目录、阅读时间和搜索开关

文章标题、日期、标签和草稿状态在每篇 Markdown 顶部的 frontmatter 中配置。

## 发布

先提交本地改动，再运行部署命令：

```bash
git add .
git commit -m "Add new post"
npm run deploy
```

`npm run deploy` 会先完成 Astro 检查与构建，再将当前 `main` 分支推送到 GitHub，由 GitHub Actions 自动发布到 Pages。它不会自动暂存或提交文件。
