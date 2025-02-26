import http from '@/utils/http'

export function getBannerAPI() {
  return http({
    url: 'home/banner'
  })
}
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
