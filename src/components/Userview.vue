<template>
  <div class="User" v-if="Userbol">
    <div class="userView">
      <div class="LoginTitle">
        <div class="Registration_login">
          <div class="Registration_login_block"></div>
          <div class="Registration_login_title">注册/登录</div>
        </div>
        <div class="Registration_login_Prompt">登录后我们会第一时间通知您相关进展</div>
      </div>
      <!-- 手机号-->
      <div class="phoneInput">
        <div class="phoneInputTitle">
          <div class="phoneNum">手机号码</div>
          <div class="phonePrompt" v-if="phoneTrue">请输入正确的手机号码</div>
        </div>
        <div class="phoneInput_center">
          <el-input
            placeholder="请输入正确的手机号码"
            v-model="phoneNum"
            size="small"
            @blur="phone_blur()"
            clearable>
          </el-input>
        </div>
      </div>
      <!-- 验证码-->
      <div class="Verification">
        <div class="VerificationTitle">
          <div class="phoneNum">验证码</div>
          <div class="phonePrompt" v-if="VerificationTrue">请输入正确格式的验证码</div>
        </div>
        <div class="Verification_center">
          <div class="Verification_INPUT">
            <el-input
              placeholder="请输入正确的短信验证码"
              v-model="VerificationNum"
              size="small"
              @blur="Verification_blur()"
              clearable>
            </el-input>
          </div>
          <div style="color: #369ED9 !important;">
            <el-button size="small" @click="VerificationHandler" :disabled="vbol">{{VerificationbtnVal}}</el-button>
          </div>
        </div>

      </div>
      <!-- 电子邮箱-->
      <div class="EmailInput">
        <div class="EmailInput_title">
          <div class="EmailNum">电子邮箱</div>
          <div class="phonePrompt" v-if="EmailTrue">请输入正确格式的电子邮箱</div>
        </div>
        <div class="phoneInput_center">
          <el-input
            placeholder="非必填"
            v-model="emailNum"
            size="small"
            clearable>
          </el-input>
        </div>
      </div>
      <!-- 登录注册按钮-->
      <div class="btnLogin">
        <el-button type="primary" size="small" @click="loginHandler()">登&nbsp;&nbsp;录</el-button>
        <el-button size="small" @click="cancelHandler">取&nbsp;&nbsp;消</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'userview',
  data () {
    return {
      tokenbol: true,
      vbol: false,
      VerificationbtnVal: '发送验证码',
      Userbol: false,
      msg: '登录模块',
      phoneNum: '',
      VerificationNum: '',
      emailNum: '',
      phoneTrue: false,
      VerificationTrue: false,
      EmailTrue: false,
      nums: 60,
      clock: ''
    }
  },
  mounted () {
  },
  methods: {
    cancelHandler () {
      this.Userbol = false
    },
    showHandler () {
      this.Userbol = true
    },
    Verification_blur () {
      if (!(/^\d{4}$/.test(this.VerificationNum))) {
        this.VerificationTrue = true
      } else {
        this.VerificationTrue = false
      }
    },
    phone_blur () {
      if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(this.phoneNum))) {
        this.phoneTrue = true
      } else {
        this.phoneTrue = false
      }
    },
    // 获取验证码
    VerificationHandler () {
      const that = this
      Axios({
        url: '/user/getSmsCode',
        method: 'get',
        params: {
          phone: this.phoneNum
        }
      }).then(function (res) {
        console.log(res.data)
        if (res.data.code === '200') {
          that.vbol = true
          that.VerificationbtnVal = that.nums + '秒后可重新获取'
          that.clock = setInterval(that.doLoop, 1000)
        }
      })
    },
    //  短信验证码倒计时函数
    doLoop () {
      this.nums--
      if (this.nums > 0) {
        this.VerificationbtnVal = this.nums + '秒后可重新获取'
      } else {
        clearInterval(this.clock)
        this.vbol = false
        this.VerificationbtnVal = '点击发送验证码'
        this.nums = 60
      }
    },
    // 点击登录
    loginHandler () {
      const that = this
      if (this.phoneNum === null || this.phoneNum === '') {
        this.$alert('请输入正确手机号并发送验证码', '登录出错', {
          confirmButtonText: '确定'
        })
      } else if (this.VerificationNum === null || this.VerificationNum === '') {
        this.$alert('请输入短信验证码', '登录出错', {
          confirmButtonText: '确定'
        })
      } else {
        Axios({
          url: '/user/login',
          method: 'post',
          data: {
            loginName: this.phoneNum,
            password: this.VerificationNum
          },
          // 转成formdata的样式发送过去
          transformRequest: [function (data) {
            // Do whatever you want to transform the data
            let ret = ''
            for (let it in data) {
              ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
          }],
          headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8', 'AccessToken': ''}
        }).then(function (res) {
          if (res.data.errorCode === 40001) {
            that.$alert('验证码验证失败', '登录出错', {
              confirmButtonText: '确定'
            })
          } else if (res.data.code === '200') {
            localStorage.token = res.data.data.accessToken
            localStorage.phoneNum = res.data.data.loginName
            Axios.defaults.headers.post['AccessToken'] = localStorage.token
            Axios.defaults.headers.get['accessToken'] = localStorage.token
            that.$emit('usertoken', res.data.data.accessToken)
            that.$notify({
              title: '登录成功',
              message: '手机验证码匹配成功',
              type: 'success'
            })
            that.cancelHandler()
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.User{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display:flex;
  justify-content:center;
  align-items:center;
}
  .userView{
    width: 450px;
    height: 430px;
    border-radius: 5px;
    background-color: white;
  }
  .userView div{
    text-align: left;
  }
  .LoginTitle{
    margin-top: 30px;
  }
  .Registration_login{
    display: flex;
  }
  .Registration_login_block{
    width: 10px;
    height: 30px;
    background-color: #369ED9;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .Registration_login_title{
    font-size: 16px;
    color: #000000;
    line-height: 30px;
    font-weight: 700;
    margin-left: 20px;
  }
  .Registration_login_Prompt{
    margin-left: 30px;
    font-size: 12px;
    color: #818181;
    font-weight: 700;
    line-height: 14px;
  }
  .phoneInputTitle{
    margin-top: 20px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .phoneNum{
    font-size: 16px;
    color: #000000;
    line-height: 30px;
    font-weight: 700;
  }
  .phonePrompt{
    margin-left: 10px;
    color: #FF0000;
    font-size: 12px;
  }
  .phoneInput_center{
    width: 70%;
    margin-top: 15px;
    margin-left: 30px;
  }
  .VerificationTitle{
    margin-top: 15px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .Verification_center{
    margin-top: 15px;
    margin-left: 30px;
    display: flex;
  }
  .Verification_INPUT{
    width: 50%;
    margin-right: 20px;
  }
  .EmailInput_title{
    margin-top: 15px;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .EmailNum{
    font-size: 16px;
    color: #000000;
    line-height: 30px;
    font-weight: 700;
  }
  .btnLogin{
    margin-top: 20px;
    margin-left: 30px;
  }
</style>
