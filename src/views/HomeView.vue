<template>
  <div class="home">
    <ImageFeed msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import ImageFeed from "../components/organisms/ImageFeed.vue";

export default {
  name: "HomeView",
  components: {
    ImageFeed,
  },
};
</script>
