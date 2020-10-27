<template>
  <div class="film">
    <Small>
      <span slot="itme">M大数据</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <div class="show">
      <span class="wire"></span>
      院线热映
      <span class="wire"></span>
    </div>
    <Lunbo>
      <div class="swiper-slide" v-for="(itme, index) in txt" :key="index">
        <router-link to="">
          <img v-lazy="itme.picture" alt="" />
          <span class="rank">{{ itme.refer }}</span>
          <span class="title">{{ itme.title }}</span>
        </router-link>
      </div>
    </Lunbo>
    <div class="show">
      <span class="wire"></span>
      即将上映
      <span class="wire"></span>
    </div>
    <Lunbo>
      <div class="swiper-slide" v-for="(itme, index) in txt2" :key="index">
        <router-link to="">
          <img v-lazy="itme.picture" alt="" />
          <span class="rank">{{ itme.refer }}</span>
          <span class="title">{{ itme.title }}</span>
        </router-link>
      </div>
    </Lunbo>
    <Small>
      <span slot="itme">封面人物</span>
    </Small>
    <div class="c-top">
      <img
        src="https://image14.m1905.cn/uploadfile/2020/1014/thumb_1_600_312_20201014020105385165.jpg"
        alt=""
      />
      <div class="c-desc">巩俐 《夺冠》中化身郎平 她再次用实力征服观众</div>
      <ul>
        <li class="gong">
          <img
            src="https://image11.m1905.cn/uploadfile/2020/1014/thumb_1_193_199_20201014020145255653.jpg"
            alt=""
          />
        </li>
        <li class="gong">
          <img
            src="https://image14.m1905.cn/uploadfile/2020/1014/thumb_1_193_199_20201014020158752166.jpg"
            alt=""
          />
        </li>
        <li class="gong">
          <img
            src="https://image13.m1905.cn/uploadfile/2020/1014/thumb_1_193_199_20201014020211637990.jpg"
            alt=""
          />
        </li>
      </ul>
    </div>
    <Small>
      <span slot="itme">警匪对决一触即发</span>
    </Small>
    <div class="content">
      <div class="c-top">
        <img
          src="https://image13.m1905.cn/uploadfile/2020/1009/thumb_1_600_382_20201009032028501346.jpg"
          alt=""
          style="height: 4.5rem"
        />
        <div class="icon"></div>
        <div class="refer">8.0</div>
        <div class="c-desc">反贪风暴4</div>
      </div>
      <ul class="videoList">
        <li class="videoItme" v-for="(itme, index) in txt3" :key="index">
          <router-link to="#">
            <img v-lazy="itme.picture" alt="" />
            <div class="videoRefer">{{ itme.rank }}</div>
            <div class="videoDesc">
              {{ itme.title }}
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <Small>
      <span slot="itme">免费大片</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>
    <ul class="videoList">
      <li class="videoItme" v-for="(itme, index) in txt4" :key="index">
        <router-link to="#">
          <img v-lazy="itme.picture" alt="" />
          <div class="videoRefer">{{ itme.rank }}</div>
          <div class="videoDesc">
            {{ itme.title }}
          </div>
        </router-link>
      </li>
    </ul>
    <Small>
      <span slot="itme">本周点播TOP热力榜</span>
    </Small>
    <Lunbo>
      <div class="swiper-slide" v-for="(itme, index) in txt5" :key="index">
        <router-link to="#">
          <img v-lazy="itme.picture" alt="" />
          <div class="videoRefer">{{ itme.rank }}</div>
          <div class="videoDesc">
            {{ itme.title }}
          </div>
        </router-link>
      </div>
    </Lunbo>
    <Small>
      <span slot="itme">CCTV6今日热映</span>
    </Small>
    <Lunbo>
      <div class="swiper-slide" v-for="(itme, index) in txt6" :key="index">
        <router-link to="#">
          <img v-lazy="itme.picture" alt="" />
          <div class="videoRefer">{{ itme.rank }}</div>
          <div class="videoDesc">
            {{ itme.title }}
          </div>
        </router-link>
      </div>
    </Lunbo>
    <Small>
      <span slot="itme">点播合辑</span>
      <span slot="more"> <router-link to="#">更多</router-link></span>
    </Small>

    <div class="c-top">
      <img
        src="https://image11.m1905.cn/uploadfile/2020/0927/thumb_1_600_338_20200927110356211711.jpg"
        alt=""
        style="height: 4.5rem"
      />
      <div class="bottom-desc">
        <span>风雨无阻·奋勇前进——“全面建成小康社会”主题影片展播</span>
      </div>
    </div>
    <div class="bottom">
      <router-link class="b-itme" to="#">更多免费影片</router-link>
      <router-link class="b-itme" to="#">更多VIP影片</router-link>
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
  updated() {
    this.$nextTick(function () {
      new Swiper(".swiper-container", {});
    });
  },
  data() {
    return {
      txt: [],
      txt2: [],
      txt3: [],
      txt4: [],
      txt5: [],
      txt6: [],
    };
  },
  mounted() {
    this.Axios("index8");
    this.Axios("index9");
    this.Axios("index10");
    this.Axios("index11");
    this.Axios("index12");
    this.Axios("index13");
  },
  methods: {
    Axios(i) {
      this.axios
        .get("http://localhost:3000/" + i)
        .then((res) => {
          if (i == "index8") {
            this.txt = res.data.data;
          } else if (i == "index9") {
            this.txt2 = res.data.data;
          } else if (i == "index10") {
            this.txt3 = res.data.data;
          } else if (i == "index11") {
            this.txt4 = res.data.data;
          } else if (i == "index12") {
            this.txt5 = res.data.data;
          } else if (i == "index13") {
            this.txt6 = res.data.data;
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
.show {
  margin-left: 35%;
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.32rem;
  color: #333333;
}
.wire {
  display: inline-block;
  width: 8%;
  height: 0.02rem;
  background-color: #d9d9d9;
  margin-bottom: 0.1rem;
}
.swiper-slide {
  position: relative;
  width: 30% !important;
  margin: 0.3rem 3%;
}
.swiper-slide a {
  text-decoration: none;
  color: #333;
}
.swiper-slide img,
.swiper-slide span {
  display: block;
  width: 100%;
  text-align: center;
}
.swiper-slide img {
  height: 2.7rem;
}
.rank {
  font-size: 0.24rem;
  color: #fff;

  background: #000000;
  opacity: 0.65;
}
.title {
  font-size: 0.28rem;
  margin: 0.01rem 0;
}
.c-top {
  width: 100%;
  padding: 0 3%;
  position: relative;
}
.c-top img {
  width: 100%;
  height: 3.7rem;
}
.c-desc {
  margin: 0.2rem 0;
  font-size: 0.3rem;
  color: #333;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
}
.gong {
  width: 32%;
  height: 2.32rem;
}
.gong img {
  width: 100%;
  height: 100%;
}
.icon {
  position: absolute;
  bottom: 0.6rem;
  left: 0.3rem;
  width: 0.5rem;
  height: 0.5rem;
  background: url(//static.m1905.cn/homepage2020/H5/images/home_sprite.png?t=202009221005)
    no-repeat -3.383rem -0.167rem/4rem 4rem;
}
.refer,
.videoRefer {
  position: absolute;
  bottom: 0.6rem;
  right: 0.4rem;
  font-size: 0.4rem;
  color: #ff9102;
  font-style: italic;
}
.videoList {
  padding: 0 3%;
  flex-wrap: wrap;
}
.videoItme {
  width: 32%;
  position: relative;
  margin-bottom: 0.3rem;
}
.videoItme a {
  text-decoration: none;
  color: #333;
}
.videoItme img {
  width: 100%;
  height: 3.2rem;
}
.videoRefer {
  position: absolute;
  bottom: 0.45rem;
  right: 0.2rem;
}
.videoDesc {
  text-align: left;
  font-size: 0.3rem;
}
.bottom-desc {
  position: absolute;
  top: 0;
  left: 3%;
  background-color: rgba(0, 0, 0, 0.3);
  width: 94%;
  height: 4.5rem;
}
.bottom-desc span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: block;
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
}
.bottom {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 3%;
  margin-top: 0.2rem;
}
.bottom a {
  text-decoration: none;
  color: #666;
  display: inline-block;
  width: 46%;
  height: 0.8rem;
  background-color: #f5f5f5;
  font-size: 0.28rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 0.167rem;
}
</style>