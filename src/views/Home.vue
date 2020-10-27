<template>
  <div class="home">
    <!-- 头部 -->
    <Top />
    <!-- 轮播 -->
    <Slideshow />
    <!-- 内容 -->
    <Container />
    <!-- 底部 -->
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Top from "@/components/Top.vue";
import Slideshow from "@/components/Slideshow.vue";
import Container from "@/components/Container.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Top,
    Slideshow,
    Container,
    Footer,
  },
};
</script>
