// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    pages: {
        index: {
          // page 的入口
          entry: 'src/main.ts',
          // 模板来源
          template: 'public/index.html',
          // 在 dist/index.html 的输出
          filename: 'index.html',
          // 当使用 title 选项时，
          // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
          title: 'Index Page',
          // 在这个页面中包含的块，默认情况下会包含
          // 提取出来的通用 chunk 和 vendor chunk。
          chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
      },
      //loader
      css: {
        loaderOptions: {
          css: {
            "style": true, 
            // 这里的选项会传递给 css-loader
          },
          postcss: {
            // 这里的选项会传递给 postcss-loader
          },
          less:{
            modifyVars: {
                'primary-color':'#94c5f3',                         // 全局主色
                'link-color':' #1890ff',                            // 链接色
                'success-color':' #52c41a',                         // 成功色
                'warning-color':' #faad14',                         // 警告色
                'error-color':' #f5222d',                           // 错误色
                'font-size-base': '14px',                           // 主字号
                'heading-color': 'rgba(0, 0, 0, .85)',              // 标题色
                'text-color': 'rgba(0, 0, 0, .65)',                 // 主文本色
                'text-color-secondary' : 'rgba(0, 0, 0, .45)',      // 次文本色
                'disabled-color' : 'rgba(0, 0, 0, .25)',            // 失效色
                'border-radius-base': '4px',                        // 组件/浮层圆角
                'border-color-base':' #d9d9d9',                     // 边框色
                'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',  // 浮层阴影
                // dark theme
                // 'menu-dark-color': '#B9D5FA',
                'menu-dark-bg': '#B9D5FA',
                // 'menu-dark-arrow-color': 'fff',
                // 'menu-dark-submenu-bg':' #000c17',
                // 'menu-dark-highlight-color':' #fff',
                // 'menu-dark-item-active-bg': 'primary-color'
            },
            javascriptEnabled: true
          }
        }
      },
      pwa: {
        iconPaths: {
          favicon32: 'img/favicon.ico',
          favicon16: 'img/favicon.ico',
          appleTouchIcon: 'img/favicon.ico',
          maskIcon: 'img/favicon.ico',
          msTileImage: 'img/favicon.ico'
        }
      }

  }