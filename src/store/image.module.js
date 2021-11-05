const images = localStorage.getItem('images');
console.log(JSON.parse(images))
const initialState = images
  ? { status: { imagesLoaded: true }, images: images}
  : { status: { imagesLoaded: false }, images: [] };


export const img = {
  namespaced: true,
  state: initialState,
  actions: {
    loadImages({ commit }, images) {
      commit('saveImages', images)
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem("images", JSON.stringify(images));
          resolve();
        }, 1000);
      });
    },
    loadImage({ commit }, image) {
      commit('imageSuccess', {image: image.id})
      return new Promise(resolve => {
        setTimeout(() => {
          localStorage.setItem("image", image.id);
          resolve();
        }, 1000);
      });
    }
  },
  mutations: {
    saveImages(state, { images }) {
      state.status.imagesLoaded = true;
      state.images = images;
    },
    imageSuccess(state, { image }) {
      state.status.imagesLoaded = true;
      state.image = image;
    }
  }
};

