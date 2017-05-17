//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getCurrentMovie: function(cb){
    var that = this;
    if(this.globalData.movieInfo){
      typeof cb == "function" && cb(this.globalData.movieInfo)
    }
    else{
      var url = that.globalData.doubanBase + that.globalData.currentMovie + "?start=0&&count=10";
      wx.request({
        url: url,
        method: "GET",
        header: {
          'Content-Type': 'json'
        },
        success: function(res){
          console.log(res.data);
          console.log(res.data.subjects);
          that.globalData.subjects = res.data.subjects
          typeof cb == "function" && cb(that.globalData.subjects)
        }
      });
    }
  },
  getInComeMovie: function(cb){
    if(this.globalData.movieInfo){
      typeof cb == "function" && cb(this.globalData.movieInfo)
    }
    else{
      var url = that.globalData.doubanBase + that.globalData.inCome + "?start=0&&count=10";
      wx.request({
        url: url,
        method: "GET",
        header: {
          'Content-Type': 'json'
        },
        success: function(res){
          console.log('即将上映的数据：'+res.data.subjects);
          that.globalData.inComeSubject = res.data.subjects
          typeof cb == "function" && cb(that.globalData.inComeSubject)
        }
      });
    }
  },
  globalData:{
    userInfo:null,
    movieInfo: null,
    subjects: null,
    inComeSubject: null,
    doubanBase: "https://api.douban.com",
    currentMovie: "/v2/movie/in_theaters",
    search: "/v2/movie/search?q=",
    inCome: "/v2/movie/coming_soon"

  }
})