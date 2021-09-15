<template>
    <div class="my-3 p-3 bg-white rounded shadow-sm" v-on:addCaption=addCaption()>
        <h4 class="border-bottom border-gray pb-2 mb-0">Submitted Captions</h4>
        <div :key="caption.id" v-for="caption in captions" class="my-3 p-3 bg-white rounded shadow-sm">
            <Caption :caption="caption" />
        </div>
    </div>
</template>

<script>
import Caption from './Caption.vue'

export default {
    name: 'Captions',
    components: {
        Caption
    },
    props: {
        captions: Array
    }
}
</script>

<style scoped>
</style>