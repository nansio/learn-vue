<template>
  <div class="login-wrap">
    <div class="content">
      <p class="header-left hy-header">
        数盾风控点查询
      </p>
      <el-form ref="ruleForm"
               :model="ruleForm"
               :rules="rules"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username"
                    placeholder="登录名"
                    prefix-icon="el-icon-my-name"
                    maxlength="30"
                    autocomplete="true"
                    @change="loginInfoChange"
                    @keyup.enter.native="login"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password"
                    type="password"
                    placeholder="密码"
                    prefix-icon="el-icon-my-pwd"
                    maxlength="30"
                    autocomplete="true"
                    @change="loginInfoChange"
                    @keyup.enter.native="login"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
      <div class="forgetpwd">
        忘记密码?
      </div>
      <transition name="fade">
        <div v-show="errMsg" class="err-msg">{{ errMsg }}</div>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {
  },
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      }
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100vw;
  height: 100vh;
  background: url('../../assets/login_bg.jpg') no-repeat ;
  background-size: 100% 100%;
  // background-position: left top -72px;
  position: relative;
}

.content {
  min-width: 330px;
  width: 23%;
  height: 320px;
  // background: #1d2832;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  right: 45px;
}
</style>
