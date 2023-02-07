<template>
  <div class="video-player-wrapper">
    <video ref="VideoPlayerRef" class="video-js vjs-fluid" />
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
  name: 'VideoPlayer',
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      player: null
    }
  },
  mounted() {
    this.player = videojs(this.$refs.VideoPlayerRef, this.options, () => {
      this.player.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss" scoped>
.video-player-wrapper{
  width: 100%;
  height: 100%;
}
</style>
