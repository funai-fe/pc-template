<template>
  <el-dialog
    :visible.sync="showDialog"
    title="登录"
    @close="closeDialog"
    :close-on-click-modal="false"
  >
    <transition :name="transitionName" mode="out-in">
      <!-- 登录表单 -->
      <div v-if="currentForm === 'loginForm'" :key="'loginForm'">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules">
          <!-- 登录表单的内容 -->
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button @click="switchForm('registerForm')">注册</el-button>
          <el-button @click="switchForm('resetPasswordForm')"
            >忘记密码</el-button
          >
        </el-form>
      </div>

      <!-- 注册表单 -->
      <div v-else-if="currentForm === 'registerForm'" :key="'registerForm'">
        <el-form
          :model="registerForm"
          ref="registerForm"
          :rules="registerRules"
        >
          <!-- 注册表单的内容 -->
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="registerForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
          <el-button @click="switchForm('loginForm')">返回登录</el-button>
        </el-form>
      </div>

      <!-- 重置密码表单 -->
      <div v-else :key="'resetPasswordForm'">
        <el-form
          :model="resetPasswordForm"
          ref="resetPasswordForm"
          :rules="resetPasswordRules"
        >
          <!-- 重置密码表单的内容 -->
          <el-form-item label="用户名" prop="username">
            <el-input v-model="resetPasswordForm.username"></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newPassword">
            <el-input
              type="password"
              v-model="resetPasswordForm.newPassword"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="handleResetPassword"
            >重置密码</el-button
          >
          <el-button @click="switchForm('loginForm')">返回登录</el-button>
        </el-form>
      </div>
    </transition>
  </el-dialog>
</template>
  
  <script>
export default {
    name:'GlobalLoginDialog',
  data() {
    return {
      showDialog: false,
      currentForm: "loginForm",
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      registerForm: {
        username: "",
        password: "",
      },
      registerRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      resetPasswordForm: {
        username: "",
        newPassword: "",
      },
      resetPasswordRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        newPassword: [
          { required: true, message: "请输入新密码", trigger: "blur" },
        ],
      },
      transitionName: "fade", // 使用原地渐变透明的过渡动画类名
    };
  },
  methods: {
    closeDialog() {
      this.showDialog = false;
    },
    handleLogin() {
      // 处理登录逻辑
      // 登录成功后，关闭弹窗
      this.closeDialog();
    },
    handleRegister() {
      // 处理注册逻辑
      // 注册成功后，关闭弹窗
      this.closeDialog();
    },
    handleResetPassword() {
      // 处理重置密码逻辑
      // 重置密码成功后，关闭弹窗
      this.closeDialog();
    },
    switchForm(formName) {
      // 设置过渡动画类名，切换表单时触发动画效果
      this.transitionName = "fade";
      // 切换表单
      this.currentForm = formName;
    },
  },
};
</script>
  
  <style lang="scss" scoped>
/* 定义渐变过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.el-dialog__wrapper {
  background: #020202;
  opacity: 0.78;
}
</style>
  