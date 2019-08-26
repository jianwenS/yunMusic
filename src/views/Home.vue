<template>
  <div class="home-title">
    <!-- 顶部 -->
    <van-grid :border="false"
              :column-num="5">
      <van-grid-item>
        <van-icon name="wap-nav"
                  @click="left_show = !left_show" />
      </van-grid-item>
      <van-grid-item>
        <router-link tag="span" to="/home/me">
          我的
        </router-link>
      </van-grid-item>
      <van-grid-item>
        <router-link tag="span" to="/home/find">
          发现
        </router-link>
      </van-grid-item>
      <van-grid-item>
         <router-link tag="span" to="/home/vio">
          视频
        </router-link>
      </van-grid-item>
      <van-grid-item>
        <van-icon name="search" />
      </van-grid-item>
    </van-grid>
    <!-- 左侧弹出层 -->
    <van-popup v-model="left_show"
               position="left"
               :style="{ height: '100%' ,width: '80%' }">
      <div class="left_show_main">
        <div class="left_show_top">
          <div class="left_show_top_img">
            <img src="https://f10.baidu.com/it/u=1735870454,3259499102&fm=72" />
            <div class="left_show_top_user">
              <p class="userName">微风~</p>
              <p class="qd">
                <van-icon name="points" />签到
              </p>
            </div>
          </div>
        </div>
        <!-- 下半部分 -->
        <div class="left_show_bom">
          <!-- 消息通知栏 -->
          <div class="left_show_bom_message">
            <van-grid :border="false">
              <van-grid-item icon="envelop-o"
                             text="我的消息" />
              <van-grid-item icon="friends-o"
                             text="我的好友" />
              <van-grid-item icon="photo-o"
                             text="个性换肤" />
              <van-grid-item icon="bullhorn-o"
                             text="听歌识曲" />
            </van-grid>
          </div>
          <!-- 表格 -->
          <van-cell-group>
            <van-cell title="演出"
                      value="雅尼演唱会"
                      icon="balance-pay" />
            <van-cell title="商城"
                      icon="cart-o" />
            <van-cell title="附近的人"
                      icon="location-o" />
            <van-cell title="口袋铃声"
                      icon="music-o" />
            <van-cell title="我的订单"
                      icon="orders-o" />
            <van-cell title="定时停止播放"
                      icon="play-circle-o" />
            <van-cell title="扫一扫"
                      icon="scan" />
            <van-cell title="音乐闹钟"
                      icon="aim" />
            <van-cell title="音乐云盘"
                      icon="discount" />
            <van-cell title="在线听歌"
                      icon="browsing-history-o" />
          </van-cell-group>
        </div>
      </div>
      <!-- 底部 -->
      <div class="footer_message">
        <van-grid :border="false"
                  :column-num="3">
          <van-grid-item>
            <span>夜间模式</span>
          </van-grid-item>
          <van-grid-item>
            <span>设置</span>
          </van-grid-item>
          <van-grid-item>
            <span>退出</span>
          </van-grid-item>
        </van-grid>
      </div>
    </van-popup>
    <!-- 路由出口 -->
    <div class="router-main">
      <router-view />
    </div>
    <footer class="video-footer">
      <div>
        <img src="@/assets/img/icon1.png" />
        <span>曾经的你</span>
      </div>
      <div>
         <van-icon class="name" name="play-circle-o" />
         <van-icon class="cz" name="like-o" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      left_show: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.home-title {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:50px;

  .van-grid-item__content {
    padding: 0.2rem;
  }
  .van-icon,
  .van-icon::before {
    font-size: 20px;
  }
  span {
    font-size: 14px;
  }
}
// 左侧top
.left_show_main {
  .left_show_top {
    background: #f7e7d3;
    height: 200px;
    width: 100%;
    padding-top: 30px;
    padding-left: 30px;

    // 图片
    .left_show_top_img {
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }

    // 用户
    .left_show_top_user {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      line-height: 30px;

      .userName {
        font-size: 16px;
      }
      .qd {
        width: 80px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fe3c38;
        height: 30px;
        margin-right: 10px;
        border-radius: 16px;
        color: #ffffff;
      }
    }
  }
  // 下半部分
  .left_show_bom {
    padding: 0 20px;
    .left_show_bom_message {
      padding: 10px 0;
      border-bottom: 0.5px solid #eeeeee;

      /deep/ .van-grid-item__icon {
        color: #ea4b39;
      }
      /deep/ .van-grid-item__text {
        color: #000000;
      }
    }
    .van-cell {
      padding: 0.26rem 0;
    }
  }
}
.router-main{padding:0 20px;}
.video-footer {
  display:flex;
  padding:0 20px;
  border-top:0.5px solid #eeeeee;
  height:60px;
  align-items:center;
  width:100%;
  box-sizing:border-box;
  position:fixed;
  bottom:0;
  left:0;
  }
  
.video-footer{
    div{
      width:50%;
      display:flex;
      align-items:center;
      justify-content:flex-start;
      text-align:left;

      span{margin-left:10px;}
    }
    div:last-child{
      justify-content:flex-end;

      i{margin:0 10px;}
    }
}
</style>
