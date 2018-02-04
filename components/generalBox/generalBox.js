// components/generalBox/generalBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    innerObject:{
      type:Object,
      value:{
      },
      observer: function (newVal, oldVal) {
        this.setData({
          start: newVal
        });
      }
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    start: {
      name: 'star',
      title: '明星单品',
      isShow: true,
      bigImageSrc: '../../images/index/star/star_banner1.png',
      child: [
        {
          smallImageSrc: '../../images/index/star/mi_5x.png',
          title: "小米5X 变焦双摄",
          contents: '5.5"大屏轻薄全金属',
          price: '1299元起'
        },
        {
          smallImageSrc: '../../images/index/star/mi_5x.png',
          title: "小米5X 变焦双摄",
          contents: '5.5"大屏轻薄全金属',
          price: '1299元起'
        },
        {
          smallImageSrc: '../../images/index/star/mi_5x.png',
          title: "小米5X 变焦双摄",
          contents: '5.5"大屏轻薄全金属',
          price: '1299元起'
        },
        {
          smallImageSrc: '../../images/index/star/mi_5x.png',
          title: "小米5X 变焦双摄",
          contents: '5.5"大屏轻薄全金属',
          price: '1299元起'
        }

      ]

    }


  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
