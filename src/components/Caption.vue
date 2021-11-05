<template>
  <div class="media text-muted pt-3">
    <p class="media-body pb-3 mb-0 1h-125">
        <strong class="d-block text-gray-dark">{{ caption.user_name }}</strong>
        {{ caption.body }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Caption',
  props: {
    caption: Object
  },
}
</script>

<style scoped>
</style>