<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
import jsTypeText from 'js-type-text'
export default {
  name: 'TypingText',
  components: {
  },
  data() {
    return {
      text: ''
    }
  },
  created() {
    jsTypeText.start({
      text: `Numquam repudiandae ut ut facere exercitationem quia. Dolorem facilis molestiae velit illum vel eius ea provident. Mollitia quia officiis totam consequatur vel dolor perferendis est eum.
              Odit eum impedit maiores. Quidem minus harum aut molestiae nihil quia voluptatem et.
              Quis voluptates molestiae voluptas explicabo perferendis dolore et alias velit. Architecto dignissimos tempora 
              dolorem quas est ipsa. Aut consequatur nulla qui nobis debitis ratione nam. Nihil placeat veniam qui ut sed 
              rerum ea. Praesentium quasi eligendi consectetur nobis fugit est distinctio sit.
              Cum nesciunt ducimus consectetur atque illo sunt.
              Qui ullam provident a ab. Minima impedit dolore laborum amet. Voluptas eaque architecto quia mollitia pariatur et ut.
              Sapiente iure laboriosam et.`,
      speed: 110,
      cursor: true,
      cursorSpeed: 350
      // cursorStyle: &#9623;
    }, result => {
      this.text = result
    })
  },
  beforeDestroy() {
    jsTypeText.stop()
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
