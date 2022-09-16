<template>
  <div class="container">
    <div>
      <h1>TEST</h1>
      <tbody>
        <td v-if="loading">Loading...</td>
        <ul v-else>
          <td v-for="(image, index) in images" :key="index">
            <img :src="image.url_n" alt="" />
          </td>
        </ul>
      </tbody>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config.js";

export default {
  name: "ImageFeed",
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
<style scoped></style>
