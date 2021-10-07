<template>
    <div class="bg-light">
        <div class="container">
            <div class="py-5 text-center">
                <h2>
                    {{ singleImage.title }}
                </h2>
                <img :src="singleImage.url" class="img-fluid">
            </div>
            <Captions :captions="captions" />
            <CaptionForm  @add-caption="addCaption" />
        </div>
    </div>
</template>

<script>
import Captions from './Captions.vue'
import CaptionForm from './CaptionForm.vue'

export default {
    name: 'Image',
    components: {
        Captions,
        CaptionForm
    },
    props: {
        image: String
    },
    data() {
        return {
            singleImage: {},
        }
    },
    // methods: {
    //     // addCaption(caption) {
    //     //     this.captions = [...this.captions, caption]
    //     //     this.makeBackendRequest(caption)
    //     // }
    //     async addCaption(caption) {
    //         const res = await fetch(`http://localhost:5000/api/addCaption`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json',
    //             },
    //             mode: 'cors',
    //             body: JSON.stringify(caption),
    //         })
    //         const data = await res.json()
    //         this.captions = [...this.captions, data]
    //     },
    //     async fetchCaptions() {
    //         const res = await fetch(`http://localhost:5000/api/captions`)
    //         console.log('hi', res)
    //         const data = await res.json()
    //         return data
    //     },
    //     async fetchCaption(id) {
    //         const res = await fetch(`http://localhost:5000/api/captions/${id}`)
    //         const data = await res.json()
    //         return data
    //     }   
    // },
    created() {
        console.log('image prp', JSON.parse(this.image))
        this.singleImage = JSON.parse(this.image)
    },
}
</script>

<style scoped>

</style>