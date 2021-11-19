import { request } from './request.js'

export { request } from './request.js'

export function getDetailData(id) {
  return request({
    url: '/detail?'+'iid='+id,
    params: {
      id
    }
  })
}

// 导出整合好的一个类,把需要放入页面中的整个到一个类中，避免一个一个地
// 从接口中拿，造成代码混乱
export class Goods {
  constructor(itemInfo, columns, services) {
    // itemInfo
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.realPrice = itemInfo.lowNowPrice
    // columns
    this.columns = columns
    // services
    this.services = services
    
  }
}

//商品数据整合
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}


// 商品详情参数
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

// 推荐商品
export function getRecommend(){
	return request({
		url:'/recommend'
	})
}