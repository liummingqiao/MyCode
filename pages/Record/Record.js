const app = getApp()

Page({



  /**

   * 页面的初始数据

   */

  data: {

    isShow: true

  },



  //登录

  denglu: function (e) {

    let fromdate = e.detail.value;

    wx.request({

      data: fromdate,

      success: function (res) { }

    })

  },

  /**

   * 生命周期函数--监听页面加载

   */

  onLoad: function (options) {



  },



})