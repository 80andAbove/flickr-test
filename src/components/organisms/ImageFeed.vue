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
  <router-view></router-view>
</template>

<script>
export default {
  name: "ImageFeed",
  components: {},
  methods: {},
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  mounted() {
    this.$store.dispatch("fetchImages");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#imageCard {
  width: 20rem;
  height: 23rem;
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
