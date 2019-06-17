Page({
  data: {
  },
  //提交按钮功能
  gotoCash:function(){
    wx.showModal({
      title: '提示',
      content: '提现申请已提交，将在1-5个工作日之内到达您的微信钱包',
    })
  }
})