<template>
  <div>
    <div class="login">
      <img src="@/assets/img/icon.png">
      <van-button type="default"
                  @click="loginFn">手机号登录</van-button>
    </div>
    <!-- 手机号登录 -->
    <van-popup v-model="show"
               position="bottom"
               :style="{ height: '100%' }">
      <van-nav-bar title="手机号登录"
                   left-arrow
                   @click-left="onClickLeft" />
      <van-cell-group>
        <van-field v-model="loginFrom.phone"
                   required
                   clearable
                   label="手机号"
                   placeholder="请输入手机号" />
            <van-field v-model="loginFrom.password"
                       type="text"
                       clearable
                       label="密码"
                       placeholder="请输入密码"
                       required />
        <van-row class="login-btn">
          <van-col span="24">
                <van-button size="large" type="info" @click="testPhone">确认</van-button>
          </van-col>        
        </van-row>
      </van-cell-group>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { parse } from 'url';
export default {
  props: {},
  data() {
    return {
      show: false,
      loginFrom: {
        phone: "",
        password: ''
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    loginFn() {
      this.show = !this.show;
    },
    onClickLeft () {
      this.loginFn();
    },
    testPhone() {
      if(!(/^1[3456789]\d{9}$/.test(this.loginFrom.userNmae)) && (this.loginFrom.password.length == '') ) {
          Toast('手机号或密码错误');
          return false;
      }
      axios.get('http://localhost:3000/register/cellphone?phone=13653148203&password=123456&captcha=3656&nickname=w123456').then(function(res) {
        console.log(res)
      })
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.login {
  position: fixed;
  background: #de3028;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  img {
    width: 100px;
    height: 100px;
    position: fixed;
    left: 50%;
    top: 30%;
    margin-left: -50px;
  }

  button {
    width: 200px;
    height: 30px;
    line-height: 30px;
    position: fixed;
    left: 50%;
    bottom: 10%;
    border-radius: 25px;
    margin-left: -100px;
  }
}
.login-btn{
  padding:0 20px;
  margin-top:20px;
  button{
    height:40px;
    line-height:40px;
    border-radius:25px;
  }  
}
</style>
