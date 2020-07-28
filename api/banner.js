import request from '@/utils/request'

export default{
  // 1 banner前两条
  getListBanner(courseId) {
    return request({
      url: `/educms/bannerfront/getAllbanner`,
      method: 'get'
    })
  }
}
