Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  changetodw:function()
  {
  wx.navigateTo({
    url: 'dw/dw',
  })
  },
  changetody:function()
  {
    wx.downloadFile({
      url:"https://xk12138-1256049328.cos.ap-beijing.myqcloud.com/hackx/electric.docx",
      success:function(res){
        console.log("下载文档成功")
        var filePath=res.tempFilePath;
        wx.openDocument({
          filePath: filePath,
          success:function(res){
            console.log("打开文档成功")
          },
          fail:function(err){
            console.log(err)
          }
        })
      }
    })
  }
})