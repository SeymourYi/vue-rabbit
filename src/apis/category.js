import http from '@/utils/http'
export const findTopCategoryAPI = (id) => {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}

export const findCategoryFilterAPI = (id) => {
  return http({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}
export const findSubCategoryAPI = (data) => {
  return http({
    url: '/category/goods/temporary',
    method: 'POST',
    data
  })
}
