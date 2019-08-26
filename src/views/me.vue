<template>
    <div>
        <van-grid class="me-title">
         <van-swipe :loop="false" :width="80" :show-indicators="false">
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon1.png">
              <p>私人FM</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon2.png">
              <p>最新电音</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon3.png">
              <p>热门榜单</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon4.png">
              <p>跑步FM</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon5.png">
              <p>亲子频道</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon6.png">
              <p>私人FM</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon7.png">
              <p>私人FM</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon8.png">
              <p>私人FM</p>
            </van-swipe-item>
            <van-swipe-item class="me-title-item">
              <img src="@/assets/img/icon9.png">
              <p>私人FM</p>
            </van-swipe-item>
          </van-swipe>
        </van-grid>
        <!-- 本地信息 -->
        <van-cell-group class="me-location">
          <van-cell title="本地音乐"
                    icon="cart-o" />
          <van-cell title="最近播放"
                    icon="location-o" />
          <van-cell title="下载管理"
                    icon="music-o" />
          <van-cell title="我的收藏"
                    icon="orders-o" />
        </van-cell-group>
          <!-- 创建歌单 -->
        <van-collapse v-model="activeNames"  class="me-location">
          <van-collapse-item title="创建歌单" name="1"></van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
          activeNames: ['1']
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="scss">
    .me-title{
      height:60px;
      padding-top:10px;
      .me-title-item{
        width:100%;
        height:100%;
        text-align:center;
      }
    }
    .me-location{margin-top:20px;}

</style>
