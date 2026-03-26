# He-Can 个人网站

基于 Figma 设计稿搭建的纯 HTML/CSS 个人网站。

## 项目结构

```
personal-website/
├── index.html    # 主页面
├── styles.css    # 样式
├── script.js     # 滚动进度条逻辑
└── README.md
```

## 本地预览

**方式一：直接打开**
```bash
# 在浏览器中打开 index.html
open index.html
```

**方式二：使用本地服务器（推荐，避免 CORS 等问题）**
```bash
# 使用 Python
python3 -m http.server 8080

# 或使用 Node.js（需安装 npx）
npx serve .

# 然后访问 http://localhost:8080
```

## 已实现内容

- [x] 深色主题布局（背景 #010200）
- [x] 顶部导航：Logo、品牌名 He-Can、导航链接、语言切换
- [x] 底部滚动进度条（随页面滚动更新）
- [x] 响应式适配

## 待完善（你可自行添加）

- 主内容区：设计稿中为空白，可加入 Hero 大图、欢迎动画等
- Logo：当前为 SVG 占位，可从 Figma 导出 PNG/SVG 替换
- 导航链接：已写 `#services` 等锚点，可改为实际页面或滚动锚点
