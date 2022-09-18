<template>
  <div class="container-fluid">
    <TopBar />
    <div class="row">
      <ImageFeed />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageFeed from "../components/organisms/ImageFeed.vue";
import TopBar from "../components/organisms/TopBar.vue";

export default {
  name: "HomeView",
  components: {
    ImageFeed,
    TopBar,
  },
};
</script>

<style scoped></style>
