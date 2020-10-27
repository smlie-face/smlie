<template>
  <!-- 公用头部 -->
  <div class="header">
    <div class="common-header">
      <div class="left">
        <div class="back" @click.stop="back"></div>
        <router-link to="#" class="film"> </router-link>
        <p class="desc"
          >.<slot name="desc"> </slot
        ></p>
      </div>
      <div class="right">
        <div class="list" @click.stop="search"></div>

        <div class="search" @click.stop="mobile"></div>

        <router-link to="#" class="register"> </router-link>
      </div>
    </div>
    <div class="down">
      <transition name="fade">
        <ul class="lists" v-show="sum">
          <li class="itme"><router-link to="#">首页 </router-link></li>
          <li class="itme"><router-link to="#"> 新闻</router-link></li>
          <li class="itme"><router-link to="#">视屏 </router-link></li>
          <li class="itme"><router-link to="#">大片 </router-link></li>
          <li class="itme"><router-link to="#">影库 </router-link></li>
          <li class="itme"><router-link to="#"> CCTV6</router-link></li>
          <li class="itme"><router-link to="#">VIP影院 </router-link></li>
          <li class="itme"><router-link to="#">客户端 </router-link></li>
          <li class="itme"><router-link to="#"> 高清写真</router-link></li>
        </ul>
      </transition>
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

<script>
export default {
  data() {
    return {
      num: false,
      str: false,
      sum: false,
    };
  },
  methods: {
    search() {
      this.num = !this.num;
      this.str = false;
      this.sum = false;
    },
    mobile() {
      this.str = !this.str;
      this.num = false;
      this.sum = false;
    },
    back() {
      this.sum = !this.sum;
      this.str = false;
      this.num = false;
    },
  },
};
</script>

<style  scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.common-header {
  margin: 0;
  padding: 0 3%;
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.04rem solid red;
  line-height: 0.8rem;
}
.common-header,
.left,
.right {
  display: flex;
  justify-content: space-between;
}
.right {
  margin: auto 0;
}
.common-header a {
  display: block;
}
.back {
  width: 0.35rem;
  height: 0.35rem;
  background-image: url("http://static.m1905.cn/images/navigation_all/icon_nav_phone.png");
  background-size: 0.35rem;
  margin: auto 0;
}
.film {
  width: 2rem;
  height: 0.35rem;
  background: url("http://static.m1905.cn/images/navigation_all/img_logo_home_phone.png")
    no-repeat;
  background-size: 2rem;
  margin: auto 0.1rem auto 0.3rem;
}
.list {
  width: 0.35rem;
  height: 0.35rem;
  background-image: url("http://static.m1905.cn/images/navigation_all/icon_search_phone.png");
  background-size: 0.35rem;
}
.search {
  width: 0.35rem;
  height: 0.35rem;
  background-image: url("http://static.m1905.cn/images/navigation_all/icon_history_phone.png");
  background-size: 0.35rem;
  margin: auto 0.3rem;
}
.register {
  width: 0.35rem;
  height: 0.35rem;
  background-image: url("http://static.m1905.cn/images/navigation_all/icon_member_phone.png");
  background-size: 0.35rem;
}
.desc {
  font-size: 0.32rem;
  color: rgba(255, 0, 0, 0.63);
  font-weight: 600;
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
.list:hover .ipt {
  display: block;
}
.lists {
  margin: 0;
  padding: 3%;
  list-style: none;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.8);
}
.itme {
  width: 20%;
  text-align: center;
  margin-bottom: 0.2rem;
}
.itme a {
  text-decoration: none;
  color: #333;
  font-size: 0.24rem;
}
</style>