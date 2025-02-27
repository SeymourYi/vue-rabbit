import http from "@/utils/http"
export const findDetailAPI = (id) => {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}
export const findHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return http({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
