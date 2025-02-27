import http from "@/utils/http"
export const findDetailAPI = (id) => {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}
