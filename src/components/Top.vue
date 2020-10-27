<template>
  <div class="header">
    <div class="top">
      <div class="logo">
        <a class="logo1" href=""></a>
        <a class="logo2" href=""></a>
      </div>
      <div class="smile">
        <ul>
          <li class="f1">
            <p class="icons search" @click="search"></p>
          </li>
          <li class="f1">
            <a class="icons logon" href="#"></a>
          </li>
          <li class="f1">
            <p class="icons mobile" @click="mobile"></p>
          </li>
        </ul>
      </div>
    </div>

    <div class="nav">
      <ul>
        <li class="f2">
          <router-link to="/new">新闻.</router-link>
          <router-link to="/discuss">评论</router-link>
        </li>
        <li class="f2"><router-link to="/zgdygc">电影号</router-link></li>
        <li class="f2"><router-link to="/blockbuster">大片</router-link></li>
        <li class="f2"><router-link to="#">VIP影院</router-link></li>
        <li class="f2"><router-link to="/affect">电影百科</router-link></li>
      </ul>
    </div>
    <div class="down">
      <transition name="fade">
        <div class="ipt" v-show="num">
          <input type="text" />
          <router-link to="#">搜索</router-link>
        </div>
      </transition>
      <transition name="fade">
        <div class="time" v-show="str">最近你还没有任何观看记录</div>
      </transition>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      num: false,
      str: false,
    };
  },
  methods: {
    search() {
      this.num = !this.num;
      this.str = false;
    },
    mobile() {
      this.str = !this.str;
      this.num = false;
    },
    aaa() {
      this.str = false;
      this.num = false;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li a {
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.header {
  position: relative;
}
.top {
  height: 1.2rem;
  padding: 0 0.333rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.logo1 {
  display: inline-block;
  width: 0.6rem;
  height: 0.883rem;
  background: url("https://static.m1905.cn/homepage2020/H5/images/logo1.png?t=202009221005")
    no-repeat center center;
  margin-right: 0.333rem;
  background-size: 100%;
  margin-top: 0.3rem;
}
.logo2 {
  display: inline-block;
  width: 1.45rem;
  height: 0.467rem;
  background: url("https://static.m1905.cn/homepage2020/H5/images/logo2.png?t=202009221005")
    no-repeat center center;
  background-size: 100%;
  margin-bottom: 0.2rem;
}
.top ul {
  margin: 0;
}
ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.smile {
  margin-top: 0.4rem;
}
.f1 {
  float: left;
  margin-left: 0.5rem;
}

.icons {
  display: inline-block;
  width: 0.5rem;
  height: 0.6rem;
}

.search {
  background: url("../assets/home_sprite.png") -0.1rem -0.033rem/4rem 4rem
    no-repeat;
}
.logon {
  height: 0.62rem;
  background: url("../assets/home_sprite.png") -0.567rem -0.033rem/4rem 4rem
    no-repeat;
}
.mobile {
  width: 0.61rem;
  height: 0.62rem;
  background: url("../assets/home_sprite.png") -1.067rem -0.033rem/4rem 4rem
    no-repeat;
}
.nav {
  width: 100%;
  line-height: 1rem;
  background-color: #333333;
}
.nav ul {
  padding: 0 0.3rem;
  margin: 0;
}
.f2 a {
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
}
.down {
  position: absolute;
  top: 1rem;
  width: 100%;
  background: -webkit-linear-gradient(top, #fff, rgba(255, 255, 255, 0.8));
}
.ipt {
  width: 100%;
  height: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  position: absolute;
  top: 0.2rem;
}
.time {
  width: 100%;
  height: 2.7rem;
  position: absolute;
  top: 0.2rem;
  padding-top: 2.3rem;
  color: #adb2b9;
  background: url(https://static.m1905.cn/images/navigation_all/icon_dingding_grey_navigation_1905all.gif)
    no-repeat center 0.75rem;
  border-bottom: 1px solid #d6d9dc;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
}
.ipt input {
  width: 70%;
  height: 0.7rem;
  padding-left: 0.7rem;
  outline: none;
  position: absolute;
  top: 0.1rem;
  left: 3%;
  background-image: url(https://static.m1905.cn/images/navigation_all/icon_search_phone.png);
  background-repeat: no-repeat;
  background-size: 0.25rem 0.25rem;
  background-position: 0.15rem 0.2rem;
  border: 1px solid #91a5af;
}
.ipt a {
  position: absolute;
  top: 0.2rem;
  right: 13%;
  font-size: 0.3rem;
  color: #2287dd;
}
</style>