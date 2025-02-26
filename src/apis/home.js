import http from '@/utils/http'


export const findNewAPI = () => {
  return http({
    url: '/home/new'
  })
}
export const findHotAPI = () => {
  return http({
    url: '/home/hot'
  })
}
export const findGoodsAPI = () => {
  return http({
    url: '/home/goods'
  })
}
export function getBannerAPI(params = {}) {
  // 默认为1 商品为2
  const { distributionSite = '1' } = params
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
