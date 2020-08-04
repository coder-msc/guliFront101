import request from '@/utils/request'

export default{
  // 查询课程信息 分页
  getTeacherFront(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  }

}
