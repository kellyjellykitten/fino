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
                                    <router-link :to="{name: 'image', params: {image: JSON.stringify(this.images[image.id]), id: image.id}}" class="btn btn-sm btn-outline-secondary">View</router-link>
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

export default {
  name: 'ImageFeed',
  data() {
    return {
      images: []
    };
  },
  watch: {
      images() {
          this.images.forEach(async image => {
                let imageRes = await this.getImage(image.id)
                
                let reader = new FileReader();
                reader.onload = () => {
                    // console.log('read')
                    this.images[image.id].url = reader.result
                }
                reader.readAsDataURL(imageRes); 
          })
      }
  },
  methods: {
    async getImage(id) {
        const res = await fetch(`http://localhost:5000/api/image/${id}`, {
                method: 'GET',
                headers: {
                'Content-type': 'image/jpeg',
                },
                mode: 'cors'
            })
        const data = await res.blob()
        return data
    },
    async getImages() {
        const res = await fetch(`http://localhost:5000/api/images`, {
                method: 'GET',
                headers: {
                'Content-type': 'application/json',
                },
                mode: 'cors'
            })
        const data = await res.json()
        let payload = {
            'images': data,
        }
        this.$store.dispatch('img/loadImages', payload)
        return data
    }
  },
  async created() {
      let storeImages = JSON.parse(this.$store.state.img.images)
      storeImages = storeImages["images"]
      if (storeImages == []) {
        //   console.log('about to req')
          this.images = await this.getImages()
      } else {
          this.images = storeImages
      }
  },
};
</script>

