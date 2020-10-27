<template>
  <div class="new">
    <Common>
      <span slot="desc">新闻</span>
    </Common>

    <ul class="topList">
      <li
        class="topItme"
        :class="[{ blue: num == index }]"
        v-for="(itme, index) in lists"
        :key="index"
        @click="blue(index)"
      >
        <router-link :to="itme.tab_url">{{ itme.tab }}</router-link>
      </li>
    </ul>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item v-for="(itme, index) in image" :key="index">
        <router-link to="">
          <img :src="itme.picture" alt="" class="img-Box" />
          <span class="title">{{ itme.title }}</span>
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 五条 -->
    <div class="n-top">
      <div class="topBox" v-for="(itme, index) in desc" :key="index">
        <div class="titleBox">
          <p>
            <router-link to="">{{ itme.title }} </router-link>
          </p>
          <div class="descBox">
            <span class="time">
              <router-link to="">{{ itme.time }} </router-link></span
            >
            <span class="film">
              <router-link to="">{{ itme.film }}</router-link></span
            >
            <span class="actor">
              <router-link to="">{{ itme.sponsor }} </router-link></span
            >
          </div>
        </div>
        <div class="imgBox">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
          </router-link>
        </div>
      </div>
    </div>
    <!-- 文字 -->
    <ul class="textList">
      <li class="textItme" v-for="(itme, index) in desc2" :key="index">
        <span class="erect"></span>
        <router-link to="">{{ itme.text }} </router-link>
      </li>
    </ul>
    <h3>电影策划</h3>
    <div class="plot">
      <p class="textTop">成龙版“复仇者联盟”难道不香吗？</p>
      <img
        src="https://image11.m1905.cn/uploadfile/2020/1011/thumb_1_698_348_20201011101536653366.jpg"
        alt=""
      />
      <p class="textDesc">
        1985年，成龙在拍《警察故事》时，第一次在商场硬着头皮跳护栏，完成了这一影史经典动作画面。35年后，《急先锋》里66岁的成龙没有再次以身试险，而是用“巧劲”与台词进行了自我致敬与调侃。
      </p>
    </div>
    <ul class="textList">
      <li class="textItme" v-for="(itme, index) in desc3" :key="index">
        <span class="erect"></span>
        <router-link to="">{{ itme.text }} </router-link>
      </li>
    </ul>
    <h3>明星</h3>
    <div class="chief">
      <ul class="chiefList">
        <li
          class="chiefItme"
          :class="[{ active: num1 == index }]"
          v-for="(itme, index) in tabs"
          :key="index"
          @click="active(index, itme.tab_url)"
        >
          <router-link to="">{{ itme }}</router-link>
          <div class="point"></div>
        </li>
      </ul>
      <Release v-bind:msg="num1"></Release>
      
    </div>
     <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import Common from "@/components/Common.vue";
import Release from "@/components/Release.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Common,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    Release,Footer
  },
  data() {
    return {
      image: [],
      desc: [],
      desc2: [],
      desc3: [],
      lists: [
        {
          tab: "首页",
          tab_url: "#",
        },
        {
          tab: "电影资讯",
          tab_url: "#",
        },
        {
          tab: "1905原创",
          tab_url: "#",
        },
        {
          tab: "明星资讯",
          tab_url: "#",
        },
        {
          tab: "图集",
          tab_url: "#",
        },
        {
          tab: "预告片",
          tab_url: "#",
        },
        {
          tab: "专题",
          tab_url: "#",
        },
      ],
      tabs: ["最新","华语","海外", ],
      num: "",
      num1:0,
    };
  },
  mounted() {
    this.Axios("slideshow1");
    this.Axios("new_top");
    this.Axios("essay3");
  },

  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "slideshow1") {
            this.image = res.data.data;
          } else if (i == "new_top") {
            this.desc = res.data.data;
          } else if (i == "essay2") {
            this.desc2 = res.data.data;
          } else if (i == "essay3") {
            this.desc3 = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    blue(i) {
      this.num = i;
    },
    active(i) {
      this.num1 = i;
    },
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.topList {
  margin: 0;
  padding: 0.36rem 0 0.1rem;
  list-style: none;
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}
.topItme {
  width: 20%;
  text-align: center;
  margin-bottom: 0.2rem;
}
.topItme a {
  text-decoration: none;
  color: #333;
  font-size: 0.3rem;
}
.blue a {
  color: #2167ad;
}
van-swipe-item {
  position: relative;
}
.img-Box {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.title {
  line-height: 1rem;
  display: block;
  position: absolute;
  bottom: 0;
  left: 3%;
  font-size: 0.3rem;
  color: #fff;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 12px;
  left: 70%;
}
.topBox {
  width: 100%;
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #ccc;
  padding: 0 3% 0.2rem;
}
.topBox:last-child,
.textItme:last-child {
  border-bottom: 0;
}
.titleBox {
  width: 60%;
}
.titleBox a {
  text-decoration: none;
  color: #333;
  font-size: 0.25rem;
}
.imgBox {
  width: 40%;
}
.titleBox p a {
  color: #000;
  font-size: 0.3rem;
  font-weight: bolder;
}
.imgBox img {
  width: 100%;
}
ul {
  list-style: none;
}
.textList {
  margin: 0.3rem 0;
}
.textItme {
  padding: 0 3%;
  height: 0.92rem;
  border-bottom: 0.01rem solid #ccc;
}
.erect {
  display: inline-block;
  width: 0.05rem;
  height: 0.2rem;
  background-color: #2167ad;
  margin: 0.2rem 0.2rem 0 0;
}
.textItme a {
  display: inline-block;
  text-decoration: none;
  color: #000;
  font-size: 0.3rem;
  line-height: 0.92rem;
  font-weight: bolder;
}
h3 {
  font-size: 0.36rem;
  color: #000;
  font-weight: bolder;
  padding: 0.3rem 3%;
  margin: 0;
}
.plot {
  padding: 0 3%;
  color: #333;
  border-bottom: 0.01rem solid #ccc;
}
.textTop {
  font-size: 0.3rem;
}
.plot img {
  width: 100%;
  height: 3.48rem;
}
.textDesc {
  font-size: 0.26rem;
  color: #666;
  padding: 0.2rem 0;
}
.chiefList {
  display: flex;
  justify-content: left;
  padding: 0 3%;
  border-bottom: 0.01rem solid #ccc;
}
.chiefItme {
  width: 20%;
}
.chiefItme a {
  line-height: 0.5rem;
  font-size: 0.32rem;
  text-decoration: none;
  color: #666;
}
.active a {
  color: #2167ad;
}
.point {
  width: 0.3rem;
  height: 0.05rem;
  background-color: #2167ad;
  margin-left: 0.1rem;
  display: none;
}
.active .point {
  display: block;
}
</style>