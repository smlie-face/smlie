<template>
  <div class="affect">
    <div class="header">
      <img
        class="logo"
        src="//static.m1905.cn/3g/20130605/images/logo.png"
        alt=""
      />
      <span class="ming">影库</span>
      <img
        class="search"
        src="//static.1905.com/3g/20130605/images/search.png"
        alt=""
      />
    </div>
    <div class="nav">
      <ul class="navlist">
        <li class="navitme">国内热映</li>
        <li class="navitme">国内将映</li>
        <li class="navitme">环球新片</li>
        <li class="navitme">佳片发现</li>
      </ul>
    </div>
    <div class="tab">
      <div class="left">
        <span class="shu"></span>
        <span>国内热映</span>
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <ul class="guo">
      <li class="nei" v-for="(itme,index) in list" :key="index">
        <img v-lazy="itme.picture" alt="">
        <h3>{{itme.title}}</h3>
        <span>{{itme.rank}}</span>
      </li>
    </ul>
    <div class="tab">
      <div class="left">
        <span class="shu"></span>
        <span>国内将映</span>
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <ul class="guo">
      <li class="nei" v-for="(itme,index) in list2" :key="index">
        <img v-lazy="itme.picture" alt="">
        <h3>{{itme.title}}</h3>
      </li>
    </ul>
     <div class="tab">
      <div class="left">
        <span class="shu"></span>
        <span>环球新片</span>
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <ul class="guo">
      <li class="nei" v-for="(itme,index) in list3" :key="index">
        <img v-lazy="itme.picture" alt="">
        <h3>{{itme.title}}</h3>
      </li>
    </ul>
     <div class="tab">
      <div class="left">
        <span class="shu"></span>
        <span>佳片发现</span>
      </div>
      <div class="more">
        更多
      </div>
    </div>
    <ul class="guo">
      <li class="nei" v-for="(itme,index) in list4" :key="index">
        <img v-lazy="itme.picture" alt="">
        <h3>{{itme.title}}</h3>
      </li>
    </ul>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
  data(){
    return{
      list:[],
      list2:[],
      list3:[],
      list4:[],
    }
  },
  mounted(){
this. Axios('film')
this. Axios('film2')
this. Axios('film3')
this. Axios('film4')
  },
  methods:{
  Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "film") {
            this.list = res.data.data;
          } else if (i == "film2") {
            this.list2 = res.data.data;
          } else if (i == "film3") {
            this.list3 = res.data.data;
          }else if (i == "film4") {
            this.list4 = res.data.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }}
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
.header,
.navlist,
.tab ,.guo{
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
  flex-wrap: wrap;
}
.header {
  line-height: 0.9rem;
}
.header img,
header span {
  display: block;
}
.logo {
  width: 35%;
  height: 0.88rem;
  margin: auto 0;
}
.search {
  width: 0.68rem;
  height: 0.68rem;
  margin: auto 0;
}
.ming {
  margin-right: 40%;
  font-size: 0.32rem;
  color: #b1b1b1;
}
.nav {
  margin-bottom: 0;
}
.navlist {
  background-color: #333f51;
}
.navitme {
  width: 25%;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
  padding: 0.2rem 0;
}
.tab {
  padding: 0;
  margin: 0 0 0.3rem;
  background-color: #e3e3e3;
  height: 0.84rem;
  line-height: 0.84rem;
  text-align: center;
}
.left span {
  display: inline-block;
  font-size: 0.36rem;
}
.shu {
  width: 0.05rem;
  height: 0.4rem;
  background-color: #038bd9;
  margin: -0.05rem 0.1rem -0.05rem 0.2rem;
}
.more{
  width: 0.9rem;
border-left: 0.01rem solid #ccc;
}

.nei{
  width: 30%;
  position: relative;
}
.nei img{
  width: 100%;
  height: 3rem;
}
.nei h3{
  font-size: 0.3rem;
  color: #333;
  margin: 0.1rem 0 0.2rem;
}
.nei span{
position: absolute;
bottom: .8rem;
right: .3rem;
color: #dd3068;
font-size: 0.24rem;
}
</style>
