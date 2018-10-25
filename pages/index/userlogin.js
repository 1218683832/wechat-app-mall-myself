/** 版本兼容，在没有 open-type=getUserInfo 版本的兼容处理：为优化用户体验，使用 wx.getUserInfo 接口直接弹出授权框的开发方式将逐步不再支持。从2018年4月30日开始，小程序与小游戏的体验版、开发版调用 wx.getUserInfo 接口，将无法弹出授权询问框，默认调用失败。正式版暂不受影响。 */
var canIUse = wx.canIUse('button.open-type.getUserInfo');

function onGetUserInfo(e) {
  console.log("start onGetUserInfo---");
  console.log(e.detail.errMsg)
  console.log(e.detail.userInfo)
  console.log(e.detail.rawData)
  console.log("end onGetUserInfo---");
}

function onUserLogin(e){
  let canGetUserInfo;
  /** 首先判断用户是否授权获取用户wx信息 */
  wx.getSetting({
    success(res){
      console.log("onUserLogin--->首先判断用户是否授权获取用户wx信息");
      let authSetting = res.authSetting;
      console.log(authSetting)
      canGetUserInfo = authSetting['scope.userInfo'];
      console.log("onUserLogin--->用户是否授权获取用户wx信息: " + canGetUserInfo);

      if (canGetUserInfo) {// 已授权获取用户wx信息
        console.log("onUserLogin---login")
      } else {// 未授权获取用户wx信息
        if (canIUse){
          console.log(e.detail.errMsg);
          console.log(e.detail.userInfo);
          console.log(e.detail.rawData);
        }
        console.log("onUserLogin---logiss")
      }
    }
  })
}

module.exports = {
  onUserLogin: onUserLogin
}