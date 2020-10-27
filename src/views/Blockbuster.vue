<template>
  <div class="blockbuster">
    <div class="top">
      <img src="//static.m1905.cn/images/vod/h5/zl.jpg" alt="" />
    </div>
    <Common>
      <span slot="desc">大片</span>
    </Common>
    <nav>
      <ul class="navList">
        <li
          class="navItme"
          :class="[{ black: num == index }]"
          v-for="(itme, index) in tabs"
          :key="index"
          @click="black(index)"
        >
          {{ itme }}
        </li>
      </ul>
    </nav>
    <div class="lunbo">
      <van-swipe :autoplay="3000" indicator-color="#609fbf">
        <van-swipe-item v-for="(itme, index) in image" :key="index">
          <router-link :to="itme.address">
            <img :src="itme.picture" alt="" class="bigImg" />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="one">
      <ul class="onrList">
        <li class="oneItme" v-for="(itme, index) in image2" :key="index">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
            <h3>{{ itme.title }}</h3>
            <p>{{ itme.desc }}</p>
            <i>{{ itme.rank }}</i>
            <div class="genre">{{ itme.genre }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <h2>微视屏</h2>
    <div class="grids">
      <div class="grid">
        <img
          src="https://image11.m1905.cn/uploadfile/2013/1210/thumb_1_230_173_20131210093901338934.jpg"
          alt=""
        />
        <p>《救火英雄》曝终极预告</p>
      </div>
      <div class="grid">
        <img
          src="https://image11.m1905.cn/uploadfile/2013/1210/thumb_1_230_173_20131210075423451620.jpg"
          alt=""
        />
        <p>《四大名捕2》排片高口碑</p>
      </div>
    </div>

    <h2>最新大片</h2>
    <Lunbo>
      <div class="two" v-for="(itme, index) in image3" :key="index">
        <router-link to="#">
          <img v-lazy="itme.picture" alt="" />
          <h3>{{ itme.title }}</h3>
          <p>{{ itme.desc }}</p>
          <i>{{ itme.rank }}</i>
        </router-link>
      </div>
      <div class="two"></div>
      <div class="two"></div>
      <div class="two"></div>
      <div class="two"></div>
    </Lunbo>
    <h2>港台片场</h2>
    <div class="one">
      <ul class="onrList">
        <li class="oneItme" v-for="(itme, index) in image4" :key="index">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
            <h3>{{ itme.title }}</h3>
            <p>{{ itme.desc }}</p>
            <i>{{ itme.rank }}</i>
            <div class="genre">{{ itme.genre }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <h2>内地片场</h2>
    <div class="one">
      <ul class="onrList">
        <li class="oneItme" v-for="(itme, index) in image5" :key="index">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
            <h3>{{ itme.title }}</h3>
            <p>{{ itme.desc }}</p>
            <i>{{ itme.rank }}</i>
            <div class="genre">{{ itme.genre }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <h2>艺术影院</h2>
    <div class="one">
      <ul class="onrList">
        <li class="oneItme" v-for="(itme, index) in image6" :key="index">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
            <h3>{{ itme.title }}</h3>
            <p>{{ itme.desc }}</p>
            <i>{{ itme.rank }}</i>
            <div class="genre">{{ itme.genre }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <h2>微电影</h2>
    <div class="one">
      <ul class="onrList">
        <li class="oneItme" v-for="(itme, index) in image7" :key="index">
          <router-link to="">
            <img v-lazy="itme.picture" alt="" />
            <div class="bto-desc">
              <span class="descLeft">{{ itme.title }}</span>
              <span class="descRight">{{ itme.rank }}</span>
            </div>

            <div class="genre">{{ itme.genre }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
import Common from "@/components/Common.vue";
import Footer from "@/components/Footer.vue";
import Lunbo from "@/components/Lunbo.vue";
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    Common,
    Footer,
    Lunbo,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      image: [],
      image2: [],
      image3: [],
      image4: [],
      image5: [],
      image6: [],
      image7: [],
      num: "",
      tabs: [
        "首页",
        "大片",
        "港片",
        "欧美",
        "独家",
        "内地",
        "频道热播",
        "主题片场",
        "艺术影院",
        "网络电影",
        "分类检索",
        "排行榜",
        "更多^",
      ],
    };
  },

  mounted() {
    this.Axios("slideshow2");
    this.Axios("tract");
    this.Axios("tract2");
    this.Axios("tract3");
    this.Axios("tract4");
    this.Axios("tract5");
    this.Axios("tract6");
  },
  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "slideshow2") {
            this.image = res.data.data;
          } else if (i == "tract") {
            this.image2 = res.data.data;
          } else if (i == "tract2") {
            this.image3 = res.data.data;
          } else if (i == "tract3") {
            this.image4 = res.data.data;
          } else if (i == "tract4") {
            this.image5 = res.data.data;
          } else if (i == "tract5") {
            this.image6 = res.data.data;
          } else if (i == "tract6") {
            this.image7 = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    black(i) {
      this.num = i;
    },
  },
};
</script>

<style scoped>
.top img {
  width: 100%;
  height: 1.3rem;
}
ul {
  list-style: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 3%;
}
.navList {
  justify-content: left;
  background-color: #333f51;
}
.navItme {
  width: 20%;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.24rem;
  color: #fff;
}
.black {
  background-color: black;
}
.bigImg {
  display: block;
  width: 100%;
  height: 2.5rem;
}
.lunbo {
  padding: 0 3%;
}
.onrList {
  margin-top: 0.3rem;
  justify-content: space-between;
}
.oneItme,
.two {
  width: 49%;
  position: relative;
  margin-bottom: 0.2rem;
}

.oneItme a {
  text-decoration: none;
}
.oneItme img {
  width: 100%;
}
.oneItme h3,
.two h3 {
  font-size: 0.28rem;
  color: #000;
  margin: 0.1rem;
}

.oneItme p,
.two p {
  font-size: 0.24rem;
  color: #949494;
  padding: 0 0.1rem;
}
.two {
  position: relative;
}
.oneItme i,
.two i {
  font-size: 0.3rem;
  color: #e6685b;
  position: absolute;
  bottom: 1rem;
  right: 0.3rem;
  font-style: inherit;
}
.genre {
  font-size: 0.28rem;
  width: 0.6rem;
  background-color: #e6685b;
  color: #fff;
  position: absolute;
  top: 0;
  right: 0;
}
h2 {
  color: #609fbf;
  font-size: 0.48rem;
  margin-top: 0;
  margin-left: 3%;
}
.grids {
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
  margin-bottom: 0.3rem;
}
.grid {
  width: 48%;
  height: 2.5rem;
  position: relative;
}
.grid img {
  width: 100%;
}
.grid p {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 0.3rem;
  padding: 0 0.2rem;
  text-align: left;
}
.two {
  width: 50%;
  margin: 0.2rem;
}
.bto-desc{
  padding: 0 3%;
  width: 100%;
   display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  left: 0;
 
}
.descLeft,.descRight{
  display: block;
}
.descLeft{
  color: #fff;
  font-size: 0.3rem;
}
.descRight{
  color: #e6685b;
  font-size: 0.32rem;
}
</style>
