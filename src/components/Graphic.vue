<template>
  <div class="Graphic">
    <Small>
      <span slot="itme">M图文·新闻资讯</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <ul class="news">
      <li class="new" v-for="(itme, index) in mess3" :key="index">
        <router-link to="#">{{ itme.text }}</router-link>
      </li>
    </ul>
    <Small>
      <span slot="itme">M图文·深度报道</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <div class="content">
      <ul>
        <li v-for="(itme, index) in mess" :key="index">
          <div>
            <img v-lazy="itme.picture" alt="" />
          </div>
          <div class="desc">{{ itme.desc }}</div>
        </li>
      </ul>
    </div>
    <Small>
      <span slot="itme">电影态度</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>

    <div class="c-top">
      <img
        src="https://image11.m1905.cn/uploadfile/2020/1016/thumb_1_262_149_20201016052635115493.jpg"
        alt=""
      />
      <div class="icon"></div>
    </div>
    <ul class="news">
      <li class="new" v-for="(itme, index) in mess4" :key="index">
        <router-link to="#">{{ itme.text }}</router-link>
      </li>
    </ul>

    <Lunbo style="margin: 0.3rem 0">
      <div class="swiper-slide" v-for="(itme, index) in mess1" :key="index">
        <div class="expertBorder"></div>
        <div class="expText">
          <div class="expName">
            <span class="namespan">{{ itme.v_name }}</span>
            <span class="expertTips">{{ itme.desc }}</span>
          </div>
          <p class="expDes">
            {{ itme.content }}
          </p>
        </div>
      </div>
    </Lunbo>
    <Small>
      <span slot="itme">电影号</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <div class="content">
      <ul>
        <li v-for="(itme, index) in mess2" :key="index">
          <div>
            <img v-lazy="itme.pictrue" alt="" />
          </div>
          <div class="message" style="margin-left: 3%">
            <div class="desc">{{ itme.title }}</div>
            <div class="authors">
              <img v-lazy="itme.portrait" alt="" />
              <span class="author">{{ itme.desc }}</span>
            </div>
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
      mess: [],
      mess1: [],
      mess2: [],
      mess3: [],
      mess4: [],
    };
  },
  updated() {
    this.$nextTick(function () {
      new Swiper(".swiper-container", {});
    });
  },
  mounted() {
    this.Axios("index5");
    this.Axios("index6");
    this.Axios("index7");
    this.Axios("essay");
    this.Axios("essay1");
  },
  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "index5") {
            this.mess = res.data.data;
          } else if (i == "index6") {
            this.mess1 = res.data.data;
          } else if (i == "index7") {
            this.mess2 = res.data.data;
          } else if (i == "essay") {
            this.mess3 = res.data.data;
          } else if (i == "essay1") {
            this.mess4 = res.data.data;
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
.Graphic,
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
.new {
  margin-top: 0.2rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 0.02rem solid #ccc;
}
.new a {
  font-size: 0.31rem;
  color: #333333;
  text-align: center;
}
.content,
li {
  margin-top: 0.3rem;
}
.desc {
  margin: 0.2rem 0 0 0.2rem;
  font-size: 0.3rem;
  color: #333333;
  text-align: left;
}
.content li {
  display: flex;
  justify-content: space-between;
}
li img {
  width: 3rem;
  height: 1.7rem;
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

.icon {
  position: absolute;
  bottom: 0rem;
  left: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -3.383rem -0.167rem/4rem 4rem;
}
.swiper-slide {
  width: 80% !important;
  height: 2.62rem;
  position: relative;
  border: 0.02rem solid #ccc;
  margin-left: 0.3rem;
}
.expertBorder {
  height: 0.366rem;
  width: 0.35rem;
  position: absolute;
  top: -1px;
  left: -1px;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -1.383rem -1.866rem/5rem 5rem;
}
.expName span {
  display: inline-block;
}
.expName {
  margin: 0.2rem 0;
}
.namespan {
  font-size: 0.34rem;
  font-weight: bold;
}
.expertTips {
  background-color: #c59b58;
  border-radius: 0.1rem;
  padding: 1% 2%;
  font-size: 0.2rem;
  color: #fff;
  margin-left: 0.3rem;
}
.expDes {
  height: 1rem;
  font-size: 0.3rem;
  color: #666666;
  line-height: 0.5rem;
}
.expText {
  padding: 0 3%;
}
.authors {
  margin-top: 0.2rem;
}
.authors img {
  display: inline-block;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
  margin: 0 0.2rem 0 0.2rem;
}
.author {
  display: inline-block;
}
</style>