// pages/GasCollection/GasCollection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    submission:{
      identifief:"",//客户编号
      name:"",//用户名
      goodsname: "",//库存商品
      quantity:"",//数量
      money:"",//退瓶金额
      nay:"",//是否
      weight:"",//重量
      refund:""//退款
    },
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
    ],
    sex: [
      {
        name: '1',
        value: '是',
        checked: ""
      },
      {
        name: "0",
        value: "否",
        checked: 'true'
      }],
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
      "submission.goodsname": this.data.goodslist[index].Name
    })
    console.log(this.data.submission.goodsname)
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
  // 获取表单值
  // 获取客服编号
  identifief:function(e){
    let identifief1 = e.detail.value
    this.setData({
      "submission.identifief": identifief1
    })
  },
  // 数量
  quantity:function(e){
    let quantity1 = e.detail.value
    this.setData({
      "submission.quantity": quantity1
    })
  },
  // 退瓶金额
  money:function(e){
    let money1 = e.detail.value
    this.setData({
      "submission.money": money1
    })
  },
  // 是否退气
  sex:function(e){
    let sex1 = e.detail.value
    this.setData({
      "submission.nay": sex1
    })
  },
// 重量
  weight:function(e){
    let weight1 = e.detail.value
    this.setData({
      "submission.weight": weight1
    })
  },
  // 退钱金额
  refund:function(e){
    let refund1 = e.detail.value
    this.setData({
      "submission.refund": refund1
    })
  },
  // 表单提交
  submitOrder:function(){
    console.log(this.data.submission)
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