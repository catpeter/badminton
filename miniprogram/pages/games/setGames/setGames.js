// miniprogram/pages/setGames/setGames.js
const baseDao = require('../../../dao/base.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    game: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // TODO
    const res = baseDao.query('games', { _id: options.id }, 1, 1)
    this.setData({
      game: res.length > 0 ? res[0] : null
    })
  },

  formSubmit: async function (e) {
    let data = {};
    data.teams = this.data.game.teams
    data.teams[0].score = parseInt(e.detail.value.score1)
    data.teams[1].score = parseInt(e.detail.value.score2)
    data['result'] = { winner: parseInt(e.detail.value.score1) > parseInt(e.detail.value.score2) ? data.teams[0].id : data.teams[1].id, netWinPoints: Math.abs(
      parseInt(e.detail.value.score1) - parseInt(e.detail.value.score2)
    )}
    const res = await baseDao.update('games', this.data.game._id, data)
    wx.showToast({
      title: '修改记录成功',
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