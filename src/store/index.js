import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flowerList: [
      {
        id: "1",
        src: "http://img.weiye.me/zcimgdir/album/file_58c274afbfcb9.jpg",
        title: "触摸----薰衣草礼盒：进口薰衣草永生花",
        price: "300.00",
        sales: "0",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310174039_85802.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310174055_41184.jpg"},
        ]
      },
      {
        id: "2",
        src:
          "http://img.weiye.me/zcimgdir/thumb/t_148913862958c273c5af543.jpg",
        title: "十二星座经典七彩·摩羯座----彩虹永生玫瑰:厄瓜多尔进口巨型玫瑰",
        price: "288.00",
        sales: "3",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310173724_58845.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310173743_13436.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310173753_63619.jpg"},
        ]
      },
      {
        id: "3",
        src:
          "http://img.weiye.me/zcimgdir/thumb/t_148913853158c273639a8a8.jpg",
        title:
          "甜蜜物语----黛安娜粉玫瑰33枝，粉色香水百合3枝，搭配适量粉色勿忘我",
        price: "358.00",
        sales: "1",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310173548_51631.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310173558_25802.jpg"},
        ]
      },
      {
        id: "4",
        src:
          "http://img.weiye.me/zcimgdir/thumb/t_148913841658c272f01c36b.jpg",
        title: "芍药",
        price: "100.00",
        sales: "2",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310173347_62019.jpeg"},
        ]
      },
      {
        id: "5",
        src:
          "http://img.weiye.me/zcimgdir/thumb/t_148913816858c271f8ca9f1.jpg",
        title: "绣球",
        price: "100.00",
        sales: "0",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310172438_92699.jpeg"},
        ]
      },
      {
        id: "6",
        src: "http://img.weiye.me/zcimgdir/album/file_58c26f8a85750.jpg",
        title: "触摸----薰衣草礼盒：进口薰衣草永生花",
        price: "378.00",
        sales: "0",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310171942_61956.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310171951_65108.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310172001_14188.jpg"},
        ]
      },
      {
        id: "7",
        src: "http://img.weiye.me/zcimgdir/album/file_58c26e655cd90.jpg",
        title: "佳期如梦----永生花盒：进口永生玫瑰3枝,永生康乃馨3枝",
        price: "336.00",
        sales: "0",
        imgList:[
          {url:"http://img.weiye.me/zcimgdir/image/20170310171620_62375.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310171628_36538.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310171638_56279.jpg"},
          {url:"http://img.weiye.me/zcimgdir/image/20170310171649_89015.jpg"},
        ]
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
