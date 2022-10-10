// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        myobj:{
            id:1,
            myData:[{
                name:'我的问诊',
                id:1,
                goTab:'treatment'
            },
            {
                name:'我的报告',
                id:2,
                goTab:'report'
            },{
                name:'预约记录',
                id:3,
                goTab:'appointment'
            },{
                name:'我的病例',
                id:4,
                goTab:'case'
            }],
            myList:[{
                name:'支付记录',
                id:1,
                goTab:'paymentRecord'
            },{
                name:'我的收藏',
                id:2,
                goTab:'collect'
            }]
        }
       
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    treatment(){
        wx.navigateTo({
          url: '../treatment/treatment',
        })
    },
    report(){
        wx.navigateTo({
          url: '../report/report',
        })
    },
    appointment(){
        wx.navigateTo({
          url: '../appointment/appointment',
        })
    },
    case(){
        wx.navigateTo({
          url: '../case/case',
        })
    },
    paymentRecord(){
        wx.navigateTo({
          url: '../paymentRecord/paymentRecord',
        })
    },
    collect(){
        wx.navigateTo({
          url: '../collect/collect',
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})