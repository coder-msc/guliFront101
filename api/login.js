import request from '@/utils/request'

export default{
  // 登录方法
  submitLogin(member) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: member
    })
  },
  // 根据token获取用户信息
  getUserinfoBytoken() {
    return request({
      url: `/educenter/member/getmemberinfo`,
      method: 'get'
    })
  }

}
