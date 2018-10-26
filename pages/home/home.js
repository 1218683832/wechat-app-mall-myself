// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log("onLoad--->" + that.data.goods)
    // 这里第一次去请求api接口数据，对数据有对异常情况做处理
    // wx.request({
    //   url: '',
    //   data: '',
    //   header: {},
    //   method: 'GET',
    //   dataType: 'json',
    //   responseType: 'text',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    let goods = [];
    goods = [
      {
        "id": 6765,
        "minPrice": 80,
        "name": "1-3岁袜子",
        "originalPrice": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg"
      },
      {
        "id": 6761,
        "minPrice": 90,
        "name": "10-12岁袜子",
        "originalPrice": 0,
        "pic": "https://cdn.it120.cc/apifactory/2017/10/30/bc15e96f20fb13cc7d35f90d743ccb17.jpg"
      },
      {
        "id": 4512,
        "minPrice": 20,
        "name": "打底袜",
        "originalPrice": 30,
        "pic": "https://cdn.it120.cc/apifactory/2017/09/23/a3ec4d35dea62ad4de39a786b6d11393.jpg"
      },
      {
        "id": 4470,
        "minPrice": 49,
        "name": "外套",
        "originalPrice": 89,
        "pic": "https://cdn.it120.cc/apifactory/2017/09/23/2b17c4d23cb83824eb4362052831ab8e.jpg"
      }
    ];
    this.setData({
      goods: goods,
    });
    console.log("onLoad--->" + goods);
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