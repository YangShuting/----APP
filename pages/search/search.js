//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
  	searchValue: '',
    searchPage: 'Hi, this is search page.',
    searchResult: {}
  },
  bindSearchInput: function(event){
  	var value = event.detail.value;
  	this.hanldeSearchData(value);
  },
  hanldeSearchData: function(value){
  	var that = this;
  	var searchUrl = app.globalData.doubanBase + app.globalData.search + value + "&&start=0&&count=10";
  	wx.request({
  		url: searchUrl,
  		method: 'GET',
  		header: { 'content-type': 'json'},
  		success: function(res){
  			var data = res.data;
  			that.processSearchData(data);
  		},
  		fail: function(){},
  		complete: function(){}
  	});

  },
  processSearchData: function(data){
  	console.log('搜索返回的结果是:');
  	console.log(data);
  	var searchResult = data;
  	this.setData({ searchResult : searchResult})
  }
})