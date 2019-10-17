// miniprogram/pages/setMatch/setMatch.js
const baseDao = require('../../../dao/base.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onAdd: async function (data) {
    const res = await baseDao.create('matches', data)
    wx.showToast({
      title: '新增记录成功',
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    e.detail.value.address = this.data.address
    this.onAdd(e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  setAddress: function () {
    let that = this
    wx.chooseLocation({
      success: function (res) {
        delete res.errMsg
        that.setData({
          address: res
        })
      },
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