// pages/participant/participant.js
const app = getApp()
const qiniuUploader = require("../../../utils/qiniuUploader");
const util = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: "拍一张自己阳光笑脸的最美的一张照片拍一张自己阳光笑脸的最美的一张照片",
    sum_money: 100,
    sum_page: 10,
    receive_page: 5, total_partner: 0,
    partner: [{
      head_portrait: 'http://img4.imgtn.bdimg.com/it/u=2643267806,3088281804&fm=26&gp=0.jpg',
      note: '最长五个字',
      image_url: 'http://img4.imgtn.bdimg.com/it/u=2643267806,3088281804&fm=26&gp=0.jpg',
      status: 0
    }]
    
  },
  click:function(){
      wx.navigateTo({
        url: "/pages/HomePage/ReleaseTask/ReleaseTask",
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx: wx.request({
      url: 'http://10.20.58.23:8080/v1/open/user/getToken',
      method: "GET",
      dataType: 'json',
      header: { //头部返回信息
        'content-type': 'application/json'
      },
      success: function (res) { 
        console.log(res)
        // that.setData({
          
        // })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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