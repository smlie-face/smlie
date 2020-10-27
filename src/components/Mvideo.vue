<template>
  <div class="Mvideo">
    <Small>
      <span slot="itme">M视屏</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <div class="content">
      <div class="c-top">
        <img
          src="https://image13.m1905.cn/uploadfile/2020/1015/thumb_1_519_291_20201015020559631593.png"
          alt=""
        />
        <div class="icon"></div>
        <div class="c-desc">
          中国首次成为全球第一大票仓 2020年度电影票房前三甲出炉
        </div>
      </div>
      <ul class="middle">
       
        <li class="list" v-for="(itme, index) in sum" :key="index">
           <router-link to="/flv">
          <img v-lazy="itme.picture" alt="" />
          <div class="m-icon"></div>
          <div class="m-desc">
            {{ itme.desc }}
          </div>
           </router-link>
        </li>
       
      </ul>
    </div>
    <Small>
      <span slot="itme">独家栏目</span>
    </Small>

    <Lunbo>
      <div class="swiper-slide" v-for="(itme, index) in sum1" :key="index">
        <router-link to="#">
          <img class="s-img" v-lazy="itme.img" alt="" />
        </router-link>
      </div>
    </Lunbo>
    <Small>
      <span slot="itme">精品专栏</span>
    </Small>

    <div class="content">
      <ul class="middle">
        <li class="list" v-for="(itme, index) in sum2" :key="index">
          <img v-lazy="itme.picture" alt="" />
          <div class="m-icon"></div>
          <div class="m-desc">
            {{ itme.desc }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Lunbo from "@/components/Lunbo.vue";
import Small from "@/components/Small_top.vue";
export default {
  components: {
    Lunbo,
    Small,
  },
  data() {
    return {
      sum: [],
      sum1: [],
      sum2: [],
    };
  },
  updated() {
    this.$nextTick(function () {
      new Swiper(".swiper-container", {});
    });
  },
  mounted() {
    this.Axios("index2");
    this.Axios("index3");
    this.Axios("index4");
  },
  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "index2") {
            this.sum = res.data.data;
          } else if (i == "index3") {
            this.sum1 = res.data.data;
          } else if (i == "index4") {
            this.sum2 = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.Mvideo,
ul,
li {
  padding: 0;
  margin: 0;
}

li a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
  padding: 0 3%;
}

.c-top {
  width: 100%;
  padding: 0 3%;
  position: relative;
}
.c-top img {
  display: block;
  width: 100%;
  height: 4rem;
  margin: 0.2rem 0;
}
.c-desc {
  text-align: left;
  font-size: 0.28rem;
  color: #333333;
}
.icon {
  position: absolute;
  bottom: 1rem;
  left: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -3.383rem -0.167rem/4rem 4rem;
}
.list {
  width: 48%;
  height: 3.4rem;
  position: relative;
  margin-top: 0.2rem;
}
.list img {
  display: block;
  width: 100%;
  height: 1.9rem;
}
.m-desc {
  width: 100%;
  text-align: left;
  font-size: 0.28rem;
}
.m-icon {
  position: absolute;
  bottom: 1.4rem;
  width: 0.5rem;
  height: 0.5rem;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -3.383rem -0.167rem/4rem 4rem;
}
.middle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.swiper-slide {
  width: 50% !important;
  padding: 0 3%;
}
.swiper-slide img {
  width: 100%;
}
</style>