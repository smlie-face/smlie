<template>
  <div class="flv">
    <div class="top">
      <img src="//static.m1905.cn/images/vod/h5/zl.jpg" alt="" />
    </div>
    <Common>
      <span slot="desc">视频</span>
    </Common>
    <div class="flvs">
      <h1>黄轩朗读志愿军战士家书 致敬抗美援朝英雄</h1>
      <video
        id="mysql"
        class="video-js"
        controls
        autoplay="autoplay"
        preload="auto"
        poster="https://image14.m1905.cn/uploadfile/2020/1023/thumb_1_290_163_20201023025129378748.jpg"
        src="https://mp4mc1.vodfile.m1905.com/202010261042/2517769bba204e357c9bb626be731a5c/video/2020/10/23/v20201023953RRTA70EDTCUFO/v20201023953RRTA70EDTCUFO.mp4?fr=www&appid=mdefaultmedia20161226"
      ></video>
      <div class="tabs">
        <div class="tab" :class="[{ red: sum }]" @click="flva">
          视屏信息
          <div class="xian" v-if="sum"></div>
        </div>
        <div class="tab" :class="[{ red: sum1 }]" @click="flvb">
          视屏列表
          <div class="xian" v-if="sum1"></div>
        </div>
      </div>
      <div class="descs">
        <div class="desc" v-if="sum">
          <p>
            在电影频道抗美援朝纪念直播中，黄轩朗读志愿军战士吴书写给妻子的一封家书。“赋亭，分别了三个月，内心一直在想念你，但由于环境的限制，为了斗争，为了歼灭敌人，保卫祖国，达到永远的安全，只能克服个人利益。你是快生产的人，要注意，否则我放心不下。”质朴的文字里充满了浓浓的爱意。
          </p>
          <span class="time">2020.10.23</span>
          <div class="boto">
            标签：
            <span>电影频道抗美援朝纪念直播</span>
            <span>黄轩</span>
            <span>志愿军</span>
          </div>
        </div>
        <div class="desc" v-if="sum1">
          <ul class="wenzhang">
            <li>黄轩朗读志愿军战士家书 致敬抗美援朝英雄</li>
            <li>电影《乌海》发布正片片段</li>
            <li>独家探秘《乌海》补拍现场 黄轩时隔七个月再拍戏感觉真好</li>
            <li>直击电影《乌海》拍摄片场 黄轩：感觉还挺梦幻的</li>
            <li>“加油！中国电影”融媒体直播 直击电影《乌海》拍摄现场</li>
            <li>黄轩为中国电影发声：电影院回来了！热爱电影的初心从未改变</li>
            <li>黄轩发烧挺着也要去珠峰，用信念在扶贫！</li>
            <li>黄轩发烧坚持登珠峰引发热议 《紧急救援》林超贤化身“水怪林”</li>
            <li>《只有芸知道》黄轩演绎角色靠父亲帮忙 选择和观众保持距离</li>
            <li>《只有芸知道》忠贞爱情打动影迷 首映礼黄轩被“硬核表白”</li>
            <li>《只有芸知道》黄轩、杨采钰“相濡以沫” 观众感言：突然想结婚了</li>
            <li>《只有芸知道》取材真实爱情故事 黄轩、杨采钰拍电影像过日子</li>
            <li>华语青年电影周在武汉开幕 胡歌透露体验生活的“秘密武器”</li>
            <li>亚洲影视人共赴光影之约 合拍电影探索亚洲文明交流与互鉴</li>
            <li>电影日历：文艺范与少年感兼具 黄轩生日快乐</li>
            <li>王珞丹差点搞个大新闻！明目张胆偷拍黄轩约妹子“办事”！</li>
            <li>黄轩首次参加华表奖很兴奋 几个细节透露出绅士风度</li>
            <li>华表奖《妖猫传》再现盛世大唐 “极乐之宴”极尽奢靡空前盛大</li>
            <li>陈凯歌《妖猫传》入围华表奖 “瓜皮幻术”凭空变物惊呆众人</li>
            <li>陈凯歌奇幻巨作《妖猫传》入围华表奖 茶杯变出蜘蛛吓死人</li>
            <li>黄轩调研拉萨绿色健康产业 助力文化扶贫送电影进校园</li>
            <li>黄轩克服高反西藏调研 纪念改革开放四十年《影响》即将开播</li> 
            <li>劲爆！张榕容约黄轩一起干点刺激的事！|影人志</li>
            <li>一周快评：成龙宝刀不老 妖猫看尽半个盛唐</li>
            <li>电影全解码：多面演员黄轩——成长中，未定型</li>
            <li>多面黄轩“承包”贺岁档 多点开花未来潜力无限</li> 
            <li>一周影市全媒体聚焦：电影新力量论坛取得圆满成功</li> 
            <li>黄轩为《妖猫传》卖力拉票 感慨演诗人难度不小</li> 
            <li>黄轩：德艺双馨从点滴做起 成功与坎坷并存</li> 
            <li>《非凡任务》《嫌疑人X的献身》满意度领跑春季档</li>
          </ul>
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
      sum: true,
      sum1: false,
    };
  },
  methods: {
    flva() {
      this.sum = true;
      this.sum1 = false;
    },
    flvb() {
      this.sum = false;
      this.sum1 = true;
    },
  },
};
</script>

<style scoped>
.flvs {
  padding: 0 3%;
}
h1 {
  font-size: 0.42rem;
  font-weight: bold;
}
video {
  width: 100%;
  height: 3.9rem;
}
img {
  width: 100%;
  height: 1.2rem;
}
.tabs {
  margin-top: 0.2rem;
  display: flex;
  justify-content: left;
  font-size: 0.28rem;
  background-color: #f6f6f6;
}
.tab {
  width: 30%;
  text-align: center;
  line-height: 0.8rem;
  position: relative;
}
.red {
  color: #cc3f2e;
}
.xian {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.05rem;
  background-color: #cc3f2eed;
}
.desc {
  position: relative;
  margin-bottom: 0.3rem;
}
.desc p {
  padding: 5%;
  line-height: 0.6rem;
  font-size: 0.24rem;
  color: #666;
}
.time {
  position: absolute;
  top: 4rem;
  right: 0;
  font-size: 0.24rem;
  color: #666;
}
.boto {
  color: #000;
  font-size: 0.28rem;
}
.boto span {
  display: inline-block;
  margin-right: 0.2rem;
  color: #999;
  background-color: #eee;
  border-radius: 0.04rem;
}
ul{
  padding: 0.5rem;
}
li{
  font-size: 0.28rem;
  padding: 0.1rem 0;
}
</style>
