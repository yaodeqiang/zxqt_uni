import request from './request'

const baseURL = `https://petrify.cc`
// const baseURL = 'http://192.168.29.238:7001'
request.config.baseURL = baseURL

// const dailyRequest = (id) => request.post('/v1/daily', {
//   url: `/api/4/news/${id}`
// })

const api = {
  
  getNewIds: () => request.get(`/v1/one?${encodeURI('url=/api/hp/idlist/0?version=3.5.0&platform=android')}`),
  // 知乎日报
  // getZhList: () => dailyRequest('latest'),
  // getZhDtl: (id) => dailyRequest(id)
}

export default api
