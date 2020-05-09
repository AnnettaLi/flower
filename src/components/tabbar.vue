<template>
  <div class="footbar">
    <router-link to="/home" tag="div">
      <span>
        <img
          v-if="this.$route.path=='/home'"
          src="http://img.weiye.me/zcimgdir/album/file_59158b51df3be.png"
          alt="图片加载失败"
        />
        <img v-else src="http://img.weiye.me/zcimgdir/album/file_59158b522c9c6.png" alt="图片加载失败" />
      </span>
      <span>首页</span>
    </router-link>
    <router-link to="/type" tag="div">
      <span>
        <img
          v-if="this.$route.path=='/type'"
          src="http://img.weiye.me/zcimgdir/album/file_59158b51ea80a.png"
          alt="图片加载失败"
        />
        <img v-else src="http://img.weiye.me/zcimgdir/album/file_59158b526fa8f.png" alt="图片加载失败" />
      </span>
      <span>分类</span>
    </router-link>
    <router-link to="/my" tag="div">
      <span>
        <img
          v-if="this.$route.path=='/my'"
          src="http://img.weiye.me/zcimgdir/album/file_59158b523abbe.png"
          alt="图片加载失败"
        />
        <img v-else src="http://img.weiye.me/zcimgdir/album/file_59158b5289e78.png" alt="图片加载失败" />
      </span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
.footbar {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  background: white;
  border-top: 1px solid #eeeeee;
  color: #999999;
}
img {
  width: 0.24rem;
  height: 0.24rem;
}
.footbar span {
  display: block;
  font-size: 0.14rem;
}
.footbar div {
  flex: 1;
  text-align: center;
}

/* .footbar .router-link-exact-active{
    color: #FABE00;
  } */
.router-link-active {
  color: rgb(76, 51, 35);
}
.footbar .active {
  color: rgb(76, 51, 35);
}
</style>