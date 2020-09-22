<template>
  <div class="login-container" :style="{ height: bodyHeight + 'px' }">
    <div
      class="mod-new-reg-bg"
      :style="{backgroundImage:'url('+require('@/assets/image/icon-login-bg.png')+')'}"
    ></div>
    <div class="login-form">
      <div class="title-container"  @click="getSign">
        <img :src="require('@/assets/image/logo.png')" />
      </div>
      <div class="corpname">南通智能污水处理站监控系统</div>
      <el-form autocomplete="off" :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            autocomplete="new-password"  maxlength="20"
            clearable
          >
            <template slot="prepend">
              <img :src="require('@/assets/image/icon-login1.png')" />
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            id="password"
            type="password"
            v-model="loginForm.password"
            placeholder="登录密码"
            autocomplete="new-password" maxlength="20"
            clearable
          >
            <template slot="prepend">
              <img :src="require('@/assets/image/icon-login2.png')" />
            </template>
          </el-input>
        </el-form-item>
        <el-button
          type="primary"
          style="width:100%;margin-bottom:30px; padding: 15px"
          :loading="loading"
          @click.native.prevent="handleLogin"
        >登录</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      bodyHeight: "750",
      loginForm: {
        username: "",
        password: ""
      },

      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      },
      passwordType: "password",
      loading: false,
      showDialog: false
    };
  },
  created() {},
  methods: {
    handleLoginBlur(id, val) {
      this.disabled = !this.disabled;
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          if (this.loginForm.username.trim().length == "") {
            this.$message({
              type: "error",
              message: "用户名或密码错误"
            });
            return false;
          }
          if (this.loginForm.password.trim().length == "") {
            this.$message({
              type: "error",
              message: "用户名或密码错误"
            });
            return false;
          }
          this.loading = true;
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(() => {
              this.loading = false;
              this.$router.push({ path: "/sitemanage" });
            })
            .catch((e) => {
              this.loading = false;
              return false;
            });
        } else {
          console.log("error submit");
          return false;
        }
      });
    },
 //扫码
    getSign() {
      
      let url = location.href.split("#")[0];
      this.request({
        url: "/weixin/getWeixinConfig",
        method: "get",
         params: { url: url }
      }).then(res => {
        let jdata = res.data;
        if (jdata.status == 1) {
          let a = jdata.data;
          wx.config({
            debug: true,
            appId: jdata.data.appid,
            timestamp: jdata.data.timestamp,
            noncestr: jdata.data.noncestr,
            signature: jdata.data.signature,
            jsApiList: ["scanQRCode"]
          });
          wx.error(function(res) {
            alert("出错了：" + res.errMsg); //这个地方的好处就是wx.config配置错误，会弹出窗口哪里错误，然后根据微信文档查询即可。
          });
          //debugger
          wx.ready(function() {
            wx.checkJsApi({
              jsApiList: ["scanQRCode"],
              success: function(res) {
                alert(res);
              }
            });
            wx.scanQRCode({
              needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
              scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
              success: function(res) {
                alert( res.resultStr);
                let result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                let id = result.id;
                let name = result.name;
                console.log(result);
                this.$router.push({
                  path: "/attendance/qrcode",
                  query: {
                    id: id,
                    name: name
                  }
                });
                //location.href=""res.resultStr;//扫描结果传递到的处理页面,跳转到这个页面
                // alert(result);
                // location.href=res.resultStr;//扫描结果传递到的处理页面,跳转到这个页面
                // sessionStorage.setItem('saomiao_result',result);
                //其它网页调用二维码扫描结果：
                // var result = sessionStorage.getItem("saomiao_result");
              },
              error: function(res) {
                console.log(res);
              }
            });
          });

          wx.error(function(res) {
            console.log("微信js-sdk配置失败");
          });

          // timestamp	number

          // noncestr	string

          // jsapi_ticket	string

          // signature	string

          // appid	string
        }
      });
    },
   
 },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight;
    window.addEventListener("resize", function() {
      if (document.activeElement.tagName == "INPUT") {
        window.setTimeout(function() {
          document.activeElement.scrollIntoViewIfNeeded();
        }, 0);
      }
    });
  }
};
</script>
<style>
.login-container {
  height: 100%;
  background-color: #2d3a4b;
}
.login-container .login-form {
  padding: 35px 50px 30px 50px;
}
.login-container .corpname {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
}
.login-container .title-container {
  text-align: center;
  margin-bottom: 35px;
}
.login-container .title-container img {
  margin: 0 auto;
  width: 88px;
}
.login-container .el-form-item {
  margin-bottom: 40px;
}
.login-container .el-input-group__prepend {
  border: 0;
  background: #fff;
  padding: 0 5px;
}
.login-container .el-input-group__prepend img {
  width: 32px;
}
.login-container .is-error .el-input-group__prepend {
  border: 0;
}
.login-container .el-input__inner {
  background: #fff !important;
  border: 6px;
  padding: 0 5px 0 10px;
  color: #338ff6;
  height: 45px;
  border: 0;
}
.login-container input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px white inset !important;
}
.login-container .el-form-item__error {
  padding-top: 5px;
}
.login-container .el-button {
  font-size: 18px;
}
.login-container .el-button:hover {
  background: #338ff6;
  border-color: #338ff6;
}
.login-container .el-button:focus {
  background: #338ff6;
  border-color: #338ff6;
}
</style>