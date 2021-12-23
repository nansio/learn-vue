<template>
  <div class="custom-directives">
    <div v-blinking class="blinking-text">这段文字的闪烁效果是使用全局定义的用户指令v-blinking实现的</div>
    <el-input v-model="message" v-focus placeholder="请输入信息" size="normal" />
    <div style="margin-top:10px;">
      <el-input v-model="display" v-style="style" placeholder="实时展示的信息" size="normal" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Directives',
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    },
    style: {
      bind: function(el, binding) {
        el.style.color = binding.value.color
        el.style.fontSize = binding.value.fontSize
      }
    }
  },
  data() {
    return {
      message: '',
      display: '',
      style: {
        color: 'red',
        fontSize: '20px'
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
.custom-directives{
  padding: 30px;
  .blinking-text{
    padding-bottom: 20px;
  }
}
</style>
