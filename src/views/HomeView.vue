<template>
  <div class="container-fluid">
    <TopBar />
    <div class="row">
      <div class="column">
        <ImageFeed />
      </div>
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

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  display: contents;
}
.column img {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
}
</style>
