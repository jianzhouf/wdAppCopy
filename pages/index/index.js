//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://oss.weidai.com.cn/banner_pic_20180209173849265.jpg',
      'https://oss.weidai.com.cn/banner_pic_20180212144258404.png', 'https://oss.weidai.com.cn/banner_pic_20180209173849265.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 400,
    indicatorColor: 'rgba(255,255,255,.3)',
    indicatorActiveColor: '#fff'
  },
  onLoad: function () {
  },
  linkToDetail(){
    wx.navigateTo({
      url:'../detail/detail'
    })
  }

})
