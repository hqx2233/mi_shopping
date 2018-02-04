Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/index/star/star_banner1.png'
     
    ],
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
          smallImageSrc: '../../images/index/star/hm_5.png',
          title: "红米5 16GB",
          contents: '轻巧长续航',
          price: '599元'
        },
        {
          smallImageSrc: '../../images/index/star/mi_powerpro.png',
          title: "小米移动电源高配版",
          contents: '轻巧设计，轻松出行',
          price: '149元'
        },
        {
          smallImageSrc: '../../images/index/star/mi_tv_4a65.png',
          title: "小米电视4A 65",
          contents: '4K 超清大屏 人工智能系统',
          price: '4999元'
        },
        {
          smallImageSrc: '../../images/index/star/mi_tv_4a49.png',
          title: "小米电视4A 49英寸",
          contents: '全高清 HDR, 64位处理器',
          price: '2399元'
        },
        {
          smallImageSrc: '../../images/index/star/mi_air2.png',
          title: "小米空气净化器 2",
          contents: '10分钟，房间空气焕然一新',
          price: '599元'
        }
      ]
    },
    news:{
        name: 'new',
        title: '新品上线',
        isShow: true,
        bigImageSrc: '../../images/index/news/news_banner1.png',
        child:[
          {
            smallImageSrc: '../../images/index/news/mi_earphone3-5.png',
            title: "小米降噪耳机",
            contents: '双动圈+动铁声学架构',
            price: '299元'
          },
          {
            smallImageSrc: '../../images/index/news/mi_air12.9.png',
            title: "小米笔记本Air 12.5",
            contents: '像杂志一样轻薄',
            price: '3599元起'
          },
          {
            smallImageSrc: '../../images/index/news/mi_powerstrip-4k4.png',
            title: "米家四维四控插线板",
            contents: '四位分控，随用随开',
            price: '89元'
          },
          {
            smallImageSrc: '../../images/index/news/mi_mask.png',
            title: "霍韦尼尔新风口罩",
            contents: '高效防护，佩戴舒适',
            price: '249元'
          },
          {
            smallImageSrc: '../../images/index/news/mi_usb3.0zjk.png',
            title: "USB3.0至千兆网口...",
            contents: '以一敌四，高效办公好搭档',
            price: '129元'
          },
          {
            smallImageSrc: '../../images/index/news/mi_mirror.png',
            title: "70迈只能后视镜",
            contents: '大屏大视野，看得更清晰',
            price: '1299元'
          }
        ]
    },
    intel:{
      name:'intelligence',
      title: '米家智能',
      isShow: true,
      bigImageSrc: '../../images/index/intelligence/intelligence_banner1.png',
      bigImageSrc2: '../../images/index/intelligence/phone_banner2.png',
      child: [
        {
          smallImageSrc: '../../images/index/intelligence/mi_mix2.png',
          title: "小米MIX 2 全面屏2.0",
          contents: '5.99"大屏，4轴光学防抖',
          price: '3299元起'
        },
        {
          smallImageSrc: '../../images/index/intelligence/mi_note3.png',
          title: "小米Note 3 人脸解锁",
          contents: '1600万美颜自拍',
          price: '1999元起'
        }
      ]
    },
    tv: {
      name: 'tv',
      title: '智能电视',
      isShow: false,
      bigImageSrc: '',
      bigImageSrc2: '../../images/index/tv/tv_banner2.png',
      child: [
        {
          smallImageSrc: '../../images/index/tv/mi_tv_4c55.png',
          title: "小米电视4C 55英寸",
          contents: '4K HRD 人工智能系统',
          price: '3099元起'
        },
        {
          smallImageSrc: '../../images/index/tv/mi_tv_4a49.png',
          title: "小米电视4A 49英寸",
          contents: '全高清 HDR, 64位处理器',
          price: '2399元起'
        },
        {
          smallImageSrc: '../../images/index/tv/mi_tv4_55.png',
          title: "小米电视4 55英寸",
          contents: '无边框式沉浸设计',
          price: '4499元起'
        },
        {
          smallImageSrc: '../../images/index/tv/mi_tv_4a55.png',
          title: "小米电视4A 55英寸",
          contents: '4K HRD 人工智能系统',
          price: '2999元起'
        }  
      ]
    },
    home: {
      name: 'home',
      title: '米家家居',
      isShow: false,
      bigImageSrc: '',
      bigImageSrc2: '../../images/index/mi_home/mihome_banner2.png',
      child: [
        {
          smallImageSrc: '../../images/index/mi_home/mi_roomrobot.png',
          title: "米家扫地机器人",
          contents: '智商高，扫的干净扫的快',
          price: '1699元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_airpro.png',
          title: "米家空气净化器Pro",
          contents: '大空间，快循环',
          price: '1299元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_router3C.png',
          title: "小米路由器3C",
          contents: '一款更轻快的路由器',
          price: '89远'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_plc.png',
          title: "小米WiFi电力猫",
          contents: '有插座的地方就有WiFi',
          price: '249远'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_philips_ceilinglamp.png',
          title: "米家飞利浦智睿吸...",
          contents: '色温颜色可调',
          price: '349元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_shouhuan2.png',
          title: "小米手环2",
          contents: 'OLED 显示屏，轻摸操作',
          price: '149元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_smartcamera-v.png',
          title: "米家小白智能摄像机",
          contents: '360°全景拍摄红外夜视',
          price: '399元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_mj-carcorder.png',
          title: "米家行车记录仪",
          contents: '晚上也可以拍清车牌',
          price: '349元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_90trunk_20.png',
          title: "90公分行李箱 20寸",
          contents: '静态轮胎，内饰防止纱布',
          price: '169元'
        },
        {
          smallImageSrc: '../../images/index/mi_home/mi_mjsmartlamp.png',
          title: "米家 LED 智能台灯",
          contents: '照明之上，光的艺术品',
          price: '169元'
        }
      ]
    },
    computer: {
      name: 'computer',
      title: '小米电脑',
      isShow: false,
      bigImageSrc: '',
      bigImageSrc2: '../../images/index/computer/computer_banner2.png',
      child: [
        {
          smallImageSrc: '../../images/index/computer/mi_mibookair-12.png',
          title: '12.5"笔记本Air 128...',
          contents: '超薄长续航',
          price: '3599元'
        },
        {
          smallImageSrc: '../../images/index/computer/mi_mibookpro.png',
          title: '15.6"笔记本i7 8GB',
          contents: '全新高性能独显',
          price: '6399元'
        },
        {
          smallImageSrc: '../../images/index/computer/mi_mibookair.png',
          title: '13.3"笔记本i7 独显',
          contents: '轻薄全金属，超长续航',
          price: '5999元'
        },
        {
          smallImageSrc: '../../images/index/computer/mi_mibookpro_i5.png',
          title: '15.6"笔记本i5 8GB',
          contents: '更强悍的专业笔记本',
          price: '5599元'
        }
      ]
    }
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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