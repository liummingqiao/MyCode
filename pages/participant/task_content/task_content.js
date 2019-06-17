// pages/participant/task_content/task_content.js
const qiniuUploader = require("../../../utils/qiniuUploader");
const util = require("../../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task: '',
    sum_money: '',
    task_id: '1',
    imageURL: 'http://img4.imgtn.bdimg.com/it/u=2153937626,1074119156&fm=26&gp=0.jpg',
    photo: "+",
    pd: true
  },
  upload_photo() {
    var that = this
    // 通过微信的api选择图片，暂存到本地文件夹，并且通过路径名可以拿到该图片
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //相片是压缩还是原画 
      sourceType: ['album', 'camera'], //相机或者拍照
      success: function(res) {
        let tempFilePaths = res.tempFilePaths[0];
        //将本地的照片上传到服务器（返回得到该图片的网络url）
        that.getToken(tempFilePaths);
      }
    })

  },
  add_photo() {
    wx.showModal({
      title: '提示',
      content: '确定上传任务图片？',
      success: function(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://10.20.58.88:8080/v1/open/participant/addPartner',
            data:{},
            method: "POST",
            dataType: 'json',
            header: { //头部返回信息
              'content-type': 'application/json'
            },
            success: function (res) {

              //  console.log(res)
              that.setData({
                task: res.data.claim,
                sum_money: res.data.total_bounty,
              })
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }
    })
  },
delete_photo(){
var that  = this 
 that.setData({
   pd: true
 })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this

    wx.request({
      url: 'http://10.20.58.88:8080/v1/open/user/findByTaskId/' + that.data.task_id,
      method: "GET",
      dataType: 'json',
      header: { //头部返回信息
        'content-type': 'application/json'
      },
      success: function(res) {

        //  console.log(res)
        that.setData({
          task: res.data.claim,
          sum_money: res.data.total_bounty,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
    wx: wx.request({
      url: 'http://10.20.58.88:8080/v1/open/user/getToken',
      method: "GET",
      dataType: 'json',
      header: { //头部返回信息
        'content-type': 'application/json'
      },
      success: function(res) {
        wx.hideLoading();
        // that.updateImg(filePath, res.data.uptoken);
      },
      fail: function(res) {
        wx.hideLoading();
      },
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  getToken: function(filePath) {
    var that = this
    var rUrl = "http://10.20.58.88:8080/v1/open/user/getToken"
    wx.request({
      url: rUrl,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        wx.hideLoading();
        that.updateImg(filePath, res.data.uptoken);
      },
      fail: function(res) {
        wx.hideLoading();
      }
    })
  },
  //上传图片到服务器
  updateImg: function(filePath, uptoken) {
    const qiniuUploader = require("../../../utils/qiniuUploader")
    //随机生成文件名
    var prname = util.guid2()
    var that = this
    //上传图片
    qiniuUploader.upload(filePath, (res) => {
      //console.log(res);
      //获得上传的图片网络路径
      that.setData({
        imageURL : res.imageURL,
        pd:false
      });
    }, (error) => {
      console.log('error: ' + error);
    }, {
      key: prname,
      region: 'ECN',
      uptoken: uptoken,
      uploadURL: 'https://up.qiniup.com',
      domain: 'http://pt0s1sl8l.bkt.clouddn.com/',
    });

  },


})