# 写作档案

这是一个零构建依赖的静态写作网站。修改 HTML/CSS 后推送到 `main`，GitHub Pages 会直接发布。

## 新增文章

1. 复制 `_templates/article-zh.html`，改名为文章文件名，例如 `essay-003.html`。
2. 填写页面标题、正文和对应英文版文件名。
3. 复制 `_templates/article-en.html` 创建英文版，例如 `essay-003-en.html`。
4. 英文版必须保留 AI 翻译声明；如果没有英文版，删除中文页的语言切换即可。
5. 在 `index.html` 对应年份的 `.writing-list` 中增加一行文章入口。

## 约定

- 中文页：`名称.html`
- AI 英译页：`名称-en.html`
- 图片统一放在 `images/`
- 全站样式只在 `style.css` 修改
- 旧文章 URL 不改名、不删除，避免历史链接失效
- 正文字号保持电脑端 18px、手机端 17px；修改排版时同时检查两种宽度

以后新增年份时，复制首页现有的 `.year` 区块并修改年份即可。
