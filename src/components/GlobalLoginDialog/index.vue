<template>
  <div class="login-container" v-if="showDialog">
    <div class="bg-wrap"></div>
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
    >
      <div class="form-content">
        <div class="top-content">
          <img class="close-icon" @click="handleClose" src="@/assets/common/icon_close_sel@2x.png" />
          <div class="title-container">
            <h3 class="title">登录</h3>
          </div>

          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              placeholder="用户名/手机号"
              name="username"
              type="text"
              tabindex="1"
              auto-complete="on"
            />
          </el-form-item>

          <el-form-item class="password" prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="密码"
              name="password"
              tabindex="2"
              auto-complete="on"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>

          <div class="register-resetpwd">
            <div class="register">立即注册</div>
            <div class="divider"></div>
            <div class="resetpwd">忘记密码</div>
          </div>

          <el-button
            :loading="loading"
            type="primary"
            class="login-btn"
            @click.native.prevent="handleLogin"
            >账号密码登录</el-button
          >
          <el-button
            :loading="loading"
            type="primary"
            class="tourist-btn"
            @click.native.prevent=""
            >游客免费体验</el-button
          >
        </div>
        <div class="footer-content">
          <img class="footer-bg" src="@/assets/common/image_login@2x.png" />
          <p class="tips">FUNAI 有 意 思 的 A I 体 验 馆</p>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";

export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value){
        callback(new Error('用户名/手机号不能为空'))
      } else if (!validUsername(value)) {
        callback(new Error("用户名/手机号长度在2-15位之间"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 2 || value.length > 18) {
        callback(new Error('密码长度在2-18位之间'))
      } else {
        callback()
      }
    };
    return {
      showDialog: false,
      loginForm: {
        username: "admin",
        password: "111111",
        loginType: 0, // 默认普通登录
      },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword },
        ],
      },
      sucCallBack: () => {},
      failCallBack: () => {},
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  methods: {
    handleOpen(sucCallBack, failCallBack) {
      this.sucCallBack = sucCallBack || (() => {})
      this.failCallBack = failCallBack || (() => {})
      this.showDialog = true
    },
    handleClose() {
      this.showDialog = false
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {
              this.$message.success("登录成功！")
              this.handleClose()
              this.sucCallBack()
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
          console.log("请正确填写登录信息");
          return false;
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */

$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 1010;

  .bg-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(2, 2, 2, 0.78);
    // background: #020202;
    // opacity: 0.78;
  }
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    background: #f9fafb !important;
    border-radius: 8px !important;
    margin-bottom: 36px !important;
    color: #454545;

    .el-input__inner {
      color: #000b58;
    }
    &.password {
      margin-bottom: 12px !important;
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_blue: #000b58;
// $light_gray: #000b58;

.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;

  .form-content {
    position: relative;
    // padding: 0 35px 0;
    background-color: #fff;
    border-radius: 30px;
    .top-content {
      padding: 50px 35px 0;
    }
  }
  .login-form {
    padding: 0 35px 0;
    position: relative;
    width: 562px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    // background-color: #fff;
    // border-radius: 30px;
  }

  .register-resetpwd {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #6c727f;
    line-height: 17px;
    margin-bottom: 15%;
    .register,
    .resetpwd {
      cursor: pointer;
    }
    .divider {
      width: 1px;
      height: 12px;
      border: 0.5px solid #e4e4e4;
      margin: 0 10px;
    }
  }

  .login-btn {
    width: 100%;
    margin-bottom: 30px;
    padding: 18px 20px;
    background-color: $dark_blue;
    border-radius: 8px;
    border-color: $dark_blue;
  }

  .tourist-btn {
    width: 100%;
    margin-bottom: 30px;
    padding: 18px 20px;
    margin-left: 0;
    background: #ffffff;
    border-radius: 8px;
    border: 2px solid $dark_blue;
    color: $dark_blue;
  }

  .footer-content {
    position: relative;
    height: 140px;
    display: flex;
    justify-content: center;
    .footer-bg {
      width: 100%;
    }
    .tips {
      position: absolute;
      top: 70px;
      font-size: 14px;
      font-family: PingFangSC-Thin, PingFang SC;
      color: $dark_blue;
      line-height: 20px;
      letter-spacing: 4px;
      text-align: center;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_blue;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .close-icon {
    position: absolute;
    right: 30px;
    top: 30px;
    width: 24px;
    height: 24px;
    z-index: 10;
    cursor: pointer;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 28px;
      font-family: PingFangSC-Semibold, PingFang SC;
      line-height: 40px;
      color: $dark_blue;
      margin: 0 auto 50px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_blue;
    cursor: pointer;
    user-select: none;
  }
}

@media (max-width: 1440px) {
  .login-container {
    .login-form {
      width: 450px;

      .top-content {
        padding: 30px 35px 0;
      }

      .title {
        font-size: 22px;
        margin: 0 auto 30px auto;
      }

      .el-form-item {
        margin-bottom: 25px !important;
      }
      .register-resetpwd {
        margin-bottom: 10%;
      }
      .login-btn,
      .tourist-btn {
        margin-bottom: 20px;
      }
    }
    .footer-content {
      height: 100px;
      .tips {
        top: 45px;
      }
    }
  }
}
</style>
