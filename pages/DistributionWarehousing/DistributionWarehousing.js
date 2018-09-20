// pages/DistributionWarehousing/DistributionWarehousing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['配送入库', '配送记录'],
    currentTab: 0,
    DivisionModal: false,//控制配送工弹框按钮
    PaymentItems: [//支付方式选择
      { name: '配送工1', vehicle: '三轮', checked: true },
      { name: '配送工2', vehicle: '三轮', checked: false },
      { name: '配送工3', vehicle: '三轮', checked: false },
      { name: '配送工4', vehicle: '三轮', checked: false },
    ],
    Recordlist: [
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordDistribution: "王某某",
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordDistribution: "王某某",
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordDistribution: "王某某",
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordDistribution: "王某某",
      },
    ],
    DistributionWorker:"",
  },
  //配送工详情点击跳转
  DistributionWarehousingDetails() {
    wx.navigateTo({
      url: "/pages/DistributionWarehousingDetails/DistributionWarehousingDetails",
    })
  },
  //配送工选项框点击事件
  PaymentChange: function (e) {
    var checked = e.detail.value
    var changed = {}
    for (var i = 0; i < this.data.PaymentItems.length; i++) {
      if (checked.indexOf(this.data.PaymentItems[i].name) !== -1) {
        changed['PaymentItems[' + i + '].checked'] = true
      } else {
        changed['PaymentItems[' + i + '].checked'] = false
      }
    }
    console.log(changed)
    this.setData(changed)
  },


  /**
   * 配送工弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 配送工隐藏模态对话框
   */
  DivisionModal: function () {
    this.setData({
      DivisionModal: false
    });
  },
  /**
   * 配送工对话框取消按钮点击事件
   */
  DivisionCancel: function () {
    this.DivisionModal();
  },
  /**
   * 配送工对话框确认按钮点击事件
   */
  DivisionConfirm: function () {
    let PaymentItems = this.data.PaymentItems
    for (let i = 0; i < PaymentItems.length; i++) {
      if (PaymentItems[i].checked === true) [
        this.setData({
          DistributionWorker:PaymentItems[i].name
        })
      ]
    }
    this.DivisionModal();
  },
  //配送工选择点击显示弹框
  Distribution() {
    this.setData({
      DivisionModal: true,
    })
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