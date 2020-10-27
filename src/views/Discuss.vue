<template>
  <div class="discuss">
    <Common>
      <span slot="desc">评论</span>
    </Common>
    <ul class="discussNav">
      <li class="discussList"><router-link to="#">首页</router-link></li>
      <li class="discussList"><router-link to="#">新闻资讯</router-link></li>
      <li class="discussList">
        <router-link to="#" style="color:#0295e9;">电影评论</router-link>
      </li>
      <li class="discussList"><router-link to="#">资料馆</router-link></li>
    </ul>
    <div class="discussMain">
      <div class="m-list">
          <div class="m-itme" v-for="(itme, index) in pin" :key="index">
            <div class="m-left">
              <p>{{itme.title}}</p>
              <div class="m-esc">
                <span class="ying">{{itme.author}}</span>
                <span>{{itme.time}}</span>
              </div>
            </div>
            <div class="m-right">
              <img
               v-lazy="itme.picture"
                alt=""
              />
              <span class="play"></span>
            </div>
          </div>
     
      </div>
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Common from "@/components/Common.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Common,
    Footer,
  },
  data() {
    return {
      pin: [],
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/discuss")
      .then((res) => {
        console.log(res);
        this.pin = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  
  
};
</script>

<style scoped>
ul,
.m-itme {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.discussNav {
  background-color: #333f51;
  line-height: 0.92rem;
}
.discussList {
  width: 25%;
  text-align: center;
}
.discussList a {
  width: 100%;
  text-decoration: none;
  color: #fff;
  font-size: 0.32rem;
}
.m-list {
  padding: 0 3%;
}
.m-itme{
  margin-top: 0.3rem;
}
.m-itme:last-child{
 margin-bottom: 1rem;
}
.m-left {
  width: 60%;
}
.m-right {
  width: 40%;
  position: relative;
}
img {
  width: 100%;
}
.m-left p {
  width: 100%;
  font-size: 0.37rem;
  color: #333;
  font-weight: bolder;
}
.m-left span {
  display: inline-block;
  font-size: 0.26rem;
  color: #999;
}
.ying {
  text-align: center;
  border: 0.01rem solid#2267ad;
  border-radius: 0.3rem;
  font-weight: bold;
  color: #2267ad !important;
  padding: 0.03rem;
  margin-right: 0.2rem;
}
.play {
  position: absolute;
  left: 40%;
  top: 30%;
  background: url(//static.m1905.cn/channelnews/H5/home/img/play.png) center top
    no-repeat;
  width: 0.6rem;
  height: 0.6rem;
  background-size: 100%;
  z-index: 1;
}
</style>
