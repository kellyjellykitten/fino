<template>
    <div class="my-3 p-3 bg-white rounded shadow-sm">
        <form @submit="onSubmit" class="form-group">
            <h4 class="pb-2 mb-0">Enter Caption</h4>
            <label class="sr-only">Caption</label>
            <input type="text" class="form-control" v-model="text" name="text" placeholder="type here..." />
            <input type="submit" value="Submit Caption" class="btn btn-block" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'CaptionForm',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
            if (!this.text) {
                alert('Please add a caption')
                return
            }
            const newCaption = {
                id: Math.floor(Math.random() * 100000),
                text: this.text
            }
            this.$emit('add-caption', newCaption)
            this.text = ''
        },
    },
}
</script>

<style scoped>
</style>