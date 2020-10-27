<template>
  <div class="zgdygc">
    <Common>
      <span slot="desc">电影号</span>
    </Common>
    <div class="content">
      <div class="z-list" v-for="(itme,index) in list" :key="index">
        <img class="big" v-lazy="itme.pictrue" alt="" />
        <div class="z-right">
          <p>{{itme.title}}</p>
          <div class="portrait">
            <img v-lazy="itme.portrait" alt="" />
            <span>{{itme.desc}}</span>
            <span>{{itme.time}}</span>
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
      list: [],
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/graphic")
      .then((res) => {
        console.log(res);
        this.list = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.z-list{
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 3% ;
}
.big{
  display: block;
  width: 50%;
  height: 1.8rem;
}
.z-right {
  margin-left: 0.2rem;
}
.portrait img,.portrait span{
  display: inline-block;
  margin-right: 0.1rem;
}
.portrait img{
  border-radius: 50%;
  width: 0.52rem;
  height: 0.52rem;
}
p{
  font-size: 0.3rem ;
  color: #333;
  text-align: left;
}
.portrait span{
   font-size: 0.24rem ;
  color: #666;
}
</style>
