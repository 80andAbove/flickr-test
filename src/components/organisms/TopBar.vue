<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark nav-fill w-100 mb-5 d-flex justify-content-between"
    id="topBar"
  >
    <div>
      <a href="/">Home</a>
    </div>
    <div>
      <SearchArea id="searchArea" />
    </div>
  </nav>
</template>

<script>
import SearchArea from "../molecules/SearchArea.vue";
export default {
  name: "TopBar",
  components: { SearchArea },
};
</script>

<style scoped>
#topBar {
  background-color: black;
  white-space: nowrap;
}

#searchArea {
  display: flex;
  justify-content: end;
}
</style>
