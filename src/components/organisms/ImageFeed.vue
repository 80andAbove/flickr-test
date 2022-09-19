<template>
  <div
    class="gallery col-lg-4 col-md-6 col-sm-12 ml-auto mr-auto"
    v-for="(image, index) in images"
    :key="index"
  >
    <div class="card" id="imageCard">
      <div>
        <img :src="image.url_n" alt="" id="flickrImg" @click="image" />
      </div>
      <button
        @click="isActive = !isActive"
        :class="{ active: isActive }"
        class="btn btn-primary"
        id="toggleButton"
      >
        {{ isActive ? "See More Details" : "Close Details" }}
      </button>
      <div v-if="!isActive">
        <ImageDetails :image="image" />
      </div>
    </div>
  </div>
</template>

<script>
import ImageDetails from "./ImageDetails.vue";
export default {
  name: "ImageFeed",
  data() {
    return {
      isActive: true,
    };
  },
  components: {
    ImageDetails,
  },
  methods: {
    toggle() {
      this.isActive = this.isActive = !this.enable;
    },
    getImage() {
      this.images.find((image) => image.id === this.id);
    },
  },
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  created() {
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

#flickrImg {
  width: 20rem;
  height: 15rem;
}

#toggleButton {
}

.invisibility {
  visibility: hidden;
}
</style>
