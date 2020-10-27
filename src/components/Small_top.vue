<template>
   <ul class="t-top">
      <li class="t-list">
        <span class="point"></span>
        <div class="item"><slot name="itme"></slot></div>
      </li>
      <li><slot name="more"></slot></li>
     
    </ul>
</template>

<script>
export default {

}
</script>

<style scoped>
ul,
li {
  padding: 0;
  margin: 0;
}
.point {
  display: block;
  width: 0.1rem;
  height: 0.1rem;
  background-color: rgba(74, 146, 255, 0.7);
  margin: auto 0.1rem;
}
.t-top,
.t-list {
  display: flex;
  justify-content: space-between;
  font-size: 0.3rem;
}
.t-top a{
    color: #333333;
    text-decoration: none;
    font-size: 0.3rem;
}
.t-top {
  margin: 0.25rem 0;
}
ul {
  padding: 0 3%;
  list-style: none;
}
.item {
  font-size: 0.36rem;
  font-weight: bold;
}
</style>