<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div v-for="image in images" :key="image.id" class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img :src="images[image.id].url" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">
                                {{ image.title }}
                            </h5>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <router-link :to="`/image/${image.id}`" class="btn btn-sm btn-outline-secondary">View</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import images from '@/images.json';

export default {
  name: 'ImageFeed',
  data() {
    return {
      images: []
    };
  },
  watch: {
      images() {
          console.log('images', this.images)
          this.images.forEach(async image => {
                let imageRes = await this.getImage(image.id)
                console.log('after get request', imageRes)
                let reader = new FileReader();
                reader.onload = () => {
                    console.log('read')
                    this.images[image.id].url = reader.result
                }
                reader.readAsDataURL(imageRes); 
          })
      }
  },
  methods: {
    // getImg(filename) {
    //     return require(`../assets/images/${filename}`)
    // },
    async getImage(id) {
        // const res = await fetch('/api/image')
        // const data = await res.json()
        // console.log('hhhhh', data)
        // return data
        const res = await fetch(`http://localhost:5000/api/image/${id}`, {
                method: 'GET',
                headers: {
                'Content-type': 'image/jpeg',
                },
                mode: 'cors'
            })
        const data = await res.blob()
        console.log('data', data)
        return data
    },
    async getImages() {
        // const res = await fetch('/api/image')
        // const data = await res.json()
        // console.log('hhhhh', data)
        // return data
        const res = await fetch(`http://localhost:5000/api/images`, {
                method: 'GET',
                headers: {
                'Content-type': 'application/json',
                },
                mode: 'cors'
            })
        const data = await res.json()
        console.log(data)
        return data
    }
  },
  async created() {
      this.images = await this.getImages()
  },
};
</script>

