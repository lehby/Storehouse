// pages/Shipments/Shipments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['充装出库', '充装记录'],
    currentTab: 0,
    showgoods: false,//控制商品弹框隐藏显示
    showFilling: false,//控制充装站弹框显示隐藏
    FillingList: [
      '充装站1',
      '充装站2',
      '充装站3',
      '充装站4',
      '充装站5',
      '充装站6',
    ],
    Recordlist: [
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordAddress: "龙泉充装站",
        FillingTotal: "3000"
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordAddress: "龙泉充装站",
        FillingTotal: "3000"
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordAddress: "龙泉充装站",
        FillingTotal: "3000"
      },
      {
        Recordtime: "2018-08-23",
        RecordName: "郑速度",
        RecordNumber: "8934587365",
        RecordAddress: "龙泉充装站",
        FillingTotal: "3000"
      },
    ],
    FillingName: "",
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
    total:"",
    goods: [],
    Quantity: 0,
    Price: 0,
  },
  //导航控制
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //充装总量合计
  onTotal(e) {
    let value = e.detail.value
    let arr = value.split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "*" || arr[i] == "/" || arr[i] == "+" || arr[i] == "-") { //如果是乘法或者除法的时候
        arr[i - 1] = arr[i - 1] + ",";
        arr[i + 1] = "," + arr[i + 1];
      }
    }
    let newarr = arr.join('').split(',');

    function yunsuan(arr) {
      let chengfa = arr.indexOf("*");
      let chufa = arr.indexOf("/");
      let $temp
      if (chengfa != -1 || chufa != -1) {
        if (chengfa < chufa && chengfa != -1) {
          $temp = parseInt(arr[chengfa - 1]) * parseInt(arr[chengfa + 1]);
          arr.splice(chengfa - 1, 3, $temp);
          console.log(arr);
          yunsuan(arr);
        }
        else if (chengfa > chufa && chufa != -1) {
          $temp = parseInt(arr[chufa - 1]) / parseInt(arr[chufa + 1]);
          arr.splice(chufa - 1, 3, $temp);
          console.log(arr);
          yunsuan(arr);
        }
        // 只有乘法
        else if (chengfa > -1 && chufa == -1) {
          $temp = parseInt(arr[chengfa - 1]) * parseInt(arr[chengfa + 1]);
          arr.splice(chengfa - 1, 3, $temp);
          // console.log('只有乘法：'+arr);
          yunsuan(arr);
        }
        //只有除法
        else if (chufa > -1 && chengfa == -1) {
          $temp = parseInt(arr[chufa - 1]) / parseInt(arr[chufa + 1]);
          arr.splice(chufa - 1, 3, $temp);
          console.log(arr);
          yunsuan(arr);
        }
      }
      else {
        // console.log(arr.length);
        if (arr.length > 1) {
          for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "+") {
              $temp = parseInt(arr[i - 1]) + parseInt(arr[i + 1]);
              arr.splice(i - 1, 3, $temp);
              console.log(arr);
              yunsuan(arr);
            }
            else if (arr[i] == "-") {
              $temp = parseInt(arr[i - 1]) - parseInt(arr[i + 1]);
              arr.splice(i - 1, 3, $temp);
              console.log(arr);
              yunsuan(arr);
            }

          }
        }
        else {
          // console.log(arr[0]);
          return arr[0];
        }
      }
      return arr[0];
    }

    let res = yunsuan(newarr);
    // console.log("结果：" + res);
    this.setData({
      total:res
    })
  },
  //充装详情点击事件
  ShipmentsDetails() {
    wx.navigateTo({
      url: '/pages/ShipmentsDetails/ShipmentsDetails',
    })
  },
  //充装站选择点击事件
  option(e) {
    const index = e.target.dataset.index;
    this.setData({
      FillingName: this.data.FillingList[index]
    })
    this.FillingHideModal();
  },
  //充装站点击弹框
  Filling() {
    this.setData({
      showFilling: true,
    })
  },
  /**
  * 充装站弹出框蒙层截断touchmove事件
  */
  preventTouchMove: function () {
  },
  /**
   * 充装站隐藏模态对话框
   */
  FillingHideModal: function () {
    this.setData({
      showFilling: false
    });
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