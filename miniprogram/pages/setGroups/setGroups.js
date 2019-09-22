// miniprogram/pages/setGroups/setGroups.js
const baseDao = require('../../dao/base.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList: [],
    index1:0,
    index2:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // baseDao.create('test', {name: '测试毛2'}).then((res) => {
    //   wx.showToast({
    //     title: '新增记录成功',
    //   })
    // })
    const that = this
    baseDao.query('users').then((res) => {
      that.setData({
        userList: res
      })
    })
  },
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  formSubmit:function(e) {
    const data = {
      users: [this.data.userList[this.data.index1]._id, this.data.userList[this.data.index2]._id],
      name: e.detail.value.name
    }
    baseDao.create('groups', data).then((res) => {
      wx.showToast({
        title: '新增记录成功',
      })
    })
  },
  onQuery: function (tables, data) {
    baseDao.query(tables, data).then((res) => {
    console.log(res)
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