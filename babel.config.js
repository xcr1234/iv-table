module.exports = {
  presets: [
    ['@vue/app', {
      // 传入 useBuiltIns: false 选项
      // https://cli.vuejs.org/zh/guide/browser-compatibility.html#%E6%9E%84%E5%BB%BA%E5%BA%93%E6%88%96%E6%98%AF-web-component-%E6%97%B6%E7%9A%84-polyfills
      'useBuiltIns': false
    }]
  ]
}
