<template>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row">
                <div v-for="image in images" :key="image.id" class="col-lg-4">
                    <div class="card" style="width: 18rem;">
                        <img :src="getImg(image.filename)" class="card-img-top">
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
import images from '@/images.json';

export default {
  name: 'ImageFeed',
  data() {
    return {
      images,
    };
  },
  methods: {
    getImg(filename) {
        return require(`../assets/images/${filename}`)
    },
    async getImage() {
        const res = await fetch('/api/image')
        const data = await res.json()
        console.log('hhhhh', data)
        return data
    }
  },
};
</script>

