- 小程序
    UI组件 = 组件化思想 + 语义化标签 + 样式能力
    接口 

- pages 目录 路由级别组件
    小程序不需要搞路由
    创建就好
    app.json
    - index.wxml html
    - index.wxss  css
    - index.js  逻辑  mvvm
    - index.json  配置文件

    - view div
    - bindtap onclick
        tap 移动端事件
        bind 绑定  bindtap="gotoDetail"

- 小程序有很多方便的地方
    - wx 微信的能力  强大
        wx.navigateTo
    - Page({
        gotoDetail() {

        }
    })
        到页面上 bindtap.. 直接调用

- css?  
