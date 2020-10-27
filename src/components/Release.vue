<template>
  <div class="release">
    <div class="main" v-for="(itme, index) in image" :key="index">
      <h3>{{ itme.title }}</h3>
      <div class="releases">
        <div class="releaseDesc">
          <p>
            {{ itme.clearfloat }}
          </p>
          <div class="releaseTime">
            <span> {{ itme.time }}</span>
            <span> {{ itme.field1 }}</span>
            <span> {{ itme.field3 }}</span>
          </div>
        </div>
        <img v-lazy="itme.picture" alt="" />
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: ["msg"],
  data() {
    return {
      sum: 0,
      image: [],
    };
  },
  watch: {
    msg(val, oldVal) {
      console.log(val, oldVal, 666);
      this.Axios(val);
    },
  },
  mounted() {
    this.Axios(0);
  },
  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/new_bottom?id=" + i)
        .then((res) => {
          this.image = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.release {
  margin-bottom: 1.3rem;
}
.main {
  padding: 0 3%;
}
h3 {
  font-size: 0.3rem;
  font-weight: bolder;
}
.releases {
  display: flex;
  justify-content: space-between;
}
.releases img {
  display: block;
  width: 30%;
}
.releaseDesc p {
  font-size: 0.28rem;
  width: 80%;
}
.releaseTime span {
  display: inline-block;
  font-size: 0.24rem;
  color: #999;
  margin-right: 0.2rem;
}
</style>