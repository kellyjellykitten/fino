<template>
  <section class="jumbotron text-center">
    <div class="container">
        <h1 class="display-4">Home</h1>
        <br>
        <p class="lead text-muted">
          Welcome to my Caption Contest website! Click the "View" button below each photo to read its captions and submit your own! 
        </p>
        <!-- <p>
          <a href="#" class="btn btn-primary my-2">Button maybe</a>
        </p> -->
    </div>
  </section>
  <ImageFeed />
</template>

<script>
import ImageFeed from './ImageFeed.vue'

export default {
  name: 'HomePage',
  components: {
    ImageFeed
  }
}
</script>