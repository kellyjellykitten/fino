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
    props: {
        captions: Array
    },
    components: {
        Caption
    },
    // methods: {
    //     async fetchCaptions() {
    //         const res = await fetch(`http://localhost:5000/api/captions`)
    //         console.log('hi', res)
    //         const data = await res.json()
    //         console.log('data:', data)
    //         return data
    //     },
    //     async fetchCaption(id) {
    //         const res = await fetch(`http://localhost:5000/api/captions/${id}`)
    //         const data = await res.json()
    //         return data
    //     }   
    // },
    // async created() {
    //     this.captions = await this.fetchCaptions()
    //     console.log('captions:', this.captions)
    // },
}
</script>

<style scoped>
</style>