<template>
  <div class="login">
    <router-link to="#"
      ><img
        class="logo"
        src="https://static.m1905.cn/passport/images/login-logo.png"
        alt=""
    /></router-link>
    <div class="tab">
      <div class="left">登录</div>
      <div class="right">注册电影账号</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  padding-left: 10%;
}
.logo {
  display: block;
  margin-top: 0.1rem;
  width: 2.96rem;
  height: 0.64rem;
}
.tab {
  display: flex;
  justify-content: space-between;
}
</style>