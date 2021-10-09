<template>
    <div class="my-3 p-3 bg-white rounded shadow-sm">
        <form @submit="addCaption" class="form-group">
            <h4 class="pb-2 mb-0">Enter Caption</h4>
            <label class="sr-only">Caption</label>
            <input 
                type="text"
                class="form-control"
                id="body"
                required
                v-model="caption.body"
                name="body"
                placeholder="type here..."
            />
            <input
                type="submit"
                value="Submit Caption"
                class="btn btn-block"
            />
        </form>
    </div>
</template>

<script>
export default {
    name: 'CaptionForm',
    props: {
        image: {}
    },
    data() {
        return {
            caption: {
                id: null,
                body: '',
                image_id: this.image.id,
                published: false
            },
            submitted: false
        }
    },
    methods: {
       async addCaption(e) {
           e.preventDefault()
           const requestOptions = {
               method: 'POST',
               headers: { 'Content-type': 'application/json'},
               mode: 'cors',
               body: JSON.stringify(this.caption)
            //    image_id: JSON.stringify(this.image.id)
           }
           const res = await fetch('http://localhost:5000/api/addCaption', requestOptions)
            
            // .then(response => {
            //         console.log('response', response.json())
            //     })
            // .then(data => (this.caption.id = data.id))
            console.log('res', res)
            console.log('json', res.json())
            console.log('condition', res.status == 200)
            if (res.status == 200) {
                this.$emit('captionAdded')
            }
            this.caption = {}
        }
    }
}
</script>

<style scoped>
</style>