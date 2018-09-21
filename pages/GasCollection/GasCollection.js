// pages/GasCollection/GasCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['收赠气', '收赠气记录'],
    currentTab: 0,
    showgoods: false,//控制商品弹框隐藏显示
    goodslist: [
      {
        Name: "商品1",
        Price: 120,
        Quantity: 0,//计数
        PrceType: "公斤",
      },
      {
        Name: "商品2",
        Price: 120,
        Quantity: 0,//计数
        PrceType: "公斤",
      },
      {
        Name: "商品3",
        Price: 120,
        Quantity: 0,//计数
        PrceType: "瓶",
      },
      {
        Name: "商品4",
        Price: 120,
        Quantity: 0,//计数
        PrceType: "公斤",
      },
      {
        Name: "商品5",
        Price: 120,
        Quantity: 0,//计数
        PrceType: "瓶",
      }
    ],
    goodsname:"",
    goods:[],
    Quantity: 0,
    Price: 0,
    Recordlist:[
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        BottleNumber:"9",
        BottleGas:"300"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        BottleNumber:"9",
        BottleGas:"300"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        BottleNumber:"9",
        BottleGas:"300"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        BottleNumber:"9",
        BottleGas:"300"
      },
    ]
  },
  //收赠气详情
  GasCollectionDetails(){
    wx.navigateTo({
      url: '/pages/GasCollectionDetails/GasCollectionDetails',
    })
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  
  //商品选中点击事件
  ongoods(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      goodsname: this.data.goodslist[index].Name
    })
    this.goodsHideModal();
  },
    /**
   * 商品弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 商品隐藏模态对话框
   */
  goodsHideModal: function () {
    this.setData({
      showgoods: false
    });
  },
  /**
   * 商品点击显示弹框
   */
  goodsDisplay() {
    this.setData({
      showgoods: true,
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