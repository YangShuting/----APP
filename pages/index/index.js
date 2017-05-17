//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎你使用快看电影',
    userInfo: {},
    subjects: ''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    app.getMovieFromDB(function(subjects){
      that.setData({
        subjects: subjects
      })
    })
  }
})
