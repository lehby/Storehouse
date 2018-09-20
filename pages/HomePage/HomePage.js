// pages/HomePage/HomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //盘点点击跳转
  onInventory(){
    wx.navigateTo({
      url: "/pages/Inventory/Inventory",
    })
  },
  //充装出库点击跳转
  onShipments(){
    wx.navigateTo({
      url: '/pages/Shipments/Shipments',
    })
  },
  //充装入库点击跳转
  onWarehousing(){
    wx.navigateTo({
      url: '/pages/Warehousing/Warehousing',
    })
  },
  //配送出库点击跳转
  onDistributionShipments(){
    wx.navigateTo({
      url: '/pages/DistributionShipments/DistributionShipments',
    })
  },
  //配送入库点击跳转
  onDistributionWarehousing(){
    wx.navigateTo({
      url: '/pages/DistributionWarehousing/DistributionWarehousing',
    })
  },
  //收赠气点击跳转
  onGasCollection(){
    wx.navigateTo({
      url: '/pages/GasCollection/GasCollection',
    })
  },
  //退气入库点击跳转
  onExhaustGas(){
    wx.navigateTo({
      url: '/pages/ExhaustGas/ExhaustGas',
    })
  },
  //自用入库点击跳转
  onSelfUse(){
    wx.navigateTo({
      url: '/pages/SelfUse/SelfUse',
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