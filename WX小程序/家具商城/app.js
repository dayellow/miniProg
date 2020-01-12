//注册一个小程序示例（生命周期函数）
App({
//注意关闭小程序后，会在后台存活两个小时，这期间内不会执行初始化函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    //另一种获取用户信息方式，只需要这一个框架就可以
    wx.getUserInfo({
      success: function(res){
        console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //1.判断小程序的打开方式，根据不同的打开小程序方式来switch case，场景序号在官方文档查
    console.log(options)
    switch(options.scene){
      case 1001:
        break;
      case 1005:
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
  //全局对象
  globalData:{
    age:19
  }
})
