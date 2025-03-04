import http from '@/utils/http'
export const findCheckInfoAPI = () => {
  return http({
    url: 'member/order/pre'
  })
}
