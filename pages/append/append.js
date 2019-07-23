var postsData=require('../../localdata/localdata.js')


Page({
  data: {
    files: [],
    id:0,
    addTitle:"",
    addText:"",
    count:0

  

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
 
 
titleInput:function(e){
  this.setData({
    addTitle:e.detail.value
  })
},
textInput:function(e){
  this.setData({
    addText:e.detail.value
  })
},

addData:function(){
  var id=0
  var temp={
    title:this.data.addTitle,
    text:this.data.addText,
    id:this.data.count+3
  };
  var tempList=this.data.postList
  tempList.push(temp)

  var tempCount=this.data.count+1;
  wx.setStorageSync(String(tempCount),temp);
  wx.setStorageSync('count', tempCount);
  wx.setStorageSync('tempList', tempList)

  this.setData({
    count:tempCount,
    postList:tempList

  })
 
  console.log(this.data.postList);
}



});