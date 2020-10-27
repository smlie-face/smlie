<template>
  <van-swipe @change="onChange" :autoplay="3000">
    <van-swipe-item v-for="(itme, index) in image" :key="index">
      <router-link :to="itme.address">
        <img :src="itme.picture" alt="" />
        <span class="title">{{ itme.title }}</span>
      </router-link>
    </van-swipe-item>

    <template #indicator>
      <div class="custom-indicator">{{ current + 1 }}/6</div>
    </template>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      current: 0,
      image: [],
    };
  },
  mounted() {
     this.axios
        .get("http://localhost:3000/slideshow")
        .then((res) => {
            this.image = res.data.data; 
        })
        .catch((err) => {
          console.log(err);
        });
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>

<style scoped>
/* .swiper-slide {
  position: relative;
}
.swiper-slide {
  width: 100%;
  height: 2.5rem;
  position: relative;
}*/
van-swipe-item{
   position: relative;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.title {
  display: block;
  position: absolute;
  bottom: 0;
  left: 3%;
  font-size: 0.3rem;
  color: #fff;
}
.custom-indicator {
  position: absolute;
  left: 0.1rem;
  bottom: 0.3rem;
  padding: 2px 5px;
  font-size: 0.3rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.1);
}
</style>