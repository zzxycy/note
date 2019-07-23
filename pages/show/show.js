// pages/show/show.js
var postsData = require('../../localdata/localdata.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list_data: wx.getStorageSync('tempList')

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.stopPullDownRefresh()

   
   

  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var that=this;
    that.setData({
      list_data: wx.getStorageSync('tempList')
    })
    this.onLoad();

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  delete:function(event){
    var position=event.currentTarget.id
    console.log("delete"+position)
    var tempTask=this.data.list_data.splice(position,1)

    this.setData({
      list_data:this.data.list_data
    })
    var link="删除成功"
    wx.setStorageSync('01',this.data.list_data)
    wx.setClipboardData({
      data: link,
      success:function(res){
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  }
})