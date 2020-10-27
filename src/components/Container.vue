<template>
  <div class="container">
    <div class="top">
      <router-link to="#">
        <div class="top-img"></div>
        <div class="top-desc">
          《求是》杂志发表习近平总书记重要文章《在全国抗击新冠肺炎疫情表彰大会上的讲话》
        </div>
      </router-link>
    </div>
    <div class="content">
      <ul>
        <router-link to="/article">
        <li v-for="(itme, index) in message" :key="index">
          <div>
            <img v-lazy="itme.picture" alt="" />
          </div>
          <div class="desc">{{ itme.desc }}</div>
        </li>
        </router-link>
      </ul>
    </div>
    <div class="ray">
      <img
        src="https://image13.m1905.cn/uploadfile/2020/0930/thumb_1_600_211_20200930043153962996.jpg"
        alt=""
      />
      <span class="corner">专题</span>
    </div>
    <!-- 视屏 -->
    <Mvideo />
    <!-- 图文 -->
    <Graphic />
    <!-- 电影 -->
    <Film />
  </div>
</template>

<script>
import Mvideo from "@/components/Mvideo.vue";
import Graphic from "@/components/Graphic.vue";
import Film from "@/components/Film.vue";

export default {
  components: {
    Mvideo,
    Graphic,
    Film,
  },

  data() {
    return {
      message: [],
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/index")
      .then((res) => {
        this.message = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.container,
ul,
li {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
}
.top a {
  width: 100%;
  height: 1.44rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
}
li img {
  width: 3rem;
  height: 1.7rem;
}
.top-img {
  width: 1rem;
  height: 1rem;
  margin: auto;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -0.067rem -1.367rem/4rem 4rem;
}
.top-desc {
  margin: auto;
  width: 94%;
  text-align: left;
  font-size: 0.3rem;
  font-weight: bold;
  color: #333333;
  margin-left: 0.1rem;
}
.top a {
  text-decoration: none;
  color: #000;
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
.ray {
  margin: 0.5rem 0;
  width: 100%;
  height: 2.5rem;
  padding: 0 3%;
  position: relative;
}
.ray img {
  width: 100%;
  height: 100%;
}
.corner {
  width: 10%;
  height: 0.5rem;
  color: #fff;
  line-height: 0.5rem;
  text-align: center;
  background-color: rgba(74, 146, 255, 0.7);
  border-bottom-left-radius: 0.167rem;
  position: absolute;
  top: 0;
  right: 3%;
}
</style>