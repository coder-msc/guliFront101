<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="谷粒学院">
            <img src="~/assets/img/logo.png" width="100%" alt="谷粒学院">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/note" tag="li" active-class="current">
              <a>笔记</a>
            </router-link>
            <router-link to="/tools" tag="li" active-class="current">
              <a>工具</a>
            </router-link>
            <router-link to="/wallpicture" tag="li" active-class="current">
              <a>壁纸</a>
            </router-link>
            <router-link to="/friends" tag="li" active-class="current">
              <a>友链</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!loginInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="loginInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.id" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img
                  :src="loginInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt
                >
                <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
              </a>
              <a href="javascript:void(0);" title="退出" class="ml5" @click="logout()">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input type="text" placeholder="输入你想学的课程" name="queryCourse.courseName" value>
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"/>
        </aside>
        <div class="clear"/>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="尚硅谷" target="_blank">尚硅谷</a>
            </li>
          </ul>
          <div class="clear"/>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>
                <br>
                <span>服务热线：qq:59968873</span>
                <span>Email：59968873@qq.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2020 此网站拥有者为个人.  京ICP备17055252号</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"/>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import '~/assets/css/reset.css'
import '~/assets/css/theme.css'
import '~/assets/css/global.css'
import '~/assets/css/web.css'
import cookie from 'js-cookie'
import loginApi from '@/api/login'

export default {
  data() {
    return {
      token: '',
      loginInfo: {
        id: '',
        age: '',
        avatar: '',
        mobile: '',
        nickname: '',
        sex: ''
      }
    }
  },
  created() {
    // 获取路径中的值
    this.token = this.$route.query.token
    if (this.token) {
      this.WxLogin()
    }
    this.showInfo()
  },
  methods: {
    // 微信扫码登录 获取到信息
    WxLogin() {
      // console.log('************'+this.token)
      // 把token值放到cookie里面
      cookie.set('guli_token', this.token, { domain: 'localhost' })
      cookie.set('guli_ucenter', '', { domain: 'localhost' })
      // console.log('====='+cookie.get('guli_token'))
      // 调用接口，根据token值获取用户信息
      loginApi.getUserinfoBytoken()
        .then(response => {
          console.log('################' + response.data.data.userInfo)
          this.loginInfo = response.data.data.userInfo
          cookie.set('guli_ucenter', this.loginInfo, { domain: 'localhost' })
        })
    },

    showInfo() {
      // 从Cooke中获取用户信息
      var userStr = cookie.get('guli_ucenter')
      // 将字符串转换程JSON
      if (userStr) {
        this.loginInfo = JSON.parse(userStr)
      }
    },
    logout() {
      cookie.set('guli_ucenter', '', { domain: 'localhost' })
      cookie.set('guli_token', '', { domain: 'localhost' })
      // 跳转至首页
      window.location.href = '/'
    }
  }
}
</script>
