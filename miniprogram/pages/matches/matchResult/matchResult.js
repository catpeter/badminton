// miniprogram/pages/matches/matchResult/matchResult.js
const baseDao = require('../../../dao/base.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranks: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const res = await baseDao.query2('groups', { match: 'f885cb355d873d62029c6ffd7399bc70' }, 1, 100, 'winCount', 'desc', 'netWinPoints', 'desc')
    this.setData({
      ranks: res
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