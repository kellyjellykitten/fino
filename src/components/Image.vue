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
            captions: []
        }
    },
    created() {
        console.log('image prp', JSON.parse(this.image))
        this.singleImage = JSON.parse(this.image)
        this.captions = [
                {
                    id: 1,
                    name: 'eclipseiscute420',
                    text: 'Eclipse has finally taken a stand against her worst enemy.'
                },
                {
                    id: 2,
                    name: 'xX_thebigboy_Xx',
                    text: 'Enter edgy Aleppo comment here.'
                },
                {
                    id: 3,
                    name: 'catmomma69',
                    text: 'Honestly, an email would have sufficed.'
                }
            ]
    },
    methods: {
        async makeBackendRequest(caption){
            const res = await fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                mode: 'cors',
                body: JSON.stringify(caption.text),
            })
            const data = await res.json()
            console.log('res', data)
        },
        addCaption(caption) {
            this.captions = [...this.captions, caption]
            this.makeBackendRequest(caption)
        }
        
    },
}
</script>

<style scoped>

</style>