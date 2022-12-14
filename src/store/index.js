import axios from "axios";
import config from "../../config.js";
import { createStore } from "vuex";

export default createStore({
  state: {
    images: [],
  },
  getters: {
    allImages: (state) => state.images,
    getImageById: (state) => (id) => {
      return state.images.find((image) => image.id === id);
    },
  },
  mutations: {},
  actions: {
    async fetchImages() {
      await axios
        .get(
          `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config.api_key}&format=json&nojsoncallback=1&tags=cats&extras=url_n,owner_name,date_taken&page=1&per_page=30`
        )
        .then((response) => {
          this.state.images = response.data.photos.photo;
        })
        .catch((err) => {
          console.warn("Error: ", err);
        });
    },
  },
  modules: {},
});
