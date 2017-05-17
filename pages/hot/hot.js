//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    subjects: '',
    bannerUrl: '../../images/banner.jpg',
    genreUrl: '../../images/genre.png',
    mode: "scaleToFill",
    starImgUrl: '../../images/stars.png',
    currentTab: null
  },
  bindChange:function(e){
    var that = this
    that.setData({
      currentTab: e.detail.current
    })
  },
  switchNav: function(e){
    var that = this
    if(this.data.currentTab === e.target.dataset.current){
      return false;
    }
    else{
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getCurrentMovie(function(subjects){
      that.setData({
        subjects: subjects
      })
    })
    that.setData({
      currentTab: "0"
    })
  }
})
