import request from '@/utils/request'

export default{
  // 1 查询热门课程和名师
  getHotCourseAndTeacher(courseId) {
    return request({
      url: `/eduservice/indexfront/index`,
      method: 'get'
    })
  }
}
