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
    data() {
        return {
            caption: {
                id: null,
                body: '',
                published: false
            },
            submitted: false
        }
    },
    methods: {
        // onSubmit(e) {
        //     e.preventDefault()
        //     if (!this.text) {
        //         alert('Please add a caption')
        //         return
        //     }
        //     const newCaption = {
        //         text: this.text
        //     }
        //     this.$emit('add-caption', newCaption)
        //     this.text = ''
        // },
       addCaption(e) {
           e.preventDefault()
           const requestOptions = {
               method: 'POST',
               headers: { 'Content-type': 'application/json'},
               mode: 'cors',
               body: JSON.stringify(this.caption)
           }
           fetch('http://localhost:5000/api/addCaption', requestOptions)
            .then(response => response.json())
            .then(data => (this.caption.id = data.id))
            this.caption = {}
        }
    }
}
</script>

<style scoped>
</style>