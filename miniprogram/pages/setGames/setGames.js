// miniprogram/pages/setGames/setGames.js
const baseDao = require('../../dao/base.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    // baseDao.query('groups').then((res) => {
    //   for(let i = 0; i< res.length; i++){
    //     for (let j = i + 1; j < res.length; j++) {
    //       console.log(res[i], res[j])
    //       const data = {
    //         mainTeam: res[i]._id,
    //         awayTeam: res[j]._id,
    //         score: [0, 0]
    //       }
    //       baseDao.create('games', data).then((res) => {
    //         wx.showToast({
    //           title: '新增记录成功',
    //         })
    //       })
    //     }      
    //   }
    // })
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