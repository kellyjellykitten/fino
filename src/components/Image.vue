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
            <div v-if="isLoggedIn">
                <CaptionForm
                    :image="singleImage"
                    @caption-added="this.refreshCaptions(singleImage.id)"
                />
            </div>
            <div v-if="!isLoggedIn" class="py-5 text-center">
                <h3>
                    Sign in to add a caption!
                </h3>
            </div>
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
            captions: [],
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.auth.user
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
        let storeImages = JSON.parse(this.$store.state.img.images)
        storeImages = storeImages["images"]
        console.log('store images', storeImages)
        console.log('router', this.$router.currentRoute.value.params["id"])
        this.singleImage = storeImages[this.$router.currentRoute.value.params["id"]]
        console.log('single image', this.singleImage)
        this.captions = await this.fetchCaption(this.singleImage["id"])
    },
}
</script>

<style scoped>

</style>