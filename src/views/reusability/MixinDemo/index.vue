<template>
  <div style="padding:24px;">
    <h1>What happens when conflicts?</h1>
    <div class="row">
      username: {{ username }}
    </div>
    <div class="row">
      conflicting var: {{ conflictingVar }}
    </div>
    <div class="row">
      <button @click="setUserName">New UserName</button>
    </div>
    <h1>Following content comes from mixins</h1>
    <div class="row">
      message from mixins: {{ message }}
    </div>
  </div>
</template>

<script>
import mixins from './mixin'
export default {
  name: 'MixinDemo',
  mixins: [mixins],
  data() {
    return {
      username: 'component username',
      conflictingVar: 'component val'
    }
  },
  created() {
    console.log('log from component created')
  },
  methods: {
    goodbye() {
      console.log('see ya~')
    },
    setUserName() {
      this.username = 'New username set from component'
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  font-size: 18px;
  padding: 8px;
  font-style: italic;
  margin-bottom: 20px;
}
</style>
