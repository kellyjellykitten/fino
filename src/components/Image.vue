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
            <CaptionForm  :image="singleImage" @caption-added="this.refreshCaptions(singleImage.id)" />
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
        image: String,
    },
    data() {
        return {
            singleImage: {},
            captions: []
        }
    },
    methods: {
        async addCaption(caption) {
            const res = await fetch(`http://localhost:5000/api/addCaption`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(caption),
            })
            await res.json()
            .then((data) => {
                console.log(data)
            })
        },
        async fetchCaptions() {
            const res = await fetch(`http://localhost:5000/api/captions`)
            const data = await res.json()
            return data
        },
        async fetchCaption(id) {
            console.log('fetching caption with id', id)
            const res = await fetch(`http://localhost:5000/api/captions/${id}`)
            const data = await res.json()
            return data
        },
        async refreshCaptions(id) {
            this.captions = await this.fetchCaption(id)
        }   
    },
    async created() {
        // console.log('image prp', JSON.parse(this.image))
        this.singleImage = JSON.parse(this.image)
        this.captions = await this.fetchCaption(this.singleImage.id)
        console.log('captions:', this.captions)
    },
}
</script>

<style scoped>

</style>