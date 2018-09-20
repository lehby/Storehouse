// pages/DistributionShipments/DistributionShipments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['配送出库', '配送记录'],
    currentTab: 0,
    checkAll: false,
    Distributionlist:[
      {
        id:"1",
        Phone:"123456789",
        Address:'龙泉区某某镇某某街',
        OddNumbers:"DD170721524848366",
        Operatortime:"2018-08-23",
        Operator:"某某",
        OrderId:"45648615184",
        Distributionworker:"郑速度",
        checkAll: false,
      },
      {
        id:"2",
        Phone:"123456789",
        Address:'龙泉区某某镇某某街',
        OddNumbers:"DD170721524848366",
        Operatortime:"2018-08-23",
        Operator:"某某",
        OrderId:"45648615184",
        Distributionworker:"郑速度",
        checkAll: false,
      },
      {
        id:"3",
        Phone:"123456789",
        Address:'龙泉区某某镇某某街',
        OddNumbers:"DD170721524848366",
        Operatortime:"2018-08-23",
        Operator:"某某",
        OrderId:"45648615184",
        Distributionworker:"郑速度",
        checkAll: false,
      },
      {
        id:"4",
        Phone:"123456789",
        Address:'龙泉区某某镇某某街',
        OddNumbers:"DD170721524848366",
        Operatortime:"2018-08-23",
        Operator:"某某",
        OrderId:"45648615184",
        Distributionworker:"郑速度",
        checkAll: false,
      },
    ]
  },
  //配送出库详情
  DistributionShipmentsDetails(){
    wx.navigateTo({
      url: '/pages/DistributionShipmentsDetails/DistributionShipmentsDetails',
    })
  },
   //导航控制
   navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    let checkboxItems = this.data.Distributionlist;
    let values = e.detail.value;
    for (var i = 0; i < checkboxItems.length; ++i) {
      checkboxItems[i].checked = false;
      for (var j = 0; j < values.length; ++j) {
        if (checkboxItems[i].id == values[j]) {
          checkboxItems[i].checked = true;
          break;
        }
      }
    }

    let checkAll = false;
    if (checkboxItems.length == values.length) {
      checkAll = true;
    }

    this.setData({
      Distributionlist: checkboxItems,
      checkAll: checkAll
    });
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