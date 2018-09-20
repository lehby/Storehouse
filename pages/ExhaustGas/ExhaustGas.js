// pages/ExhaustGas/ExhaustGas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['退气入库', '退气记录'],
    currentTab: 0,
    Recordlist:[
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"4548153518648",
        GasWeight:"300",
        TotalPrice:"1200"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"4548153518648",
        GasWeight:"300",
        TotalPrice:"1200"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"4548153518648",
        GasWeight:"300",
        TotalPrice:"1200"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"4548153518648",
        GasWeight:"300",
        TotalPrice:"1200"
      },
    ]
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
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

  }
})