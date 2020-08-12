import request from '@/utils/request'

export default{
  // 查询课程信息 分页
  getCourseFront(page, limit, searchObj) {
    console.log('--------方法getCourseFront')
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  // 得到条件
  getgetAllSubjectInfo() {
    return request({
      url: '/eduservice/edusubject/getAllSubject',
      method: 'get'
    })
  },
  // 课程详情信息
  getCourseInfo(courseId) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }

}
