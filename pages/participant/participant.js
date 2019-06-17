// pages/participant/participant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    partner: [{
      head_portrait: 'http://img4.imgtn.bdimg.com/it/u=2643267806,3088281804&fm=26&gp=0.jpg',
      image_url: 'http://img4.imgtn.bdimg.com/it/u=2643267806,3088281804&fm=26&gp=0.jpg',
      note: '',
      status: '',
    }],
    sum_money: 100,
    sum_page: 10,
    receive_page: 5,
    task: "",
    task_id: "1",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    wx.request({
      url: 'http://10.20.58.88:8080/v1/open/user/findPartnerByTaskId/' + that.data.task_id,
      method: "GET",
      dataType: 'json',
      header: { //头部返回信息
        'content-type': 'application/json'
      },
      success: function(res) {

        console.log(res)
        that.setData({
          partner: res.data
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx.request({
      url: 'http://10.20.58.88:8080/v1/open/user/findByTaskId/' + that.data.task_id,
      method: "GET",
      dataType: 'json',
      header: { //头部返回信息
        'content-type': 'application/json'
      },
      success: function(res) {

        console.log(res)
        that.setData({
          task: res.data.claim,
          sum_page: res.data.total_red,
          sum_money: res.data.total_bounty,
          receive_page: res.data.red
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  to() {
    wx.navigateTo({
      url: 'task_content/task_content',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})