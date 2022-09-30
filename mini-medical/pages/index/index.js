// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    arr:[
        {"name":'预约问诊',"id":1,"img":"./../../static/预约挂号.png"},
        {"name":'病情问诊',"id":2,"img":"./../../static/体检报告.png"},
        {"name":'体检报告',"id":3,"img":"./../../static/验资报告.png"},
        {"name":'健康资讯',"id":4,"img":"./../../static/编辑文章.png"},
        {"name":'健康测试',"id":5,"img":"./../../static/药品.png"},
    ]
  },
  // 事件处理函数
  bindViewTap() {
      console.log(this.arr)
    
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
      console.log('onLoad')
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
