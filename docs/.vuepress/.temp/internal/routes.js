export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/blogs/JavaScript%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "blogs_JavaScript字符串常用方法.html" */"D:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/blogs/JavaScript字符串常用方法.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
