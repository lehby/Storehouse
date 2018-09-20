// pages/ EmptyBottle/ EmptyBottle.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['回收空瓶', '回收记录'],
    currentTab: 0,
    showgoods: false,//控制商品弹框隐藏显示
    isgoods: false,//控制商品列表的显示隐藏
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
    goods:[],
    Quantity:"",
    Price: 0,
    Recordlist:[
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"546848134",
        DistributionWorker:"王某某"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"546848134",
        DistributionWorker:"王某某"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"546848134",
        DistributionWorker:"王某某"
      },
      {
        Inventorytime:"2018-08-23",
        InventoryName:"郑速度",
        GasNumber:"546848134",
        DistributionWorker:"王某某"
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
   * 商品对话框取消按钮点击事件
   */
  goodsCancel: function () {
    this.goodsHideModal();
  },
  /**
   * 商品对话框确认按钮点击事件
   */
  goodsConfirm: function () {
    let goodslist = this.data.goodslist;
    let goods = [];
    for (let i = 0; i < goodslist.length; i++) {
      if (goodslist[i].Quantity > 0) {
        goods.push(goodslist[i])
      }
    }
    console.log(goods)
    this.setData({
      isgoods: true,
      goods
    })
    this.goodsHideModal();
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
  * 用户点击商品减1
  */
  subtracttap: function (e) {
    const index = e.target.dataset.index;
    const goodslist = this.data.goodslist;
    const Quantity = goodslist[index].Quantity;
    if (Quantity <= 0) {
      return;
    } else {
      goodslist[index].Quantity--;
      this.setData({
        goodslist: goodslist
      });
    }
    this.calculateTotal();
  },
  /**
    * 用户点击商品加1
    */
  addtap: function (e) {
    const index = e.target.dataset.index;
    const goodslist = this.data.goodslist;
    const Quantity = goodslist[index].Quantity;
    goodslist[index].Quantity++;
    this.setData({
      goodslist: goodslist
    });
    this.calculateTotal();
  },
  /**
  * 计算商品总数
  */
  calculateTotal: function () {
    let goodslist = this.data.goodslist;
    let Count = 0;
    let Price = 0;
    for (let i = 0; i < goodslist.length; i++) {
      let good = goodslist[i];
      Count += good.Quantity;
      Price += good.Quantity * good.Price;
    }
    this.setData({
      Quantity: Count+"瓶",
      Price: Price
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