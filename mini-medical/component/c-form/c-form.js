// component/c-form/c-form.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text:{
            type:String,
            defalut:'提交'
        },
        pageType:{
            type:Boolean,
            defalut:false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        radio:1,
        option1: [
            { text: '全部商品', value: 0 },
            { text: '新款商品', value: 1 },
            { text: '活动商品', value: 2 },
          ],
          option2: [
            { text: '默认排序', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
          ],
          value1: 0,
          value2: 'a',
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            this.setData({
              radio: event.detail,
            });
          },
    }
})
