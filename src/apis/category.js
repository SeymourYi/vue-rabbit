import http from '@/utils/http'
export const findTopCategoryAPI = (id) => {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}
