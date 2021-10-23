<template>
  <section class="jumbotron text-center">
    <div class="container">
        <h1 class="display-4">Home</h1>
        <p class="lead text-muted">
          Eclipse rules, Aleppo drools. She is the best bunny. Of all the bunnies.
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