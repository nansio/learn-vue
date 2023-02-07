<template>
  <div class="video-demo">
    <div class="video-container">
      <VideoPlayer :options="videoOptions" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'VideoPlayerDemo',
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        loop: true,
        responsive: true,
        sources: [
          {
            src: 'https://cdn.ele-ai.com/a508ce6eba844e94a1d2ad8db2d89f52/a6dac44e8a5e4a0eb602931e0d23d6d2-3ba621fa011bce0dfe4663431a532187-ld.m3u8',
            type: 'application/x-mpegURL'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.video-demo{
  width: 100%;
  height: calc(100vh - 50px);
  padding: 16px;
  // border: 1px dashed red;
  .video-container{
    width: 500px;
    border: 3px dashed gray ;
  }
}
</style>
