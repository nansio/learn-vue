export default {
  data() {
    return {
      conflictingVar: 'mixin Val',
      message: 'sup? this is message from mixins'
    }
  },
  methods: {
    hello() {
      console.log('hello from mixin~')
    },
    setUserName() {
      this.username = 'new username set from mixin'
    }
  }
}
