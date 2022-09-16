import { createStore } from "vuex";

export default createStore({
  state: {
    images: [],
  },
  getters: {},
  mutations: {},
  actions: {
    async fetchFlickrFeed() {
      const response = fetch(
        "https://www.flickr.com/services/feeds/photos_public.gne?format=json"
      );
      const data = await response.json();
      this.images = data;
      console.log(this.images);
    },
  },
  modules: {},
});
