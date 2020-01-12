//index.js
//获取全局App()产生的应用实例
const app = getApp()
//具体设置在app.js，注意age要在data里声明
const age=app.globalData.age
console.log(app.globalData.age)
//图片滑动浏览
Page({
  data: {//带中括号的可看作为数组！！！！！！！！
    imgUrls: [
      '/images/1560614627569.jpg',
      '/images/oYYBAFU_Zh6IMUmcABTSah606WwAACcQAN1WTAAFNKC100.jpg',
      '/images/t01b07f126f39754a6e.jpg'
    ],
    indicatorDots: true,
    autoplay: true,//自动播放
    interval: 5000,//自动切换时间间隔
    duration: 1000,//切换过程时间
    circular: true,//循环播放
    age//注意要在data里声明
  },

  //获取用户信息后设置的函数
  handleGetUserInfo(event){
    console.log(event)
  },


  gotapBar: function () {//注意跳转到tapBar页面要用switchTab函数
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  gountapBar: function () {//非tapBar页面要用navigateTo函数
    wx.navigateTo({
      url: '/pages/hhh/hhh'
    })
  }
})


