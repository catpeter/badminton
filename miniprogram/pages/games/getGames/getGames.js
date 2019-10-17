// miniprogram/pages/games/getGames/getGames.js
const baseDao = require('../../../dao/base.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gamesList: [],
    groupsList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const [gamesList, groupsList]= await Promise.all([baseDao.query('games'), baseDao.query('groups')])
    this.setData({
      gamesList: gamesList,
      groupsList: groupsList
    }) 
  },
  complete: function() {
    let ranks = this.data.groupsList
    this.data.gamesList.forEach((item) => {
      for (let i = 0; i < ranks.length; i++) {
        if (ranks[i]._id === item.result.winner) {
          ranks[i]['winCount'] = ranks[i]['winCount'] ? ++ranks[i]['winCount'] : 1
          ranks[i]['netWinPoints'] = ranks[i]['netWinPoints'] ? ranks[i]['netWinPoints'] + item.result.netWinPoints : item.result.netWinPoints
          break;
        }
      }
    })
    for (let i = 0; i < ranks.length; i++) {
      ranks[i]['winCount'] ? '' : ranks[i]['winCount'] = 0
      ranks[i]['netWinPoints'] ? '' : ranks[i]['netWinPoints'] = 0
      baseDao.update('groups', ranks[i]._id, { winCount: ranks[i]['winCount'], netWinPoints: ranks[i]['netWinPoints']})
    }
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