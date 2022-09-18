<template>
  <div
    class="gallery col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto"
    v-for="(image, index) in images"
    :key="index"
  >
    <div class="card" id="imageCard">
      <div>
        <img :src="image.url_n" alt="" id="flickrImg" />
      </div>
      <div class="ml-auto mr-auto" id="cardCaption">
        <p>
          Taken By: <strong>{{ image.ownername }}</strong>
        </p>
        <p>Taken On: {{ image.datetaken }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../../config.js";

export default {
  name: "ImageFeed",
  components: {},
  data() {
    return {
      loading: false,
      images: [],
    };
  },
  methods: {
    loadImages() {
      this.loading = true;
      this.fetchImages()
        .then((response) => {
          console.log(response);
          this.images = response.data.photos.photo;
          this.loading = false;
        })
        .catch((err) => {
          console.warn("Error: ", err);
        });
    },
    fetchImages() {
      return axios({
        method: "get",
        url: "https://api.flickr.com/services/rest",
        params: {
          method: "flickr.photos.search",
          api_key: config.api_key,
          tags: "cats",
          extras: "url_n, url_o, owner_name, date_taken, views",
          page: 1,
          format: "json",
          nojsoncallback: 1,
          per_page: 30,
        },
      });
    },
  },
  computed: {},
  beforeMount() {
    this.loadImages();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imageCard {
  width: 20rem;
  height: 20rem;
  overflow: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow-x: hidden;
  overflow-y: hidden;
  box-shadow: 0.25px 0.25px black;
}

.gallery {
}

#flickrImg {
  width: 20rem;
  height: 15rem;
}

#cardCaption {
  margin-left: auto;
  margin-right: auto;
}
</style>
