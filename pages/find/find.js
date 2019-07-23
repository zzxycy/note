var postsData = require('../../localdata/localdata.js')

Page({

  data: {
    inputShowed: false,
    inputVal: "",
    count:0,
    seeTitle:"成都市",
    text:"",
    
    
    // list_data: wx.getStorageSync('tempList')


  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },


  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },

  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },


  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  onLoad: function (options) {
    //载入缓存的用户数
    var postListTemp = postsData.postList;
    if (wx.getStorageSync('count')) {
      var tempCount = wx.getStorageSync('count');
      var userStorage = [];
      for (var i = 1; i <= tempCount; i++) {
        var tempSotrage = wx.getStorageSync(String(i));
        userStorage.push(tempSotrage);
      };
      postListTemp = postListTemp.concat(userStorage);
    } else {
      var tempCount = 0;
    };
    this.setData({
      postList: postListTemp,
      count: tempCount
    });
  },


  titleInput: function (e) {
    this.setData({
      seeTitle: e.detail.value
    })
   // console.log(this.data.seeTitle)
  },

  seeText: function () {
    var tempList = this.data.postList;
    console.log(tempList)
    var length = tempList.length;
    console.log(length)
    var index = 0;
    tempList[index].title = '周日';
    tempList[index].text = '出去玩';
    for (var i = 0; i < length; ++i) {
    
      if (tempList[i].title == this.data.seeTitle) {
        index = i;
         
      };
      this.setData({
        list_data:tempList[index],
        title: tempList[index].title,
        text: tempList[index].text
      });
      
      
    }
    var list_data=tempList[index]
    console.log(tempList[index])

  

   
   
   

  },




});