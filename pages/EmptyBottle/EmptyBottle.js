// pages/ EmptyBottle/ EmptyBottle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2018-09-01',
    enddate:"2018-09-03",
    time: '12:01',
    winWidth: 0,
    winHeight: 0,
    currentTab: 0, // tab切换
    arrears: [{ name: "小红", img:"../../imgs/calendar.png",money:"80"},
      { name: "大号", img: "../../imgs/calendar.png", money: "80" },
      { name: "西瓜", img: "../../imgs/calendar.png", money: "100" },
      { name: "冬菇", img: "../../imgs/calendar.png", money: "80" },
      { name: "冬瓜", img: "../../imgs/calendar.png", money: "80" },
      { name: "南瓜", img: "../../imgs/calendar.png", money: "80" },]

  },
  // 开始时间
  bindDateChange: function (e) {
  
    this.setData({
      date: e.detail.value
    })
  },
  // 结束时间
  bindData: function (e) {
    console.log(e)
    this.setData({
      enddate: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });
    // 控制容器高度，让内容完全显示
    //创建节点选择器
    var query = wx.createSelectorQuery();
    query.select('.whole').boundingClientRect(function (rect) {
      var leng = that.data.arrears.length
      that.setData({
        winHeight: rect.height * leng + 50
      })
    }).exec();
  },
  
      bindChange: function (e) {
        var that = this;
        that.setData({ currentTab: e.detail.current });
      },
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
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

  }
})